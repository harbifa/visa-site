import React from 'react';
import { CheckCircle, Clock, Users, Award, MapPin, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Europe = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate('/contact');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 via-yellow-400 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">{t('pages:europe.hero.title')}</h1>
              <p className="text-xl lg:text-2xl text-yellow-100 mb-8">
                {t('pages:europe.hero.subtitle')}
              </p>
              <button 
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
                onClick={handleNavigateToContact}
              >
                {t('pages:europe.hero.cta')}
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('pages:europe.why_choose.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('pages:europe.why_choose.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(t('pages:europe.why_choose.benefits', { returnObjects: true }) as string[]).map((benefit: string, index: number) => (
              <div key={index} className="flex items-start space-x-3 rtl:space-x-reverse">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('pages:europe.sectors.title')}</h2>
            <p className="text-lg text-gray-600">{t('pages:europe.sectors.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(t('pages:europe.sectors.jobs', { returnObjects: true }) as Array<{name: string, demand: string, icon: string}>).map((sector, index: number) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4">{sector.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{sector.name}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  sector.demand === 'Very High' 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {sector.demand}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('pages:europe.cities.title')}</h2>
            <p className="text-lg text-gray-600">{t('pages:europe.cities.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="Berlin"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="text-red-600 mr-2 ml-2" size={20} />
                  <h3 className="text-xl font-bold text-gray-900">{t('pages:europe.cities.berlin.name')}</h3>
                </div>
                <p className="text-gray-600">{t('pages:europe.cities.berlin.description')}</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1595867818082-083862f3d630?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="Munich"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="text-red-600 mr-2 ml-2" size={20} />
                  <h3 className="text-xl font-bold text-gray-900">{t('pages:europe.cities.munich.name')}</h3>
                </div>
                <p className="text-gray-600">{t('pages:europe.cities.munich.description')}</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="Frankfurt"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="text-red-600 mr-2 ml-2" size={20} />
                  <h3 className="text-xl font-bold text-gray-900">{t('pages:europe.cities.frankfurt.name')}</h3>
                </div>
                <p className="text-gray-600">{t('pages:europe.cities.frankfurt.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Europe Visa Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('pages:europe.programs.title')}</h2>
            <p className="text-lg text-gray-600">{t('pages:europe.programs.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Job Seeker Visa */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pages:europe.programs.job_seeker.name')}</h3>
              <p className="text-gray-600 mb-4">{t('pages:europe.programs.job_seeker.description')}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('pages:common.key_requirements')}</h4>
                <ul className="space-y-1">
                  {(t('pages:europe.programs.job_seeker.requirements', { returnObjects: true }) as string[]).map((req: string, reqIndex: number) => (
                    <li key={reqIndex} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600">
                <Clock size={16} />
                <span className="text-sm font-medium">{t('pages:europe.programs.job_seeker.processing')}</span>
              </div>
            </div>

            {/* Study Visa */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pages:europe.programs.study.name')}</h3>
              <p className="text-gray-600 mb-4">{t('pages:europe.programs.study.description')}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('pages:common.key_requirements')}</h4>
                <ul className="space-y-1">
                  {(t('pages:europe.programs.study.requirements', { returnObjects: true }) as string[]).map((req: string, reqIndex: number) => (
                    <li key={reqIndex} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600">
                <Clock size={16} />
                <span className="text-sm font-medium">{t('pages:europe.programs.study.processing')}</span>
              </div>
            </div>

            {/* Visit Visa */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pages:europe.programs.visit.name')}</h3>
              <p className="text-gray-600 mb-4">{t('pages:europe.programs.visit.description')}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('pages:common.key_requirements')}</h4>
                <ul className="space-y-1">
                  {(t('pages:europe.programs.visit.requirements', { returnObjects: true }) as string[]).map((req: string, reqIndex: number) => (
                    <li key={reqIndex} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600">
                <Clock size={16} />
                <span className="text-sm font-medium">{t('pages:europe.programs.visit.processing')}</span>
              </div>
            </div>

            {/* Spouse Visa */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pages:europe.programs.spouse.name')}</h3>
              <p className="text-gray-600 mb-4">{t('pages:europe.programs.spouse.description')}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('pages:common.key_requirements')}</h4>
                <ul className="space-y-1">
                  {(t('pages:europe.programs.spouse.requirements', { returnObjects: true }) as string[]).map((req: string, reqIndex: number) => (
                    <li key={reqIndex} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600">
                <Clock size={16} />
                <span className="text-sm font-medium">{t('pages:europe.programs.spouse.processing')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('pages:europe.process.title')}</h2>
            <p className="text-lg text-gray-600">{t('pages:europe.process.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(t('pages:europe.process.steps', { returnObjects: true }) as Array<{title: string, description: string}>).map((step, index: number) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  index === 0 ? 'bg-red-100' : index === 1 ? 'bg-yellow-100' : index === 2 ? 'bg-green-100' : 'bg-blue-100'
                }`}>
                  {index === 0 && <Users className="text-red-600" size={32} />}
                  {index === 1 && <Award className="text-yellow-600" size={32} />}
                  {index === 2 && <Briefcase className="text-green-600" size={32} />}
                  {index === 3 && <CheckCircle className="text-blue-600" size={32} />}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-yellow-400 to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">{t('pages:europe.cta.title')}</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            {t('pages:europe.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
              onClick={handleNavigateToContact}
            >
              {t('pages:europe.cta.primary_btn')}
            </button>
            <button 
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-3 px-8 rounded-lg transition-colors"
              onClick={handleNavigateToContact}
            >
              {t('pages:europe.cta.secondary_btn')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Europe;