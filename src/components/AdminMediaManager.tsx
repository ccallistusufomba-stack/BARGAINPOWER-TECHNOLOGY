import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CmsSection } from '../types';
import { 
  Camera, 
  Trash2, 
  Edit3, 
  Plus, 
  Search, 
  RefreshCw, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  ImageOff, 
  ExternalLink,
  ShieldAlert,
  Zap,
  Info
} from 'lucide-react';
import { AdminImageModal } from './AdminImageModal';
import { AdminTextModal } from './AdminTextModal';

export const AdminMediaManager: React.FC = () => {
  const { 
    heroSlides, 
    homeSections, 
    sensorsData, 
    microcontrollersData, 
    contactorsData, 
    breakersData, 
    motorsData, 
    securityData, 
    servicesData,
    updateItemImage,
    deleteItemImage,
    updateItemText,
    addItem,
    deleteItem,
    resetSectionToDefault,
    resetAllContentToDefault,
    setActiveTab
  } = useApp();

  const [activeSectionFilter, setActiveSectionFilter] = useState<CmsSection | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Image Modal State
  const [imageModalState, setImageModalState] = useState<{
    isOpen: boolean;
    section: CmsSection;
    itemId: string | number;
    currentImage?: string;
    itemTitle: string;
  }>({
    isOpen: false,
    section: 'home_sections',
    itemId: '',
    currentImage: '',
    itemTitle: ''
  });

  // Text Modal State
  const [textModalState, setTextModalState] = useState<{
    isOpen: boolean;
    section: CmsSection;
    itemId: string | number;
    item: any;
    sectionTitle: string;
  }>({
    isOpen: false,
    section: 'home_sections',
    itemId: '',
    item: null,
    sectionTitle: ''
  });

  const [feedbackMsg, setFeedbackMsg] = useState('');

  const showFeedback = (msg: string) => {
    setFeedbackMsg(msg);
    setTimeout(() => setFeedbackMsg(''), 3000);
  };

  // Compile unified list
  interface UnifiedItem {
    id: string | number;
    section: CmsSection;
    sectionName: string;
    pageTab: string;
    title: string;
    subtitle?: string;
    image?: string;
    rawItem: any;
  }

  const allItems: UnifiedItem[] = [
    ...heroSlides.map(s => ({
      id: s.id,
      section: 'hero_slides' as CmsSection,
      sectionName: 'Hero Carousel',
      pageTab: 'home',
      title: s.title,
      subtitle: s.badge || s.subtitle,
      image: s.image,
      rawItem: s
    })),
    ...homeSections.map(s => ({
      id: s.id,
      section: 'home_sections' as CmsSection,
      sectionName: 'Home Editorial',
      pageTab: 'home',
      title: s.question,
      subtitle: s.badge,
      image: s.image,
      rawItem: s
    })),
    ...servicesData.map(s => ({
      id: s.id,
      section: 'services' as CmsSection,
      sectionName: 'Services & Innovation',
      pageTab: 'services',
      title: s.title,
      subtitle: s.category,
      image: s.image,
      rawItem: s
    })),
    ...sensorsData.map(s => ({
      id: s.id,
      section: 'sensors' as CmsSection,
      sectionName: 'Components: Sensors',
      pageTab: 'sensors',
      title: s.name,
      subtitle: s.category,
      image: s.image,
      rawItem: s
    })),
    ...microcontrollersData.map(s => ({
      id: s.id,
      section: 'microcontrollers' as CmsSection,
      sectionName: 'Components: MCUs',
      pageTab: 'microcontrollers',
      title: s.name,
      subtitle: s.processor,
      image: s.image,
      rawItem: s
    })),
    ...contactorsData.map(s => ({
      id: s.id,
      section: 'contactors' as CmsSection,
      sectionName: 'Components: Contactors',
      pageTab: 'contactors',
      title: s.name,
      subtitle: `${s.poles} · ${s.powerType}`,
      image: s.image,
      rawItem: s
    })),
    ...breakersData.map(s => ({
      id: s.id,
      section: 'breakers' as CmsSection,
      sectionName: 'Components: Breakers',
      pageTab: 'breakers',
      title: s.name,
      subtitle: `${s.poles} · ${s.tripCurve}`,
      image: s.image,
      rawItem: s
    })),
    ...securityData.map(s => ({
      id: s.id,
      section: 'security' as CmsSection,
      sectionName: 'Components: Security',
      pageTab: 'security',
      title: s.name,
      subtitle: s.category,
      image: s.image,
      rawItem: s
    })),
    ...motorsData.map(s => ({
      id: s.id,
      section: 'servo' as CmsSection,
      sectionName: 'Components: Motors',
      pageTab: 'servo',
      title: s.name,
      subtitle: s.category,
      image: s.image,
      rawItem: s
    }))
  ];

  const filteredItems = allItems.filter(item => {
    const matchesSection = activeSectionFilter === 'all' || item.section === activeSectionFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || 
      item.title.toLowerCase().includes(q) || 
      (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
      item.sectionName.toLowerCase().includes(q);
    return matchesSection && matchesSearch;
  });

  const handleAddNewForSection = (targetSection: CmsSection) => {
    const timestamp = Date.now();
    if (targetSection === 'hero_slides') {
      addItem('hero_slides', {
        id: timestamp,
        title: 'New Featured Innovation',
        subtitle: 'Engineering Solution',
        badge: 'NEW PROTOTYPE',
        description: 'Advanced custom engineered solution built to industrial reliability standards.',
        image: '/src/assets/images/home_automation_relay_panel_1791552230446.jpg',
        actionText: 'View Details'
      });
    } else if (targetSection === 'home_sections') {
      addItem('home_sections', {
        id: `home-${timestamp}`,
        badge: 'ENGINEERING APPLIED',
        question: 'What is Next-Generation Smart Automation?',
        leadParagraph: 'Precision power monitoring and high-amperage switching designed for demanding setups.',
        bodyParagraph: 'High galvanic isolation, certified thermal protection, and robust IoT telemetry.',
        highlights: ['Real-time automated control', 'Industrial components', 'Dual safety redundancy'],
        primaryActionText: 'Explore Specs',
        primaryActionTarget: 'services',
        secondaryActionText: 'Request Quote',
        image: '/src/assets/images/home_automation_relay_panel_1791552230446.jpg'
      });
    } else if (targetSection === 'services') {
      addItem('services', {
        id: `service-${timestamp}`,
        title: 'New Custom Engineering Service',
        category: 'Applied Hardware Innovation',
        shortDesc: 'Turnkey automation, precision mechanical prototyping, and firmware engineering.',
        fullDesc: 'End-to-end engineering including CAD schematics, PCB fabrication, bench testing, and commissioning.',
        highlights: ['Custom PCB CAD layout', 'Firmware development', 'Stress bench tested'],
        deliverables: ['Assembled unit', 'Complete schematics', 'Firmware source', '12-Month support'],
        image: '/src/assets/images/home_automation_relay_panel_1791552230446.jpg'
      });
    } else if (targetSection === 'sensors') {
      addItem('sensors', {
        id: `sensor-${timestamp}`,
        name: 'New Precision Sensor Module',
        category: 'Environmental & Temperature',
        operatingVoltage: '3.3V – 5V DC',
        compatibleWith: ['ESP32', 'Arduino Uno'],
        workingPrinciple: 'High accuracy analog and digital telemetry acquisition.',
        homeAutomationUses: 'Monitors real-time telemetry to trigger automated relays.',
        pinout: 'VCC, GND, OUT/DATA',
        tags: ['Sensor', 'Telemetry', 'IoT'],
        image: '/src/assets/images/esp32_iot_controller_relay_1791552230446.jpg'
      });
    } else if (targetSection === 'microcontrollers') {
      addItem('microcontrollers', {
        id: `mcu-${timestamp}`,
        name: 'New Microcontroller Development Board',
        processor: 'Xtensa 32-bit SoC @ 240 MHz',
        operatingVoltage: '3.3V Logic / 5V USB',
        clockSpeed: '240 MHz Peak',
        flashMemory: '16MB QSPI Flash',
        sram: '512KB SRAM',
        gpioPins: '36 GPIOs',
        wirelessConnectivity: 'Wi-Fi 802.11 b/g/n + BLE 5.0',
        homeAutomationRole: 'Provides deterministic control and wireless communication at edge nodes.',
        recommendedUseCases: ['Industrial IoT Gateway', 'Smart Relay Controller'],
        image: '/src/assets/images/esp32_iot_controller_relay_1791552230446.jpg'
      });
    } else if (targetSection === 'contactors') {
      addItem('contactors', {
        id: `contactor-${timestamp}`,
        name: '3-Pole Magnetic Contactor (40A / 18.5kW)',
        powerType: 'AC Powered',
        poles: '3-Pole',
        ratedCurrent: '40A Continuous',
        coilVoltage: '220VAC / 50Hz',
        connectionDiagramDescription: 'Line and load switching with arc chamber suppression.',
        terminalDetails: 'L1/L2/L3 to Main Power. A1/A2 to Control Relay.',
        homeIndustrialApplications: 'Pumps, air conditioners, compressors.',
        wiringDiagramSvgType: 'ac_3pole',
        image: '/src/assets/images/contactor_3pole_modular_1791552272813.jpg'
      });
    } else if (targetSection === 'breakers') {
      addItem('breakers', {
        id: `breaker-${timestamp}`,
        name: 'Smart WiFi DIN Rail Circuit Breaker (63A)',
        poles: '2-Pole (2P)',
        type: 'Smart WiFi Breaker',
        tripCurve: 'C Curve (5-10x In)',
        currentRatings: '63A Max',
        breakingCapacity: '6kA (6,000A)',
        automationNeedReason: 'Protects critical loads and enables remote load shedding.',
        smartCapabilities: 'Remote switching and energy meter reporting.',
        image: '/src/assets/images/din_mcb_2pole_1791552230446.jpg'
      });
    } else if (targetSection === 'security') {
      addItem('security', {
        id: `sec-${timestamp}`,
        name: 'Automatic Control Panel Fire Extinguisher',
        category: 'Fire Suppression',
        operatingSpecs: 'Rapid discharge at 68°C thermal trigger',
        activationMechanism: 'Thermo-bulb shatter activation',
        idealFor: ['Distribution Boards', 'Inverter Racks'],
        homeAutomationRole: 'Suppresses electrical arcs and thermal runaway automatically in < 3s.',
        image: '/src/assets/images/fire_extinguisher_auto_1791552230446.jpg',
        features: ['Non-conductive clean gas', 'Zero chemical residue', 'Requires no battery']
      });
    } else if (targetSection === 'servo') {
      addItem('servo', {
        id: `motor-${timestamp}`,
        name: 'High-Torque Metal Gear Actuator / Motor',
        category: 'Servo Motor',
        torqueRating: '15 kg-cm @ 6.0V',
        voltage: '4.8V – 7.2V DC',
        controlMethod: 'PWM 50Hz Control Signal',
        applications: ['Robotic Arms', 'Solar Trackers', 'Aircraft Surfaces'],
        description: 'Precision digital actuator with hardened metal gears for heavy mechanical loads.',
        image: '/src/assets/images/carbon_aircraft_drone_1791552230446.jpg'
      });
    }
    showFeedback('✓ New item created successfully! You can now change its picture or edit its text.');
  };

  return (
    <div className="space-y-6">
      {/* CMS Header & Live Notice */}
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-white shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#248C54]/30 text-[#97CD97] border border-[#97CD97]/40 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#97CD97]" />
            <span>Visual No-Code CMS &amp; Media Engine</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black">
            Site Picture &amp; Content Management System
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Add, change, or delete pictures and edit technical text across all 9 site sections directly without touching source code.
            Changes persist safely and synchronize across the entire application.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => {
              if (window.confirm('Reset ALL site content and pictures back to factory defaults?')) {
                resetAllContentToDefault();
                showFeedback('✓ All content has been reset to factory defaults.');
              }
            }}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer flex items-center gap-1.5"
            title="Reset all sections to factory pristine data"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset All to Factory Defaults</span>
          </button>
        </div>
      </div>

      {feedbackMsg && (
        <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-300 text-xs font-bold flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{feedbackMsg}</span>
        </div>
      )}

      {/* Filter Toolbar: Section Buttons & Search */}
      <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 space-y-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Section Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'all', label: `All Sections (${allItems.length})` },
              { id: 'hero_slides', label: `Home Hero (${heroSlides.length})` },
              { id: 'home_sections', label: `Home Cards (${homeSections.length})` },
              { id: 'services', label: `Services & Innovation (${servicesData.length})` },
              { id: 'sensors', label: `Sensors (${sensorsData.length})` },
              { id: 'microcontrollers', label: `MCUs (${microcontrollersData.length})` },
              { id: 'contactors', label: `Contactors (${contactorsData.length})` },
              { id: 'breakers', label: `Breakers (${breakersData.length})` },
              { id: 'security', label: `Fire Extinguishers (${securityData.length})` },
              { id: 'servo', label: `Motors (${motorsData.length})` }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveSectionFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeSectionFilter === tab.id
                    ? 'bg-[#248C54] text-white shadow-md'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full lg:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search items by name..."
              className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:ring-2 focus:ring-[#248C54] focus:outline-hidden"
            />
          </div>
        </div>

        {/* Section Quick Add Action */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2 text-xs">
          <span className="text-slate-400 font-medium">
            Showing <strong className="text-white">{filteredItems.length}</strong> items in view
          </span>

          <div className="flex items-center gap-2">
            {activeSectionFilter !== 'all' ? (
              <button
                type="button"
                onClick={() => handleAddNewForSection(activeSectionFilter as CmsSection)}
                className="px-3.5 py-1.5 rounded-xl bg-[#248C54] hover:bg-[#1E7747] text-white font-bold shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Add Item to Current Section</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleAddNewForSection('home_sections')}
                className="px-3.5 py-1.5 rounded-xl bg-[#248C54] hover:bg-[#1E7747] text-white font-bold shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Add New Section Item</span>
              </button>
            )}

            {activeSectionFilter !== 'all' && (
              <button
                type="button"
                onClick={() => {
                  if (window.confirm(`Reset "${activeSectionFilter}" section back to pristine defaults?`)) {
                    resetSectionToDefault(activeSectionFilter as CmsSection);
                    showFeedback(`✓ Section "${activeSectionFilter}" reset to factory defaults.`);
                  }
                }}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 font-semibold cursor-pointer"
              >
                Reset Section
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid of Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item) => {
          const hasImage = Boolean(item.image && item.image.trim().length > 0);

          return (
            <div
              key={`${item.section}-${item.id}`}
              className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-sm flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Image Container with Direct Action Controls */}
                <div className="relative aspect-16/10 bg-slate-950 overflow-hidden group">
                  {hasImage ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-slate-950 border-b border-dashed border-slate-800">
                      <ImageOff className="w-8 h-8 text-slate-600 mb-1" />
                      <span className="text-xs font-bold text-slate-400">No Picture Assigned</span>
                      <span className="text-[10px] text-slate-600 mt-0.5">Click "Change Picture" below to add</span>
                    </div>
                  )}

                  {/* Section Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[10px] font-bold text-[#97CD97] border border-white/10 uppercase tracking-wide">
                    {item.sectionName}
                  </div>

                  {/* Image Overlay Controls */}
                  <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        setImageModalState({
                          isOpen: true,
                          section: item.section,
                          itemId: item.id,
                          currentImage: item.image,
                          itemTitle: item.title
                        });
                      }}
                      className="px-2.5 py-1 rounded-lg bg-[#248C54] hover:bg-[#1E7747] text-white text-[11px] font-bold shadow-md flex items-center gap-1 cursor-pointer"
                      title="Change or upload picture"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>{hasImage ? 'Change' : 'Add'} Picture</span>
                    </button>

                    {hasImage && (
                      <button
                        type="button"
                        onClick={() => {
                          if (window.confirm(`Delete picture for "${item.title}"?`)) {
                            deleteItemImage(item.section, item.id);
                            showFeedback(`✓ Picture removed for "${item.title}"`);
                          }
                        }}
                        className="p-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold shadow-md cursor-pointer"
                        title="Delete this picture"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-4 space-y-2">
                  {item.subtitle && (
                    <span className="text-[10px] font-bold font-mono text-purple-400 uppercase tracking-wider block">
                      {item.subtitle}
                    </span>
                  )}
                  <h3 className="font-bold text-white text-sm leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setTextModalState({
                      isOpen: true,
                      section: item.section,
                      itemId: item.id,
                      item: item.rawItem,
                      sectionTitle: item.title
                    });
                  }}
                  className="px-3 py-1.5 rounded-lg bg-purple-700/80 hover:bg-purple-800 text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  title="Edit titles, descriptions, and specifications without coding"
                >
                  <Edit3 className="w-3 h-3 text-purple-200" />
                  <span>Edit Text</span>
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab(item.pageTab as any);
                    }}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors cursor-pointer"
                    title={`View in live page (${item.pageTab})`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm(`Delete item "${item.title}" from ${item.sectionName}?`)) {
                        deleteItem(item.section, item.id);
                        showFeedback(`✓ Item "${item.title}" deleted.`);
                      }
                    }}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-950 hover:text-red-400 text-slate-400 text-xs transition-colors cursor-pointer"
                    title="Delete entire item from section"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Image Modal */}
      <AdminImageModal
        isOpen={imageModalState.isOpen}
        onClose={() => setImageModalState(prev => ({ ...prev, isOpen: false }))}
        currentImage={imageModalState.currentImage}
        itemTitle={imageModalState.itemTitle}
        onSave={(newImg) => {
          updateItemImage(imageModalState.section, imageModalState.itemId, newImg);
          showFeedback(`✓ Picture successfully updated for "${imageModalState.itemTitle}"`);
        }}
        onDelete={() => {
          deleteItemImage(imageModalState.section, imageModalState.itemId);
          showFeedback(`✓ Picture removed for "${imageModalState.itemTitle}"`);
        }}
      />

      {/* Text Modal */}
      {textModalState.item && (
        <AdminTextModal
          isOpen={textModalState.isOpen}
          onClose={() => setTextModalState(prev => ({ ...prev, isOpen: false, item: null }))}
          item={textModalState.item}
          sectionTitle={textModalState.sectionTitle}
          onSave={(updates) => {
            updateItemText(textModalState.section, textModalState.itemId, updates);
            showFeedback(`✓ Text specifications saved for "${textModalState.sectionTitle}"`);
          }}
        />
      )}
    </div>
  );
};
