import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from '../data/translations';
import { Card, CardContent } from './ui/card';
import { Brain, BookOpen, Bot, FileText } from 'lucide-react';

const SystemSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: Brain,
      title: t.system.features.notion.title,
      description: t.system.features.notion.description,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: BookOpen,
      title: t.system.features.logbook.title,
      description: t.system.features.logbook.description,
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Bot,
      title: t.system.features.coach.title,
      description: t.system.features.coach.description,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: FileText,
      title: t.system.features.guide.title,
      description: t.system.features.guide.description,
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  return (
    <section id="preview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.system.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t.system.subtitle}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t.system.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Value Proposition */}
        <div className="text-center bg-gray-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            📦 {language === 'en' ? 'Inside the $49 Pack' : 'Dentro del Paquete de $49'}
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Stop gambling. Stop pretending. Build the system that makes you a real trader.'
              : 'Deja de apostar. Deja de fingir. Construye el sistema que te convierte en un trader real.'
            }
          </p>
          
          <div className="inline-flex items-center justify-center">
            <button 
              onClick={() => window.open('https://mpago.la/1X7QviH', '_blank')}
              className="bg-black text-white hover:bg-gray-800 px-12 py-4 rounded-none font-bold text-xl transition-all duration-300 transform hover:scale-105"
            >
              {language === 'en' ? 'Get The Complete System - $49' : 'Obtener el Sistema Completo - $49'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSection;