import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Lock, ArrowLeft, CheckCircle, ExternalLink, Shield } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate processing before redirecting to Moyasar
    setTimeout(() => {
      setIsProcessing(false);
      // Here you would create the payment session with Moyasar and redirect
      alert('Redirecting to Moyasar for secure payment processing...');
      // window.location.href = moyasarPaymentUrl;
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const services = [
    'Express Entry Visa',
    'Provincial Nomination Program',
    'Study Visa',
    'Visit Visa',
    'Work Permit',
    'Family/Spouse Visa',
    'Business Visa',
    'Consultation Services',
    'Document Translation',
    'Other Services'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <CreditCard className="text-blue-600 mr-3" size={32} />
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Pay Online</h1>
          </div>
          <p className="text-gray-600 text-lg">Secure payment processing via Moyasar</p>
        </div>

        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Payment Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-2">
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="+966 50 123 4567"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                        Amount (SAR) *
                      </label>
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="0.00"
                        min="1"
                        step="0.01"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Service Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-2">
                    Service Details
                  </h3>
                  
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      required
                    >
                      <option value="">Select Service Type</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Any additional information about your service request..."
                    />
                  </div>
                </div>

                {/* Billing Address */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-2">
                    Billing Address
                  </h3>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your address"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your city"
                      required
                    />
                  </div>
                </div>

                {/* Moyasar Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <Shield className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="text-blue-900 font-medium mb-2">Secure Payment via Moyasar</h4>
                      <p className="text-blue-800 text-sm">
                        After submitting this form, you will be redirected to Moyasar's secure payment gateway 
                        to complete your payment with your preferred payment method.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                      isProcessing 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105'
                    }`}
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Preparing Payment...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <ExternalLink size={20} className="mr-2" />
                        Proceed to Moyasar Payment
                      </div>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Payment Summary & Info */}
          <div className="space-y-6">
            {/* Payment Summary */}
            {formData.amount && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-medium">{formData.serviceType || 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-medium text-green-600">{formData.amount} SAR</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span className="text-green-600">{formData.amount} SAR</span>
                  </div>
                </div>
              </div>
            )}

            {/* Moyasar Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Lock className="text-green-600 mr-2" size={20} />
                Payment Security
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <span>Powered by Moyasar - Saudi's trusted payment gateway</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <span>PCI DSS Level 1 compliant</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <span>256-bit SSL encryption</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <span>Supports all major payment methods</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Need Help?</h3>
              <div className="space-y-2 text-sm text-blue-800">
                <p>📧 info@shawamek.sa</p>
                <p>📞 +966501367513</p>
                <p className="pt-2 text-xs text-blue-600">
                  Our support team is available 24/7 to assist you with your payment.
                </p>
              </div>
            </div>

            {/* Accepted Payment Methods */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Accepted Payment Methods</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-8 h-5 bg-blue-600 rounded mr-2"></div>
                  Visa
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-5 bg-red-600 rounded mr-2"></div>
                  Mastercard
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-5 bg-green-600 rounded mr-2"></div>
                  Mada
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-5 bg-orange-600 rounded mr-2"></div>
                  Apple Pay
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-5 bg-blue-500 rounded mr-2"></div>
                  STCPay
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-5 bg-purple-600 rounded mr-2"></div>
                  Bank Transfer
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                All payment methods are processed securely through Moyasar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment; 
