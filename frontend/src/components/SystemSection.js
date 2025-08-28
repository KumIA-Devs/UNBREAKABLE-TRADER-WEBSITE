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
    <section id="preview" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            {t.system.title}
          </h2>
          <p className="text-2xl text-red-600 font-bold mb-6">
            {t.system.subtitle}
          </p>
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            {t.system.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const AccentIcon = feature.accentIcon;
            return (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden">
                <CardContent className="p-10 relative">
                  {/* Background Accent */}
                  <div className="absolute top-0 right-0 opacity-10">
                    <AccentIcon className="w-32 h-32 text-gray-400" />
                  </div>
                  
                  {/* Main Icon */}
                  <div className={`w-20 h-20 rounded-2xl ${feature.color} flex items-center justify-center mb-8 relative z-10 shadow-lg`}>
                    <IconComponent className="w-10 h-10" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      {feature.description}
                    </p>
                    
                    {/* Emotional Hook */}
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-black">
                      <p className="text-black font-bold text-lg italic">
                        "{feature.emotion}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Value Proposition - Updated with Gold Theme */}
        <div className="text-center bg-gradient-to-br from-yellow-600 via-yellow-500 to-amber-600 text-white rounded-3xl p-16 relative overflow-hidden shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20L0 0h40v40L20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              📦 {t.system.value.title}
            </h3>
            <p className="text-2xl mb-10 max-w-4xl mx-auto leading-relaxed">
              {t.system.value.subtitle}
            </p>
            
            {/* Delivery Promise */}
            <div className="bg-white/10 rounded-2xl p-8 mb-12 max-w-3xl mx-auto backdrop-blur-sm">
              <p className="text-xl text-white/90 font-medium">
                ⚡ {t.system.value.delivery}
              </p>
            </div>
            
            <div className="inline-flex items-center justify-center">
              <button 
                onClick={() => window.open('https://mpago.la/1X7QviH', '_blank')}
                className="bg-black text-yellow-400 hover:bg-gray-900 px-16 py-6 rounded-none font-black text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-yellow-400"
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