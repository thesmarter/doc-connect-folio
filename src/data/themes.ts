import { MedicalTheme } from '@/types/theme';

export const medicalThemes: MedicalTheme[] = [
  // الثيم الحالي - طبيب باطني وقلب
  {
    id: 'internal-cardiology',
    name: {
      ar: 'طب باطني وأمراض القلب',
      en: 'Internal Medicine & Cardiology'
    },
    colors: {
      primary: '200 100% 40%',
      primaryLight: '200 100% 85%',
      primaryGlow: '200 100% 60%',
      secondary: '160 60% 45%',
      secondaryLight: '160 40% 90%',
      accent: '45 100% 65%',
      accentLight: '45 100% 95%'
    },
    layout: {
      heroStyle: 'classic',
      cardStyle: 'rounded',
      buttonStyle: 'solid',
      spacing: 'normal',
      headerLayout: 'split'
    },
    visuals: {
      backgroundPattern: 'medical-grid',
      iconStyle: 'outline',
      shadowStyle: 'subtle',
      borderRadius: 'medium',
      animations: 'professional'
    },
    doctor: {
      name: {
        ar: 'د. أحمد محمد علي',
        en: 'Dr. Ahmed Mohammed Ali'
      },
      title: {
        ar: 'استشاري الطب الباطني وأمراض القلب',
        en: 'Consultant Internal Medicine & Cardiology'
      },
      description: {
        ar: 'أكثر من 15 عاماً من الخبرة في تقديم أفضل الخدمات الطبية مع التركيز على راحة المريض وجودة العلاج',
        en: 'Over 15 years of experience providing exceptional medical care with focus on patient comfort and treatment quality'
      },
      image: '/src/assets/doctor-hero.jpg',
      experience: {
        ar: '15+ سنة خبرة',
        en: '15+ Years Experience'
      },
      patients: {
        ar: '5000+ مريض',
        en: '5000+ Patients'
      },
      certificates: {
        ar: '25+ شهادة',
        en: '25+ Certificates'
      }
    },
    services: [
      {
        title: {
          ar: 'تشخيص أمراض القلب',
          en: 'Cardiac Diagnostics'
        },
        description: {
          ar: 'فحص شامل للقلب والأوعية الدموية باستخدام أحدث التقنيات',
          en: 'Comprehensive heart and cardiovascular examination using latest technology'
        },
        icon: '🫀'
      },
      {
        title: {
          ar: 'الطب الباطني العام',
          en: 'General Internal Medicine'
        },
        description: {
          ar: 'تشخيص وعلاج الأمراض الباطنة والمزمنة',
          en: 'Diagnosis and treatment of internal and chronic diseases'
        },
        icon: '🩺'
      },
      {
        title: {
          ar: 'متابعة الأمراض المزمنة',
          en: 'Chronic Disease Management'
        },
        description: {
          ar: 'برامج متابعة شاملة لمرضى السكري وضغط الدم',
          en: 'Comprehensive follow-up programs for diabetes and hypertension patients'
        },
        icon: '📊'
      },
      {
        title: {
          ar: 'الفحص الدوري الشامل',
          en: 'Comprehensive Health Checkup'
        },
        description: {
          ar: 'برنامج فحص صحي شامل للوقاية والكشف المبكر',
          en: 'Complete health screening program for prevention and early detection'
        },
        icon: '🔍'
      },
      {
        title: {
          ar: 'استشارات طبية متخصصة',
          en: 'Specialized Medical Consultations'
        },
        description: {
          ar: 'استشارات في جميع مجالات الطب الباطني',
          en: 'Consultations in all areas of internal medicine'
        },
        icon: '💡'
      },
      {
        title: {
          ar: 'خدمات الطوارئ',
          en: 'Emergency Services'
        },
        description: {
          ar: 'خدمات طوارئ على مدار الساعة للحالات العاجلة',
          en: '24/7 emergency services for urgent cases'
        },
        icon: '🚨'
      }
    ],
    workExperience: [
      {
        title: {
          ar: 'استشاري أول - مستشفى الملك فيصل التخصصي',
          en: 'Senior Consultant - King Faisal Specialist Hospital'
        },
        period: {
          ar: '2020 - حتى الآن',
          en: '2020 - Present'
        },
        description: {
          ar: 'إدارة قسم أمراض القلب والأوعية الدموية مع التركيز على الحالات المعقدة',
          en: 'Managing Cardiology Department with focus on complex cases'
        }
      },
      {
        title: {
          ar: 'استشاري - مجمع الملك عبدالله الطبي',
          en: 'Consultant - King Abdullah Medical Complex'
        },
        period: {
          ar: '2015 - 2020',
          en: '2015 - 2020'
        },
        description: {
          ar: 'تشخيص وعلاج أمراض القلب والباطنة العامة',
          en: 'Diagnosis and treatment of cardiac and general internal medicine'
        }
      },
      {
        title: {
          ar: 'طبيب مقيم أول - مستشفى المملكة',
          en: 'Senior Resident - Kingdom Hospital'
        },
        period: {
          ar: '2012 - 2015',
          en: '2012 - 2015'
        },
        description: {
          ar: 'التدريب التخصصي في الطب الباطني وأمراض القلب',
          en: 'Specialized training in internal medicine and cardiology'
        }
      }
    ],
    education: [
      {
        title: {
          ar: 'دكتوراه في أمراض القلب - جامعة الملك سعود',
          en: 'PhD in Cardiology - King Saud University'
        },
        period: {
          ar: '2018 - 2021',
          en: '2018 - 2021'
        },
        description: {
          ar: 'تخصص في أمراض القلب والأوعية الدموية',
          en: 'Specialization in cardiovascular diseases'
        }
      },
      {
        title: {
          ar: 'ماجستير الطب الباطني - جامعة الملك عبدالعزيز',
          en: 'Master of Internal Medicine - King Abdulaziz University'
        },
        period: {
          ar: '2014 - 2017',
          en: '2014 - 2017'
        },
        description: {
          ar: 'تخصص في الطب الباطني والأمراض المزمنة',
          en: 'Specialization in internal medicine and chronic diseases'
        }
      },
      {
        title: {
          ar: 'بكالوريوس الطب والجراحة - جامعة الملك سعود',
          en: 'Bachelor of Medicine & Surgery - King Saud University'
        },
        period: {
          ar: '2006 - 2012',
          en: '2006 - 2012'
        },
        description: {
          ar: 'درجة البكالوريوس في الطب والجراحة بامتياز',
          en: 'Bachelor\'s degree in Medicine and Surgery with distinction'
        }
      }
    ],
    heroImage: '/src/assets/doctor-hero.jpg',
    consultationImage: '/src/assets/consultation.jpg',
    clinicImage: '/src/assets/clinic-interior.jpg',
    backgroundImages: {
      hero: 'linear-gradient(135deg, hsl(200, 100%, 40%) 0%, hsl(160, 60%, 45%) 100%)',
      services: 'linear-gradient(45deg, hsl(200, 100%, 95%) 0%, hsl(160, 40%, 98%) 100%)',
      about: 'radial-gradient(circle at center, hsl(200, 100%, 98%) 0%, hsl(200, 50%, 95%) 100%)'
    }
  },

  // ثيم طبيب النساء والولادة
  {
    id: 'gynecology',
    name: {
      ar: 'طب النساء والولادة',
      en: 'Gynecology & Obstetrics'
    },
    colors: {
      primary: '320 60% 50%',
      primaryLight: '320 60% 90%',
      primaryGlow: '320 60% 70%',
      secondary: '280 40% 60%',
      secondaryLight: '280 30% 95%',
      accent: '340 80% 65%',
      accentLight: '340 80% 95%'
    },
    layout: {
      heroStyle: 'elegant',
      cardStyle: 'soft',
      buttonStyle: 'soft',
      spacing: 'relaxed',
      headerLayout: 'centered'
    },
    visuals: {
      backgroundPattern: 'floral-subtle',
      iconStyle: 'filled',
      shadowStyle: 'soft',
      borderRadius: 'large',
      animations: 'smooth'
    },
    doctor: {
      name: {
        ar: 'د. فاطمة أحمد السالم',
        en: 'Dr. Fatima Ahmed Al-Salem'
      },
      title: {
        ar: 'استشارية طب النساء والولادة',
        en: 'Consultant Gynecologist & Obstetrician'
      },
      description: {
        ar: 'أكثر من 12 عاماً من الخبرة في رعاية صحة المرأة مع التركيز على الولادة الآمنة والرعاية الشاملة',
        en: 'Over 12 years of experience in women\'s healthcare with focus on safe delivery and comprehensive care'
      },
      image: '/src/assets/doctor-hero.jpg',
      experience: {
        ar: '12+ سنة خبرة',
        en: '12+ Years Experience'
      },
      patients: {
        ar: '3500+ مريضة',
        en: '3500+ Patients'
      },
      certificates: {
        ar: '20+ شهادة',
        en: '20+ Certificates'
      }
    },
    services: [
      {
        title: {
          ar: 'متابعة الحمل والولادة',
          en: 'Pregnancy & Delivery Care'
        },
        description: {
          ar: 'متابعة شاملة للحمل من البداية حتى الولادة الآمنة',
          en: 'Comprehensive pregnancy care from conception to safe delivery'
        },
        icon: '🤱'
      },
      {
        title: {
          ar: 'أمراض النساء العامة',
          en: 'General Gynecology'
        },
        description: {
          ar: 'تشخيص وعلاج جميع أمراض النساء والجهاز التناسلي',
          en: 'Diagnosis and treatment of all gynecological conditions'
        },
        icon: '🩺'
      },
      {
        title: {
          ar: 'جراحات النساء',
          en: 'Gynecological Surgery'
        },
        description: {
          ar: 'العمليات الجراحية النسائية بأحدث التقنيات',
          en: 'Gynecological surgeries using latest techniques'
        },
        icon: '⚕️'
      },
      {
        title: {
          ar: 'تنظيم الأسرة',
          en: 'Family Planning'
        },
        description: {
          ar: 'استشارات وخدمات تنظيم الأسرة والصحة الإنجابية',
          en: 'Family planning consultations and reproductive health services'
        },
        icon: '👨‍👩‍👧‍👦'
      },
      {
        title: {
          ar: 'فحوصات دورية للنساء',
          en: 'Women\'s Health Screening'
        },
        description: {
          ar: 'فحوصات دورية شاملة للوقاية والكشف المبكر',
          en: 'Comprehensive routine screenings for prevention and early detection'
        },
        icon: '🔍'
      },
      {
        title: {
          ar: 'علاج العقم',
          en: 'Infertility Treatment'
        },
        description: {
          ar: 'تشخيص وعلاج مشاكل العقم والصحة الإنجابية',
          en: 'Diagnosis and treatment of infertility and reproductive health issues'
        },
        icon: '💕'
      }
    ],
    workExperience: [
      {
        title: {
          ar: 'استشارية أولى - مستشفى الملك فهد للنساء والولادة',
          en: 'Senior Consultant - King Fahd Hospital for Women & Obstetrics'
        },
        period: {
          ar: '2019 - حتى الآن',
          en: '2019 - Present'
        },
        description: {
          ar: 'إدارة قسم الولادة عالية الخطورة والجراحات النسائية المعقدة',
          en: 'Managing high-risk obstetrics and complex gynecological surgeries'
        }
      },
      {
        title: {
          ar: 'استشارية - مجمع الدمام الطبي',
          en: 'Consultant - Dammam Medical Complex'
        },
        period: {
          ar: '2015 - 2019',
          en: '2015 - 2019'
        },
        description: {
          ar: 'تشخيص وعلاج أمراض النساء والمتابعة الشاملة للحمل',
          en: 'Gynecological diagnosis and comprehensive pregnancy care'
        }
      }
    ],
    education: [
      {
        title: {
          ar: 'دكتوراه في طب النساء والولادة - جامعة الملك عبدالعزيز',
          en: 'PhD in Gynecology & Obstetrics - King Abdulaziz University'
        },
        period: {
          ar: '2017 - 2020',
          en: '2017 - 2020'
        },
        description: {
          ar: 'تخصص في جراحات النساء والولادة عالية الخطورة',
          en: 'Specialization in gynecological surgery and high-risk obstetrics'
        }
      },
      {
        title: {
          ar: 'ماجستير طب النساء والولادة - جامعة الملك سعود',
          en: 'Master of Gynecology & Obstetrics - King Saud University'
        },
        period: {
          ar: '2013 - 2016',
          en: '2013 - 2016'
        },
        description: {
          ar: 'تخصص في طب النساء والصحة الإنجابية',
          en: 'Specialization in gynecology and reproductive health'
        }
      }
    ],
    heroImage: '/src/assets/doctor-hero.jpg',
    consultationImage: '/src/assets/consultation.jpg',
    clinicImage: '/src/assets/clinic-interior.jpg',
    backgroundImages: {
      hero: 'linear-gradient(135deg, hsl(320, 60%, 50%) 0%, hsl(280, 40%, 60%) 100%)',
      services: 'linear-gradient(45deg, hsl(320, 60%, 95%) 0%, hsl(280, 30%, 98%) 100%)',
      about: 'radial-gradient(circle at center, hsl(340, 80%, 98%) 0%, hsl(320, 40%, 95%) 100%)'
    }
  },

  // ثيم طبيب الأطفال
  {
    id: 'pediatrics',
    name: {
      ar: 'طب الأطفال',
      en: 'Pediatrics'
    },
    colors: {
      primary: '120 70% 45%',
      primaryLight: '120 70% 90%',
      primaryGlow: '120 70% 65%',
      secondary: '180 50% 50%',
      secondaryLight: '180 40% 95%',
      accent: '60 90% 60%',
      accentLight: '60 90% 95%'
    },
    layout: {
      heroStyle: 'playful',
      cardStyle: 'rounded',
      buttonStyle: 'gradient',
      spacing: 'relaxed',
      headerLayout: 'centered'
    },
    visuals: {
      backgroundPattern: 'playful-dots',
      iconStyle: 'playful',
      shadowStyle: 'soft',
      borderRadius: 'large',
      animations: 'playful'
    },
    doctor: {
      name: {
        ar: 'د. محمد عبدالله الخالدي',
        en: 'Dr. Mohammed Abdullah Al-Khalidi'
      },
      title: {
        ar: 'استشاري طب الأطفال وحديثي الولادة',
        en: 'Consultant Pediatrician & Neonatologist'
      },
      description: {
        ar: 'أكثر من 14 عاماً من الخبرة في رعاية الأطفال وحديثي الولادة مع التركيز على النمو الصحي والتطعيمات',
        en: 'Over 14 years of experience in pediatric and neonatal care with focus on healthy growth and vaccinations'
      },
      image: '/src/assets/doctor-hero.jpg',
      experience: {
        ar: '14+ سنة خبرة',
        en: '14+ Years Experience'
      },
      patients: {
        ar: '4200+ طفل',
        en: '4200+ Children'
      },
      certificates: {
        ar: '22+ شهادة',
        en: '22+ Certificates'
      }
    },
    services: [
      {
        title: {
          ar: 'فحص الأطفال الدوري',
          en: 'Pediatric Health Checkups'
        },
        description: {
          ar: 'فحوصات دورية شاملة لمتابعة نمو وتطور الأطفال',
          en: 'Comprehensive routine checkups to monitor child growth and development'
        },
        icon: '👶'
      },
      {
        title: {
          ar: 'التطعيمات والوقاية',
          en: 'Vaccinations & Prevention'
        },
        description: {
          ar: 'برنامج تطعيمات شامل حسب الجدول الزمني المعتمد',
          en: 'Comprehensive vaccination program according to approved schedule'
        },
        icon: '💉'
      },
      {
        title: {
          ar: 'علاج أمراض الأطفال',
          en: 'Pediatric Disease Treatment'
        },
        description: {
          ar: 'تشخيص وعلاج جميع أمراض الأطفال الشائعة والمزمنة',
          en: 'Diagnosis and treatment of common and chronic pediatric diseases'
        },
        icon: '🩺'
      },
      {
        title: {
          ar: 'رعاية حديثي الولادة',
          en: 'Newborn Care'
        },
        description: {
          ar: 'رعاية متخصصة لحديثي الولادة والأطفال الخدج',
          en: 'Specialized care for newborns and premature infants'
        },
        icon: '🍼'
      },
      {
        title: {
          ar: 'استشارات التغذية',
          en: 'Nutrition Consultations'
        },
        description: {
          ar: 'إرشادات التغذية الصحية والرضاعة الطبيعية',
          en: 'Healthy nutrition guidance and breastfeeding support'
        },
        icon: '🥛'
      },
      {
        title: {
          ar: 'متابعة النمو والتطور',
          en: 'Growth & Development Monitoring'
        },
        description: {
          ar: 'متابعة دقيقة لمراحل النمو الجسدي والذهني للطفل',
          en: 'Precise monitoring of physical and mental development stages'
        },
        icon: '📏'
      }
    ],
    workExperience: [
      {
        title: {
          ar: 'استشاري أول - مستشفى الأطفال التخصصي',
          en: 'Senior Consultant - Children\'s Specialist Hospital'
        },
        period: {
          ar: '2018 - حتى الآن',
          en: '2018 - Present'
        },
        description: {
          ar: 'إدارة قسم حديثي الولادة والعناية المركزة للأطفال',
          en: 'Managing neonatal unit and pediatric intensive care'
        }
      },
      {
        title: {
          ar: 'استشاري - مجمع الرياض الطبي',
          en: 'Consultant - Riyadh Medical Complex'
        },
        period: {
          ar: '2014 - 2018',
          en: '2014 - 2018'
        },
        description: {
          ar: 'تشخيص وعلاج أمراض الأطفال وبرامج التطعيمات',
          en: 'Pediatric diagnosis, treatment, and vaccination programs'
        }
      }
    ],
    education: [
      {
        title: {
          ar: 'دكتوراه في طب الأطفال - جامعة الملك سعود',
          en: 'PhD in Pediatrics - King Saud University'
        },
        period: {
          ar: '2016 - 2019',
          en: '2016 - 2019'
        },
        description: {
          ar: 'تخصص في طب حديثي الولادة والعناية المركزة',
          en: 'Specialization in neonatology and intensive care'
        }
      },
      {
        title: {
          ar: 'ماجستير طب الأطفال - جامعة الملك عبدالعزيز',
          en: 'Master of Pediatrics - King Abdulaziz University'
        },
        period: {
          ar: '2012 - 2015',
          en: '2012 - 2015'
        },
        description: {
          ar: 'تخصص في طب الأطفال والنمو والتطور',
          en: 'Specialization in pediatrics, growth and development'
        }
      }
    ],
    heroImage: '/src/assets/doctor-hero.jpg',
    consultationImage: '/src/assets/consultation.jpg',
    clinicImage: '/src/assets/clinic-interior.jpg',
    backgroundImages: {
      hero: 'linear-gradient(135deg, hsl(120, 70%, 45%) 0%, hsl(180, 50%, 50%) 100%)',
      services: 'linear-gradient(45deg, hsl(120, 70%, 95%) 0%, hsl(180, 40%, 98%) 100%)',
      about: 'radial-gradient(circle at center, hsl(60, 90%, 98%) 0%, hsl(120, 50%, 95%) 100%)'
    }
  },

  // ثيم طبيب الأسنان
  {
    id: 'dentistry',
    name: {
      ar: 'طب الأسنان والتقويم',
      en: 'Dentistry & Orthodontics'
    },
    colors: {
      primary: '210 100% 50%',
      primaryLight: '210 100% 90%',
      primaryGlow: '210 100% 70%',
      secondary: '190 60% 55%',
      secondaryLight: '190 50% 95%',
      accent: '220 80% 60%',
      accentLight: '220 80% 95%'
    },
    layout: {
      heroStyle: 'modern',
      cardStyle: 'minimal',
      buttonStyle: 'outline',
      spacing: 'compact',
      headerLayout: 'minimal'
    },
    visuals: {
      backgroundPattern: 'clean-lines',
      iconStyle: 'outline',
      shadowStyle: 'prominent',
      borderRadius: 'small',
      animations: 'minimal'
    },
    doctor: {
      name: {
        ar: 'د. سارة عبدالرحمن النجار',
        en: 'Dr. Sarah Abdulrahman Al-Najjar'
      },
      title: {
        ar: 'استشارية طب الأسنان والتقويم',
        en: 'Consultant Dentist & Orthodontist'
      },
      description: {
        ar: 'أكثر من 13 عاماً من الخبرة في طب الأسنان التجميلي والعلاجي مع التركيز على الابتسامة المثالية',
        en: 'Over 13 years of experience in cosmetic and therapeutic dentistry with focus on perfect smile'
      },
      image: '/src/assets/doctor-hero.jpg',
      experience: {
        ar: '13+ سنة خبرة',
        en: '13+ Years Experience'
      },
      patients: {
        ar: '3800+ مريض',
        en: '3800+ Patients'
      },
      certificates: {
        ar: '18+ شهادة',
        en: '18+ Certificates'
      }
    },
    services: [
      {
        title: {
          ar: 'تقويم الأسنان',
          en: 'Orthodontics'
        },
        description: {
          ar: 'تقويم الأسنان التقليدي والشفاف لجميع الأعمار',
          en: 'Traditional and clear orthodontic treatment for all ages'
        },
        icon: '🦷'
      },
      {
        title: {
          ar: 'طب الأسنان التجميلي',
          en: 'Cosmetic Dentistry'
        },
        description: {
          ar: 'تبييض الأسنان والقشور التجميلية والابتسامة الهوليودية',
          en: 'Teeth whitening, veneers, and Hollywood smile treatments'
        },
        icon: '✨'
      },
      {
        title: {
          ar: 'علاج الجذور',
          en: 'Root Canal Treatment'
        },
        description: {
          ar: 'علاج عصب الأسنان بأحدث التقنيات غير المؤلمة',
          en: 'Root canal treatment using latest painless techniques'
        },
        icon: '🔧'
      },
      {
        title: {
          ar: 'زراعة الأسنان',
          en: 'Dental Implants'
        },
        description: {
          ar: 'زراعة الأسنان بالتقنيات المتقدمة والمواد عالية الجودة',
          en: 'Dental implants using advanced techniques and high-quality materials'
        },
        icon: '🔩'
      },
      {
        title: {
          ar: 'طب أسنان الأطفال',
          en: 'Pediatric Dentistry'
        },
        description: {
          ar: 'رعاية أسنان الأطفال في بيئة مريحة وودودة',
          en: 'Children\'s dental care in comfortable and friendly environment'
        },
        icon: '👶'
      },
      {
        title: {
          ar: 'جراحة الفم والأسنان',
          en: 'Oral Surgery'
        },
        description: {
          ar: 'جراحات الفم والأسنان المتقدمة وخلع ضروس العقل',
          en: 'Advanced oral surgery and wisdom teeth extraction'
        },
        icon: '⚕️'
      }
    ],
    workExperience: [
      {
        title: {
          ar: 'استشارية أولى - مركز الأسنان التخصصي',
          en: 'Senior Consultant - Specialized Dental Center'
        },
        period: {
          ar: '2017 - حتى الآن',
          en: '2017 - Present'
        },
        description: {
          ar: 'إدارة قسم التقويم والطب التجميلي للأسنان',
          en: 'Managing orthodontics and cosmetic dentistry department'
        }
      },
      {
        title: {
          ar: 'استشارية - مجمع جدة لطب الأسنان',
          en: 'Consultant - Jeddah Dental Complex'
        },
        period: {
          ar: '2013 - 2017',
          en: '2013 - 2017'
        },
        description: {
          ar: 'تشخيص وعلاج جميع مشاكل الأسنان والتقويم',
          en: 'Diagnosis and treatment of all dental and orthodontic problems'
        }
      }
    ],
    education: [
      {
        title: {
          ar: 'دكتوراه في تقويم الأسنان - جامعة الملك عبدالعزيز',
          en: 'PhD in Orthodontics - King Abdulaziz University'
        },
        period: {
          ar: '2015 - 2018',
          en: '2015 - 2018'
        },
        description: {
          ar: 'تخصص في تقويم الأسنان والجراحة التقويمية',
          en: 'Specialization in orthodontics and orthognathic surgery'
        }
      },
      {
        title: {
          ar: 'ماجستير طب الأسنان - جامعة الملك سعود',
          en: 'Master of Dentistry - King Saud University'
        },
        period: {
          ar: '2011 - 2014',
          en: '2011 - 2014'
        },
        description: {
          ar: 'تخصص في طب الأسنان التجميلي والترميمي',
          en: 'Specialization in cosmetic and restorative dentistry'
        }
      }
    ],
    heroImage: '/src/assets/doctor-hero.jpg',
    consultationImage: '/src/assets/consultation.jpg',
    clinicImage: '/src/assets/clinic-interior.jpg',
    backgroundImages: {
      hero: 'linear-gradient(135deg, hsl(210, 100%, 50%) 0%, hsl(190, 60%, 55%) 100%)',
      services: 'linear-gradient(45deg, hsl(210, 100%, 95%) 0%, hsl(190, 50%, 98%) 100%)',
      about: 'radial-gradient(circle at center, hsl(220, 80%, 98%) 0%, hsl(210, 60%, 95%) 100%)'
    }
  }
];
