import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from '../data/translations';
import { Button } from './ui/button';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://customer-assets.emergentagent.com/job_e01b069d-7b15-44a6-acea-748ef12f5a6e/artifacts/5wdn5ohr_Logo%20Unbreakable%20trader.png" 
              alt="Unbreakable Trader" 
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('preview')}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              {t.nav.preview}
            </button>
            <button 
              onClick={() => scrollToSection('success-stories')}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              {t.nav.successStories}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Language Switcher & CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <img 
                src={language === 'en' ? 'https://flagcdn.com/w20/us.png' : 'https://flagcdn.com/w20/es.png'} 
                alt={language === 'en' ? 'English' : 'Español'} 
                className="w-5 h-4"
              />
              <span className="text-sm font-medium">{language === 'en' ? 'EN' : 'ES'}</span>
            </button>

            {/* CTA Button */}
            <Button 
              onClick={() => window.open('https://mpago.la/1X7QviH', '_blank')}
              className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-none font-medium transition-all duration-300 transform hover:scale-105"
            >
              {t.nav.getSystem}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;