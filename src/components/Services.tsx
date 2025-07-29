import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import consultationImg from '@/assets/consultation.jpg';

export const Services = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-header">{t.services.title}</h2>
          <p className="section-subheader">{t.services.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="medical-grid mb-16">
          {t.services.list.map((service, index) => (
            <div key={index} className="medical-card-hover group">
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Image */}
        <div className="mt-16">
          <div className="medical-card p-0 overflow-hidden">
            <img 
              src={consultationImg} 
              alt="Medical Consultation"
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