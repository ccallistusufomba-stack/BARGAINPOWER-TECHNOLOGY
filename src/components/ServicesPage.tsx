import React, { useState, useEffect } from 'react';
import { UNDERGRAD_GUIDES } from '../data/mockData';
import { ServiceDetail } from '../types';
import { useApp } from '../context/AppContext';
import { AdminImageOverlay } from './AdminImageOverlay';
import { BuyButton } from './BuyButton';
import { 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Wrench, 
  Layers, 
  Sparkles, 
  GraduationCap, 
  BookOpen, 
  ChevronLeft,
  Cpu,
  Compass,
  FileText,
  Plus,
  Trash2
} from 'lucide-react';

/**
 * Contoured green graphic SVG overlay for backgrounds and headers.
 * Uses exact brand colors #248C54 and #97CD97.
 */
export const GreenContourGraphic: React.FC<{ className?: string; variant?: 'waves' | 'loops' | 'full' }> = ({ 
  className = '', 
  variant = 'full' 
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}>
      <svg 
        className="w-full h-full"
        viewBox="0 0 1200 400" 
        preserveAspectRatio="none" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="contourGreenGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#97CD97" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#248C54" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#14532D" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="contourGreenGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#97CD97" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#248C54" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0B2516" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="greenCenterGlow" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#248C54" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#081F12" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient radial green illumination */}
        <rect width="100%" height="100%" fill="url(#greenCenterGlow)" />

        {/* Primary Topographic Elevation Contour Lines */}
        <path 
          d="M-50,80 C180,20 340,160 580,90 C820,20 1020,130 1250,70" 
          stroke="url(#contourGreenGrad1)" 
          strokeWidth="1.5" 
          strokeDasharray="6 4"
        />
        <path 
          d="M-50,130 C190,60 360,200 600,130 C840,50 1040,170 1250,110" 
          stroke="#248C54" 
          strokeOpacity="0.4" 
          strokeWidth="1.75" 
        />
        <path 
          d="M-50,180 C210,100 390,250 630,170 C870,90 1060,220 1250,160" 
          stroke="#97CD97" 
          strokeOpacity="0.45" 
          strokeWidth="2" 
        />
        <path 
          d="M-50,230 C230,150 420,300 660,220 C900,140 1090,270 1250,210" 
          stroke="#248C54" 
          strokeOpacity="0.35" 
          strokeWidth="1.5" 
        />
        <path 
          d="M-50,280 C250,200 450,350 690,270 C930,190 1120,320 1250,260" 
          stroke="#97CD97" 
          strokeOpacity="0.3" 
          strokeWidth="1.25" 
        />
        <path 
          d="M-50,330 C270,250 480,390 720,320 C960,240 1150,370 1250,310" 
          stroke="#248C54" 
          strokeOpacity="0.25" 
          strokeWidth="1" 
        />

        {/* Topographic Concentric Elevation Rings (Right Anchor) */}
        {(variant === 'loops' || variant === 'full') && (
          <>
            <path 
              d="M960,110 C1040,70 1130,80 1170,130 C1200,170 1180,220 1110,230 C1040,240 960,200 940,160 C930,135 940,120 960,110 Z" 
              stroke="#97CD97" 
              strokeWidth="1.5" 
              strokeOpacity="0.4" 
              strokeDasharray="4 4"
            />
            <path 
              d="M980,125 C1035,95 1105,100 1140,140 C1165,170 1150,205 1095,215 C1040,220 985,190 970,160 C960,140 970,130 980,125 Z" 
              stroke="#248C54" 
              strokeWidth="1.5" 
              strokeOpacity="0.5" 
            />
            <path 
              d="M1000,140 C1035,115 1080,120 1105,150 C1120,170 1110,195 1075,200 C1040,205 1005,185 995,165 C990,150 995,145 1000,140 Z" 
              stroke="#97CD97" 
              strokeWidth="1.2" 
              strokeOpacity="0.6" 
            />
            <circle cx="1050" cy="165" r="5" fill="#97CD97" fillOpacity="0.7" />
          </>
        )}

        {/* Topographic Concentric Elevation Rings (Left Anchor) */}
        {(variant === 'loops' || variant === 'full') && (
          <>
            <path 
              d="M140,240 C190,210 260,220 290,260 C310,290 295,330 250,340 C200,350 140,320 120,290 C110,270 120,250 140,240 Z" 
              stroke="#248C54" 
              strokeWidth="1.25" 
              strokeOpacity="0.35" 
            />
            <path 
              d="M160,255 C195,235 240,240 260,270 C275,290 265,315 235,320 C200,325 160,305 150,285 C145,270 150,260 160,255 Z" 
              stroke="#97CD97" 
              strokeWidth="1.2" 
              strokeOpacity="0.45" 
            />
          </>
        )}
      </svg>
    </div>
  );
};

export const ServicesPage: React.FC = () => {
  const { 
    openQuoteModal, 
    subPageTitle, 
    setSubPageTitle, 
    servicesData, 
    addItem, 
    deleteItem, 
    isAdminLoggedIn, 
    isEditMode 
  } = useApp();
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [viewFilter, setViewFilter] = useState<'all' | 'commercial' | 'undergrad'>('all');
  const [selectedUndergradField, setSelectedUndergradField] = useState<string>('Electrical Engineering');

  // Activate matching service or section when subPageTitle is passed from header tabs
  useEffect(() => {
    if (subPageTitle) {
      const matched = servicesData.find(s => 
        s.title.toLowerCase().includes(subPageTitle.toLowerCase()) || 
        subPageTitle.toLowerCase().includes(s.title.toLowerCase())
      );
      if (matched) {
        const el = document.getElementById(matched.id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else if (subPageTitle.includes('Undergraduate')) {
        const el = document.getElementById('undergrad-guides');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [subPageTitle, servicesData]);

  const activeService = servicesData.find(s => s.id === selectedServiceId);
  const activeGuide = UNDERGRAD_GUIDES.find(g => g.field === selectedUndergradField) || UNDERGRAD_GUIDES[0];

  const handleSelectService = (service: ServiceDetail) => {
    setSelectedServiceId(service.id);
    setSubPageTitle(service.title);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToOverview = () => {
    setSelectedServiceId(null);
    setSubPageTitle(null);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddNewService = () => {
    const id = `service-${Date.now()}`;
    const newService: ServiceDetail = {
      id,
      title: 'New Engineering & Innovation Solution',
      category: 'Smart Automation & Power',
      shortDesc: 'Custom industrial automation, power distribution, and precision embedded systems engineered to specification.',
      fullDesc: 'Comprehensive end-to-end engineering implementation including schematic drafting, enclosure prototyping, PCB design, firmware programming, bench testing, and live commissioning.',
      highlights: [
        'Custom schematic & PCB CAD design',
        'Industrial microcontroller integration (ESP32/STM32)',
        'Thermal & high-voltage bench stress validation',
        'Direct remote telemetry & mobile dashboard control'
      ],
      deliverables: [
        'Complete hardware assembly with DIN rail enclosure',
        'Annotated CAD schematics & pinout schematics',
        'Tested firmware repository with documentation',
        '12-Month technical warranty & engineering support'
      ],
      image: '/src/assets/images/home_automation_relay_panel_1791552230446.jpg'
    };
    addItem('services', newService);
    setSelectedServiceId(id);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* If viewing a dedicated service sub-page */}
        {activeService ? (
          <div className="animate-fadeIn">
            <div className="flex items-center justify-between gap-4 mb-6">
              <button
                onClick={handleBackToOverview}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#248C54] hover:text-[#14532D] cursor-pointer bg-[#97CD97]/25 px-3 py-1.5 rounded-lg border border-[#248C54]/30 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back to All Engineering Services</span>
              </button>

              {isAdminLoggedIn && isEditMode && (
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm(`Delete service "${activeService.title}" completely?`)) {
                      deleteItem('services', activeService.id);
                      handleBackToOverview();
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-white hover:bg-red-600 bg-red-50 border border-red-300 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete This Service</span>
                </button>
              )}
            </div>

            {/* Dedicated Service Showcase Container with AdminImageOverlay */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-8">
              <AdminImageOverlay
                section="services"
                itemId={activeService.id}
                imageUrl={activeService.image}
                itemTitle={activeService.title}
                item={activeService}
                placeholderHeight="h-72 md:h-96"
              >
                <div className="relative h-72 md:h-96 w-full overflow-hidden bg-[#081F12]">
                  <img 
                    src={activeService.image} 
                    alt={activeService.title} 
                    className="w-full h-full object-cover object-center opacity-70"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081F12] via-[#081F12]/75 to-transparent"></div>
                  <GreenContourGraphic className="opacity-30" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#248C54]/90 text-white border border-[#97CD97]/50 backdrop-blur-xs mb-3">
                      <Sparkles className="w-3.5 h-3.5 text-[#97CD97]" />
                      {activeService.category}
                    </span>
                    <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                      {activeService.title}
                    </h1>
                    <p className="text-sm sm:text-base text-[#97CD97] font-medium max-w-2xl leading-relaxed">
                      {activeService.shortDesc}
                    </p>
                  </div>
                </div>
              </AdminImageOverlay>

              {/* Service Detailed Body */}
              <div className="p-6 sm:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  
                  {/* Left 2 Cols: Comprehensive Scope & Engineering Narrative */}
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="p-1.5 rounded-md bg-[#97CD97]/30 text-[#248C54]">
                          <Cpu className="w-4 h-4" />
                        </span>
                        <h2 className="text-xl font-bold text-slate-900">
                          Technical Scope &amp; Engineering Methodology
                        </h2>
                      </div>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-200">
                        {activeService.fullDesc}
                      </p>
                    </div>

                    {/* Key Technical Highlights */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="p-1.5 rounded-md bg-[#97CD97]/30 text-[#248C54]">
                          <CheckCircle2 className="w-4 h-4" />
                        </span>
                        <h3 className="text-base font-bold text-slate-900">
                          Engineering Highlights &amp; Innovations
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeService.highlights.map((h, idx) => (
                          <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5 hover:border-[#248C54]/50 transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-[#248C54] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-slate-800 font-medium">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Deliverables */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="p-1.5 rounded-md bg-[#97CD97]/30 text-[#248C54]">
                          <Wrench className="w-4 h-4" />
                        </span>
                        <h3 className="text-base font-bold text-slate-900">
                          Client Deliverables Included with Every Project
                        </h3>
                      </div>
                      <div className="space-y-2.5">
                        {activeService.deliverables.map((deliv, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 p-3 rounded-xl bg-[#97CD97]/15 border border-[#97CD97]/40">
                            <div className="w-5 h-5 rounded-full bg-[#248C54] text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                              ✓
                            </div>
                            <span className="font-medium">{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Col: Hardware Specification & Build Request */}
                  <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#081F12] via-[#0D2E1C] to-[#14532D] border border-[#248C54]/50 p-6 sm:p-7 flex flex-col justify-between text-white shadow-xl">
                    <GreenContourGraphic className="opacity-25" />
                    
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#248C54]/30 text-[#97CD97] border border-[#97CD97]/40 mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-[#97CD97]" />
                        Hardware Specification &amp; Commissioning
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight">
                        Custom Turnkey Deployment
                      </h3>

                      <p className="text-xs text-emerald-100/90 mb-6 leading-relaxed">
                        Engineered to industrial-grade standards with certified high-voltage isolation, bench-tested safety interlocks, complete schematic diagrams, and 12-month post-commissioning technical support.
                      </p>

                      <div className="space-y-3 mb-6 text-xs text-emerald-100">
                        <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white/5 border border-[#97CD97]/20">
                          <CheckCircle2 className="w-4 h-4 text-[#97CD97] shrink-0 mt-0.5" />
                          <span>Customized precisely to your load capacity &amp; space requirements</span>
                        </div>
                        <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white/5 border border-[#97CD97]/20">
                          <CheckCircle2 className="w-4 h-4 text-[#97CD97] shrink-0 mt-0.5" />
                          <span>Failsafe circuit breaker &amp; magnetic contactor interlocking</span>
                        </div>
                        <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white/5 border border-[#97CD97]/20">
                          <CheckCircle2 className="w-4 h-4 text-[#97CD97] shrink-0 mt-0.5" />
                          <span>Physical laboratory bench demonstration prior to final installation</span>
                        </div>
                        <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white/5 border border-[#97CD97]/20">
                          <CheckCircle2 className="w-4 h-4 text-[#97CD97] shrink-0 mt-0.5" />
                          <span>Dedicated direct technical support hotline &amp; preventative maintenance</span>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 space-y-3 pt-4 border-t border-[#248C54]/50">
                      <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                        <BuyButton item={activeService} />
                      </div>

                      <button
                        onClick={() => openQuoteModal(activeService.title)}
                        className="w-full py-3 px-4 rounded-xl bg-[#248C54] hover:bg-[#1E7747] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-[#248C54]/40 border-t border-[#97CD97] transition-all cursor-pointer flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                      >
                        <Zap className="w-4 h-4 text-[#97CD97]" />
                        <span>Request Custom Quotation</span>
                      </button>

                      <button
                        onClick={handleBackToOverview}
                        className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-colors cursor-pointer text-center"
                      >
                        Browse Other Services
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Main Services Directory View */
          <div className="space-y-12">
            
            {/* Top Overview Section: Engineering Services & Innovation Laboratory */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#081F12] via-[#0D2E1C] to-[#14532D] text-white p-7 sm:p-10 shadow-xl border border-[#248C54]/50">
              <GreenContourGraphic className="opacity-30" />

              <div className="relative z-10 max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#248C54]/30 text-[#97CD97] border border-[#97CD97]/40 backdrop-blur-xs mb-4">
                  <Compass className="w-4 h-4 text-[#97CD97]" />
                  <span>Core Engineering Competencies &amp; Applied Research</span>
                </div>

                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
                  Engineering Services &amp; Innovation Laboratory
                </h1>

                <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed mb-8 max-w-3xl">
                  BARGAINPOWER &amp; TECHNOLOGY executes turnkey home automation, smart dry-season agricultural irrigation, 
                  custom electric vehicles, carbon-fiber aircraft prototypes, and specialized undergraduate engineering mentorship. 
                  Every project is backed by precision engineering, certified safety standards, and hands-on laboratory rigor.
                </p>

                {/* Separated Quick Jump & View Switcher (NO NUMBERS) */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#97CD97] mr-1">
                    Quick Navigation:
                  </span>
                  
                  <button
                    onClick={() => {
                      setViewFilter('all');
                      scrollToSection('commercial-services');
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                      viewFilter === 'all'
                        ? 'bg-[#248C54] text-white border-[#97CD97] shadow-md shadow-[#248C54]/40'
                        : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <span>View Both Separated Sections</span>
                  </button>

                  <button
                    onClick={() => {
                      setViewFilter(viewFilter === 'commercial' ? 'all' : 'commercial');
                      scrollToSection('commercial-services');
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                      viewFilter === 'commercial'
                        ? 'bg-[#248C54] text-white border-[#97CD97] shadow-md shadow-[#248C54]/40'
                        : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 text-[#97CD97]" />
                    <span>Commercial Services &amp; Creative Projects</span>
                  </button>

                  <button
                    onClick={() => {
                      setViewFilter(viewFilter === 'undergrad' ? 'all' : 'undergrad');
                      scrollToSection('undergrad-guides');
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                      viewFilter === 'undergrad'
                        ? 'bg-[#248C54] text-white border-[#97CD97] shadow-md shadow-[#248C54]/40'
                        : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <GraduationCap className="w-3.5 h-3.5 text-[#97CD97]" />
                    <span>Undergraduate Engineering Project Guides</span>
                  </button>
                </div>
              </div>
            </div>

            {/* SECTION 1: Commercial Services & Creative Projects */}
            {(viewFilter === 'all' || viewFilter === 'commercial') && (
              <section id="commercial-services" className="space-y-8 pt-4 scroll-mt-24">
                
                {/* Section Header Banner with Contoured Green Graphics & Text Heading (NO NUMBERS) */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#081F12] via-[#0D2E1C] to-[#14532D] p-6 sm:p-8 text-white border border-[#248C54]/50 shadow-lg">
                  <GreenContourGraphic className="opacity-35" variant="full" />
                  
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#248C54]/30 text-[#97CD97] border border-[#97CD97]/40 mb-2">
                        <Wrench className="w-3.5 h-3.5 text-[#97CD97]" />
                        <span>Commercial Engineering &amp; Turnkey Systems</span>
                      </div>
                      
                      {/* Text Heading (NO NUMBER) */}
                      <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                        Commercial Services &amp; Creative Projects
                      </h2>
                      
                      <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl mt-1 leading-relaxed">
                        Turnkey automation, precision mechanical prototyping, electric mobility conversions, and agricultural microclimate systems engineered to industrial specifications.
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      <span className="px-3.5 py-1.5 rounded-xl bg-[#081F12]/80 border border-[#97CD97]/40 text-xs font-bold text-[#97CD97]">
                        {servicesData.length} Turnkey Services Available
                      </span>
                      {isAdminLoggedIn && isEditMode && (
                        <button
                          type="button"
                          onClick={handleAddNewService}
                          className="px-3.5 py-1.5 rounded-xl bg-[#248C54] hover:bg-[#1E7747] text-white text-xs font-bold shadow-md cursor-pointer flex items-center gap-1.5 border border-[#97CD97]/40"
                        >
                          <Plus className="w-3.5 h-3.5 text-[#97CD97]" />
                          <span>Add New Service</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* 
                  SERVICES LIST: EXACTLY MATCHING THE USER'S PROVIDED IMAGE!
                  - 2-Column Editorial Card Layout
                  - Heading: "What is [Service]?"
                  - Comprehensive technical narrative paragraphs
                  - Alternating Image: Even index = Text Left, Image Right (like photo)
                                      Odd index  = Image Left, Text Right (alternating!)
                  - NO prices on them!
                */}
                <div className="space-y-8 sm:space-y-10">
                  {servicesData.map((service, idx) => {
                    const isImageLeft = idx % 2 === 1; // Alternates left and right
                    
                    return (
                      <article 
                        key={service.id}
                        id={service.id}
                        className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all scroll-mt-28"
                      >
                        <div className={`flex flex-col ${isImageLeft ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-12`}>
                          
                          {/* Text Content Column */}
                          <div className="w-full md:w-1/2 flex flex-col justify-between">
                            <div>
                              {/* Category Badge in #248C54 & #97CD97 */}
                              <div className="flex items-center justify-between mb-3">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#97CD97]/25 text-[#14532D] border border-[#248C54]/30">
                                  <Sparkles className="w-3.5 h-3.5 text-[#248C54]" />
                                  <span>{service.category}</span>
                                </div>
                                {isAdminLoggedIn && isEditMode && (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      if (window.confirm(`Delete service "${service.title}"?`)) {
                                        deleteItem('services', service.id);
                                      }
                                    }}
                                    className="p-1 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                                    title="Delete this service item"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                )}
                              </div>

                              {/* Prominent Editorial Heading matching the uploaded image */}
                              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
                                What is {service.title}?
                              </h3>

                              {/* Rich multi-paragraph narrative explaining the engineering principles */}
                              <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-3 mb-6">
                                <p className="font-medium text-slate-800">
                                  {service.shortDesc}
                                </p>
                                <p className="text-slate-600">
                                  {service.fullDesc}
                                </p>
                              </div>

                              {/* Highlights & Engineering Features */}
                              <div className="mb-6 p-4 rounded-2xl bg-[#F8FAF9] border border-slate-200/80">
                                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">
                                  Key Engineering Highlights &amp; Innovations:
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                  {service.highlights.slice(0, 4).map((h, i) => (
                                    <div key={i} className="flex items-start gap-2 text-slate-700">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-[#248C54] shrink-0 mt-0.5" />
                                      <span>{h}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Buy Button & Direct Checkout */}
                            <div className="pt-2">
                              <BuyButton item={service} />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center gap-3 pt-2">
                              <button
                                onClick={() => openQuoteModal(service.title)}
                                className="px-5 py-2.5 rounded-xl bg-[#248C54] hover:bg-[#1E7747] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-[#248C54]/25 border-t border-[#97CD97] transition-all cursor-pointer flex items-center gap-2"
                              >
                                <Zap className="w-3.5 h-3.5 text-[#97CD97]" />
                                <span>Request Custom Quotation</span>
                              </button>

                              <button
                                onClick={() => handleSelectService(service)}
                                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-[#97CD97]/30 text-slate-800 text-xs font-bold border border-slate-200 transition-colors cursor-pointer flex items-center gap-1.5"
                              >
                                <FileText className="w-3.5 h-3.5 text-[#248C54]" />
                                <span>View Technical Details</span>
                              </button>
                            </div>
                          </div>

                          {/* Image Column: Wrapped with AdminImageOverlay */}
                          <div className="w-full md:w-1/2">
                            <AdminImageOverlay
                              section="services"
                              itemId={service.id}
                              imageUrl={service.image}
                              itemTitle={service.title}
                              item={service}
                              placeholderHeight="h-64 sm:h-72"
                            >
                              <div className="relative aspect-4/3 sm:aspect-16/10 md:aspect-4/3 w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-slate-200 shadow-lg group">
                                <img 
                                  src={service.image} 
                                  alt={service.title} 
                                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                  loading="lazy"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60"></div>
                                
                                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white backdrop-blur-md bg-black/50 px-3 py-1.5 rounded-xl border border-white/20">
                                  <span className="font-semibold">{service.title}</span>
                                  <span className="text-[#97CD97] font-bold">Turnkey Specification</span>
                                </div>
                              </div>
                            </AdminImageOverlay>
                          </div>

                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Bottom Callout: Custom Hardware Engineering Lab */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#081F12] via-[#0D2E1C] to-[#14532D] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#248C54]/50">
                  <GreenContourGraphic className="opacity-30" variant="loops" />
                  
                  <div className="relative z-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#97CD97] block mb-1">
                      Custom Hardware Engineering Lab
                    </span>
                    <h3 className="text-2xl font-black text-white mb-2">
                      Make Your Request: Custom Engineering &amp; Build-to-Spec
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                      Have a proprietary hardware concept, custom PCB need, drone payload requirement, or EV conversion project? 
                      Use our dynamic project builder form to specify your requirements.
                    </p>
                  </div>
                  <button
                    onClick={() => openQuoteModal()}
                    className="relative z-10 shrink-0 px-6 py-3.5 rounded-xl bg-[#248C54] hover:bg-[#1E7747] text-white font-extrabold text-sm shadow-lg shadow-[#248C54]/40 border-t border-[#97CD97] transition-transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                  >
                    <Wrench className="w-4 h-4 text-[#97CD97]" />
                    <span>Build your Project Now</span>
                  </button>
                </div>
              </section>
            )}

            {/* SECTION 2: Undergraduate Engineering Project Guides (SEPARATED, NO NUMBER) */}
            {(viewFilter === 'all' || viewFilter === 'undergrad') && (
              <section id="undergrad-guides" className="space-y-8 pt-8 scroll-mt-24 border-t-2 border-dashed border-[#248C54]/30">
                
                {/* Section Header with Contoured Green Graphics & Text Heading (NO NUMBERS) */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#081F12] via-[#0D2E1C] to-[#14532D] p-6 sm:p-8 text-white border border-[#248C54]/50 shadow-lg">
                  <GreenContourGraphic className="opacity-35" variant="full" />

                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#248C54]/30 text-[#97CD97] border border-[#97CD97]/40 mb-2">
                        <GraduationCap className="w-3.5 h-3.5 text-[#97CD97]" />
                        <span>Academic Research &amp; Thesis Excellence</span>
                      </div>

                      {/* Text Heading (NO NUMBER) */}
                      <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                        Undergraduate Engineering Project Guides
                      </h2>

                      <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl mt-1 leading-relaxed">
                        Distinguish your university defense with working physical hardware, failsafe wiring, and verified scientific telemetry. Mentorship by professional practicing engineers.
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      <span className="px-3.5 py-1.5 rounded-xl bg-[#081F12]/80 border border-[#97CD97]/40 text-xs font-bold text-[#97CD97]">
                        Thesis &amp; Defense Ready
                      </span>
                    </div>
                  </div>
                </div>

                {/* What Makes a Good Undergraduate Project */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="p-2.5 rounded-2xl bg-[#97CD97]/25 text-[#248C54] border border-[#248C54]/30">
                      <GraduationCap className="w-6 h-6" />
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                        What It Truly Means for an Undergraduate Student to Make a Good Project
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Essential principles from professional engineers and university thesis defense examiners
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
                    <div className="p-4 bg-[#F8FAF9] rounded-2xl border border-slate-200/80 hover:border-[#248C54] transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-6 h-6 rounded-full bg-[#248C54] text-white font-bold flex items-center justify-center text-xs">
                          1
                        </span>
                        <span className="font-bold text-slate-900 text-sm">Physical Prototype</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Move beyond pure MATLAB/Proteus simulation software. A working, enclosed physical hardware apparatus immediately distinguishes your thesis from 90% of peer submissions.
                      </p>
                    </div>

                    <div className="p-4 bg-[#F8FAF9] rounded-2xl border border-slate-200/80 hover:border-[#248C54] transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-6 h-6 rounded-full bg-[#248C54] text-white font-bold flex items-center justify-center text-xs">
                          2
                        </span>
                        <span className="font-bold text-slate-900 text-sm">Real Problem Solving</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Address a genuine socioeconomic pain point: e.g. dry-season snail mortality, high-voltage contactor protection, or domestic fuel cost elimination via e-mobility.
                      </p>
                    </div>

                    <div className="p-4 bg-[#F8FAF9] rounded-2xl border border-slate-200/80 hover:border-[#248C54] transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-6 h-6 rounded-full bg-[#248C54] text-white font-bold flex items-center justify-center text-xs">
                          3
                        </span>
                        <span className="font-bold text-slate-900 text-sm">Scientific Data</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Include real measurable performance graphs: power consumption, thermal rise (°C), motor torque efficiency, and sensor response latency vs. theoretical equations.
                      </p>
                    </div>

                    <div className="p-4 bg-[#F8FAF9] rounded-2xl border border-slate-200/80 hover:border-[#248C54] transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-6 h-6 rounded-full bg-[#248C54] text-white font-bold flex items-center justify-center text-xs">
                          4
                        </span>
                        <span className="font-bold text-slate-900 text-sm">Failsafe Safety</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Integrate proper circuit breakers, fuses, optocoupler isolation, and thermal cutoffs. Demonstrating electrical safety earns high marks from external examiners.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Field Selection Tabs: Electrical, Mechanical, Mechatronics */}
                <div className="flex flex-wrap gap-2.5">
                  {(['Electrical Engineering', 'Mechanical Engineering', 'Mechatronics Engineering'] as const).map(f => (
                    <button
                      key={f}
                      onClick={() => setSelectedUndergradField(f)}
                      className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        selectedUndergradField === f
                          ? 'bg-[#248C54] text-white shadow-sm border border-[#97CD97]'
                          : 'bg-white text-slate-700 border border-slate-300 hover:bg-[#97CD97]/20 hover:text-[#14532D]'
                      }`}
                    >
                      {f} Students
                    </button>
                  ))}
                </div>

                {/* Active Discipline Guide Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                  <div className="mb-6">
                    <span className="text-xs font-bold text-[#248C54] uppercase tracking-wider block mb-1">
                      Discipline Blueprint
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                      {activeGuide.field} — Undergrad Thesis &amp; Project Framework
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                      {activeGuide.overview}
                    </p>
                  </div>

                  {/* Recommended Thesis Projects for this Field */}
                  <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#248C54]" />
                    <span>Top High-Impact Recommended Undergraduate Projects:</span>
                  </h4>

                  <div className="space-y-4">
                    {activeGuide.recommendedProjects.map((proj, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#248C54]/50 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                          <h5 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#248C54] shrink-0"></span>
                            <span>{proj.title}</span>
                          </h5>
                          <button
                            onClick={() => openQuoteModal(`Undergraduate Guidance: ${proj.title}`)}
                            className="text-xs font-semibold text-[#248C54] hover:text-[#14532D] inline-flex items-center gap-1 cursor-pointer self-start bg-[#97CD97]/20 px-2.5 py-1 rounded-lg border border-[#248C54]/30"
                          >
                            <span>Consult Lab on this Project</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                          {proj.description}
                        </p>

                        <div className="flex flex-wrap gap-2 items-center text-xs">
                          <span className="text-slate-500 font-semibold">Hardware Stack:</span>
                          {proj.hardwareTools.map((tool, i) => (
                            <span key={i} className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-mono">
                              {tool}
                            </span>
                          ))}
                        </div>

                        <div className="mt-2.5 text-xs text-[#14532D] bg-[#97CD97]/20 p-2.5 rounded-xl border border-[#248C54]/20">
                          <span className="font-semibold text-[#248C54]">Core Competency Acquired:</span> {proj.skillsGained}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </section>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
