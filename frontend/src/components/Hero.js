import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from '../data/translations';
import { Button } from './ui/button';
import { ArrowRight, Play, Download } from 'lucide-react';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-green-200 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Content (takes more space) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Tagline */}
            <div className="inline-block">
              <span className="px-6 py-3 bg-black text-white text-sm font-bold tracking-wider uppercase rounded-none">
                {t.hero.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
              {t.hero.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
              {t.hero.subheadline}
            </p>

            {/* Supporting Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button 
                onClick={() => window.open('https://mpago.la/1X7QviH', '_blank')}
                className="bg-black text-white hover:bg-gray-800 px-10 py-6 rounded-none font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-2xl"
                size="lg"
              >
                {t.hero.cta}
                <ArrowRight className="w-6 h-6" />
              </Button>
              
              <Button 
                onClick={() => window.open('https://noisy-duckling-f24.notion.site/Unbreakable-Trader-View-Only-2547730e2d4680c09e0ced9fda5332b1?source=copy_link', '_blank')}
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-10 py-6 rounded-none font-bold text-xl transition-all duration-300 flex items-center justify-center gap-3"
                size="lg"
              >
                <Play className="w-6 h-6" />
                {t.hero.preview}
              </Button>
            </div>

            {/* Delivery Promise */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-8">
              <div className="flex items-center">
                <Download className="w-6 h-6 text-green-600 mr-3" />
                <p className="text-green-800 font-medium text-lg">
                  {t.hero.delivery}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Compact Visual (smaller space) */}
          <div className="lg:col-span-4">
            <div className="relative max-w-md mx-auto">
              <div className="relative z-10 bg-white rounded-xl shadow-2xl p-6 transform hover:rotate-1 transition-transform duration-500">
                <img 
                  src="https://customer-assets.emergentagent.com/job_e01b069d-7b15-44a6-acea-748ef12f5a6e/artifacts/t7eoegke_Cover%20LogBook%20of%20the%20Unbreakable%20Trader.jpg" 
                  alt="Unbreakable Trader LogBook" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600 font-medium">
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