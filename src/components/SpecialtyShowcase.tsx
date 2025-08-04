import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

// Specialty-specific showcase components
const InternalCardiologyShowcase = () => {
  const { language } = useLanguage();
  
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-2xl">🫀</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">
              {language === 'ar' ? 'تشخيص متقدم' : 'Advanced Diagnostics'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'ar' ? 'أحدث تقنيات التشخيص' : 'Latest diagnostic technologies'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
            <span className="text-2xl">📊</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-secondary">
              {language === 'ar' ? 'متابعة شاملة' : 'Comprehensive Follow-up'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'ar' ? 'برامج متابعة مخصصة' : 'Personalized follow-up programs'}
            </p>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">🩺</div>
          <h4 className="text-lg font-semibold mb-2">
            {language === 'ar' ? 'خبرة طبية متميزة' : 'Distinguished Medical Expertise'}
          </h4>
          <p className="text-muted-foreground">
            {language === 'ar' ? 'أكثر من 15 عاماً في خدمة المرضى' : 'Over 15 years serving patients'}
          </p>
        </div>
      </div>
    </div>
  );
};

const GynecologyShowcase = () => {
  const { language } = useLanguage();
  
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="card-soft p-6 text-center bg-gradient-to-br from-primary/10 to-transparent">
        <div className="text-4xl mb-4">🤱</div>
        <h3 className="text-lg font-semibold text-primary mb-2">
          {language === 'ar' ? 'رعاية الأمومة' : 'Maternity Care'}
        </h3>
        <p className="text-sm text-muted-foreground">
          {language === 'ar' ? 'متابعة شاملة للحمل والولادة' : 'Comprehensive pregnancy and delivery care'}
        </p>
      </div>
      
      <div className="card-soft p-6 text-center bg-gradient-to-br from-secondary/10 to-transparent">
        <div className="text-4xl mb-4">💕</div>
        <h3 className="text-lg font-semibold text-secondary mb-2">
          {language === 'ar' ? 'الصحة الإنجابية' : 'Reproductive Health'}
        </h3>
        <p className="text-sm text-muted-foreground">
          {language === 'ar' ? 'استشارات متخصصة في الصحة الإنجابية' : 'Specialized reproductive health consultations'}
        </p>
      </div>
      
      <div className="card-soft p-6 text-center bg-gradient-to-br from-accent/10 to-transparent">
        <div className="text-4xl mb-4">⚕️</div>
        <h3 className="text-lg font-semibold text-accent mb-2">
          {language === 'ar' ? 'جراحات متقدمة' : 'Advanced Surgery'}
        </h3>
        <p className="text-sm text-muted-foreground">
          {language === 'ar' ? 'جراحات نسائية بأحدث التقنيات' : 'Gynecological surgery with latest techniques'}
        </p>
      </div>
    </div>
  );
};

const PediatricsShowcase = () => {
  const { language } = useLanguage();
  
  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl p-8 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl controlled-bounce">👶</span>
              <h3 className="text-2xl font-bold text-primary">
                {language === 'ar' ? 'عالم الأطفال السعيد' : 'Happy Children\'s World'}
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">💉</span>
                <span className="font-medium">
                  {language === 'ar' ? 'برنامج تطعيمات شامل' : 'Comprehensive vaccination program'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📏</span>
                <span className="font-medium">
                  {language === 'ar' ? 'متابعة النمو والتطور' : 'Growth and development monitoring'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🍼</span>
                <span className="font-medium">
                  {language === 'ar' ? 'استشارات التغذية' : 'Nutrition consultations'}
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-8xl mb-4">🌈</div>
            <p className="text-lg font-semibold text-secondary">
              {language === 'ar' ? 'بيئة مريحة وودودة للأطفال' : 'Comfortable and friendly environment for children'}
            </p>
          </div>
        </div>

        {/* Floating elements - reduced and controlled */}
        <div className="absolute top-4 right-4 text-2xl controlled-bounce" style={{ animationDelay: '1s' }}>⭐</div>
        <div className="absolute bottom-4 left-4 text-2xl controlled-bounce" style={{ animationDelay: '2s' }}>🎈</div>
        <div className="absolute top-1/2 right-8 text-xl controlled-bounce" style={{ animationDelay: '3s' }}>🦋</div>
      </div>
    </div>
  );
};

const DentistryShowcase = () => {
  const { language } = useLanguage();
  
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="card-minimal p-8 bg-gradient-to-br from-background to-primary/5">
        <div className="text-center mb-6">
          <div className="text-5xl mb-4">🦷</div>
          <h3 className="text-xl font-bold text-primary mb-2">
            {language === 'ar' ? 'ابتسامة مثالية' : 'Perfect Smile'}
          </h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
            <span className="text-lg">✨</span>
            <span className="text-sm font-medium">
              {language === 'ar' ? 'تبييض الأسنان المتقدم' : 'Advanced teeth whitening'}
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg">
            <span className="text-lg">🔧</span>
            <span className="text-sm font-medium">
              {language === 'ar' ? 'علاج الجذور بدون ألم' : 'Painless root canal treatment'}
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
            <span className="text-lg">🔩</span>
            <span className="text-sm font-medium">
              {language === 'ar' ? 'زراعة الأسنان المتطورة' : 'Advanced dental implants'}
            </span>
          </div>
        </div>
      </div>
      
      <div className="card-minimal p-8 bg-gradient-to-br from-secondary/5 to-background">
        <div className="text-center">
          <div className="text-4xl mb-4">🏥</div>
          <h3 className="text-lg font-semibold text-secondary mb-4">
            {language === 'ar' ? 'عيادة حديثة ومتطورة' : 'Modern and Advanced Clinic'}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {language === 'ar' 
              ? 'نستخدم أحدث التقنيات والمعدات الطبية لضمان أفضل النتائج وراحة المريض'
              : 'We use the latest technologies and medical equipment to ensure the best results and patient comfort'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export const SpecialtyShowcase = () => {
  const { themeData } = useTheme();
  
  const renderShowcase = () => {
    switch (themeData.id) {
      case 'internal-cardiology':
        return <InternalCardiologyShowcase />;
      case 'gynecology':
        return <GynecologyShowcase />;
      case 'pediatrics':
        return <PediatricsShowcase />;
      case 'dentistry':
        return <DentistryShowcase />;
      default:
        return <InternalCardiologyShowcase />;
    }
  };
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {renderShowcase()}
      </div>
    </section>
  );
};
