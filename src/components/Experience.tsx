import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { content } from '@/data/content';

export const Experience = () => {
  const { language } = useLanguage();
  const { themeData } = useTheme();
  const t = content[language];

  return (
    <section
      id="experience"
      className="py-20 relative"
      style={{ background: themeData.backgroundImages.about }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`section-header ${
            themeData.layout.heroStyle === 'playful' ? 'text-4xl md:text-5xl' :
            'text-3xl md:text-4xl'
          }`}>{t.experience.title}</h2>
          <p className={`section-subheader ${
            themeData.layout.heroStyle === 'playful' ? 'text-xl' : 'text-lg'
          }`}>{t.experience.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="medical-icon">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {language === 'ar' ? 'الخبرة العملية' : 'Work Experience'}
              </h3>
            </div>
            
            <div className={`space-y-6 ${
              themeData.layout.spacing === 'relaxed' ? 'space-y-8' :
              themeData.layout.spacing === 'compact' ? 'space-y-4' :
              'space-y-6'
            }`}>
              {themeData.workExperience.map((item, index) => (
                <div
                  key={index}
                  className={`card-${themeData.layout.cardStyle} p-6 border-r-4 border-primary ${
                    themeData.layout.heroStyle === 'playful' ? 'hover:transform hover:scale-105' :
                    themeData.layout.heroStyle === 'elegant' ? 'hover:shadow-xl' :
                    ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <Calendar className={`w-5 h-5 text-primary mt-1 flex-shrink-0 icon-${themeData.visuals.iconStyle}`} />
                    <div className="flex-1">
                      <h4 className={`font-semibold text-foreground mb-1 ${
                        themeData.layout.heroStyle === 'playful' ? 'text-lg' : 'text-base'
                      }`}>{item.title[language]}</h4>
                      <p className="text-primary text-sm font-medium mb-2">{item.period[language]}</p>
                      <p className={`text-muted-foreground ${
                        themeData.layout.heroStyle === 'elegant' ? 'text-sm' : 'text-base'
                      }`}>{item.description[language]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="medical-icon bg-gradient-to-br from-secondary-light to-secondary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {language === 'ar' ? 'المؤهلات العلمية' : 'Education'}
              </h3>
            </div>
            
            <div className={`space-y-6 ${
              themeData.layout.spacing === 'relaxed' ? 'space-y-8' :
              themeData.layout.spacing === 'compact' ? 'space-y-4' :
              'space-y-6'
            }`}>
              {themeData.education.map((item, index) => (
                <div
                  key={index}
                  className={`card-${themeData.layout.cardStyle} p-6 border-r-4 border-secondary ${
                    themeData.layout.heroStyle === 'playful' ? 'hover:transform hover:scale-105' :
                    themeData.layout.heroStyle === 'elegant' ? 'hover:shadow-xl' :
                    ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <Calendar className={`w-5 h-5 text-secondary mt-1 flex-shrink-0 icon-${themeData.visuals.iconStyle}`} />
                    <div className="flex-1">
                      <h4 className={`font-semibold text-foreground mb-1 ${
                        themeData.layout.heroStyle === 'playful' ? 'text-lg' : 'text-base'
                      }`}>{item.title[language]}</h4>
                      <p className="text-secondary text-sm font-medium mb-2">{item.period[language]}</p>
                      <p className={`text-muted-foreground ${
                        themeData.layout.heroStyle === 'elegant' ? 'text-sm' : 'text-base'
                      }`}>{item.description[language]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};