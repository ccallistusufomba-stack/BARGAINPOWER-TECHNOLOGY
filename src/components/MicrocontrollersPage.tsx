import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { MicrocontrollerItem } from '../types';
import { Cpu, Wifi, Radio, Zap, CheckCircle2, ArrowRight, Shield, Layers, Plus, Trash2, Activity } from 'lucide-react';
import { AdminImageOverlay } from './AdminImageOverlay';
import { BuyButton } from './BuyButton';
import { ComponentCategoryBar } from './ComponentCategoryBar';

export const MicrocontrollersPage: React.FC = () => {
  const { 
    openQuoteModal, 
    subPageTitle, 
    microcontrollersData, 
    addItem, 
    deleteItem, 
    isAdminLoggedIn, 
    isEditMode 
  } = useApp();
  const [selectedMcuId, setSelectedMcuId] = useState<string>(microcontrollersData[0]?.id || 'mcu-esp32');

  useEffect(() => {
    if (subPageTitle) {
      const match = microcontrollersData.find(m => 
        m.name.toLowerCase().includes(subPageTitle.toLowerCase()) || 
        subPageTitle.toLowerCase().includes(m.name.toLowerCase()) ||
        m.id.toLowerCase().includes(subPageTitle.toLowerCase())
      );
      if (match) setSelectedMcuId(match.id);
    }
  }, [subPageTitle, microcontrollersData]);

  const selectedMcu = microcontrollersData.find(m => m.id === selectedMcuId) || microcontrollersData[0];

  const handleAddNewMcu = () => {
    const id = `mcu-${Date.now()}`;
    const newMcu: MicrocontrollerItem = {
      id,
      name: 'ESP32-S3 Dual-Core AI & IoT SoC (16MB Flash / 8MB PSRAM)',
      processor: 'Xtensa® 32-bit LX7 Dual-Core @ 240 MHz with Vector AI instructions',
      operatingVoltage: '3.3V Logic (5V Micro-USB / Type-C Power Input)',
      clockSpeed: '240 MHz Peak',
      flashMemory: '16MB QSPI Flash',
      sram: '512KB SRAM + 8MB Octal PSRAM',
      gpioPins: '45 Programmable GPIOs',
      wirelessConnectivity: 'Wi-Fi 802.11 b/g/n (2.4 GHz) + Bluetooth 5.0 (BLE & Mesh)',
      homeAutomationRole: 'Provides immense memory headroom for machine vision and industrial protocols directly at the sensor boundary.',
      recommendedUseCases: [
        'Edge AI camera processing and voice recognition',
        'Complex multi-channel industrial MQTT telemetry gateway',
        'High-speed touch display user interfaces'
      ],
      image: '/src/assets/images/esp32_iot_controller_relay_1791552230446.jpg'
    };
    addItem('microcontrollers', newMcu);
    setSelectedMcuId(id);
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
              Core Processing Units & IoT Engines
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1D20] tracking-tight mb-3">
              Microcontrollers for Home Automation & Hardware Systems
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              From the 240 MHz dual-core ESP32 with built-in Wi-Fi/BLE to the deterministic 16 MHz ATmega328P on Arduino Uno and Nano, 
              discover the processing platforms powering modern smart homes, electric vehicle battery monitors, and autonomous agricultural systems.
            </p>

            {isAdminLoggedIn && isEditMode && (
              <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleAddNewMcu}
                  className="px-3.5 py-1.5 rounded-lg bg-[#248C54] hover:bg-[#1E7747] text-white text-xs font-bold shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Microcontroller Board</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Microcontrollers Continuous Alternating Feed */}
        <div className="space-y-8 mb-12">
          {microcontrollersData.map((mcu, index) => {
            const isSelected = mcu.id === selectedMcuId;
            const isEven = index % 2 === 0;
            return (
              <div
                key={mcu.id}
                onClick={() => setSelectedMcuId(mcu.id)}
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
                    section="microcontrollers"
                    itemId={mcu.id}
                    imageUrl={mcu.image}
                    itemTitle={mcu.name}
                    item={mcu}
                    placeholderHeight="h-56"
                  >
                    <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-white border-2 border-slate-200 relative group p-3 shadow-inner flex items-center justify-center">
                      <img 
                        src={mcu.image} 
                        alt={mcu.name} 
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-lg bg-emerald-600 text-white font-mono text-xs font-bold shadow-xs">
                        {mcu.clockSpeed.split(' ')[0]}
                      </div>
                    </div>
                  </AdminImageOverlay>

                  <span className="text-[11px] text-center text-slate-400 font-mono mt-2 block">
                    High-Reliability Automation Core Board
                  </span>
                </div>

                {/* Text and Specifications at Right (Alternating) */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[#248C54] text-xs font-bold font-mono">
                          {mcu.processor}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                          {mcu.operatingVoltage}
                        </span>
                      </div>
                      {isAdminLoggedIn && isEditMode && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (window.confirm(`Delete microcontroller "${mcu.name}"?`)) {
                              deleteItem('microcontrollers', mcu.id);
                            }
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Delete this microcontroller item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-2">
                      {mcu.name}
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs mb-3">
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="text-slate-500 block text-[10px]">Clock:</span>
                        <span className="font-bold text-slate-900 font-mono">{mcu.clockSpeed}</span>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="text-slate-500 block text-[10px]">Flash:</span>
                        <span className="font-bold text-slate-900 font-mono">{mcu.flashMemory}</span>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="text-slate-500 block text-[10px]">SRAM:</span>
                        <span className="font-bold text-slate-900 font-mono">{mcu.sram}</span>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="text-slate-500 block text-[10px]">GPIOs:</span>
                        <span className="font-bold text-slate-900 font-mono">{mcu.gpioPins}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      {mcu.homeAutomationRole}
                    </p>

                    <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Wireless:</strong> {mcu.wirelessConnectivity}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-[#248C54] flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5" />
                      <span>{isSelected ? 'Detailed Matrix Inspected Below' : 'Click to Inspect Full Architectural Matrix'}</span>
                    </span>
                    <BuyButton item={mcu} className="px-5 py-2.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Selected Microcontroller Detailed Deep-Dive */}
        <div className="bg-white rounded-xl shadow-xs border border-slate-300 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left: Spec Sheet & Architecture */}
            <div className="lg:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <div className="w-28 shrink-0">
                    <AdminImageOverlay
                      section="microcontrollers"
                      itemId={selectedMcu.id}
                      imageUrl={selectedMcu.image}
                      itemTitle={selectedMcu.name}
                      item={selectedMcu}
                      placeholderHeight="h-28"
                    >
                      <div className="w-28 h-28 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden shrink-0 p-1">
                        <img 
                          src={selectedMcu.image} 
                          alt={selectedMcu.name} 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </AdminImageOverlay>
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-[#248C54] border border-emerald-200 mb-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Technical Specification Matrix</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      {selectedMcu.name}
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-6">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block mb-0.5">Processor Core</span>
                    <span className="font-semibold text-slate-900">{selectedMcu.processor}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block mb-0.5">Clock Speed</span>
                    <span className="font-semibold text-slate-900">{selectedMcu.clockSpeed}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block mb-0.5">Flash Memory</span>
                    <span className="font-semibold text-slate-900">{selectedMcu.flashMemory}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block mb-0.5">Internal SRAM</span>
                    <span className="font-semibold text-slate-900">{selectedMcu.sram}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block mb-0.5">Operating Voltage</span>
                    <span className="font-semibold text-slate-900">{selectedMcu.operatingVoltage}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block mb-0.5">Available GPIOs</span>
                    <span className="font-semibold text-slate-900">{selectedMcu.gpioPins}</span>
                  </div>
                </div>

                {/* Wireless connectivity highlight */}
                <div className="p-3.5 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-950 mb-6 flex items-start gap-2.5">
                  <Wifi className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-emerald-900 block mb-0.5">Wireless & Network Protocols:</span>
                    <span>{selectedMcu.wirelessConnectivity}</span>
                  </div>
                </div>
              </div>

              {/* Action Button & Buy Button */}
              <div className="space-y-3">
                <BuyButton item={selectedMcu} />

                <button
                  onClick={() => openQuoteModal(`Microcontroller Project: ${selectedMcu.name}`)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5 text-[#008080]" />
                  <span>Custom Firmware / Bulk Lab Quote for {selectedMcu.name}</span>
                </button>
              </div>
            </div>

            {/* Right: Home Automation Role & Recommended Use Cases */}
            <div className="lg:w-1/2 bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#008080]" />
                  <span>Role in Smart Home & Industrial Automation</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                  {selectedMcu.homeAutomationRole}
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                  Target Engineering Implementations:
                </h4>
                <div className="space-y-2.5">
                  {selectedMcu.recommendedUseCases.map((useCase, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800 bg-white p-2.5 rounded border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Safety Notice */}
              <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#008080] shrink-0" />
                <span>
                  All microcontroller pins interfacing with 220V relays must pass through optocoupler galvanic isolation to prevent transient destruction.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
