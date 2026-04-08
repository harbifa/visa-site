import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Canada = () => {
  const { t } = useTranslation(['common', 'pages']);
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate('/contact');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">{t('pages:canada.hero.title')}</h1>
              <p className="text-xl lg:text-2xl text-red-100 mb-8">
                {t('pages:canada.hero.subtitle')}
              </p>
              <button 
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
                onClick={handleNavigateToContact}
              >
                {t('pages:canada.hero.cta')}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('pages:canada.why_choose.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('pages:canada.why_choose.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(t('pages:canada.why_choose.benefits', { returnObjects: true }) as string[]).map((benefit: string, index: number) => (
              <div key={index} className="flex items-start space-x-3 rtl:space-x-reverse">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('pages:canada.programs.title')}</h2>
            <p className="text-lg text-gray-600">{t('pages:canada.programs.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Express Entry */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pages:canada.programs.express_entry.name')}</h3>
              <p className="text-gray-600 mb-4">{t('pages:canada.programs.express_entry.description')}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('pages:common.key_requirements')}</h4>
                <ul className="space-y-1">
                  {(t('pages:canada.programs.express_entry.requirements', { returnObjects: true }) as string[]).map((req: string, reqIndex: number) => (
                    <li key={reqIndex} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600">
                <Clock size={16} />
                <span className="text-sm font-medium">{t('pages:canada.programs.express_entry.processing')}</span>
              </div>
            </div>

            {/* PNP */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pages:canada.programs.pnp.name')}</h3>
              <p className="text-gray-600 mb-4">{t('pages:canada.programs.pnp.description')}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('pages:common.key_requirements')}</h4>
                <ul className="space-y-1">
                  {(t('pages:canada.programs.pnp.requirements', { returnObjects: true }) as string[]).map((req: string, reqIndex: number) => (
                    <li key={reqIndex} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600">
                <Clock size={16} />
                <span className="text-sm font-medium">{t('pages:canada.programs.pnp.processing')}</span>
              </div>
            </div>

            {/* Atlantic */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pages:canada.programs.atlantic.name')}</h3>
              <p className="text-gray-600 mb-4">{t('pages:canada.programs.atlantic.description')}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('pages:common.key_requirements')}</h4>
                <ul className="space-y-1">
                  {(t('pages:canada.programs.atlantic.requirements', { returnObjects: true }) as string[]).map((req: string, reqIndex: number) => (
                    <li key={reqIndex} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600">
                <Clock size={16} />
                <span className="text-sm font-medium">{t('pages:canada.programs.atlantic.processing')}</span>
              </div>
            </div>

            {/* Study */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pages:canada.programs.study.name')}</h3>
              <p className="text-gray-600 mb-4">{t('pages:canada.programs.study.description')}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('pages:common.key_requirements')}</h4>
                <ul className="space-y-1">
                  {(t('pages:canada.programs.study.requirements', { returnObjects: true }) as string[]).map((req: string, reqIndex: number) => (
                    <li key={reqIndex} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600">
                <Clock size={16} />
                <span className="text-sm font-medium">{t('pages:canada.programs.study.processing')}</span>
              </div>
            </div>

            {/* Visit */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pages:canada.programs.visit.name')}</h3>
              <p className="text-gray-600 mb-4">{t('pages:canada.programs.visit.description')}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('pages:common.key_requirements')}</h4>
                <ul className="space-y-1">
                  {(t('pages:canada.programs.visit.requirements', { returnObjects: true }) as string[]).map((req: string, reqIndex: number) => (
                    <li key={reqIndex} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600">
                <Clock size={16} />
                <span className="text-sm font-medium">{t('pages:canada.programs.visit.processing')}</span>
              </div>
            </div>

            {/* Family */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pages:canada.programs.family.name')}</h3>
              <p className="text-gray-600 mb-4">{t('pages:canada.programs.family.description')}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('pages:common.key_requirements')}</h4>
                <ul className="space-y-1">
                  {(t('pages:canada.programs.family.requirements', { returnObjects: true }) as string[]).map((req: string, reqIndex: number) => (
                    <li key={reqIndex} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600">
                <Clock size={16} />
                <span className="text-sm font-medium">{t('pages:canada.programs.family.processing')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('pages:canada.process.title')}</h2>
            <p className="text-lg text-gray-600">{t('pages:canada.process.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(t('pages:canada.process.steps', { returnObjects: true }) as Array<{ title: string; description: string }>).map((step: { title: string; description: string }, index: number) => (
              <div key={index} className="text-center">
                <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('pages:canada.cta.title')}</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            {t('pages:canada.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
              onClick={handleNavigateToContact}
            >
              {t('pages:canada.cta.primary_btn')}
            </button>
            <button 
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-3 px-8 rounded-lg transition-colors"
              onClick={handleNavigateToContact}
            >
              {t('pages:canada.cta.secondary_btn')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Canada;