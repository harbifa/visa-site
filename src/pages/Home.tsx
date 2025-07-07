import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Users, Award, Globe, CheckCircle, ArrowRight, Star, Calendar } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailjs';
import { useLanguage } from '../hooks/useLanguage';

const Home = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    visaType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Blog translations
  const blogContent = {
    en: {
      title: "Alshawamekh Blog",
      subtitle: "Exclusive articles about immigration, services, and success stories from our expert team",
      articles: {
        alshawamekh_success: {
          title: "Why Choose Alshawamekh for Your Immigration Journey?",
          excerpt: "Discover what makes Alshawamekh the leading immigration consultancy in the GCC region since 2016."
        },
        immigration_guide: {
          title: "Complete Guide to Immigration Planning",
          excerpt: "Essential steps and documents you need to prepare for a successful immigration application."
        },
        new_programs: {
          title: "New Immigration Programs Available Now",
          excerpt: "Latest opportunities for skilled workers, students, and families seeking to immigrate."
        },
        success_tips: {
          title: "5 Key Tips for Immigration Success",
          excerpt: "Expert advice from our certified consultants to maximize your chances of approval."
        }
      }
    },
    ar: {
      title: "مدونة الشوامخ",
      subtitle: "مقالات حصرية عن الهجرة والخدمات وقصص النجاح من فريقنا المتخصص",
      articles: {
        alshawamekh_success: {
          title: "لماذا تختار الشوامخ لرحلة الهجرة الخاصة بك؟",
          excerpt: "اكتشف ما يجعل الشوامخ الاستشارة الرائدة في مجال الهجرة في منطقة الخليج منذ عام 2016."
        },
        immigration_guide: {
          title: "دليل شامل لتخطيط الهجرة",
          excerpt: "الخطوات الأساسية والمستندات التي تحتاجها لإعداد طلب هجرة ناجح."
        },
        new_programs: {
          title: "برامج الهجرة الجديدة المتاحة الآن",
          excerpt: "أحدث الفرص للعمال المهرة والطلاب والعائلات الساعية للهجرة."
        },
        success_tips: {
          title: "5 نصائح أساسية لنجاح الهجرة",
          excerpt: "نصائح من خبرائنا المعتمدين لزيادة فرص الموافقة على طلبك."
        }
      }
    }
  };

  const blogT = blogContent[currentLanguage as keyof typeof blogContent];

  // Initialize EmailJS on component mount
  useEffect(() => {
    console.log('🚀 Initializing EmailJS with public key:', emailConfig.publicKey.substring(0, 5) + '...');
    emailjs.init(emailConfig.publicKey);
    console.log('✅ EmailJS initialized successfully');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) {
      console.log('Form already submitting, ignoring...');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    console.log('=== Starting email submission ===');

    try {
      // Check configuration
      if (!emailConfig.serviceId || !emailConfig.assessmentTemplateId || !emailConfig.publicKey) {
        throw new Error('EmailJS configuration is incomplete');
      }

      console.log('Configuration check passed');

      // Prepare data for sending
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        country: formData.country,
        visa_type: formData.visaType,
        message: formData.message,
        to_email: 'info@shawmekimmigration.com',
        date: new Date().toLocaleDateString('en-US'),
        time: new Date().toLocaleTimeString('en-US')
      };

      console.log('Sending email with params:', JSON.stringify(templateParams, null, 2));
      console.log('Using EmailJS config:', JSON.stringify({
        serviceId: emailConfig.serviceId,
        templateId: emailConfig.assessmentTemplateId,
        publicKeyLength: emailConfig.publicKey.length,
        publicKeyPreview: emailConfig.publicKey.substring(0, 5) + '...'
      }, null, 2));

      // Send email using EmailJS with timeout
      console.log('📤 Attempting to send email...');
      console.log('🔄 Calling emailjs.send()...');
      
      // التحقق من صحة التكوين مرة أخرى
      console.log('🔍 Verifying EmailJS configuration...');
      console.log('Service ID:', emailConfig.serviceId);
      console.log('Template ID:', emailConfig.assessmentTemplateId);
      console.log('Public Key:', emailConfig.publicKey);

             // محاولة إرسال مباشرة بدون timeout معقد
       console.log('📤 Attempting direct EmailJS send...');
       
       const response = await emailjs.send(
         emailConfig.serviceId,
         emailConfig.assessmentTemplateId,
         templateParams,
         emailConfig.publicKey
       );

      console.log('✅ Email sent successfully:', JSON.stringify(response, null, 2));

      setSubmitStatus('success');
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        visaType: '',
        message: ''
      });
    } catch (error) {
      console.error('❌ Error sending email:', error);
      console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
      
      // تحليل نوع الخطأ وإعطاء نصائح مفيدة
      const errorMessage = error instanceof Error ? error.message : String(error);
      
      if (errorMessage.includes('404')) {
        console.error('🔍 404 Error - This usually means:');
        console.error('   - Service ID is incorrect');
        console.error('   - Template ID is incorrect');
        console.error('   - Service or template was deleted from EmailJS dashboard');
      } else if (errorMessage.includes('401') || errorMessage.includes('403')) {
        console.error('🔑 Authorization Error - This usually means:');
        console.error('   - Public Key is incorrect');
        console.error('   - Service is not properly configured');
        console.error('   - Account permissions issue');
      } else if (errorMessage.includes('400')) {
        console.error('📝 Bad Request - This usually means:');
        console.error('   - Template variables don\'t match');
        console.error('   - Invalid data in the request');
      } else {
        console.error('🌐 Network/Other Error - This could be:');
        console.error('   - Internet connectivity issue');
        console.error('   - EmailJS servers are down');
        console.error('   - CORS policy issue');
      }
      
      console.error('💡 Recommended actions:');
      console.error('   1. Verify all IDs in EmailJS dashboard');
      console.error('   2. Check service is active and connected');
      console.error('   3. Test template with sample data in EmailJS');
      console.error('   4. Ensure template variables match the data being sent');
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      console.log('=== Email submission completed ===');
    }
  };

  const countries = [
    {
      name: t('countries.canada'),
      path: '/canada',
      image: 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: t('home.countries_section.canada_desc')
    },
    {
      name: t('countries.australia'),
      path: '/australia', 
      image: 'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: t('home.countries_section.australia_desc')
    },
    {
      name: t('countries.uk'),
      path: '/uk',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: t('home.countries_section.uk_desc')
    },
    {
      name: t('countries.europe'),
      path: '/europe',
      image: 'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: t('home.countries_section.europe_desc')
    }
  ];

  const visaCategories = [
    { icon: Globe, name: t('visa_types.visit_visas'), description: t('home.visa_categories.visit_desc') },
    { icon: Users, name: t('visa_types.immigration_visas'), description: t('home.visa_categories.immigration_desc') },
    { icon: Award, name: t('visa_types.work_permits'), description: t('home.visa_categories.work_desc') },
    { icon: CheckCircle, name: t('visa_types.study_visas'), description: t('home.visa_categories.study_desc') }
  ];

  const testimonials = [
    {
      name: t('home.testimonials_data.amanda.name'),
      country: t('home.testimonials_data.amanda.country'),
      visa: t('home.testimonials_data.amanda.visa'),
      feedback: t('home.testimonials_data.amanda.feedback'),
      rating: 5
    },
    {
      name: t('home.testimonials_data.muhammad.name'),
      country: t('home.testimonials_data.muhammad.country'),
      visa: t('home.testimonials_data.muhammad.visa'),
      feedback: t('home.testimonials_data.muhammad.feedback'),
      rating: 5
    },
    {
      name: t('home.testimonials_data.henry.name'),
      country: t('home.testimonials_data.henry.country'),
      visa: t('home.testimonials_data.henry.visa'),
      feedback: t('home.testimonials_data.henry.feedback'),
      rating: 5
    }
  ];

  const newsArticles = [
    {
      title: blogT.articles.alshawamekh_success.title,
      excerpt: blogT.articles.alshawamekh_success.excerpt,
      date: '2024-12-15',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: '/blog/why-choose-alshawamekh'
    },
    {
      title: blogT.articles.immigration_guide.title,
      excerpt: blogT.articles.immigration_guide.excerpt,
      date: '2024-12-10',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: '/blog/complete-immigration-guide'
    },
    {
      title: blogT.articles.new_programs.title,
      excerpt: blogT.articles.new_programs.excerpt,
      date: '2024-12-05',
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: '/blog/new-immigration-programs'
    },
    {
      title: blogT.articles.success_tips.title,
      excerpt: blogT.articles.success_tips.excerpt,
      date: '2024-12-01',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: '/blog/immigration-success-tips'
    }
  ];

  return (
    <div className="rtl-support">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                {t('home.hero.title')}
              </h1>
              <div className="space-y-4 text-lg lg:text-xl mb-8">
                <p>{t('home.hero.subtitle1')}</p>
                <p className="text-blue-100">{t('home.hero.subtitle2')}</p>
                <p className="text-blue-100">{t('home.hero.subtitle3')}</p>
              </div>
              <div className="bg-green-600 inline-block px-6 py-3 rounded-full text-center">
                <p className="font-semibold">{t('home.hero.contact_cta')}</p>
              </div>
            </div>

            {/* Assessment Form */}
            <div className="bg-white text-gray-800 rounded-lg shadow-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-900">
                {t('home.form.title')}
              </h3>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                  <p className="font-semibold">✅ {t('home.form.success_title')}</p>
                  <p className="text-sm mt-1">{t('home.form.success_desc')}</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
                  <p className="font-semibold">❌ {t('home.form.error_title')}</p>
                  <p className="text-sm mt-1">{t('home.form.error_desc')}</p>
                </div>
              )}

              {isSubmitting && (
                <div className="mb-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded-lg text-center">
                  <p className="font-semibold">📤 {t('home.form.sending_title')}</p>
                  <p className="text-sm mt-1">{t('home.form.sending_desc')}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder={t('home.form.full_name')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t('home.form.email')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder={t('home.form.phone')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    required
                  >
                    <option value="">{t('home.form.select_country')}</option>
                    <option value="canada">{t('countries.canada')}</option>
                    <option value="australia">{t('countries.australia')}</option>
                    <option value="uk">{t('countries.uk')}</option>
                    <option value="germany">{t('countries.germany')}</option>
                    <option value="usa">{t('countries.usa')}</option>
                  </select>
                </div>
                <div>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.visaType}
                    onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                    required
                  >
                    <option value="">{t('home.form.select_visa')}</option>
                    <option value="work">{t('home.visa_options.work')}</option>
                    <option value="study">{t('home.visa_options.study')}</option>
                    <option value="visit">{t('home.visa_options.visit')}</option>
                    <option value="immigration">{t('home.visa_options.immigration')}</option>
                    <option value="family">{t('home.visa_options.family')}</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder={t('home.form.message')}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-3 px-6 rounded-lg transition-colors ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>{t('home.form.sending')}</span>
                    </div>
                  ) : (
                    t('home.form.submit')
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t('home.about.title')}</h2>
            <p className="text-xl text-blue-600 font-semibold mb-4">{t('home.about.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Immigration consultation"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  {t('home.about.desc1')}
                </p>
                <p className="text-lg text-gray-700">
                  {t('home.about.desc2')}
                </p>
                <p className="text-lg text-gray-700">
                  {t('home.about.desc3')}
                </p>
                <p className="text-lg text-blue-600 font-semibold">
                  {t('home.about.serving')}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">30000+</div>
                  <div className="text-gray-600">{t('home.about.stats.cases')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">8+</div>
                  <div className="text-gray-600">{t('home.about.stats.experience')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Visa Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('home.visa_categories.title')}</h2>
            <p className="text-lg text-gray-600">{t('home.visa_categories.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visaCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Choose Your Country */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('home.countries_section.title')}</h2>
            <p className="text-lg text-gray-600">{t('home.countries_section.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {countries.map((country, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{country.name}</h3>
                  <p className="text-gray-600 mb-4">{country.description}</p>
                  <Link
                    to={country.path}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    {t('home.countries_section.discover_more')}
                    <ArrowRight size={16} className="ml-2 rtl:ml-0 rtl:mr-2 rtl:scale-x-[-1]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('home.testimonials.title')}</h2>
            <p className="text-lg text-gray-600">{t('home.testimonials.subtitle')}</p>
            <p className="text-blue-600 font-semibold mt-2">{t('home.testimonials.join')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-blue-600">{testimonial.country} - {testimonial.visa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alshawamekh Blog */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{blogT.title}</h2>
            <p className="text-lg text-gray-600">{blogT.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar size={16} className="mr-2 rtl:mr-0 rtl:ml-2" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <Link to={article.slug} className="block">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">{article.title}</h3>
                  </Link>
                  <p className="text-gray-600">{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              {currentLanguage === 'ar' ? 'زيارة مدونة الشوامخ' : 'Visit Alshawamekh Blog'}
              <ArrowRight size={20} className="ml-2 rtl:ml-0 rtl:mr-2 rtl:scale-x-[-1]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;