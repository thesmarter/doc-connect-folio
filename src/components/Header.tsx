import { useState } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = content[language];
  const location = useLocation();

  const navItems = [
    { label: t.nav.home, href: '#home', type: 'scroll' },
    { label: t.nav.about, href: '#experience', type: 'scroll' },
    { label: t.nav.services, href: '#services', type: 'scroll' },
    { label: t.nav.testimonials, href: '#testimonials', type: 'scroll' },
    { label: t.nav.contact, href: '#contact', type: 'scroll' },
    { label: t.nav.blog, href: '/blog', type: 'link' }
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.type === 'scroll') {
      // Only scroll if we're on the home page
      if (location.pathname === '/') {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home page with hash
        window.location.href = `/${item.href}`;
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="medical-icon">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold text-xl text-foreground">د. أحمد علي</h2>
              <p className="text-sm text-muted-foreground">استشاري طب باطني</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item)}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <LanguageToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.type === 'link' ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item)}
                    className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};