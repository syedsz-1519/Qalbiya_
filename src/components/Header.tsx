import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, BookOpen, Heart, Info, FileText, Send, Mail, Instagram } from 'lucide-react';
import { Route } from '../types';

interface HeaderProps {
  currentRoute: Route;
  onNavigate: (route: Route, courseSlug?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isKids = currentRoute === 'kids';

  const handleNavClick = (route: Route) => {
    onNavigate(route);
    setIsOpen(false);
  };

  const handleKidsProgramsClick = () => {
    if (currentRoute === 'kids') {
      document.getElementById('kids-programs-section')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('kids');
    }
    setIsOpen(false);
  };

  const handleKidsFAQClick = () => {
    if (currentRoute === 'kids') {
      document.getElementById('kids-admissions-cta')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('kids');
      setTimeout(() => {
        document.getElementById('kids-admissions-cta')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
    setIsOpen(false);
  };

  const kidsNavItems = [
    { label: 'Programs', onClick: handleKidsProgramsClick, isActive: currentRoute === 'kids' },
    { label: 'Free Courses', onClick: () => handleNavClick('free-courses'), isActive: currentRoute === 'free-courses' },
    { label: 'About', onClick: () => handleNavClick('about'), isActive: currentRoute === 'about' },
    { label: 'Contact', onClick: () => handleNavClick('contact'), isActive: currentRoute === 'contact' },
    { label: 'FAQ', onClick: handleKidsFAQClick, isActive: false },
  ];

  const regularNavItems = [
    { label: 'Home', onClick: () => handleNavClick('home'), isActive: currentRoute === 'home', icon: Sparkles },
    { label: "Women's Hub", onClick: () => handleNavClick('women'), isActive: currentRoute === 'women', icon: Heart },
    { label: "Kids' Hub", onClick: () => handleNavClick('kids'), isActive: currentRoute === 'kids', icon: BookOpen },
    { label: 'Free Courses', onClick: () => handleNavClick('free-courses'), isActive: currentRoute === 'free-courses', icon: Send },
    { label: 'About', onClick: () => handleNavClick('about'), isActive: currentRoute === 'about', icon: Info },
    { label: 'Scholarship', onClick: () => handleNavClick('scholarship'), isActive: currentRoute === 'scholarship', icon: FileText },
    { label: 'Contact', onClick: () => handleNavClick('contact'), isActive: currentRoute === 'contact', icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-bg-deep/80 text-text-cream transition-all duration-300 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <div 
            className="flex cursor-pointer items-center space-x-3 group"
            onClick={() => handleNavClick('home')}
            id="nav-logo"
          >
            {isKids ? (
              <h1 className="font-serif text-2.5xl font-normal italic text-accent-gold tracking-tight hover:opacity-85 transition-opacity">
                Qalbiya
              </h1>
            ) : (
              <>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent-gold/30 bg-panel-dark text-accent-gold shadow-md transition-all duration-300 group-hover:border-accent-gold group-hover:bg-panel-light">
                  <span className="serif-heading text-xl font-bold">ق</span>
                </div>
                <div>
                  <h1 className="serif-heading text-lg font-bold tracking-wide text-text-cream group-hover:text-accent-gold transition-colors duration-300">
                    QALBIYA
                  </h1>
                  <p className="text-[10px] font-medium tracking-widest text-accent-gold uppercase">
                    Islamic Institute
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {isKids ? (
              kidsNavItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer ${
                    item.isActive 
                      ? 'text-accent-gold font-semibold' 
                      : 'text-text-sage hover:text-text-cream'
                  }`}
                  id={`nav-item-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  <span>{item.label}</span>
                  {item.isActive && (
                    <motion.span 
                      layoutId="activeNavIndicatorKids" 
                      className="absolute bottom-[-20px] left-4 right-4 h-[2px] bg-accent-gold rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))
            ) : (
              regularNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.isActive;
                return (
                  <button
                    key={item.label}
                    onClick={item.onClick}
                    className={`relative flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'text-accent-gold bg-panel-dark border border-accent-gold/20' 
                        : 'text-text-sage hover:text-text-cream hover:bg-panel-light/30'
                    }`}
                    id={`nav-item-${item.label.toLowerCase().replace("'", "").replace(" ", "-")}`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-accent-gold' : 'text-text-sage/70'}`} />
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span 
                        layoutId="activeNavIndicator" 
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent-gold rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })
            )}
          </nav>

          {/* Contact CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="https://instagram.com/qalbiya_institute"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-[#EAD5D8] bg-white hover:bg-[#FAF0F2] text-[#8E4B59] hover:text-[#743C47] shadow-sm transition-all duration-300"
              title="Follow us on Instagram @qalbiya_institute"
              id="header-insta-btn"
            >
              <Instagram className="w-5 h-5" />
            </a>
            {isKids ? (
              <a 
                href="https://wa.me/918145363290?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20enrolling%20my%20child%20in%20Qalbiya%20Islamic%20Institute."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-accent-gold hover:bg-accent-gold-dark text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-300 cursor-pointer"
                id="nav-cta-enroll-now"
              >
                Enroll Now
              </a>
            ) : (
              <a 
                href="https://wa.me/918145363290?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20enrolling%20in%20Qalbiya%20Islamic%20Institute."
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-accent-gold bg-accent-gold text-bg-deep text-sm font-semibold tracking-wide shadow-md transition-all duration-300 hover:bg-transparent hover:text-accent-gold hover:shadow-lg hover:shadow-accent-gold/10"
                id="nav-cta-whatsapp"
              >
                Contact Sister Mustara
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl border border-brand-border bg-panel-dark text-text-sage hover:text-text-cream hover:bg-panel-light transition-all duration-300"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-brand-border bg-bg-deep overflow-hidden"
            id="mobile-nav-panel"
          >
            <div className="px-4 py-4 space-y-2.5">
              {isKids ? (
                kidsNavItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={item.onClick}
                    className={`flex w-full items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      item.isActive 
                        ? 'bg-panel-dark text-accent-gold border border-accent-gold/20' 
                        : 'text-text-sage hover:text-text-cream hover:bg-panel-light/30'
                    }`}
                    id={`mobile-nav-item-${item.label.toLowerCase().replace(" ", "-")}`}
                  >
                    <span>{item.label}</span>
                  </button>
                ))
              ) : (
                regularNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.isActive;
                  return (
                    <button
                      key={item.label}
                      onClick={item.onClick}
                      className={`flex w-full items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        isActive 
                          ? 'bg-panel-dark text-accent-gold border border-accent-gold/20' 
                          : 'text-text-sage hover:text-text-cream hover:bg-panel-light/30'
                      }`}
                      id={`mobile-nav-item-${item.label.toLowerCase().replace("'", "").replace(" ", "-")}`}
                    >
                      <Icon className="w-5 h-5 text-accent-gold" />
                      <span>{item.label}</span>
                    </button>
                  );
                })
              )}

              <div className="pt-4 border-t border-brand-border space-y-2.5">
                <a 
                  href="https://instagram.com/qalbiya_institute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center space-x-2 px-4 py-3 rounded-xl border border-[#EAD5D8] bg-white text-[#8E4B59] font-semibold tracking-wide text-center transition-all duration-300 hover:bg-[#FAF0F2]"
                  id="mobile-nav-cta-instagram"
                >
                  <Instagram className="w-5 h-5 shrink-0" />
                  <span>Follow @qalbiya_institute</span>
                </a>
                {isKids ? (
                  <a 
                    href="https://wa.me/918145363290?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20enrolling%20my%20child%20in%20Qalbiya%20Islamic%20Institute."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center space-x-2 px-4 py-3 rounded-full bg-accent-gold text-white font-semibold tracking-wide text-center transition-all duration-300 hover:bg-accent-gold-dark"
                    id="mobile-nav-cta-enroll"
                  >
                    <span>Enroll Now</span>
                  </a>
                ) : (
                  <a 
                    href="https://wa.me/918145363290?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20enrolling%20in%20Qalbiya%20Islamic%20Institute."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-accent-gold text-bg-deep font-semibold tracking-wide text-center transition-all duration-300 hover:bg-accent-gold-light"
                    id="mobile-nav-cta-whatsapp"
                  >
                    <span>WhatsApp Sister Mustara</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

