import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MedicalSpecialty, MedicalTheme, ThemeContextType } from '@/types/theme';
import { medicalThemes } from '@/data/themes';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'medical-theme';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Initialize theme from localStorage or default to internal-cardiology
  const [currentTheme, setCurrentTheme] = useState<MedicalSpecialty>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as MedicalSpecialty;
      const validThemes: MedicalSpecialty[] = ['internal-cardiology', 'gynecology', 'pediatrics', 'dentistry'];
      return stored && validThemes.includes(stored) ? stored : 'internal-cardiology';
    }
    return 'internal-cardiology';
  });

  // Get current theme data
  const themeData = medicalThemes.find(theme => theme.id === currentTheme) || medicalThemes[0];

  // Apply theme colors and styles to CSS variables and body classes
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const colors = themeData.colors;
    const layout = themeData.layout;
    const visuals = themeData.visuals;

    // Apply theme colors as CSS custom properties
    root.style.setProperty('--primary', colors.primary);
    root.style.setProperty('--primary-light', colors.primaryLight);
    root.style.setProperty('--primary-glow', colors.primaryGlow);
    root.style.setProperty('--secondary', colors.secondary);
    root.style.setProperty('--secondary-light', colors.secondaryLight);
    root.style.setProperty('--accent', colors.accent);
    root.style.setProperty('--accent-light', colors.accentLight);

    // Remove previous theme classes
    body.classList.remove(
      'hero-classic', 'hero-modern', 'hero-playful', 'hero-elegant',
      'spacing-compact', 'spacing-normal', 'spacing-relaxed',
      'animations-minimal', 'animations-professional', 'animations-smooth', 'animations-playful',
      'bg-medical-grid', 'bg-floral-subtle', 'bg-playful-dots', 'bg-clean-lines'
    );

    // Apply new theme classes
    body.classList.add(`hero-${layout.heroStyle}`);
    body.classList.add(`spacing-${layout.spacing}`);
    body.classList.add(`animations-${visuals.animations}`);
    body.classList.add(`bg-${visuals.backgroundPattern}`);

    // Apply border radius preference
    root.style.setProperty('--theme-border-radius',
      visuals.borderRadius === 'none' ? '0' :
      visuals.borderRadius === 'small' ? '0.375rem' :
      visuals.borderRadius === 'medium' ? '0.5rem' :
      visuals.borderRadius === 'large' ? '1rem' : '9999px'
    );

    // Persist theme preference
    localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
  }, [currentTheme, themeData]);

  const setTheme = (theme: MedicalSpecialty) => {
    setCurrentTheme(theme);
  };

  const value: ThemeContextType = {
    currentTheme,
    setTheme,
    themeData,
    availableThemes: medicalThemes
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
