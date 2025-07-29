import { useState, useEffect } from 'react';

export type Language = 'ar' | 'en';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('ar');
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('rtl');

  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    setDirection(dir);
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
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