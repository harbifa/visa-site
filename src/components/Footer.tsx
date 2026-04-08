import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white rtl-support">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('company.name')}</h3>
            <p className="text-gray-300 mb-4">
              {t('company.description')}
            </p>
            <div className="text-sm text-gray-400">
              <p>{t('company.credentials')}</p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.useful_links')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t('navigation.about_us')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t('navigation.contact')}
                </Link>
              </li>
              <li>
                <Link to="/payment" className="text-gray-300 hover:text-white transition-colors">
                  {t('navigation.pay_online')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Countries Visas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.countries_visas')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/canada" className="text-gray-300 hover:text-white transition-colors">
                  {t('countries.canada')} Visa
                </Link>
              </li>
              <li>
                <Link to="/australia" className="text-gray-300 hover:text-white transition-colors">
                  {t('countries.australia')} Visa
                </Link>
              </li>
              <li>
                <Link to="/uk" className="text-gray-300 hover:text-white transition-colors">
                  {t('countries.uk')} Visa
                </Link>
              </li>
              <li>
                <Link to="/europe" className="text-gray-300 hover:text-white transition-colors">
                  {t('countries.europe')} Visa
                </Link>
              </li>
              <li>
                <Link to="/usa" className="text-gray-300 hover:text-white transition-colors">
                  {t('countries.usa')} Visa
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.get_in_touch')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{t('company.location')}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{t('company.phone')}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{t('company.email')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
              {t('footer.privacy_policy')}
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">
              {t('footer.terms_of_service')}
            </Link>
            <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors text-sm">
              {t('footer.disclaimer')}
            </Link>
            <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
              {t('footer.cookie_policy')}
            </Link>
            <Link to="/refund-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
              {t('footer.refund_policy')}
            </Link>
          </div>
          <div className="text-center text-gray-400">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;