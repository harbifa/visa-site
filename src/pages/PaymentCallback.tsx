import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowLeft, Download, Phone, Mail, AlertCircle } from 'lucide-react';
import { generatePaymentReceipt } from '../utils/pdfReceipt';

interface PaymentResult {
  status: 'success' | 'failed' | 'pending' | 'loading';
  paymentId?: string;
  amount?: number;
  currency?: string;
  customerName?: string;
  serviceType?: string;
  customerEmail?: string;
  customerPhone?: string;
}

const PaymentCallback = () => {
  const [searchParams] = useSearchParams();
  const [paymentResult, setPaymentResult] = useState<PaymentResult>({ status: 'loading' });

  useEffect(() => {
    // Get payment status from URL parameters
    const status = searchParams.get('status');
    const paymentId = searchParams.get('id');
    const message = searchParams.get('message');
    const amount = searchParams.get('amount');
    const currency = searchParams.get('currency') || 'SAR';

    // Get customer info from metadata if available
    const customerName = searchParams.get('metadata[customer_name]') || searchParams.get('customer_name');
    const serviceType = searchParams.get('metadata[service_type]') || searchParams.get('service_type');
    const customerEmail = searchParams.get('metadata[customer_email]') || searchParams.get('customer_email');
    const customerPhone = searchParams.get('metadata[customer_phone]') || searchParams.get('customer_phone');

    console.log('🔄 Payment callback received:', {
      status,
      paymentId,
      amount,
      message,
      customerName,
      serviceType,
      customerEmail,
      customerPhone,
    });

    // Determine payment result based on status
    if (status === 'paid') {
      setPaymentResult({
        status: 'success',
        paymentId: paymentId || undefined,
        amount: amount ? parseFloat(amount) / 100 : undefined, // Convert from halalas
        currency,
        customerName: customerName || undefined,
        serviceType: serviceType || undefined,
        customerEmail: customerEmail || undefined,
        customerPhone: customerPhone || undefined,
      });
    } else if (status === 'failed') {
      setPaymentResult({
        status: 'failed',
        paymentId: paymentId || undefined,
        customerName: customerName || undefined,
        serviceType: serviceType || undefined,
      });
    } else if (status === 'pending') {
      setPaymentResult({
        status: 'pending',
        paymentId: paymentId || undefined,
        customerName: customerName || undefined,
        serviceType: serviceType || undefined,
      });
    } else {
      setPaymentResult({
        status: 'failed',
      });
    }
  }, [searchParams]);

  const getStatusIcon = () => {
    switch (paymentResult.status) {
      case 'success':
        return <CheckCircle className="text-green-600" size={64} />;
      case 'failed':
        return <XCircle className="text-red-600" size={64} />;
      case 'pending':
        return <AlertCircle className="text-yellow-600" size={64} />;
      default:
        return <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-gray-400"></div>;
    }
  };

  const getStatusTitle = () => {
    switch (paymentResult.status) {
      case 'success':
        return 'Payment Successful!';
      case 'failed':
        return 'Payment Failed';
      case 'pending':
        return 'Payment Pending';
      default:
        return 'Processing...';
    }
  };

  const getStatusMessage = () => {
    switch (paymentResult.status) {
      case 'success':
        return 'Your payment has been processed successfully. You will receive a confirmation email shortly.';
      case 'failed':
        return 'Payment was unsuccessful. Please try again or contact our support team for assistance.';
      case 'pending':
        return 'Your payment is being processed. You will receive confirmation once the payment is complete.';
      default:
        return 'Please wait while we process your payment...';
    }
  };

  const getStatusColor = () => {
    switch (paymentResult.status) {
      case 'success':
        return 'text-green-600';
      case 'failed':
        return 'text-red-600';
      case 'pending':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };

  const getBackgroundColor = () => {
    switch (paymentResult.status) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'failed':
        return 'bg-red-50 border-red-200';
      case 'pending':
        return 'bg-yellow-50 border-yellow-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const downloadReceipt = async () => {
    if (paymentResult.status !== 'success' || !paymentResult.paymentId) {
      alert('Cannot download receipt. Payment information is incomplete.');
      return;
    }

    try {
      // Format the date
      const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });

      // Prepare receipt data
      const receiptData = {
        paymentId: paymentResult.paymentId,
        customerName: paymentResult.customerName || 'Valued Customer',
        serviceType: paymentResult.serviceType || 'Immigration Services',
        amount: paymentResult.amount || 0,
        currency: paymentResult.currency || 'SAR',
        date: currentDate,
        customerEmail: paymentResult.customerEmail || '',
        customerPhone: paymentResult.customerPhone || ''
      };

      // Generate and download PDF
      await generatePaymentReceipt(receiptData);
    } catch (error) {
      console.error('Error generating receipt:', error);
      alert('Error downloading receipt. Please try again or contact support.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Payment Result Card */}
        <div className={`bg-white rounded-2xl shadow-xl border-2 ${getBackgroundColor()} p-8 text-center`}>
          {/* Status Icon */}
          <div className="flex justify-center mb-6">
            {getStatusIcon()}
          </div>

          {/* Status Title */}
          <h1 className={`text-3xl font-bold mb-4 ${getStatusColor()}`}>
            {getStatusTitle()}
          </h1>

          {/* Status Message */}
          <p className="text-gray-700 text-lg mb-6">
            {getStatusMessage()}
          </p>

          {/* Payment Details */}
          {(paymentResult.paymentId || paymentResult.amount) && (
            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-4">Payment Details</h3>
              <div className="space-y-3 text-sm">
                {paymentResult.paymentId && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment ID:</span>
                    <span className="font-mono text-gray-900">{paymentResult.paymentId}</span>
                  </div>
                )}
                {paymentResult.amount && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-semibold text-gray-900">
                      {paymentResult.amount.toFixed(2)} {paymentResult.currency}
                    </span>
                  </div>
                )}
                {paymentResult.serviceType && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="text-gray-900">{paymentResult.serviceType}</span>
                  </div>
                )}
                {paymentResult.customerName && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customer:</span>
                    <span className="text-gray-900">{paymentResult.customerName}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="text-gray-900">{new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-4">
            {paymentResult.status === 'success' && (
              <>
                <button 
                  onClick={downloadReceipt}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <Download size={20} className="mr-2" />
                  Download Receipt
                </button>
                <Link
                  to="/"
                  className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  Return to Home
                </Link>
              </>
            )}

            {paymentResult.status === 'failed' && (
              <>
                <Link
                  to="/payment"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center shadow-lg hover:shadow-xl"
                >
                  Try Payment Again
                </Link>
                <Link
                  to="/contact"
                  className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  Contact Support
                </Link>
              </>
            )}

            {paymentResult.status === 'pending' && (
              <Link
                to="/"
                className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center shadow-lg hover:shadow-xl"
              >
                Continue to Home
              </Link>
            )}
          </div>
        </div>

        {/* Next Steps */}
        {paymentResult.status === 'success' && (
          <div className="bg-white rounded-2xl shadow-xl p-6 mt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Next?</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span>You will receive a confirmation email shortly with payment details</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span>Our team will contact you within 24 hours to discuss your service</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span>Start preparing required documents for your immigration process</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span>Track your application status through our support team</span>
              </div>
            </div>
          </div>
        )}

        {/* Support Contact */}
        <div className="bg-blue-50 rounded-2xl border-2 border-blue-200 p-6 mt-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Need Help?</h3>
          <div className="space-y-3 text-sm text-blue-800">
            <div className="flex items-center">
              <Mail className="mr-2" size={16} />
              <span>info@alshawamekhimmigration.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2" size={16} />
              <span>+966501367513</span>
            </div>
            <p className="pt-2 text-xs text-blue-600">
              Our support team is available 24/7 to assist you with any questions or concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCallback; 