import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, CreditCard } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
// Using logo from public directory for both Header and favicon
const logo = '/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const timeoutRef = useRef<number | null>(null);

  // إغلاق القوائم عند تغيير الصفحة
  useEffect(() => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
    // تنظيف أي timeout موجود
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [location.pathname]);

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [activeDropdown]);

  // تنظيف timeout عند unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseLeave = () => {
    // تنظيف timeout السابق إذا كان موجوداً
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // إنشاء timeout جديد
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      timeoutRef.current = null;
    }, 300);
  };

  const handleMouseEnter = () => {
    // تنظيف timeout عند دخول الماوس
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown('services');
  };

  const countries = [
    { name: t('countries.canada'), path: '/canada' },
    { name: t('countries.australia'), path: '/australia' },
    { name: t('countries.uk'), path: '/uk' },
    { name: t('countries.europe'), path: '/europe' },
    { name: t('countries.usa'), path: '/usa' }
  ];

  const handlePayment = () => {
    navigate('/payment');
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 rtl-support">
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex flex-wrap items-center gap-4">
            {/* Location - always visible */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <MapPin size={16} />
              <span className="whitespace-nowrap">{t('company.location')}</span>
            </div>
            
            {/* Contact info - responsive layout */}
            <div className="flex flex-col items-end sm:flex-row sm:items-center sm:space-x-6 rtl:sm:space-x-reverse space-y-1 sm:space-y-0">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Phone size={16} />
                <span className="whitespace-nowrap">{t('company.phone')}</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Mail size={16} />
                <span className="whitespace-nowrap">{t('company.email')}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageSwitcher />
            <button
              onClick={handlePayment}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md flex items-center space-x-2 rtl:space-x-reverse transition-colors text-white font-medium"
            >
              <CreditCard size={16} />
              <span>{t('navigation.pay_online')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img 
              src={logo} 
              alt={t('company.name')} 
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-blue-900">{t('company.name')}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            <Link to="/" className="text-gray-700 hover:text-blue-900 transition-colors">
              {t('navigation.home')}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-900 transition-colors">
              {t('navigation.about')}
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative dropdown-container">
              <button
                className="flex items-center space-x-1 rtl:space-x-reverse text-gray-700 hover:text-blue-900 transition-colors"
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span>{t('navigation.services')}</span>
                <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'services' && (
                <div
                  className="absolute top-full left-0 rtl:left-auto rtl:right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-4">
                    <div className="space-y-2">
                      {countries.map((country) => (
                        <Link
                          key={country.name}
                          to={country.path}
                          className="block text-gray-700 hover:text-blue-700 hover:bg-blue-50 px-4 py-3 rounded-md transition-colors font-medium"
                          onClick={() => {
                            setActiveDropdown(null);
                            setTimeout(() => setActiveDropdown(null), 100);
                          }}
                        >
                          {country.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-700 hover:text-blue-900 transition-colors">
              {t('navigation.contact')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/" className="text-gray-700 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>
                {t('navigation.home')}
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>
                {t('navigation.about')}
              </Link>
              
              {/* Mobile Services */}
              <div className="pl-4 rtl:pl-0 rtl:pr-4">
                <div className="text-gray-700 font-semibold mb-3">{t('navigation.services')}</div>
                <div className="space-y-2 pl-4 rtl:pl-0 rtl:pr-4">
                  {countries.map((country) => (
                    <Link
                      key={country.name}
                      to={country.path}
                      className="block text-gray-600 hover:text-blue-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {country.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link to="/contact" className="text-gray-700 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>
                {t('navigation.contact')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;