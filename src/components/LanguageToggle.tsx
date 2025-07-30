import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="btn-outline-medical text-sm gap-2"
      aria-label="Toggle Language"
    >
      <Languages className="w-4 h-4" />
      {language === 'ar' ? 'EN' : 'العربية'}
    </button>
  );
};