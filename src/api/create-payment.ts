// API Route for creating payment with Moyasar
// This handles the server-side communication with Moyasar API

import { PaymentData, createMoyasarPayment, handlePaymentError, PaymentError } from '../utils/moyasar';

export interface PaymentRequest {
  name: string;
  email: string;
  phone: string;
  amount: string; // String from form input
  serviceType: string;
  description?: string;
}

export interface PaymentResponse {
  success: boolean;
  url?: string;
  paymentId?: string;
  error?: PaymentError;
}

/**
 * Create a new payment session
 * This function would typically be called from a backend API endpoint
 * For this frontend-only implementation, we're calling Moyasar directly
 */
export const createPayment = async (request: PaymentRequest): Promise<PaymentResponse> => {
  try {
    // Validate request data
    if (!request.name || !request.email || !request.phone || !request.amount || !request.serviceType) {
      return {
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Please fill in all required fields',
        },
      };
    }

    // Validate amount
    const amount = parseFloat(request.amount);
    if (isNaN(amount) || amount <= 0) {
      return {
        success: false,
        error: {
          code: 'INVALID_AMOUNT',
          message: 'Please enter a valid amount greater than 0',
        },
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(request.email)) {
      return {
        success: false,
        error: {
          code: 'INVALID_EMAIL',
          message: 'Please enter a valid email address',
        },
      };
    }

    // Prepare payment data
    const paymentData: PaymentData = {
      name: request.name.trim(),
      email: request.email.trim().toLowerCase(),
      phone: request.phone.trim(),
      amount: amount,
      serviceType: request.serviceType,
      description: request.description?.trim() || '',
    };

    console.log('🚀 Creating payment for:', {
      customer: paymentData.name,
      service: paymentData.serviceType,
      amount: `${paymentData.amount} SAR`,
    });

    // Create payment with Moyasar
    const moyasarResponse = await createMoyasarPayment(paymentData);

    console.log('✅ Payment created successfully:', {
      paymentId: moyasarResponse.id,
      amount: moyasarResponse.amount / 100, // Convert back from halalas
      status: moyasarResponse.status,
    });

    return {
      success: true,
      url: moyasarResponse.url,
      paymentId: moyasarResponse.id,
    };

  } catch (error) {
    console.error('❌ Payment creation failed:', error);
    
    const paymentError = handlePaymentError(error);
    
    return {
      success: false,
      error: paymentError,
    };
  }
};

/**
 * Simulate backend API call (for development/testing)
 * This mimics what would happen if we had a proper backend API
 */
export const callPaymentAPI = async (request: PaymentRequest): Promise<PaymentResponse> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real application, this would be a fetch call to your backend:
  // const response = await fetch('/api/create-payment', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(request),
  // });
  // return response.json();
  
  // For now, we'll call the payment creation directly
  return createPayment(request);
};

// Alternative simple integration using hosted checkout
export const createSimplePaymentUrl = (request: PaymentRequest): string => {
  const amount = parseFloat(request.amount);
  if (isNaN(amount) || amount <= 0) {
    throw new Error('Invalid amount');
  }

  const params = new URLSearchParams({
    publishable_api_key: 'pk_test_qGA8XATWbQZHJVbFdFdWDhur6xm9dUJjEQAib1FL',
    amount: (amount * 100).toString(), // Convert to halalas
    currency: 'SAR',
    description: `${request.serviceType}${request.description ? ` - ${request.description}` : ''}`,
    callback_url: `${window.location.origin}/payment/callback`,
    'metadata[customer_name]': request.name,
    'metadata[customer_email]': request.email,
    'metadata[customer_phone]': request.phone,
    'metadata[service_type]': request.serviceType,
  });

  return `https://checkout.moyasar.com?${params.toString()}`;
}; 