import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Sparkles, Heart, BookOpen, Map, HelpCircle, ChevronRight, Compass } from 'lucide-react';
import { asmaUlHusnaList, NameOfAllah } from '../data/asmaUlHusna';
import makkahBg from '../assets/images/makkah_background_1784214785961.jpg';

export const AsmaUlHusnaSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activePillar, setActivePillar] = useState<number | null>(null);

  // Take first 4 names to display on screen initially
  const initialNames = asmaUlHusnaList.slice(0, 4);

  // Filter 99 names based on search query
  const filteredNames = asmaUlHusnaList.filter(name => 
    name.transliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
    name.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    name.arabic.includes(searchQuery)
  );

  const pillarsOfIslam = [
    {
      id: 1,
      arabic: "الشهادة",
      name: "Shahadah",
      english: "Declaration of Faith",
      desc: "To bear witness that there is no deity worthy of worship except Allah, and Muhammad ﷺ is His final Messenger.",
      color: "from-amber-500/20 to-yellow-600/20",
      accent: "text-amber-500",
      detail: "The foundational pillar of Islam. It forms the core belief system of a Muslim, defining their relationship with the Creator and the Prophet ﷺ."
    },
    {
      id: 2,
      arabic: "الصلاة",
      name: "Salah",
      english: "Daily Prayers",
      desc: "Establishing five obligatory prayers daily, cultivating constant awareness, mindfulness, and connection with Allah.",
      color: "from-emerald-500/20 to-teal-600/20",
      accent: "text-emerald-500",
      detail: "Prayers are performed at dawn (Fajr), noon (Dhuhr), afternoon (Asr), sunset (Maghrib), and night (Isha). It serves as a direct line of communication between the servant and the Lord."
    },
    {
      id: 3,
      arabic: "الزكاة",
      name: "Zakat",
      english: "Obligatory Charity",
      desc: "Giving 2.5% of one's accumulated annual savings to purify wealth and support the poor and needy in the community.",
      color: "from-indigo-500/20 to-blue-600/20",
      accent: "text-indigo-500",
      detail: "An institutionalized social welfare system. Zakat ensures wealth is circulated justly, fostering community bonds, purifying hearts from greed, and securing social balance."
    },
    {
      id: 4,
      arabic: "الصوم",
      name: "Sawm",
      english: "Fasting in Ramadan",
      desc: "Abstaining from food, drink, and sensory pleasures from dawn to sunset during the holy month of Ramadan to build self-discipline and empathy.",
      color: "from-rose-500/20 to-pink-600/20",
      accent: "text-rose-500",
      detail: "A month of spiritual reflection, intense devotion, and elevated charitable acts. Fasting strengthens one's Taqwa (mindfulness of God) and awakens deep appreciation for blessings."
    },
    {
      id: 5,
      arabic: "الحج",
      name: "Hajj",
      english: "Pilgrimage to Makkah",
      desc: "Performing the sacred pilgrimage to the Holy Kaaba in Makkah once in a lifetime, for those who are physically and financially able.",
      color: "from-cyan-500/20 to-teal-600/20",
      accent: "text-cyan-500",
      detail: "The ultimate journey of self-surrender, uniting millions of Muslims from every corner of the world in equal worship, wearing simple white garments (Ihram) to symbolize brotherhood."
    }
  ];

  return (
    <section className="w-full bg-[#FAF0F2] py-16 sm:py-20 border-y border-[#EAD5D8]/40" id="asma-ul-husna-core">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Section Layout - Grid dividing Asma Ul Husna preview and Five Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Asma Ul Husna Preview (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8E4B59] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} /> Divine Attributes
            </span>
            <h2 className="serif-heading font-serif text-3xl font-bold text-[#2E1F21]">
              Asma Ul Husna
            </h2>
            <p className="text-sm text-[#8E4B59] font-medium tracking-wide">
              The 99 Beautiful Names of Allah
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#5C464A] leading-relaxed">
            Reflect on the sacred attributes of our Creator to find peace, understanding, and divine companionship in your daily life.
          </p>

          {/* Core Quote */}
          <div className="p-4 rounded-xl bg-white border border-[#EAD5D8] shadow-sm italic text-xs text-[#2E1F21] relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] text-5xl font-serif">7:180</div>
            <p className="relative z-10 leading-relaxed font-serif">
              "To Allah belong the best names, so invoke Him by them."
            </p>
            <span className="block text-[10px] text-[#8E4B59] font-mono mt-1 text-right">— Surah Al-A'raf [7:180]</span>
          </div>

          {/* 4 Name Cards on Screen */}
          <div className="grid grid-cols-2 gap-4">
            {initialNames.map((name) => (
              <motion.div
                key={name.id}
                whileHover={{ y: -3, scale: 1.02 }}
                className="p-4 rounded-xl border border-[#EAD5D8] bg-white text-center shadow-sm hover:shadow-md hover:border-[#8E4B59]/30 transition-all duration-300 relative group"
              >
                <div className="absolute top-1 right-2 text-[8px] font-mono text-[#8E4B59]/40 group-hover:text-[#8E4B59]/80 transition-colors">
                  #{String(name.id).padStart(2, '0')}
                </div>
                <div className="text-2xl font-bold text-[#8E4B59] mb-1 font-serif py-1 group-hover:scale-110 transition-transform duration-300">
                  {name.arabic}
                </div>
                <div className="text-xs font-bold text-[#2E1F21] tracking-wide">
                  {name.transliteration}
                </div>
                <div className="text-[10px] text-[#5C464A] font-medium mt-0.5 line-clamp-1">
                  {name.translation}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Explore Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="w-full relative group overflow-hidden inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#EAB1BB] to-[#D4AF37] text-bg-deep text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all duration-300 border border-white/20"
            id="btn-explore-99-names"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-bg-deep animate-pulse" />
              <span>Explore All 99 Names</span>
            </span>
          </button>
        </div>

        {/* Right Side: Core Fundamentals - The Five Pillars (7 Columns) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8E4B59] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Core Fundamentals
            </span>
            <h2 className="serif-heading font-serif text-3xl font-bold text-[#2E1F21]">
              The Five Pillars of Islam
            </h2>
            <p className="text-xs sm:text-sm text-[#5C464A] leading-relaxed">
              Every Qalbiya program incorporates these five essential pillars of belief and action to anchor our students' personal and spiritual growth. Click any pillar to explore its deeper significance:
            </p>
          </div>

          {/* Pillars List Accordion */}
          <div className="space-y-3">
            {pillarsOfIslam.map((pillar, index) => {
              const isSelected = activePillar === pillar.id;
              return (
                <div 
                  key={pillar.id}
                  className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                    isSelected 
                      ? 'border-[#8E4B59] bg-white shadow-md' 
                      : 'border-[#EAD5D8] bg-white/80 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setActivePillar(isSelected ? null : pillar.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors cursor-pointer"
                    id={`pillar-trigger-${pillar.id}`}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Number Bullet */}
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 ${
                        isSelected ? 'bg-[#8E4B59] text-white' : 'bg-white border border-[#EAD5D8] text-[#8E4B59]'
                      }`}>
                        {pillar.id}
                      </span>
                      <div>
                        <div className="flex items-baseline space-x-2">
                          <span className="font-serif font-bold text-base text-[#2E1F21]">{pillar.name}</span>
                          <span className="text-xs text-[#8E4B59] font-medium font-serif">({pillar.english})</span>
                        </div>
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#5C464A]/70">Pillar {pillar.id}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      {/* Arabic Calligraphy Style text */}
                      <span className="font-serif text-lg text-[#8E4B59] font-bold opacity-80 hidden sm:inline">
                        {pillar.arabic}
                      </span>
                      <ChevronRight className={`w-4 h-4 text-[#8E4B59] transition-transform duration-300 ${
                        isSelected ? 'rotate-90' : ''
                      }`} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 pt-1 space-y-3 text-xs sm:text-sm text-[#5C464A] border-t border-[#EAD5D8]/40">
                          <p className="leading-relaxed font-serif text-[#2E1F21]">
                            {pillar.desc}
                          </p>
                          <div className="p-3.5 rounded-xl bg-[#FFF5F6] border border-[#EAD5D8]/50 text-xs leading-relaxed text-[#5C464A]">
                            <strong>Spiritual Significance:</strong> {pillar.detail}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      </div>

      {/* FULL SCREEN / LARGE DIALOG MODAL: Explore 99 Names */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
            style={{ backdropFilter: "blur(12px)" }}
            id="asma-ul-husna-modal"
          >
            {/* Dark Ambient Backdrop */}
            <div 
              className="absolute inset-0 bg-slate-950/85 cursor-pointer" 
              onClick={() => setIsOpen(false)}
            />

            {/* Makkah Image Background with increased transparency & overlays */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden flex items-center justify-center">
              <img 
                src={makkahBg} 
                alt="Background of Holy Makkah" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-35 filter blur-md scale-105 select-none"
              />
              {/* Stronger dark blur overlay to guarantee maximum contrast and readability */}
              <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[4px]" />
            </div>

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-5xl h-[85vh] rounded-3xl bg-slate-950/50 border border-white/10 shadow-2xl flex flex-col overflow-hidden backdrop-blur-md"
            >
              {/* Gold light sweep on top border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

              {/* Modal Header */}
              <div className="p-6 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-950/60">
                <div className="space-y-1">
                  <h3 className="serif-heading font-serif text-2xl font-bold text-white flex items-center gap-2 drop-shadow-md">
                    <Sparkles className="w-5 h-5 text-[#D4AF37] animate-pulse" />
                    <span>Asma Ul Husna</span>
                  </h3>
                  <p className="text-xs text-white/70 tracking-wide">
                    Reflect upon the 99 attributes of Allah &bull; Surah Al-A'raf [7:180]
                  </p>
                </div>

                {/* Search Bar inside Modal Header */}
                <div className="flex items-center gap-3">
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#D4AF37]" />
                    <input
                      type="text"
                      placeholder="Search name..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 text-xs rounded-full bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                      id="search-names-input"
                    />
                    {searchQuery && (
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-2.5 text-white/40 hover:text-white"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                    id="close-names-modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body: Grid of Names */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                
                {filteredNames.length === 0 ? (
                  <div className="text-center py-20 space-y-3">
                    <HelpCircle className="w-12 h-12 text-[#D4AF37] mx-auto animate-bounce" />
                    <p className="text-sm text-white/80 font-serif">No attributes match your search query.</p>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="text-xs text-[#D4AF37] underline font-bold"
                    >
                      Clear search
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredNames.map((name) => (
                      <motion.div
                        key={name.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -3, scale: 1.02 }}
                        className="p-5 rounded-2xl border border-[#EAD5D8] bg-white/95 hover:bg-white hover:border-[#8E4B59]/40 transition-all duration-300 text-center relative group shadow-md hover:shadow-xl"
                      >
                        {/* Top ID Badge in brand crimson style */}
                        <div className="absolute top-2.5 right-3.5 text-[9px] font-mono font-bold text-[#8E4B59]/45 group-hover:text-[#8E4B59] transition-colors">
                          #{String(name.id).padStart(2, '0')}
                        </div>

                        {/* Calligraphy / Arabic Name in the exact website brand color (#8E4B59) */}
                        <div className="text-3xl font-serif text-[#8E4B59] font-extrabold mt-2 mb-2 group-hover:scale-105 transition-transform duration-300">
                          {name.arabic}
                        </div>

                        {/* Transliteration in the exact website heading color (#2E1F21) */}
                        <div className="text-sm font-bold text-[#2E1F21] tracking-wide">
                          {name.transliteration}
                        </div>

                        {/* Translation in the exact website body text color (#5C464A) */}
                        <div className="text-[11px] text-[#5C464A] font-semibold mt-1">
                          {name.translation}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-white/5 bg-slate-950/60 flex items-center justify-between text-[11px] text-white/50">
                <span>Total Divine Names: {asmaUlHusnaList.length}</span>
                <span className="hidden sm:inline">"Call upon Him by His beautiful attributes."</span>
                <span>Found {filteredNames.length} names</span>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
