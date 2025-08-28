import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from '../data/translations';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission for frontend demo
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-green-50 rounded-2xl p-12">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Message Sent!' : '¡Mensaje Enviado!'}
            </h3>
            <p className="text-xl text-gray-600">
              {language === 'en' 
                ? 'Thank you for your message. We\'ll get back to you within 24 hours.'
                : 'Gracias por tu mensaje. Te responderemos dentro de 24 horas.'
              }
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Mail className="w-8 h-8 text-black mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {t.contact.title}
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            {t.contact.subtitle}
          </p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardContent className="p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    {t.contact.form.name}
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-200 focus:border-black rounded-none p-4 text-lg"
                    placeholder={t.contact.form.name}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    {t.contact.form.email}
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-200 focus:border-black rounded-none p-4 text-lg"
                    placeholder={t.contact.form.email}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  {t.contact.form.message}
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="border-2 border-gray-200 focus:border-black rounded-none p-4 text-lg resize-none"
                  placeholder={t.contact.form.message}
                />
              </div>

              <div className="text-center">
                <Button 
                  type="submit"
                  className="bg-black text-white hover:bg-gray-800 px-12 py-4 rounded-none font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto"
                >
                  <Send className="w-5 h-5" />
                  {t.contact.form.submit}
                </Button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-12 pt-12 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">
                {language === 'en' 
                  ? 'Or contact us directly:' 
                  : 'O contáctanos directamente:'
                }
              </p>
              <a 
                href="mailto:nataly@unbreakabletrader.net"
                className="text-xl font-semibold text-black hover:text-gray-700 transition-colors"
              >
                nataly@unbreakabletrader.net
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;