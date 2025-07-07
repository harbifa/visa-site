import React from 'react';
import { CheckCircle, Clock, Users, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const UK = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate('/contact');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">{t('pages:uk.hero.title')}</h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8">
                {t('pages:uk.hero.subtitle')}
              </p>
              <button 
                className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
                onClick={handleNavigateToContact}
              >
                {t('pages:uk.hero.cta')}
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('pages:uk.why_choose.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('pages:uk.why_choose.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(t('pages:uk.why_choose.benefits', { returnObjects: true }) as string[]).map((benefit: string, index: number) => (
              <div key={index} className="flex items-start space-x-3 rtl:space-x-reverse">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UK Visa Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('pages:uk.programs.title')}</h2>
            <p className="text-lg text-gray-600">{t('pages:uk.programs.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skilled Worker Visa */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pages:uk.programs.skilled.name')}</h3>
              <p className="text-gray-600 mb-4">{t('pages:uk.programs.skilled.description')}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('pages:common.key_requirements')}</h4>
                <ul className="space-y-1">
                  {(t('pages:uk.programs.skilled.requirements', { returnObjects: true }) as string[]).map((req: string, reqIndex: number) => (
                    <li key={reqIndex} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600">
                <Clock size={16} />
                <span className="text-sm font-medium">{t('pages:uk.programs.skilled.processing')}</span>
              </div>
            </div>

            {/* Study Visa */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pages:uk.programs.study.name')}</h3>
              <p className="text-gray-600 mb-4">{t('pages:uk.programs.study.description')}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('pages:common.key_requirements')}</h4>
                <ul className="space-y-1">
                  {(t('pages:uk.programs.study.requirements', { returnObjects: true }) as string[]).map((req: string, reqIndex: number) => (
                    <li key={reqIndex} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600">
                <Clock size={16} />
                <span className="text-sm font-medium">{t('pages:uk.programs.study.processing')}</span>
              </div>
            </div>

            {/* Visit Visa */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pages:uk.programs.visit.name')}</h3>
              <p className="text-gray-600 mb-4">{t('pages:uk.programs.visit.description')}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('pages:common.key_requirements')}</h4>
                <ul className="space-y-1">
                  {(t('pages:uk.programs.visit.requirements', { returnObjects: true }) as string[]).map((req: string, reqIndex: number) => (
                    <li key={reqIndex} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600">
                <Clock size={16} />
                <span className="text-sm font-medium">{t('pages:uk.programs.visit.processing')}</span>
              </div>
            </div>

            {/* Family Visa */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pages:uk.programs.family.name')}</h3>
              <p className="text-gray-600 mb-4">{t('pages:uk.programs.family.description')}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('pages:common.key_requirements')}</h4>
                <ul className="space-y-1">
                  {(t('pages:uk.programs.family.requirements', { returnObjects: true }) as string[]).map((req: string, reqIndex: number) => (
                    <li key={reqIndex} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600">
                <Clock size={16} />
                <span className="text-sm font-medium">{t('pages:uk.programs.family.processing')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('pages:uk.process.title')}</h2>
            <p className="text-lg text-gray-600">{t('pages:uk.process.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(t('pages:uk.process.steps', { returnObjects: true }) as Array<{title: string, description: string}>).map((step, index: number) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-red-100' : index === 2 ? 'bg-green-100' : 'bg-purple-100'
                }`}>
                  {index === 0 && <Users className="text-blue-600" size={32} />}
                  {index === 1 && <Award className="text-red-600" size={32} />}
                  {index === 2 && <CheckCircle className="text-green-600" size={32} />}
                  {index === 3 && <Clock className="text-purple-600" size={32} />}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">{t('pages:uk.cta.title')}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('pages:uk.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
              onClick={handleNavigateToContact}
            >
              {t('pages:uk.cta.primary_btn')}
            </button>
            <button 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold py-3 px-8 rounded-lg transition-colors"
              onClick={handleNavigateToContact}
            >
              {t('pages:uk.cta.secondary_btn')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UK;