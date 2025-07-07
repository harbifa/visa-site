import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, CheckCircle, Award, Users, Globe } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

const WhyChooseAlshawamekh = () => {
  const { currentLanguage } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    en: {
      title: "Why Choose Alshawamekh for Your Immigration Journey?",
      subtitle: "Discover what makes Alshawamekh the leading immigration consultancy in the GCC region since 2016",
      readTime: "5 min read",
      publishDate: "December 15, 2024",
      author: "Alshawamekh Team",
      backToBloc: "Back to Blog",
      
      sections: {
        intro: {
          title: "Your Trusted Partner Since 2016",
          content: "When it comes to making one of the most important decisions of your life - immigrating to a new country - you need a partner you can trust. Alshawamekh has been that trusted partner for thousands of clients across the GCC region since 2016, helping them achieve their dreams of living, working, and studying in countries like Canada, Australia, the UK, Europe, and the USA."
        },
        
        expertise: {
          title: "8+ Years of Proven Expertise",
          content: "Since our establishment in 2016, we have successfully handled over 30,000 immigration cases with a remarkable 95% success rate. Our experience spans across multiple countries and visa categories, making us one of the most versatile immigration consultancies in the region.",
          features: [
            "30,000+ successful immigration cases processed",
            "95% success rate across all visa categories",
            "Expert knowledge of 15+ destination countries",
            "8+ years of continuous service excellence"
          ]
        },
        
        certified: {
          title: "ICCRC Registered Associates",
          content: "What sets us apart is our commitment to professional standards. All our services are provided by ICCRC (Immigration Consultants of Canada Regulatory Council) registered associates, ensuring that you receive advice that meets international standards and regulatory compliance.",
          benefits: [
            "Fully licensed and regulated immigration consultants",
            "Adherence to international professional standards",
            "Regular updates on immigration law changes",
            "Ethical practice guarantee"
          ]
        },
        
        training: {
          title: "Comprehensive Training Program",
          content: "Every consultant at Alshawamekh undergoes our intensive 6-month internal training program consisting of 8 specialized courses. This ensures that our team stays updated with the latest immigration policies, procedures, and best practices.",
          courses: [
            "Immigration Law and Regulations",
            "Document Preparation and Verification",
            "Case Assessment and Strategy",
            "Client Communication and Ethics",
            "Country-Specific Immigration Programs",
            "Application Submission and Follow-up",
            "Appeals and Complex Cases",
            "Customer Service Excellence"
          ]
        },
        
        comprehensive: {
          title: "Comprehensive Service Portfolio",
          content: "We offer end-to-end immigration services covering all major visa categories and destination countries. Whether you're looking for permanent residence, work permits, study visas, or family reunification, we have the expertise to guide you through the process.",
          services: [
            "Express Entry and Provincial Nomination Programs (Canada)",
            "Skilled Migration and Partner Visas (Australia)",
            "Skilled Worker and Student Visas (UK)",
            "Job Seeker and EU Blue Card (Germany/Europe)",
            "Investment and Treaty Visas (USA)",
            "Document preparation and authentication",
            "IELTS preparation and guidance",
            "Post-arrival settlement services"
          ]
        },
        
        local: {
          title: "Deep Understanding of GCC Market",
          content: "Being based in the GCC region gives us a unique advantage in understanding the specific needs, challenges, and aspirations of our clients. We understand the cultural nuances, documentation requirements, and career transitions that GCC residents face when planning to immigrate.",
          advantages: [
            "Specialized knowledge of GCC educational credentials",
            "Understanding of Middle Eastern work experience evaluation",
            "Familiarity with regional documentation processes",
            "Cultural sensitivity in application preparation",
            "Local presence for face-to-face consultations",
            "Arabic and English bilingual support"
          ]
        },
        
        support: {
          title: "Personalized Support Throughout Your Journey",
          content: "Immigration is not just about paperwork - it's about changing your life. We provide personalized support throughout your entire journey, from initial consultation to post-arrival settlement assistance.",
          supportSteps: [
            "Free initial assessment and eligibility evaluation",
            "Customized immigration strategy development",
            "Step-by-step guidance through application process",
            "Regular updates and communication",
            "Pre-departure preparation and briefing",
            "Post-arrival settlement assistance"
          ]
        },
        
        success: {
          title: "Real Success Stories",
          content: "Our success is measured by the success of our clients. Over the years, we have helped thousands of individuals and families achieve their immigration goals and build new lives in their chosen destinations.",
          stats: [
            "1000+ families reunited",
            "5000+ professionals relocated",
            "3000+ students pursuing education abroad",
            "15+ countries served",
            "95% client satisfaction rate"
          ]
        },
        
        conclusion: {
          title: "Your Immigration Success Starts Here",
          content: "Choosing the right immigration consultant can make the difference between success and disappointment. With Alshawamekh, you're not just getting a service provider - you're getting a partner committed to your success. Our proven track record, professional credentials, and personalized approach make us the ideal choice for your immigration journey."
        },
        
        cta: {
          title: "Ready to Start Your Immigration Journey?",
          description: "Don't leave your immigration dreams to chance. Contact our certified consultants today for a free assessment and discover how we can help you achieve your goals.",
          buttonText: "Get Free Assessment",
          contactText: "Or call us directly at +966501367513"
        }
      }
    },
    
    ar: {
      title: "لماذا تختار الشوامخ لرحلة الهجرة الخاصة بك؟",
      subtitle: "اكتشف ما يجعل الشوامخ الاستشارة الرائدة في مجال الهجرة في منطقة الخليج منذ عام 2016",
      readTime: "5 دقائق قراءة",
      publishDate: "15 ديسمبر 2024",
      author: "فريق الشوامخ",
      backToBloc: "العودة للمدونة",
      
      sections: {
        intro: {
          title: "شريكك الموثوق منذ عام 2016",
          content: "عندما يتعلق الأمر باتخاذ واحد من أهم القرارات في حياتك - الهجرة إلى بلد جديد - فأنت بحاجة إلى شريك يمكنك الوثوق به. كانت الشوامخ ذلك الشريك الموثوق لآلاف العملاء في منطقة الخليج منذ عام 2016، مساعدتهم في تحقيق أحلامهم في العيش والعمل والدراسة في دول مثل كندا وأستراليا والمملكة المتحدة وأوروبا والولايات المتحدة الأمريكية."
        },
        
        expertise: {
          title: "أكثر من 8 سنوات من الخبرة المثبتة",
          content: "منذ تأسيسنا في عام 2016، تعاملنا بنجاح مع أكثر من 30,000 حالة هجرة بمعدل نجاح رائع يبلغ 95%. تمتد خبرتنا عبر عدة دول وفئات التأشيرات، مما يجعلنا واحدة من أكثر استشارات الهجرة تنوعاً في المنطقة.",
          features: [
            "معالجة أكثر من 30,000 حالة هجرة ناجحة",
            "معدل نجاح 95% عبر جميع فئات التأشيرات",
            "معرفة خبيرة بأكثر من 15 دولة وجهة",
            "أكثر من 8 سنوات من التميز المستمر في الخدمة"
          ]
        },
        
        certified: {
          title: "شركاء مسجلون في ICCRC",
          content: "ما يميزنا هو التزامنا بالمعايير المهنية. جميع خدماتنا مقدمة من شركاء مسجلين في ICCRC (مجلس تنظيم استشاريي الهجرة الكندية)، مما يضمن أن تحصل على استشارة تلبي المعايير الدولية والامتثال التنظيمي.",
          benefits: [
            "استشاريو هجرة مرخصون ومنظمون بالكامل",
            "الالتزام بالمعايير المهنية الدولية",
            "تحديثات منتظمة حول تغييرات قانون الهجرة",
            "ضمان الممارسة الأخلاقية"
          ]
        },
        
        training: {
          title: "برنامج التدريب الشامل",
          content: "كل استشاري في الشوامخ يخضع لبرنامج التدريب الداخلي المكثف لمدة 6 أشهر والذي يتكون من 8 دورات متخصصة. هذا يضمن أن فريقنا يبقى محدثاً بأحدث سياسات الهجرة والإجراءات وأفضل الممارسات.",
          courses: [
            "قانون الهجرة واللوائح",
            "إعداد المستندات والتحقق منها",
            "تقييم الحالات والاستراتيجية",
            "التواصل مع العملاء والأخلاقيات",
            "برامج الهجرة الخاصة بكل دولة",
            "تقديم الطلبات والمتابعة",
            "الاستئنافات والحالات المعقدة",
            "التميز في خدمة العملاء"
          ]
        },
        
        comprehensive: {
          title: "محفظة خدمات شاملة",
          content: "نحن نقدم خدمات هجرة شاملة من البداية إلى النهاية تغطي جميع فئات التأشيرات الرئيسية والبلدان المقصودة. سواء كنت تبحث عن الإقامة الدائمة أو تصاريح العمل أو تأشيرات الدراسة أو لم الشمل العائلي، لدينا الخبرة لإرشادك خلال العملية.",
          services: [
            "برامج الدخول السريع والترشيح الإقليمي (كندا)",
            "الهجرة المهارية وتأشيرات الشريك (أستراليا)",
            "تأشيرات العامل الماهر والطالب (المملكة المتحدة)",
            "الباحث عن عمل والبطاقة الزرقاء الأوروبية (ألمانيا/أوروبا)",
            "تأشيرات الاستثمار والمعاهدة (الولايات المتحدة)",
            "إعداد المستندات والتوثيق",
            "إعداد وتوجيه الآيلتس",
            "خدمات الاستقرار بعد الوصول"
          ]
        },
        
        local: {
          title: "فهم عميق لسوق دول الخليج",
          content: "كوننا نقع في منطقة الخليج يمنحنا ميزة فريدة في فهم الاحتياجات والتحديات والتطلعات المحددة لعملائنا. نحن نفهم الفروق الثقافية ومتطلبات التوثيق والانتقالات المهنية التي يواجهها سكان الخليج عند التخطيط للهجرة.",
          advantages: [
            "معرفة متخصصة بالشهادات التعليمية الخليجية",
            "فهم تقييم الخبرة العملية في الشرق الأوسط",
            "الألفة مع عمليات التوثيق الإقليمية",
            "الحساسية الثقافية في إعداد الطلبات",
            "وجود محلي للاستشارات وجهاً لوجه",
            "دعم ثنائي اللغة بالعربية والإنجليزية"
          ]
        },
        
        support: {
          title: "دعم شخصي طوال رحلتك",
          content: "الهجرة ليست مجرد أوراق - إنها تغيير حياتك. نحن نقدم دعماً شخصياً طوال رحلتك بأكملها، من الاستشارة الأولية إلى مساعدة الاستقرار بعد الوصول.",
          supportSteps: [
            "تقييم أولي مجاني وتقييم الأهلية",
            "تطوير استراتيجية هجرة مخصصة",
            "إرشاد خطوة بخطوة خلال عملية التطبيق",
            "تحديثات منتظمة وتواصل",
            "إعداد وإحاطة ما قبل المغادرة",
            "مساعدة الاستقرار بعد الوصول"
          ]
        },
        
        success: {
          title: "قصص نجاح حقيقية",
          content: "نجاحنا يُقاس بنجاح عملائنا. على مر السنين، ساعدنا آلاف الأفراد والعائلات في تحقيق أهداف الهجرة وبناء حياة جديدة في الوجهات التي اختاروها.",
          stats: [
            "أكثر من 1000 عائلة تم لم شملها",
            "أكثر من 5000 محترف تم نقلهم",
            "أكثر من 3000 طالب يتابع التعليم في الخارج",
            "أكثر من 15 دولة يتم خدمتها",
            "معدل رضا العملاء 95%"
          ]
        },
        
        conclusion: {
          title: "نجاح هجرتك يبدأ من هنا",
          content: "اختيار استشاري الهجرة المناسب يمكن أن يحدث الفرق بين النجاح وخيبة الأمل. مع الشوامخ، أنت لا تحصل على مقدم خدمة فحسب - بل تحصل على شريك ملتزم بنجاحك. سجلنا المثبت واعتماداتنا المهنية ونهجنا الشخصي يجعلنا الخيار الأمثل لرحلة الهجرة الخاصة بك."
        },
        
        cta: {
          title: "مستعد لبدء رحلة الهجرة الخاصة بك؟",
          description: "لا تترك أحلام الهجرة للصدفة. اتصل بمستشارينا المعتمدين اليوم للحصول على تقييم مجاني واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك.",
          buttonText: "احصل على تقييم مجاني",
          contactText: "أو اتصل بنا مباشرة على +966501367513"
        }
      }
    }
  };

  const t = content[currentLanguage as keyof typeof content];

  return (
    <div className="min-h-screen bg-gray-50 rtl-support">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2 rtl:mr-0 rtl:ml-2 rtl:scale-x-[-1]" />
            {t.backToBloc}
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-blue-100 mb-6">{t.subtitle}</p>
          
          <div className="flex flex-wrap items-center gap-4 text-blue-100">
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
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.sections.intro.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t.sections.intro.content}</p>
          </section>

          {/* Expertise */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.sections.expertise.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{t.sections.expertise.content}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.sections.expertise.features.map((feature, index) => (
                <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <CheckCircle className="text-blue-600 mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ICCRC Certification */}
          <section className="mb-12">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <div className="flex items-start">
                <Award className="text-green-600 mr-4 rtl:mr-0 rtl:ml-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.sections.certified.title}</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">{t.sections.certified.content}</p>
                  
                  <ul className="space-y-2">
                    {t.sections.certified.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="text-green-600 mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Training Program */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.sections.training.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{t.sections.training.content}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.sections.training.courses.map((course, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{course}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Comprehensive Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.sections.comprehensive.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{t.sections.comprehensive.content}</p>
            
            <div className="space-y-3">
              {t.sections.comprehensive.services.map((service, index) => (
                <div key={index} className="flex items-start p-3 bg-blue-50 rounded-lg">
                  <Globe className="text-blue-600 mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Local Understanding */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.sections.local.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{t.sections.local.content}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.sections.local.advantages.map((advantage, index) => (
                <div key={index} className="flex items-center p-4 bg-yellow-50 rounded-lg">
                  <CheckCircle className="text-yellow-600 mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{advantage}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Personalized Support */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.sections.support.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{t.sections.support.content}</p>
            
            <div className="space-y-4">
              {t.sections.support.supportSteps.map((step, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 rtl:mr-0 rtl:ml-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 text-lg">{step}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Success Stories */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.sections.success.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{t.sections.success.content}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.sections.success.stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.split(' ')[0]}
                  </div>
                  <div className="text-gray-700">
                    {stat.split(' ').slice(1).join(' ')}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.sections.conclusion.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t.sections.conclusion.content}</p>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">{t.sections.cta.title}</h2>
            <p className="text-blue-100 mb-6 text-lg">{t.sections.cta.description}</p>
            
            <div className="space-y-4">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {t.sections.cta.buttonText}
              </Link>
              
              <p className="text-blue-100">
                {t.sections.cta.contactText}
              </p>
            </div>
          </section>

        </div>
      </article>
    </div>
  );
};

export default WhyChooseAlshawamekh; 