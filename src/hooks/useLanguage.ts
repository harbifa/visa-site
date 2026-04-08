import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Force English as default language if no preference is saved
    const savedLanguage = localStorage.getItem('preferredLanguage');
    
    if (!savedLanguage) {
      // First time visitor - set English as default
      i18n.changeLanguage('en');
      localStorage.setItem('preferredLanguage', 'en');
    } else if (savedLanguage !== i18n.language) {
      // User has a saved preference
      i18n.changeLanguage(savedLanguage);
    }

    // Update HTML attributes based on current language
    updateHtmlAttributes(i18n.language);

    // Listen for language changes
    const handleLanguageChange = (lng: string) => {
      updateHtmlAttributes(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const updateHtmlAttributes = (language: string) => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    if (language === 'ar') {
      htmlElement.setAttribute('dir', 'rtl');
      htmlElement.setAttribute('lang', 'ar');
      bodyElement.classList.add('rtl');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
      htmlElement.setAttribute('lang', 'en');
      bodyElement.classList.remove('rtl');
    }
  };

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    localStorage.setItem('preferredLanguage', languageCode);
  };

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    isRTL: i18n.language === 'ar',
  };
}; 