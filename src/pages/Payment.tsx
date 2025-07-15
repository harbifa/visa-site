import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, ArrowLeft, ExternalLink, Shield, AlertTriangle, Lock, CheckCircle } from 'lucide-react';
import { isProductionReady, paymentConfig } from '../config/payment';

// Extend window interface for Moyasar
declare global {
  interface Window {
    Moyasar: {
      init: (config: {
        element: string;
        amount: number;
        currency: string;
        description: string;
        publishable_api_key: string;
        callback_url: string;
        methods: string[];
        metadata: Record<string, string>;
        on_completed: (payment: { id: string; status: string }) => void;
      }) => void;
    };
  }
}

const Payment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    address: '',
    city: '',
    serviceType: '',
    description: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Card form state
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    cardholderName: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setPaymentError(null);
    
    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.phone || !formData.amount || !formData.serviceType) {
        setPaymentError('Please fill in all required fields');
        setIsProcessing(false);
        return;
      }

      const amount = parseFloat(formData.amount);
      if (isNaN(amount) || amount <= 0) {
        setPaymentError('Please enter a valid amount');
        setIsProcessing(false);
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setPaymentError('Please enter a valid email address');
        setIsProcessing(false);
        return;
      }

      // Show payment modal
      setShowPaymentModal(true);
      setIsProcessing(false);
      
    } catch (error) {
      console.error('❌ Form validation error:', error);
      setPaymentError('An error occurred while processing your request. Please try again.');
      setIsProcessing(false);
    }
  };

  const handleCardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setPaymentError(null);

    try {
      // Validate card data
      if (!cardData.cardNumber || !cardData.expiryMonth || !cardData.expiryYear || !cardData.cvv || !cardData.cardholderName) {
        setPaymentError('Please fill in all card details');
        setIsProcessing(false);
        return;
      }

      const amount = parseFloat(formData.amount);
      
      console.log('🚀 Creating Moyasar payment...', {
        customer: formData.name,
        service: formData.serviceType,
        amount: `${amount} SAR`,
      });

      // Check if we're in production mode
      const isProduction = import.meta.env.VITE_PAYMENT_ENV === 'production';
      
      if (isProduction) {
        // Check if production is properly configured
        if (!isProductionReady()) {
          setPaymentError('Payment system is not configured properly. Please contact support.');
          setIsProcessing(false);
          return;
        }
        
        // PRODUCTION: Create payment with Moyasar API
        try {
          const paymentData = {
            amount: amount * 100, // Convert to halalas
            currency: 'SAR',
            description: `Payment for ${formData.serviceType} - ${formData.name}`,
            publishable_api_key: paymentConfig.publishableKey,
            callback_url: `${window.location.origin}/payment-callback`,
            source: {
              type: 'creditcard',
              name: cardData.cardholderName,
              number: cardData.cardNumber.replace(/\s/g, ''),
              month: cardData.expiryMonth,
              year: cardData.expiryYear,
              cvc: cardData.cvv
            },
            metadata: {
              customer_name: formData.name,
              customer_email: formData.email,
              customer_phone: formData.phone,
              service_type: formData.serviceType,
              billing_address: formData.address,
              billing_city: formData.city,
              additional_info: formData.description || 'No additional information'
            }
          };

          console.log('🚀 Creating payment with Moyasar...');
          
          const response = await fetch('https://api.moyasar.com/v1/payments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic ' + btoa(paymentConfig.publishableKey + ':')
            },
            body: JSON.stringify(paymentData)
          });

          const result = await response.json();
          
          if (result.id) {
            console.log('✅ Payment created:', result);
            
            if (result.source && result.source.transaction_url) {
              // Redirect to 3D Secure
              window.location.href = result.source.transaction_url;
            } else {
              // Direct success
              window.location.href = `/payment-callback?id=${result.id}&status=paid`;
            }
          } else {
            console.error('❌ Payment failed:', result);
            setPaymentError(`Payment failed: ${result.message || 'Unknown error'}`);
          }
          
        } catch (error) {
          console.error('❌ Payment error:', error);
          setPaymentError('Payment processing failed. Please try again.');
        }
      } else {
        // DEMO MODE: Show demo message
        setTimeout(() => {
          setShowPaymentModal(false);
          alert('🎯 DEMO MODE: Payment simulation completed successfully!\n\nIn production, this would process a real payment through Moyasar.');
        }, 2000);
      }
      
    } catch (error) {
      console.error('❌ Payment error:', error);
      setPaymentError('An error occurred while processing payment. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    let formattedValue = value;
    
    // Format card number
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').trim();
      if (formattedValue.length > 19) formattedValue = formattedValue.slice(0, 19);
    }
    
    // Format expiry month
    if (name === 'expiryMonth') {
      formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length > 2) formattedValue = formattedValue.slice(0, 2);
      if (parseInt(formattedValue) > 12) formattedValue = '12';
    }
    
    // Format expiry year
    if (name === 'expiryYear') {
      formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length > 4) formattedValue = formattedValue.slice(0, 4);
    }
    
    // Format CVV
    if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length > 3) formattedValue = formattedValue.slice(0, 3);
    }
    
    setCardData(prev => ({ ...prev, [name]: formattedValue }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Secure Online Payment
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete your payment securely using our encrypted payment system powered by Moyasar
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-8">
                <Link 
                  to="/" 
                  className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Customer Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Amount (SAR) *
                      </label>
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter amount in Saudi Riyal"
                        min="1"
                        step="0.01"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Service Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type *
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required
                      >
                        <option value="">Select Service Type</option>
                        <option value="Visa Consultation">Visa Consultation</option>
                        <option value="Document Review">Document Review</option>
                        <option value="Application Processing">Application Processing</option>
                        <option value="Express Entry">Express Entry</option>
                        <option value="Work Permit">Work Permit</option>
                        <option value="Study Permit">Study Permit</option>
                        <option value="Visit Visa">Visit Visa</option>
                        <option value="Immigration Assessment">Immigration Assessment</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Details
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Any additional information about your service request..."
                      />
                    </div>
                  </div>
                </div>

                {/* Billing Address */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing Address</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your address"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your city"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Error Message */}
                {paymentError && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-3" />
                      <span className="text-red-700">{paymentError}</span>
                    </div>
                  </div>
                )}

                {/* Security Info */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <h4 className="font-medium text-blue-900">Secure Payment</h4>
                      <p className="text-sm text-blue-700">
                        After clicking "Proceed to Payment", you will enter your card details in a secure form.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Proceed to Payment
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Payment Summary */}
            {formData.amount && (
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service</span>
                    <span className="font-medium">{formData.serviceType || 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount</span>
                    <span className="font-medium text-green-600">{formData.amount} SAR</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-green-600">{formData.amount} SAR</span>
                  </div>
                </div>
              </div>
            )}

            {/* Help Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">info@alshawamekhimmigration.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">+966501367513</span>
                </div>
                <p className="text-sm text-gray-500">
                  Our support team is available 24/7 to assist you with your payment.
                </p>
              </div>
            </div>

            {/* Accepted Payment Methods */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Accepted Payment Methods</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center p-3 border-2 border-gray-200 rounded-lg">
                  <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    MC
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Mastercard</span>
                </div>
                <div className="flex items-center justify-center p-3 border-2 border-gray-200 rounded-lg">
                  <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    V
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Visa</span>
                </div>
                <div className="flex items-center justify-center p-3 border-2 border-gray-200 rounded-lg">
                  <div className="w-8 h-5 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">
                    AP
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Apple Pay</span>
                </div>
                <div className="flex items-center justify-center p-3 border-2 border-gray-200 rounded-lg">
                  <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                    ST
                  </div>
                  <span className="ml-2 text-sm text-gray-600">STC Pay</span>
                </div>
                <div className="flex items-center justify-center p-3 border-2 border-gray-200 rounded-lg">
                  <div className="w-8 h-5 bg-purple-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    BT
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Bank Transfer</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                All payment methods are processed securely through Moyasar.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto scrollbar-hide">
            <div className="p-6">
              {/* Modal Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Secure Payment</h2>
                <p className="text-gray-600">Amount: {formData.amount} SAR</p>
                <p className="text-sm text-gray-500">Service: {formData.serviceType}</p>
              </div>

              {/* Card Form */}
              <form onSubmit={handleCardSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number *
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={cardData.cardNumber}
                    onChange={handleCardInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Month *
                    </label>
                    <input
                      type="text"
                      name="expiryMonth"
                      value={cardData.expiryMonth}
                      onChange={handleCardInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="12"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year *
                    </label>
                    <input
                      type="text"
                      name="expiryYear"
                      value={cardData.expiryYear}
                      onChange={handleCardInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="2025"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV *
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={cardData.cvv}
                      onChange={handleCardInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name *
                  </label>
                  <input
                    type="text"
                    name="cardholderName"
                    value={cardData.cardholderName}
                    onChange={handleCardInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Security Notice */}
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <h4 className="font-medium text-green-900">SSL Secured</h4>
                      <p className="text-sm text-green-700">Your payment information is protected with bank-level encryption</p>
                    </div>
                  </div>
                </div>

                {/* Error Message */}
                {paymentError && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-3" />
                      <span className="text-red-700">{paymentError}</span>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowPaymentModal(false);
                      setPaymentError(null);
                    }}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 mr-2" />
                        Pay {formData.amount} SAR
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Powered by Moyasar */}
              <div className="text-center mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Powered by <span className="font-semibold">Moyasar</span> - Secure Payment Gateway
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment; 
