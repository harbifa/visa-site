import React from 'react';
import { CheckCircle, Clock, Users, Award, ArrowRight } from 'lucide-react';

const Canada = () => {
  const programs = [
    {
      name: 'Express Entry System',
      description: 'Federal skilled worker, Canadian Experience Class, and Federal Skilled Trades programs',
      requirements: ['Bachelor\'s degree or equivalent', 'IELTS 6.0+ overall', '1+ years skilled work experience', 'Age 18-35 preferred'],
      processing: '6-8 months'
    },
    {
      name: 'Provincial Nominee Program (PNP)',
      description: 'Province-specific immigration programs for skilled workers',
      requirements: ['Skills aligned with provincial needs', 'Work experience in targeted occupation', 'Language proficiency', 'Intent to live in nominating province'],
      processing: '8-12 months'
    },
    {
      name: 'Atlantic Immigration Pilot Program',
      description: 'Immigration program for Atlantic provinces',
      requirements: ['Job offer from Atlantic employer', 'Work experience', 'Education credentials', 'Language abilities'],
      processing: '6-9 months'
    },
    {
      name: 'Study Visa',
      description: 'Study permits for international students',
      requirements: ['Acceptance letter from DLI', 'Proof of financial support', 'Clean background check', 'Medical exam if required'],
      processing: '4-12 weeks'
    },
    {
      name: 'Visit Visa',
      description: 'Temporary resident visa for tourism and business',
      requirements: ['Valid passport', 'Financial support proof', 'Ties to home country', 'Purpose of visit'],
      processing: '2-4 weeks'
    },
    {
      name: 'Family/Spouse Visa',
      description: 'Family reunification and spousal sponsorship',
      requirements: ['Eligible sponsor in Canada', 'Relationship proof', 'Financial requirements met', 'Medical and background checks'],
      processing: '12-24 months'
    }
  ];

  const benefits = [
    'High quality of life and healthcare system',
    'Excellent education system',
    'Multicultural and inclusive society',
    'Strong economy with job opportunities',
    'Path to Canadian citizenship',
    'Social benefits and security'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Immigrate to Canada</h1>
              <p className="text-xl lg:text-2xl text-red-100 mb-8">
                Your pathway to permanent residence in one of the world's most welcoming countries
              </p>
              <button className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
                Start Your Assessment
              </button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Canada landscape"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Canada?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Canada offers some of the world's best immigration programs with multiple pathways to permanent residence and citizenship.
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

      {/* Immigration Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Canadian Immigration Programs</h2>
            <p className="text-lg text-gray-600">Choose the right pathway for your Canadian immigration journey</p>
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
            <p className="text-lg text-gray-600">Step-by-step guidance for your Canadian immigration</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-red-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Initial Assessment</h3>
              <p className="text-gray-600">Evaluate your eligibility and recommend the best program</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Document Preparation</h3>
              <p className="text-gray-600">Assist with gathering and preparing all required documents</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Application Submission</h3>
              <p className="text-gray-600">Submit your complete application to Canadian immigration</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-purple-600" size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Follow-up & Support</h3>
              <p className="text-gray-600">Monitor your application and provide ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Start Your Canadian Journey?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Our certified immigration consultants are here to guide you through every step of the process.
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

export default Canada;