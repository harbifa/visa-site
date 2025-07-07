import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const RefundPolicy = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Refund Policy",
      subtitle: "Terms and conditions for service refunds",
      importantNotice: {
        title: "Important Notice",
        text: "All fees are generally non-refundable once services have commenced. Please read this policy carefully before making payment."
      },
      generalPolicy: {
        title: "General Refund Policy",
        text: "Due to the nature of immigration consultation services, our refund policy has specific terms and conditions. We strive to provide excellent service while maintaining fair business practices."
      },
      nonRefundable: {
        title: "Non-Refundable Items",
        items: [
          "Government application fees",
          "Third-party service fees",
          "Services already rendered",
          "Application rejections",
          "Government policy changes"
        ]
      },
      refundProcess: {
        title: "Refund Request Process",
        steps: [
          "Contact us within 30 days of payment",
          "Provide detailed reason for refund",
          "Include payment receipt",
          "Allow 5-10 business days for review"
        ]
      },
      contact: {
        title: "Contact Us",
        company: "Alshawamekh Visa Immigration"
      }
    },
    ar: {
      title: "سياسة الاسترداد",
      subtitle: "الشروط والأحكام لاسترداد الخدمات",
      importantNotice: {
        title: "إشعار مهم",
        text: "جميع الرسوم غير قابلة للاسترداد بشكل عام بمجرد بدء الخدمات. يرجى قراءة هذه السياسة بعناية قبل الدفع."
      },
      generalPolicy: {
        title: "سياسة الاسترداد العامة",
        text: "نظراً لطبيعة خدمات الاستشارات الخاصة بالهجرة، فإن سياسة الاسترداد الخاصة بنا لها شروط وأحكام محددة. نسعى لتقديم خدمة ممتازة مع الحفاظ على ممارسات تجارية عادلة."
      },
      nonRefundable: {
        title: "البنود غير القابلة للاسترداد",
        items: [
          "رسوم الطلبات الحكومية",
          "رسوم خدمات الطرف الثالث",
          "الخدمات المقدمة بالفعل",
          "رفض الطلبات",
          "تغييرات السياسات الحكومية"
        ]
      },
      refundProcess: {
        title: "عملية طلب الاسترداد",
        steps: [
          "اتصل بنا خلال 30 يوماً من الدفع",
          "قدم سبباً مفصلاً للاسترداد",
          "أرفق إيصال الدفع",
          "انتظر 5-10 أيام عمل للمراجعة"
        ]
      },
      contact: {
        title: "اتصل بنا",
        company: "الشوامخ للهجرة والتأشيرات"
      }
    }
  } as const;

  const t = content[currentLanguage as keyof typeof content];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-blue-100">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            
            {/* Important Notice */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-red-800 mb-4">{t.importantNotice.title}</h2>
              <p className="text-red-700 font-semibold">
                {t.importantNotice.text}
              </p>
            </div>

            {/* General Policy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.generalPolicy.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t.generalPolicy.text}
              </p>
            </div>

            {/* Non-Refundable Items */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.nonRefundable.title}</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.nonRefundable.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Refund Process */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.refundProcess.title}</h2>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                {t.refundProcess.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            {/* Contact Information */}
            <div className="border-t pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>{t.contact.company}</strong></p>
                <p className="text-gray-700">Email: info@shawmekimmigration.com</p>
                <p className="text-gray-700">{currentLanguage === 'ar' ? 'الهاتف:' : 'Phone:'} +966501367513</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy; 