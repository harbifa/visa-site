import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const CookiePolicy = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Cookie Policy",
      subtitle: "How we use cookies and tracking technologies",
      lastUpdated: "Last Updated:",
      whatAreCookies: {
        title: "What Are Cookies?",
        text: "Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site."
      },
      typesOfCookies: {
        title: "Types of Cookies We Use",
        essential: {
          title: "Essential Cookies",
          text: "These cookies are necessary for the website to function properly and cannot be disabled.",
          items: [
            "Session management",
            "Security features",
            "Form submission functionality"
          ]
        },
        analytical: {
          title: "Analytical Cookies",
          text: "These help us understand how visitors interact with our website.",
          items: [
            "Google Analytics",
            "Website usage statistics",
            "Performance monitoring"
          ]
        },
        functional: {
          title: "Functional Cookies",
          text: "These enhance your experience by remembering your preferences.",
          items: [
            "Language preferences",
            "Contact form data",
            "User preferences"
          ]
        }
      },
      thirdParty: {
        title: "Third-Party Services",
        text: "We use third-party services that may place cookies on your device:",
        items: [
          "Google Analytics: Website traffic analysis",
          "EmailJS: Contact form functionality",
          "Payment Processors: Secure payment processing"
        ]
      },
      managing: {
        title: "Managing Your Cookie Preferences",
        text: "You can control cookies through your browser settings:",
        browsers: {
          chrome: "Settings > Privacy and Security > Cookies",
          firefox: "Options > Privacy > Cookies and Site Data",
          safari: "Preferences > Privacy > Cookies",
          edge: "Settings > Site Permissions > Cookies"
        }
      },
      impact: {
        title: "Impact of Disabling Cookies",
        note: "Note:",
        text: "Disabling certain cookies may affect your experience on our website, including the ability to submit contact forms or receive personalized content."
      },
      dataProtection: {
        title: "Data Protection",
        text: "Cookie data is processed in accordance with our Privacy Policy. We implement appropriate security measures to protect the information collected through cookies. For more information about how we handle your personal data, please see our Privacy Policy."
      },
      updates: {
        title: "Updates to This Policy",
        text: "We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically."
      },
      contact: {
        title: "Contact Us",
        text: "If you have questions about our use of cookies, please contact us:",
        company: "Alshawamekh Visa Immigration"
      }
    },
    ar: {
      title: "سياسة ملفات تعريف الارتباط",
      subtitle: "كيف نستخدم ملفات تعريف الارتباط وتقنيات التتبع",
      lastUpdated: "آخر تحديث:",
      whatAreCookies: {
        title: "ما هي ملفات تعريف الارتباط؟",
        text: "ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهازك عند زيارة موقعنا الإلكتروني. تساعدنا في توفير تجربة أفضل لك من خلال تذكر تفضيلاتك وتحليل كيفية استخدامك لموقعنا."
      },
      typesOfCookies: {
        title: "أنواع ملفات تعريف الارتباط التي نستخدمها",
        essential: {
          title: "ملفات تعريف الارتباط الأساسية",
          text: "هذه ملفات تعريف الارتباط ضرورية لعمل الموقع بشكل صحيح ولا يمكن إلغاؤها.",
          items: [
            "إدارة الجلسة",
            "ميزات الأمان",
            "وظائف تقديم النماذج"
          ]
        },
        analytical: {
          title: "ملفات تعريف الارتباط التحليلية",
          text: "تساعدنا هذه في فهم كيفية تفاعل الزوار مع موقعنا.",
          items: [
            "Google Analytics",
            "إحصائيات استخدام الموقع",
            "مراقبة الأداء"
          ]
        },
        functional: {
          title: "ملفات تعريف الارتباط الوظيفية",
          text: "تعزز هذه تجربتك من خلال تذكر تفضيلاتك.",
          items: [
            "تفضيلات اللغة",
            "بيانات نموذج الاتصال",
            "تفضيلات المستخدم"
          ]
        }
      },
      thirdParty: {
        title: "خدمات الطرف الثالث",
        text: "نستخدم خدمات الطرف الثالث التي قد تضع ملفات تعريف الارتباط على جهازك:",
        items: [
          "Google Analytics: تحليل حركة الموقع",
          "EmailJS: وظائف نموذج الاتصال",
          "معالجات الدفع: معالجة الدفع الآمن"
        ]
      },
      managing: {
        title: "إدارة تفضيلات ملفات تعريف الارتباط",
        text: "يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح:",
        browsers: {
          chrome: "الإعدادات > الخصوصية والأمان > ملفات تعريف الارتباط",
          firefox: "الخيارات > الخصوصية > ملفات تعريف الارتباط وبيانات المواقع",
          safari: "التفضيلات > الخصوصية > ملفات تعريف الارتباط",
          edge: "الإعدادات > أذونات المواقع > ملفات تعريف الارتباط"
        }
      },
      impact: {
        title: "تأثير إلغاء ملفات تعريف الارتباط",
        note: "ملاحظة:",
        text: "إلغاء ملفات تعريف الارتباط معينة قد يؤثر على تجربتك على موقعنا، بما في ذلك القدرة على تقديم نماذج الاتصال أو تلقي المحتوى المخصص."
      },
      dataProtection: {
        title: "حماية البيانات",
        text: "يتم معالجة بيانات ملفات تعريف الارتباط وفقاً لسياسة الخصوصية الخاصة بنا. نطبق تدابير أمنية مناسبة لحماية المعلومات المجمعة من خلال ملفات تعريف الارتباط. لمزيد من المعلومات حول كيفية التعامل مع بياناتك الشخصية، يرجى الاطلاع على سياسة الخصوصية الخاصة بنا."
      },
      updates: {
        title: "تحديثات هذه السياسة",
        text: "قد نحدث سياسة ملفات تعريف الارتباط هذه من وقت لآخر. ستنشر أي تغييرات على هذه الصفحة مع تاريخ مراجعة محدث. نشجعك على مراجعة هذه السياسة بشكل دوري."
      },
      contact: {
        title: "اتصل بنا",
        text: "إذا كانت لديك أسئلة حول استخدامنا لملفات تعريف الارتباط، يرجى الاتصال بنا:",
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
            
            {/* Last Updated */}
            <div className="border-b pb-4">
              <p className="text-sm text-gray-600">
                <strong>{t.lastUpdated}</strong> {new Date().toLocaleDateString(currentLanguage === 'ar' ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* What Are Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.whatAreCookies.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t.whatAreCookies.text}
              </p>
            </div>

            {/* Types of Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.typesOfCookies.title}</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.typesOfCookies.essential.title}</h3>
                  <p className="text-gray-700 mb-2">
                    {t.typesOfCookies.essential.text}
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    {t.typesOfCookies.essential.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.typesOfCookies.analytical.title}</h3>
                  <p className="text-gray-700 mb-2">
                    {t.typesOfCookies.analytical.text}
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    {t.typesOfCookies.analytical.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.typesOfCookies.functional.title}</h3>
                  <p className="text-gray-700 mb-2">
                    {t.typesOfCookies.functional.text}
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    {t.typesOfCookies.functional.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.thirdParty.title}</h2>
              <p className="text-gray-700 mb-4">
                {t.thirdParty.text}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.thirdParty.items.map((item, index) => (
                  <li key={index}><strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}</li>
                ))}
              </ul>
            </div>

            {/* Managing Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.managing.title}</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  {t.managing.text}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Chrome</h4>
                    <p className="text-sm text-gray-600">{t.managing.browsers.chrome}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Firefox</h4>
                    <p className="text-sm text-gray-600">{t.managing.browsers.firefox}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Safari</h4>
                    <p className="text-sm text-gray-600">{t.managing.browsers.safari}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Edge</h4>
                    <p className="text-sm text-gray-600">{t.managing.browsers.edge}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact of Disabling */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.impact.title}</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800">
                  <strong>{t.impact.note}</strong> {t.impact.text}
                </p>
              </div>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.dataProtection.title}</h2>
              <p className="text-gray-700">
                {t.dataProtection.text}
              </p>
            </div>

            {/* Updates to Policy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.updates.title}</h2>
              <p className="text-gray-700">
                {t.updates.text}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy; 