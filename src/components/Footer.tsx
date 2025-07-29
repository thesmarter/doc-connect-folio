import { Heart, Stethoscope } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';

export const Footer = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-xl">د. أحمد محمد علي</h3>
                <p className="text-sm opacity-70">استشاري الطب الباطني</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              {language === 'ar' 
                ? 'نقدم خدمات طبية متميزة بأعلى المعايير المهنية'
                : 'Providing exceptional medical services with highest professional standards'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <div className="space-y-2">
              <a href="#home" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">
                {language === 'ar' ? 'الرئيسية' : 'Home'}
              </a>
              <a href="#experience" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">
                {language === 'ar' ? 'الخبرات' : 'Experience'}
              </a>
              <a href="#services" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">
                {language === 'ar' ? 'الخدمات' : 'Services'}
              </a>
              <a href="#contact" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">
                {language === 'ar' ? 'اتصل بنا' : 'Contact'}
              </a>
            </div>
          </div>

          {/* Contact Summary */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h4>
            <div className="space-y-2 text-sm opacity-70">
              <p>+966 50 123 4567</p>
              <p>dr.ahmed@clinic.sa</p>
              <p>
                {language === 'ar' 
                  ? 'الرياض، المملكة العربية السعودية'
                  : 'Riyadh, Saudi Arabia'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-70">{t.footer.rights}</p>
            
            <div className="flex items-center gap-6">
              <button className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                {t.footer.privacy}
              </button>
              <button className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                {t.footer.terms}
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-6 text-sm opacity-70">
            <span>{language === 'ar' ? 'صُنع بـ' : 'Made with'}</span>
            <Heart className="w-4 h-4 fill-red-500 text-red-500" />
            <span>{language === 'ar' ? 'للصحة والعافية' : 'for Health & Wellness'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};