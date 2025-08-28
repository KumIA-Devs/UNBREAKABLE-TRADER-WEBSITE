import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from '../data/translations';
import { Card, CardContent } from './ui/card';
import { Quote, TrendingUp } from 'lucide-react';

const SuccessStories = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="success-stories" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mr-2 sm:mr-3" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              {t.success.title}
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600">
            {t.success.subtitle}
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {t.success.stories.map((story, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white h-full">
              <CardContent className="p-6 sm:p-8 relative h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300" />
                </div>
                
                {/* Story Content */}
                <div className="space-y-4 flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {story.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base">
                    "{story.story}"
                  </p>
                </div>

                {/* Success Indicator */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-green-600 font-semibold">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      {language === 'en' ? 'Funded Account Achieved' : 'Cuenta Fondeada Lograda'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              {language === 'en' 
                ? 'Ready to Join Them?' 
                : '¿Listo para Unirte a Ellos?'
              }
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              {language === 'en'
                ? 'Transform your trading with the same system that helped Ashley, Jesus, Valentina, Gabriela, and Karla achieve their funded accounts.'
                : 'Transforma tu trading con el mismo sistema que ayudó a Ashley, Jesus, Valentina, Gabriela y Karla a lograr sus cuentas fondeadas.'
              }
            </p>
            <button 
              onClick={() => window.open('https://mpago.la/1X7QviH', '_blank')}
              className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 px-8 sm:px-12 py-3 sm:py-4 rounded-none font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105"
            >
              {language === 'en' ? 'Get Your System Now - $49' : 'Obtén tu Sistema Ahora - $49'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;