import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, ArrowLeft, ExternalLink, Shield, AlertTriangle } from 'lucide-react';
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setPaymentError(null);
    
    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.phone || !formData.amount || !formData.serviceType) {
        setPaymentError('Please fill in all required fields');
        return;
      }

      const amount = parseFloat(formData.amount);
      if (isNaN(amount) || amount <= 0) {
        setPaymentError('Please enter a valid amount');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setPaymentError('Please enter a valid email address');
        return;
      }

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
          return;
        }
        
        // PRODUCTION: Use Moyasar
        try {
          console.log('🚀 Starting Moyasar payment flow...');
          
          // Load Moyasar from official source
          const loadMoyasar = async () => {
            if (window.Moyasar) {
              console.log('✅ Moyasar already loaded');
              return;
            }
            
            const script = document.createElement('script');
            script.src = 'https://cdn.moyasar.com/mpf/1.14.0/moyasar.js';
            script.async = true;
            
            return new Promise<void>((resolve, reject) => {
              script.onload = () => {
                console.log('✅ Moyasar loaded successfully');
                resolve();
              };
              script.onerror = () => {
                console.error('❌ Failed to load Moyasar');
                reject(new Error('Failed to load Moyasar'));
              };
              document.head.appendChild(script);
            });
          };
          
          await loadMoyasar();
          
          // Create payment modal
          const modal = document.createElement('div');
          modal.innerHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: center; z-index: 10000;">
              <div style="background: white; padding: 40px; border-radius: 15px; max-width: 500px; width: 90%; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
                <div style="text-align: center; margin-bottom: 30px;">
                  <div style="display: inline-flex; align-items: center; justify-content: center; width: 60px; height: 60px; background: #0369a1; border-radius: 50%; margin-bottom: 15px;">
                    <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                      <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm4.64 0l1.41-1.41L10 12.54l6.36-6.36 1.41 1.41L10 15.36 6.64 12z"/>
                    </svg>
                  </div>
                  <h2 style="color: #1f2937; margin: 0 0 10px 0; font-size: 24px; font-weight: 600;">Secure Payment</h2>
                  <p style="color: #6b7280; margin: 0; font-size: 16px;">Amount: ${amount} SAR</p>
                  <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px;">Service: ${formData.serviceType}</p>
                </div>
                <div class="mysr-form"></div>
                <div style="text-align: center; margin-top: 25px;">
                  <button onclick="this.closest('div').remove(); document.querySelector('button[type=submit]').disabled = false;" 
                          style="padding: 12px 30px; background: #e5e7eb; color: #374151; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 500; transition: all 0.2s;">
                    Cancel Payment
                  </button>
                </div>
                <div style="margin-top: 20px; padding: 15px; background: #f0f9ff; border-radius: 8px; border-left: 4px solid #0369a1;">
                  <div style="display: flex; align-items: center; color: #0369a1; font-size: 14px;">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style="margin-right: 8px;">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                    <span>Your payment is secured with SSL encryption</span>
                  </div>
                </div>
              </div>
            </div>
          `;
          
          document.body.appendChild(modal);
          
          // Initialize Moyasar form
          window.Moyasar.init({
            element: '.mysr-form',
            amount: amount * 100,
            currency: 'SAR',
            description: `Payment for ${formData.serviceType} - ${formData.name}`,
            publishable_api_key: paymentConfig.publishableKey,
            callback_url: `${window.location.origin}/payment-callback`,
            methods: ['creditcard'],
            metadata: {
              customer_name: formData.name,
              customer_email: formData.email,
              customer_phone: formData.phone,
              service_type: formData.serviceType,
              billing_address: formData.address,
              billing_city: formData.city,
              additional_info: formData.description || 'No additional information'
            },
            on_completed: (payment) => {
              console.log('✅ Payment completed:', payment);
              modal.remove();
              window.location.href = `/payment-callback?id=${payment.id}&status=${payment.status}`;
            }
          });
          
        } catch (error) {
          console.error('❌ Payment error:', error);
          setPaymentError('Payment processing failed. Please try again.');
        }
      } else {
        // DEMO MODE: Show demo message
        alert('🎯 DEMO MODE: Payment simulation completed successfully!\\n\\nIn production, this would process a real payment through Moyasar.');
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your city"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Error Message */}
                {paymentError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-3" />
                      <span className="text-red-700">{paymentError}</span>
                    </div>
                  </div>
                )}

                {/* Security Info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <h4 className="font-medium text-blue-900">Secure Payment</h4>
                      <p className="text-sm text-blue-700">
                        After submitting this form, you will be redirected to Moyasar's secure payment gateway where you can complete your payment using various payment methods.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Proceed to Moyasar Payment
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
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
                <div className="flex items-center justify-center p-3 border border-gray-200 rounded-lg">
                  <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    MC
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Mastercard</span>
                </div>
                <div className="flex items-center justify-center p-3 border border-gray-200 rounded-lg">
                  <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    V
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Visa</span>
                </div>
                <div className="flex items-center justify-center p-3 border border-gray-200 rounded-lg">
                  <div className="w-8 h-5 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">
                    AP
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Apple Pay</span>
                </div>
                <div className="flex items-center justify-center p-3 border border-gray-200 rounded-lg">
                  <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                    ST
                  </div>
                  <span className="ml-2 text-sm text-gray-600">STC Pay</span>
                </div>
                <div className="flex items-center justify-center p-3 border border-gray-200 rounded-lg">
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
    </div>
  );
};

export default Payment; 
