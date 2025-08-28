import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from '../data/translations';
import { Card, CardContent } from './ui/card';
import { Monitor, BookMarked, Bot, FileCheck, Zap, Target, Shield, TrendingUp } from 'lucide-react';

const SystemSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: Monitor,
      title: t.system.features.notion.title,
      description: t.system.features.notion.description,
      emotion: t.system.features.notion.emotion,
      color: 'bg-blue-50 text-blue-600',
      accentIcon: Target
    },
    {
      icon: BookMarked,
      title: t.system.features.logbook.title,
      description: t.system.features.logbook.description,
      emotion: t.system.features.logbook.emotion,
      color: 'bg-green-50 text-green-600',
      accentIcon: Zap
    },
    {
      icon: Bot,
      title: t.system.features.coach.title,
      description: t.system.features.coach.description,
      emotion: t.system.features.coach.emotion,
      color: 'bg-purple-50 text-purple-600',
      accentIcon: Shield
    },
    {
      icon: FileCheck,
      title: t.system.features.guide.title,
      description: t.system.features.guide.description,
      emotion: t.system.features.guide.emotion,
      color: 'bg-orange-50 text-orange-600',
      accentIcon: TrendingUp
    }
  ];

  return (
    <section id="preview" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
            {t.system.title}
          </h2>
          <p className="text-xl sm:text-2xl text-red-600 font-bold mb-4 sm:mb-6">
            {t.system.subtitle}
          </p>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
            {t.system.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const AccentIcon = feature.accentIcon;
            return (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden">
                <CardContent className="p-6 sm:p-8 lg:p-10 relative">
                  {/* Background Accent */}
                  <div className="absolute top-0 right-0 opacity-10">
                    <AccentIcon className="w-24 h-24 sm:w-32 sm:h-32 text-gray-400" />
                  </div>
                  
                  {/* Main Icon */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${feature.color} flex items-center justify-center mb-6 sm:mb-8 relative z-10 shadow-lg`}>
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                      {feature.description}
                    </p>
                    
                    {/* Emotional Hook */}
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border-l-4 border-black">
                      <p className="text-black font-bold text-base sm:text-lg italic">
                        "{feature.emotion}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Value Proposition - Black Theme */}
        <div className="text-center bg-black text-white rounded-2xl lg:rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20L0 0h40v40L20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 leading-tight">
              📦 {t.system.value.title}
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed">
              {t.system.value.subtitle}
            </p>

            {/* System Summary List */}
            <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <p className="text-base sm:text-lg font-medium">
                    {language === 'en' 
                      ? 'A Notion OS to plan, log, and measure your trades.'
                      : 'Un OS Notion para planificar, registrar y medir tus operaciones.'
                    }
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <p className="text-base sm:text-lg font-medium">
                    {language === 'en'
                      ? 'A 30-Day LogBook that forces daily discipline.'
                      : 'Un LogBook de 30 días que fuerza disciplina diaria.'
                    }
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <p className="text-base sm:text-lg font-medium">
                    {language === 'en'
                      ? 'An AI Coach that keeps you accountable 24/7.'
                      : 'Un Coach de IA que te mantiene responsable 24/7.'
                    }
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <p className="text-base sm:text-lg font-medium">
                    {language === 'en'
                      ? 'A User Guide so you don\'t waste time guessing.'
                      : 'Una Guía de Usuario para que no pierdas tiempo adivinando.'
                    }
                  </p>
                </div>
              </div>
            </div>
            
            {/* Delivery Promise */}
            <div className="bg-gray-800 rounded-xl lg:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl text-yellow-400 font-medium">
                ⚡ {t.system.value.delivery}
              </p>
            </div>
            
            <div className="inline-flex items-center justify-center">
              <button 
                onClick={() => window.open('https://mpago.la/1X7QviH', '_blank')}
                className="w-full sm:w-auto bg-yellow-400 text-black hover:bg-yellow-300 px-8 sm:px-12 lg:px-16 py-4 sm:py-6 rounded-none font-black text-lg sm:text-xl lg:text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                {language === 'en' ? 'Get The Complete System - $49' : 'Obtener el Sistema Completo - $49'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSection;