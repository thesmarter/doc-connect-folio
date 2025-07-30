import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';

export const Experience = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-header">{t.experience.title}</h2>
          <p className="section-subheader">{t.experience.subtitle}</p>
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
            
            <div className="space-y-6">
              {t.experience.work.map((item, index) => (
                <div key={index} className="medical-card border-r-4 border-primary">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-primary text-sm font-medium mb-2">{item.period}</p>
                      <p className="text-muted-foreground">{item.description}</p>
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
            
            <div className="space-y-6">
              {t.experience.education.map((item, index) => (
                <div key={index} className="medical-card border-r-4 border-secondary">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-secondary text-sm font-medium mb-2">{item.period}</p>
                      <p className="text-muted-foreground">{item.description}</p>
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