import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from '../data/translations';
import { Button } from './ui/button';
import { ArrowRight, Play, Download } from 'lucide-react';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="pt-16 sm:pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-64 h-32 sm:h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 sm:w-80 h-40 sm:h-80 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-20 sm:w-40 h-20 sm:h-40 bg-green-200 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Tagline */}
            <div className="inline-block">
              <span className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-none">
                {t.hero.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight">
              {t.hero.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium max-w-4xl mx-auto lg:mx-0">
              {t.hero.subheadline}
            </p>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 sm:pt-8 justify-center lg:justify-start">
              <Button 
                onClick={() => window.open('https://mpago.la/1X7QviH', '_blank')}
                className="w-full sm:w-auto bg-black text-yellow-400 hover:bg-gray-800 hover:text-yellow-300 px-6 sm:px-8 lg:px-10 py-4 sm:py-6 rounded-none font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-2xl border border-yellow-400"
                size="lg"
              >
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
              
              <Button 
                onClick={() => window.open('https://noisy-duckling-f24.notion.site/Unbreakable-Trader-View-Only-2547730e2d4680c09e0ced9fda5332b1?source=copy_link', '_blank')}
                variant="outline"
                className="w-full sm:w-auto border-2 border-black text-black hover:bg-black hover:text-yellow-400 px-6 sm:px-8 lg:px-10 py-4 sm:py-6 rounded-none font-bold text-lg sm:text-xl transition-all duration-300 flex items-center justify-center gap-3"
                size="lg"
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                {t.hero.preview}
              </Button>
            </div>

            {/* Delivery Promise */}
            <div className="bg-green-50 border-l-4 border-green-500 p-4 sm:p-6 mt-6 sm:mt-8 max-w-4xl mx-auto lg:mx-0">
              <div className="flex items-center">
                <Download className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-3 flex-shrink-0" />
                <p className="text-green-800 font-medium text-sm sm:text-base lg:text-lg">
                  {t.hero.delivery}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="relative max-w-sm sm:max-w-md mx-auto">
              <div className="relative z-10 bg-white rounded-xl shadow-2xl p-4 sm:p-6 transform hover:rotate-1 transition-transform duration-500">
                <img 
                  src="https://customer-assets.emergentagent.com/job_e01b069d-7b15-44a6-acea-748ef12f5a6e/artifacts/t7eoegke_Cover%20LogBook%20of%20the%20Unbreakable%20Trader.jpg" 
                  alt="Unbreakable Trader LogBook" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="text-center mt-3 sm:mt-4">
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">
                    {language === 'en' ? 'Part of the Complete System' : 'Parte del Sistema Completo'}
                  </p>
                </div>
              </div>
              
              {/* Background accent */}
              <div className="absolute inset-0 -z-10 transform rotate-3">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;