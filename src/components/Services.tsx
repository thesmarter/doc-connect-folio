import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { content } from '@/data/content';

export const Services = () => {
  const { language } = useLanguage();
  const { themeData } = useTheme();
  const t = content[language];

  // Get section background based on theme
  const getSectionBackground = () => {
    return themeData.backgroundImages.services;
  };

  return (
    <section
      id="services"
      className="py-20 relative"
      style={{ background: getSectionBackground() }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`section-header ${
            themeData.layout.heroStyle === 'playful' ? 'text-4xl md:text-5xl' :
            'text-3xl md:text-4xl'
          }`}>{t.services.title}</h2>
          <p className={`section-subheader ${
            themeData.layout.heroStyle === 'playful' ? 'text-xl' : 'text-lg'
          }`}>{t.services.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className={`medical-grid mb-16 ${
          themeData.layout.spacing === 'relaxed' ? 'gap-8' :
          themeData.layout.spacing === 'compact' ? 'gap-4' :
          'gap-6'
        }`}>
          {themeData.services.map((service, index) => (
            <div
              key={index}
              className={`group card-${themeData.layout.cardStyle} p-6 ${
                themeData.layout.heroStyle === 'playful' ? 'hover:transform hover:scale-105 hover:rotate-1' :
                themeData.layout.heroStyle === 'elegant' ? 'hover:shadow-2xl' :
                'medical-card-hover'
              }`}
            >
              <div className="text-center">
                <div className={`text-4xl mb-4 transition-transform duration-300 ${
                  themeData.layout.heroStyle === 'playful' ? 'group-hover:scale-125 group-hover:rotate-12' :
                  'group-hover:scale-110'
                } ${
                  themeData.layout.heroStyle === 'playful' ? 'animate-bounce' : ''
                }`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {service.icon}
                </div>
                <h3 className={`font-semibold text-foreground mb-3 group-hover:text-primary transition-colors ${
                  themeData.layout.heroStyle === 'playful' ? 'text-2xl' :
                  themeData.layout.heroStyle === 'elegant' ? 'text-xl' :
                  'text-xl'
                }`}>
                  {service.title[language]}
                </h3>
                <p className={`text-muted-foreground leading-relaxed ${
                  themeData.layout.heroStyle === 'elegant' ? 'text-sm' :
                  'text-base'
                }`}>
                  {service.description[language]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Image */}
        <div className="mt-16">
          <div className="medical-card p-0 overflow-hidden">
            <img
              src={themeData.consultationImage}
              alt={`${themeData.doctor.name[language]} - ${t.services.title}`}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="p-8 text-center bg-gradient-to-r from-primary/5 to-secondary/5">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                {language === 'ar' ? 'رعاية طبية متميزة' : 'Excellence in Medical Care'}
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === 'ar' 
                  ? 'نحن ملتزمون بتقديم أعلى مستويات الرعاية الطبية باستخدام أحدث التقنيات والأساليب العلمية المتقدمة'
                  : 'We are committed to providing the highest standards of medical care using the latest technologies and advanced scientific methods'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};