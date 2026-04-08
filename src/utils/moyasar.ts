// Moyasar Payment Integration Utility
// Sandbox Environment for Testing

export interface PaymentData {
  name: string;
  email: string;
  phone: string;
  amount: number;
  serviceType: string;
  description?: string;
}

export interface MoyasarPaymentResponse {
  id: string;
  status: string;
  amount: number;
  currency: string;
  description: string;
  source: {
    type: string;
    message: string;
  };
  created: string;
  updated: string;
  fee: number;
  invoice_id: string;
  ip: string;
  callback_url: string;
  success_url: string;
  failure_url: string;
  url: string; // This is the payment URL we need
}

export interface CreatePaymentRequest {
  amount: number; // Amount in halalas (1 SAR = 100 halalas)
  currency: string;
  description: string;
  publishable_api_key: string;
  callback_url: string;
  source: {
    type: string;
    name: string;
    number?: string;
    month?: string;
    year?: string;
    cvc?: string;
  };
  metadata?: {
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    service_type: string;
  };
}

// Import payment configuration
import { paymentConfig } from '../config/payment';

/**
 * Create a payment session with Moyasar
 * @param paymentData - Payment information from the form
 * @returns Promise with payment response including URL
 */
export const createMoyasarPayment = async (paymentData: PaymentData): Promise<MoyasarPaymentResponse> => {
  const { name, email, phone, amount, serviceType, description } = paymentData;

  // Convert amount to halalas (Moyasar expects amount in smallest currency unit)
  const amountInHalalas = Math.round(amount * 100);

  // Prepare the payment request
  const paymentRequest: CreatePaymentRequest = {
    amount: amountInHalalas,
    currency: paymentConfig.currency,
    description: `${serviceType}${description ? ` - ${description}` : ''}`,
    publishable_api_key: paymentConfig.publishableKey,
    callback_url: paymentConfig.callbackUrl,
    source: {
      type: 'creditcard',
      name: name,
    },
    metadata: {
      customer_name: name,
      customer_email: email,
      customer_phone: phone,
      service_type: serviceType,
    },
  };

  try {
    console.log('🚀 Creating Moyasar payment with data:', {
      amount: amountInHalalas,
      currency: 'SAR',
      description: paymentRequest.description,
      customer: name,
    });

    const response = await fetch(`${paymentConfig.apiUrl}/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(paymentConfig.secretKey + ':')}`,
      },
      body: JSON.stringify(paymentRequest),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ Moyasar API Error:', errorData);
      throw new Error(`Payment creation failed: ${errorData.message || response.statusText}`);
    }

    const paymentResponse: MoyasarPaymentResponse = await response.json();
    console.log('✅ Payment created successfully:', paymentResponse);

    return paymentResponse;
  } catch (error) {
    console.error('❌ Error creating payment:', error);
    throw error;
  }
};

/**
 * Alternative method: Create payment URL for hosted checkout
 * This creates a hosted payment page URL for simpler integration
 */
export const createMoyasarCheckoutUrl = (paymentData: PaymentData): string => {
  const { name, email, phone, amount, serviceType, description } = paymentData;
  
  const baseUrl = 'https://checkout.moyasar.com';
  const params = new URLSearchParams({
    publishable_api_key: paymentConfig.publishableKey,
    amount: (amount * 100).toString(), // Convert to halalas
    currency: paymentConfig.currency,
    description: `${serviceType}${description ? ` - ${description}` : ''}`,
    callback_url: paymentConfig.callbackUrl,
    'metadata[customer_name]': name,
    'metadata[customer_email]': email,
    'metadata[customer_phone]': phone,
    'metadata[service_type]': serviceType,
  });

  return `${baseUrl}?${params.toString()}`;
};

// Error handling types
export interface PaymentError {
  code: string;
  message: string;
  details?: unknown;
}

// Helper function to handle payment errors
export const handlePaymentError = (error: unknown): PaymentError => {
  if (error && typeof error === 'object' && 'response' in error) {
    // API error with response
    const apiError = error as { response: { data?: { message?: string } } };
    return {
      code: 'API_ERROR',
      message: apiError.response.data?.message || 'Payment service error',
      details: apiError.response.data,
    };
  } else if (error && typeof error === 'object' && 'request' in error) {
    // Network error
    return {
      code: 'NETWORK_ERROR',
      message: 'Unable to connect to payment service. Please check your internet connection.',
    };
  } else {
    // Other error
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    return {
      code: 'UNKNOWN_ERROR',
      message: errorMessage,
    };
  }
}; 