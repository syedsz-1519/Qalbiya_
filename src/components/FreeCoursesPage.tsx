import React from 'react';
import { Play, Sparkles, Image as ImageIcon, Send, MessageCircle, Heart, FileText, CheckCircle2 } from 'lucide-react';

export const FreeCoursesPage: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'all' | 'women' | 'kids'>('all');

  const freeItems = [
    {
      title: "Daily Morning & Evening Adhkar Guide",
      type: "Sacred PDF & Reflection",
      badge: "Gift",
      category: "all",
      desc: "An elegant, custom-translated compilation of the authentic protective prayers and daily remembrances from the Sunnah. Clean typography with word-by-word Urdu and English translations.",
      actionText: "Request PDF on WhatsApp",
      whatsappMsg: "Assalamu Alaikum Sister Mustara, I would love to receive the free Daily Adhkar Guide PDF."
    },
    {
      title: "Saturday Spiritual Sisterhood Circle",
      type: "Live Weekly Gathering",
      badge: "Live Meet",
      category: "women",
      desc: "Join our weekly 45-minute live circle on Saturday evenings. We reflect on a single character trait of the Prophet ﷺ and share friendly support in small, private Google Meet groups.",
      actionText: "Reserve Free Saturday Seat",
      whatsappMsg: "Assalamu Alaikum Sister Mustara, I want to RSVP and reserve a seat for the upcoming Saturday Sisterhood Circle."
    },
    {
      title: "Arabic Calligraphy Introductory Workshop",
      type: "Bite-Sized Video Lesson",
      badge: "Masterclass",
      category: "all",
      desc: "A calm, meditative video tutorial teaching the foundations of the elegant Thuluth script. Learn correct stroke dynamics, reed pen handling, and pure artistic balance.",
      actionText: "Request Access to Video Link",
      whatsappMsg: "Assalamu Alaikum Sister Mustara, I am interested in watching the free Arabic Calligraphy introductory workshop video."
    },
    {
      title: "Tajweed Foundation Self-Check Kit",
      type: "PDF Guide & Checklist",
      badge: "Gift",
      category: "women",
      desc: "A structured PDF checklist covering basic Makharij rules and common recitation errors to help sisters self-diagnose and correct their pronunciation points at home.",
      actionText: "Request PDF on WhatsApp",
      whatsappMsg: "Assalamu Alaikum Sister Mustara, I would love to receive the free Tajweed Foundation Self-Check Kit PDF."
    },
    {
      title: "Interactive Noorani Qaida Flashcards",
      type: "Printable PDF Set",
      badge: "For Kids",
      category: "kids",
      desc: "Printable and interactive flashcards with color-coded Makharij and stroke guides designed to help children learn the Arabic alphabet playfully and correctly.",
      actionText: "Request PDF on WhatsApp",
      whatsappMsg: "Assalamu Alaikum Sister Mustara, I would love to receive the free Kids Arabic Alphabet Flashcards PDF."
    },
    {
      title: "My First Daily Sunnah Tracker",
      type: "Printable Poster",
      badge: "For Kids",
      category: "kids",
      desc: "A beautifully illustrated daily habits chart for children to check off their morning/evening Duas, sleeping manners, and eating sunnahs in an encouraging way.",
      actionText: "Request Poster on WhatsApp",
      whatsappMsg: "Assalamu Alaikum Sister Mustara, I would love to receive the free My First Daily Sunnah Tracker poster PDF."
    }
  ];

  const filteredItems = activeTab === 'all'
    ? freeItems
    : freeItems.filter(item => item.category === activeTab);

  return (
    <div className="space-y-12 pb-12 max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* Page Header */}
      <section className="text-center space-y-4 pt-10">
        <span className="text-xs font-bold uppercase tracking-widest text-accent-gold">Enrich Your Spirit</span>
        <h1 className="serif-heading text-4xl sm:text-5xl font-bold text-text-cream tracking-tight">
          Free Sacred Resources & Circles
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-text-sage">
          Because authentic Islamic knowledge should be accessible to every seeking heart. Enjoy our beautifully crafted guides, live Saturday circles, and video tutorials — completely free of charge.
        </p>
      </section>

      {/* Tab Selector */}
      <div className="flex justify-center border-b border-brand-border/40 pb-2">
        <div className="flex space-x-1.5 p-1 rounded-xl bg-panel-dark/50 border border-brand-border/60">
          {[
            { id: 'all', label: "All Resources" },
            { id: 'women', label: "For Sisters" },
            { id: 'kids', label: "For Kids" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'all' | 'women' | 'kids')}
              className={`px-4.5 py-2 text-xs font-semibold rounded-lg tracking-wide transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-panel-light text-accent-gold shadow-md'
                  : 'text-text-sage hover:text-text-cream'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Free Resources Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8" id="free-resources-list">
        {filteredItems.map((item, idx) => (
          <div 
            key={idx}
            className="flex flex-col h-full rounded-2xl border border-brand-border bg-panel-dark p-6.5 space-y-5 shadow-lg hover:border-accent-gold/30 hover:shadow-2xl transition-all duration-300"
            id={`free-item-${idx}`}
          >
            {/* Tag Badge / Header info */}
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent-gold bg-accent-gold/10 px-2.5 py-1 rounded-md border border-accent-gold/10">
                {item.type}
              </span>
              <span className="text-[11px] font-bold text-emerald-400">
                {item.badge}
              </span>
            </div>

            {/* Core Text */}
            <div className="space-y-2 flex-1">
              <h3 className="serif-heading text-lg font-bold text-text-cream leading-snug">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-text-sage">
                {item.desc}
              </p>
            </div>

            {/* Actions */}
            <div className="pt-2">
              <a
                href={`https://wa.me/918145363290?text=${encodeURIComponent(item.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center space-x-2 rounded-xl bg-accent-sage/20 border border-accent-sage/40 hover:bg-emerald-500 hover:text-bg-deep hover:border-emerald-500 py-2.5 text-xs font-bold uppercase tracking-wider text-text-cream transition-all duration-300 cursor-pointer"
                id={`free-item-action-${idx}`}
              >
                <span>{item.actionText}</span>
              </a>
            </div>

          </div>
        ))}
      </section>

      {/* Embedded Spiritual Calligraphy Asset Section */}
      <section className="p-8 sm:p-12 rounded-3xl border border-brand-border bg-panel-dark/50" id="spiritual-reflection-card">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <h3 className="serif-heading text-2xl font-bold text-text-cream">
              Weekly Reminders & Du'as Channel
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-text-sage">
              We compile and share high-quality, authentic textual graphics, daily ad-hoc reflections, and direct advice from Sister Mustara on our private, safe Telegram & WhatsApp broadcast list. No marketing spam, no clutter — just nourishment for your soul.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <div className="flex items-center space-x-2 text-xs text-text-sage">
                <CheckCircle2 className="w-4 h-4 text-accent-gold" />
                <span>100% Private (Numbers hidden)</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-text-sage">
                <CheckCircle2 className="w-4 h-4 text-accent-gold" />
                <span>Directly curated by sisters</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <a
              href="https://wa.me/918145363290?text=Assalamu%20Alaikum%20Sister%20Mustara%2C%20please%20add%20my%20number%20to%20the%20private%20Qalbiya%20weekly%20spiritual%2520reminders%20list."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 rounded-xl bg-accent-gold hover:bg-accent-gold-light text-bg-deep px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
              id="weekly-reminder-cta"
            >
              <Send className="w-4 h-4" />
              <span>Join Broadcast list</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
