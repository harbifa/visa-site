import React from 'react';
import { CheckCircle, Clock, Users, Award, ArrowRight, MapPin, Briefcase } from 'lucide-react';

const Europe = () => {
  const programs = [
    {
      name: 'Germany Job Seeker Visa',
      description: 'Visa to search for employment in Germany',
      requirements: ['University degree or vocational qualification', 'Proof of financial support (€5,000+)', 'Health insurance', 'German language skills (A1-B2)', 'Accommodation proof'],
      processing: '2-4 weeks'
    },
    {
      name: 'Germany Study Visa',
      description: 'Student visa for higher education in Germany',
      requirements: ['University admission letter', 'Financial proof (€11,208/year)', 'Academic qualifications', 'German/English proficiency', 'Health insurance'],
      processing: '4-8 weeks'
    },
    {
      name: 'Germany Visit Visa',
      description: 'Schengen visa for tourism and business',
      requirements: ['Valid passport', 'Travel insurance', 'Financial proof', 'Accommodation booking', 'Return flight tickets'],
      processing: '1-3 weeks'
    },
    {
      name: 'Germany Spouse Visa',
      description: 'Family reunification visa for spouses',
      requirements: ['Marriage certificate', 'Sponsor financial proof', 'German language certificate (A1)', 'Accommodation proof', 'Health insurance'],
      processing: '4-12 weeks'
    }
  ];

  const benefits = [
    'Strong economy and job market',
    'High quality education system',
    'Excellent healthcare and social benefits',
    'Central location in Europe',
    'Rich cultural heritage and lifestyle',
    'Path to EU citizenship'
  ];

  const cities = [
    {
      name: 'Berlin',
      description: 'Capital city with thriving startup ecosystem',
      image: 'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Munich',
      description: 'Economic powerhouse and technology hub',
      image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Frankfurt',
      description: 'Financial center of Germany and Europe',
      image: 'https://images.pexels.com/photos/1464207/pexels-photo-1464207.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const jobSectors = [
    { name: 'Information Technology', demand: 'Very High', icon: '💻' },
    { name: 'Engineering', demand: 'High', icon: '⚙️' },
    { name: 'Healthcare', demand: 'Very High', icon: '🏥' },
    { name: 'Finance', demand: 'High', icon: '💰' },
    { name: 'Manufacturing', demand: 'High', icon: '🏭' },
    { name: 'Research & Development', demand: 'High', icon: '🔬' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 via-yellow-400 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Move to Germany & Europe</h1>
              <p className="text-xl lg:text-2xl text-yellow-100 mb-8">
                Discover opportunities in the heart of Europe with strong economy and excellent quality of life
              </p>
              <button className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
                Explore Opportunities
              </button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Germany Brandenburg Gate"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Germany?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Germany offers exceptional opportunities for skilled professionals with its robust economy, excellent education system, and high standard of living.
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

      {/* In-Demand Job Sectors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">In-Demand Job Sectors</h2>
            <p className="text-lg text-gray-600">High-demand professions in the German job market</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobSectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4">{sector.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{sector.name}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  sector.demand === 'Very High' 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {sector.demand} Demand
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Major German Cities</h2>
            <p className="text-lg text-gray-600">Explore the best cities for living and working in Germany</p>
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
                  <div className="flex items-center mb-2">
                    <MapPin className="text-red-600 mr-2" size={20} />
                    <h3 className="text-xl font-bold text-gray-900">{city.name}</h3>
                  </div>
                  <p className="text-gray-600">{city.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Germany Visa Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Germany Visa Programs</h2>
            <p className="text-lg text-gray-600">Find the right German visa for your goals</p>
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
                  <button className="text-red-600 hover:text-red-800 font-semibold flex items-center space-x-1">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">Expert guidance for your German immigration journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-red-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Qualification Assessment</h3>
              <p className="text-gray-600">Evaluate your qualifications and language skills</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Document Preparation</h3>
              <p className="text-gray-600">Prepare and authenticate all required documents</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Visa Application</h3>
              <p className="text-gray-600">Submit complete application to German consulate</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pre-departure Support</h3>
              <p className="text-gray-600">Assistance with travel and settlement preparation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-yellow-400 to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready for Your European Adventure?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Start your journey to Germany and Europe with our expert immigration consultants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
              Free Assessment
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-3 px-8 rounded-lg transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Europe;