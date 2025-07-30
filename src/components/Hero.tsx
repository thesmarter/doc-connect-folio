import { Calendar, Users, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import doctorHero from '@/assets/doctor-hero.jpg';

export const Hero = () => {
  const { language } = useLanguage();
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
                {t.hero.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-primary font-semibold">
                {t.hero.subtitle}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                {t.hero.description}
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
                <p className="font-bold text-primary text-lg">15+</p>
                <p className="text-sm text-muted-foreground">{language === 'ar' ? 'سنة خبرة' : 'Years Experience'}</p>
              </div>
              <div className="text-center">
                <div className="medical-icon mx-auto mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <p className="font-bold text-primary text-lg">5000+</p>
                <p className="text-sm text-muted-foreground">{language === 'ar' ? 'مريض' : 'Patients'}</p>
              </div>
              <div className="text-center">
                <div className="medical-icon mx-auto mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <p className="font-bold text-primary text-lg">25+</p>
                <p className="text-sm text-muted-foreground">{language === 'ar' ? 'شهادة' : 'Certificates'}</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="hero-pulse rounded-3xl overflow-hidden">
              <img 
                src={doctorHero} 
                alt="Dr. Ahmed Mohammed Ali"
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