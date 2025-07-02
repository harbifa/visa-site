// Payment Configuration
// Centralized configuration for Moyasar payment integration

export interface PaymentConfig {
  apiUrl: string;
  publishableKey: string;
  secretKey: string;
  currency: string;
  environment: 'sandbox' | 'production';
  callbackUrl: string;
  successUrl?: string;
  failureUrl?: string;
}

// Default configuration for sandbox environment
const SANDBOX_CONFIG: PaymentConfig = {
  apiUrl: 'https://api.moyasar.com/v1',
  publishableKey: 'pk_test_qGA8XATWbQZHJVbFdFdWDhur6xm9dUJjEQAib1FL',
  secretKey: 'sk_test_HjibPiUhUdnzkEkGEyYKPttNE45E12gWBsQlkFN1',
  currency: 'SAR',
  environment: 'sandbox',
  callbackUrl: `${window.location.origin}/payment/callback`,
  successUrl: `${window.location.origin}/payment/success`,
  failureUrl: `${window.location.origin}/payment/failed`,
};

// Production configuration (replace with real keys)
const PRODUCTION_CONFIG: PaymentConfig = {
  apiUrl: 'https://api.moyasar.com/v1',
  publishableKey: 'pk_live_YOUR_LIVE_PUBLISHABLE_KEY', // Replace with live key
  secretKey: 'sk_live_YOUR_LIVE_SECRET_KEY', // Replace with live key
  currency: 'SAR',
  environment: 'production',
  callbackUrl: `${window.location.origin}/payment/callback`,
  successUrl: `${window.location.origin}/payment/success`,
  failureUrl: `${window.location.origin}/payment/failed`,
};

// Determine environment from process.env or default to sandbox
const getEnvironment = (): 'sandbox' | 'production' => {
  // Check environment variable
  const env = import.meta.env.VITE_PAYMENT_ENV;
  if (env === 'production') {
    return 'production';
  }
  return 'sandbox';
};

// Get current configuration based on environment
export const getPaymentConfig = (): PaymentConfig => {
  const environment = getEnvironment();
  
  if (environment === 'production') {
    console.log('🏭 Using PRODUCTION payment configuration');
    return PRODUCTION_CONFIG;
  } else {
    console.log('🧪 Using SANDBOX payment configuration');
    return SANDBOX_CONFIG;
  }
};

// Export current config
export const paymentConfig = getPaymentConfig();

// Helper functions
export const isProduction = (): boolean => {
  return paymentConfig.environment === 'production';
};

export const isSandbox = (): boolean => {
  return paymentConfig.environment === 'sandbox';
};

// Amount conversion utilities
export const sarToHalalas = (amount: number): number => {
  return Math.round(amount * 100);
};

export const halalasToSar = (halalas: number): number => {
  return halalas / 100;
};

// Validation utilities
export const validateAmount = (amount: string): { isValid: boolean; message?: string } => {
  const numAmount = parseFloat(amount);
  
  if (isNaN(numAmount)) {
    return { isValid: false, message: 'Please enter a valid number' };
  }
  
  if (numAmount <= 0) {
    return { isValid: false, message: 'Amount must be greater than 0' };
  }
  
  if (numAmount > 100000) {
    return { isValid: false, message: 'Amount cannot exceed 100,000 SAR' };
  }
  
  if (numAmount < 1) {
    return { isValid: false, message: 'Minimum amount is 1 SAR' };
  }
  
  return { isValid: true };
};

export const validateEmail = (email: string): { isValid: boolean; message?: string } => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email) {
    return { isValid: false, message: 'Email is required' };
  }
  
  if (!emailRegex.test(email)) {
    return { isValid: false, message: 'Please enter a valid email address' };
  }
  
  return { isValid: true };
};

export const validatePhone = (phone: string): { isValid: boolean; message?: string } => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  
  if (!phone) {
    return { isValid: false, message: 'Phone number is required' };
  }
  
  // Remove spaces and dashes for validation
  const cleanPhone = phone.replace(/[\s-]/g, '');
  
  if (!phoneRegex.test(cleanPhone)) {
    return { isValid: false, message: 'Please enter a valid phone number' };
  }
  
  return { isValid: true };
};

// Service type options
export const serviceTypes = [
  'Express Entry Visa',
  'Provincial Nomination Program',
  'Study Visa',
  'Visit Visa',
  'Work Permit',
  'Family/Spouse Visa',
  'Business Visa',
  'Consultation Services',
  'Document Translation',
  'Other Services',
] as const;

export type ServiceType = typeof serviceTypes[number];

// Payment method information
export const paymentMethods = [
  {
    id: 'visa',
    name: 'Visa',
    icon: '💳',
    color: 'bg-blue-600',
  },
  {
    id: 'mastercard',
    name: 'Mastercard',
    icon: '💳',
    color: 'bg-red-600',
  },
  {
    id: 'mada',
    name: 'Mada',
    icon: '💳',
    color: 'bg-green-600',
  },
  {
    id: 'applepay',
    name: 'Apple Pay',
    icon: '🍎',
    color: 'bg-gray-800',
  },
  {
    id: 'stcpay',
    name: 'STC Pay',
    icon: '📱',
    color: 'bg-purple-600',
  },
  {
    id: 'bank',
    name: 'Bank Transfer',
    icon: '🏦',
    color: 'bg-indigo-600',
  },
] as const;

// Test card numbers for sandbox
export const testCards = {
  success: '4111111111111111',
  failure: '4000000000000002',
  pending: '4000000000000069',
  declined: '4000000000000051',
} as const;

export default paymentConfig; 