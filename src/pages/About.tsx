import React from 'react';
import { Award, Users, Globe, CheckCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const About = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "About Our Company",
      subtitle: "Since 2016, we are experts in Immigration Services, providing reliable consultancy for your immigration journey",
      story_title: "Our Story",
      story_p1: "Since 2016, we have been dedicated experts in Immigration Services, building a reputation as reliable immigration consultants who handle each case with utmost care and professionalism.",
      story_p2: "Our expert team creates great value for immigration by providing certified & reliable Immigration Consultant professionals who can help you get a positive decision on your case.",
      story_p3: "We provide services from our ICCRC Registered Associates and have been providing consultancy services for immigration opportunities in foreign countries across the globe.",
      story_p4: "Each and every consultant hired at our company has been through our comprehensive 6 months aggressive internal training program that consists of eight different specialized courses.",
      achievements_title: "Our Achievements",
      achievements_subtitle: "Serving in the GCC since 2016 with outstanding results",
      achievements_clients: "Satisfied Clients",
      achievements_countries: "Countries Served",
      achievements_experience: "Years Experience",
      achievements_success: "Success Rate",
      services_title: "Our Services",
      services_subtitle: "Comprehensive immigration and document clearing services",
      team_title: "Our Expert Team",
      team_subtitle: "Certified professionals dedicated to your immigration success",
      why_title: "Why Choose Us?",
      why_iccrc_title: "ICCRC Registered",
      why_iccrc_desc: "All our services are provided by ICCRC registered associates ensuring compliance and reliability.",
      why_training_title: "Expert Training",
      why_training_desc: "6-month intensive training program with 8 specialized courses for all our consultants.",
      why_gcc_title: "GCC Presence",
      why_gcc_desc: "Serving in the GCC region since 2016 with deep understanding of local needs."
    },
    ar: {
      title: "عن شركتنا",
      subtitle: "منذ عام 2016، نحن خبراء في خدمات الهجرة، نقدم استشارات موثوقة لرحلة هجرتك",
      story_title: "قصتنا",
      story_p1: "منذ عام 2016، نحن خبراء مخصصون في خدمات الهجرة، نبني سمعة كمستشارين موثوقين في الهجرة نتعامل مع كل حالة بأقصى درجات الاهتمام والمهنية.",
      story_p2: "فريقنا الخبير يخلق قيمة كبيرة للهجرة من خلال توفير مهنيين معتمدين وموثوقين لاستشارات الهجرة يمكنهم مساعدتك في الحصول على قرار إيجابي في قضيتك.",
      story_p3: "نقدم خدمات من شركائنا المسجلين في ICCRC ونقدم خدمات استشارية لفرص الهجرة في البلدان الأجنبية حول العالم.",
      story_p4: "كل مستشار يتم توظيفه في شركتنا قد خضع لبرنامج تدريبي داخلي شامل مكثف لمدة 6 أشهر يتكون من ثمانية دورات متخصصة مختلفة.",
      achievements_title: "إنجازاتنا",
      achievements_subtitle: "نخدم في دول الخليج منذ عام 2016 بنتائج متميزة",
      achievements_clients: "عميل راضٍ",
      achievements_countries: "دولة نخدمها",
      achievements_experience: "سنوات خبرة",
      achievements_success: "معدل النجاح",
      services_title: "خدماتنا",
      services_subtitle: "خدمات شاملة للهجرة وتخليص الوثائق",
      team_title: "فريقنا الخبير",
      team_subtitle: "مهنيون معتمدون مخصصون لنجاح هجرتك",
      why_title: "لماذا تختارنا؟",
      why_iccrc_title: "مسجل في ICCRC",
      why_iccrc_desc: "جميع خدماتنا مقدمة من قبل شركاء مسجلين في ICCRC لضمان الامتثال والموثوقية.",
      why_training_title: "تدريب خبير",
      why_training_desc: "برنامج تدريبي مكثف لمدة 6 أشهر مع 8 دورات متخصصة لجميع مستشارينا.",
      why_gcc_title: "وجود في الخليج",
      why_gcc_desc: "نخدم في منطقة الخليج منذ عام 2016 مع فهم عميق للاحتياجات المحلية."
    }
  } as const;

  const t = content[currentLanguage as keyof typeof content];

  const achievements = [
    { icon: Users, number: '1000+', label: t.achievements_clients },
    { icon: Globe, number: '15+', label: t.achievements_countries },
    { icon: Award, number: '8+', label: t.achievements_experience },
    { icon: CheckCircle, number: '95%', label: t.achievements_success }
  ];

  const services = [
    'Express Entry Immigration Programs',
    'Provincial Nominee Programs (PNP)',
    'Study Permit Applications',
    'Work Permit Processing',
    'Family Sponsorship Programs',
    'Visit Visa Applications',
    'Document Authentication Services',
    'Immigration Appeals and Reviews'
  ];

  const teamFeatures = [
    {
      icon: Award,
      title: currentLanguage === 'ar' ? 'مستشارون معتمدون' : 'Certified Consultants',
      description: currentLanguage === 'ar' ? 
        'جميع مستشارينا معتمدون من ICCRC ولديهم خبرة واسعة في قوانين الهجرة' :
        'All our consultants are ICCRC certified with extensive experience in immigration law'
    },
    {
      icon: Globe,
      title: currentLanguage === 'ar' ? 'خبرة دولية' : 'International Expertise',
      description: currentLanguage === 'ar' ? 
        'نتعامل مع الهجرة إلى أكثر من 15 دولة حول العالم بخبرة محلية' :
        'We handle immigration to over 15 countries worldwide with local expertise'
    },
    {
      icon: Users,
      title: currentLanguage === 'ar' ? 'فريق متخصص' : 'Specialized Team',
      description: currentLanguage === 'ar' ? 
        'فريق من الخبراء المتخصصين في مختلف أنواع التأشيرات وبرامج الهجرة' :
        'A team of experts specialized in different visa types and immigration programs'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">{t.title}</h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t.story_title}</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>{t.story_p1}</p>
                <p>{t.story_p2}</p>
                <p>{t.story_p3}</p>
                <p>{t.story_p4}</p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Immigration consultation meeting"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.achievements_title}</h2>
            <p className="text-lg text-gray-600">{t.achievements_subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-blue-600" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.services_title}</h2>
            <p className="text-lg text-gray-600">{t.services_subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-6">
                <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                <span className="text-lg text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.team_title}</h2>
            <p className="text-lg text-gray-600">{t.team_subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.why_title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.why_iccrc_title}</h3>
              <p className="text-gray-600">{t.why_iccrc_desc}</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.why_training_title}</h3>
              <p className="text-gray-600">{t.why_training_desc}</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.why_gcc_title}</h3>
              <p className="text-gray-600">{t.why_gcc_desc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;