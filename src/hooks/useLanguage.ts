import { useState, useEffect } from 'react';

export type Language = 'ar' | 'en';

const LANGUAGE_STORAGE_KEY = 'preferred-language';

export const useLanguage = () => {
  // Initialize language from localStorage or default to Arabic
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
      return stored && (stored === 'ar' || stored === 'en') ? stored : 'ar';
    }
    return 'ar';
  });

  const [direction, setDirection] = useState<'ltr' | 'rtl'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
      const lang = stored && (stored === 'ar' || stored === 'en') ? stored : 'ar';
      return lang === 'ar' ? 'rtl' : 'ltr';
    }
    return 'rtl';
  });

  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    setDirection(dir);
    document.documentElement.dir = dir;
    document.documentElement.lang = language;

    // Persist language preference
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  return {
    language,
    direction,
    toggleLanguage,
    isRTL: direction === 'rtl'
  };
};