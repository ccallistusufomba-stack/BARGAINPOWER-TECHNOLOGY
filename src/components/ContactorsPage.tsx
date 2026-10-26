import React, { useState, useEffect } from 'react';
import { ContactorItem } from '../types';
import { useApp } from '../context/AppContext';
import { Layers, Zap, ShieldAlert, CheckCircle2, ChevronRight, Activity, ArrowDown, Plus, Trash2 } from 'lucide-react';
import { AdminImageOverlay } from './AdminImageOverlay';
import { BuyButton } from './BuyButton';
import { ComponentCategoryBar } from './ComponentCategoryBar';

export const ContactorsPage: React.FC = () => {
  const { 
    openQuoteModal, 
    subPageTitle, 
    contactorsData, 
    addItem, 
    deleteItem, 
    isAdminLoggedIn, 
    isEditMode 
  } = useApp();
  const [filterType, setFilterType] = useState<'All' | 'AC Powered' | 'DC Powered'>('All');
  const [selectedContactor, setSelectedContactor] = useState<ContactorItem>(contactorsData[0]);

  useEffect(() => {
    if (subPageTitle) {
      const match = contactorsData.find(c => 
        c.name.toLowerCase().includes(subPageTitle.toLowerCase()) || 
        subPageTitle.toLowerCase().includes(c.name.toLowerCase())
      );
      if (match) {
        setSelectedContactor(match);
        setFilterType(match.powerType);
      }
    }
  }, [subPageTitle, contactorsData]);

  const filtered = contactorsData.filter(c => filterType === 'All' || c.powerType === filterType);

  const handleAddNewContactor = () => {
    const id = `contactor-${Date.now()}`;
    const newContactor: ContactorItem = {
      id,
      name: '3-Pole Heavy Duty Industrial Contactor (50A / 22kW)',
      powerType: 'AC Powered',
      poles: '3-Pole',
      ratedCurrent: '50A Continuous (AC-1) / 40A Heavy Duty (AC-3)',
      coilVoltage: '220VAC / 50Hz Standard',
      connectionDiagramDescription: 'Standard 3-phase line and load with auxiliary contact and thermal overload relay interlock.',
      terminalDetails: 'Line 1/L1, 3/L2, 5/L3 to Main Busbar. Coil A1 & A2 to Smart Automation Relay. Auxiliary 13NO/14NO for run feedback.',
      homeIndustrialApplications: '3-phase borehole pumps, high-capacity central air conditioners, industrial refrigeration compressors, factory machines.',
      wiringDiagramSvgType: 'ac_3pole',
      image: '/src/assets/images/contactor_3pole_modular_1791552272813.jpg'
    };
    addItem('contactors', newContactor);
    setSelectedContactor(newContactor);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-10">
      {/* Top Component Category Switcher Bar */}
      <ComponentCategoryBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-xs border border-slate-200 mb-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-wider uppercase text-[#008080] mb-2 block">
              Heavy-Duty Appliance Power Switching & Arc Suppression
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1D20] tracking-tight mb-3">
              AC & DC Industrial Magnetic Contactors (1-Pole, 2-Pole & 3-Pole)
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              Standard smart relays and WiFi switch modules are rated only for resistive loads. Inductive appliances—such as 
              deep-well borehole pumps, 3-phase air conditioners, factory motors, and electric vehicle battery packs—generate massive startup inrush currents 
              and destructive back-EMF arcs. Magnetic contactors solve this by absorbing heavy electrical surges through oversized copper lugs and arc-extinguishing chambers.
            </p>

            {/* Filter Toggle & Admin Action */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-lg inline-flex">
                {(['All', 'AC Powered', 'DC Powered'] as const).map(type => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      filterType === type 
                        ? 'bg-white text-slate-900 shadow-xs' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {isAdminLoggedIn && isEditMode && (
                <button
                  type="button"
                  onClick={handleAddNewContactor}
                  className="px-3.5 py-1.5 rounded-lg bg-[#248C54] hover:bg-[#1E7747] text-white text-xs font-bold shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Magnetic Contactor</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Contactor Technical Cards: Alternating Continuous Layout */}
        <div className="space-y-8 mb-12">
          {filtered.map((item, index) => {
            const isSelected = item.id === selectedContactor.id;
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                id={item.id}
                onClick={() => setSelectedContactor(item)}
                className={`bg-white rounded-3xl p-6 sm:p-8 border-2 transition-all cursor-pointer flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-stretch gap-6 sm:gap-8 ${
                  isSelected 
                    ? 'border-[#248C54] shadow-lg ring-2 ring-emerald-500/20' 
                    : 'border-slate-300 hover:border-slate-400 shadow-xs'
                }`}
              >
                {/* Medium Picture: Plain and Clear */}
                <div className="w-full md:w-80 lg:w-96 shrink-0 flex flex-col justify-center">
                  <AdminImageOverlay
                    section="contactors"
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
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-lg bg-emerald-600 text-white font-mono text-xs font-bold shadow-xs">
                        {item.poles}
                      </div>
                      <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-lg bg-black/75 text-[10px] text-white font-mono">
                        {item.ratedCurrent.split('/')[0]}
                      </div>
                    </div>
                  </AdminImageOverlay>

                  <span className="text-[11px] text-center text-slate-400 font-mono mt-2 block">
                    Plain Clear Industrial Hardware View
                  </span>
                </div>

                {/* Text and Technical Details at Right (Alternating) */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[#248C54] text-xs font-bold font-mono">
                          {item.poles}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                          {item.powerType}
                        </span>
                      </div>
                      {isAdminLoggedIn && isEditMode && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (window.confirm(`Delete contactor "${item.name}"?`)) {
                              deleteItem('contactors', item.id);
                            }
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Delete this contactor item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-2">
                      {item.name}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="text-slate-500 block text-[11px]">Rated Current:</span>
                        <span className="font-bold text-slate-900 font-mono">{item.ratedCurrent}</span>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="text-slate-500 block text-[11px]">Coil Voltage:</span>
                        <span className="font-bold text-slate-900 font-mono">{item.coilVoltage}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.homeIndustrialApplications}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-[#248C54] flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5" />
                      <span>{isSelected ? 'Wiring Diagram Active Below' : 'Select to View Wiring Schematic'}</span>
                    </span>
                    <BuyButton item={item} className="px-5 py-2.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Comprehensive Wiring Diagram & Connection Detail Section */}
        <div className="bg-white rounded-xl shadow-xs border border-slate-300 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left: Interactive Technical Connection Diagram (SVG Schematic) */}
            <div className="w-full lg:w-1/2 bg-slate-900 text-white rounded-xl p-6 border border-slate-800">
              <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-teal-400" />
                  <span className="text-xs font-bold tracking-wider uppercase text-teal-400">
                    Connection Wiring Diagram: {selectedContactor.poles} ({selectedContactor.powerType})
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Schematic v3.2</span>
              </div>

              {/* Technical Schematic Rendering */}
              <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 my-2 flex flex-col items-center">
                {selectedContactor.wiringDiagramSvgType === 'ac_3pole' ? (
                  <svg viewBox="0 0 400 320" className="w-full max-w-md h-auto">
                    {/* Incoming 3 Phase Mains */}
                    <text x="50" y="25" fill="#f87171" fontSize="11" fontWeight="bold">L1 (Red)</text>
                    <text x="180" y="25" fill="#facc15" fontSize="11" fontWeight="bold">L2 (Yellow)</text>
                    <text x="310" y="25" fill="#60a5fa" fontSize="11" fontWeight="bold">L3 (Blue)</text>
                    
                    {/* Incoming Lines to Terminals */}
                    <line x1="75" y1="35" x2="75" y2="70" stroke="#f87171" strokeWidth="3" />
                    <line x1="205" y1="35" x2="205" y2="70" stroke="#facc15" strokeWidth="3" />
                    <line x1="335" y1="35" x2="335" y2="70" stroke="#60a5fa" strokeWidth="3" />

                    {/* Contactor Body Box */}
                    <rect x="40" y="70" width="320" height="170" rx="10" fill="#0f172a" stroke="#008080" strokeWidth="2" />
                    <text x="135" y="95" fill="#94a3b8" fontSize="11" fontWeight="bold">3-POLE AC CONTACTOR</text>

                    {/* Input Terminals */}
                    <circle cx="75" cy="70" r="7" fill="#334155" stroke="#f87171" strokeWidth="2" />
                    <text x="70" y="65" fill="#ffffff" fontSize="9" fontWeight="bold">1/L1</text>
                    
                    <circle cx="205" cy="70" r="7" fill="#334155" stroke="#facc15" strokeWidth="2" />
                    <text x="200" y="65" fill="#ffffff" fontSize="9" fontWeight="bold">3/L2</text>
                    
                    <circle cx="335" cy="70" r="7" fill="#334155" stroke="#60a5fa" strokeWidth="2" />
                    <text x="330" y="65" fill="#ffffff" fontSize="9" fontWeight="bold">5/L3</text>

                    {/* Electromagnetic Coil Symbol inside */}
                    <rect x="140" y="125" width="120" height="50" rx="6" fill="#1e293b" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3,3" />
                    <text x="160" y="145" fill="#38bdf8" fontSize="10" fontWeight="bold">COIL [A1 - A2]</text>
                    <text x="155" y="162" fill="#94a3b8" fontSize="9">220VAC / 24VDC</text>

                    {/* Coil Control Wires */}
                    <circle cx="110" cy="150" r="5" fill="#38bdf8" />
                    <text x="85" y="153" fill="#38bdf8" fontSize="10" fontWeight="bold">A1 (Ctrl)</text>
                    <line x1="110" y1="150" x2="140" y2="150" stroke="#38bdf8" strokeWidth="2" />

                    <circle cx="290" cy="150" r="5" fill="#94a3b8" />
                    <text x="298" y="153" fill="#94a3b8" fontSize="10" fontWeight="bold">A2 (Neutral)</text>
                    <line x1="260" y1="150" x2="290" y2="150" stroke="#94a3b8" strokeWidth="2" />

                    {/* Output Terminals */}
                    <circle cx="75" cy="240" r="7" fill="#334155" stroke="#f87171" strokeWidth="2" />
                    <text x="70" y="255" fill="#ffffff" fontSize="9" fontWeight="bold">2/T1</text>
                    
                    <circle cx="205" cy="240" r="7" fill="#334155" stroke="#facc15" strokeWidth="2" />
                    <text x="200" y="255" fill="#ffffff" fontSize="9" fontWeight="bold">4/T2</text>
                    
                    <circle cx="335" cy="240" r="7" fill="#334155" stroke="#60a5fa" strokeWidth="2" />
                    <text x="330" y="255" fill="#ffffff" fontSize="9" fontWeight="bold">6/T3</text>

                    {/* Outgoing Lines to Heavy Load */}
                    <line x1="75" y1="247" x2="75" y2="285" stroke="#f87171" strokeWidth="3" />
                    <line x1="205" y1="247" x2="205" y2="285" stroke="#facc15" strokeWidth="3" />
                    <line x1="335" y1="247" x2="335" y2="285" stroke="#60a5fa" strokeWidth="3" />

                    {/* Motor or Heavy Load Symbol */}
                    <rect x="50" y="285" width="300" height="30" rx="5" fill="#047857" />
                    <text x="95" y="304" fill="#ffffff" fontSize="11" fontWeight="bold">HEAVY LOAD / 3-PHASE INDUCTION MOTOR</text>
                  </svg>
                ) : (
                  <svg viewBox="0 0 400 300" className="w-full max-w-md h-auto">
                    {/* DC / 2-Pole Schematic */}
                    <text x="60" y="25" fill="#ef4444" fontSize="11" fontWeight="bold">DC+ (High Voltage Bus / 500V)</text>
                    <text x="260" y="25" fill="#64748b" fontSize="11" fontWeight="bold">DC- (Return Ground)</text>

                    <line x1="120" y1="35" x2="120" y2="70" stroke="#ef4444" strokeWidth="3" />
                    <line x1="280" y1="35" x2="280" y2="70" stroke="#64748b" strokeWidth="3" />

                    <rect x="60" y="70" width="280" height="150" rx="10" fill="#0f172a" stroke="#008080" strokeWidth="2" />
                    <text x="110" y="95" fill="#94a3b8" fontSize="11" fontWeight="bold">SEALED CERAMIC DC CONTACTOR</text>

                    <circle cx="120" cy="70" r="7" fill="#334155" stroke="#ef4444" strokeWidth="2" />
                    <text x="110" y="65" fill="#ffffff" fontSize="9" fontWeight="bold">HV+</text>

                    <circle cx="280" cy="70" r="7" fill="#334155" stroke="#64748b" strokeWidth="2" />
                    <text x="270" y="65" fill="#ffffff" fontSize="9" fontWeight="bold">HV-</text>

                    <rect x="130" y="125" width="140" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" />
                    <text x="155" y="145" fill="#38bdf8" fontSize="10" fontWeight="bold">BMS TRIGGER COIL</text>
                    <text x="160" y="157" fill="#94a3b8" fontSize="9">12V / 24V DC Economizer</text>

                    <circle cx="120" cy="220" r="7" fill="#334155" stroke="#ef4444" strokeWidth="2" />
                    <circle cx="280" cy="220" r="7" fill="#334155" stroke="#64748b" strokeWidth="2" />

                    <line x1="120" y1="227" x2="120" y2="265" stroke="#ef4444" strokeWidth="3" />
                    <line x1="280" y1="227" x2="280" y2="265" stroke="#64748b" strokeWidth="3" />

                    <rect x="70" y="265" width="260" height="30" rx="5" fill="#047857" />
                    <text x="90" y="284" fill="#ffffff" fontSize="11" fontWeight="bold">ELECTRIC VEHICLE INVERTER / SOLAR BATTERY</text>
                  </svg>
                )}
              </div>

              <p className="text-[11px] text-slate-400 mt-3 italic">
                *Diagram illustrates galvanic isolation between low-voltage automation control (A1/A2) and high-current switched bus (L1-T1, L2-T2, L3-T3).
              </p>
            </div>

            {/* Right: Technical Explanation & Application Details */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#008080] uppercase tracking-wide block mb-1">
                  Engineering Wiring Specs & Terminal Logic
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  {selectedContactor.name}
                </h2>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  <span className="font-bold text-slate-900 block mb-1">Connection Blueprint:</span>
                  {selectedContactor.connectionDiagramDescription}
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  <span className="font-bold text-slate-900 block mb-1">Terminal Details:</span>
                  {selectedContactor.terminalDetails}
                </div>

                <div className="p-4 bg-teal-50 rounded-lg border border-teal-200 text-xs sm:text-sm text-teal-950 leading-relaxed mb-6">
                  <span className="font-bold text-[#006666] block mb-1">Industrial & Home Automation Use Cases:</span>
                  {selectedContactor.homeIndustrialApplications}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-3">
                <BuyButton item={selectedContactor} />

                <button
                  onClick={() => openQuoteModal(`Contactor Installation: ${selectedContactor.name}`)}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <Zap className="w-3.5 h-3.5 text-[#008080]" />
                  <span>Request Custom Contactor Panel Installation Quote</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
