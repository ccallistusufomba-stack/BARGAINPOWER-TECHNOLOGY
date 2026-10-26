import React from 'react';
import { HeroCarousel } from './HeroCarousel';
import { useApp } from '../context/AppContext';
import { 
  Zap, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Wrench, 
  Star, 
  PhoneCall, 
  Activity,
  Sparkles,
  FileText,
  Plus,
  Trash2
} from 'lucide-react';
import { HomeSectionItem, PageTab } from '../types';
import { REVIEWS_DATA } from '../data/mockData';
import { AdminImageOverlay } from './AdminImageOverlay';

export const HomePage: React.FC = () => {
  const { 
    setActiveTab, 
    openQuoteModal, 
    setSubPageTitle, 
    settings, 
    homeSections, 
    isAdminLoggedIn, 
    isEditMode,
    addItem,
    deleteItem
  } = useApp();

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  const handleLearnMore = (tab: PageTab, title: string) => {
    setActiveTab(tab);
    setSubPageTitle(title);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddNewHomeSection = () => {
    const id = `home-${Date.now()}`;
    const newSection: HomeSectionItem = {
      id,
      badge: 'APPLIED HARDWARE & SMART ENERGY',
      question: 'What is Next-Generation Smart Automation?',
      leadParagraph: 'Precision power monitoring, high-amperage switching, and intelligent environmental climate control engineered for demanding home and commercial setups.',
      bodyParagraph: 'Designed with high galvanic isolation, certified thermal protection, and robust IoT telemetry to guarantee uncompromised reliability.',
      highlights: [
        'Real-time automated control and power telemetry',
        'Direct multi-protocol integration (WiFi/BLE/RS485)',
        'Built with flame-retardant industrial grade components',
        'Seamless smartphone and manual override redundancy'
      ],
      primaryActionText: 'Explore Engineering Specs',
      primaryActionTarget: 'services',
      secondaryActionText: 'Request Technical Quote',
      image: '/src/assets/images/home_automation_relay_panel_1791552230446.jpg'
    };
    addItem('home_sections', newSection);
  };

  if (isLoading) {
    return (
      <div className="min-h-[85vh] flex flex-col items-center justify-center bg-slate-900 text-white p-6 relative overflow-hidden">
        {/* Glow backdrop circles */}
        <div className="absolute w-96 h-96 bg-[#248C54]/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute w-64 h-64 bg-[#97CD97]/15 rounded-full blur-2xl pointer-events-none" />

        {/* Outer Dual Spinner */}
        <div className="relative mb-8">
          {/* Ring 1 - Outer clockwise */}
          <div className="w-24 h-24 rounded-full border-4 border-slate-800 border-t-[#248C54] border-r-[#97CD97] animate-spin" />
          
          {/* Ring 2 - Inner counter-clockwise */}
          <div className="w-16 h-16 rounded-full border-4 border-slate-800 border-b-[#97CD97] border-l-[#248C54] animate-spin absolute inset-4 [animation-direction:reverse] [animation-duration:1.2s]" />

          {/* Center glowing dot/icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Zap className="w-7 h-7 text-[#97CD97] animate-pulse" />
          </div>
        </div>

        {/* Text and Branding */}
        <div className="text-center z-10 max-w-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#248C54]/20 border border-[#248C54]/40 text-[#97CD97] text-xs font-mono font-bold mb-3 tracking-widest uppercase">
            <span>BARGAINPOWER & BIOCK ENGINEERING</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
            Loading Engineering Systems...
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            Calibrating Smart Automation, KinCony IoT &amp; CloudSecurity CCTV telemetry
          </p>

          {/* Progress bar */}
          <div className="w-48 h-1.5 bg-slate-800 rounded-full mx-auto mt-6 overflow-hidden">
            <div className="h-full bg-linear-to-r from-[#248C54] to-[#97CD97] rounded-full animate-[progress_1s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9FA] text-[#1A1D20]">
      {/* 1. Hero Section with #248C54 and #97CD97 colour design */}
      <HeroCarousel />

      {/* 2. Flagship Engineering Competencies: FULL-WIDTH 2-COLUMN ALTERNATING EDITORIAL CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#248C54] mb-2 inline-block px-3.5 py-1.5 rounded-full bg-[#97CD97]/25 border border-[#248C54]/30">
            Bespoke Engineering Solutions &amp; Applied Innovations
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1D20] tracking-tight mb-4">
            Hardware Engineering &amp; Automated Systems
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
            From smart WiFi multi-gang relay modules and heavy inductive 3-pole contactor enclosures 
            to custom electric vehicles, carbon-fiber aircraft, and automated dry-season agricultural snail terrariums.
          </p>
          {isAdminLoggedIn && isEditMode && (
            <div className="pt-2 flex justify-center">
              <button
                type="button"
                onClick={handleAddNewHomeSection}
                className="px-4 py-2 rounded-xl bg-[#248C54] hover:bg-[#1E7747] text-white text-xs font-bold shadow-md flex items-center gap-2 cursor-pointer border border-[#97CD97]/40"
              >
                <Plus className="w-3.5 h-3.5 text-[#97CD97]" />
                <span>Add New Editorial Section</span>
              </button>
            </div>
          )}
        </div>

        {/* 
          HOME CONTENT: 2-COLUMN ALTERNATING EDITORIAL FORMAT MATCHING USER REFERENCE IMAGE
          - Bold "What is [Item]?" Heading
          - Comprehensive informative engineering paragraphs
          - Key engineering highlights with checkmarks
          - Alternating Images (Even = Image Right, Odd = Image Left)
          - Rounded-3xl image containers with clean borders
        */}
        <div className="space-y-10 sm:space-y-14">
          {homeSections.map((section, idx) => {
            const isImageLeft = idx % 2 === 1; // Alternates left and right

            return (
              <article 
                key={section.id}
                id={section.id}
                className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all"
              >
                <div className={`flex flex-col ${isImageLeft ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-14`}>
                  
                  {/* Text Column: More generous room for editorial narrative */}
                  <div className="w-full md:w-7/12 lg:w-2/3 flex flex-col justify-between">
                    <div>
                      {/* Category Badge in #248C54 & #97CD97 and Admin Delete */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#97CD97]/25 text-[#14532D] border border-[#248C54]/30">
                          <Sparkles className="w-3.5 h-3.5 text-[#248C54]" />
                          <span>{section.badge}</span>
                        </div>
                        {isAdminLoggedIn && isEditMode && (
                          <button
                            type="button"
                            onClick={() => {
                              if (window.confirm(`Delete section "${section.question}"?`)) {
                                deleteItem('home_sections', section.id);
                              }
                            }}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                            title="Delete this editorial section"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      {/* Prominent Editorial Heading matching user's photo */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
                        {section.question}
                      </h3>

                      {/* Informative Multi-Paragraph Engineering Narrative */}
                      <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-3 mb-6">
                        <p className="font-medium text-slate-800">
                          {section.leadParagraph}
                        </p>
                        <p className="text-slate-600">
                          {section.bodyParagraph}
                        </p>
                      </div>

                      {/* Key Engineering Highlights */}
                      <div className="mb-6 p-4 rounded-2xl bg-[#F8FAF9] border border-slate-200/80">
                        <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">
                          Key Technical Highlights &amp; Specifications:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {section.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#248C54] shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={() => handleLearnMore(section.primaryActionTarget, section.question)}
                        className="px-5 py-2.5 rounded-xl bg-[#248C54] hover:bg-[#1E7747] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-[#248C54]/25 border-t border-[#97CD97] transition-all cursor-pointer flex items-center gap-2"
                      >
                        <Zap className="w-3.5 h-3.5 text-[#97CD97]" />
                        <span>{section.primaryActionText}</span>
                      </button>

                      <button
                        onClick={() => openQuoteModal(section.question)}
                        className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-[#97CD97]/30 text-slate-800 text-xs font-bold border border-slate-200 transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#248C54]" />
                        <span>{section.secondaryActionText}</span>
                      </button>
                    </div>
                  </div>

                  {/* Image Column: Scaled down smaller than original presentation */}
                  <div className="w-full md:w-5/12 lg:w-1/3 flex justify-center items-center shrink-0">
                    <AdminImageOverlay
                      section="home_sections"
                      itemId={section.id}
                      imageUrl={section.image}
                      itemTitle={section.question}
                      item={section}
                      className="w-full max-w-sm lg:max-w-xs"
                      placeholderHeight="h-56"
                    >
                      <div className="relative aspect-4/3 sm:aspect-16/10 md:aspect-4/3 w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-slate-200 shadow-md group">
                        <img 
                          src={section.image} 
                          alt={section.question} 
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60"></div>
                        
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white backdrop-blur-md bg-black/50 px-3 py-1.5 rounded-xl border border-white/20">
                          <span className="font-semibold truncate max-w-[180px]">{section.badge}</span>
                          <span className="text-[#97CD97] font-bold shrink-0">Industrial Grade</span>
                        </div>
                      </div>
                    </AdminImageOverlay>
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. Verified Client Social Proof */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#248C54] mb-1 block">
                Tested In The Field
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Verified Client Testimonials
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('reviews')}
              className="text-xs font-bold text-[#248C54] hover:text-[#1E7747] flex items-center gap-1 cursor-pointer"
            >
              <span>View All Client Field Reports</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS_DATA.slice(0, 2).map((rev) => (
              <div key={rev.id} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-1 text-amber-400 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                  "{rev.comment}"
                </p>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">{rev.author}</span>
                  <span className="text-slate-500">{rev.companyOrRole}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Fast Call to Action Banner with #248C54 and #97CD97 */}
      <section className="bg-gradient-to-r from-[#081F12] via-[#0D2E1C] to-[#14532D] text-white py-14 border-t border-[#248C54]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#97CD97] block mb-1">
              Start Your Build Today
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Ready to Automate Your Facility or Build an EV Project?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl">
              Talk directly with our lead hardware engineers. We provide schematic audits, component procurement, 
              and turnkey installation backed by a 12-month warranty.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => openQuoteModal()}
              className="px-6 py-3 rounded-xl bg-[#248C54] hover:bg-[#1E7747] text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-[#248C54]/40 border-t border-[#97CD97] transition-transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-[#97CD97]" />
              <span>Build your Project</span>
            </button>
            <a
              href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#113C23] hover:bg-[#1A5A35] text-[#97CD97] border border-[#248C54] font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp Us: {settings.whatsappNumber}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
