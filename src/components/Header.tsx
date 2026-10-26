import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { PageTab } from '../types';
import { 
  Menu, 
  X, 
  Mail, 
  Zap, 
  Layers, 
  HelpCircle, 
  Star, 
  FileText, 
  ChevronDown,
  ArrowRight,
  ChevronRight,
  Lock,
  ShieldCheck,
  ShoppingCart,
  ShoppingBag,
  Video,
  PlayCircle
} from 'lucide-react';
import { WhatsAppIcon } from './FloatingWhatsApp';

interface NavDropdownItem {
  title: string;
  subLabel?: string;
  tabTarget?: PageTab;
  action?: () => void;
}

interface NavTabConfig {
  tab: PageTab;
  label: string; // CAPITALIZED
  icon: React.ReactNode;
  dropdownItems: NavDropdownItem[];
}

export const Header: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    openQuoteModal, 
    settings, 
    unreadAdminChats, 
    subPageTitle, 
    setSubPageTitle,
    isAdminLoggedIn,
    openLoginModal,
    cartCount,
    cartTotal,
    openCheckout
  } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<PageTab | null>(null);
  const [mobileExpandedTab, setMobileExpandedTab] = useState<PageTab | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerContainerRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerContainerRef.current && !headerContainerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavClick = (tab: PageTab, subTitle?: string) => {
    setActiveTab(tab);
    if (subTitle) {
      setSubPageTitle(subTitle);
    } else {
      setSubPageTitle(null);
    }
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  const handleMouseEnter = (tab: PageTab) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setOpenDropdown(tab);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  // ALL TABS IN ONE SINGLE ROW: COMPONENTS, SERVICES & INNOVATION, TECHNICAL FAQS, CLIENT REVIEWS, CONTACT US, ADMIN PORTAL
  const allTabs: NavTabConfig[] = [
    {
      tab: 'components',
      label: 'COMPONENTS',
      icon: <Layers className="w-3.5 h-3.5" />,
      dropdownItems: [
        { 
          title: 'SENSORS', 
          subLabel: 'Surveillance, Soil Moisture & Hall Effect Probes', 
          action: () => handleNavClick('sensors', 'Sensors Directory') 
        },
        { 
          title: 'MICRO CONTROLLERS', 
          subLabel: 'ESP32 Dual-Core (240MHz) & Arduino Uno/Nano', 
          action: () => handleNavClick('microcontrollers', 'Microcontrollers') 
        },
        { 
          title: 'CONTACTORS', 
          subLabel: '3-Pole AC/DC Heavy Inductive Power Starters', 
          action: () => handleNavClick('contactors', 'Contactors') 
        },
        { 
          title: 'BREAKERS', 
          subLabel: '3P MCB, MCCB & Smart WiFi Energy DIN Breakers', 
          action: () => handleNavClick('breakers', 'Breakers') 
        },
        { 
          title: 'SERVO & MOTORS', 
          subLabel: 'Metal Servos, NEMA Steppers & 72V BLDC Hubs', 
          action: () => handleNavClick('servo', 'Servo & Motors') 
        },
        { 
          title: 'SECURITY', 
          subLabel: 'Automatic Fire Extinguishers & Panel Protection', 
          action: () => handleNavClick('security', 'Security & Fire Safety') 
        },
        { 
          title: 'KINCONY', 
          subLabel: 'ESP32 Smart Relay, MOSFET & IoT Controllers (90 Official Devices)', 
          action: () => handleNavClick('kincony', 'KinCony Smart Controllers') 
        },
        { 
          title: 'SMART CCTV, NVR & DVR', 
          subLabel: '4K AI Cameras, NVR Recorders & PoE Kits (CloudSecurity)', 
          action: () => handleNavClick('cctv', 'Smart CCTV, NVR & DVR') 
        }
      ]
    },
    {
      tab: 'services',
      label: 'SERVICES & INNOVATION',
      icon: <Zap className="w-3.5 h-3.5" />,
      dropdownItems: [
        { title: 'Full Home Automation Systems', subLabel: 'Custom Relay Panels & Wireless App Control' },
        { title: 'Smart Agricultural Irrigation & Snail Farming Automation', subLabel: 'Perpetual Cool Misting Chambers & Soil Probes' },
        { title: 'Electric Vehicle Conversions & Ground-Up Builds', subLabel: 'Petrol to Pure Battery Drivetrain Overhauls' },
        { title: 'Building of Custom Electric Bikes & Commuter Scooters', subLabel: '72V High-Torque Commuters & Samsung Cells' },
        { title: 'Building of Aircraft Models & Carbon Fiber Prototypes', subLabel: 'Aerodrome Bird Dispersal & GPS Autopilots' },
        { title: 'Innovating Electric Aircraft & eVTOL Engineering', subLabel: 'Next-Gen High-Efficiency Flight Propulsion' },
        { title: 'Solar Power Customization & Off-Grid Energy Systems', subLabel: 'LiFePO4 Lithium Battery Storage & Inverters' },
        { title: 'Undergraduate Engineering Mentorship', subLabel: 'Electrical, Mech & Mechatronics Project Guidance' }
      ]
    },
    {
      tab: 'video',
      label: 'VIDEOS',
      icon: <Video className="w-3.5 h-3.5" />,
      dropdownItems: [
        { 
          title: 'All Engineering Video Demonstrations', 
          subLabel: 'Watch Laboratory Field Tests & Hardware Demos', 
          action: () => handleNavClick('video') 
        }
      ]
    },
    {
      tab: 'faq',
      label: 'TECHNICAL FAQS',
      icon: <HelpCircle className="w-3.5 h-3.5" />,
      dropdownItems: [
        { title: 'Microcontroller Q&A', subLabel: 'ESP32 vs Arduino Architecture & Pinouts' },
        { title: 'Contactor & Relay Safety', subLabel: 'Back-EMF Arc Suppression & Phase Isolation' },
        { title: 'Snail Farming Technology', subLabel: 'Preventing Dry Season Aestivation & Heat Stress' },
        { title: 'Student Project Standards', subLabel: 'Thesis Defense Examination Criteria & Prototypes' }
      ]
    },
    {
      tab: 'reviews',
      label: 'CLIENT REVIEWS',
      icon: <Star className="w-3.5 h-3.5" />,
      dropdownItems: [
        { title: 'Verified Field Reports', subLabel: 'Industrial Facilities & Agritech Customer Reports' },
        { title: 'Submit Client Review', subLabel: 'Share Your Build Experience with Our Team' }
      ]
    },
    {
      tab: 'contact',
      label: 'CONTACT US',
      icon: <Mail className="w-3.5 h-3.5" />,
      dropdownItems: [
        { title: 'Smart 4-Field Inquiry Form', subLabel: 'Fast Dispatch with Technical Audit Request' },
        { title: 'Official WhatsApp Hotline', subLabel: '+2348037704936 · Instant Direct Support' },
        { title: 'Technical Helpdesk Email', subLabel: 'biockhelpdesk@gmail.com · Direct Inquiries' }
      ]
    },
    {
      tab: 'admin',
      label: 'ADMIN PORTAL',
      icon: <FileText className="w-3.5 h-3.5" />,
      dropdownItems: [
        { title: 'Video Clips & Upload Studio', subLabel: 'Upload New Video Clips & Manage Streams', action: () => handleNavClick('admin', 'admin_videos') },
        { title: 'Fulfillment & Shipping Queue', subLabel: 'Track Paid Bank Orders & Dispatch', action: () => handleNavClick('admin', 'shipping_queue') },
        { title: 'Live Inbound Message Queue', subLabel: 'Customer Form Inquiries & Responses', action: () => handleNavClick('admin', 'inquiries') },
        { title: 'Chatbot Triage Handovers', subLabel: 'Instant Live Chat Replies & Session Logs', action: () => handleNavClick('admin', 'chat_triage') },
        { title: 'Site Media & Picture CMS', subLabel: 'Direct Live Image Uploader & Editor', action: () => handleNavClick('admin', 'cms_media') },
        { title: 'Website Visitor Analytics', subLabel: 'Real-time IP, Device & Navigation Logs', action: () => handleNavClick('admin', 'visitors') }
      ]
    }
  ];

  // Only display ADMIN PORTAL to logged in team/staff members - hidden for visitors!
  const visibleTabs = allTabs.filter(item => item.tab !== 'admin' || isAdminLoggedIn);

  const render3DContouredTab = (item: NavTabConfig, index: number) => {
    const isComponentsGroup = ['components', 'sensors', 'microcontrollers', 'contactors', 'breakers', 'servo', 'security', 'kincony'].includes(activeTab);
    const isActive = item.tab === 'components' ? isComponentsGroup : activeTab === item.tab;
    const isDropdownOpen = openDropdown === item.tab;

    // Dropdown horizontal alignment: right-align for later tabs so they don't clip off-screen
    const isRightAligned = index >= 3;

    return (
      <div 
        key={item.tab} 
        className="relative group inline-block shrink-0"
        onMouseEnter={() => handleMouseEnter(item.tab)}
        onMouseLeave={handleMouseLeave}
      >
        {/* 
          Tab Button:
          - NO GREEN COLOUR on tabs
          - Neutral base state: clean slate/gray
          - When pointed with mouse: changes to #89618e
          - Active state: #89618e with white text
        */}
        <button
          type="button"
          onClick={() => {
            if (openDropdown === item.tab) {
              handleNavClick(item.tab);
            } else {
              setOpenDropdown(item.tab);
              setActiveTab(item.tab);
            }
          }}
          className={`relative px-2.5 xl:px-3.5 py-1.5 rounded-lg text-[10.5px] xl:text-[11.5px] font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 cursor-pointer select-none shrink-0
            ${isActive 
              ? 'bg-[#89618E] text-white shadow-md shadow-[#89618E]/30 border-t border-t-white/40 border-b-2 border-b-[#5B3960] scale-[1.01]' 
              : 'bg-slate-100 text-slate-800 hover:bg-[#89618E] hover:text-white border border-slate-200 shadow-xs hover:border-[#6F4773]'
            }
            ${isDropdownOpen && !isActive ? 'bg-[#89618E] text-white border-[#6F4773]' : ''}
            active:translate-y-0.5
          `}
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          <span className={`transition-colors ${isActive || isDropdownOpen ? 'text-white' : 'text-slate-600 group-hover:text-white'}`}>
            {item.icon}
          </span>
          <span className="tracking-wide font-extrabold">{item.label}</span>
          
          {item.tab === 'admin' && unreadAdminChats > 0 && (
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping ml-0.5"></span>
          )}

          <ChevronDown 
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isDropdownOpen ? 'rotate-180 text-white' : isActive ? 'text-white' : 'text-slate-500 group-hover:text-white'
            }`} 
          />

          {isActive && (
            <span className="absolute -bottom-1 left-2 right-2 h-0.5 bg-white rounded-full shadow-[0_0_6px_white]"></span>
          )}
        </button>

        {/* ACTIVATED DROPDOWN MENU POPOVER */}
        <div 
          className={`absolute top-full mt-2 w-72 sm:w-80 bg-[#13121E] border-2 border-[#89618E] rounded-2xl shadow-2xl p-2.5 z-50 backdrop-blur-md transition-all duration-200 transform origin-top
            ${isRightAligned ? 'right-0' : 'left-0'}
            ${isDropdownOpen 
              ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto' 
              : 'opacity-0 invisible -translate-y-2 scale-95 pointer-events-none'
            }
          `}
          onMouseEnter={() => handleMouseEnter(item.tab)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Header pill inside dropdown */}
          <div className="text-[10px] uppercase font-black text-purple-200 font-mono px-3 py-1.5 border-b border-[#89618E]/50 flex items-center justify-between bg-[#89618E]/25 rounded-lg mb-1.5">
            <span className="tracking-wider">{item.label} DIRECTORY</span>
            <span className="text-[9px] text-white bg-[#89618E] px-1.5 py-0.5 rounded font-bold">
              {item.dropdownItems.length} options
            </span>
          </div>

          {/* List of interactive dropdown items */}
          <div className="py-1 space-y-1 max-h-[65vh] overflow-y-auto pr-1">
            {item.dropdownItems.map((sub, idx) => {
              const isSubActive = 
                (item.tab === 'components' && (
                  (sub.title === 'SENSORS' && activeTab === 'sensors') ||
                  (sub.title === 'MICRO CONTROLLERS' && activeTab === 'microcontrollers') ||
                  (sub.title === 'CONTACTORS' && activeTab === 'contactors') ||
                  (sub.title === 'BREAKERS' && activeTab === 'breakers') ||
                  (sub.title === 'SERVO & MOTORS' && activeTab === 'servo') ||
                  (sub.title === 'SECURITY' && activeTab === 'security') ||
                  (sub.title === 'KINCONY' && activeTab === 'kincony') ||
                  (sub.title === 'SMART CCTV, NVR & DVR' && activeTab === 'cctv')
                )) ||
                (activeTab === item.tab && subPageTitle === sub.title);

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (sub.action) {
                      sub.action();
                    } else {
                      handleNavClick(item.tab, sub.title);
                    }
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex flex-col cursor-pointer group/item ${
                    isSubActive
                      ? 'bg-[#89618E] text-white font-bold border-l-4 border-white shadow-md'
                      : 'hover:bg-[#89618E]/40 text-slate-200 hover:text-white border-l-4 border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[11.5px] font-extrabold tracking-wide ${isSubActive ? 'text-white' : 'text-slate-100 group-hover/item:text-purple-200'}`}>
                      {sub.title}
                    </span>
                    <ArrowRight className={`w-3 h-3 shrink-0 transition-transform group-hover/item:translate-x-1 ${isSubActive ? 'text-white' : 'text-purple-300 opacity-60 group-hover/item:opacity-100'}`} />
                  </div>
                  {sub.subLabel && (
                    <span className={`text-[10px] mt-0.5 leading-snug ${isSubActive ? 'text-purple-100 font-medium' : 'text-slate-300/80 group-hover/item:text-purple-100'}`}>
                      {sub.subLabel}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Tab Explore Action Footer */}
          <div className="pt-2 mt-1 border-t border-[#89618E]/30 flex items-center justify-between text-[10px] px-2 text-purple-200/80">
            <span>Click to explore section</span>
            <button
              onClick={() => {
                if (item.tab === 'components') {
                  handleNavClick('sensors');
                } else {
                  handleNavClick(item.tab);
                }
              }}
              className="text-purple-200 hover:text-white font-bold underline flex items-center gap-1 cursor-pointer"
            >
              <span>Open {item.label}</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <header 
      ref={headerContainerRef} 
      className="sticky top-0 z-40 w-full shadow-md bg-white border-b border-slate-200"
    >
      {/* 1. Top Announcement Bar: Clean White-Gray on White Header */}
      <div className="bg-[#F8FAF9] text-slate-700 text-xs py-1.5 px-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 font-medium">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#248C54] animate-pulse shrink-0"></span>
            <span className="truncate text-slate-800 font-semibold">
              {settings.topAnnouncement || 'BARGAINPOWER & TECHNOLOGY · Home Automation, Microcontrollers, EV Conversions & Smart Irrigation'}
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-[11px] shrink-0 text-slate-700 font-semibold">
            <a 
              href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-700 hover:text-[#248C54] transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
              <span>WhatsApp: {settings.whatsappNumber}</span>
            </a>
            <span className="text-slate-400 hidden md:inline">|</span>
            <a 
              href={`mailto:${settings.helpEmail}`} 
              className="hidden md:flex items-center gap-1 text-slate-700 hover:text-[#248C54] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#248C54]" />
              <span>{settings.helpEmail}</span>
            </a>
            <span className="text-slate-300">|</span>
            <button
              type="button"
              onClick={openLoginModal}
              className="flex items-center gap-1 text-slate-600 hover:text-[#248C54] transition-colors cursor-pointer"
              title={isAdminLoggedIn ? "Staff Session Active" : "Authorized Staff & Team Portal"}
            >
              <Lock className="w-3 h-3 text-[#248C54]" />
              <span>{isAdminLoggedIn ? "Staff Active" : "Team Portal"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Container: Background is White */}
      <div className="bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Top Row: COMPANY NAME (EXACT #248C54 COLOUR) & CTA */}
          <div className="flex items-center justify-between py-3.5 gap-4">
            
            {/* COMPANY NAME: (BARGAINPOWER & TECHNOLOGY) IS #248C54 COLOUR */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex flex-col text-left group cursor-pointer focus:outline-hidden"
              aria-label="BARGAINPOWER & TECHNOLOGY Home"
            >
              <div className="flex items-baseline flex-wrap">
                <span className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-[#248C54] uppercase leading-none font-sans group-hover:text-[#1E7747] transition-colors">
                  BARGAINPOWER
                </span>
                <span className="text-lg sm:text-xl lg:text-2xl font-black text-[#248C54] tracking-tight ml-2 group-hover:text-[#1E7747] transition-colors">
                  &amp; TECHNOLOGY
                </span>
              </div>
              <span className="block text-[9px] sm:text-[10px] lg:text-[11px] font-bold text-slate-600 tracking-wider uppercase mt-1">
                Innovative Engineering · Automation · Electric Mobility
              </span>
            </button>

            {/* Top Right Actions: Cart & Checkout, Sticky "Get a Quote", Mobile hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Cart / Checkout Button with active badge */}
              <button
                type="button"
                onClick={() => openCheckout()}
                className="relative inline-flex items-center gap-2 px-3 sm:px-3.5 py-2 text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg shadow-xs hover:shadow transition-all cursor-pointer active:scale-95"
                title="View Shopping Cart & Checkout"
              >
                <div className="relative">
                  <ShoppingCart className="w-4 h-4 text-slate-700" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2.5 min-w-[17px] h-[17px] px-1 rounded-full bg-emerald-600 text-white text-[10px] font-mono font-black flex items-center justify-center shadow-xs">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline font-extrabold">Cart / Buy</span>
              </button>

              <button
                onClick={() => openQuoteModal()}
                className="relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-extrabold text-white bg-[#248C54] hover:bg-[#1E7747] rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap border-t border-t-[#97CD97]"
              >
                <Zap className="w-3.5 h-3.5 fill-current text-[#97CD97]" />
                <span>Get a Quote / Inquire Now</span>
              </button>

              {/* Mobile Menu Icon */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-[#248C54] text-white hover:bg-[#1E7747] focus:outline-hidden focus:ring-2 focus:ring-[#248C54] transition-colors cursor-pointer border border-[#14532D]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* TAB BACKGROUND IS WHITE: ALL TABS IN ONE SINGLE ROW WITH ACTIVATED DROPDOWNS */}
          <nav className="hidden lg:block pb-3 pt-1 border-t border-slate-200 overflow-visible">
            {/* The Tab Deck Background: White background */}
            <div className="w-full bg-white p-1 rounded-xl flex items-center justify-between gap-1 xl:gap-2 overflow-visible">
              {visibleTabs.map((item, index) => render3DContouredTab(item, index))}
            </div>
          </nav>

        </div>
      </div>

      {/* Break with White-Gray Colour between Header and Hero Section */}
      <div 
        className="w-full h-3 sm:h-3.5 bg-[#F1F3F5] border-t border-[#E2E8F0] border-b border-[#CBD5E1] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]" 
        aria-hidden="true"
      />

      {/* Mobile / Tablet Dropdown Menu with Expandable Accordions */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b-2 border-[#248C54] shadow-2xl px-4 py-3 animate-fadeIn">
          <div className="space-y-2 pb-2">
            {visibleTabs.map((item) => {
              const isComponentsGroup = ['components', 'sensors', 'microcontrollers', 'contactors', 'breakers', 'servo', 'security', 'kincony', 'cctv'].includes(activeTab);
              const isActive = item.tab === 'components' ? isComponentsGroup : activeTab === item.tab;
              const isExpanded = mobileExpandedTab === item.tab;

              return (
                <div key={item.tab} className="rounded-xl border border-slate-200 bg-[#F8FAF9] overflow-hidden shadow-xs">
                  <div className="flex items-center justify-between p-1.5">
                    <button
                      onClick={() => {
                        handleNavClick(item.tab);
                      }}
                      className={`flex-grow flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider text-left transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#89618E] text-white'
                          : 'bg-slate-100 text-slate-800 hover:bg-[#89618E] hover:text-white'
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span className="truncate">{item.label}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setMobileExpandedTab(isExpanded ? null : item.tab)}
                      className="p-2 text-slate-500 hover:text-[#89618E] rounded-lg transition-colors cursor-pointer"
                      aria-label={`Toggle ${item.label} sub-menu`}
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180 text-[#89618E]' : ''}`} />
                    </button>
                  </div>

                  {/* Accordion Sub-Menu */}
                  {isExpanded && (
                    <div className="bg-[#13121E] p-2.5 border-t border-[#89618E]/40 space-y-1">
                      <div className="text-[10px] uppercase font-bold text-purple-200 font-mono px-2 py-0.5">
                        {item.label} OPTIONS:
                      </div>
                      {item.dropdownItems.map((sub, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => {
                            if (sub.action) {
                              sub.action();
                            } else {
                              handleNavClick(item.tab, sub.title);
                            }
                          }}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs hover:bg-[#89618E] text-slate-200 hover:text-white transition-colors flex items-center justify-between"
                        >
                          <span className="font-semibold">{sub.title}</span>
                          <ArrowRight className="w-3 h-3 text-purple-300" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-700 font-bold">
            <span>Official Desk:</span>
            <a 
              href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#248C54] font-black flex items-center gap-1.5 hover:underline"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#248C54]" />
              <span>{settings.whatsappNumber}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
