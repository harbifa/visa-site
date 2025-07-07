import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const TermsOfService = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Terms of Service",
      subtitle: "Please read these terms carefully before using our services",
      lastUpdated: "Last Updated:",
      acceptance: {
        title: "1. Acceptance of Terms",
        text: "By accessing and using the services of Alshawamekh Visa Immigration (\"Company,\" \"we,\" \"us,\" or \"our\"), you (\"Client,\" \"you,\" or \"your\") agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services."
      },
      services: {
        title: "2. Services Description",
        text: "We provide immigration consultation services including but not limited to:",
        items: [
          "Immigration consultation and advice",
          "Visa application preparation and submission",
          "Document verification and authentication",
          "Immigration program assessment",
          "Application tracking and follow-up",
          "Legal representation (where applicable)"
        ]
      },
      clientResponsibilities: {
        title: "3. Client Responsibilities",
        text: "As our client, you agree to:",
        items: [
          "Provide accurate, complete, and truthful information",
          "Submit all required documents in a timely manner",
          "Pay all fees as agreed upon in the service agreement",
          "Cooperate fully with our requests for information",
          "Notify us immediately of any changes in your circumstances",
          "Comply with all immigration laws and regulations",
          "Not engage in fraudulent or illegal activities"
        ]
      },
      companyResponsibilities: {
        title: "4. Company Responsibilities",
        text: "We commit to:",
        items: [
          "Provide professional immigration consultation services",
          "Handle your case with due diligence and care",
          "Maintain confidentiality of your personal information",
          "Keep you informed about your case progress",
          "Comply with ICCRC regulations and professional standards",
          "Act in your best interests within our professional capacity"
        ]
      },
      fees: {
        title: "5. Fees and Payment",
        serviceFees: {
          title: "Service Fees",
          items: [
            "All fees are clearly outlined in your service agreement",
            "Fees are non-refundable once services have commenced",
            "Government fees are separate and non-refundable",
            "Additional fees may apply for extra services not included in the original agreement"
          ]
        },
        paymentTerms: {
          title: "Payment Terms",
          items: [
            "Payment is due as specified in your service agreement",
            "Late payments may result in suspension of services",
            "We accept various payment methods as specified on our website"
          ]
        }
      },
      noGuarantee: {
        title: "6. No Guarantee of Results",
        disclaimer: "IMPORTANT DISCLAIMER",
        text: "We cannot and do not guarantee the success of any immigration application or the approval of any visa. Immigration decisions are made solely by government authorities and are subject to their discretion.",
        items: [
          "Immigration laws and policies can change without notice",
          "Each case is unique and results may vary",
          "We are not responsible for government processing delays",
          "Refusal of applications does not entitle clients to fee refunds"
        ]
      },
      confidentiality: {
        title: "7. Confidentiality",
        text: "We maintain strict confidentiality regarding all client information in accordance with professional standards and applicable privacy laws. Information will only be shared with third parties as necessary for your case or as required by law."
      },
      termination: {
        title: "8. Termination of Services",
        byClient: {
          title: "By Client",
          text: "You may terminate our services at any time with written notice. Fees paid for services already rendered will not be refunded."
        },
        byCompany: {
          title: "By Company",
          text: "We may terminate our services if:",
          items: [
            "Client fails to pay fees as agreed",
            "Client provides false or misleading information",
            "Client engages in illegal or unethical conduct",
            "There is a conflict of interest",
            "Client fails to cooperate or follow our advice"
          ]
        }
      },
      liability: {
        title: "9. Limitation of Liability",
        text: "To the maximum extent permitted by law, Alshawamekh Visa Immigration shall not be liable for:",
        items: [
          "Any indirect, incidental, or consequential damages",
          "Loss of income, profits, or business opportunities",
          "Government processing delays or decisions",
          "Changes in immigration laws or policies",
          "Technical issues with government systems"
        ],
        totalLiability: "Our total liability shall not exceed the amount of fees paid for our services."
      },
      dispute: {
        title: "10. Dispute Resolution",
        text: "In case of disputes, we encourage resolution through direct communication. If necessary:",
        items: [
          "Disputes will be governed by Saudi Arabian law",
          "Professional complaints may be filed with ICCRC",
          "Mediation will be attempted before litigation"
        ]
      },
      intellectualProperty: {
        title: "11. Intellectual Property",
        text: "All content on our website, including text, graphics, logos, and software, is the property of Alshawamekh Visa Immigration and is protected by copyright and other intellectual property laws."
      },
      changes: {
        title: "12. Changes to Terms",
        text: "We reserve the right to modify these terms at any time. Changes will be posted on our website and will take effect immediately upon posting. Continued use of our services constitutes acceptance of modified terms."
      },
      contact: {
        title: "Contact Information",
        text: "For questions about these Terms of Service, please contact us:",
        company: "Alshawamekh Visa Immigration"
      },
      legalNotice: {
        title: "Legal Notice:",
        text: "These terms constitute a legal agreement. If you do not understand any provision, please seek legal advice before using our services."
      }
    },
    ar: {
      title: "شروط الخدمة",
      subtitle: "يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا",
      lastUpdated: "آخر تحديث:",
      acceptance: {
        title: "1. قبول الشروط",
        text: "بالوصول واستخدام خدمات الشوامخ للهجرة والتأشيرات (\"الشركة\" أو \"نحن\" أو \"شركتنا\")، أنت (\"العميل\" أو \"أنت\") توافق على الالتزام بشروط الخدمة هذه وجميع القوانين واللوائح المعمول بها. إذا كنت لا توافق على أي من هذه الشروط، فأنت محظور من استخدام خدماتنا."
      },
      services: {
        title: "2. وصف الخدمات",
        text: "نقدم خدمات الاستشارات الخاصة بالهجرة بما في ذلك على سبيل المثال لا الحصر:",
        items: [
          "الاستشارات والنصائح الخاصة بالهجرة",
          "إعداد وتقديم طلبات التأشيرة",
          "التحقق من الوثائق والتصديق عليها",
          "تقييم برامج الهجرة",
          "تتبع الطلبات والمتابعة",
          "التمثيل القانوني (حسب الحاجة)"
        ]
      },
      clientResponsibilities: {
        title: "3. مسؤوليات العميل",
        text: "كعميلنا، توافق على:",
        items: [
          "تقديم معلومات دقيقة وكاملة وصادقة",
          "تقديم جميع الوثائق المطلوبة في الوقت المحدد",
          "دفع جميع الرسوم كما هو متفق عليه في اتفاقية الخدمة",
          "التعاون الكامل مع طلباتنا للمعلومات",
          "إخطارنا فوراً بأي تغييرات في ظروفك",
          "الامتثال لجميع قوانين ولوائح الهجرة",
          "عدم الانخراط في أنشطة احتيالية أو غير قانونية"
        ]
      },
      companyResponsibilities: {
        title: "4. مسؤوليات الشركة",
        text: "نلتزم بـ:",
        items: [
          "تقديم خدمات الاستشارات المهنية للهجرة",
          "التعامل مع حالتك بعناية واجتهاد",
          "الحفاظ على سرية معلوماتك الشخصية",
          "إبقاؤك على اطلاع بتقدم حالتك",
          "الامتثال للوائح ICCRC والمعايير المهنية",
          "العمل لمصلحتك ضمن قدرتنا المهنية"
        ]
      },
      fees: {
        title: "5. الرسوم والدفع",
        serviceFees: {
          title: "رسوم الخدمة",
          items: [
            "جميع الرسوم موضحة بوضوح في اتفاقية الخدمة الخاصة بك",
            "الرسوم غير قابلة للاسترداد بمجرد بدء الخدمات",
            "رسوم الحكومة منفصلة وغير قابلة للاسترداد",
            "قد تطبق رسوم إضافية للخدمات الإضافية غير المدرجة في الاتفاقية الأصلية"
          ]
        },
        paymentTerms: {
          title: "شروط الدفع",
          items: [
            "الدفع مستحق كما هو محدد في اتفاقية الخدمة الخاصة بك",
            "التأخير في الدفع قد يؤدي إلى تعليق الخدمات",
            "نقبل طرق دفع متنوعة كما هو محدد على موقعنا الإلكتروني"
          ]
        }
      },
      noGuarantee: {
        title: "6. عدم ضمان النتائج",
        disclaimer: "إخلاء مسؤولية مهم",
        text: "لا يمكننا ولا نضمن نجاح أي طلب هجرة أو الموافقة على أي تأشيرة. قرارات الهجرة تتخذ من قبل السلطات الحكومية فقط وتخضع لتقديرها.",
        items: [
          "قوانين وسياسات الهجرة يمكن أن تتغير دون إشعار",
          "كل حالة فريدة والنتائج قد تختلف",
          "نحن غير مسؤولين عن تأخير المعالجة الحكومية",
          "رفض الطلبات لا يخول العملاء لاسترداد الرسوم"
        ]
      },
      confidentiality: {
        title: "7. السرية",
        text: "نحافظ على السرية الصارمة فيما يتعلق بجميع معلومات العملاء وفقاً للمعايير المهنية وقوانين الخصوصية المعمول بها. ستتم مشاركة المعلومات مع أطراف ثالثة فقط حسب الحاجة لحالتك أو حسب ما يتطلبه القانون."
      },
      termination: {
        title: "8. إنهاء الخدمات",
        byClient: {
          title: "من قبل العميل",
          text: "يمكنك إنهاء خدماتنا في أي وقت بإشعار كتابي. الرسوم المدفوعة للخدمات المقدمة بالفعل لن تسترد."
        },
        byCompany: {
          title: "من قبل الشركة",
          text: "قد ننهي خدماتنا إذا:",
          items: [
            "فشل العميل في دفع الرسوم كما هو متفق عليه",
            "قدم العميل معلومات خاطئة أو مضللة",
            "انخرط العميل في سلوك غير قانوني أو غير أخلاقي",
            "كان هناك تضارب في المصالح",
            "فشل العميل في التعاون أو اتباع نصائحنا"
          ]
        }
      },
      liability: {
        title: "9. حدود المسؤولية",
        text: "إلى أقصى حد يسمح به القانون، الشوامخ للهجرة والتأشيرات غير مسؤولة عن:",
        items: [
          "أي أضرار غير مباشرة أو عرضية أو تبعية",
          "فقدان الدخل أو الأرباح أو الفرص التجارية",
          "تأخير المعالجة الحكومية أو القرارات",
          "التغييرات في قوانين أو سياسات الهجرة",
          "المشاكل التقنية مع أنظمة الحكومة"
        ],
        totalLiability: "مسؤوليتنا الإجمالية لن تتجاوز مبلغ الرسوم المدفوعة مقابل خدماتنا."
      },
      dispute: {
        title: "10. حل النزاعات",
        text: "في حالة النزاعات، نشجع الحل من خلال التواصل المباشر. إذا لزم الأمر:",
        items: [
          "النزاعات ستحكم بموجب القانون السعودي",
          "يمكن تقديم الشكاوى المهنية إلى ICCRC",
          "ستتم محاولة الوساطة قبل التقاضي"
        ]
      },
      intellectualProperty: {
        title: "11. الملكية الفكرية",
        text: "جميع المحتويات على موقعنا الإلكتروني، بما في ذلك النصوص والرسومات والشعارات والبرامج، هي ملكية الشوامخ للهجرة والتأشيرات ومحمية بحقوق الطبع والنشر وقوانين الملكية الفكرية الأخرى."
      },
      changes: {
        title: "12. التغييرات على الشروط",
        text: "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. ستنشر التغييرات على موقعنا الإلكتروني وستسري فوراً بعد النشر. الاستمرار في استخدام خدماتنا يشكل قبولاً للشروط المعدلة."
      },
      contact: {
        title: "معلومات الاتصال",
        text: "للاستفسارات حول شروط الخدمة هذه، يرجى الاتصال بنا:",
        company: "الشوامخ للهجرة والتأشيرات"
      },
      legalNotice: {
        title: "إشعار قانوني:",
        text: "هذه الشروط تشكل اتفاقاً قانونياً. إذا كنت لا تفهم أي بند، يرجى طلب المشورة القانونية قبل استخدام خدماتنا."
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

            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.acceptance.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t.acceptance.text}
              </p>
            </div>

            {/* Services Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
              <p className="text-gray-700 mb-4">{t.services.text}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.services.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
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

            {/* Company Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.companyResponsibilities.title}</h2>
              <p className="text-gray-700 mb-4">{t.companyResponsibilities.text}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.companyResponsibilities.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Fees and Payment */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.fees.title}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.fees.serviceFees.title}</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    {t.fees.serviceFees.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.fees.paymentTerms.title}</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    {t.fees.paymentTerms.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* No Guarantee of Results */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.noGuarantee.title}</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-yellow-800 font-semibold">{t.noGuarantee.disclaimer}</p>
              </div>
              <p className="text-gray-700 mb-4">
                {t.noGuarantee.text}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.noGuarantee.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Confidentiality */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.confidentiality.title}</h2>
              <p className="text-gray-700">
                {t.confidentiality.text}
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.termination.title}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.termination.byClient.title}</h3>
                  <p className="text-gray-700">
                    {t.termination.byClient.text}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.termination.byCompany.title}</h3>
                  <p className="text-gray-700 mb-2">{t.termination.byCompany.text}</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    {t.termination.byCompany.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.liability.title}</h2>
              <p className="text-gray-700 mb-4">
                {t.liability.text}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.liability.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-700 mt-4">
                {t.liability.totalLiability}
              </p>
            </div>

            {/* Dispute Resolution */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.dispute.title}</h2>
              <p className="text-gray-700 mb-4">
                {t.dispute.text}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.dispute.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.intellectualProperty.title}</h2>
              <p className="text-gray-700">
                {t.intellectualProperty.text}
              </p>
            </div>

            {/* Changes to Terms */}
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

            {/* Legal Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>{t.legalNotice.title}</strong> {t.legalNotice.text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService; 