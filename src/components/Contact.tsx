import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { toast } from 'sonner';
import clinicImg from '@/assets/clinic-interior.jpg';

export const Contact = () => {
  const { language } = useLanguage();
  const t = content[language];
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSend = () => {
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error(language === 'ar' ? 'يرجى ملء جميع الحقول' : 'Please fill all fields');
      return;
    }

    const phone = '+966501234567';
    const message = language === 'ar' 
      ? `مرحباً، اسمي ${formData.name}\nرقم هاتفي: ${formData.phone}\n\nرسالتي:\n${formData.message}`
      : `Hello, my name is ${formData.name}\nMy phone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Clear form
    setFormData({ name: '', phone: '', message: '' });
    toast.success(language === 'ar' ? 'تم إرسال الرسالة' : 'Message sent successfully');
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-header">{t.contact.title}</h2>
          <p className="section-subheader">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="medical-card">
            <h3 className="text-2xl font-bold mb-6 text-foreground">{t.contact.form.title}</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="medical-input"
                  placeholder={t.contact.form.name}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="medical-input"
                  placeholder={t.contact.form.phone}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="medical-textarea"
                  placeholder={t.contact.form.message}
                />
              </div>

              <button
                onClick={handleWhatsAppSend}
                className="btn-medical w-full text-lg gap-3"
              >
                <Send className="w-5 h-5" />
                {t.contact.form.send}
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="medical-card">
              <h3 className="text-2xl font-bold mb-6 text-foreground">{t.contact.info.title}</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="medical-icon">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{language === 'ar' ? 'هاتف' : 'Phone'}</p>
                    <p className="text-muted-foreground">{t.contact.info.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="medical-icon bg-gradient-to-br from-secondary-light to-secondary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{language === 'ar' ? 'بريد إلكتروني' : 'Email'}</p>
                    <p className="text-muted-foreground">{t.contact.info.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="medical-icon bg-gradient-to-br from-accent-light to-accent">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{language === 'ar' ? 'العنوان' : 'Address'}</p>
                    <p className="text-muted-foreground">{t.contact.info.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="medical-icon bg-gradient-to-br from-primary-glow to-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{language === 'ar' ? 'ساعات العمل' : 'Working Hours'}</p>
                    <p className="text-muted-foreground">{t.contact.info.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Image */}
            <div className="medical-card p-0 overflow-hidden">
              <img 
                src={clinicImg} 
                alt="Clinic Interior"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="font-semibold text-foreground mb-2">
                  {language === 'ar' ? 'عيادة حديثة ومجهزة' : 'Modern & Equipped Clinic'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'ar' 
                    ? 'عيادة مجهزة بأحدث الأجهزة الطبية وبيئة مريحة للمرضى'
                    : 'Clinic equipped with latest medical devices and comfortable environment for patients'
                  }
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="medical-card">
              <div className="aspect-video bg-gradient-to-br from-muted to-primary/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="text-muted-foreground">
                    {language === 'ar' ? 'خريطة الموقع' : 'Location Map'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};