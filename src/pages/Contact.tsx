import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailjs';
import { useLanguage } from '../hooks/useLanguage';

const Contact = () => {
  const { currentLanguage } = useLanguage();
  
  const content = {
    en: {
      hero: {
        title: "Contact Us",
        subtitle: "Get in touch with our immigration experts for personalized consultation"
      },
      form: {
        title: "Send Us a Message",
        fullName: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        subject: "Subject",
        selectSubject: "Select Subject",
        subjects: {
          general: "General Inquiry",
          immigration: "Immigration Consultation",
          study: "Study Visa",
          work: "Work Permit",
          family: "Family Sponsorship",
          visit: "Visit Visa"
        },
        message: "Message",
        messagePlaceholder: "Please describe your immigration needs in detail...",
        sendMessage: "Send Message",
        sending: "Sending...",
        success: {
          title: "Message Sent Successfully!",
          message: "Thank you for your message. We will get back to you soon at"
        },
        error: {
          title: "Error Sending Message",
          message: "There was an error sending your message. Please try again or contact us directly at info@shawmekimmigration.com"
        }
      },
      contactInfo: {
        title: "Get in Touch",
        address: {
          title: "Address",
          line1: "Al Radhwah Street, An Nuzhah District",
          line2: "Makkah 24221, Saudi Arabia"
        },
        phone: {
          title: "Phone",
          number: "+966501367513"
        },
        email: {
          title: "Email",
          address: "info@shawmekimmigration.com"
        },
        hours: {
          title: "Business Hours",
          weekdays: "Sunday - Thursday: 9:00 AM - 6:00 PM",
          weekends: "Friday - Saturday: Closed"
        }
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Quick answers to common immigration questions",
        questions: [
          {
            question: "How long does the immigration process take?",
            answer: "Processing times vary by country and visa type. Express Entry for Canada typically takes 6-8 months, while Australian skilled migration can take 8-12 months."
          },
          {
            question: "Do I need to take English language tests?",
            answer: "Yes, most immigration programs require proof of English proficiency through tests like IELTS, CELPIP, or PTE Academic."
          },
          {
            question: "What are your consultation fees?",
            answer: "We offer free initial assessments. Detailed consultation fees vary based on the complexity of your case and services required."
          },
          {
            question: "Can you help with document authentication?",
            answer: "Yes, we provide comprehensive document clearing services including authentication, attestation, and apostille services."
          }
        ]
      }
    },
    ar: {
      hero: {
        title: "تواصل معنا",
        subtitle: "تواصل مع خبراء الهجرة لدينا للحصول على استشارة شخصية مخصصة"
      },
      form: {
        title: "أرسل لنا رسالة",
        fullName: "الاسم الكامل",
        email: "عنوان البريد الإلكتروني",
        phone: "رقم الهاتف",
        subject: "الموضوع",
        selectSubject: "اختر الموضوع",
        subjects: {
          general: "استفسار عام",
          immigration: "استشارة هجرة",
          study: "تأشيرة دراسة",
          work: "تصريح عمل",
          family: "كفالة عائلية",
          visit: "تأشيرة زيارة"
        },
        message: "الرسالة",
        messagePlaceholder: "يرجى وصف احتياجاتك للهجرة بالتفصيل...",
        sendMessage: "إرسال الرسالة",
        sending: "جارٍ الإرسال...",
        success: {
          title: "تم إرسال الرسالة بنجاح!",
          message: "شكراً لك على رسالتك. سنعاود الاتصال بك قريباً على"
        },
        error: {
          title: "خطأ في إرسال الرسالة",
          message: "حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة على info@shawmekimmigration.com"
        }
      },
      contactInfo: {
        title: "ابق على تواصل",
        address: {
          title: "العنوان",
          line1: "شارع الراضوة، حي النزهة",
          line2: "مكة المكرمة 24221، المملكة العربية السعودية"
        },
        phone: {
          title: "الهاتف",
          number: "+966501367513"
        },
        email: {
          title: "البريد الإلكتروني",
          address: "info@shawmekimmigration.com"
        },
        hours: {
          title: "ساعات العمل",
          weekdays: "الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً",
          weekends: "الجمعة - السبت: مغلق"
        }
      },
      faq: {
        title: "الأسئلة الشائعة",
        subtitle: "إجابات سريعة لأسئلة الهجرة الشائعة",
        questions: [
          {
            question: "كم من الوقت تستغرق عملية الهجرة؟",
            answer: "تختلف أوقات المعالجة حسب البلد ونوع التأشيرة. الدخول السريع لكندا يستغرق عادة 6-8 أشهر، بينما الهجرة الماهرة لأستراليا قد تستغرق 8-12 شهراً."
          },
          {
            question: "هل أحتاج إلى اختبارات اللغة الإنجليزية؟",
            answer: "نعم، معظم برامج الهجرة تتطلب إثبات الكفاءة في اللغة الإنجليزية من خلال اختبارات مثل IELTS أو CELPIP أو PTE Academic."
          },
          {
            question: "ما هي رسوم الاستشارة؟",
            answer: "نقدم تقييمات أولية مجانية. رسوم الاستشارة التفصيلية تختلف حسب تعقيد حالتك والخدمات المطلوبة."
          },
          {
            question: "هل يمكنكم مساعدتي في مصادقة الوثائق؟",
            answer: "نعم، نقدم خدمات شاملة لتخليص الوثائق بما في ذلك المصادقة والتصديق وخدمات الأبوستيل."
          }
        ]
      }
    }
  };

  const t = content[currentLanguage as keyof typeof content];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [lastSubmittedEmail, setLastSubmittedEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      // حفظ الإيميل قبل مسح النموذج
      setLastSubmittedEmail(formData.email);

      // إعداد معاملات الإيميل للتواصل العام
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        inquiry_subject: formData.subject,
        message: formData.message,
        to_email: 'info@shawmekimmigration.com',
        date: new Date().toLocaleDateString('ar-SA'),
        time: new Date().toLocaleTimeString('ar-SA')
      };

      // إرسال الإيميل باستخدام EmailJS - قالب التواصل العام
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.contactTemplateId,
        templateParams,
        emailConfig.publicKey
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">{t.hero.title}</h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.form.title}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.fullName} *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.email} *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.phone}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.subject} *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="">{t.form.selectSubject}</option>
                      <option value="general">{t.form.subjects.general}</option>
                      <option value="immigration">{t.form.subjects.immigration}</option>
                      <option value="study">{t.form.subjects.study}</option>
                      <option value="work">{t.form.subjects.work}</option>
                      <option value="family">{t.form.subjects.family}</option>
                      <option value="visit">{t.form.subjects.visit}</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.form.message} *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.form.messagePlaceholder}
                  />
                </div>
                
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <div className="text-green-800">
                      <h4 className="font-semibold">{t.form.success.title}</h4>
                      <p className="text-sm">{t.form.success.message} {lastSubmittedEmail}.</p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <div className="text-red-800">
                      <h4 className="font-semibold">{t.form.error.title}</h4>
                      <p className="text-sm">{t.form.error.message}</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse ${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  <Send size={20} />
                  <span>{isLoading ? t.form.sending : t.form.sendMessage}</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.contactInfo.title}</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{t.contactInfo.address.title}</h3>
                    <p className="text-gray-600">{t.contactInfo.address.line1}</p>
                    <p className="text-gray-600">{t.contactInfo.address.line2}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{t.contactInfo.phone.title}</h3>
                    <p className="text-gray-600">{t.contactInfo.phone.number}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Mail className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{t.contactInfo.email.title}</h3>
                    <p className="text-gray-600">{t.contactInfo.email.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Clock className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{t.contactInfo.hours.title}</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>{t.contactInfo.hours.weekdays}</p>
                      <p>{t.contactInfo.hours.weekends}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="bg-gray-200 rounded-lg h-64 overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.1234567890!2d39.79499040323555!3d21.435970060964166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI2JzA5LjUiTiAzOcKwNDcnNDIuMCJF!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa&markers=color:red%7Clabel:S%7C21.435970060964166,39.79499040323555"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="الشوامخ للهجرة والتأشيرات - الموقع الدقيق، مكة المكرمة"
                  className="rounded-lg"
                />
                {/* Map Overlay Info */}
                <div className="absolute bottom-4 left-4 rtl:right-4 rtl:left-auto bg-white bg-opacity-90 rounded-lg p-3 shadow-lg max-w-xs">
                  <div className="flex items-start space-x-2 rtl:space-x-reverse">
                    <div className="bg-red-500 rounded-full p-1 mt-1 flex-shrink-0">
                      <MapPin className="text-white" size={12} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">الشوامخ للهجرة والتأشيرات</p>
                      <p className="text-xs text-gray-600">{currentLanguage === 'ar' ? 'الراضوة، النزهة' : 'Al Radhwah, An Nuzhah'}</p>
                      <p className="text-xs text-gray-600">{currentLanguage === 'ar' ? 'مكة المكرمة 24221، المملكة العربية السعودية' : 'Makkah 24221, Saudi Arabia'}</p>
                      <p className="text-xs text-red-600 font-medium mt-1">📍 {currentLanguage === 'ar' ? 'الموقع الدقيق GPS' : 'Exact GPS Location'}</p>
                      <p className="text-xs text-gray-500 font-mono">21.436°N, 39.795°E</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.faq.title}</h2>
            <p className="text-lg text-gray-600">{t.faq.subtitle}</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {t.faq.questions.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;