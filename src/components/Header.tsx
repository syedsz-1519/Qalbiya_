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
            {isKids ? (
              <a 
                href="https://wa.me/918145363290?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20enrolling%20my%20child%20in%20Qalbiya%20Islamic%20Institute."
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#EAB1BB] to-[#D4AF37] text-bg-deep text-xs font-bold uppercase tracking-widest shadow-lg shadow-accent-gold/25 transition-all duration-500 hover:shadow-accent-gold/45 hover:scale-[1.04] active:scale-[0.98] border border-white/20"
                id="nav-cta-enroll-now"
              >
                {/* Shining laser glare effect that sweeps across */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-bg-deep animate-pulse" />
                  <span>Enroll Now</span>
                </span>
              </a>
            ) : (
              <a 
                href="https://wa.me/918145363290?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20enrolling%20in%20Qalbiya%20Islamic%20Institute."
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#EAB1BB] to-[#D4AF37] text-bg-deep text-xs font-bold uppercase tracking-widest shadow-lg shadow-accent-gold/25 transition-all duration-500 hover:shadow-accent-gold/45 hover:scale-[1.04] active:scale-[0.98] border border-white/20"
                id="nav-cta-whatsapp"
              >
                {/* Shining laser glare effect that sweeps across */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-bg-deep animate-pulse" />
                  <span>Enroll Now</span>
                </span>
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

      {/* Mobile Navigation Drawer & Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-out Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 z-50 h-full w-80 max-w-[85vw] bg-bg-deep border-l border-brand-border p-6 shadow-2xl flex flex-col md:hidden overflow-y-auto"
              id="mobile-nav-drawer"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-brand-border">
                <div 
                  className="flex items-center space-x-2.5 cursor-pointer"
                  onClick={() => {
                    handleNavClick('home');
                    setIsOpen(false);
                  }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-gold/30 bg-panel-dark text-accent-gold shadow-md">
                    <span className="serif-heading text-lg font-bold">ق</span>
                  </div>
                  <div>
                    <h2 className="serif-heading text-xs font-black tracking-wider text-text-cream">
                      QALBIYA
                    </h2>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg border border-brand-border bg-panel-dark text-text-sage hover:text-text-cream hover:bg-panel-light transition-all duration-300 cursor-pointer"
                  id="mobile-drawer-close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="flex-1 py-6 space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-sage/40 px-3 pb-2">
                  Navigation Menu
                </p>
                {isKids ? (
                  kidsNavItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={item.onClick}
                      className={`flex w-full items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                        item.isActive 
                          ? 'bg-panel-dark text-accent-gold border border-accent-gold/20 font-semibold shadow-inner' 
                          : 'text-text-sage hover:text-text-cream hover:bg-panel-light/20'
                      }`}
                      id={`drawer-nav-item-${item.label.toLowerCase().replace(" ", "-")}`}
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
                        className={`flex w-full items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                          isActive 
                            ? 'bg-panel-dark text-accent-gold border border-accent-gold/20 font-semibold shadow-inner' 
                            : 'text-text-sage hover:text-text-cream hover:bg-panel-light/20'
                        }`}
                        id={`drawer-nav-item-${item.label.toLowerCase().replace("'", "").replace(" ", "-")}`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-accent-gold' : 'text-text-sage/60'}`} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Drawer Footer & Call to Action */}
              <div className="pt-6 border-t border-brand-border space-y-4">
                <p className="text-[10px] text-center font-bold tracking-widest text-accent-gold/50 uppercase">
                  Qalbiya Islamic Institute
                </p>
                {isKids ? (
                  <a 
                    href="https://wa.me/918145363290?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20enrolling%20my%20child%20in%20Qalbiya%20Islamic%20Institute."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center space-x-2 px-4 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#EAB1BB] to-[#D4AF37] text-bg-deep text-xs font-bold uppercase tracking-widest text-center transition-all duration-300 shadow-lg active:scale-95 border border-white/20"
                    id="drawer-nav-cta-enroll"
                  >
                    <Sparkles className="w-4 h-4 shrink-0 text-bg-deep animate-pulse" />
                    <span>Enroll Now</span>
                  </a>
                ) : (
                  <a 
                    href="https://wa.me/918145363290?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20enrolling%20in%20Qalbiya%20Islamic%20Institute."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center space-x-2 px-4 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#EAB1BB] to-[#D4AF37] text-bg-deep text-xs font-bold uppercase tracking-widest text-center transition-all duration-300 shadow-lg active:scale-95 border border-white/20"
                    id="drawer-nav-cta-whatsapp"
                  >
                    <Sparkles className="w-4 h-4 shrink-0 text-bg-deep animate-pulse" />
                    <span>Enroll Now</span>
                  </a>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

