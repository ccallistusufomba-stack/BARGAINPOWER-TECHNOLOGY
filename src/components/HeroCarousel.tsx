import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  Play, 
  Pause,
  Maximize2,
  X,
  Camera,
  Trash2,
  Edit3,
  Plus
} from 'lucide-react';
import { HeroSlide } from '../types';
import { AdminImageModal } from './AdminImageModal';
import { AdminTextModal } from './AdminTextModal';

export const HeroCarousel: React.FC = () => {
  const { 
    openQuoteModal, 
    setActiveTab, 
    heroSlides, 
    isAdminLoggedIn, 
    isEditMode, 
    updateItemImage, 
    deleteItemImage, 
    updateItemText,
    addItem,
    deleteItem
  } = useApp();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [isAdminImageOpen, setIsAdminImageOpen] = useState(false);
  const [isAdminTextOpen, setIsAdminTextOpen] = useState(false);
  const slideCount = heroSlides.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slideCount);
    }, 5500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlideIndex, isPaused, slideCount]);

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slideCount);
  };

  const activeSlide = heroSlides[currentSlideIndex] || heroSlides[0];

  return (
    <section 
      aria-label="Highlighted Company Innovations Carousel"
      className="relative w-full m-0 p-0 overflow-hidden bg-[#0A2617] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-bleed window-fit container */}
      <div className="relative w-full min-h-[500px] lg:min-h-[calc(100vh-140px)] flex flex-col justify-between">
        
        {/* Sliding Picture Layer on Right */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
            {heroSlides.map((slide, idx) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === currentSlideIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105 pointer-events-none'
                }`}
              >
                {slide.image ? (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full bg-[#081F12] flex items-center justify-center text-emerald-300/40 text-sm font-semibold">
                    [Picture Removed - Use "Change Picture" below to add]
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Clean Deep Dark Green (#0A2617) Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2617] from-0% via-[#0A2617] via-35% via-[#0A2617]/95 via-50% via-[#0A2617]/35 to-transparent to-75%"></div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2617]/80 via-transparent to-[#0A2617]/25 pointer-events-none"></div>

          {/* Ambient luminous glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 lg:pt-14 pb-4 flex-grow flex items-start">
          <div className="max-w-xl lg:max-w-2xl">
            
            {/* Slide Badge & Counter */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-white/15 border border-white/30 text-white shadow-sm backdrop-blur-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#97CD97] shrink-0" />
                <span>{activeSlide.badge}</span>
              </span>
              <span className="text-xs text-emerald-200/90 font-mono tracking-wider font-extrabold">
                Item 0{activeSlide.id} of 0{slideCount}
              </span>
            </div>

            {/* Slide Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight text-white mb-2 leading-[1.1] drop-shadow-sm">
              {activeSlide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg font-bold text-emerald-100/95 mb-3 drop-shadow-xs">
              {activeSlide.subtitle}
            </p>

            {/* Narrative text */}
            <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed mb-6 max-w-xl drop-shadow-xs">
              {activeSlide.description}
            </p>

            {/* Slide Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <button
                onClick={() => openQuoteModal(activeSlide.title)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-white hover:bg-emerald-50 text-[#0A2617] shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>{activeSlide.actionText}</span>
                <ArrowRight className="w-4 h-4 text-[#0A2617]" />
              </button>

              <button
                onClick={() => {
                  if (activeSlide.id === 1 || activeSlide.id === 2 || activeSlide.id === 3) setActiveTab('services');
                  else if (activeSlide.id === 4) setActiveTab('breakers');
                  else if (activeSlide.id === 5) setActiveTab('contactors');
                  else if (activeSlide.id === 6 || activeSlide.id === 7) setActiveTab('services');
                  else if (activeSlide.id === 8) setActiveTab('security');
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#123823] hover:bg-[#1A4D30] text-white backdrop-blur-sm border border-white/25 transition-all cursor-pointer shadow-sm"
              >
                <span>View Full Specifications</span>
              </button>

              <button
                onClick={() => setIsZoomModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#123823] hover:bg-[#1A4D30] text-white backdrop-blur-sm border border-white/20 text-xs font-semibold transition-all cursor-pointer"
                title="View Full High-Resolution Picture"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Inspect Picture</span>
              </button>
            </div>

            {/* Admin Live Controls for Active Slide */}
            {isAdminLoggedIn && isEditMode && (
              <div className="flex flex-wrap items-center gap-2 pt-2 mb-4 border-t border-emerald-500/40">
                <span className="text-[10px] uppercase font-mono font-bold text-emerald-300 mr-1">
                  [Admin Slide Editor]:
                </span>
                <button
                  type="button"
                  onClick={() => setIsAdminImageOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#248C54] hover:bg-[#1E7747] text-white text-xs font-bold shadow-md cursor-pointer border border-[#97CD97]/40"
                  title="Change picture for this slide"
                >
                  <Camera className="w-3.5 h-3.5 text-[#97CD97]" />
                  <span>Change Slide Picture</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm(`Delete picture for slide "${activeSlide.title}"?`)) {
                      deleteItemImage('hero_slides', activeSlide.id);
                    }
                  }}
                  className="p-1.5 rounded-xl bg-red-600/90 hover:bg-red-700 text-white text-xs font-bold shadow-md cursor-pointer"
                  title="Delete picture for this slide"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsAdminTextOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-700/80 hover:bg-purple-800 text-white text-xs font-bold shadow-md cursor-pointer border border-purple-400/40"
                  title="Edit text for this slide"
                >
                  <Edit3 className="w-3.5 h-3.5 text-purple-200" />
                  <span>Edit Slide Text</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const newId = Date.now();
                    const newSlide: HeroSlide = {
                      id: newId,
                      title: 'New Innovation Showcase Slide',
                      subtitle: 'Precision Automation Engineering',
                      badge: 'NEW HARDWARE INNOVATION',
                      description: 'Engineered hardware prototypes, automated telemetry controllers, and advanced power management built to industrial standard.',
                      image: '/src/assets/images/home_automation_relay_panel_1791552230446.jpg',
                      actionText: 'Explore System Specifications'
                    };
                    addItem('hero_slides', newSlide);
                    setCurrentSlideIndex(heroSlides.length);
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-md cursor-pointer border border-emerald-400/40"
                  title="Add a new slide to hero carousel"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Slide</span>
                </button>

                {heroSlides.length > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm(`Delete slide "${activeSlide.title}" completely?`)) {
                        deleteItem('hero_slides', activeSlide.id);
                        setCurrentSlideIndex(0);
                      }
                    }}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-red-900 text-red-300 hover:text-white text-xs font-bold shadow-md cursor-pointer border border-red-500/30"
                    title="Delete this entire slide from carousel"
                  >
                    <span>Remove Slide</span>
                  </button>
                )}
              </div>
            )}

          </div>
        </div>

        {/* Telemetry Bar & Controls: Deep Dark Green (#06180E) on the down part */}
        <div className="relative z-20 w-full border-t border-white/15 bg-[#06180E] py-3 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2.5">
            
            {/* Live Slide Indicator */}
            <div className="flex items-center gap-2.5 text-xs text-white font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-[#97CD97] animate-pulse shrink-0"></span>
              <span className="text-[#0A2617] bg-white font-black tracking-wide uppercase font-mono text-[11px] px-2 py-0.5 rounded shadow-xs">
                Slide 0{activeSlide.id}
              </span>
              <span className="text-white font-bold truncate">{activeSlide.title}</span>
              <span className="text-emerald-200/80 hidden md:inline">· {activeSlide.subtitle}</span>
            </div>

            {/* Navigation Controls: Slide Dots & Arrow Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
                aria-label={isPaused ? "Resume slider" : "Pause slider"}
                title={isPaused ? "Resume autoplay" : "Pause autoplay"}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 text-white fill-current" /> : <Pause className="w-3.5 h-3.5 text-white" />}
              </button>

              <div className="flex items-center gap-1.5">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`transition-all rounded-full cursor-pointer ${
                      idx === currentSlideIndex 
                        ? 'w-7 h-2 bg-white' 
                        : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${slide.id}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-lg bg-[#123823] hover:bg-[#1A4D30] text-white border border-white/20 transition-all cursor-pointer shadow-xs"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-lg bg-[#123823] hover:bg-[#1A4D30] text-white border border-white/20 transition-all cursor-pointer shadow-xs"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* High-Resolution Picture Inspection Modal */}
      {isZoomModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#06180E]/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsZoomModalOpen(false)}
        >
          <div 
            className="relative max-w-5xl w-full bg-[#0A2617] border-2 border-white/20 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#0E331F] border-b border-white/15 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black text-emerald-200/80 uppercase tracking-wider block font-mono">
                  Hardware Visual Inspection · {activeSlide.badge}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {activeSlide.title}
                </h3>
              </div>
              <button
                onClick={() => setIsZoomModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video max-h-[70vh] w-full bg-[#040E08] flex items-center justify-center overflow-hidden">
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 bg-[#0E331F] border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <p className="text-white/90 max-w-2xl leading-relaxed">
                {activeSlide.description}
              </p>
              <button
                onClick={() => {
                  setIsZoomModalOpen(false);
                  openQuoteModal(activeSlide.title);
                }}
                className="shrink-0 px-4 py-2 rounded-xl bg-white hover:bg-emerald-50 text-[#0A2617] font-extrabold transition-colors cursor-pointer shadow-md"
              >
                Request Quotation on this Hardware
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Admin Image & Text Modals for Current Slide */}
      {isAdminLoggedIn && isEditMode && activeSlide && (
        <>
          <AdminImageModal
            isOpen={isAdminImageOpen}
            onClose={() => setIsAdminImageOpen(false)}
            currentImage={activeSlide.image}
            itemTitle={activeSlide.title}
            onSave={(newImg) => updateItemImage('hero_slides', activeSlide.id, newImg)}
            onDelete={() => deleteItemImage('hero_slides', activeSlide.id)}
          />

          <AdminTextModal
            isOpen={isAdminTextOpen}
            onClose={() => setIsAdminTextOpen(false)}
            item={activeSlide}
            sectionTitle={`Hero Slide: ${activeSlide.title}`}
            onSave={(updates) => updateItemText('hero_slides', activeSlide.id, updates)}
          />
        </>
      )}
    </section>
  );
};
