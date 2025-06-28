import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Globe, CheckCircle, ArrowRight, Star, Calendar } from 'lucide-react';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    visaType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Our immigration experts will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      visaType: '',
      message: ''
    });
  };

  const countries = [
    {
      name: 'Canada',
      path: '/canada',
      image: 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Express Entry, Provincial Nomination, Study & Work Permits'
    },
    {
      name: 'Australia',
      path: '/australia', 
      image: 'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Skilled Migration, Study Visa, Partner & Family Visas'
    },
    {
      name: 'United Kingdom',
      path: '/uk',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Student Visa, Work Permits, Visit & Business Visas'
    },
    {
      name: 'Europe',
      path: '/europe',
      image: 'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Germany Job Seeker, Study Visa, EU Blue Card'
    }
  ];

  const visaCategories = [
    { icon: Globe, name: 'Visit Visas', description: 'Tourist and business visit visas for all countries' },
    { icon: Users, name: 'Immigration Visas', description: 'Permanent residence and citizenship pathways' },
    { icon: Award, name: 'Work Permits', description: 'Employment-based visas and work authorization' },
    { icon: CheckCircle, name: 'Study Visas', description: 'Student visas for universities worldwide' }
  ];

  const testimonials = [
    {
      name: 'Amanda Rivera',
      country: 'Germany',
      visa: 'Work Permit Visa',
      feedback: 'Helped me throughout the process of my work permit visa. Professional service and excellent guidance.',
      rating: 5
    },
    {
      name: 'Muhammad Ahmad',
      country: 'Australia', 
      visa: 'Spouse Visa',
      feedback: 'Provided me complete guidance about my spouse visa. Made the complex process very simple.',
      rating: 5
    },
    {
      name: 'Henry Morgan',
      country: 'Canada',
      visa: 'Study Visa',
      feedback: 'Excellent consulting for students. Helped fulfill my dream of studying abroad in Canada.',
      rating: 5
    }
  ];

  const newsArticles = [
    {
      title: 'Top 9 Most Demand Jobs In Canada',
      excerpt: 'Discover the highest demand professions in Canada for immigration through Express Entry and Provincial Nomination Programs.',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Ways to Immigrate to Saskatchewan',
      excerpt: 'Complete guide to Saskatchewan Provincial Nominee Program and immigration pathways available.',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Australia Skilled Migration Updates 2024',
      excerpt: 'Latest changes in Australian immigration policies and new opportunities for skilled workers.',
      date: '2024-01-08',
      image: 'https://images.pexels.com/photos/1451447/pexels-photo-1451447.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Hi, How Can We Help You?
              </h1>
              <div className="space-y-4 text-lg lg:text-xl mb-8">
                <p>We are reliable immigration consultants to handle your immigration case</p>
                <p className="text-blue-100">Move To Your Dream Country</p>
                <p className="text-blue-100">Talk to one of our best consultants today</p>
              </div>
              <div className="bg-green-600 inline-block px-6 py-3 rounded-full text-center">
                <p className="font-semibold">Immigration Experts Will Contact You</p>
              </div>
            </div>

            {/* Assessment Form */}
            <div className="bg-white text-gray-800 rounded-lg shadow-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-900">
                Fill Free Assessment Form
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
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
                    <option value="">Select Destination Country</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="uk">United Kingdom</option>
                    <option value="germany">Germany</option>
                    <option value="usa">USA</option>
                  </select>
                </div>
                <div>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.visaType}
                    onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                    required
                  >
                    <option value="">Select Visa Type</option>
                    <option value="work">Work Permit</option>
                    <option value="study">Study Visa</option>
                    <option value="visit">Visit Visa</option>
                    <option value="immigration">Permanent Residence</option>
                    <option value="family">Family/Spouse Visa</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Additional Message"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Submit Assessment
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-xl text-blue-600 font-semibold mb-4">Since 2016 we are experts in Immigration Services</p>
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
                  We have an <strong>expert team to create great value for immigration</strong>. Our certified & reliable Immigration Consultant professionals can help you get a positive decision on your case.
                </p>
                <p className="text-lg text-gray-700">
                  Services provided <strong>from Our ICCRC Registered Associates</strong>. We've been Providing Consultancy Services For Immigration Opportunities in Foreign Countries.
                </p>
                <p className="text-lg text-gray-700">
                  Each and every consultant hired at our company has been through our <strong>6 months aggressive internal training program</strong> that consists of eight different courses.
                </p>
                <p className="text-lg text-blue-600 font-semibold">
                  Serving in the GCC since 2016
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-gray-600">Successful Cases</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">8+</div>
                  <div className="text-gray-600">Years Experience</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Popular Visa Categories</h2>
            <p className="text-lg text-gray-600">We provide comprehensive visa services for all your immigration needs</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Choose Your Country</h2>
            <p className="text-lg text-gray-600">We provide immigration services all over the world and for universities globally</p>
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
                    Discover More
                    <ArrowRight size={16} className="ml-2" />
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Our Customer Say</h2>
            <p className="text-lg text-gray-600">Our Satisfied Customers</p>
            <p className="text-blue-600 font-semibold mt-2">Join students over 1000+ like you</p>
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

      {/* Latest News and Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest News & Resources</h2>
            <p className="text-lg text-gray-600">Stay updated with the latest immigration news and helpful resources</p>
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
                    <Calendar size={16} className="mr-2" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Read More articles from Resources & News
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;