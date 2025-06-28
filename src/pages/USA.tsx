import React from 'react';
import { CheckCircle, Clock, Users, Award, ArrowRight, DollarSign, GraduationCap } from 'lucide-react';

const USA = () => {
  const programs = [
    {
      name: 'E2 Treaty Investor Visa',
      description: 'Investor visa for nationals of treaty countries',
      requirements: ['Substantial investment in US business', 'Treaty country nationality', 'Control of investment funds', 'Intent to depart when status ends'],
      processing: '2-4 months'
    },
    {
      name: 'EB-5 Immigrant Investor Program',
      description: 'Permanent residence through investment',
      requirements: ['$800K-$1.05M investment', 'Investment in approved project', 'Job creation requirement', 'Source of funds documentation'],
      processing: '18-33 months'
    },
    {
      name: 'Student Visa (F-1)',
      description: 'Academic study visa for universities and colleges',
      requirements: ['I-20 form from SEVP school', 'SEVIS fee payment', 'Financial support proof', 'Academic qualifications'],
      processing: '3-8 weeks'
    },
    {
      name: 'Visit Visa (B1/B2)',
      description: 'Business and tourism visitor visa',
      requirements: ['Valid passport', 'Purpose of visit', 'Financial evidence', 'Ties to home country'],
      processing: '2-6 weeks'
    },
    {
      name: 'Spouse Visa (CR-1/IR-1)',
      description: 'Immigrant visa for spouses of US citizens',
      requirements: ['US citizen petitioner', 'Valid marriage certificate', 'Financial affidavit of support', 'Medical examination'],
      processing: '12-24 months'
    }
  ];

  const benefits = [
    'World\'s largest economy with vast opportunities',
    'Leading universities and research institutions',
    'Diverse cultural landscape and experiences',
    'Innovation hub for technology and business',
    'Strong legal system and property rights',
    'Path to American citizenship'
  ];

  const cities = [
    {
      name: 'New York City',
      description: 'Global financial and cultural capital',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'San Francisco',
      description: 'Technology and innovation hub',
      image: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Miami',
      description: 'Gateway to Latin America and business center',
      image: 'https://images.pexels.com/photos/571169/pexels-photo-571169.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const investmentOptions = [
    {
      type: 'EB-5 Regional Center',
      amount: '$800,000',
      description: 'Investment in targeted employment areas through approved regional centers',
      jobs: '10 indirect jobs'
    },
    {
      type: 'EB-5 Direct Investment',
      amount: '$1,050,000',
      description: 'Direct investment in new commercial enterprise',
      jobs: '10 direct jobs'
    },
    {
      type: 'E2 Investment',
      amount: '$100,000+',
      description: 'Substantial investment in US business (non-immigrant)',
      jobs: 'Proportional to investment'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 via-white to-red-600 text-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-blue-900">Move to United States</h1>
              <p className="text-xl lg:text-2xl text-blue-800 mb-8">
                Achieve the American Dream through investment, education, and family immigration programs
              </p>
              <button className="bg-blue-800 text-white hover:bg-blue-900 font-bold py-3 px-8 rounded-lg transition-colors">
                Start Your Journey
              </button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="USA New York City"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose the USA?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The United States offers unparalleled opportunities for business, education, and personal growth in the world's most dynamic economy.
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

      {/* Investment Options */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Investment Immigration Options</h2>
            <p className="text-lg text-gray-600">Secure your US residency through strategic investment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{option.type}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{option.amount}</div>
                </div>
                <p className="text-gray-600 text-center mb-4">{option.description}</p>
                <div className="text-center">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Creates {option.jobs}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Major US Cities</h2>
            <p className="text-lg text-gray-600">Explore the best American cities for business and living</p>
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

      {/* USA Visa Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">US Immigration Programs</h2>
            <p className="text-lg text-gray-600">Choose the right pathway to the United States</p>
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
                  <button className="text-blue-800 hover:text-blue-900 font-semibold flex items-center space-x-1">
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
            <p className="text-lg text-gray-600">Professional guidance for your US immigration journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Initial Assessment</h3>
              <p className="text-gray-600">Evaluate your options and eligibility for US programs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-red-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Investment Planning</h3>
              <p className="text-gray-600">Structure your investment and business plan</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Application Submission</h3>
              <p className="text-gray-600">Prepare and submit complete visa application</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-purple-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Settlement Support</h3>
              <p className="text-gray-600">Assistance with relocation and integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 via-blue-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Pursue the American Dream?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our experienced US immigration attorneys and consultants are here to guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
              Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold py-3 px-8 rounded-lg transition-colors">
              Investment Calculator
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default USA;