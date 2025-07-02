import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CreditCard, Lock, CheckCircle, XCircle, ArrowLeft } from 'lucide-react';

interface PaymentData {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  service_type: string;
  amount: string;
  currency: string;
  description: string;
}

const PaymentDemo = () => {
  const [searchParams] = useSearchParams();
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Get payment data from localStorage
    const storedData = localStorage.getItem('demoPaymentData');
    if (storedData) {
      setPaymentData(JSON.parse(storedData));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number
    if (name === 'number') {
      formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
    }
    // Format expiry
    if (name === 'expiry') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
    }
    // Format CVV
    if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 3);
    }

    setCardData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      
      // Determine result based on card number (for demo)
      const cardNumber = cardData.number.replace(/\s/g, '');
      let status = 'paid';
      const paymentId = 'pay_demo_' + Math.random().toString(36).substr(2, 9);

      if (cardNumber === '4000000000000002') {
        status = 'failed';
      } else if (cardNumber === '4000000000000069') {
        status = 'pending';
      }

      // Redirect to callback with result
      const callbackUrl = new URL('/payment/callback', window.location.origin);
      callbackUrl.searchParams.set('status', status);
      callbackUrl.searchParams.set('id', paymentId);
      callbackUrl.searchParams.set('amount', paymentData?.amount || '0');
      callbackUrl.searchParams.set('currency', paymentData?.currency || 'SAR');
      
      if (paymentData) {
        callbackUrl.searchParams.set('metadata[customer_name]', paymentData.customer_name);
        callbackUrl.searchParams.set('metadata[customer_email]', paymentData.customer_email);
        callbackUrl.searchParams.set('metadata[customer_phone]', paymentData.customer_phone);
        callbackUrl.searchParams.set('metadata[service_type]', paymentData.service_type);
      }

      if (status === 'failed') {
        callbackUrl.searchParams.set('message', 'Payment was declined by your bank');
      }

      window.location.href = callbackUrl.toString();
    }, 2000);
  };

  const amount = paymentData ? (parseInt(paymentData.amount) / 100).toFixed(2) : searchParams.get('amount') || '0';

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Moyasar Payment (Demo)</h1>
          <p className="text-gray-600 text-sm mt-2">Secure Payment Gateway - Demo Mode</p>
        </div>

        {/* Payment Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          {/* Payment Amount */}
          <div className="text-center mb-6 p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">{amount} SAR</div>
            <div className="text-sm text-gray-600 mt-1">
              {paymentData?.description || searchParams.get('description')}
            </div>
            {paymentData && (
              <div className="text-xs text-gray-500 mt-2">
                Customer: {paymentData.customer_name}
              </div>
            )}
          </div>

          {/* Payment Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number *
              </label>
              <input
                type="text"
                name="number"
                value={cardData.number}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date *
                </label>
                <input
                  type="text"
                  name="expiry"
                  value={cardData.expiry}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="MM/YY"
                  maxLength={5}
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
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="123"
                  maxLength={3}
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
                name="name"
                value={cardData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Security Notice */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="flex items-center">
                <Lock className="text-green-600 mr-2" size={16} />
                <span className="text-green-800 text-sm">
                  Your payment information is encrypted and secure
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 ${
                isProcessing 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isProcessing ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing Payment...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <CreditCard size={20} className="mr-2" />
                  Pay {amount} SAR
                </div>
              )}
            </button>
          </form>
        </div>

        {/* Test Cards Info */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-yellow-800 mb-2">Test Cards (Demo Mode)</h3>
          <div className="space-y-1 text-sm text-yellow-700">
            <div className="flex items-center">
              <CheckCircle size={14} className="text-green-500 mr-2" />
              <span>Success: 4111 1111 1111 1111</span>
            </div>
            <div className="flex items-center">
              <XCircle size={14} className="text-red-500 mr-2" />
              <span>Failed: 4000 0000 0000 0002</span>
            </div>
            <div className="flex items-center">
              <div className="w-3.5 h-3.5 bg-blue-500 rounded-full mr-2"></div>
              <span>Pending: 4000 0000 0000 0069</span>
            </div>
            <p className="text-xs mt-2">Any future date for expiry, any 3 digits for CVV</p>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <a
            href="/payment"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Payment Form
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentDemo; 