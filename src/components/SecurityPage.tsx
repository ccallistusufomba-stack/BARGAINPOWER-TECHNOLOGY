import React, { useState, useEffect } from 'react';
import { SecurityItem } from '../types';
import { useApp } from '../context/AppContext';
import { AdminImageOverlay } from './AdminImageOverlay';
import { BuyButton } from './BuyButton';
import { ComponentCategoryBar } from './ComponentCategoryBar';
import { 
  Flame, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight, 
  Zap, 
  Lock, 
  Thermometer, 
  Activity,
  Layers,
  Sparkles,
  Plus,
  Trash2
} from 'lucide-react';

export const SecurityPage: React.FC = () => {
  const { 
    openQuoteModal, 
    subPageTitle, 
    securityData, 
    addItem, 
    deleteItem, 
    isAdminLoggedIn, 
    isEditMode 
  } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<SecurityItem>(() => securityData[0] || ({} as SecurityItem));

  useEffect(() => {
    if (securityData.length > 0 && !activeItem?.id) {
      setActiveItem(securityData[0]);
    }
  }, [securityData, activeItem]);

  useEffect(() => {
    if (subPageTitle && securityData.length > 0) {
      const match = securityData.find(s => 
        s.name.toLowerCase().includes(subPageTitle.toLowerCase()) || 
        subPageTitle.toLowerCase().includes(s.name.toLowerCase()) ||
        s.id.toLowerCase().includes(subPageTitle.toLowerCase())
      );
      if (match) {
        setActiveItem(match);
        const el = document.getElementById(match.id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [subPageTitle, securityData]);

  const categories = ['All', 'Fire Suppression', 'Enclosure Safety', 'Power Isolation'];
  const filteredItems = securityData.filter(item => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  const handleAddNewSecurityItem = () => {
    const id = `sec-${Date.now()}`;
    const newItem: SecurityItem = {
      id,
      name: 'Automated Panel Suppression & Gas Detection Unit',
      category: 'Fire Suppression',
      operatingSpecs: 'Rapid discharge at 68°C or manual override; zero conductivity',
      activationMechanism: 'Thermo-bulb sensor / optical smoke relay trigger',
      idealFor: ['Distribution Boards', 'Inverter Racks', 'Battery Enclosures'],
      homeAutomationRole: 'Safeguards household and industrial distribution boards against catastrophic electrical fires.',
      image: '/src/assets/images/fire_extinguisher_auto_1791552230446.jpg',
      features: [
        'Non-conductive clean fire suppression agent',
        'Automatic 3-second rapid deluge',
        'Auxiliary dry-contact relay for sirens and grid disconnect'
      ]
    };
    addItem('security', newItem);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-10">
      {/* Top Component Category Switcher Bar */}
      <ComponentCategoryBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-xs border border-slate-200 mb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold font-mono uppercase mb-3">
              <Flame className="w-4 h-4 text-rose-600 animate-pulse" />
              <span>Electrical Fire Suppression & Automated Protection</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1D20] tracking-tight mb-3">
              Automatic Fire Extinguishers & Panel Security Systems
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              In modern residential and industrial automation, high currents flow through enclosed metal distribution boards, 
              inverters, and lithium battery banks. Standard building sprinklers cannot penetrate closed electrical cabinets. 
              Our automatic fire extinguishers activate autonomously at the first spark or heat rise, suppressing electrical 
              fires in under 3 seconds with non-conductive, residue-free clean agents.
            </p>
          </div>

          {/* Critical Protection Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
            <div className="p-4 bg-rose-50/50 rounded-lg border border-rose-200">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs mb-1.5">
                <Thermometer className="w-4 h-4 shrink-0" />
                <span>1. Autonomous Thermal Trigger (68°C)</span>
              </div>
              <p className="text-xs text-slate-600">
                Requires zero manual action. The thermo-sensitive glass bulb shatters automatically at 68°C (155°F), deluging the cabinet with clean gas.
              </p>
            </div>

            <div className="p-4 bg-emerald-50/50 rounded-lg border border-emerald-200">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs mb-1.5">
                <Zap className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>2. Zero Electrical Conductivity</span>
              </div>
              <p className="text-xs text-slate-600">
                100% safe for live 415V 3-phase and high-voltage DC lithium circuits. Will not cause electrical arcs, flashovers, or conductor shorts.
              </p>
            </div>

            <div className="p-4 bg-indigo-50/50 rounded-lg border border-indigo-200">
              <div className="flex items-center gap-2 text-indigo-800 font-bold text-xs mb-1.5">
                <ShieldCheck className="w-4 h-4 shrink-0 text-indigo-600" />
                <span>3. Non-Corrosive Clean Agent</span>
              </div>
              <p className="text-xs text-slate-600">
                Leaves zero corrosive chemical residue. Sensitive ESP32 microcontrollers, contactors, and relays remain undamaged after discharge.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Showcase: Automatic Fire Extinguisher */}
        <div className="bg-white rounded-2xl shadow-md border-2 border-rose-200 overflow-hidden mb-10">
          <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-slate-900 text-white px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-rose-600/60 rounded-lg backdrop-blur-xs">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[10px] tracking-widest font-black uppercase text-rose-200">
                  FLAGSHIP PANEL SAFETY SPECIFICATION
                </span>
                <h2 className="text-lg sm:text-xl font-black">
                  Automatic Fire Extinguisher System (Canister &amp; Fire Ball)
                </h2>
              </div>
            </div>
            <span className="text-xs font-mono bg-white/20 px-3 py-1 rounded-full text-white font-bold">
              Response: &lt; 3 Seconds
            </span>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Product Image */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <AdminImageOverlay
                section="security"
                itemId={filteredItems[0]?.id || 'security-extinguisher-auto'}
                imageUrl={filteredItems[0]?.image || '/src/assets/images/fire_extinguisher_auto_1791552230446.jpg'}
                itemTitle={filteredItems[0]?.name || 'Automatic Fire Extinguisher'}
                item={filteredItems[0]}
                placeholderHeight="h-56"
                className="w-full"
              >
                <div className="w-full aspect-4/3 rounded-xl overflow-hidden bg-slate-50 border-2 border-slate-200 shadow-inner relative group">
                  <img 
                    src={filteredItems[0]?.image || '/src/assets/images/fire_extinguisher_auto_1791552230446.jpg'} 
                    alt="Automatic Fire Extinguisher for Electrical Control Panels" 
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                    Thermal + Flame Ball
                  </div>
                </div>
              </AdminImageOverlay>
              <span className="text-[11px] text-slate-500 font-medium text-center mt-2.5">
                Includes powder-coated steel wall/panel mount bracket &amp; pressure gauge
              </span>
            </div>

            {/* Right: Technical Breakdown & Action */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                  Dual-Action Electrical Cabinet Fire Suppression
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Electrical fires originate from loose wire connections, contactor chatter, and lithium battery cell runaway. 
                  This system combines a <strong>68°C heat-actuated clean agent cylinder</strong> with an 
                  <strong>omnidirectional 360° dry chemical fire ball</strong>. When mounted inside or directly above 
                  automation enclosures, it smothers fires instantly before flames breach the enclosure.
                </p>

                {/* Features Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span><strong>68°C Thermal Bulb:</strong> Shatters automatically when internal cabinet air spikes</span>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span><strong>Non-Conductive:</strong> Completely safe for live 415V and high-voltage DC buses</span>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span><strong>Zero Maintenance:</strong> Requires no electrical wiring or backup batteries</span>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span><strong>Clean Agent:</strong> Non-corrosive gas leaves delicate microchips pristine</span>
                  </div>
                </div>
              </div>

              {/* Buy Button & Action Buttons */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <BuyButton 
                  item={{
                    id: 'sec-fire-ext-canister',
                    name: 'Automatic Electrical Fire Extinguisher Canister (68°C Thermal Bulb)',
                    category: 'Fire Suppression',
                    price: 64000,
                    image: '/src/assets/images/fire_extinguisher_auto_1791552230446.jpg'
                  }} 
                />

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => openQuoteModal('Automatic Fire Extinguisher Inquiry')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-rose-300 hover:bg-rose-50 text-rose-700 text-xs font-semibold transition-all cursor-pointer"
                  >
                    <Flame className="w-3.5 h-3.5 fill-current" />
                    <span>Request Fire Suppression Project Consultation</span>
                  </button>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Ideal for homes, solar rooms, factories &amp; EV workshops
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters & Admin Action */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-medium">
              Showing {filteredItems.length} safety &amp; security modules
            </span>
            {isAdminLoggedIn && isEditMode && (
              <button
                type="button"
                onClick={handleAddNewSecurityItem}
                className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Safety Component</span>
              </button>
            )}
          </div>
        </div>

        {/* Security Products: Continuous Alternating Layout */}
        <div className="space-y-8 mb-12">
          {filteredItems.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={item.id}
                id={item.id}
                className={`bg-white rounded-3xl shadow-xs border border-slate-300 hover:border-rose-400 transition-all p-6 sm:p-8 flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-stretch gap-6 sm:gap-8`}
              >
                {/* Medium Picture: Plain and Clear to View */}
                <div className="w-full md:w-80 lg:w-96 shrink-0 flex flex-col justify-center">
                  <AdminImageOverlay
                    section="security"
                    itemId={item.id}
                    imageUrl={item.image}
                    itemTitle={item.name}
                    item={item}
                    placeholderHeight="h-56"
                  >
                    <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-white border-2 border-slate-200 relative group p-3 shadow-inner flex items-center justify-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-lg bg-rose-600 text-white font-mono text-xs font-bold shadow-xs">
                        {item.category}
                      </div>
                    </div>
                  </AdminImageOverlay>

                  <span className="text-[11px] text-center text-slate-400 font-mono mt-2 block">
                    Electrical Panel Fire Suppression Unit
                  </span>
                </div>

                {/* Text and Specifications on Right (Alternating) */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 uppercase tracking-wider">
                        {item.category}
                      </span>
                      {isAdminLoggedIn && isEditMode && (
                        <button
                          type="button"
                          onClick={() => {
                            if (window.confirm(`Delete "${item.name}"?`)) {
                              deleteItem('security', item.id);
                            }
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Delete this security item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      {item.homeAutomationRole}
                    </p>

                    {/* Specs Box */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800 space-y-1.5 mb-3">
                      <div>
                        <span className="font-bold text-slate-900">Operating Specs: </span>
                        <span className="text-slate-600 font-mono">{item.operatingSpecs}</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900">Activation Mechanism: </span>
                        <span className="text-slate-600">{item.activationMechanism}</span>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-1.5 mb-2">
                      {item.features.slice(0, 4).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <button
                      onClick={() => openQuoteModal(`Safety Inquire: ${item.name}`)}
                      className="inline-flex items-center gap-1 text-slate-700 hover:text-rose-600 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <span>Request Safety Certificate Spec</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <BuyButton item={item} className="px-5 py-2.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
