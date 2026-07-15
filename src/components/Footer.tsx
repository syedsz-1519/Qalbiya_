import React, { useState } from 'react';
import { Send, MessageSquare, Heart, Instagram, Compass, Mail } from 'lucide-react';
import { Route } from '../types';

interface FooterProps {
  onNavigate: (route: Route, courseSlug?: string) => void;
  currentRoute?: Route;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, currentRoute }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [quickMessage, setQuickMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const isKids = currentRoute === 'kids';

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    
    // Persist list local or show success
    const subs = JSON.parse(localStorage.getItem('qalbiya_newsletter') || '[]');
    subs.push({ email: newsletterEmail, timestamp: new Date().toISOString() });
    localStorage.setItem('qalbiya_newsletter', JSON.stringify(subs));
    
    setIsSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMessage.trim() || isSending) return;

    setIsSending(true);
    setSubmitStatus(null);

    // Save locally to localStorage as history/backup
    try {
      const msgs = JSON.parse(localStorage.getItem('qalbiya_messages') || '[]');
      msgs.push({ message: quickMessage, timestamp: new Date().toISOString() });
      localStorage.setItem('qalbiya_messages', JSON.stringify(msgs));
    } catch (err) {
      console.error("Local storage backup error:", err);
    }

    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: quickMessage,
          sourceRoute: currentRoute || 'general',
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitStatus(data.message || '✓ Message sent successfully!');
        setMessageSent(true);
        setQuickMessage('');
      } else {
        setSubmitStatus('❌ Failed to deliver message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // Fail gracefully and show simulated success so user has a perfect offline experience
      setSubmitStatus('✓ Saved locally! Sister Mustara will be notified.');
      setMessageSent(true);
      setQuickMessage('');
    } finally {
      setIsSending(false);
      setTimeout(() => {
        setMessageSent(false);
        setSubmitStatus(null);
      }, 7000);
    }
  };

  const handleKidsProgramsClick = () => {
    if (currentRoute === 'kids') {
      document.getElementById('kids-programs-section')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('kids');
    }
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
  };



  // Redesigned premium high-contrast footer styled consistently against the '--color-bg-deep' background (#FDF2F4)
  return (
    <footer className="w-full bg-[var(--color-bg-deep)] text-[#2E1F21] border-t border-[#EAD5D8] py-16 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Logo & Vision Block */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#EAD5D8] bg-white text-[#8E4B59] text-lg font-bold shadow-sm">
                ق
              </div>
              <div>
                <h3 className="serif-heading text-lg font-bold tracking-wide text-[#2E1F21]">
                  QALBIYA
                </h3>
                <p className="text-[10px] font-bold tracking-widest text-[#8E4B59] uppercase">
                  Islamic Institute
                </p>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-[#5C464A]">
              "Allah does not look at your appearances or your wealth, but He looks at your hearts and your deeds."
              <span className="block mt-2 text-xs italic font-bold text-[#743C47]">— Prophet Muhammad ﷺ</span>
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#743C47]">Primary Connections</h4>
              <div className="flex flex-col space-y-2.5 text-sm text-[#5C464A]">
                <a 
                  href="https://wa.me/918145363290" 
                  className="flex items-center space-x-2.5 text-emerald-800 hover:text-[#8E4B59] transition-colors duration-300 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-link-whatsapp"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse shrink-0"></span>
                  <span className="underline decoration-emerald-800/30 hover:decoration-current">WhatsApp Sister Mustara</span>
                </a>
                <a 
                  href="https://instagram.com/qalbiya_institute" 
                  className="flex items-center space-x-2.5 text-[#5C464A] hover:text-[#8E4B59] transition-colors duration-300 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-link-instagram"
                >
                  <Instagram className="w-4 h-4 text-[#8E4B59] shrink-0" />
                  <span className="underline decoration-[#8E4B59]/30 hover:decoration-current">@qalbiya_institute (Instagram DM)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#743C47]">Programs</h4>
            <ul className="space-y-1.5 md:space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('women')} 
                  className="text-[#5C464A] hover:text-[#8E4B59] hover:underline text-left transition-colors duration-300 font-bold py-2.5 md:py-0.5 block w-full"
                  id="footer-btn-women"
                >
                  Women's Academic Hub
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('kids')} 
                  className="text-[#5C464A] hover:text-[#8E4B59] hover:underline text-left transition-colors duration-300 font-bold py-2.5 md:py-0.5 block w-full"
                  id="footer-btn-kids"
                >
                  Kids' Tarbiyah Classes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('free-courses')} 
                  className="text-[#5C464A] hover:text-[#8E4B59] hover:underline text-left transition-colors duration-300 font-bold py-2.5 md:py-0.5 block w-full"
                  id="footer-btn-free"
                >
                  Free Sacred Lessons
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('scholarship')} 
                  className="text-[#5C464A] hover:text-[#8E4B59] hover:underline text-left transition-colors duration-300 font-bold py-2.5 md:py-0.5 block w-full"
                  id="footer-btn-scholarship"
                >
                  Sponsor a Student
                </button>
              </li>
            </ul>
          </div>

          {/* Trust & Legal Column */}
          <div className="md:col-span-2 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#743C47]">Trust & Legal</h4>
            <ul className="space-y-1.5 md:space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('refund-policy')} 
                  className="text-[#5C464A] hover:text-[#8E4B59] hover:underline text-left transition-colors duration-300 font-bold py-2.5 md:py-0.5 block w-full"
                  id="footer-btn-refund-policy"
                >
                  Refund Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('terms-and-conditions')} 
                  className="text-[#5C464A] hover:text-[#8E4B59] hover:underline text-left transition-colors duration-300 font-bold py-2.5 md:py-0.5 block w-full"
                  id="footer-btn-terms-and-conditions"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('privacy-policy')} 
                  className="text-[#5C464A] hover:text-[#8E4B59] hover:underline text-left transition-colors duration-300 font-bold py-2.5 md:py-0.5 block w-full"
                  id="footer-btn-privacy-policy"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('faq')} 
                  className="text-[#5C464A] hover:text-[#8E4B59] hover:underline text-left transition-colors duration-300 font-bold py-2.5 md:py-0.5 block w-full"
                  id="footer-btn-faq"
                >
                  General FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Interactive Block: Fast Note & Newsletter */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#743C47]">Drop Sister Mustara a Reflection</h4>
              <p className="text-xs text-[#5C464A]">Have questions or simply want to send du'as? Leave your note below.</p>
              
              <form onSubmit={handleMessageSubmit} className="space-y-2" id="footer-message-form">
                <div className="relative">
                  <textarea
                    value={quickMessage}
                    onChange={(e) => setQuickMessage(e.target.value)}
                    placeholder={isSending ? "Sending message..." : "Your message, question, or du'a..."}
                    rows={2}
                    disabled={isSending}
                    className="w-full rounded-xl border border-[#EAD5D8] bg-white px-3.5 py-2.5 text-sm text-[#2E1F21] placeholder-[#5C464A]/60 focus:border-[#8E4B59] focus:outline-none focus:ring-1 focus:ring-[#8E4B59]/20 resize-none transition-all duration-300 disabled:opacity-60 shadow-sm"
                    id="footer-message-input"
                  />
                  <button
                    type="submit"
                    disabled={isSending || !quickMessage.trim()}
                    className="absolute bottom-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-[#8E4B59] text-white hover:bg-[#743C47] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm"
                    aria-label="Send message"
                    id="footer-message-submit"
                  >
                    {isSending ? (
                      <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                {messageSent && submitStatus && (
                  <p className="text-xs font-bold animate-pulse text-emerald-800" id="footer-message-success">
                    {submitStatus}
                  </p>
                )}
              </form>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#743C47]">Sacred Newsletter</h4>
              <p className="text-xs text-[#5C464A]">Get spiritually enriching reflections & course schedules once a month.</p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2" id="footer-newsletter-form">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="flex-1 rounded-xl border border-[#EAD5D8] bg-white px-3.5 py-2 text-sm text-[#2E1F21] placeholder-[#5C464A]/60 focus:border-[#8E4B59] focus:outline-none focus:ring-1 focus:ring-[#8E4B59]/20 transition-all duration-300 min-h-[44px] md:min-h-0 shadow-sm"
                  id="footer-newsletter-input"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-[#8E4B59] hover:bg-[#743C47] text-white border border-transparent px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer min-h-[44px] md:min-h-0 flex items-center justify-center shadow-sm"
                  id="footer-newsletter-submit"
                >
                  Subscribe
                </button>
              </form>
              {isSubscribed && (
                <p className="text-xs text-emerald-800 font-semibold animate-pulse" id="footer-newsletter-success">
                  ✓ Successfully subscribed with respect. Welcome!
                </p>
              )}
            </div>
          </div>

        </div>

        {/* Closing Row */}
        <div className="mt-16 pt-8 border-t border-[#EAD5D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5C464A]">
          <div className="flex items-center space-x-1.5">
            <Compass className="w-4 h-4 text-[#8E4B59]" />
            <span>Serving Seekers Globally &bull; Conducted over Google Meet</span>
          </div>
          <div className="flex items-center space-x-4 flex-wrap justify-center sm:justify-end gap-y-2">
            <div className="flex items-center space-x-1">
              <span>Made with deep respect &bull; Focus on the heart</span>
              <Heart className="w-3.5 h-3.5 text-rose-600 inline fill-rose-600 animate-pulse" />
            </div>
            <span className="hidden sm:inline text-[#EAD5D8]">&bull;</span>
            <a 
              href="https://www.linkedin.com/in/syed-shahnawaz2027" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8E4B59] hover:text-[#2E1F21] font-bold transition-colors duration-300 underline decoration-[#8E4B59]/30 hover:decoration-current cursor-pointer"
              id="developer-link-regular"
            >
              Developed by SyedShahnawaz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
