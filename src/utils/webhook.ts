// Webhook Security Utilities
// Handle webhook verification and security

import { paymentConfig } from '../config/payment';

export interface WebhookPayload {
  id: string;
  status: 'paid' | 'failed' | 'authorized' | 'voided' | 'pending';
  amount: number;
  currency: string;
  description: string;
  source: {
    type: string;
    message?: string;
  };
  created: string;
  updated: string;
  fee?: number;
  invoice_id?: string;
  metadata?: {
    customer_name?: string;
    customer_email?: string;
    customer_phone?: string;
    service_type?: string;
    [key: string]: unknown;
  };
}

export interface WebhookHeaders {
  'x-moyasar-signature'?: string;
  'content-type'?: string;
  'user-agent'?: string;
  [key: string]: unknown;
}

/**
 * Verify webhook signature using Secret Token
 * @param payload - The webhook payload from Moyasar
 * @param signature - The signature from headers
 * @param secret - The secret token configured in Moyasar
 * @returns boolean indicating if signature is valid
 */
export const verifyWebhookSignature = (
  payload: string,
  signature: string,
  secret: string
): boolean => {
  try {
    // For client-side verification, we'll use a basic approach
    // In a real server environment, you'd use proper HMAC verification
    
    // Basic verification - check if signature contains expected elements
    const expectedSignature = btoa(`${secret}:${payload.length}`);
    
    console.log('🔐 Webhook signature verification:', {
      received: signature,
      expected: expectedSignature,
      payloadLength: payload.length,
    });
    
    return signature === expectedSignature;
  } catch (error) {
    console.error('❌ Webhook signature verification failed:', error);
    return false;
  }
};

/**
 * Process webhook payload
 * @param payload - The webhook payload
 * @param headers - The webhook headers
 * @returns processed webhook data
 */
export const processWebhook = (
  payload: WebhookPayload,
  headers: WebhookHeaders
): {
  success: boolean;
  data?: WebhookPayload;
  error?: string;
} => {
  try {
    // Verify signature if available
    const signature = headers['x-moyasar-signature'];
    if (signature && paymentConfig.webhookSecret) {
      const isValid = verifyWebhookSignature(
        JSON.stringify(payload),
        signature,
        paymentConfig.webhookSecret
      );
      
      if (!isValid) {
        console.error('❌ Invalid webhook signature');
        return {
          success: false,
          error: 'Invalid webhook signature',
        };
      }
    }
    
    // Validate payload structure
    if (!payload.id || !payload.status) {
      console.error('❌ Invalid webhook payload structure');
      return {
        success: false,
        error: 'Invalid webhook payload structure',
      };
    }
    
    console.log('✅ Webhook processed successfully:', {
      id: payload.id,
      status: payload.status,
      amount: payload.amount / 100, // Convert from halalas
      customer: payload.metadata?.customer_name,
    });
    
    return {
      success: true,
      data: payload,
    };
  } catch (error) {
    console.error('❌ Webhook processing failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

/**
 * Get webhook status message in Arabic
 * @param status - Payment status
 * @returns Arabic status message
 */
export const getWebhookStatusMessage = (status: string): string => {
  switch (status) {
    case 'paid':
      return 'تم الدفع بنجاح';
    case 'failed':
      return 'فشل في الدفع';
    case 'authorized':
      return 'تم تأكيد الدفع';
    case 'voided':
      return 'تم إلغاء الدفع';
    case 'pending':
      return 'الدفع في الانتظار';
    default:
      return 'حالة غير معروفة';
  }
};

/**
 * Format webhook data for display
 * @param payload - The webhook payload
 * @returns formatted data for UI
 */
export const formatWebhookData = (payload: WebhookPayload) => {
  return {
    paymentId: payload.id,
    status: payload.status,
    amount: payload.amount / 100, // Convert from halalas
    currency: payload.currency,
    customerName: payload.metadata?.customer_name,
    customerEmail: payload.metadata?.customer_email,
    customerPhone: payload.metadata?.customer_phone,
    serviceType: payload.metadata?.service_type,
    description: payload.description,
    createdAt: new Date(payload.created).toLocaleString(),
    updatedAt: new Date(payload.updated).toLocaleString(),
    fee: payload.fee ? payload.fee / 100 : 0,
    statusMessage: getWebhookStatusMessage(payload.status),
  };
};

/**
 * Log webhook event for debugging
 * @param event - Event type
 * @param data - Event data
 */
export const logWebhookEvent = (event: string, data: unknown) => {
  console.log(`🔔 Webhook Event: ${event}`, {
    timestamp: new Date().toISOString(),
    event,
    data,
  });
};

export default {
  verifyWebhookSignature,
  processWebhook,
  getWebhookStatusMessage,
  formatWebhookData,
  logWebhookEvent,
}; 