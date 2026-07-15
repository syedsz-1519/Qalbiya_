import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Heart, BookOpen, Sparkles, MessageCircle, Info, ShieldCheck, Instagram, MessageSquare, ArrowRight, Quote } from 'lucide-react';
import { Course, Route } from '../types';
import { CourseCard } from './CourseCard';

import onlineLearningImg from '../assets/images/online_learning_tablet_1784039716228.jpg';
import quranRehalImg from '../assets/images/quran_rehal_arched_window_1784016809949.jpg';

interface ProgramsHubProps {
  category: 'women' | 'kids';
  courses: Course[];
  onSelectCourse: (slug: string) => void;
  onNavigate: (route: Route) => void;
}

export const ProgramsHub: React.FC<ProgramsHubProps> = ({ 
  category, 
  courses, 
  onSelectCourse,
  onNavigate 
}) => {
  const filteredCourses = courses.filter(c => c.category === category);
  const coursesRef = useRef<HTMLDivElement>(null);

  const scrollToCourses = () => {
    coursesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (category === 'kids') {
    return (
      <div className="bg-bg-deep text-text-cream min-h-screen pb-12 transition-colors duration-300">
        
        {/* Hub Hero Banner */}
        <section className="text-center pt-10 pb-6 px-4 space-y-4" id="kids-hub-hero">
          <span className="font-sans text-[11px] font-extrabold tracking-[0.18em] uppercase text-text-sage mb-2 block">
            NURTURING THE NEXT GENERATION
          </span>

          <h1 className="serif-heading text-3.5xl sm:text-4.5xl md:text-5.5xl font-normal leading-tight text-text-cream max-w-3xl mx-auto tracking-tight">
            Raise a child who doesn't just know their deen — who loves it.
          </h1>
          
          <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-text-sage">
            Age-appropriate, structured, and rooted in authentic teaching — built for children ages 6–12.
          </p>

          <div className="pt-4">
            <button
              onClick={scrollToCourses}
              className="bg-accent-gold hover:bg-accent-gold-dark text-white font-sans text-xs sm:text-sm font-semibold px-6 py-3.5 sm:py-3 rounded-full inline-flex items-center space-x-2 shadow-sm hover:shadow transition-all duration-300 cursor-pointer"
              id="kids-hero-view-programs-btn"
            >
              <span>View Programs</span>
              <span className="text-[14px] font-bold">↓</span>
            </button>
          </div>
        </section>

        {/* Dynamic Dual Programs Grid */}
        <section ref={coursesRef} className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 scroll-mt-20" id="kids-programs-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Juniors Deeniyat Mastercourse */}
            <div 
              onClick={() => onSelectCourse('juniors-deeniyat-mastercourse')}
              className="bg-panel-dark border border-brand-border rounded-2xl p-8 sm:p-9 flex flex-col justify-between relative overflow-hidden h-full min-h-[440px] cursor-pointer shadow-sm hover:shadow-md hover:border-accent-gold/40 transition-all duration-300 group"
              id="kids-course-card-deeniyat"
            >
              <div>
                {/* Badges */}
                <div className="flex items-center space-x-3 mb-8">
                  <span className="bg-accent-gold-light text-accent-gold-dark font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-md">
                    1.5-2 YEARS
                  </span>
                  <span className="text-accent-gold font-bold text-[10px] tracking-[0.15em] uppercase">
                    FLAGSHIP PROGRAM
                  </span>
                </div>

                {/* Heading */}
                <h2 className="serif-heading text-2xl sm:text-3xl font-medium text-text-cream mb-4 group-hover:text-accent-gold transition-colors duration-300">
                  Juniors Deeniyat Mastercourse
                </h2>

                {/* Paragraph */}
                <p className="text-text-sage text-sm leading-relaxed max-w-sm">
                  A complete Islamic foundation, built to last a lifetime. From foundational Aqeedah to the beauty of Akhlaq.
                </p>
              </div>

              {/* Watermark SVG Islamic Arch */}
              <div className="absolute bottom-0 right-0 h-44 w-44 text-brand-border opacity-45 pointer-events-none translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M50,10 C45,35 25,45 25,75 L25,95 L75,95 L75,75 C75,45 55,35 50,10 Z" />
                  <path d="M35,95 L35,80 C35,70 65,70 65,80 L65,95" />
                  <path d="M50,10 L50,5" strokeWidth="1"/>
                  <circle cx="50" cy="3" r="1" fill="currentColor"/>
                </svg>
              </div>

              <div className="mt-12 z-10">
                {/* Divider */}
                <div className="border-t border-dashed border-brand-border pt-6 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-extrabold tracking-widest text-text-sage block mb-1">
                      MONTHLY INVESTMENT
                    </span>
                    <span className="serif-heading text-xl font-bold text-text-cream">
                      From Rs. 600
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCourse('juniors-deeniyat-mastercourse');
                    }}
                    className="bg-accent-gold hover:bg-accent-gold-dark text-white text-xs font-semibold px-5 py-3.5 sm:py-2.5 rounded-full shadow-sm transition-all duration-300 cursor-pointer"
                  >
                    Reserve Spot
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Noorani Qaida (Kids') */}
            <div 
              onClick={() => onSelectCourse('noorani-qaida-kids')}
              className="bg-panel-dark border border-brand-border rounded-2xl overflow-hidden h-full flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-md hover:border-accent-gold/40 transition-all duration-300 group"
              id="kids-course-card-qaida"
            >
              {/* Image at top */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden">
                <img 
                  src={quranRehalImg} 
                  alt="Noorani Qaida Qur'an Stand" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content padding */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  {/* Badges */}
                  <span className="bg-accent-gold-light text-accent-gold-dark font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-md mb-5 inline-block">
                    4-5 MONTHS
                  </span>

                  {/* Title */}
                  <h2 className="serif-heading text-xl sm:text-2xl font-medium text-text-cream mb-3 group-hover:text-accent-gold transition-colors duration-300">
                    Noorani Qaida (Kids')
                  </h2>

                  {/* Paragraph */}
                  <p className="text-text-sage text-xs sm:text-sm leading-relaxed mb-6">
                    The first step to reading Qur'an. Master Tajweed basics through a nurturing, patient-first approach.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-brand-border pt-5 mt-4">
                  <span className="serif-heading text-base font-bold text-text-cream">
                    Rs. 500/mo
                  </span>

                  <span className="text-accent-gold group-hover:text-accent-gold-dark text-xs font-bold flex items-center space-x-1 transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Social Proof / Testimonials */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10" id="kids-social-proof">
          <div className="rounded-3xl border border-brand-border bg-panel-light/40 py-10 px-6 sm:px-10 text-center space-y-8 shadow-sm">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-gold flex items-center justify-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-accent-gold" /> Trusted globally
              </span>
              <h2 className="serif-heading text-2xl sm:text-3xl font-bold text-text-cream">
                Trusted by 300+ students on their journey back to their deen.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto pt-2">
              
              {/* Testimony 1 */}
              <div className="bg-panel-dark border border-brand-border rounded-2xl p-6 space-y-4 shadow-sm hover:border-accent-gold/20 transition-colors flex flex-col justify-between">
                <div className="space-y-3">
                  <Quote className="w-8 h-8 text-accent-gold/10" />
                  <p className="text-xs sm:text-sm italic text-text-sage leading-relaxed">
                    "Sister Mustara created a space so warm and gentle that I actually looked forward to making mistakes because of how lovingly she guided me to fix them. My recitation has completely changed."
                  </p>
                </div>
                <div className="pt-3 border-t border-brand-border/60 mt-4">
                  <p className="text-xs font-bold text-text-cream">Sister Aisha, Delhi</p>
                  <p className="text-[10px] text-accent-gold uppercase tracking-wider font-semibold">Tajweed 1:1 Graduate</p>
                </div>
              </div>

              {/* Testimony 2 */}
              <div className="bg-panel-dark border border-brand-border rounded-2xl p-6 space-y-4 shadow-sm hover:border-accent-gold/20 transition-colors flex flex-col justify-between">
                <div className="space-y-3">
                  <Quote className="w-8 h-8 text-accent-gold/10" />
                  <p className="text-xs sm:text-sm italic text-text-sage leading-relaxed">
                    "The storyteller style and emphasis on loving Allah has changed our home. My 8-year-old son now reads his daily duas entirely on his own without any reminders."
                  </p>
                </div>
                <div className="pt-3 border-t border-brand-border/60 mt-4">
                  <p className="text-xs font-bold text-text-cream">Suhail, Parent of Farhan</p>
                  <p className="text-[10px] text-accent-gold uppercase tracking-wider font-semibold">Kids' Deeniyat Graduate</p>
                </div>
              </div>

              {/* Testimony 3 */}
              <div className="bg-panel-dark border border-brand-border rounded-2xl p-6 space-y-4 shadow-sm hover:border-accent-gold/20 transition-colors flex flex-col justify-between">
                <div className="space-y-3">
                  <Quote className="w-8 h-8 text-accent-gold/10" />
                  <p className="text-xs sm:text-sm italic text-text-sage leading-relaxed">
                    "This was not a history class — it was a spiritual hospital. It reshaped my marriage, my parenting, and how I treat my parents. I finally understand what character (akhlaq) means."
                  </p>
                </div>
                <div className="pt-3 border-t border-brand-border/60 mt-4">
                  <p className="text-xs font-bold text-text-cream">Sister Maryam, London</p>
                  <p className="text-[10px] text-accent-gold uppercase tracking-wider font-semibold">Seerah Course Graduate</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 mt-12" id="kids-approach-section">
          <div className="bg-panel-light/60 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-14 border border-brand-border">
            
            {/* Left Column: Text */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="serif-heading text-2.5xl sm:text-3.5xl font-normal leading-tight text-text-cream">
                Our Approach: Sacred Learning
              </h2>
              
              <p className="text-text-sage text-sm sm:text-base leading-relaxed">
                We believe children learn best when they feel safe and loved. Our classes are designed to be conversational, respectful, and deeply engaging, avoiding the rigid structures of traditional schooling.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-gold-light text-accent-gold-dark">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-text-sage font-medium leading-relaxed">
                    Small class sizes for individual attention
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-gold-light text-accent-gold-dark">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-text-sage font-medium leading-relaxed">
                    Interactive storytelling & visual aids
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Browser-Style Mockup */}
            <div className="md:w-1/2 w-full">
              <div className="rounded-2xl border border-brand-border bg-panel-dark p-2 sm:p-3 shadow-md">
                
                {/* Browser Window Header Mockup */}
                <div className="flex items-center space-x-2 px-3 pb-2.5 border-b border-brand-border/40">
                  <div className="flex space-x-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="bg-panel-light text-center py-0.5 rounded-md flex-1 text-[10px] text-text-sage truncate font-medium max-w-[240px] mx-auto">
                    Kids' Programs Hub — Qalbiya
                  </div>
                  <div className="w-10 shrink-0" /> {/* Spacer for balance */}
                </div>

                {/* The beautifully generated image inside the frame */}
                <div className="overflow-hidden rounded-xl mt-3">
                  <img 
                    src={onlineLearningImg} 
                    alt="Online Learning Illustration" 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Admissions Dotted Box Card */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 py-12 mt-12" id="kids-admissions-cta">
          <div className="border border-dashed border-brand-border rounded-3xl p-8 sm:p-12 text-center bg-panel-light/50 backdrop-blur-sm shadow-sm">
            <h2 className="serif-heading text-xl sm:text-2xl font-bold text-text-cream leading-relaxed mb-4 max-w-2xl mx-auto">
              Give your child a foundation that grows with them — in knowledge, in akhlaq, in love for their deen.
            </h2>
            
            <p className="font-sans text-xs sm:text-sm text-text-sage max-w-lg mx-auto mb-8 leading-relaxed">
              Our admissions are open year-round for new cohorts. Start their journey today.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              {/* WhatsApp Us */}
              <a 
                href="https://wa.me/918145363290?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20enrolling%20my%20child%20in%20Qalbiya%20Islamic%20Institute."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#12D164] hover:bg-[#0FB856] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full inline-flex items-center space-x-2 shadow-sm transition-all duration-300 cursor-pointer w-full sm:w-auto justify-center"
                id="kids-cta-whatsapp"
              >
                <MessageSquare className="w-4 h-4 fill-white text-[#12D164]" />
                <span>WhatsApp Us</span>
              </a>

              {/* DM on Instagram */}
              <a 
                href="https://instagram.com/qalbiya_institute"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-panel-dark hover:bg-panel-light text-text-cream border border-brand-border text-xs sm:text-sm font-semibold px-6 py-3 rounded-full inline-flex items-center space-x-2 shadow-sm transition-all duration-300 cursor-pointer w-full sm:w-auto justify-center"
                id="kids-cta-instagram"
              >
                <Instagram className="w-4 h-4 text-[#D82D7E]" />
                <span>DM on Instagram</span>
              </a>
            </div>

            <span className="font-sans text-[11px] italic text-text-sage leading-relaxed max-w-md mx-auto block">
              "The best gift a parent can give their child is a good upbringing."
            </span>
          </div>
        </section>

      </div>
    );
  }

  // Fallback to Women's Hub Layout (Dark, Classic style)
  return (
    <div className="space-y-12 pb-12">
      
      {/* Hub Hero Banner */}
      <section className="text-center space-y-3 pt-6" id="hub-hero">
        <div className="inline-flex items-center space-x-2 rounded-full border border-accent-gold/20 bg-panel-dark px-4.5 py-1.5 text-xs font-semibold text-accent-gold tracking-wide">
          <Heart className="w-3.5 h-3.5 text-rose-400" />
          <span>Sisters Academic Circles</span>
        </div>

        <h1 className="serif-heading text-3.5xl sm:text-4.5xl md:text-5.5xl font-bold text-text-cream tracking-tight max-w-3xl mx-auto leading-tight">
          Every woman's journey back to Allah looks different. Here's yours.
        </h1>
        
        <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-text-sage">
          Whether you're correcting your recitation, healing your character, or building your foundation from the ground up — there's a program made for exactly where you are.
        </p>

        {/* Swapper between Hubs */}
        <div className="flex justify-center gap-4 pt-4">
          <button
            onClick={() => onNavigate('kids')}
            className="inline-flex items-center space-x-2 rounded-xl border border-brand-border bg-panel-dark px-4.5 py-3.5 sm:py-2.5 text-xs font-bold uppercase tracking-wider text-text-cream hover:border-accent-gold/40 hover:bg-panel-light transition-all duration-300 cursor-pointer"
            id="hub-toggle-btn"
          >
            <span>Switch to Kids' Tarbiyah Hub</span>
          </button>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10" id="hub-courses-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredCourses.map((course) => (
            <CourseCard 
              key={course.slug} 
              course={course} 
              onSelect={onSelectCourse} 
            />
          ))}
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" id="hub-social-proof">
        <div className="rounded-3xl border border-brand-border bg-panel-dark/50 py-10 px-6 sm:px-10 text-center space-y-8 shadow-lg">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-gold flex items-center justify-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-400" /> Trusted globally
            </span>
            <h2 className="serif-heading text-2xl sm:text-3xl font-bold text-text-cream">
              Trusted by 300+ students on their journey back to their deen.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto pt-2">
            
            {/* Testimony 1 */}
            <div className="bg-panel-dark/80 border border-brand-border/60 rounded-2xl p-6 space-y-4 shadow-sm hover:border-accent-gold/20 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <Quote className="w-8 h-8 text-accent-gold/10" />
                <p className="text-xs sm:text-sm italic text-text-sage leading-relaxed">
                  "Sister Mustara created a space so warm and gentle that I actually looked forward to making mistakes because of how lovingly she guided me to fix them. My recitation has completely changed."
                </p>
              </div>
              <div className="pt-3 border-t border-brand-border/30 mt-4">
                <p className="text-xs font-bold text-text-cream">Sister Aisha, Delhi</p>
                <p className="text-[10px] text-accent-gold uppercase tracking-wider font-semibold">Tajweed 1:1 Graduate</p>
              </div>
            </div>

            {/* Testimony 2 */}
            <div className="bg-panel-dark/80 border border-brand-border/60 rounded-2xl p-6 space-y-4 shadow-sm hover:border-accent-gold/20 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <Quote className="w-8 h-8 text-accent-gold/10" />
                <p className="text-xs sm:text-sm italic text-text-sage leading-relaxed">
                  "The storyteller style and emphasis on loving Allah has changed our home. My 8-year-old son now reads his daily duas entirely on his own without any reminders."
                </p>
              </div>
              <div className="pt-3 border-t border-brand-border/30 mt-4">
                <p className="text-xs font-bold text-text-cream">Suhail, Parent of Farhan</p>
                <p className="text-[10px] text-accent-gold uppercase tracking-wider font-semibold">Kids' Deeniyat Graduate</p>
              </div>
            </div>

            {/* Testimony 3 */}
            <div className="bg-panel-dark/80 border border-brand-border/60 rounded-2xl p-6 space-y-4 shadow-sm hover:border-accent-gold/20 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <Quote className="w-8 h-8 text-accent-gold/10" />
                <p className="text-xs sm:text-sm italic text-text-sage leading-relaxed">
                  "This was not a history class — it was a spiritual hospital. It reshaped my marriage, my parenting, and how I treat my parents. I finally understand what character (akhlaq) means."
                </p>
              </div>
              <div className="pt-3 border-t border-brand-border/30 mt-4">
                <p className="text-xs font-bold text-text-cream">Sister Maryam, London</p>
                <p className="text-[10px] text-accent-gold uppercase tracking-wider font-semibold">Seerah Course Graduate</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sincerity Banner */}
      <section className="mx-auto max-w-4xl px-4 text-center space-y-12" id="hub-sincerity">
        <div className="p-8 rounded-3xl border border-brand-border bg-panel-dark/40">
          <h3 className="serif-heading text-xl font-bold text-text-cream">Need Financial Accommodation?</h3>
          <p className="text-xs text-text-sage mt-2 max-w-xl mx-auto leading-relaxed">
            Allah sees your intention. If your family is facing hardship, or if you can only afford a partial contribution, please do not hesitate to apply for a scholarship. We offer full and partial sponsorships securely and confidentially.
          </p>
          <button
            onClick={() => onNavigate('scholarship')}
            className="mt-4 rounded-xl border border-accent-gold/40 hover:bg-accent-gold text-accent-gold hover:text-bg-deep px-5 py-3.5 sm:py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
            id="hub-scholarship-btn"
          >
            Apply for Sponsorship
          </button>
        </div>

        {/* Women Hub Closing CTA */}
        <div className="border border-dashed border-brand-border rounded-3xl p-8 sm:p-12 text-center bg-panel-light/50 backdrop-blur-sm shadow-sm max-w-3xl mx-auto space-y-6">
          <h2 className="serif-heading text-xl sm:text-2xl font-bold text-text-cream leading-relaxed max-w-2xl mx-auto">
            Not sure which one is right for you? Message us — we'll help you find your starting point.
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://wa.me/918145363290?text=Assalamu%20Alaikum%20Sister%20Mustara%2C%20I'm%20not%20sure%20which%20program%20is%20right%20for%20me.%20Can%20you%20help%20me%20find%20my%20starting%20point%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#12D164] hover:bg-[#0FB856] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full inline-flex items-center space-x-2 shadow-sm transition-all duration-300 cursor-pointer w-full sm:w-auto justify-center"
              id="women-hub-cta-whatsapp"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#12D164]" />
              <span>WhatsApp Us</span>
            </a>

            <a 
              href="https://instagram.com/qalbiya_institute"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-panel-dark hover:bg-panel-light text-text-cream border border-brand-border text-xs sm:text-sm font-semibold px-6 py-3 rounded-full inline-flex items-center space-x-2 shadow-sm transition-all duration-300 cursor-pointer w-full sm:w-auto justify-center"
              id="women-hub-cta-instagram"
            >
              <Instagram className="w-4 h-4 text-[#D82D7E]" />
              <span>DM on Instagram</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

