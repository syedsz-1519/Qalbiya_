import React, { useState } from 'react';
import { ChevronLeft, Calendar, Layers, Clock, HelpCircle, ArrowRight, UserCheck, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { Course } from '../types';

interface CourseDetailViewProps {
  course: Course;
  onBack: () => void;
  onNavigateToScholarship: () => void;
}

export const CourseDetailView: React.FC<CourseDetailViewProps> = ({ 
  course, 
  onBack,
  onNavigateToScholarship
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whatsappMessage = `Assalamu Alaikum Sister Mustara, I am sincerely interested in enrolling in the "${course.title}" course. Please guide me regarding the enrollment schedule and free trial assessment.`;
  const whatsappUrl = `https://wa.me/918145363290?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="space-y-16 pb-20 max-w-6xl mx-auto px-4 sm:px-6">
      
      {/* Back Button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-text-sage hover:text-accent-gold transition-colors duration-300"
          id="course-detail-back"
        >
          <ChevronLeft className="w-4 h-4 text-accent-gold" />
          <span>Back to Hub</span>
        </button>
      </div>

      {/* Main Course Header Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="course-detail-hero">
        
        {/* Left text description */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-accent-gold/20 bg-panel-dark px-3.5 py-1.5 text-xs font-semibold text-accent-gold tracking-wide">
            {course.badge || 'Sacred Knowledge'}
          </div>

          <h1 className="serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-text-cream">
            {course.title}
          </h1>

          <p className="text-lg italic font-medium text-accent-gold leading-relaxed">
            "{course.hook}"
          </p>

          <p className="text-sm leading-relaxed text-text-sage">
            {course.sub}
          </p>

          {/* Core Outcomes */}
          {course.slug !== 'seerah-course' && course.slug !== 'pre-diploma-deeniyat' && course.slug !== 'noorani-qaida-kids' && course.slug !== 'juniors-deeniyat-mastercourse' && course.slug !== 'tajweed-1-1' && (
            <div className="p-6 rounded-2xl border border-brand-border bg-panel-dark/40 space-y-3">
              <h3 className="serif-heading text-base font-bold text-text-cream">The Sacred Outcome</h3>
              <p className="text-xs leading-relaxed text-text-sage">
                {course.outcome}
              </p>
            </div>
          )}
        </div>

        {/* Right image framing */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden border border-brand-border bg-panel-dark shadow-2xl">
            <img
              src={course.image}
              alt={course.title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover filter brightness-95 saturate-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-transparent to-transparent" />
          </div>
        </div>

      </section>

      {/* Main Breakdown Area */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="course-detail-body">
        
        {/* Left Column: Syllabus, What is included, Who it is for */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Section 2: What This Course Covers */}
          {course.description && (
            <div className="space-y-4">
              <h2 className="serif-heading text-2xl font-bold text-text-cream border-b border-brand-border pb-3">
                What This Course Covers
              </h2>
              <p className="text-sm leading-relaxed text-text-sage whitespace-pre-line">
                {course.description}
              </p>
            </div>
          )}
          
          {/* Syllabus/Curriculum */}
          <div className="space-y-6">
            <h2 className="serif-heading text-2xl font-bold text-text-cream border-b border-brand-border pb-3">
              The Path of Study
            </h2>
            <ul className="space-y-4">
              {course.syllabus.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm text-text-sage">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What You Get */}
          <div className="space-y-6">
            <h2 className="serif-heading text-2xl font-bold text-text-cream border-b border-brand-border pb-3">
              What Is Included
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.whatYouGet.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-brand-border bg-panel-dark/60 text-xs text-text-sage leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: The Outcome (specifically styled for Seerah, Deeniyat, and Kids' courses) */}
          {(course.slug === 'seerah-course' || course.slug === 'pre-diploma-deeniyat' || course.slug === 'noorani-qaida-kids' || course.slug === 'juniors-deeniyat-mastercourse' || course.slug === 'tajweed-1-1') && (
            <div className="p-8 rounded-3xl border border-brand-border bg-panel-light text-text-cream space-y-4 shadow-sm relative overflow-hidden">
              <span className="text-[10px] font-bold text-accent-gold uppercase tracking-widest">The Outcome</span>
              <p className="serif-heading text-lg sm:text-xl font-medium leading-relaxed italic relative z-10">
                "{course.outcome}"
              </p>
              <div className="absolute right-4 bottom-2 text-accent-gold/5 pointer-events-none font-serif text-8xl sm:text-9xl leading-none select-none uppercase font-bold">
                {course.slug === 'seerah-course' ? 'Akhlaq' : (course.slug === 'pre-diploma-deeniyat' ? 'Deen' : (course.slug === 'noorani-qaida-kids' ? 'Quran' : (course.slug === 'juniors-deeniyat-mastercourse' ? 'Tarbiyah' : 'Tajweed')))}
              </div>
            </div>
          )}

          {/* Who is this for */}
          <div className="space-y-6">
            <h2 className="serif-heading text-2xl font-bold text-text-cream border-b border-brand-border pb-3">
              Who Is This For?
            </h2>
            <div className="space-y-3">
              {course.whoThisIsFor.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-xs text-text-sage">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-gold shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {course.howLearn && (
            <div className="p-6 rounded-2xl border border-accent-sage/30 bg-accent-sage/5 space-y-3">
              <h3 className="serif-heading text-base font-bold text-text-cream">How Kids Learn with Us</h3>
              <p className="text-xs leading-relaxed text-text-sage">
                {course.howLearn}
              </p>
            </div>
          )}

        </div>

        {/* Right Column: Dynamic Action details box, Teacher Note, FAQs */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
          
          {/* Quick Stats Panel & Register CTA */}
          <div className="p-6 sm:p-8 rounded-2xl border border-accent-gold/30 bg-panel-dark space-y-6 shadow-xl">
            <h3 className="serif-heading text-lg font-bold text-text-cream text-center">
              Program Details
            </h3>

            <div className="space-y-4 text-sm text-text-sage">
              {Object.entries(course.courseDetails).map(([key, val]) => (
                <div key={key} className="flex justify-between items-center py-2.5 border-b border-brand-border/60">
                  <span className="font-semibold text-text-cream/85">{key}</span>
                  <span className="text-accent-gold text-right">{val}</span>
                </div>
              ))}
            </div>

            {/* Price Detail */}
            <div className="text-center bg-bg-deep/55 p-4 rounded-xl border border-brand-border">
              <p className="text-xs text-text-sage font-medium uppercase tracking-wider">Registration Contribution</p>
              <h4 className="serif-heading text-3xl font-bold text-accent-gold mt-1">
                {course.price}
              </h4>
              <p className="text-[10px] text-text-sage/75 mt-0.5">Sponsorship / partial matching always available</p>
            </div>

            {/* Big Register Buttons */}
            <div className="space-y-3">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center space-x-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-bg-deep py-3.5 text-sm font-bold tracking-wider uppercase transition-all duration-300"
                id={`register-wa-btn-${course.slug}`}
              >
                <span>WhatsApp to Register</span>
              </a>

              <button
                onClick={onNavigateToScholarship}
                className="flex w-full items-center justify-center space-x-2 rounded-xl border border-brand-border hover:border-accent-gold/40 bg-panel-light py-3 text-xs font-semibold text-text-cream transition-all duration-300"
                id={`register-scholarship-btn-${course.slug}`}
              >
                <span>Request Financial Support</span>
              </button>
            </div>
          </div>

          {/* Founder Quote */}
          <div className="p-5 rounded-2xl border border-brand-border bg-panel-dark/50 italic text-xs leading-relaxed text-text-sage space-y-2">
            <p className="text-[10px] font-bold text-accent-gold uppercase tracking-widest not-italic">Sister Mustara's Note</p>
            <p className="whitespace-pre-line">"{course.teacherNote}"</p>
          </div>

          {/* FAQ Block */}
          <div className="space-y-4">
            <h3 className="serif-heading text-lg font-bold text-text-cream">
              Frequently Answered
            </h3>
            <div className="space-y-2.5">
              {course.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div 
                    key={index} 
                    className="rounded-xl border border-brand-border bg-panel-dark/60 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-xs font-bold text-text-cream hover:bg-panel-light transition-all duration-300"
                      id={`course-faq-btn-${index}`}
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-accent-gold shrink-0" /> : <ChevronDown className="w-4 h-4 text-accent-gold shrink-0" />}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-3.5 pt-1 text-xs leading-relaxed text-text-sage border-t border-brand-border/40">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </section>

    </div>
  );
};
