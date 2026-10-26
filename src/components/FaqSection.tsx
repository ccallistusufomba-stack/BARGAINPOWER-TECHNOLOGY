import React, { useState, useEffect } from 'react';
import { FAQS_DATA } from '../data/mockData';
import { FaqItem } from '../types';
import { useApp } from '../context/AppContext';
import { Search, ChevronDown, ChevronUp, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { openQuoteModal, subPageTitle } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1');

  useEffect(() => {
    if (subPageTitle) {
      if (subPageTitle.includes('Microcontroller')) setActiveCategory('microcontrollers');
      else if (subPageTitle.includes('Contactor')) setActiveCategory('contactors');
      else if (subPageTitle.includes('Snail')) setActiveCategory('services');
      else if (subPageTitle.includes('Student')) setActiveCategory('training');
    }
  }, [subPageTitle]);

  const categories = [
    { key: 'all', label: 'All Topics' },
    { key: 'microcontrollers', label: 'Micro Controllers' },
    { key: 'contactors', label: 'Contactors & Coils' },
    { key: 'relays', label: 'Relays & Isolation' },
    { key: 'services', label: 'Services & AgTech' },
    { key: 'training', label: 'Student Training' },
  ];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setExpandedFaqId(prev => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008080] mb-2 inline-block">
            Engineering Knowledge Base & FAQ
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1D20] tracking-tight mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Clear, authoritative answers regarding microcontrollers, inductive contactor wiring, smart relays, 
            dry-season snail farming automation, and university thesis guidance.
          </p>
        </div>

        {/* Search Bar Specifically for FAQ Content */}
        <div className="relative mb-6">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. contactor, ESP32, snail farming, relay back-EMF)..."
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#008080] text-slate-900 shadow-xs"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-200/60 rounded-xl mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-10">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-xl p-10 text-center border border-slate-200 text-slate-500">
              <p>No questions found matching your search. Type another keyword or ask our live chatbot!</p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
                >
                  {/* Clickable Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                    aria-expanded={isExpanded}
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#008080] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <span className="text-slate-400 p-1 rounded-full bg-slate-100 shrink-0">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {/* Expandable Accordion Body */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#FDFDFE] animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-6 bg-white rounded-xl border border-slate-200 text-center">
          <h3 className="font-bold text-slate-900 text-base mb-1">
            Have a Specific Question About Your Setup?
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            Our engineering team is ready to analyze your electrical schematic or project scope.
          </p>
          <button
            onClick={() => openQuoteModal('Technical Consultation')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#008080] hover:bg-[#006666] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Speak with an Engineer</span>
          </button>
        </div>

      </div>
    </div>
  );
};
