import React from 'react';
import { Calendar, Layers, Clock, ArrowRight } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onSelect: (slug: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onSelect }) => {
  return (
    <div 
      className="group flex flex-col h-full rounded-2xl border border-brand-border bg-panel-dark overflow-hidden shadow-lg transition-all duration-300 hover:border-accent-gold/40 hover:shadow-2xl hover:-translate-y-1.5"
      id={`course-card-${course.slug}`}
    >
      {/* Course Thumbnail Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg-deep border-b border-brand-border">
        {course.badge && (
          <div 
            className="absolute top-3 left-3 z-10 rounded-full bg-accent-gold-dark/90 px-3 py-1 text-[11px] font-bold tracking-wider text-text-cream uppercase shadow-sm border border-accent-gold/20 backdrop-blur-sm"
            id={`course-badge-${course.slug}`}
          >
            {course.badge}
          </div>
        )}
        
        <img
          src={course.image}
          alt={course.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
          id={`course-img-${course.slug}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        <div className="space-y-1.5">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent-gold">
            {course.category === 'women' ? "Women's Academic" : "Kids' Tarbiyah"}
          </span>
          <h3 
            className="serif-heading text-xl font-bold leading-snug text-text-cream group-hover:text-accent-gold transition-colors duration-300"
            id={`course-title-${course.slug}`}
          >
            {course.title}
          </h3>
          <p className="text-sm italic font-medium text-text-sage/90 line-clamp-2">
            "{course.hook}"
          </p>
        </div>

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-2 gap-3.5 py-3 border-y border-brand-border/60 text-xs text-text-sage">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-accent-gold/70 shrink-0" />
            <span className="truncate">{course.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Layers className="w-4 h-4 text-accent-gold/70 shrink-0" />
            <span className="truncate">{course.courseDetails['Format'] || 'Google Meet'}</span>
          </div>
          <div className="col-span-2 flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-accent-gold/70 shrink-0" />
            <span className="truncate font-semibold text-accent-gold/90">
              {course.price} <span className="text-[10px] font-normal text-text-sage">/{course.priceDetail}</span>
            </span>
          </div>
        </div>

        {/* CTA Actions */}
        <div className="mt-auto pt-2 flex items-center justify-between">
          <button
            onClick={() => onSelect(course.slug)}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-accent-gold hover:text-accent-gold-light group/btn transition-colors duration-300 min-h-[44px] md:min-h-0 py-2.5 md:py-1"
            id={`course-card-details-btn-${course.slug}`}
          >
            <span>Read Sacred Overview</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>

          <a
            href={`https://wa.me/918145363290?text=Assalamu%20Alaikum%20Sister%20Mustara%2C%20I%20am%20sincerely%20interested%20in%20registering%20for%20the%20${encodeURIComponent(course.title)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 md:h-9 items-center justify-center rounded-xl bg-accent-sage/20 border border-accent-sage/30 px-3.5 text-xs font-semibold text-text-cream transition-all duration-300 hover:bg-emerald-500 hover:text-bg-deep hover:border-emerald-500"
            id={`course-card-wa-btn-${course.slug}`}
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};
