import React from 'react';
import { useLanguage } from './LanguageContext';
import { Card, CardContent } from './ui/card';
import { Monitor, TrendingUp, Target, BarChart3 } from 'lucide-react';

const NotionShowcase = () => {
  const { language } = useLanguage();

  const notionFeatures = [
    {
      title: language === 'en' ? 'Complete Trading Dashboard' : 'Dashboard de Trading Completo',
      description: language === 'en' 
        ? 'Track multiple accounts, monitor your progress, and manage your trading business from one central hub.'
        : 'Rastrea múltiples cuentas, monitorea tu progreso y maneja tu negocio de trading desde un centro central.',
      image: 'https://customer-assets.emergentagent.com/job_unbreakable-os/artifacts/knfe5u85_image.png',
      features: [
        language === 'en' ? 'Multiple Trading Accounts' : 'Múltiples Cuentas de Trading',
        language === 'en' ? 'Personal Growth Tracking' : 'Seguimiento de Crecimiento Personal',
        language === 'en' ? 'Habits & Goals Management' : 'Gestión de Hábitos y Objetivos',
        language === 'en' ? 'Investment Ideas Bank' : 'Banco de Ideas de Inversión'
      ],
      icon: Monitor
    },
    {
      title: language === 'en' ? 'Advanced Operations Log' : 'Log de Operaciones Avanzado',
      description: language === 'en'
        ? 'Analyze every trade with detailed charts, capture screenshots, and track your performance across different instruments.'
        : 'Analiza cada operación con gráficos detallados, captura screenshots y rastrea tu rendimiento en diferentes instrumentos.',
      image: 'https://customer-assets.emergentagent.com/job_unbreakable-os/artifacts/oytt8zqr_image.png',
      features: [
        language === 'en' ? 'Before & After Trade Analysis' : 'Análisis Antes y Después del Trade',
        language === 'en' ? 'Chart Screenshots Integration' : 'Integración de Screenshots de Gráficos',
        language === 'en' ? 'Multi-Timeframe Analysis' : 'Análisis Multi-Timeframe',
        language === 'en' ? 'Performance Metrics Tracking' : 'Seguimiento de Métricas de Rendimiento'
      ],
      icon: BarChart3
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Target className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 mr-2 sm:mr-3" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight">
              {language === 'en' ? 'Inside The Notion OS' : 'Dentro del OS Notion'}
            </h2>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-medium">
            {language === 'en' 
              ? 'See exactly what you get - a complete trading business management system'
              : 'Ve exactamente lo que obtienes - un sistema completo de gestión de negocio de trading'
            }
          </p>
        </div>

        {/* Notion Features */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {notionFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            const isReversed = index % 2 === 1;
            
            return (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <div className={`space-y-6 lg:space-y-8 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Feature List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm sm:text-base lg:text-lg font-medium text-gray-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className={`${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Card className="shadow-2xl border-0 overflow-hidden transform hover:scale-105 transition-transform duration-500">
                    <CardContent className="p-0">
                      <img 
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto">
            <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-600 mx-auto mb-6 sm:mb-8" />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 sm:mb-6">
              {language === 'en' 
                ? 'Ready to Transform Your Trading?' 
                : '¿Listo para Transformar tu Trading?'
              }
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10">
              {language === 'en'
                ? 'Get instant access to the complete system and start building your trading business today.'
                : 'Obtén acceso instantáneo al sistema completo y comienza a construir tu negocio de trading hoy.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => window.open('https://noisy-duckling-f24.notion.site/Unbreakable-Trader-View-Only-2547730e2d4680c09e0ced9fda5332b1?source=copy_link', '_blank')}
                className="w-full sm:w-auto bg-gray-900 text-white hover:bg-gray-800 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-none font-bold text-base sm:text-lg lg:text-xl transition-all duration-300 transform hover:scale-105"
              >
                {language === 'en' ? 'Preview Full System' : 'Vista Previa del Sistema'}
              </button>
              <button 
                onClick={() => window.open('https://mpago.la/1X7QviH', '_blank')}
                className="w-full sm:w-auto bg-yellow-500 text-black hover:bg-yellow-400 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-none font-black text-base sm:text-lg lg:text-xl transition-all duration-300 transform hover:scale-105"
              >
                {language === 'en' ? 'Get System Now - $49' : 'Obtener Sistema - $49'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotionShowcase;