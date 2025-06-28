import React from 'react';
import { CheckCircle, Clock, Users, Award, ArrowRight, Briefcase } from 'lucide-react';

const UK = () => {
  const programs = [
    {
      name: 'Sole Representative Program',
      description: 'For employees of overseas companies establishing UK presence',
      requirements: ['Senior employee of overseas company', 'Company has no UK presence', 'Intention to establish UK branch', 'Business plan and financial evidence'],
      processing: '3-6 months'
    },
    {
      name: 'UK Student Visa',
      description: 'Study visa for international students',
      requirements: ['Confirmation of Acceptance for Studies (CAS)', 'English language proficiency', 'Financial requirements', 'Academic qualifications'],
      processing: '3-8 weeks'
    },
    {
      name: 'UK Visit Visa',
      description: 'Visitor visa for tourism, business, and family visits',
      requirements: ['Valid passport', 'Financial evidence', 'Accommodation proof', 'Return travel arrangements'],
      processing: '2-3 weeks'
    }
  ];

  const benefits = [
    'Access to world-class education system',
    'Rich cultural heritage and history',
    'Gateway to Europe and global business',
    'Excellent healthcare system (NHS)',
    'Strong job market and career opportunities',
    'English-speaking environment'
  ];

  const cities = [
    {
      name: 'London',
      description: 'Global financial center and cultural capital',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Manchester',
      description: 'Major business hub with growing tech sector',
      image: 'https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Edinburgh',
      description: 'Historic city with strong financial services',
      image: 'https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Move to United Kingdom</h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8">
                Explore opportunities in one of the world's leading economies and cultural centers
              </p>
              <button className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
                Explore Options
              </button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="UK London Big Ben"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose the UK?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The United Kingdom offers exceptional opportunities for education, business, and career development in a globally connected environment.
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

      {/* Major Cities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Major UK Cities</h2>
            <p className="text-lg text-gray-600">Discover the best cities for living, working, and studying in the UK</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cities.map((city, index) => (
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

      {/* UK Visa Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">UK Visa Programs</h2>
            <p className="text-lg text-gray-600">Find the right UK visa for your specific needs</p>
          </div>
          
          <div className="space-y-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{program.name}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    
                    <div>
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
                  </div>
                  
                  <div className="lg:col-span-1 bg-gray-50 rounded-lg p-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 text-blue-600 mb-3">
                        <Clock size={20} />
                        <span className="font-medium">Processing Time</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-4">{program.processing}</div>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>
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
            <p className="text-lg text-gray-600">Professional guidance through your UK visa application</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Initial Consultation</h3>
              <p className="text-gray-600">Assess your options and determine the best visa route</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-red-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Document Collection</h3>
              <p className="text-gray-600">Gather all required supporting documents</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Application Submission</h3>
              <p className="text-gray-600">Complete and submit your UK visa application</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-purple-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Decision & Support</h3>
              <p className="text-gray-600">Receive decision and post-approval support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-red-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready for Your UK Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our UK immigration specialists are ready to help you achieve your goals in the United Kingdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
              Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold py-3 px-8 rounded-lg transition-colors">
              View All UK Visas
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UK;