import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { BreakerItem } from '../types';
import { ShieldCheck, Zap, AlertTriangle, CheckCircle2, ChevronRight, Activity, Plus, Trash2 } from 'lucide-react';
import { AdminImageOverlay } from './AdminImageOverlay';
import { BuyButton } from './BuyButton';
import { ComponentCategoryBar } from './ComponentCategoryBar';

export const BreakersPage: React.FC = () => {
  const { 
    openQuoteModal, 
    subPageTitle, 
    breakersData, 
    addItem, 
    deleteItem, 
    isAdminLoggedIn, 
    isEditMode 
  } = useApp();

  useEffect(() => {
    if (subPageTitle) {
      const match = breakersData.find(b => 
        b.name.toLowerCase().includes(subPageTitle.toLowerCase()) || 
        subPageTitle.toLowerCase().includes(b.name.toLowerCase())
      );
      if (match) {
        const el = document.getElementById(match.id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [subPageTitle, breakersData]);

  const handleAddNewBreaker = () => {
    const id = `breaker-${Date.now()}`;
    const newBreaker: BreakerItem = {
      id,
      name: 'Smart WiFi & RS485 DIN Rail Miniature Circuit Breaker (63A)',
      poles: '2-Pole (2P)',
      type: 'Smart WiFi Breaker',
      tripCurve: 'C Curve (5-10x In)',
      currentRatings: '63A (Adjustable 1A-63A via Mobile App)',
      breakingCapacity: '6kA (6,000A)',
      automationNeedReason: 'Protects residential solar inverters and enables automated over-the-air load shedding during grid outages.',
      smartCapabilities: 'Remote ON/OFF, Live Voltage/Current/Watt-Hour energy meter reporting via MQTT & Tuya protocol.',
      image: '/src/assets/images/din_mcb_2pole_1791552230446.jpg'
    };
    addItem('breakers', newBreaker);
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
              Electrical Protection & Intelligent Power Distribution
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1D20] tracking-tight mb-3">
              Circuit Breakers & Smart Power Distribution Protection
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              Why are circuit breakers indispensable in home automation? While smart switches and microcontrollers provide logic, 
              breakers provide life-critical physical protection. If a motor jams or a wire short-circuits, breakers trip within 10 milliseconds, 
              diverting fault energy before high-voltage surges destroy sensitive automation processors or ignite fires.
            </p>

            {isAdminLoggedIn && isEditMode && (
              <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleAddNewBreaker}
                  className="px-3.5 py-1.5 rounded-lg bg-[#248C54] hover:bg-[#1E7747] text-white text-xs font-bold shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Circuit Breaker</span>
                </button>
              </div>
            )}
          </div>

          {/* Quick Info Grid: Why Breakers Are Needed in Home Automation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-xs mb-1.5">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>1. Short-Circuit Clearance</span>
              </div>
              <p className="text-xs text-slate-600">
                Instantly disconnects dead shorts (up to 10,000 Amperes) preventing explosive busbar destruction and fire propagation.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 text-amber-600 font-bold text-xs mb-1.5">
                <Zap className="w-4 h-4 shrink-0" />
                <span>2. Inductive Motor Thermal Protection</span>
              </div>
              <p className="text-xs text-slate-600">
                Calibrated bimetallic strips detect sustained low-level overcurrents from locked compressor rotors, safely de-energizing the circuit.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 text-[#008080] font-bold text-xs mb-1.5">
                <Activity className="w-4 h-4 shrink-0" />
                <span>3. Smart WiFi Telemetry & Load Shedding</span>
              </div>
              <p className="text-xs text-slate-600">
                Smart DIN breakers report live voltage, wattage, and kWh consumption to your phone, enabling automated load shedding during solar inverter operation.
              </p>
            </div>
          </div>
        </div>

        {/* Breaker Products List: Continuous Alternating Layout */}
        <div className="space-y-8 mb-12">
          {breakersData.map((breaker, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={breaker.id}
                id={breaker.id}
                className={`bg-white rounded-3xl shadow-xs border border-slate-300 hover:border-[#248C54] transition-all p-6 sm:p-8 flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-stretch gap-6 sm:gap-8`}
              >
                {/* Medium Picture: Plain and Clear to View */}
                <div className="w-full md:w-80 lg:w-96 shrink-0 flex flex-col justify-center">
                  <AdminImageOverlay
                    section="breakers"
                    itemId={breaker.id}
                    imageUrl={breaker.image}
                    itemTitle={breaker.name}
                    item={breaker}
                    placeholderHeight="h-56"
                  >
                    <div className="w-full h-56 sm:h-64 bg-white rounded-2xl border-2 border-slate-200 overflow-hidden relative group p-3 shadow-inner flex items-center justify-center">
                      <img 
                        src={breaker.image} 
                        alt={breaker.name} 
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-lg bg-teal-600 text-white font-mono text-xs font-bold shadow-xs">
                        {breaker.poles}
                      </div>
                      <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/70 rounded-lg text-[10px] text-white font-mono">
                        {breaker.currentRatings.split(',')[0]}
                      </div>
                    </div>
                  </AdminImageOverlay>

                  <span className="text-[11px] text-center text-slate-400 font-mono mt-2 block">
                    DIN Rail IEC Certified Breaker Module
                  </span>
                </div>

                {/* Text and Specifications on Right (Alternating) */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-lg bg-teal-50 border border-teal-200 text-[#248C54] font-bold text-xs font-mono">
                          {breaker.poles}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                          {breaker.tripCurve}
                        </span>
                      </div>
                      {isAdminLoggedIn && isEditMode && (
                        <button
                          type="button"
                          onClick={() => {
                            if (window.confirm(`Delete circuit breaker "${breaker.name}"?`)) {
                              deleteItem('breakers', breaker.id);
                            }
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Delete this breaker item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-3">
                      {breaker.name}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="text-slate-500 block text-[11px]">Classification:</span>
                        <span className="font-bold text-slate-900 truncate block">{breaker.type}</span>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="text-slate-500 block text-[11px]">Breaking Capacity:</span>
                        <span className="font-bold text-slate-900 font-mono">{breaker.breakingCapacity}</span>
                      </div>
                    </div>

                    {/* Why it is needed in automation */}
                    <div className="mb-3 p-3 bg-amber-50/70 rounded-xl border border-amber-200 text-xs text-amber-950">
                      <span className="font-bold text-amber-900 block mb-0.5 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-amber-700" />
                        Why Needed in Smart Automation:
                      </span>
                      <p className="leading-relaxed">{breaker.automationNeedReason}</p>
                    </div>

                    {/* Smart capabilities */}
                    <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-200 text-xs text-teal-950">
                      <span className="font-bold text-[#248C54] block mb-0.5 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#248C54]" />
                        Smart Features &amp; Telemetry:
                      </span>
                      <p className="leading-relaxed">{breaker.smartCapabilities}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <button
                      onClick={() => openQuoteModal(`Breaker Inquiry: ${breaker.name}`)}
                      className="inline-flex items-center gap-1 text-[#248C54] hover:text-[#1E7747] font-semibold text-xs transition-colors cursor-pointer"
                    >
                      <span>Request Custom Panel Spec</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <BuyButton item={breaker} className="px-5 py-2.5" />
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
