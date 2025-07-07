import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const PrivacyPolicy = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy",
      subtitle: "Your privacy and data protection are our top priorities",
      lastUpdated: "Last Updated:",
      introduction: {
        title: "Introduction",
        text: "Alshawamekh Visa Immigration (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our immigration consultation services."
      },
      informationCollect: {
        title: "Information We Collect",
        personalInfo: {
          title: "Personal Information",
          text: "We may collect the following personal information:",
          items: [
            "Full name and contact information (email, phone, address)",
            "Passport and identification document details",
            "Educational qualifications and work experience",
            "Immigration history and current status",
            "Family member information (for family visa applications)",
            "Financial information (for visa application purposes)",
            "Any other information relevant to your immigration case"
          ]
        },
        autoInfo: {
          title: "Automatically Collected Information",
          items: [
            "IP address and browser information",
            "Website usage data and analytics",
            "Cookies and tracking technologies",
            "Device and location information"
          ]
        }
      },
      howWeUse: {
        title: "How We Use Your Information",
        text: "We use your information for the following purposes:",
        items: [
          "Providing immigration consultation and visa services",
          "Preparing and submitting visa applications on your behalf",
          "Communicating with immigration authorities",
          "Scheduling appointments and follow-ups",
          "Improving our services and website functionality",
          "Compliance with legal and regulatory requirements",
          "Marketing communications (with your consent)"
        ]
      },
      sharing: {
        title: "Information Sharing and Disclosure",
        text: "We may share your information with:",
        items: [
          "Immigration Authorities: As required for visa applications",
          "ICCRC (Immigration Consultants of Canada Regulatory Council): For regulatory compliance",
          "Third-party Service Providers: Translation services, document verification, payment processors",
          "Legal Authorities: When required by law or court order",
          "Professional Partners: Lawyers, accountants, or other professionals assisting with your case"
        ],
        note: "We do not sell, rent, or trade your personal information to third parties for marketing purposes."
      },
      security: {
        title: "Data Security",
        text: "We implement appropriate security measures to protect your information:",
        items: [
          "SSL encryption for data transmission",
          "Secure servers and databases",
          "Access controls and employee training",
          "Regular security audits and updates",
          "Physical security measures for document storage"
        ]
      },
      retention: {
        title: "Data Retention",
        text: "We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Immigration files are typically retained for 7 years after case completion as required by regulatory guidelines."
      },
      rights: {
        title: "Your Rights",
        text: "You have the right to:",
        items: [
          "Access your personal information",
          "Correct or update your information",
          "Request deletion of your data (subject to legal requirements)",
          "Withdraw consent for marketing communications",
          "File a complaint with regulatory authorities"
        ]
      },
      cookies: {
        title: "Cookies and Tracking",
        text: "Our website uses cookies to improve functionality and analyze usage. You can control cookie settings through your browser. For detailed information, please see our Cookie Policy."
      },
      transfers: {
        title: "International Data Transfers",
        text: "As we provide services for multiple countries, your information may be transferred and processed in different jurisdictions. We ensure appropriate safeguards are in place for international transfers."
      },
      changes: {
        title: "Changes to This Policy",
        text: "We may update this Privacy Policy periodically. We will notify you of significant changes by posting the updated policy on our website and updating the \"Last Updated\" date."
      },
      contact: {
        title: "Contact Us",
        text: "If you have questions about this Privacy Policy or our data practices, please contact us:",
        company: "Alshawamekh Visa Immigration"
      },
      disclaimer: {
        title: "Important:",
        text: "This Privacy Policy is for informational purposes. For specific legal advice regarding your privacy rights, please consult with a qualified attorney."
      }
    },
    ar: {
      title: "سياسة الخصوصية",
      subtitle: "خصوصيتك وحماية بياناتك هي أولويتنا القصوى",
      lastUpdated: "آخر تحديث:",
      introduction: {
        title: "المقدمة",
        text: "تلتزم الشوامخ للهجرة والتأشيرات (\"نحن\" أو \"شركتنا\") بحماية خصوصيتك ومعلوماتك الشخصية. توضح سياسة الخصوصية هذه كيف نجمع ونستخدم ونكشف ونحمي معلوماتك عند زيارة موقعنا الإلكتروني أو استخدام خدمات الاستشارات الخاصة بالهجرة."
      },
      informationCollect: {
        title: "المعلومات التي نجمعها",
        personalInfo: {
          title: "المعلومات الشخصية",
          text: "قد نجمع المعلومات الشخصية التالية:",
          items: [
            "الاسم الكامل ومعلومات الاتصال (البريد الإلكتروني، الهاتف، العنوان)",
            "تفاصيل جواز السفر ووثائق الهوية",
            "المؤهلات التعليمية وخبرة العمل",
            "تاريخ الهجرة والوضع الحالي",
            "معلومات أفراد العائلة (لطلبات تأشيرات العائلة)",
            "المعلومات المالية (لأغراض طلب التأشيرة)",
            "أي معلومات أخرى ذات صلة بحالة الهجرة الخاصة بك"
          ]
        },
        autoInfo: {
          title: "المعلومات المجمعة تلقائياً",
          items: [
            "عنوان IP ومعلومات المتصفح",
            "بيانات استخدام الموقع والتحليلات",
            "ملفات تعريف الارتباط وتقنيات التتبع",
            "معلومات الجهاز والموقع"
          ]
        }
      },
      howWeUse: {
        title: "كيف نستخدم معلوماتك",
        text: "نستخدم معلوماتك للأغراض التالية:",
        items: [
          "تقديم استشارات الهجرة وخدمات التأشيرات",
          "إعداد وتقديم طلبات التأشيرة نيابة عنك",
          "التواصل مع سلطات الهجرة",
          "جدولة المواعيد والمتابعات",
          "تحسين خدماتنا ووظائف الموقع",
          "الامتثال للمتطلبات القانونية والتنظيمية",
          "الاتصالات التسويقية (بموافقتك)"
        ]
      },
      sharing: {
        title: "مشاركة المعلومات والإفصاح عنها",
        text: "قد نشارك معلوماتك مع:",
        items: [
          "سلطات الهجرة: حسب الحاجة لطلبات التأشيرة",
          "ICCRC (مجلس تنظيم مستشاري الهجرة الكندي): للامتثال التنظيمي",
          "مقدمي الخدمات الطرف الثالث: خدمات الترجمة، التحقق من الوثائق، معالجات الدفع",
          "السلطات القانونية: عند الطلب بموجب القانون أو أمر المحكمة",
          "الشركاء المهنيين: المحامون، المحاسبون، أو المهنيون الآخرون المساعدون في قضيتك"
        ],
        note: "نحن لا نبيع أو نؤجر أو نتاجر بمعلوماتك الشخصية لأطراف ثالثة لأغراض تسويقية."
      },
      security: {
        title: "أمان البيانات",
        text: "نطبق تدابير أمنية مناسبة لحماية معلوماتك:",
        items: [
          "تشفير SSL لنقل البيانات",
          "خوادم وقواعد بيانات آمنة",
          "ضوابط الوصول وتدريب الموظفين",
          "عمليات تدقيق أمنية منتظمة وتحديثات",
          "تدابير أمنية مادية لتخزين الوثائق"
        ]
      },
      retention: {
        title: "الاحتفاظ بالبيانات",
        text: "نحتفظ بمعلوماتك الشخصية طالما كان ذلك ضرورياً لتقديم خدماتنا والامتثال للالتزامات القانونية. عادة ما يتم الاحتفاظ بملفات الهجرة لمدة 7 سنوات بعد اكتمال القضية كما هو مطلوب بموجب الإرشادات التنظيمية."
      },
      rights: {
        title: "حقوقك",
        text: "لك الحق في:",
        items: [
          "الوصول إلى معلوماتك الشخصية",
          "تصحيح أو تحديث معلوماتك",
          "طلب حذف بياناتك (رهناً بالمتطلبات القانونية)",
          "سحب الموافقة على الاتصالات التسويقية",
          "تقديم شكوى إلى السلطات التنظيمية"
        ]
      },
      cookies: {
        title: "ملفات تعريف الارتباط والتتبع",
        text: "يستخدم موقعنا ملفات تعريف الارتباط لتحسين الوظائف وتحليل الاستخدام. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك. للحصول على معلومات مفصلة، يرجى الاطلاع على سياسة ملفات تعريف الارتباط الخاصة بنا."
      },
      transfers: {
        title: "نقل البيانات الدولية",
        text: "نظراً لأننا نقدم خدمات لعدة دول، قد يتم نقل ومعالجة معلوماتك في ولايات قضائية مختلفة. نضمن وجود ضمانات مناسبة لعمليات النقل الدولية."
      },
      changes: {
        title: "التغييرات على هذه السياسة",
        text: "قد نحدث سياسة الخصوصية هذه بشكل دوري. سنخطرك بالتغييرات المهمة من خلال نشر السياسة المحدثة على موقعنا وتحديث تاريخ \"آخر تحديث\"."
      },
      contact: {
        title: "اتصل بنا",
        text: "إذا كان لديك أسئلة حول سياسة الخصوصية هذه أو ممارسات البيانات الخاصة بنا، يرجى الاتصال بنا:",
        company: "الشوامخ للهجرة والتأشيرات"
      },
      disclaimer: {
        title: "مهم:",
        text: "سياسة الخصوصية هذه لأغراض إعلامية. للحصول على مشورة قانونية محددة بشأن حقوق الخصوصية الخاصة بك، يرجى استشارة محام مؤهل."
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
            
            {/* Last Updated */}
            <div className="border-b pb-4">
              <p className="text-sm text-gray-600">
                <strong>{t.lastUpdated}</strong> {new Date().toLocaleDateString(currentLanguage === 'ar' ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.introduction.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t.introduction.text}
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.informationCollect.title}</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.informationCollect.personalInfo.title}</h3>
              <p className="text-gray-700 mb-4">{t.informationCollect.personalInfo.text}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                {t.informationCollect.personalInfo.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.informationCollect.autoInfo.title}</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.informationCollect.autoInfo.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.howWeUse.title}</h2>
              <p className="text-gray-700 mb-4">{t.howWeUse.text}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.howWeUse.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.sharing.title}</h2>
              <p className="text-gray-700 mb-4">{t.sharing.text}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.sharing.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-700 mt-4">
                {t.sharing.note}
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.security.title}</h2>
              <p className="text-gray-700 mb-4">{t.security.text}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.security.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.retention.title}</h2>
              <p className="text-gray-700">
                {t.retention.text}
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.rights.title}</h2>
              <p className="text-gray-700 mb-4">{t.rights.text}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.rights.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.cookies.title}</h2>
              <p className="text-gray-700">
                {t.cookies.text}
              </p>
            </div>

            {/* International Transfers */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.transfers.title}</h2>
              <p className="text-gray-700">
                {t.transfers.text}
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.changes.title}</h2>
              <p className="text-gray-700">
                {t.changes.text}
              </p>
            </div>

            {/* Contact Information */}
            <div className="border-t pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
              <p className="text-gray-700 mb-4">
                {t.contact.text}
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>{t.contact.company}</strong></p>
                <p className="text-gray-700">Email: info@shawmekimmigration.com</p>
                <p className="text-gray-700">{currentLanguage === 'ar' ? 'الهاتف:' : 'Phone:'} +966501367513</p>
                                 <p className="text-gray-700">{currentLanguage === 'ar' ? 'العنوان: الشوامخ، المملكة العربية السعودية' : 'Address: Alshawamekh, Saudi Arabia'}</p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>{t.disclaimer.title}</strong> {t.disclaimer.text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 