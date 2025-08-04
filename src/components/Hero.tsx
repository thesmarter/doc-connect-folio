import { Calendar, Users, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { content } from '@/data/content';

export const Hero = () => {
  const { language } = useLanguage();
  const { themeData } = useTheme();
  const t = content[language];

  const handleBookAppointment = () => {
    const phone = '+966501234567';
    const message = language === 'ar' 
      ? 'مرحباً، أود حجز موعد للكشف الطبي'
      : 'Hello, I would like to book a medical appointment';
    
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 bg-gradient-to-br from-background to-primary-light/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                {themeData.doctor.name[language]}
              </h1>
              <h2 className="text-xl md:text-2xl text-primary font-semibold">
                {themeData.doctor.title[language]}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                {themeData.doctor.description[language]}
              </p>
            </div>

            {/* CTA Button */}
            <button 
              onClick={handleBookAppointment}
              className="btn-medical text-lg px-8 py-4"
            >
              <Calendar className="w-5 h-5" />
              {t.hero.cta}
            </button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="medical-icon mx-auto mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <p className="font-bold text-primary text-lg">{themeData.doctor.experience[language].split(' ')[0]}</p>
                <p className="text-sm text-muted-foreground">{themeData.doctor.experience[language]}</p>
              </div>
              <div className="text-center">
                <div className="medical-icon mx-auto mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <p className="font-bold text-primary text-lg">{themeData.doctor.patients[language].split(' ')[0]}</p>
                <p className="text-sm text-muted-foreground">{themeData.doctor.patients[language]}</p>
              </div>
              <div className="text-center">
                <div className="medical-icon mx-auto mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <p className="font-bold text-primary text-lg">{themeData.doctor.certificates[language].split(' ')[0]}</p>
                <p className="text-sm text-muted-foreground">{themeData.doctor.certificates[language]}</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="hero-pulse rounded-3xl overflow-hidden">
              <img
                src={themeData.heroImage}
                alt={themeData.doctor.name[language]}
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-primary rounded-full hero-float opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-secondary rounded-full hero-float opacity-20" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};