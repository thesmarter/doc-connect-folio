import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Stethoscope } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { MedicalSpecialty } from '@/types/theme';

export const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setTheme, availableThemes } = useTheme();
  const { language } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleThemeChange = (themeId: MedicalSpecialty) => {
    setTheme(themeId);
    setIsOpen(false);
  };

  const currentThemeData = availableThemes.find(theme => theme.id === currentTheme);

  // Theme icons mapping
  const getThemeIcon = (themeId: MedicalSpecialty) => {
    switch (themeId) {
      case 'internal-cardiology':
        return '🫀';
      case 'gynecology':
        return '🤱';
      case 'pediatrics':
        return '👶';
      case 'dentistry':
        return '🦷';
      default:
        return '🩺';
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background hover:bg-muted transition-colors text-sm font-medium"
        aria-label={language === 'ar' ? 'اختيار التخصص الطبي' : 'Select Medical Specialty'}
      >
        <Stethoscope className="w-4 h-4 text-primary" />
        <span className="hidden sm:inline">
          {currentThemeData?.name[language]}
        </span>
        <span className="sm:hidden text-lg">
          {getThemeIcon(currentTheme)}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-64 bg-background border border-border rounded-lg shadow-lg z-50">
          <div className="p-2">
            <div className="text-xs font-medium text-muted-foreground mb-2 px-2">
              {language === 'ar' ? 'اختر التخصص الطبي:' : 'Select Medical Specialty:'}
            </div>
            {availableThemes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleThemeChange(theme.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                  currentTheme === theme.id
                    ? 'bg-primary/10 text-primary border border-primary/20'
                    : 'hover:bg-muted text-foreground'
                }`}
              >
                <span className="text-lg">{getThemeIcon(theme.id)}</span>
                <div className="flex-1 text-left">
                  <div className="font-medium">{theme.name[language]}</div>
                  <div className="text-xs text-muted-foreground">
                    {theme.id === 'internal-cardiology' && (language === 'ar' ? 'الطب الباطني والقلب' : 'Internal & Cardiology')}
                    {theme.id === 'gynecology' && (language === 'ar' ? 'النساء والولادة' : 'Women\'s Health')}
                    {theme.id === 'pediatrics' && (language === 'ar' ? 'طب الأطفال' : 'Children\'s Health')}
                    {theme.id === 'dentistry' && (language === 'ar' ? 'الأسنان والتقويم' : 'Dental Care')}
                  </div>
                </div>
                {currentTheme === theme.id && (
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
