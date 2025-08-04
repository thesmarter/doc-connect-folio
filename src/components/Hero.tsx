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

  // Get dynamic hero class based on theme
  const getHeroClass = () => {
    const baseClass = "min-h-screen flex items-center pt-24";
    const themeClass = `hero-${themeData.layout.heroStyle}`;
    return `${baseClass} ${themeClass}`;
  };

  // Get dynamic layout based on theme
  const getLayoutClass = () => {
    switch (themeData.layout.heroStyle) {
      case 'playful':
        return 'grid lg:grid-cols-2 gap-16 items-center';
      case 'elegant':
        return 'grid lg:grid-cols-5 gap-12 items-center';
      case 'modern':
        return 'flex flex-col lg:flex-row gap-12 items-center';
      default:
        return 'grid lg:grid-cols-2 gap-12 items-center';
    }
  };

  return (
    <section id="home" className={getHeroClass()}>
      <div className="container mx-auto px-4 py-12">
        <div className={getLayoutClass()}>
          {/* Content */}
          <div className={`space-y-8 ${themeData.layout.heroStyle === 'elegant' ? 'lg:col-span-3' : ''}`}>
            <div className="space-y-4">
              <h1 className={`font-bold gradient-text ${
                themeData.layout.heroStyle === 'playful' ? 'text-5xl md:text-7xl' :
                themeData.layout.heroStyle === 'elegant' ? 'text-3xl md:text-5xl' :
                themeData.layout.heroStyle === 'modern' ? 'text-4xl md:text-6xl' :
                'text-4xl md:text-6xl'
              }`}>
                {themeData.doctor.name[language]}
              </h1>
              <h2 className={`text-primary font-semibold ${
                themeData.layout.heroStyle === 'playful' ? 'text-2xl md:text-3xl' :
                'text-xl md:text-2xl'
              }`}>
                {themeData.doctor.title[language]}
              </h2>
              <p className={`text-muted-foreground leading-relaxed ${
                themeData.layout.heroStyle === 'elegant' ? 'text-base max-w-2xl' :
                themeData.layout.heroStyle === 'playful' ? 'text-xl max-w-xl' :
                'text-lg max-w-lg'
              }`}>
                {themeData.doctor.description[language]}
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleBookAppointment}
              className={`flex items-center gap-3 text-lg px-8 py-4 btn-${themeData.layout.buttonStyle} ${
                themeData.layout.heroStyle === 'playful' ? 'transform hover:scale-105' : ''
              }`}
            >
              <Calendar className={`w-5 h-5 icon-${themeData.visuals.iconStyle}`} />
              {t.hero.cta}
            </button>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-6 pt-8 ${
              themeData.layout.heroStyle === 'playful' ? 'gap-8' : 'gap-6'
            }`}>
              <div className={`text-center p-4 card-${themeData.layout.cardStyle} ${
                themeData.layout.heroStyle === 'playful' ? 'hover:transform hover:scale-105' : ''
              }`}>
                <div className={`medical-icon mx-auto mb-3 ${
                  themeData.layout.heroStyle === 'playful' ? 'controlled-bounce' : ''
                }`}>
                  <Award className={`w-6 h-6 icon-${themeData.visuals.iconStyle}`} />
                </div>
                <p className="font-bold text-primary text-lg">{themeData.doctor.experience[language].split(' ')[0]}</p>
                <p className="text-sm text-muted-foreground">{themeData.doctor.experience[language]}</p>
              </div>
              <div className={`text-center p-4 card-${themeData.layout.cardStyle} ${
                themeData.layout.heroStyle === 'playful' ? 'hover:transform hover:scale-105' : ''
              }`}>
                <div className={`medical-icon mx-auto mb-3 ${
                  themeData.layout.heroStyle === 'playful' ? 'controlled-bounce' : ''
                }`} style={{ animationDelay: '0.3s' }}>
                  <Users className={`w-6 h-6 icon-${themeData.visuals.iconStyle}`} />
                </div>
                <p className="font-bold text-primary text-lg">{themeData.doctor.patients[language].split(' ')[0]}</p>
                <p className="text-sm text-muted-foreground">{themeData.doctor.patients[language]}</p>
              </div>
              <div className={`text-center p-4 card-${themeData.layout.cardStyle} ${
                themeData.layout.heroStyle === 'playful' ? 'hover:transform hover:scale-105' : ''
              }`}>
                <div className={`medical-icon mx-auto mb-3 ${
                  themeData.layout.heroStyle === 'playful' ? 'controlled-bounce' : ''
                }`} style={{ animationDelay: '0.6s' }}>
                  <Award className={`w-6 h-6 icon-${themeData.visuals.iconStyle}`} />
                </div>
                <p className="font-bold text-primary text-lg">{themeData.doctor.certificates[language].split(' ')[0]}</p>
                <p className="text-sm text-muted-foreground">{themeData.doctor.certificates[language]}</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`relative ${themeData.layout.heroStyle === 'elegant' ? 'lg:col-span-2' : ''}`}>
            <div className={`hero-pulse overflow-hidden ${
              themeData.layout.cardStyle === 'rounded' ? 'rounded-3xl' :
              themeData.layout.cardStyle === 'soft' ? 'rounded-[2rem]' :
              themeData.layout.cardStyle === 'minimal' ? 'rounded-lg' :
              'rounded-none'
            } ${
              themeData.visuals.shadowStyle === 'prominent' ? 'shadow-2xl' :
              themeData.visuals.shadowStyle === 'soft' ? 'shadow-xl' :
              themeData.visuals.shadowStyle === 'subtle' ? 'shadow-lg' :
              'shadow-none'
            }`}>
              <img
                src={themeData.heroImage}
                alt={themeData.doctor.name[language]}
                className={`w-full object-cover ${
                  themeData.layout.heroStyle === 'playful' ? 'h-[500px] hover:scale-105 transition-transform duration-500' :
                  themeData.layout.heroStyle === 'elegant' ? 'h-[700px]' :
                  themeData.layout.heroStyle === 'modern' ? 'h-[550px]' :
                  'h-[600px]'
                }`}
              />
              {themeData.layout.heroStyle === 'playful' && (
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              )}
            </div>
            {/* Floating elements - only for certain styles */}
            {(themeData.layout.heroStyle === 'classic' || themeData.layout.heroStyle === 'playful') && (
              <>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-primary rounded-full hero-float opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-secondary rounded-full hero-float opacity-20" style={{ animationDelay: '2s' }}></div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};