import { BlogPost, BlogCategory } from '@/types/blog';

export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: {
      ar: 'أمراض القلب',
      en: 'Cardiology'
    },
    slug: 'cardiology'
  },
  {
    id: '2',
    name: {
      ar: 'الطب الباطني',
      en: 'Internal Medicine'
    },
    slug: 'internal-medicine'
  },
  {
    id: '3',
    name: {
      ar: 'الوقاية والصحة العامة',
      en: 'Prevention & Public Health'
    },
    slug: 'prevention-health'
  },
  {
    id: '4',
    name: {
      ar: 'التغذية الصحية',
      en: 'Healthy Nutrition'
    },
    slug: 'nutrition'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'heart-health-tips',
    title: {
      ar: 'نصائح مهمة للحفاظ على صحة القلب',
      en: 'Essential Tips for Maintaining Heart Health'
    },
    excerpt: {
      ar: 'تعرف على أهم النصائح والإرشادات للحفاظ على صحة قلبك وتجنب أمراض القلب والأوعية الدموية.',
      en: 'Learn the most important tips and guidelines to maintain your heart health and prevent cardiovascular diseases.'
    },
    content: {
      ar: `
# نصائح مهمة للحفاظ على صحة القلب

يعتبر القلب من أهم الأعضاء في جسم الإنسان، وهو المسؤول عن ضخ الدم المحمل بالأكسجين والمواد الغذائية إلى جميع أجزاء الجسم. لذلك، من المهم جداً الاهتمام بصحة القلب واتباع نمط حياة صحي للوقاية من أمراض القلب والأوعية الدموية.

## النصائح الأساسية:

### 1. ممارسة الرياضة بانتظام
- مارس الرياضة لمدة 30 دقيقة على الأقل يومياً
- اختر الأنشطة التي تستمتع بها مثل المشي أو السباحة
- ابدأ تدريجياً وزد الشدة مع الوقت

### 2. اتباع نظام غذائي صحي
- تناول الخضروات والفواكه بكثرة
- قلل من الدهون المشبعة والملح
- اختر الحبوب الكاملة والبروتينات الخالية من الدهون

### 3. الإقلاع عن التدخين
- التدخين يضر بالأوعية الدموية ويزيد خطر الإصابة بأمراض القلب
- اطلب المساعدة الطبية للإقلاع عن التدخين

### 4. إدارة التوتر
- مارس تقنيات الاسترخاء مثل التأمل
- احصل على قسط كافٍ من النوم
- حافظ على التوازن بين العمل والحياة الشخصية

## الخلاصة

صحة القلب تتطلب التزاماً مستمراً بنمط حياة صحي. باتباع هذه النصائح البسيطة، يمكنك تقليل خطر الإصابة بأمراض القلب والاستمتاع بحياة صحية أطول.
      `,
      en: `
# Essential Tips for Maintaining Heart Health

The heart is one of the most important organs in the human body, responsible for pumping oxygen-rich blood and nutrients to all parts of the body. Therefore, it's crucial to take care of heart health and follow a healthy lifestyle to prevent cardiovascular diseases.

## Essential Tips:

### 1. Exercise Regularly
- Exercise for at least 30 minutes daily
- Choose activities you enjoy like walking or swimming
- Start gradually and increase intensity over time

### 2. Follow a Healthy Diet
- Eat plenty of vegetables and fruits
- Reduce saturated fats and salt
- Choose whole grains and lean proteins

### 3. Quit Smoking
- Smoking damages blood vessels and increases heart disease risk
- Seek medical help to quit smoking

### 4. Manage Stress
- Practice relaxation techniques like meditation
- Get adequate sleep
- Maintain work-life balance

## Conclusion

Heart health requires continuous commitment to a healthy lifestyle. By following these simple tips, you can reduce your risk of heart disease and enjoy a longer, healthier life.
      `
    },
    author: {
      name: {
        ar: 'د. أحمد محمد علي',
        en: 'Dr. Ahmed Mohammed Ali'
      },
      title: {
        ar: 'استشاري الطب الباطني وأمراض القلب',
        en: 'Consultant Internal Medicine & Cardiology'
      },
      image: 'https://files1.24.ae/files/images/herthealth.jpg'
    },
    publishedAt: '2024-12-15',
    updatedAt: '2024-12-15',
    category: {
      ar: 'أمراض القلب',
      en: 'Cardiology'
    },
    tags: {
      ar: ['صحة القلب', 'الوقاية', 'نمط حياة صحي'],
      en: ['Heart Health', 'Prevention', 'Healthy Lifestyle']
    },
    image: 'https://files1.24.ae/files/images/herthealth.jpg',
    readTime: {
      ar: '5 دقائق قراءة',
      en: '5 min read'
    },
    featured: true
  },
  {
    id: '2',
    slug: 'diabetes-management',
    title: {
      ar: 'إدارة مرض السكري: دليل شامل للمرضى',
      en: 'Diabetes Management: A Comprehensive Guide for Patients'
    },
    excerpt: {
      ar: 'تعلم كيفية إدارة مرض السكري بفعالية من خلال النظام الغذائي والدواء ومراقبة مستوى السكر.',
      en: 'Learn how to effectively manage diabetes through diet, medication, and blood sugar monitoring.'
    },
    content: {
      ar: `
# إدارة مرض السكري: دليل شامل للمرضى

مرض السكري هو حالة مزمنة تتطلب إدارة مستمرة ومتابعة دقيقة. مع الرعاية المناسبة والالتزام بالعلاج، يمكن للمرضى أن يعيشوا حياة طبيعية وصحية.

## أساسيات إدارة السكري:

### 1. مراقبة مستوى السكر
- قس مستوى السكر بانتظام حسب توجيهات الطبيب
- احتفظ بسجل لقراءات السكر
- تعلم كيفية تفسير النتائج

### 2. النظام الغذائي
- اتبع نظاماً غذائياً متوازناً
- قلل من السكريات البسيطة
- تناول وجبات منتظمة في أوقات ثابتة

### 3. الأدوية
- تناول الأدوية في الأوقات المحددة
- لا تتوقف عن الدواء دون استشارة الطبيب
- تعلم عن الآثار الجانبية المحتملة

## الخلاصة

إدارة السكري تتطلب التزاماً يومياً، لكن مع المتابعة الصحيحة يمكن التحكم في المرض بفعالية.
      `,
      en: `
# Diabetes Management: A Comprehensive Guide for Patients

Diabetes is a chronic condition that requires continuous management and careful monitoring. With proper care and treatment adherence, patients can live normal, healthy lives.

## Diabetes Management Basics:

### 1. Blood Sugar Monitoring
- Check blood sugar regularly as directed by your doctor
- Keep a log of your readings
- Learn how to interpret results

### 2. Diet Management
- Follow a balanced diet plan
- Reduce simple sugars
- Eat regular meals at consistent times

### 3. Medications
- Take medications at prescribed times
- Don't stop medication without consulting your doctor
- Learn about potential side effects

## Conclusion

Diabetes management requires daily commitment, but with proper monitoring, the condition can be effectively controlled.
      `
    },
    author: {
      name: {
        ar: 'د. أحمد محمد علي',
        en: 'Dr. Ahmed Mohammed Ali'
      },
      title: {
        ar: 'استشاري الطب الباطني وأمراض القلب',
        en: 'Consultant Internal Medicine & Cardiology'
      },
      image: '/src/assets/doctor-hero.jpg'
    },
    publishedAt: '2024-12-10',
    updatedAt: '2024-12-10',
    category: {
      ar: 'الطب الباطني',
      en: 'Internal Medicine'
    },
    tags: {
      ar: ['السكري', 'إدارة المرض', 'صحة'],
      en: ['Diabetes', 'Disease Management', 'Health']
    },
    image: '/src/assets/doctor-hero.jpg',
    readTime: {
      ar: '7 دقائق قراءة',
      en: '7 min read'
    },
    featured: false
  },
  {
    id: '3',
    slug: 'healthy-nutrition-guide',
    title: {
      ar: 'دليل التغذية الصحية للوقاية من الأمراض',
      en: 'Healthy Nutrition Guide for Disease Prevention'
    },
    excerpt: {
      ar: 'اكتشف أهمية التغذية الصحية في الوقاية من الأمراض المزمنة وتعزيز الصحة العامة.',
      en: 'Discover the importance of healthy nutrition in preventing chronic diseases and promoting overall health.'
    },
    content: {
      ar: `
# دليل التغذية الصحية للوقاية من الأمراض

التغذية الصحية هي حجر الأساس للصحة الجيدة والوقاية من الأمراض المزمنة. النظام الغذائي المتوازن يمكن أن يقلل من خطر الإصابة بأمراض القلب والسكري والسرطان.

## مبادئ التغذية الصحية:

### 1. التنوع في الطعام
- تناول مجموعة متنوعة من الأطعمة
- اشمل جميع المجموعات الغذائية
- اختر ألواناً مختلفة من الخضروات والفواكه

### 2. الاعتدال في الكمية
- تناول حصصاً مناسبة
- تجنب الإفراط في الأكل
- استمع لإشارات الجوع والشبع

### 3. التركيز على الأطعمة الطبيعية
- اختر الأطعمة الطازجة والطبيعية
- قلل من الأطعمة المصنعة
- تجنب السكريات المضافة والدهون المتحولة

## الخلاصة

التغذية الصحية استثمار في صحتك المستقبلية. ابدأ بتغييرات صغيرة واجعلها جزءاً من نمط حياتك.
      `,
      en: `
# Healthy Nutrition Guide for Disease Prevention

Healthy nutrition is the cornerstone of good health and chronic disease prevention. A balanced diet can reduce the risk of heart disease, diabetes, and cancer.

## Healthy Nutrition Principles:

### 1. Food Variety
- Eat a variety of foods
- Include all food groups
- Choose different colors of vegetables and fruits

### 2. Portion Control
- Eat appropriate portions
- Avoid overeating
- Listen to hunger and satiety cues

### 3. Focus on Natural Foods
- Choose fresh, natural foods
- Reduce processed foods
- Avoid added sugars and trans fats

## Conclusion

Healthy nutrition is an investment in your future health. Start with small changes and make them part of your lifestyle.
      `
    },
    author: {
      name: {
        ar: 'د. أحمد محمد علي',
        en: 'Dr. Ahmed Mohammed Ali'
      },
      title: {
        ar: 'استشاري الطب الباطني وأمراض القلب',
        en: 'Consultant Internal Medicine & Cardiology'
      },
      image: '/src/assets/doctor-hero.jpg'
    },
    publishedAt: '2024-12-05',
    updatedAt: '2024-12-05',
    category: {
      ar: 'التغذية الصحية',
      en: 'Healthy Nutrition'
    },
    tags: {
      ar: ['تغذية', 'وقاية', 'صحة عامة'],
      en: ['Nutrition', 'Prevention', 'Public Health']
    },
    image: 'https://thaat.co/wp-content/uploads/2024/11/%D8%A7%D9%84%D8%AA%D8%BA%D8%B0%D9%8A%D8%A9-%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%A9-1.webp',
    readTime: {
      ar: '6 دقائق قراءة',
      en: '6 min read'
    },
    featured: false
  }
];
