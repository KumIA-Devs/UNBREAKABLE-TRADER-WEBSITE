import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from '../data/translations';
import { Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo Section */}
          <div className="space-y-6">
            <div className="text-2xl font-black text-white">
              <span className="text-yellow-400">UNBREAKABLE</span>
              <br />
              <span className="text-white">TRADER</span>
              <div className="text-xs font-medium text-gray-400 mt-2 tracking-wider">
                CLARITY. CONTROL. CONFIDENCE.
              </div>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              {language === 'en' 
                ? 'Building systems that transform traders from gamblers to professionals.'
                : 'Construyendo sistemas que transforman traders de apostadores a profesionales.'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">
              {language === 'en' ? 'Quick Access' : 'Acceso Rápido'}
            </h3>
            <div className="space-y-4">
              <a 
                href="https://noisy-duckling-f24.notion.site/Unbreakable-Trader-View-Only-2547730e2d4680c09e0ced9fda5332b1?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors text-lg"
              >
                {language === 'en' ? 'System Preview' : 'Vista Previa del Sistema'}
              </a>
              <a 
                href="https://mpago.la/1X7QviH"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors text-lg"
              >
                {language === 'en' ? 'Get System ($49)' : 'Obtener Sistema ($49)'}
              </a>
              <a 
                href="mailto:nataly@unbreakabletrader.net"
                className="flex items-center text-gray-400 hover:text-white transition-colors text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                nataly@unbreakabletrader.net
              </a>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">
              {language === 'en' ? 'Connect & Legal' : 'Conectar y Legal'}
            </h3>
            <div className="space-y-4">
              <a 
                href="https://www.youtube.com/@TraderInquebrantable"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors text-lg"
              >
                <Youtube className="w-6 h-6 mr-3" />
                {t.footer.links.youtube}
              </a>
              <a 
                href="https://drive.google.com/file/d/1tQEn1krbngxvj-qX06-DZLlLxhKErsBn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors text-lg"
              >
                {t.footer.links.privacy}
              </a>
              <a 
                href="https://drive.google.com/file/d/1Iv6nVzNS08zufVsbp7Cnmvy7J6BoS_RO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors text-lg"
              >
                {t.footer.links.terms}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-lg">
              {t.footer.copyright}
            </p>
            <div className="mt-4 md:mt-0">
              <span className="text-gray-400 text-lg">
                {language === 'en' ? 'Made with' : 'Hecho con'} ❤️ {language === 'en' ? 'for traders worldwide' : 'para traders en todo el mundo'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;