import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Search } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Blog = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Alshawamekh Blog",
      subtitle: "Expert insights, immigration guides, and success stories from our certified consultants",
      searchPlaceholder: "Search articles...",
      readMore: "Read Article",
      author: "By Alshawamekh Team",
      categories: {
        all: "All Articles",
        guides: "Immigration Guides",
        success: "Success Stories",
        tips: "Tips & Advice",
        news: "Company News"
      },
      articles: [
        {
          id: 1,
          slug: "why-choose-alshawamekh",
          title: "Why Choose Alshawamekh for Your Immigration Journey?",
          excerpt: "Discover what makes Alshawamekh the leading immigration consultancy in the GCC region since 2016. Our certified consultants, proven track record, and comprehensive services set us apart in the immigration industry.",
          category: "Company News",
          date: "2024-12-15",
          readTime: "5 min read",
          image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
          featured: true
        },
        {
          id: 2,
          slug: "complete-immigration-guide",
          title: "Complete Guide to Immigration Planning",
          excerpt: "Essential steps and documents you need to prepare for a successful immigration application. From initial assessment to final approval, we guide you through every step of the process.",
          category: "Immigration Guides",
          date: "2024-12-10",
          readTime: "8 min read",
          image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600",
          featured: false
        },
        {
          id: 3,
          slug: "new-immigration-programs",
          title: "New Immigration Programs Available Now",
          excerpt: "Latest opportunities for skilled workers, students, and families seeking to immigrate. Stay updated with the newest pathways to your dream destination.",
          category: "Tips & Advice",
          date: "2024-12-05",
          readTime: "6 min read",
          image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600",
          featured: false
        },
        {
          id: 4,
          slug: "immigration-success-tips",
          title: "5 Key Tips for Immigration Success",
          excerpt: "Expert advice from our certified consultants to maximize your chances of approval. Learn from years of experience and hundreds of successful cases.",
          category: "Tips & Advice",
          date: "2024-12-01",
          readTime: "4 min read",
          image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
          featured: false
        }
      ]
    },
    ar: {
      title: "مدونة الشوامخ",
      subtitle: "رؤى من الخبراء، أدلة الهجرة، وقصص النجاح من مستشارينا المعتمدين",
      searchPlaceholder: "البحث في المقالات...",
      readMore: "اقرأ المقال",
      author: "بواسطة فريق الشوامخ",
      categories: {
        all: "جميع المقالات",
        guides: "أدلة الهجرة",
        success: "قصص النجاح",
        tips: "نصائح وإرشادات",
        news: "أخبار الشركة"
      },
      articles: [
        {
          id: 1,
          slug: "why-choose-alshawamekh",
          title: "لماذا تختار الشوامخ لرحلة الهجرة الخاصة بك؟",
          excerpt: "اكتشف ما يجعل الشوامخ الاستشارة الرائدة في مجال الهجرة في منطقة الخليج منذ عام 2016. مستشارونا المعتمدون وسجلنا المثبت وخدماتنا الشاملة تميزنا في صناعة الهجرة.",
          category: "أخبار الشركة",
          date: "2024-12-15",
          readTime: "5 دقائق قراءة",
          image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
          featured: true
        },
        {
          id: 2,
          slug: "complete-immigration-guide",
          title: "دليل شامل لتخطيط الهجرة",
          excerpt: "الخطوات الأساسية والمستندات التي تحتاجها لإعداد طلب هجرة ناجح. من التقييم الأولي إلى الموافقة النهائية، نرشدك خلال كل خطوة في العملية.",
          category: "أدلة الهجرة",
          date: "2024-12-10",
          readTime: "8 دقائق قراءة",
          image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600",
          featured: false
        },
        {
          id: 3,
          slug: "new-immigration-programs",
          title: "برامج الهجرة الجديدة المتاحة الآن",
          excerpt: "أحدث الفرص للعمال المهرة والطلاب والعائلات الساعية للهجرة. ابق على اطلاع بأحدث المسارات إلى وجهة أحلامك.",
          category: "نصائح وإرشادات",
          date: "2024-12-05",
          readTime: "6 دقائق قراءة",
          image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600",
          featured: false
        },
        {
          id: 4,
          slug: "immigration-success-tips",
          title: "5 نصائح أساسية لنجاح الهجرة",
          excerpt: "نصائح من خبرائنا المعتمدين لزيادة فرص الموافقة على طلبك. تعلم من سنوات الخبرة ومئات الحالات الناجحة.",
          category: "نصائح وإرشادات",
          date: "2024-12-01",
          readTime: "4 دقائق قراءة",
          image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
          featured: false
        }
      ]
    }
  };

  const t = content[currentLanguage as keyof typeof content];

  return (
    <div className="min-h-screen bg-gray-50 rtl-support">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">{t.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  className="w-full pl-10 rtl:pl-4 rtl:pr-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  {t.categories.all}
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                  {t.categories.guides}
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                  {t.categories.tips}
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                  {t.categories.news}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {t.articles.filter(article => article.featured).map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={16} className="mr-2 rtl:mr-0 rtl:ml-2" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Link to={`/blog/${article.slug}`}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors cursor-pointer">{article.title}</h2>
                  </Link>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-semibold">{article.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.articles.filter(article => !article.featured).map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={16} className="mr-2 rtl:mr-0 rtl:ml-2" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Link to={`/blog/${article.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">{article.title}</h3>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-semibold">{article.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {currentLanguage === 'ar' ? 'اشترك في نشرتنا الإخبارية' : 'Subscribe to Our Newsletter'}
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            {currentLanguage === 'ar' 
              ? 'احصل على أحدث المقالات والنصائح حول الهجرة مباشرة في بريدك الإلكتروني'
              : 'Get the latest articles and immigration tips delivered directly to your inbox'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={currentLanguage === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
              className="flex-1 px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              {currentLanguage === 'ar' ? 'اشترك' : 'Subscribe'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 