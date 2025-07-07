import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const Disclaimer = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Disclaimer",
      subtitle: "Important information about our services and limitations",
      importantNotice: {
        title: "⚠️ IMPORTANT NOTICE",
        text: "WE DO NOT GUARANTEE THE SUCCESS OF ANY IMMIGRATION APPLICATION. Immigration decisions are made solely by government authorities."
      },
      noGuarantee: {
        title: "No Guarantee of Results",
        text: "Alshawamekh Visa Immigration provides consultation services only. We cannot guarantee:",
        items: [
          "Approval of any visa or immigration application",
          "Processing times or government decisions",
          "Changes in immigration laws or policies",
          "Specific outcomes for any case"
        ]
      },
      professionalConsultation: {
        title: "Professional Consultation Only",
        text: "Our services are for consultation and guidance purposes. We are immigration consultants registered with ICCRC, not lawyers (unless specifically stated). Complex legal matters may require consultation with qualified immigration attorneys."
      },
      clientResponsibilities: {
        title: "Client Responsibilities",
        text: "Clients are responsible for:",
        items: [
          "Providing truthful and accurate information",
          "Meeting all deadlines and requirements",
          "Paying all applicable fees",
          "Following immigration laws and regulations"
        ]
      },
      limitationOfLiability: {
        title: "Limitation of Liability",
        text: "Alshawamekh Visa Immigration shall not be liable for:",
        items: [
          "Rejection or refusal of any application",
          "Processing delays by government authorities",
          "Changes in government policies",
          "Any consequential or indirect damages"
        ],
        maxLiability: "Our maximum liability is limited to the fees paid for our services."
      },
      informationAccuracy: {
        title: "Information Accuracy",
        text: "While we strive to provide accurate information, immigration laws change frequently. Clients should verify current requirements with official government sources."
      },
      contact: {
        title: "Contact Information",
        company: "Alshawamekh Visa Immigration"
      },
      finalNotice: {
        text: "BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ AND AGREE TO BE BOUND BY THIS DISCLAIMER."
      }
    },
    ar: {
      title: "إخلاء المسؤولية",
      subtitle: "معلومات مهمة حول خدماتنا والقيود",
      importantNotice: {
        title: "⚠️ إشعار مهم",
        text: "نحن لا نضمن نجاح أي طلب هجرة. قرارات الهجرة تتخذ من قبل السلطات الحكومية فقط."
      },
      noGuarantee: {
        title: "عدم ضمان النتائج",
        text: "الشوامخ للهجرة والتأشيرات تقدم خدمات الاستشارة فقط. لا يمكننا ضمان:",
        items: [
          "الموافقة على أي تأشيرة أو طلب هجرة",
          "أوقات المعالجة أو قرارات الحكومة",
          "التغييرات في قوانين أو سياسات الهجرة",
          "نتائج محددة لأي حالة"
        ]
      },
      professionalConsultation: {
        title: "الاستشارة المهنية فقط",
        text: "خدماتنا للاستشارة والتوجيه فقط. نحن مستشارون للهجرة مسجلون لدى ICCRC، وليس محامين (ما لم يذكر خلاف ذلك). قد تتطلب الأمور القانونية المعقدة استشارة محامين مؤهلين في الهجرة."
      },
      clientResponsibilities: {
        title: "مسؤوليات العميل",
        text: "العملاء مسؤولون عن:",
        items: [
          "تقديم معلومات صادقة ودقيقة",
          "الوفاء بجميع المواعيد النهائية والمتطلبات",
          "دفع جميع الرسوم المطلوبة",
          "اتباع قوانين ولوائح الهجرة"
        ]
      },
      limitationOfLiability: {
        title: "حدود المسؤولية",
        text: "الشوامخ للهجرة والتأشيرات غير مسؤولة عن:",
        items: [
          "رفض أو رفض أي طلب",
          "تأخير المعالجة من قبل السلطات الحكومية",
          "التغييرات في السياسات الحكومية",
          "أي أضرار تبعية أو غير مباشرة"
        ],
        maxLiability: "مسؤوليتنا القصوى محدودة بالرسوم المدفوعة مقابل خدماتنا."
      },
      informationAccuracy: {
        title: "دقة المعلومات",
        text: "بينما نسعى لتقديم معلومات دقيقة، تتغير قوانين الهجرة بشكل متكرر. يجب على العملاء التحقق من المتطلبات الحالية مع المصادر الحكومية الرسمية."
      },
      contact: {
        title: "معلومات الاتصال",
        company: "الشوامخ للهجرة والتأشيرات"
      },
      finalNotice: {
        text: "باستخدام خدماتنا، فإنك تقر بأنك قرأت ووافقت على الالتزام بإخلاء المسؤولية هذا."
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

            {/* No Guarantee */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.noGuarantee.title}</h2>
              <p className="text-gray-700 mb-4">
                {t.noGuarantee.text}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.noGuarantee.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Professional Consultation */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.professionalConsultation.title}</h2>
              <p className="text-gray-700">
                {t.professionalConsultation.text}
              </p>
            </div>

            {/* Client Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.clientResponsibilities.title}</h2>
              <p className="text-gray-700 mb-4">{t.clientResponsibilities.text}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.clientResponsibilities.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.limitationOfLiability.title}</h2>
              <p className="text-gray-700 mb-4">
                {t.limitationOfLiability.text}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.limitationOfLiability.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-700 mt-4 font-semibold">
                {t.limitationOfLiability.maxLiability}
              </p>
            </div>

            {/* Information Accuracy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.informationAccuracy.title}</h2>
              <p className="text-gray-700">
                {t.informationAccuracy.text}
              </p>
            </div>

            {/* Contact Information */}
            <div className="border-t pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>{t.contact.company}</strong></p>
                <p className="text-gray-700">Email: info@shawmekimmigration.com</p>
                <p className="text-gray-700">{currentLanguage === 'ar' ? 'الهاتف:' : 'Phone:'} +966501367513</p>
                <p className="text-gray-700">{currentLanguage === 'ar' ? 'العنوان: الشوامخ، المملكة العربية السعودية' : 'Address: Alshawamekh, Saudi Arabia'}</p>
              </div>
            </div>

            {/* Final Notice */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-red-800 font-semibold text-center">
                {t.finalNotice.text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer; 