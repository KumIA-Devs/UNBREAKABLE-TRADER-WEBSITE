import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from '../data/translations';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Tagline */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-black text-white text-sm font-medium tracking-wider uppercase rounded-none">
                {t.hero.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t.hero.headline.split('.')[0]}.
              <span className="block text-gray-700 text-3xl md:text-4xl lg:text-5xl mt-4">
                {t.hero.headline.split('.').slice(1).join('.').trim()}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              {t.hero.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={() => window.open('https://mpago.la/1X7QviH', '_blank')}
                className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-none font-medium text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                size="lg"
              >
                {t.hero.cta}
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button 
                onClick={() => window.open('https://noisy-duckling-f24.notion.site/Unbreakable-Trader-View-Only-2547730e2d4680c09e0ced9fda5332b1?source=copy_link', '_blank')}
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-none font-medium text-lg transition-all duration-300 flex items-center justify-center gap-3"
                size="lg"
              >
                <Play className="w-5 h-5" />
                {t.hero.preview}
              </Button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://customer-assets.emergentagent.com/job_e01b069d-7b15-44a6-acea-748ef12f5a6e/artifacts/t7eoegke_Cover%20LogBook%20of%20the%20Unbreakable%20Trader.jpg" 
                alt="Unbreakable Trader LogBook" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-100 rounded-full opacity-50"></div>
              <div className="absolute top-1/2 left-0 w-16 h-16 bg-yellow-100 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;