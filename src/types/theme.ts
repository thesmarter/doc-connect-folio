export type MedicalSpecialty = 'internal-cardiology' | 'gynecology' | 'pediatrics' | 'dentistry';

export interface ThemeColors {
  primary: string;
  primaryLight: string;
  primaryGlow: string;
  secondary: string;
  secondaryLight: string;
  accent: string;
  accentLight: string;
}

export interface ThemeLayout {
  heroStyle: 'classic' | 'modern' | 'playful' | 'elegant';
  cardStyle: 'rounded' | 'sharp' | 'soft' | 'minimal';
  buttonStyle: 'solid' | 'outline' | 'gradient' | 'soft';
  spacing: 'compact' | 'normal' | 'relaxed';
  headerLayout: 'centered' | 'split' | 'minimal';
}

export interface ThemeVisuals {
  backgroundPattern: string;
  iconStyle: 'outline' | 'filled' | 'duotone' | 'playful';
  shadowStyle: 'subtle' | 'prominent' | 'soft' | 'none';
  borderRadius: 'none' | 'small' | 'medium' | 'large' | 'full';
  animations: 'minimal' | 'smooth' | 'playful' | 'professional';
}

export interface DoctorInfo {
  name: {
    ar: string;
    en: string;
  };
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  image: string;
  experience: {
    ar: string;
    en: string;
  };
  patients: {
    ar: string;
    en: string;
  };
  certificates: {
    ar: string;
    en: string;
  };
}

export interface MedicalService {
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  icon: string;
}

export interface WorkExperience {
  title: {
    ar: string;
    en: string;
  };
  period: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
}

export interface Education {
  title: {
    ar: string;
    en: string;
  };
  period: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
}

export interface MedicalTheme {
  id: MedicalSpecialty;
  name: {
    ar: string;
    en: string;
  };
  colors: ThemeColors;
  layout: ThemeLayout;
  visuals: ThemeVisuals;
  doctor: DoctorInfo;
  services: MedicalService[];
  workExperience: WorkExperience[];
  education: Education[];
  heroImage: string;
  consultationImage: string;
  clinicImage: string;
  backgroundImages: {
    hero: string;
    services: string;
    about: string;
  };
}

export interface ThemeContextType {
  currentTheme: MedicalSpecialty;
  setTheme: (theme: MedicalSpecialty) => void;
  themeData: MedicalTheme;
  availableThemes: MedicalTheme[];
}
