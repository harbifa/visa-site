import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Lock, ArrowLeft, CheckCircle, ExternalLink, Shield, AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';

const Payment = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  
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
        setPaymentError(t('payment.errors.required_fields'));
        return;
      }

      const amount = parseFloat(formData.amount);
      if (isNaN(amount) || amount <= 0) {
        setPaymentError(t('payment.errors.invalid_amount'));
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setPaymentError(t('payment.errors.invalid_email'));
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
        // PRODUCTION: Use real Moyasar API
        try {
          const response = await fetch('/api/create-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              amount: formData.amount,
              serviceType: formData.serviceType,
              description: formData.description,
            }),
          });

          const result = await response.json();
          
          if (result.success && result.url) {
            console.log('✅ Payment URL received, redirecting...', result.url);
            window.location.href = result.url;
          } else {
            setPaymentError(result.error?.message || t('payment.errors.connection_error'));
          }
        } catch (error) {
          console.error('❌ Payment creation failed:', error);
          setPaymentError(t('payment.errors.connection_error'));
        }
      } else {
        // DEMO: Use demo payment page
        console.log('🧪 Demo mode - redirecting to demo payment...');
        
        const paymentData = {
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,
          service_type: formData.serviceType,
          amount: (amount * 100).toString(),
          currency: 'SAR',
          description: `${formData.serviceType}${formData.description ? ` - ${formData.description}` : ''}`
        };

        localStorage.setItem('demoPaymentData', JSON.stringify(paymentData));
        
        setTimeout(() => {
          const demoUrl = `${window.location.origin}/payment/demo?amount=${amount}&currency=SAR&description=${encodeURIComponent(paymentData.description)}`;
          window.location.href = demoUrl;
        }, 1000);
      }

    } catch (error) {
      console.error('❌ Payment submission error:', error);
      const errorMessage = error instanceof Error ? error.message : t('payment.errors.unexpected_error');
      setPaymentError(`${t('payment.errors.payment_failed')} ${errorMessage}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const services = [
    t('payment.services.express_entry'),
    t('payment.services.pnp'),
    t('payment.services.study_visa'),
    t('payment.services.visit_visa'),
    t('payment.services.work_permit'),
    t('payment.services.family_visa'),
    t('payment.services.business_visa'),
    t('payment.services.consultation'),
    t('payment.services.document_translation'),
    t('payment.services.other')
  ];

  return (
    <div className={`min-h-screen bg-gray-50 py-12 ${currentLanguage === 'ar' ? 'rtl' : ''}`}>
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <CreditCard className="text-blue-600 mr-3 rtl:mr-0 rtl:ml-3" size={32} />
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">{t('payment.title')}</h1>
          </div>
          <p className="text-gray-600 text-lg">{t('payment.subtitle')}</p>
        </div>

        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft size={16} className="mr-2 rtl:mr-0 rtl:ml-2 rtl:scale-x-[-1]" />
            {t('payment.back_to_home')}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('payment.payment_information')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-2">
                    {t('payment.personal_information')}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('payment.form.full_name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder={t('payment.form.placeholder_name')}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('payment.form.email_address')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder={t('payment.form.placeholder_email')}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('payment.form.phone_number')} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder={t('payment.form.placeholder_phone')}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('payment.form.amount')} *
                      </label>
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder={t('payment.form.placeholder_amount')}
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
                    {t('payment.service_details')}
                  </h3>
                  
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('payment.form.service_type')} *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      required
                    >
                      <option value="">{t('payment.form.select_service')}</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('payment.form.additional_details')}
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder={t('payment.form.placeholder_details')}
                    />
                  </div>
                </div>

                {/* Billing Address */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-2">
                    {t('payment.billing_address')}
                  </h3>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('payment.form.address')} *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder={t('payment.form.placeholder_address')}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('payment.form.city')} *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder={t('payment.form.placeholder_city')}
                      required
                    />
                  </div>
                </div>

                {/* Error Message */}
                {paymentError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <AlertTriangle className="text-red-600 mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-red-900 font-medium mb-2">{t('payment.errors.payment_error')}</h4>
                        <p className="text-red-800 text-sm">{paymentError}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Moyasar Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <Shield className="text-blue-600 mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="text-blue-900 font-medium mb-2">{t('payment.notices.secure_payment')}</h4>
                      <p className="text-blue-800 text-sm">
                        {t('payment.notices.redirect_notice')}
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
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2 rtl:mr-0 rtl:ml-2"></div>
                        {t('payment.buttons.processing')}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <ExternalLink size={20} className="mr-2 rtl:mr-0 rtl:ml-2" />
                        {t('payment.buttons.submit')}
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('payment.payment_summary')}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('payment.summary.service')}</span>
                    <span className="font-medium">{formData.serviceType || t('payment.summary.not_selected')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('payment.summary.amount')}</span>
                    <span className="font-medium text-green-600">{formData.amount} SAR</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>{t('payment.summary.total')}</span>
                    <span className="text-green-600">{formData.amount} SAR</span>
                  </div>
                </div>
              </div>
            )}

            {/* Moyasar Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Lock className="text-green-600 mr-2 rtl:mr-0 rtl:ml-2" size={20} />
                {t('payment.payment_security')}
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 rtl:mr-0 rtl:ml-2 mt-0.5 flex-shrink-0" size={16} />
                  <span>{t('payment.security.powered_by')}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 rtl:mr-0 rtl:ml-2 mt-0.5 flex-shrink-0" size={16} />
                  <span>{t('payment.security.pci_compliant')}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 rtl:mr-0 rtl:ml-2 mt-0.5 flex-shrink-0" size={16} />
                  <span>{t('payment.security.ssl_encryption')}</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 rtl:mr-0 rtl:ml-2 mt-0.5 flex-shrink-0" size={16} />
                  <span>{t('payment.security.payment_methods')}</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">{t('payment.need_help')}</h3>
              <div className="space-y-2 text-sm text-blue-800">
                <p>📧 info@shawmekimmigration.com</p>
                <p>📞 +966501367513</p>
                <p className="pt-2 text-xs text-blue-600">
                  {t('payment.contact.support_available')}
                </p>
              </div>
            </div>

            {/* Accepted Payment Methods */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('payment.accepted_payment_methods')}</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-8 h-5 bg-blue-600 rounded mr-2 rtl:mr-0 rtl:ml-2"></div>
                  {t('payment.payment_methods.visa')}
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-5 bg-red-600 rounded mr-2 rtl:mr-0 rtl:ml-2"></div>
                  {t('payment.payment_methods.mastercard')}
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-5 bg-green-600 rounded mr-2 rtl:mr-0 rtl:ml-2"></div>
                  {t('payment.payment_methods.mada')}
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-5 bg-orange-600 rounded mr-2 rtl:mr-0 rtl:ml-2"></div>
                  {t('payment.payment_methods.apple_pay')}
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-5 bg-blue-500 rounded mr-2 rtl:mr-0 rtl:ml-2"></div>
                  {t('payment.payment_methods.stc_pay')}
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-5 bg-purple-600 rounded mr-2 rtl:mr-0 rtl:ml-2"></div>
                  {t('payment.payment_methods.bank_transfer')}
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                {t('payment.payment_methods.secure_processing')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment; 
