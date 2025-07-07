import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, CheckCircle, Users, Target, Lightbulb } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

const SuccessTips = () => {
  const { currentLanguage } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    en: {
      title: "5 Key Tips for Immigration Success",
      subtitle: "Expert advice from our certified consultants to maximize your chances of approval",
      readTime: "4 min read",
      publishDate: "December 1, 2024",
      author: "Alshawamekh Team",
      backToBloc: "Back to Blog",
      
      intro: "After helping thousands of clients achieve their immigration goals, we've identified the key factors that make the difference between success and disappointment. Here are our top 5 tips for immigration success.",
      
      tips: [
        {
          number: 1,
          title: "Start Early and Plan Ahead",
          description: "Immigration processes can take months or even years. The earlier you start, the better prepared you'll be.",
          details: [
            "Research your target country's requirements at least 1-2 years before applying",
            "Create a timeline with all necessary steps and deadlines",
            "Start improving weak areas of your profile immediately",
            "Keep track of changing immigration policies and requirements"
          ],
          advice: "Pro Tip: Keep a dedicated folder (physical and digital) for all immigration-related documents from day one."
        },
        {
          number: 2,
          title: "Perfect Your Language Skills",
          description: "Language proficiency is crucial for most immigration programs and significantly impacts your chances.",
          details: [
            "Aim for higher scores than the minimum requirements",
            "Take multiple practice tests before the actual exam",
            "Consider professional coaching if needed",
            "Keep your test scores valid throughout the application process"
          ],
          advice: "Pro Tip: Even if you're fluent, professional test preparation can significantly improve your scores."
        },
        {
          number: 3,
          title: "Get Professional Documentation Help",
          description: "Proper documentation is critical. Small errors can lead to delays or rejections.",
          details: [
            "Have all documents professionally translated and notarized",
            "Ensure educational credentials are properly assessed",
            "Get work experience letters from all previous employers",
            "Organize documents in the exact order required by immigration authorities"
          ],
          advice: "Pro Tip: Create multiple copies of all documents and store them in different locations (including cloud storage)."
        },
        {
          number: 4,
          title: "Maintain Honesty and Consistency",
          description: "Any inconsistencies or false information can result in permanent bans from immigration programs.",
          details: [
            "Provide accurate information in all forms and interviews",
            "Ensure consistency across all documents and applications",
            "Declare any past visa rejections or legal issues honestly",
            "Keep detailed records of all information provided"
          ],
          advice: "Pro Tip: If you're unsure about something, it's better to ask for clarification than to guess."
        },
        {
          number: 5,
          title: "Work with Certified Professionals",
          description: "Immigration laws are complex and constantly changing. Professional guidance can save time and increase success rates.",
          details: [
            "Choose ICCRC-registered or equivalent certified consultants",
            "Verify credentials and track record of any professional you hire",
            "Ensure your consultant stays updated with latest policy changes",
            "Maintain regular communication throughout the process"
          ],
          advice: "Pro Tip: A good consultant will not guarantee success but will maximize your chances through proper preparation."
        }
      ],
      
      warning: {
        title: "Common Mistakes to Avoid",
        items: [
          "Waiting until the last minute to start the process",
          "Choosing the wrong immigration program for your profile",
          "Submitting incomplete or poorly organized applications",
          "Working with unregistered or inexperienced consultants",
          "Not keeping up with policy changes and updates"
        ]
      },
      
      conclusion: "Success in immigration requires preparation, patience, and professional guidance. By following these tips and working with certified professionals, you can significantly improve your chances of achieving your immigration goals.",
      
      cta: {
        title: "Ready to Apply These Tips?",
        description: "Our certified consultants are here to guide you through every step of your immigration journey.",
        buttonText: "Start Your Journey Today"
      }
    },
    
    ar: {
      title: "5 نصائح أساسية لنجاح الهجرة",
      subtitle: "نصائح من خبرائنا المعتمدين لزيادة فرص الموافقة على طلبك",
      readTime: "4 دقائق قراءة",
      publishDate: "1 ديسمبر 2024",
      author: "فريق الشوامخ",
      backToBloc: "العودة للمدونة",
      
      intro: "بعد مساعدة آلاف العملاء في تحقيق أهداف الهجرة، حددنا العوامل الرئيسية التي تحدث الفرق بين النجاح وخيبة الأمل. إليك أهم 5 نصائح لنجاح الهجرة.",
      
      tips: [
        {
          number: 1,
          title: "ابدأ مبكراً وخطط مسبقاً",
          description: "عمليات الهجرة يمكن أن تستغرق أشهراً أو حتى سنوات. كلما بدأت مبكراً، كلما كنت أكثر استعداداً.",
          details: [
            "ابحث عن متطلبات البلد المستهدف قبل التقديم بـ 1-2 سنة على الأقل",
            "أنشئ جدولاً زمنياً بجميع الخطوات والمواعيد النهائية الضرورية",
            "ابدأ في تحسين المجالات الضعيفة في ملفك فوراً",
            "تابع تغييرات سياسات ومتطلبات الهجرة"
          ],
          advice: "نصيحة من الخبراء: احتفظ بمجلد مخصص (مادي ورقمي) لجميع المستندات المتعلقة بالهجرة من اليوم الأول."
        },
        {
          number: 2,
          title: "أتقن مهاراتك اللغوية",
          description: "إتقان اللغة أمر بالغ الأهمية لمعظم برامج الهجرة ويؤثر بشكل كبير على فرصك.",
          details: [
            "اهدف لدرجات أعلى من الحد الأدنى للمتطلبات",
            "خذ عدة اختبارات تدريبية قبل الامتحان الفعلي",
            "اعتبر التدريب المهني إذا لزم الأمر",
            "حافظ على صحة درجات اختبارك طوال عملية التطبيق"
          ],
          advice: "نصيحة من الخبراء: حتى لو كنت تتقن اللغة، التحضير المهني للاختبار يمكن أن يحسن درجاتك بشكل كبير."
        },
        {
          number: 3,
          title: "احصل على مساعدة مهنية في التوثيق",
          description: "التوثيق المناسب أمر بالغ الأهمية. الأخطاء الصغيرة يمكن أن تؤدي إلى تأخيرات أو رفض.",
          details: [
            "احصل على ترجمة وتوثيق مهني لجميع المستندات",
            "تأكد من تقييم الشهادات التعليمية بشكل صحيح",
            "احصل على خطابات خبرة عمل من جميع أصحاب العمل السابقين",
            "رتب المستندات بالترتيب المطلوب بالضبط من سلطات الهجرة"
          ],
          advice: "نصيحة من الخبراء: أنشئ عدة نسخ من جميع المستندات واحتفظ بها في أماكن مختلفة (بما في ذلك التخزين السحابي)."
        },
        {
          number: 4,
          title: "حافظ على الصدق والثبات",
          description: "أي تناقضات أو معلومات خاطئة يمكن أن تؤدي إلى حظر دائم من برامج الهجرة.",
          details: [
            "قدم معلومات دقيقة في جميع النماذج والمقابلات",
            "تأكد من الثبات عبر جميع المستندات والطلبات",
            "أعلن عن أي رفض فيزا سابق أو مسائل قانونية بصدق",
            "احتفظ بسجلات مفصلة لجميع المعلومات المقدمة"
          ],
          advice: "نصيحة من الخبراء: إذا كنت غير متأكد من شيء، من الأفضل طلب التوضيح بدلاً من التخمين."
        },
        {
          number: 5,
          title: "اعمل مع المهنيين المعتمدين",
          description: "قوانين الهجرة معقدة وتتغير باستمرار. الإرشاد المهني يمكن أن يوفر الوقت ويزيد معدلات النجاح.",
          details: [
            "اختر استشاريين مسجلين في ICCRC أو ما يعادلها من الشهادات",
            "تحقق من أوراق الاعتماد وسجل أي مهني تستأجره",
            "تأكد من أن استشاريك يبقى محدثاً بأحدث تغييرات السياسة",
            "حافظ على التواصل المنتظم طوال العملية"
          ],
          advice: "نصيحة من الخبراء: الاستشاري الجيد لن يضمن النجاح ولكن سيزيد فرصك من خلال الإعداد المناسب."
        }
      ],
      
      warning: {
        title: "أخطاء شائعة يجب تجنبها",
        items: [
          "الانتظار حتى اللحظة الأخيرة لبدء العملية",
          "اختيار برنامج الهجرة الخاطئ لملفك الشخصي",
          "تقديم طلبات غير مكتملة أو سيئة التنظيم",
          "العمل مع استشاريين غير مسجلين أو عديمي الخبرة",
          "عدم مواكبة تغييرات وتحديثات السياسة"
        ]
      },
      
      conclusion: "النجاح في الهجرة يتطلب التحضير والصبر والإرشاد المهني. باتباع هذه النصائح والعمل مع مهنيين معتمدين، يمكنك تحسين فرصك بشكل كبير في تحقيق أهداف الهجرة.",
      
      cta: {
        title: "مستعد لتطبيق هذه النصائح؟",
        description: "استشاريونا المعتمدون هنا لإرشادك خلال كل خطوة في رحلة الهجرة.",
        buttonText: "ابدأ رحلتك اليوم"
      }
    }
  };

  const t = content[currentLanguage as keyof typeof content];

  return (
    <div className="min-h-screen bg-gray-50 rtl-support">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-orange-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2 rtl:mr-0 rtl:ml-2 rtl:scale-x-[-1]" />
            {t.backToBloc}
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-orange-100 mb-6">{t.subtitle}</p>
          
          <div className="flex flex-wrap items-center gap-4 text-orange-100">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2 rtl:mr-0 rtl:ml-2" />
              <span>{t.publishDate}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2 rtl:mr-0 rtl:ml-2" />
              <span>{t.readTime}</span>
            </div>
            <div className="flex items-center">
              <Users size={16} className="mr-2 rtl:mr-0 rtl:ml-2" />
              <span>{t.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">{t.intro}</p>
          </div>

          {/* Tips */}
          <div className="space-y-12">
            {t.tips.map((tip) => (
              <section key={tip.number} className="border-l-4 border-orange-500 pl-6 rtl:pl-0 rtl:pr-6 rtl:border-l-0 rtl:border-r-4">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4 rtl:mr-0 rtl:ml-4">
                    {tip.number}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{tip.title}</h2>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">{tip.description}</p>
                
                <div className="space-y-3 mb-6">
                  {tip.details.map((detail, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-orange-600 mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg flex items-start">
                  <Lightbulb className="text-orange-600 mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0 mt-1" size={20} />
                  <p className="text-orange-800 font-medium">{tip.advice}</p>
                </div>
              </section>
            ))}
          </div>

          {/* Warning Section */}
          <section className="mt-12 bg-red-50 border border-red-200 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Target className="text-red-600 mr-3 rtl:mr-0 rtl:ml-3" size={24} />
              <h2 className="text-2xl font-bold text-red-800">{t.warning.title}</h2>
            </div>
            
            <div className="space-y-2">
              {t.warning.items.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-red-600 mr-2 rtl:mr-0 rtl:ml-2 font-bold">×</span>
                  <span className="text-red-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mt-12 p-6 bg-blue-50 rounded-lg">
            <p className="text-lg text-gray-700 leading-relaxed">{t.conclusion}</p>
          </section>

          {/* Call to Action */}
          <section className="mt-12 bg-gradient-to-r from-orange-600 to-orange-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
            <p className="text-orange-100 mb-6 text-lg">{t.cta.description}</p>
            
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t.cta.buttonText}
            </Link>
          </section>

        </div>
      </article>
    </div>
  );
};

export default SuccessTips; 