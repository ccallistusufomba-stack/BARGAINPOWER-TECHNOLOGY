import React from 'react';
import { useApp } from '../context/AppContext';
import { ChevronRight, Home } from 'lucide-react';
import { PageTab } from '../types';

export const Breadcrumbs: React.FC = () => {
  const { activeTab, setActiveTab, subPageTitle, setSubPageTitle } = useApp();

  // "home page tab will only be visible when visitor click on other tabs or pages or sub-pages"
  if (activeTab === 'home') {
    return null;
  }

  const getTabLabel = (tab: PageTab): string => {
    switch (tab) {
      case 'components': return 'Hardware Components';
      case 'sensors': return 'Sensors';
      case 'microcontrollers': return 'Micro Controllers';
      case 'contactors': return 'Contactors';
      case 'breakers': return 'Circuit Breakers';
      case 'servo': return 'Servo & Stepper Motors';
      case 'security': return 'Security & Fire Safety';
      case 'kincony': return 'KinCony IoT & Relay Controllers';
      case 'cctv': return 'Smart CCTV, NVR & DVR Systems';
      case 'services': return 'Engineering Services';
      case 'video': return 'Engineering Videos & Demos';
      case 'faq': return 'Technical Q&A / FAQs';
      case 'reviews': return 'Client Reviews';
      case 'contact': return 'Contact & Inquiries';
      case 'admin': return 'Admin Control Center';
      default: return tab;
    }
  };

  return (
    <nav 
      aria-label="Breadcrumb navigation"
      className="bg-white/80 backdrop-blur-sm border-b border-slate-200/80 sticky top-[108px] z-30 shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-2 text-xs md:text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
        <button
          onClick={() => {
            setActiveTab('home');
            setSubPageTitle(null);
          }}
          className="flex items-center gap-1.5 font-medium text-[#248C54] hover:text-[#1E7747] transition-colors cursor-pointer"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>

        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />

        <button
          onClick={() => setSubPageTitle(null)}
          className={`font-medium transition-colors cursor-pointer ${
            !subPageTitle ? 'text-slate-900 font-semibold' : 'text-[#248C54] hover:text-[#1E7747]'
          }`}
        >
          {getTabLabel(activeTab)}
        </button>

        {subPageTitle && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-semibold truncate max-w-xs md:max-w-md">
              {subPageTitle}
            </span>
          </>
        )}
      </div>
    </nav>
  );
};
