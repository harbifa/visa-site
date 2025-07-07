import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Star, Globe, Users, Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

const NewPrograms = () => {
  const { currentLanguage } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    en: {
      title: "New Immigration Programs Available Now",
      subtitle: "Latest opportunities for skilled workers, students, and families seeking to immigrate",
      readTime: "6 min read",
      publishDate: "December 5, 2024",
      author: "Alshawamekh Team",
      backToBloc: "Back to Blog",
      
      intro: "The immigration landscape is constantly evolving, with new programs and opportunities emerging regularly. Here are the latest programs and pathways that could be your ticket to a new life abroad.",
      
      programs: [
        {
          country: "Canada",
          icon: "maple-leaf",
          title: "Category-Based Selection System",
          description: "Canada has introduced new category-based draws for specific professions in Express Entry.",
          highlights: [
            "Healthcare workers priority processing",
            "French language speakers bonus points",
            "STEM professionals targeted draws",
            "Transport sector workers special streams"
          ],
          requirements: "IELTS 7.0+, Bachelor's degree, 1+ years experience",
          processing: "6-8 months"
        },
        {
          country: "Australia",
          icon: "kangaroo",
          title: "Skills in Demand Visa (subclass 494)",
          description: "New regional skilled visa for skilled workers willing to live in regional Australia.",
          highlights: [
            "5-year temporary visa pathway",
            "Path to permanent residence after 3 years",
            "Lower points requirement than 189 visa",
            "Access to all of Australia except major cities"
          ],
          requirements: "IELTS 6.0+, Skills assessment, 65+ points",
          processing: "8-12 months"
        },
        {
          country: "Germany",
          icon: "building",
          title: "Opportunity Card (Chancenkarte)",
          description: "New points-based system for skilled workers to search for employment in Germany.",
          highlights: [
            "1-year job search visa",
            "Part-time work allowed during search",
            "Points based on qualifications and language",
            "No job offer required initially"
          ],
          requirements: "German A1 or English B2, University degree or vocational training",
          processing: "2-4 months"
        },
        {
          country: "UK",
          icon: "crown",
          title: "Global Talent Visa Expansion",
          description: "Expanded categories for exceptional talent in various fields.",
          highlights: [
            "New categories: Arts, Culture, and Digital Technology",
            "Fast-track endorsement process",
            "No job offer required",
            "Path to settlement after 3-5 years"
          ],
          requirements: "Exceptional talent or promise in eligible field",
          processing: "3-8 weeks"
        }
      ],
      
      tips: {
        title: "How to Take Advantage of These Programs",
        items: [
          "Act quickly - many programs have limited spots or may change requirements",
          "Ensure your language test scores meet the requirements",
          "Get your credentials assessed early",
          "Consider hiring a certified immigration consultant for complex applications",
          "Stay updated with official government websites for the latest changes"
        ]
      },
      
      conclusion: "These new programs represent exciting opportunities for qualified candidates. The key is to act quickly and ensure you meet all requirements before applying.",
      
      cta: {
        title: "Ready to Explore These Opportunities?",
        description: "Our experts can help you determine which program is best for your profile and guide you through the application process.",
        buttonText: "Get Program Assessment"
      }
    },
    
    ar: {
      title: "برامج الهجرة الجديدة المتاحة الآن",
      subtitle: "أحدث الفرص للعمال المهرة والطلاب والعائلات الساعية للهجرة",
      readTime: "6 دقائق قراءة",
      publishDate: "5 ديسمبر 2024",
      author: "فريق الشوامخ",
      backToBloc: "العودة للمدونة",
      
      intro: "مشهد الهجرة يتطور باستمرار، مع ظهور برامج وفرص جديدة بانتظام. إليك أحدث البرامج والمسارات التي يمكن أن تكون تذكرتك لحياة جديدة في الخارج.",
      
      programs: [
        {
          country: "كندا",
          icon: "maple-leaf",
          title: "نظام الاختيار القائم على الفئات",
          description: "قدمت كندا سحوبات جديدة قائمة على فئات محددة للمهن المحددة في الدخول السريع.",
          highlights: [
            "معالجة أولوية لعمال الرعاية الصحية",
            "نقاط مكافأة للمتحدثين بالفرنسية",
            "سحوبات مستهدفة للمهنيين في العلوم والتكنولوجيا",
            "مسارات خاصة لعمال قطاع النقل"
          ],
          requirements: "آيلتس 7.0+، درجة البكالوريوس، خبرة سنة واحدة+",
          processing: "6-8 أشهر"
        },
        {
          country: "أستراليا",
          icon: "kangaroo",
          title: "فيزا المهارات المطلوبة (الفئة الفرعية 494)",
          description: "فيزا مهارات إقليمية جديدة للعمال المهرة الراغبين في العيش في أستراليا الإقليمية.",
          highlights: [
            "مسار فيزا مؤقتة لمدة 5 سنوات",
            "مسار للإقامة الدائمة بعد 3 سنوات",
            "متطلبات نقاط أقل من فيزا 189",
            "الوصول لكل أستراليا باستثناء المدن الكبرى"
          ],
          requirements: "آيلتس 6.0+، تقييم المهارات، 65+ نقطة",
          processing: "8-12 شهراً"
        },
        {
          country: "ألمانيا",
          icon: "building",
          title: "بطاقة الفرصة (Chancenkarte)",
          description: "نظام جديد قائم على النقاط للعمال المهرة للبحث عن عمل في ألمانيا.",
          highlights: [
            "فيزا البحث عن عمل لمدة سنة",
            "العمل بدوام جزئي مسموح أثناء البحث",
            "نقاط بناءً على المؤهلات واللغة",
            "لا يتطلب عرض عمل في البداية"
          ],
          requirements: "ألمانية A1 أو إنجليزية B2، درجة جامعية أو تدريب مهني",
          processing: "2-4 أشهر"
        },
        {
          country: "المملكة المتحدة",
          icon: "crown",
          title: "توسيع فيزا المواهب العالمية",
          description: "فئات موسعة للمواهب الاستثنائية في مجالات مختلفة.",
          highlights: [
            "فئات جديدة: الفنون والثقافة والتكنولوجيا الرقمية",
            "عملية تأييد سريعة",
            "لا يتطلب عرض عمل",
            "مسار للاستقرار بعد 3-5 سنوات"
          ],
          requirements: "موهبة استثنائية أو وعد في المجال المؤهل",
          processing: "3-8 أسابيع"
        }
      ],
      
      tips: {
        title: "كيفية الاستفادة من هذه البرامج",
        items: [
          "اتصرف بسرعة - العديد من البرامج لديها مقاعد محدودة أو قد تغير المتطلبات",
          "تأكد من أن درجات اختبار اللغة تلبي المتطلبات",
          "احصل على تقييم أوراق اعتمادك مبكراً",
          "اعتبر توظيف استشاري هجرة معتمد للطلبات المعقدة",
          "ابق محدثاً مع مواقع الحكومة الرسمية لأحدث التغييرات"
        ]
      },
      
      conclusion: "هذه البرامج الجديدة تمثل فرصاً مثيرة للمرشحين المؤهلين. المفتاح هو التصرف بسرعة والتأكد من تلبية جميع المتطلبات قبل التقديم.",
      
      cta: {
        title: "مستعد لاستكشاف هذه الفرص؟",
        description: "يمكن لخبرائنا مساعدتك في تحديد البرنامج الأفضل لملفك الشخصي وإرشادك خلال عملية التطبيق.",
        buttonText: "احصل على تقييم البرنامج"
      }
    }
  };

  const t = content[currentLanguage as keyof typeof content];

  const getCountryIcon = (iconName: string) => {
    switch (iconName) {
      case 'maple-leaf': return <Globe className="text-red-600" size={24} />;
      case 'kangaroo': return <Star className="text-blue-600" size={24} />;
      case 'building': return <Briefcase className="text-gray-700" size={24} />;
      case 'crown': return <GraduationCap className="text-purple-600" size={24} />;
      default: return <Globe className="text-blue-600" size={24} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 rtl-support">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-purple-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2 rtl:mr-0 rtl:ml-2 rtl:scale-x-[-1]" />
            {t.backToBloc}
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-purple-100 mb-6">{t.subtitle}</p>
          
          <div className="flex flex-wrap items-center gap-4 text-purple-100">
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
      <article className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">{t.intro}</p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {t.programs.map((program, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {getCountryIcon(program.icon)}
                  <div className="ml-3 rtl:ml-0 rtl:mr-3">
                    <h3 className="text-xl font-bold text-gray-900">{program.country}</h3>
                    <h4 className="text-lg font-semibold text-purple-600">{program.title}</h4>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{program.description}</p>
                
                <div className="space-y-2 mb-4">
                  {program.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start">
                      <Star className="text-yellow-500 mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-600 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-gray-900">
                      {currentLanguage === 'ar' ? 'المتطلبات:' : 'Requirements:'}
                    </span>
                    <span className="text-gray-600">{program.requirements}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-gray-900">
                      {currentLanguage === 'ar' ? 'المعالجة:' : 'Processing:'}
                    </span>
                    <span className="text-gray-600">{program.processing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <section className="mb-12 bg-yellow-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.tips.title}</h2>
            <div className="space-y-3">
              {t.tips.items.map((tip, index) => (
                <div key={index} className="flex items-start">
                  <Star className="text-yellow-600 mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12 p-6 bg-purple-50 rounded-lg">
            <p className="text-lg text-gray-700 leading-relaxed">{t.conclusion}</p>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
            <p className="text-purple-100 mb-6 text-lg">{t.cta.description}</p>
            
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t.cta.buttonText}
            </Link>
          </section>

        </div>
      </article>
    </div>
  );
};

export default NewPrograms; 