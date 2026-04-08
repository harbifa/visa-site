import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'عربي', flag: '🇸🇦' },
  ];

  // Show the OTHER language (the one you can switch TO)
  const otherLanguage = languages.find(lang => lang.code !== currentLanguage) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    changeLanguage(languageCode);
  };

  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-md bg-blue-800 hover:bg-blue-700 text-white transition-colors border border-blue-600"
        title="تغيير اللغة / Change Language"
      >
        <Globe size={16} className="no-flip" />
        <span className="text-sm font-medium">{otherLanguage.flag}</span>
        <span className="text-sm font-medium">
          {otherLanguage.name}
        </span>
      </button>
      
      <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full text-left rtl:text-right px-4 py-2 hover:bg-gray-100 flex items-center space-x-3 rtl:space-x-reverse transition-colors ${
                currentLanguage === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
              {currentLanguage === language.code && (
                <span className="ml-auto rtl:ml-0 rtl:mr-auto text-blue-600">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher; 