import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, BookOpen, Heart, Info, FileText, Send, Mail, ChevronDown } from 'lucide-react';
import { Route } from '../types';
import logoImg from '../assets/images/logo.png';

interface HeaderProps {
  currentRoute: Route;
  onNavigate: (route: Route, courseSlug?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
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
              <div className="h-14 w-14 md:h-16 md:w-16 rounded-full overflow-hidden flex items-center justify-center bg-transparent transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={logoImg} 
                  alt="Qalbiya Logo" 
                  className="h-full w-full object-contain mix-blend-multiply"
                />
              </div>
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
              <>
                {/* Home Item */}
                {(() => {
                  const item = regularNavItems[0];
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
                })()}

                {/* Programs Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    className={`relative flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                      currentRoute === 'women' || currentRoute === 'kids'
                        ? 'text-accent-gold bg-panel-dark border border-accent-gold/20' 
                        : 'text-text-sage hover:text-text-cream hover:bg-panel-light/30'
                    }`}
                    id="nav-item-programs"
                  >
                    <BookOpen className={`w-4 h-4 ${currentRoute === 'women' || currentRoute === 'kids' ? 'text-accent-gold' : 'text-text-sage/70'}`} />
                    <span>Programs</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-1 w-48 rounded-xl border border-brand-border bg-panel-dark shadow-lg py-2 z-50 overflow-hidden"
                      >
                        <button
                          onClick={() => { handleNavClick('women'); setIsDropdownOpen(false); }}
                          className="flex w-full items-center px-4 py-2.5 text-sm text-text-sage hover:text-accent-gold hover:bg-panel-light/40 transition-colors cursor-pointer text-left font-medium"
                        >
                          <Heart className="w-4 h-4 mr-2 text-rose-400" />
                          <span>Women's Programs</span>
                        </button>
                        <button
                          onClick={() => { handleNavClick('kids'); setIsDropdownOpen(false); }}
                          className="flex w-full items-center px-4 py-2.5 text-sm text-text-sage hover:text-accent-gold hover:bg-panel-light/40 transition-colors cursor-pointer text-left font-medium"
                        >
                          <BookOpen className="w-4 h-4 mr-2 text-accent-gold" />
                          <span>Kids' Programs</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Remaining Items */}
                {regularNavItems.slice(1).map((item) => {
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
                })}
              </>
            )}
          </nav>

          {/* Contact CTA */}
          <div className="hidden md:flex items-center">
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
                <>
                  {/* Home Item */}
                  {(() => {
                    const item = regularNavItems[0];
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
                  })()}

                  {/* Programs Expandable Toggle */}
                  <div className="space-y-1">
                    <button
                      onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                      className={`flex w-full items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        currentRoute === 'women' || currentRoute === 'kids'
                          ? 'bg-panel-dark text-accent-gold border border-accent-gold/20' 
                          : 'text-text-sage hover:text-text-cream hover:bg-panel-light/30'
                      }`}
                      id="mobile-nav-item-programs"
                    >
                      <div className="flex items-center space-x-3">
                        <BookOpen className="w-5 h-5 text-accent-gold" />
                        <span>Programs</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-accent-gold transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isMobileDropdownOpen && (
                      <div className="pl-6 space-y-1 bg-panel-light/20 rounded-xl py-1">
                        <button
                          onClick={() => { handleNavClick('women'); setIsOpen(false); }}
                          className="flex w-full items-center px-4 py-2.5 rounded-lg text-sm font-medium text-text-sage hover:text-accent-gold transition-colors cursor-pointer text-left"
                        >
                          <Heart className="w-4 h-4 mr-2 text-rose-400" />
                          <span>Women's Programs</span>
                        </button>
                        <button
                          onClick={() => { handleNavClick('kids'); setIsOpen(false); }}
                          className="flex w-full items-center px-4 py-2.5 rounded-lg text-sm font-medium text-text-sage hover:text-accent-gold transition-colors cursor-pointer text-left"
                        >
                          <BookOpen className="w-4 h-4 mr-2 text-accent-gold" />
                          <span>Kids' Programs</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Remaining Items */}
                  {regularNavItems.slice(1).map((item) => {
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
                  })}
                </>
              )}

              <div className="pt-4 border-t border-brand-border">
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

