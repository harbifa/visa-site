import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowLeft, Download, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import { generatePaymentReceipt } from '../utils/pdfReceipt';


interface PaymentResult {
  status: 'success' | 'failed' | 'pending' | 'loading';
  paymentId?: string;
  amount?: number;
  currency?: string;
  customerName?: string;
  serviceType?: string;
}

const PaymentCallback = () => {
  const [searchParams] = useSearchParams();
  const [paymentResult, setPaymentResult] = useState<PaymentResult>({ status: 'loading' });

  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    // Get payment status from URL parameters
    const status = searchParams.get('status');
    const paymentId = searchParams.get('id');
    const message = searchParams.get('message');
    const amount = searchParams.get('amount');
    const currency = searchParams.get('currency') || 'SAR';

    // Get customer info from metadata if available
    const customerName = searchParams.get('metadata[customer_name]');
    const serviceType = searchParams.get('metadata[service_type]');

    console.log('🔄 Payment callback received:', {
      status,
      paymentId,
      amount,
      message,
      customerName,
      serviceType,
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
        return <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>;
      default:
        return <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-gray-400"></div>;
    }
  };

  const getStatusTitle = () => {
    switch (paymentResult.status) {
      case 'success':
        return t('payment_callback.success_title');
      case 'failed':
        return t('payment_callback.failed_title');
      case 'pending':
        return t('payment_callback.pending_title');
      default:
        return t('payment_callback.processing_title');
    }
  };

  const getStatusMessage = () => {
    switch (paymentResult.status) {
      case 'success':
        return t('payment_callback.success_message');
      case 'failed':
        return t('payment_callback.failed_message');
      case 'pending':
        return t('payment_callback.pending_message');
      default:
        return t('payment_callback.loading_message');
    }
  };

  const getStatusColor = () => {
    switch (paymentResult.status) {
      case 'success':
        return 'text-green-600';
      case 'failed':
        return 'text-red-600';
      case 'pending':
        return 'text-blue-600';
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
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const downloadReceipt = async () => {
    if (paymentResult.status !== 'success' || !paymentResult.paymentId) {
      alert(currentLanguage === 'ar' ? 
        'لا يمكن تحميل الإيصال. معلومات الدفع غير مكتملة.' : 
        'Cannot download receipt. Payment information is incomplete.');
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
        date: currentDate
      };

      // Generate and download PDF
      await generatePaymentReceipt(receiptData);
      
      // Show success message
      alert(currentLanguage === 'ar' ? 
        'تم تحميل الإيصال بنجاح!' : 
        'Receipt downloaded successfully!');
    } catch (error) {
      console.error('Error generating receipt:', error);
      alert(currentLanguage === 'ar' ? 
        'حدث خطأ أثناء تحميل الإيصال. يرجى المحاولة مرة أخرى.' : 
        'Error downloading receipt. Please try again.');
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 py-12 ${currentLanguage === 'ar' ? 'rtl' : ''}`}>
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-6">
            <ArrowLeft size={16} className={`mr-2 ${currentLanguage === 'ar' ? 'rtl:mr-0 rtl:ml-2 rtl:scale-x-[-1]' : ''}`} />
            {t('payment_callback.return_home')}
          </Link>
        </div>

        {/* Payment Result Card */}
        <div className={`bg-white rounded-xl shadow-lg border-2 ${getBackgroundColor()} p-8 text-center`}>
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
              <h3 className="font-semibold text-gray-900 mb-4">{t('payment_callback.payment_details')}</h3>
              <div className="space-y-2 text-sm">
                {paymentResult.paymentId && (
                                      <div className="flex justify-between">
                      <span className="text-gray-600">{t('payment_callback.payment_id')}</span>
                      <span className="font-mono text-gray-900">{paymentResult.paymentId}</span>
                    </div>
                  )}
                  {paymentResult.amount && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('payment_callback.amount')}</span>
                      <span className="font-semibold text-gray-900">
                        {paymentResult.amount.toFixed(2)} {paymentResult.currency}
                      </span>
                    </div>
                  )}
                  {paymentResult.serviceType && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('payment_callback.service')}</span>
                      <span className="text-gray-900">{paymentResult.serviceType}</span>
                    </div>
                  )}
                  {paymentResult.customerName && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('payment_callback.customer')}</span>
                      <span className="text-gray-900">{paymentResult.customerName}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('payment_callback.date')}</span>
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Download size={20} className={`mr-2 ${currentLanguage === 'ar' ? 'rtl:mr-0 rtl:ml-2' : ''}`} />
                  {t('payment_callback.download_receipt')}
                </button>
                <Link
                  to="/"
                  className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  {t('payment_callback.return_home')}
                </Link>
              </>
            )}

            {paymentResult.status === 'failed' && (
              <>
                <Link
                  to="/payment"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  {t('payment_callback.try_again')}
                </Link>
                <Link
                  to="/contact"
                  className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  {t('payment_callback.contact_support')}
                </Link>
              </>
            )}

            {paymentResult.status === 'pending' && (
                              <Link
                  to="/"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  {t('payment_callback.continue_home')}
                </Link>
            )}
          </div>
        </div>

        {/* Next Steps */}
        {paymentResult.status === 'success' && (
          <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('payment_callback.whats_next')}</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <CheckCircle className={`text-green-500 mr-3 mt-0.5 flex-shrink-0 ${currentLanguage === 'ar' ? 'rtl:mr-0 rtl:ml-3' : ''}`} size={20} />
                <span>{t('payment_callback.next_steps.email_confirmation')}</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className={`text-green-500 mr-3 mt-0.5 flex-shrink-0 ${currentLanguage === 'ar' ? 'rtl:mr-0 rtl:ml-3' : ''}`} size={20} />
                <span>{t('payment_callback.next_steps.team_contact')}</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className={`text-green-500 mr-3 mt-0.5 flex-shrink-0 ${currentLanguage === 'ar' ? 'rtl:mr-0 rtl:ml-3' : ''}`} size={20} />
                <span>{t('payment_callback.next_steps.email_confirmation')}</span>
              </div>
            </div>
          </div>
        )}

        {/* Support Contact */}
        <div className="bg-blue-50 rounded-xl p-6 mt-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">{currentLanguage === 'ar' ? 'هل تحتاج مساعدة؟' : 'Need Help?'}</h3>
          <div className="space-y-2 text-sm text-blue-800">
            <div className="flex items-center">
              <Mail className={`mr-2 ${currentLanguage === 'ar' ? 'rtl:mr-0 rtl:ml-2' : ''}`} size={16} />
              <span>info@shawmekimmigration.com</span>
            </div>
            <div className="flex items-center">
              <Phone className={`mr-2 ${currentLanguage === 'ar' ? 'rtl:mr-0 rtl:ml-2' : ''}`} size={16} />
              <span>+966501367513</span>
            </div>
            <p className="pt-2 text-xs text-blue-600">
              {t('payment_callback.support_message')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCallback; 