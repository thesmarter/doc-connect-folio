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
  },

  // مقال طب النساء والولادة
  {
    id: '4',
    slug: 'pregnancy-care-guide',
    title: {
      ar: 'دليل شامل للعناية أثناء الحمل',
      en: 'Comprehensive Pregnancy Care Guide'
    },
    excerpt: {
      ar: 'تعرفي على أهم النصائح والإرشادات للعناية بصحتك وصحة جنينك أثناء فترة الحمل.',
      en: 'Learn essential tips and guidelines for taking care of your health and your baby\'s health during pregnancy.'
    },
    content: {
      ar: `
# دليل شامل للعناية أثناء الحمل

فترة الحمل من أهم المراحل في حياة المرأة، وتتطلب عناية خاصة ومتابعة دقيقة لضمان صحة الأم والجنين.

## النصائح الأساسية للحمل الصحي:

### 1. التغذية السليمة
- تناولي الأطعمة الغنية بالفيتامينات والمعادن
- احرصي على تناول حمض الفوليك
- تجنبي الأطعمة النيئة والمصنعة

### 2. المتابعة الطبية المنتظمة
- زيارة الطبيب شهرياً في الثلث الأول
- إجراء الفحوصات اللازمة في مواعيدها
- متابعة نمو الجنين بالسونار

### 3. النشاط البدني المناسب
- ممارسة الرياضة الخفيفة
- تمارين التنفس والاسترخاء
- تجنب الأنشطة الخطيرة

## الخلاصة

العناية الصحيحة أثناء الحمل تضمن ولادة آمنة وطفل صحي.
      `,
      en: `
# Comprehensive Pregnancy Care Guide

Pregnancy is one of the most important stages in a woman's life, requiring special care and careful monitoring to ensure the health of both mother and baby.

## Essential Tips for Healthy Pregnancy:

### 1. Proper Nutrition
- Eat foods rich in vitamins and minerals
- Make sure to take folic acid
- Avoid raw and processed foods

### 2. Regular Medical Follow-up
- Visit your doctor monthly in the first trimester
- Perform necessary tests on schedule
- Monitor fetal growth with ultrasound

### 3. Appropriate Physical Activity
- Practice light exercise
- Breathing and relaxation exercises
- Avoid dangerous activities

## Conclusion

Proper care during pregnancy ensures safe delivery and a healthy baby.
      `
    },
    author: {
      name: {
        ar: 'د. فاطمة أحمد السالم',
        en: 'Dr. Fatima Ahmed Al-Salem'
      },
      title: {
        ar: 'استشارية طب النساء والولادة',
        en: 'Consultant Gynecologist & Obstetrician'
      },
      image: '/src/assets/doctor-hero.jpg'
    },
    publishedAt: '2024-12-01',
    updatedAt: '2024-12-01',
    category: {
      ar: 'طب النساء والولادة',
      en: 'Gynecology & Obstetrics'
    },
    tags: {
      ar: ['الحمل', 'العناية الصحية', 'صحة المرأة'],
      en: ['Pregnancy', 'Healthcare', 'Women\'s Health']
    },
    image: 'https://files1.24.ae/files/images/herthealth.jpg',
    readTime: {
      ar: '6 دقائق قراءة',
      en: '6 min read'
    },
    featured: false
  },

  // مقال طب الأطفال
  {
    id: '5',
    slug: 'child-vaccination-guide',
    title: {
      ar: 'دليل التطعيمات الأساسية للأطفال',
      en: 'Essential Vaccination Guide for Children'
    },
    excerpt: {
      ar: 'تعرف على جدول التطعيمات الأساسية للأطفال وأهميتها في الوقاية من الأمراض.',
      en: 'Learn about the essential vaccination schedule for children and their importance in disease prevention.'
    },
    content: {
      ar: `
# دليل التطعيمات الأساسية للأطفال

التطعيمات من أهم وسائل الوقاية من الأمراض المعدية عند الأطفال، وتساعد في بناء مناعة قوية.

## جدول التطعيمات الأساسية:

### من الولادة حتى 6 أشهر
- تطعيم الدرن (BCG) عند الولادة
- تطعيم شلل الأطفال في الشهر الثاني
- التطعيم الخماسي في الشهرين الثاني والرابع

### من 6 أشهر حتى سنتين
- تطعيم الحصبة في الشهر التاسع
- تطعيم MMR في السنة الأولى
- جرعات تنشيطية حسب الجدول

### أهمية التطعيمات
- حماية من الأمراض الخطيرة
- بناء مناعة المجتمع
- تقليل معدلات الوفيات

## الخلاصة

الالتزام بجدول التطعيمات يضمن صحة أفضل لطفلك ومجتمعك.
      `,
      en: `
# Essential Vaccination Guide for Children

Vaccinations are among the most important means of preventing infectious diseases in children and help build strong immunity.

## Essential Vaccination Schedule:

### Birth to 6 Months
- BCG vaccination at birth
- Polio vaccination at 2 months
- Pentavalent vaccine at 2 and 4 months

### 6 Months to 2 Years
- Measles vaccination at 9 months
- MMR vaccination in the first year
- Booster doses according to schedule

### Importance of Vaccinations
- Protection from serious diseases
- Building community immunity
- Reducing mortality rates

## Conclusion

Following the vaccination schedule ensures better health for your child and community.
      `
    },
    author: {
      name: {
        ar: 'د. محمد عبدالله الخالدي',
        en: 'Dr. Mohammed Abdullah Al-Khalidi'
      },
      title: {
        ar: 'استشاري طب الأطفال وحديثي الولادة',
        en: 'Consultant Pediatrician & Neonatologist'
      },
      image: '/src/assets/doctor-hero.jpg'
    },
    publishedAt: '2024-11-28',
    updatedAt: '2024-11-28',
    category: {
      ar: 'طب الأطفال',
      en: 'Pediatrics'
    },
    tags: {
      ar: ['التطعيمات', 'صحة الأطفال', 'الوقاية'],
      en: ['Vaccinations', 'Child Health', 'Prevention']
    },
    image: '/src/assets/doctor-hero.jpg',
    readTime: {
      ar: '5 دقائق قراءة',
      en: '5 min read'
    },
    featured: false
  },

  // مقال طب الأسنان
  {
    id: '6',
    slug: 'dental-care-tips',
    title: {
      ar: 'نصائح العناية بالأسنان للحصول على ابتسامة صحية',
      en: 'Dental Care Tips for a Healthy Smile'
    },
    excerpt: {
      ar: 'اكتشف أفضل الطرق للعناية بأسنانك والحفاظ على صحة الفم والأسنان.',
      en: 'Discover the best ways to care for your teeth and maintain oral and dental health.'
    },
    content: {
      ar: `
# نصائح العناية بالأسنان للحصول على ابتسامة صحية

العناية بالأسنان جزء أساسي من الصحة العامة، وتتطلب اهتماماً يومياً ومتابعة دورية.

## أساسيات العناية بالأسنان:

### 1. التنظيف اليومي
- اغسل أسنانك مرتين يومياً بالفرشاة والمعجون
- استخدم خيط الأسنان لإزالة البقايا
- اشطف فمك بغسول الفم المناسب

### 2. النظام الغذائي الصحي
- قلل من السكريات والحلويات
- تناول الأطعمة الغنية بالكالسيوم
- اشرب الماء بكثرة

### 3. الزيارات الدورية
- زر طبيب الأسنان كل 6 أشهر
- لا تؤجل علاج المشاكل البسيطة
- اطلب تنظيف الأسنان المهني

### 4. تجنب العادات الضارة
- لا تستخدم أسنانك لفتح الأشياء
- تجنب التدخين
- قلل من المشروبات الملونة

## الخلاصة

العناية المنتظمة بالأسنان تضمن ابتسامة صحية وجميلة مدى الحياة.
      `,
      en: `
# Dental Care Tips for a Healthy Smile

Dental care is an essential part of overall health, requiring daily attention and regular follow-up.

## Dental Care Basics:

### 1. Daily Cleaning
- Brush your teeth twice daily with toothbrush and toothpaste
- Use dental floss to remove debris
- Rinse your mouth with appropriate mouthwash

### 2. Healthy Diet
- Reduce sugars and sweets
- Eat foods rich in calcium
- Drink plenty of water

### 3. Regular Visits
- Visit your dentist every 6 months
- Don't postpone treating simple problems
- Request professional teeth cleaning

### 4. Avoid Harmful Habits
- Don't use your teeth to open things
- Avoid smoking
- Reduce colored beverages

## Conclusion

Regular dental care ensures a healthy and beautiful smile for life.
      `
    },
    author: {
      name: {
        ar: 'د. أحمد عبدالرحمن النجار',
        en: 'Dr. Ahmed Abdulrahman Al-Najjar'
      },
      title: {
        ar: 'استشارية طب الأسنان والتقويم',
        en: 'Consultant Dentist & Orthodontist'
      },
      image: '/src/assets/doctor-hero.jpg'
    },
    publishedAt: '2024-11-25',
    updatedAt: '2024-11-25',
    category: {
      ar: 'طب الأسنان والتقويم',
      en: 'Dentistry & Orthodontics'
    },
    tags: {
      ar: ['العناية بالأسنان', 'صحة الفم', 'الوقاية'],
      en: ['Dental Care', 'Oral Health', 'Prevention']
    },
    image: 'https://thaat.co/wp-content/uploads/2024/11/%D8%A7%D9%84%D8%AA%D8%BA%D8%B0%D9%8A%D8%A9-%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%A9-1.webp',
    readTime: {
      ar: '7 دقائق قراءة',
      en: '7 min read'
    },
    featured: false
  }
];
