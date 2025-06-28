import React from 'react';
import { CheckCircle, Clock, Users, Award, ArrowRight } from 'lucide-react';

const Australia = () => {
  const programs = [
    {
      name: 'Skilled Nominated Visa (Subclass 190)',
      description: 'State or territory government nominated skilled migration',
      requirements: ['Skilled occupation on relevant list', 'Skills assessment', 'English proficiency', 'Age under 45', 'State nomination'],
      processing: '8-11 months'
    },
    {
      name: 'Study Visa (Subclass 500)',
      description: 'Student visa for international education',
      requirements: ['Enrollment confirmation (CoE)', 'Genuine Temporary Entrant requirement', 'Financial capacity', 'English proficiency', 'Health insurance'],
      processing: '4-6 weeks'
    },
    {
      name: 'Visit Visa (Subclass 600)',
      description: 'Visitor visa for tourism and business',
      requirements: ['Valid passport', 'Financial evidence', 'Health requirements', 'Character requirements', 'Genuine visitor intent'],
      processing: '2-4 weeks'
    },
    {
      name: 'Spouse Visa (Subclass 820/801)',
      description: 'Partnership visa for married or de facto partners',
      requirements: ['Australian citizen/PR sponsor', 'Genuine relationship evidence', 'Health and character checks', 'Financial requirements'],
      processing: '12-24 months'
    }
  ];

  const benefits = [
    'High standard of living and work-life balance',
    'World-class education and healthcare systems',
    'Diverse multicultural society',
    'Strong economy with excellent job opportunities',
    'Beautiful climate and natural environment',
    'Path to Australian citizenship'
  ];

  const popularCities = [
    {
      name: 'Sydney',
      description: 'Economic hub with iconic harbor and beaches',
      image: 'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Melbourne',
      description: 'Cultural capital known for arts and coffee culture',
      image: 'https://images.pexels.com/photos/1451447/pexels-photo-1451447.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Brisbane',
      description: 'Sunny climate and growing technology sector',
      image: 'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Immigrate to Australia</h1>
              <p className="text-xl lg:text-2xl text-green-100 mb-8">
                Discover opportunities in the land down under with our expert guidance
              </p>
              <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
                Start Your Journey
              </button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Australia Sydney Opera House"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Australia?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Australia offers excellent opportunities for skilled migrants with its robust economy, high quality of life, and welcoming immigration policies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Popular Australian Cities</h2>
            <p className="text-lg text-gray-600">Explore the best cities for living and working in Australia</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularCities.map((city, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{city.name}</h3>
                  <p className="text-gray-600">{city.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immigration Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Australian Immigration Programs</h2>
            <p className="text-lg text-gray-600">Find the right visa pathway for your Australian dream</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.name}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                  <ul className="space-y-1">
                    {program.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-sm text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Clock size={16} />
                    <span className="text-sm font-medium">{program.processing}</span>
                  </div>
                  <button className="text-green-600 hover:text-green-800 font-semibold flex items-center space-x-1">
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">Your step-by-step guide to Australian immigration</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Skills Assessment</h3>
              <p className="text-gray-600">Evaluate your qualifications and determine eligibility</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expression of Interest</h3>
              <p className="text-gray-600">Submit EOI through SkillSelect system</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Visa Application</h3>
              <p className="text-gray-600">Complete and submit your visa application</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-purple-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Application Processing</h3>
              <p className="text-gray-600">Monitor progress and provide additional documents</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Move to Australia?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Let our experienced consultants help you navigate the Australian immigration system successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
              Free Assessment
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-3 px-8 rounded-lg transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Australia;