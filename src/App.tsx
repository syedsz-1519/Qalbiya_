import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Route } from './types';
import { coursesData } from './data';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Homepage } from './components/Homepage';
import { AboutPage } from './components/AboutPage';
import { ProgramsHub } from './components/ProgramsHub';
import { FreeCoursesPage } from './components/FreeCoursesPage';
import { ScholarshipPage } from './components/ScholarshipPage';
import { CourseDetailView } from './components/CourseDetailView';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ContactPage } from './components/ContactPage';
import { RefundPolicyPage } from './components/RefundPolicyPage';
import { TermsAndConditionsPage } from './components/TermsAndConditionsPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { FAQPage } from './components/FAQPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');
  const [selectedCourseSlug, setSelectedCourseSlug] = useState<string | undefined>(undefined);
  const [scholarshipPreselectSlug, setScholarshipPreselectSlug] = useState<string | undefined>(undefined);

  const handleNavigate = (route: Route, courseSlug?: string) => {
    setCurrentRoute(route);
    if (courseSlug) {
      setSelectedCourseSlug(courseSlug);
    } else if (route !== 'course-detail') {
      setSelectedCourseSlug(undefined);
    }
    // Scroll to top for seamless transitions
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCourse = (slug: string) => {
    setSelectedCourseSlug(slug);
    setCurrentRoute('course-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToScholarshipFromCourse = () => {
    if (selectedCourseSlug) {
      setScholarshipPreselectSlug(selectedCourseSlug);
    }
    setCurrentRoute('scholarship');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Resolve current active course
  const activeCourse = coursesData.find((c) => c.slug === selectedCourseSlug);

  const renderActiveScreen = () => {
    switch (currentRoute) {
      case 'home':
        return (
          <Homepage 
            courses={coursesData} 
            onNavigate={handleNavigate} 
            onSelectCourse={handleSelectCourse} 
          />
        );
      case 'about':
        return <AboutPage />;
      case 'women':
        return (
          <ProgramsHub 
            category="women" 
            courses={coursesData} 
            onSelectCourse={handleSelectCourse} 
            onNavigate={handleNavigate} 
          />
        );
      case 'kids':
        return (
          <ProgramsHub 
            category="kids" 
            courses={coursesData} 
            onSelectCourse={handleSelectCourse} 
            onNavigate={handleNavigate} 
          />
        );
      case 'free-courses':
        return <FreeCoursesPage />;
      case 'scholarship':
        return (
          <ScholarshipPage 
            courses={coursesData} 
            initialCourseSlug={scholarshipPreselectSlug} 
          />
        );
      case 'contact':
        return <ContactPage />;
      case 'refund-policy':
        return <RefundPolicyPage />;
      case 'terms-and-conditions':
        return <TermsAndConditionsPage onNavigate={handleNavigate} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage />;
      case 'faq':
        return <FAQPage onNavigate={handleNavigate} />;
      case 'course-detail':
        if (activeCourse) {
          return (
            <CourseDetailView 
              course={activeCourse} 
              onBack={() => handleNavigate(activeCourse.category)} 
              onNavigateToScholarship={handleNavigateToScholarshipFromCourse}
            />
          );
        }
        return (
          <Homepage 
            courses={coursesData} 
            onNavigate={handleNavigate} 
            onSelectCourse={handleSelectCourse} 
          />
        );
      default:
        return (
          <Homepage 
            courses={coursesData} 
            onNavigate={handleNavigate} 
            onSelectCourse={handleSelectCourse} 
          />
        );
    }
  };

  const isKids = currentRoute === 'kids';

  return (
    <div className="flex min-h-screen flex-col bg-bg-deep text-text-cream selection:bg-accent-gold/20 selection:text-accent-gold transition-colors duration-500">
      
      {/* Universal Header with responsive links */}
      <Header currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Main Content Stage with transition animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute + (selectedCourseSlug || '')}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full"
            id={`stage-${currentRoute}`}
          >
            {renderActiveScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={handleNavigate} currentRoute={currentRoute} />

      {/* Floating WhatsApp Contact Button */}
      <FloatingWhatsApp />

    </div>
  );
}
