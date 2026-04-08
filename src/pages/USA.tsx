import React from 'react';
import { CheckCircle, Clock, Users, Award, DollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const USA = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate('/contact');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 via-white to-red-600 text-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-blue-900">{t('pages:usa.hero.title')}</h1>
              <p className="text-xl lg:text-2xl text-blue-800 mb-8">
                {t('pages:usa.hero.subtitle')}
              </p>
              <button 
                className="bg-blue-800 text-white hover:bg-blue-900 font-bold py-3 px-8 rounded-lg transition-colors"
                onClick={handleNavigateToContact}
              >
                {t('pages:usa.hero.cta')}
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('pages:usa.why_choose.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('pages:usa.why_choose.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(t('pages:usa.why_choose.benefits', { returnObjects: true }) as string[]).map((benefit: string, index: number) => (
              <div key={index} className="flex items-start space-x-3 rtl:space-x-reverse">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('pages:usa.investment.title')}</h2>
            <p className="text-lg text-gray-600">{t('pages:usa.investment.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(t('pages:usa.investment.options', { returnObjects: true }) as Array<{type: string, amount: string, description: string, jobs: string}>).map((option, index: number) => (
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
                    {option.jobs}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('pages:usa.cities.title')}</h2>
            <p className="text-lg text-gray-600">{t('pages:usa.cities.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="New York City"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('pages:usa.cities.new_york.name')}</h3>
                <p className="text-gray-600">{t('pages:usa.cities.new_york.description')}</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="San Francisco"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('pages:usa.cities.san_francisco.name')}</h3>
                <p className="text-gray-600">{t('pages:usa.cities.san_francisco.description')}</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="Miami"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('pages:usa.cities.miami.name')}</h3>
                <p className="text-gray-600">{t('pages:usa.cities.miami.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USA Visa Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('pages:usa.programs.title')}</h2>
            <p className="text-lg text-gray-600">{t('pages:usa.programs.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* E2 Visa */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pages:usa.programs.e2.name')}</h3>
              <p className="text-gray-600 mb-4">{t('pages:usa.programs.e2.description')}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('pages:common.key_requirements')}</h4>
                <ul className="space-y-1">
                  {(t('pages:usa.programs.e2.requirements', { returnObjects: true }) as string[]).map((req: string, reqIndex: number) => (
                    <li key={reqIndex} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600">
                <Clock size={16} />
                <span className="text-sm font-medium">{t('pages:usa.programs.e2.processing')}</span>
              </div>
            </div>

            {/* EB5 Visa */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pages:usa.programs.eb5.name')}</h3>
              <p className="text-gray-600 mb-4">{t('pages:usa.programs.eb5.description')}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('pages:common.key_requirements')}</h4>
                <ul className="space-y-1">
                  {(t('pages:usa.programs.eb5.requirements', { returnObjects: true }) as string[]).map((req: string, reqIndex: number) => (
                    <li key={reqIndex} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600">
                <Clock size={16} />
                <span className="text-sm font-medium">{t('pages:usa.programs.eb5.processing')}</span>
              </div>
            </div>

            {/* Student Visa */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pages:usa.programs.student.name')}</h3>
              <p className="text-gray-600 mb-4">{t('pages:usa.programs.student.description')}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('pages:common.key_requirements')}</h4>
                <ul className="space-y-1">
                  {(t('pages:usa.programs.student.requirements', { returnObjects: true }) as string[]).map((req: string, reqIndex: number) => (
                    <li key={reqIndex} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600">
                <Clock size={16} />
                <span className="text-sm font-medium">{t('pages:usa.programs.student.processing')}</span>
              </div>
            </div>

            {/* Visit Visa */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pages:usa.programs.visit.name')}</h3>
              <p className="text-gray-600 mb-4">{t('pages:usa.programs.visit.description')}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('pages:common.key_requirements')}</h4>
                <ul className="space-y-1">
                  {(t('pages:usa.programs.visit.requirements', { returnObjects: true }) as string[]).map((req: string, reqIndex: number) => (
                    <li key={reqIndex} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600">
                <Clock size={16} />
                <span className="text-sm font-medium">{t('pages:usa.programs.visit.processing')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('pages:usa.process.title')}</h2>
            <p className="text-lg text-gray-600">{t('pages:usa.process.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(t('pages:usa.process.steps', { returnObjects: true }) as Array<{title: string, description: string}>).map((step, index: number) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-red-100' : index === 2 ? 'bg-green-100' : 'bg-purple-100'
                }`}>
                  {index === 0 && <Users className="text-blue-600" size={32} />}
                  {index === 1 && <DollarSign className="text-red-600" size={32} />}
                  {index === 2 && <Award className="text-green-600" size={32} />}
                  {index === 3 && <CheckCircle className="text-purple-600" size={32} />}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 via-blue-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">{t('pages:usa.cta.title')}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('pages:usa.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
              onClick={handleNavigateToContact}
            >
              {t('pages:usa.cta.primary_btn')}
            </button>
            <button 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold py-3 px-8 rounded-lg transition-colors"
              onClick={handleNavigateToContact}
            >
              {t('pages:usa.cta.secondary_btn')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default USA;