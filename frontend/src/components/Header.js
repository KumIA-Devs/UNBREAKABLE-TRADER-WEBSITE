import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from '../data/translations';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://customer-assets.emergentagent.com/job_unbreakable-os/artifacts/xses6sqk_UNBREAKABLE%20TRADER.png" 
              alt="Unbreakable Trader" 
              className="h-10 sm:h-12 lg:h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('preview')}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-sm lg:text-lg"
            >
              {t.nav.preview}
            </button>
            <button 
              onClick={() => scrollToSection('notion-showcase')}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-sm lg:text-lg"
            >
              {language === 'en' ? 'System Preview' : 'Vista del Sistema'}
            </button>
            <button 
              onClick={() => scrollToSection('success-stories')}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-sm lg:text-lg"
            >
              {t.nav.successStories}
            </button>
          </nav>

          {/* Desktop Language & CTA */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <img 
                src={language === 'en' ? 'https://flagcdn.com/w20/us.png' : 'https://flagcdn.com/w20/es.png'} 
                alt={language === 'en' ? 'English' : 'Español'} 
                className="w-4 h-3 sm:w-5 sm:h-4"
              />
              <span className="text-xs lg:text-sm font-medium">{language === 'en' ? 'EN' : 'ES'}</span>
            </button>

            {/* CTA Button */}
            <Button 
              onClick={() => window.open(t.pricing.purchaseUrl, '_blank')}
              className="bg-black text-yellow-400 hover:bg-gray-800 hover:text-yellow-300 px-4 lg:px-6 py-2 rounded-none font-medium transition-all duration-300 transform hover:scale-105 text-sm lg:text-lg border border-yellow-400"
            >
              {t.nav.getSystem}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('preview')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              {t.nav.preview}
            </button>
            <button 
              onClick={() => scrollToSection('notion-showcase')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              {language === 'en' ? 'System Preview' : 'Vista del Sistema'}
            </button>
            <button 
              onClick={() => scrollToSection('success-stories')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              {t.nav.successStories}
            </button>
            
            <div className="border-t border-gray-200 pt-4 px-4 space-y-4">
              {/* Mobile Language Toggle */}
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-3 w-full"
              >
                <img 
                  src={language === 'en' ? 'https://flagcdn.com/w20/us.png' : 'https://flagcdn.com/w20/es.png'} 
                  alt={language === 'en' ? 'English' : 'Español'} 
                  className="w-5 h-4"
                />
                <span className="font-medium">{language === 'en' ? 'Switch to Español' : 'Switch to English'}</span>
              </button>

              {/* Mobile CTA */}
              <Button 
                onClick={() => window.open(t.pricing.purchaseUrl, '_blank')}
                className="w-full bg-black text-yellow-400 hover:bg-gray-800 hover:text-yellow-300 py-3 rounded-none font-bold text-lg border border-yellow-400"
              >
                {t.nav.getSystem}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;