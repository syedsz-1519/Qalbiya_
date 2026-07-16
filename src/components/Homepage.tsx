import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Users, ArrowRight, Quote, ChevronLeft, ChevronRight, BookOpen, Compass, Calendar, Laptop, Tablet, Smartphone } from 'lucide-react';
import { Course, Route } from '../types';
import onlineLearningSetup from '../assets/images/tablet_online_class_1784047721074.jpg';
import womensOnlineStudy from '../assets/images/womens_online_study_1784048690815.jpg';
import kidsOnlineStudy from '../assets/images/kids_online_study_1784047721074.jpg'; // fallback to existing tablet image if any, but we'll use kids_online_study_1784048706942.jpg
import kidsOnlineStudyGen from '../assets/images/kids_online_study_1784048706942.jpg';
import founderWorkspace from '../assets/images/founder_workspace_1784048720294.jpg';

interface HomepageProps {
  courses: Course[];
  onNavigate: (route: Route, courseSlug?: string) => void;
  onSelectCourse: (slug: string) => void;
}

export const Homepage: React.FC<HomepageProps> = ({ courses, onNavigate, onSelectCourse }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'women' | 'kids'>('all');

  const handleStartJourneyClick = () => {
    const element = document.getElementById('split-path');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('women');
    }
  };

  const testimonies = [
    {
      text: "Ms. Mustara created a space so warm and gentle that I actually looked forward to making mistakes because of how lovingly she guided me to fix them. My recitation has completely changed.",
      author: "Sister Aisha, Delhi",
      course: "Tajweed 1:1 Graduate"
    },
    {
      text: "The storyteller style and emphasis on loving Allah has changed our home. My 8-year-old son now reads his daily duas entirely on his own without any reminders.",
      author: "Suhail, Parent of Farhan",
      course: "Kids' Deeniyat Graduate"
    },
    {
      text: "The Seerat-un-Nabi course was a defining chapter of my life. It brought immense positivity, teaching me the true purpose of living by showing how the Prophet ﷺ faced every hardship with beautiful patience (sabr). It's a true life-changer that connects your heart to Allah.",
      author: "Sadaf Khurshid",
      course: "Seerat un Nabi Graduate"
    },
    {
      text: "Alhamdulillah, this course has completely transformed my life. It didn't just teach us the Seerah; Ms. Mustara taught us how to implement it. My character (akhlaq) has improved, my trust (tawakkul) in Allah has deepened, and I now face hardships with patience (sabr), knowing that ease always follows difficulty.",
      author: "Raukaia Khatoon",
      course: "Seerat un Nabi Graduate"
    },
    {
      text: "This was not a history class — it was a spiritual hospital. It reshaped my marriage, my parenting, and how I treat my parents. I finally understand what character (akhlaq) means.",
      author: "Sister Maryam, London",
      course: "Seerah Course Graduate"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF2F4] text-[#2E1F21] space-y-24 pb-24 transition-colors duration-500">
      
      {/* SECTION 1 — Hero (Above the Fold) */}
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32" id="hero-section">
        {/* Soft, beautiful pink/rose glows */}
        <div className="absolute top-1/4 left-1/2 -z-10 h-[350px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EAB1BB]/25 blur-[120px]" />
        <div className="absolute bottom-10 right-10 -z-10 h-[280px] w-[280px] rounded-full bg-[#E59CA8]/15 blur-[100px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Headline and Subheadline */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 rounded-full border border-[#D0B2B7] bg-white/70 px-4 py-1.5 text-xs font-semibold text-[#8E4B59] tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#A25B69]" />
                <span>Enrolling for New Semester</span>
              </div>

              <div className="space-y-5">
                <h1 className="serif-heading font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide md:tracking-wider text-[#2E1F21] leading-[1.2]">
                  Knowledge That Reaches the Heart.<br />
                  <span className="text-[#8E4B59] font-normal">Amal That Changes the Life</span>
                </h1>
                <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-[#5C464A] font-medium">
                  Learn Qur'an, Tajweed, and Deen — live, online, from the comfort of your home. Not just to know it, but to live it.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => onNavigate('women')}
                  className="flex items-center justify-center space-x-2 rounded-xl bg-[#8E4B59] text-white px-8 py-4 text-sm font-bold tracking-wider uppercase shadow-lg shadow-[#8E4B59]/20 hover:bg-[#743C47] transition-all duration-300"
                  id="hero-cta-women"
                >
                  <span>Explore Women's Hub</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => onNavigate('kids')}
                  className="flex items-center justify-center space-x-2 rounded-xl border border-[#D0B2B7] bg-white/90 text-[#2E1F21] px-8 py-4 text-sm font-bold tracking-wider uppercase hover:bg-[#FFF5F6] transition-all duration-300 shadow-sm"
                  id="hero-cta-kids"
                >
                  <span>View Kids' Programs</span>
                </button>
              </div>

              {/* Minimal Brand Accents */}
              <div className="flex items-center justify-center lg:justify-start space-x-6 pt-2 text-xs text-[#6B5256] font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8E4B59]" /> Personalized 1:1 Batches
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8E4B59]" /> Google Meet Classes
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8E4B59]" /> Safe Sanctuary
                </span>
              </div>
            </div>

            {/* Right Column: High Quality Image Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-[1/1] rounded-3xl overflow-hidden border border-[#EAD5D8] bg-white shadow-2xl shadow-[#8E4B59]/5">
                <img
                  src={onlineLearningSetup}
                  alt="Online Islamic Learning setup"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover filter brightness-95 saturate-[0.9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E1F21]/80 via-transparent to-transparent opacity-90" />
                
                {/* Embedded Floating Callout */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl border border-white/10 bg-white/95 backdrop-blur-md text-[#2E1F21]">
                  <p className="text-[10px] text-[#8E4B59] font-bold uppercase tracking-widest flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-current text-[#8E4B59]" /> Founder's Mandate
                  </p>
                  <p className="text-xs italic text-[#2E1F21] mt-1 font-serif leading-relaxed">
                    "Every sincere seeker belongs in our circle. Sincerity and commitment are our only requirements."
                  </p>
                  <p className="text-[9px] text-[#6B5256] mt-1 font-semibold">— Sister Mustara</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — Split-Path */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-20" id="split-path">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8E4B59] flex items-center justify-center gap-1.5">
            <Compass className="w-3.5 h-3.5" /> Your Personal Direction
          </span>
          <h2 className="serif-heading font-serif text-3xl sm:text-4xl font-bold text-[#2E1F21]">
            Wherever you are in your journey, there's a path for your heart here.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1 — For Her */}
          <div className="rounded-3xl border border-[#EAD5D8] bg-white/95 p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#D0B2B7] transition-all duration-300 relative overflow-hidden group shadow-md" id="split-card-her">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#EAB1BB]/10 blur-2xl group-hover:scale-125 transition-transform" />
            
            <div className="space-y-6">
              {/* Card Image */}
              <div className="w-full h-48 rounded-2xl overflow-hidden relative border border-[#EAD5D8]">
                <img 
                  src={womensOnlineStudy} 
                  alt="Women studying online via laptop" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8E4B59]/30 to-transparent" />
                <span className="absolute top-4 left-4 rounded-xl bg-white/90 backdrop-blur-sm px-3.5 py-1 text-xs font-bold text-[#8E4B59] border border-[#EAD5D8]">
                  For You
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="serif-heading font-serif text-2xl font-bold text-[#2E1F21]">Women's Academy</h3>
                <p className="text-sm text-[#5C464A] leading-relaxed">
                  Rebuild your relationship with Allah, one honest step at a time. Designed with sisterhood, patience, and direct teacher connection.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onNavigate('women')}
                className="w-full flex items-center justify-center space-x-2 rounded-xl bg-[#8E4B59] text-white py-3.5 text-xs font-bold tracking-wider uppercase shadow-md hover:bg-[#743C47] transition-colors"
                id="split-path-women-btn"
              >
                <span>Explore Women's Programs →</span>
              </button>
            </div>
          </div>

          {/* Card 2 — For Your Child */}
          <div className="rounded-3xl border border-[#EAD5D8] bg-white/95 p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#D0B2B7] transition-all duration-300 relative overflow-hidden group shadow-md" id="split-card-child">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#EAB1BB]/10 blur-2xl group-hover:scale-125 transition-transform" />

            <div className="space-y-6">
              {/* Card Image */}
              <div className="w-full h-48 rounded-2xl overflow-hidden relative border border-[#EAD5D8]">
                <img 
                  src={kidsOnlineStudyGen} 
                  alt="Young learner with online tablet class" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8E4B59]/30 to-transparent" />
                <span className="absolute top-4 left-4 rounded-xl bg-white/90 backdrop-blur-sm px-3.5 py-1 text-xs font-bold text-[#8E4B59] border border-[#EAD5D8]">
                  For Them
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="serif-heading font-serif text-2xl font-bold text-[#2E1F21]">Kids' Academy</h3>
                <p className="text-sm text-[#5C464A] leading-relaxed">
                  Raise a child who loves their deen, not just knows it. Highly interactive classes using beautiful stories, game dynamics, and deep positive reinforcement.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onNavigate('kids')}
                className="w-full flex items-center justify-center space-x-2 rounded-xl border border-[#D0B2B7] bg-white text-[#2E1F21] py-3.5 text-xs font-bold tracking-wider uppercase shadow-sm hover:bg-[#FFF5F6] transition-colors"
                id="split-path-kids-btn"
              >
                <span>Explore Kids' Programs →</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3 — Social Proof Strip */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="social-proof-strip">
        <div className="rounded-2xl border border-[#EAD5D8] bg-[#FAF0F2] py-8 px-6 text-center space-y-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#8E4B59] font-mono flex items-center gap-1.5">
              <Users className="w-4 h-4" /> Trusted globally
            </span>
            <span className="hidden sm:inline text-[#EAD5D8] font-bold">|</span>
            <span className="text-sm sm:text-base font-bold text-[#2E1F21]">
              Trusted by <span className="text-[#8E4B59] font-extrabold">300+ students</span> on their journey back to their deen.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 text-left max-w-7xl mx-auto">
            {testimonies.map((testimony, idx) => (
              <motion.div
                key={idx}
                whileHover={{ 
                  y: -6, 
                  scale: 1.02, 
                  boxShadow: "0 12px 30px -10px rgba(142, 75, 89, 0.15)",
                  borderColor: "#D0B2B7"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/90 border border-[#EAD5D8]/70 rounded-xl p-5 relative space-y-4 transition-all duration-300"
              >
                <Quote className="absolute top-4 right-4 w-5 h-5 text-[#8E4B59]/10" />
                <p className="text-xs italic text-[#5C464A] leading-relaxed relative z-10">
                  "{testimony.text}"
                </p>
                <div className="flex justify-between items-center pt-2 border-t border-[#EAD5D8]/40">
                  <span className="text-[10px] font-bold text-[#2E1F21]">{testimony.author}</span>
                  <span className="text-[9px] font-bold text-[#8E4B59] uppercase tracking-wider">{testimony.course}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Featured Program Spotlight with Tabs */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8" id="featured-programs-section">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8E4B59] flex items-center justify-center gap-1">
            <Heart className="w-3 h-3 fill-current text-[#8E4B59]" /> Flagship Spotlights
          </span>
          <h2 className="serif-heading font-serif text-3xl font-bold text-[#2E1F21]">
            Featured Core Curriculums
          </h2>
          <p className="text-xs text-[#5C464A]">
            Choose a path suited to you or your children
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center pb-4">
          <div className="inline-flex p-1 bg-white border border-[#EAD5D8] rounded-2xl shadow-sm">
            {[
              { id: 'all', label: 'All Programs' },
              { id: 'women', label: "Women's Academy" },
              { id: 'kids', label: "Kids' Academy" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'all' | 'women' | 'kids')}
                className={`px-4 sm:px-6 py-3.5 sm:py-2.5 min-h-[44px] flex items-center justify-center rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#8E4B59] text-white shadow-sm'
                    : 'text-[#5C464A] hover:bg-[#FFF5F6] hover:text-[#8E4B59]'
                }`}
                id={`tab-btn-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Courses Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-2"
            id="featured-programs-grid"
          >
            {courses
              .filter((c) => activeTab === 'all' || c.category === activeTab)
              .map((course) => (
                <motion.div
                  layout
                  key={course.slug}
                  className="group flex flex-col h-full rounded-3xl border border-[#EAD5D8] bg-white overflow-hidden shadow-md hover:shadow-xl hover:border-[#D0B2B7] transition-all duration-300"
                  id={`featured-card-${course.slug}`}
                >
                  {/* Course Thumbnail Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF0F2] border-b border-[#EAD5D8]">
                    {course.badge && (
                      <div className="absolute top-3 left-3 z-10 rounded-full bg-[#8E4B59] px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase shadow-sm border border-[#EAD5D8]/20 backdrop-blur-sm">
                        {course.badge}
                      </div>
                    )}

                    {/* Online Presence Device Indicator Overlay */}
                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 rounded-full bg-slate-950/80 px-2.5 py-1 text-white border border-white/10 backdrop-blur-sm shadow-sm">
                      <Laptop className="w-3 h-3 text-[#EAB1BB]" />
                      <Tablet className="w-3 h-3 text-[#EAB1BB]" />
                      <Smartphone className="w-3 h-3 text-[#EAB1BB]" />
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#EAB1BB] ml-1">Live Online</span>
                    </div>
                    
                    <img
                      src={course.image}
                      alt={course.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-col flex-1 p-6 space-y-4">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8E4B59]">
                        {course.category === 'women' ? "Women's Academic" : "Kids' Tarbiyah"}
                      </span>
                      <h3 className="serif-heading font-serif text-lg font-bold leading-snug text-[#2E1F21] group-hover:text-[#8E4B59] transition-colors duration-300">
                        {course.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5C464A] line-clamp-3 leading-relaxed">
                        {course.sub}
                      </p>
                    </div>

                    {/* Quick Facts */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#EAD5D8]/50 text-xs text-[#5C464A]">
                      <div className="flex items-center space-x-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#8E4B59]" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#8E4B59]" />
                        <span>{course.courseDetails['Format'] || 'Google Meet'}</span>
                      </div>
                    </div>

                    {/* Investment & Actions */}
                    <div className="pt-2 mt-auto flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-[#5C464A]/70 uppercase tracking-wider font-semibold font-mono">Investment</span>
                        <span className="text-sm font-bold text-[#2E1F21]">
                          {course.price} <span className="text-[10px] text-[#5C464A] font-normal">/{course.priceDetail}</span>
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            onSelectCourse(course.slug);
                            onNavigate('course-detail');
                          }}
                          className="inline-flex items-center justify-center space-x-1 px-5 sm:px-4 h-11 sm:h-9 rounded-xl bg-[#8E4B59] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#743C47] transition-all duration-300 shadow-sm"
                          id={`featured-details-btn-${course.slug}`}
                        >
                          <span>Details</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* SECTION — About Our Founder */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8" id="about-founder-homepage">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center rounded-3xl border border-[#EAD5D8] bg-white p-6 sm:p-10 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-full bg-[#EAB1BB]/10 blur-2xl" />
          
          {/* Left Column: Image & Caption */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-[#EAD5D8] shadow-md bg-[#FAF0F2]">
              <img
                src={founderWorkspace}
                alt="About Our Founder - Interactive workspace with laptop online teaching setup"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-95 saturate-[0.8]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E1F21]/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-xs font-semibold text-white/90 uppercase tracking-widest block">Mustara</span>
                <span className="text-[10px] text-white/70 block mt-0.5">Founder & Head Instructor</span>
              </div>
            </div>
          </div>

          {/* Right Column: Founder's Story & Quote */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8E4B59] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Leadership & Vision
              </span>
              <h2 className="serif-heading font-serif text-3xl font-bold text-[#2E1F21]">
                About Our Founder
              </h2>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-[#5C464A] font-serif leading-loose">
              <p>
                Qalbiya Islamic Institute was founded by Mustara, who has spent the past few years teaching Seerah, Tajweed, and Islamic Studies to students at different stages of their journey.
              </p>
              <p>
                Through this experience, she noticed something missing in how deen was often taught — plenty of knowledge, but little guidance on how to actually live it. That realization became the foundation Qalbiya was built on: a place where learning isn't just about gaining ilm, but about real, lasting change.
              </p>
            </div>

            {/* Quote Block */}
            <div className="p-6 rounded-2xl bg-[#FFF5F6] border border-[#EAD5D8]/60 space-y-3 relative">
              <Quote className="absolute top-4 right-4 w-10 h-10 text-[#8E4B59]/5 pointer-events-none" />
              <p className="text-xs sm:text-sm italic text-[#2E1F21] leading-relaxed relative z-10">
                "My vision for Qalbiya was simple, a place where deen isn't just studied but lived. Where ilm reaches the heart, and shapes how we act. I welcome you to find that here."
              </p>
              <div className="text-[10px] font-bold text-[#8E4B59] tracking-wider uppercase font-mono text-right">
                — MS. MUSTARA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Closing CTA */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center" id="closing-cta">
        <div className="rounded-3xl border border-[#EAD5D8] bg-white p-8 sm:p-12 space-y-6 relative overflow-hidden shadow-lg shadow-[#8E4B59]/5">
          <div className="absolute top-1/2 left-1/2 -z-10 h-[220px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EAB1BB]/15 blur-[80px]" />
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="serif-heading font-serif text-3xl sm:text-4xl font-bold text-[#2E1F21] leading-tight">
              Your journey back doesn't start when you're ready. <br />
              <span className="text-[#8E4B59]">It starts when you decide.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#5C464A] max-w-md mx-auto">
              Enrollment handles individual student needs lovingly. Start reading correctly, and establish daily prayers with understanding.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={handleStartJourneyClick}
              className="inline-flex items-center space-x-2 rounded-xl bg-[#8E4B59] text-white px-8 py-4 text-xs font-bold tracking-wider uppercase shadow-md hover:bg-[#743C47] transition-all duration-300"
              id="closing-cta-journey-btn"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center justify-center space-x-2 text-[11px] text-[#6B5256] font-medium pt-2">
            <span>Conducted over Google Meet &bull; Flexible timings &bull; Active scholarships</span>
          </div>
        </div>
      </section>

    </div>
  );
};
