import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, CheckCircle, FileText, Users } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

const ImmigrationGuide = () => {
  const { currentLanguage } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    en: {
      title: "Complete Guide to Immigration Planning",
      subtitle: "Essential steps and documents you need to prepare for a successful immigration application",
      readTime: "8 min read",
      publishDate: "December 10, 2024",
      author: "Alshawamekh Team",
      backToBloc: "Back to Blog",
      
      intro: "Planning your immigration journey can seem overwhelming, but with the right approach and preparation, you can navigate the process successfully. This comprehensive guide will walk you through the essential steps to plan your immigration effectively.",
      
      steps: [
        {
          title: "1. Assess Your Eligibility",
          content: "Before starting any immigration process, determine which programs you qualify for based on your education, work experience, language skills, and age.",
          tips: [
            "Use official government assessment tools",
            "Consider multiple countries and programs",
            "Get a professional assessment from certified consultants",
            "Understand minimum requirements for each program"
          ]
        },
        {
          title: "2. Improve Your Profile",
          content: "Once you know your target programs, work on strengthening your application profile to increase your chances of success.",
          tips: [
            "Take language tests (IELTS, CELPIP, TEF)",
            "Get Educational Credential Assessment (ECA)",
            "Gain relevant work experience",
            "Consider additional education or certifications"
          ]
        },
        {
          title: "3. Gather Required Documents",
          content: "Document preparation is crucial and often takes the longest time. Start collecting and preparing documents early.",
          tips: [
            "Passport and travel documents",
            "Educational certificates and transcripts",
            "Work experience letters",
            "Language test results",
            "Police clearance certificates",
            "Medical examinations",
            "Proof of funds"
          ]
        },
        {
          title: "4. Submit Your Application",
          content: "With all documents ready and profile optimized, submit your application through the appropriate channels.",
          tips: [
            "Double-check all forms and documents",
            "Pay required fees",
            "Submit within deadlines",
            "Keep copies of everything",
            "Track your application status"
          ]
        },
        {
          title: "5. Prepare for Arrival",
          content: "Once approved, prepare for your new life in your destination country.",
          tips: [
            "Research housing options",
            "Understand job market",
            "Open bank accounts",
            "Plan initial settlement",
            "Connect with local communities"
          ]
        }
      ],
      
      conclusion: "Remember, immigration is a journey that requires patience, preparation, and often professional guidance. At Alshawamekh, we're here to support you every step of the way.",
      
      cta: {
        title: "Need Professional Guidance?",
        description: "Our certified immigration consultants can help you navigate this complex process.",
        buttonText: "Get Expert Consultation"
      }
    },
    
    ar: {
      title: "دليل شامل لتخطيط الهجرة",
      subtitle: "الخطوات الأساسية والمستندات التي تحتاجها لإعداد طلب هجرة ناجح",
      readTime: "8 دقائق قراءة",
      publishDate: "10 ديسمبر 2024",
      author: "فريق الشوامخ",
      backToBloc: "العودة للمدونة",
      
      intro: "قد يبدو تخطيط رحلة الهجرة أمراً معقداً، ولكن مع النهج الصحيح والإعداد المناسب، يمكنك التنقل في العملية بنجاح. سيرشدك هذا الدليل الشامل عبر الخطوات الأساسية لتخطيط هجرتك بفعالية.",
      
      steps: [
        {
          title: "1. تقييم أهليتك",
          content: "قبل بدء أي عملية هجرة، حدد البرامج التي تؤهلك لها بناءً على تعليمك وخبرتك العملية ومهاراتك اللغوية وعمرك.",
          tips: [
            "استخدم أدوات التقييم الحكومية الرسمية",
            "اعتبر عدة دول وبرامج",
            "احصل على تقييم مهني من استشاريين معتمدين",
            "افهم الحد الأدنى من المتطلبات لكل برنامج"
          ]
        },
        {
          title: "2. تحسين ملفك الشخصي",
          content: "بمجرد معرفة البرامج المستهدفة، اعمل على تقوية ملف طلبك لزيادة فرص نجاحك.",
          tips: [
            "خذ اختبارات اللغة (آيلتس، سيلبيب، تيف)",
            "احصل على تقييم الشهادات التعليمية (ECA)",
            "اكتسب خبرة عمل ذات صلة",
            "اعتبر التعليم الإضافي أو الشهادات"
          ]
        },
        {
          title: "3. جمع المستندات المطلوبة",
          content: "إعداد المستندات أمر بالغ الأهمية وغالباً ما يستغرق أطول وقت. ابدأ في جمع وإعداد المستندات مبكراً.",
          tips: [
            "جواز السفر ووثائق السفر",
            "الشهادات التعليمية والنصوص الأكاديمية",
            "خطابات الخبرة العملية",
            "نتائج اختبار اللغة",
            "شهادات عدم السوابق الجنائية",
            "الفحوصات الطبية",
            "إثبات الأموال"
          ]
        },
        {
          title: "4. تقديم طلبك",
          content: "مع جاهزية جميع المستندات وتحسين الملف الشخصي، قدم طلبك من خلال القنوات المناسبة.",
          tips: [
            "تحقق مرتين من جميع النماذج والمستندات",
            "ادفع الرسوم المطلوبة",
            "قدم ضمن المواعيد النهائية",
            "احتفظ بنسخ من كل شيء",
            "تتبع حالة طلبك"
          ]
        },
        {
          title: "5. الاستعداد للوصول",
          content: "بمجرد الموافقة، استعد لحياتك الجديدة في بلد الوجهة.",
          tips: [
            "ابحث عن خيارات السكن",
            "افهم سوق العمل",
            "افتح حسابات مصرفية",
            "خطط للاستقرار الأولي",
            "تواصل مع المجتمعات المحلية"
          ]
        }
      ],
      
      conclusion: "تذكر، الهجرة رحلة تتطلب الصبر والإعداد وغالباً الإرشاد المهني. في الشوامخ، نحن هنا لدعمك في كل خطوة على الطريق.",
      
      cta: {
        title: "تحتاج إرشاد مهني؟",
        description: "يمكن لاستشاريي الهجرة المعتمدين لدينا مساعدتك في التنقل في هذه العملية المعقدة.",
        buttonText: "احصل على استشارة خبيرة"
      }
    }
  };

  const t = content[currentLanguage as keyof typeof content];

  return (
    <div className="min-h-screen bg-gray-50 rtl-support">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-green-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2 rtl:mr-0 rtl:ml-2 rtl:scale-x-[-1]" />
            {t.backToBloc}
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-green-100 mb-6">{t.subtitle}</p>
          
          <div className="flex flex-wrap items-center gap-4 text-green-100">
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

          {/* Steps */}
          <div className="space-y-12">
            {t.steps.map((step, index) => (
              <section key={index}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{step.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">{step.content}</p>
                
                <div className="space-y-3">
                  {step.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="text-green-600 mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Conclusion */}
          <section className="mt-12 p-6 bg-blue-50 rounded-lg">
            <div className="flex items-start">
              <FileText className="text-blue-600 mr-4 rtl:mr-0 rtl:ml-4 flex-shrink-0 mt-1" size={24} />
              <p className="text-lg text-gray-700 leading-relaxed">{t.conclusion}</p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-12 bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
            <p className="text-green-100 mb-6 text-lg">{t.cta.description}</p>
            
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t.cta.buttonText}
            </Link>
          </section>

        </div>
      </article>
    </div>
  );
};

export default ImmigrationGuide; 