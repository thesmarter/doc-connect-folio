import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';

export const Testimonials = () => {
  const { language } = useLanguage();
  const t = content[language];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = t.testimonials.list;
  const totalSlides = testimonials.length;

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, i) => (
      <Star key={i} className="w-4 h-4 text-accent fill-current" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-light/10 to-secondary-light/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-header">{t.testimonials.title}</h2>
          <p className="section-subheader">{t.testimonials.subtitle}</p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonials Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="medical-card mx-auto max-w-2xl text-center">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="medical-icon">
                        <Quote className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Comment */}
                    <blockquote className="text-muted-foreground text-lg leading-relaxed mb-8 italic">
                      "{testimonial.comment}"
                    </blockquote>

                    {/* Patient Info */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary p-0.5">
                        <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                          <span className="text-primary font-bold text-xl">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                        <p className="text-muted-foreground">{testimonial.condition}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 medical-icon hover:scale-110 transition-all duration-300 shadow-medical"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 medical-icon hover:scale-110 transition-all duration-300 shadow-medical"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary scale-125 shadow-glow'
                  : 'bg-muted hover:bg-primary/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">5000+</p>
            <p className="text-muted-foreground">
              {language === 'ar' ? 'مريض راضي' : 'Happy Patients'}
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">15+</p>
            <p className="text-muted-foreground">
              {language === 'ar' ? 'سنة خبرة' : 'Years Experience'}
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">98%</p>
            <p className="text-muted-foreground">
              {language === 'ar' ? 'نسبة الرضا' : 'Satisfaction Rate'}
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">24/7</p>
            <p className="text-muted-foreground">
              {language === 'ar' ? 'دعم طبي' : 'Medical Support'}
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6 text-lg">
            {language === 'ar' 
              ? 'انضم إلى آلاف المرضى الراضين عن خدماتنا'
              : 'Join thousands of satisfied patients who trust our services'
            }
          </p>
          <button
            onClick={() => {
              const phone = '+966501234567';
              const message = language === 'ar' 
                ? 'مرحباً، أود حجز موعد للكشف الطبي'
                : 'Hello, I would like to book a medical appointment';
              
              const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="btn-medical text-lg px-8 py-4"
          >
            {language === 'ar' ? 'احجز موعدك الآن' : 'Book Your Appointment Now'}
          </button>
        </div>
      </div>
    </section>
  );
};