import React from 'react';
import { Award, Users, Globe, CheckCircle, Clock, Star } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Users, number: '1000+', label: 'Satisfied Clients' },
    { icon: Globe, number: '50+', label: 'Countries Served' },
    { icon: Award, number: '8+', label: 'Years Experience' },
    { icon: CheckCircle, number: '95%', label: 'Success Rate' }
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

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Immigration Consultant',
      experience: '12 years',
      specialization: 'Canadian Immigration',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ahmed Al-Rashid',
      role: 'Immigration Advisor',
      experience: '8 years',
      specialization: 'Australian Immigration',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Emily Davis',
      role: 'Document Specialist',
      experience: '10 years',
      specialization: 'European Immigration',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Our Company</h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Since 2016, we are experts in Immigration Services, providing reliable consultancy for your immigration journey
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Since 2016, we have been dedicated experts in Immigration Services, building a reputation as reliable immigration consultants who handle each case with utmost care and professionalism.
                </p>
                <p>
                  Our expert team creates great value for immigration by providing certified & reliable Immigration Consultant professionals who can help you get a positive decision on your case.
                </p>
                <p>
                  We provide services from our <strong>ICCRC Registered Associates</strong> and have been providing consultancy services for immigration opportunities in foreign countries across the globe.
                </p>
                <p>
                  Each and every consultant hired at our company has been through our comprehensive <strong>6 months aggressive internal training program</strong> that consists of eight different specialized courses.
                </p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-600">Serving in the GCC since 2016 with outstanding results</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Comprehensive immigration and document clearing services</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-lg text-gray-600">Certified professionals dedicated to your immigration success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <div className="space-y-1 text-gray-600">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      <span>{member.experience} experience</span>
                    </div>
                    <div className="flex items-center">
                      <Star size={16} className="mr-2" />
                      <span>{member.specialization}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ICCRC Registered</h3>
              <p className="text-gray-600">All our services are provided by ICCRC registered associates ensuring compliance and reliability.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Training</h3>
              <p className="text-gray-600">6-month intensive training program with 8 specialized courses for all our consultants.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">GCC Presence</h3>
              <p className="text-gray-600">Serving in the GCC region since 2016 with deep understanding of local needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;