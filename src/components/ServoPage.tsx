import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { MotorItem } from '../types';
import { AdminImageOverlay } from './AdminImageOverlay';
import { BuyButton } from './BuyButton';
import { ComponentCategoryBar } from './ComponentCategoryBar';
import { Settings, Zap, ArrowRight, CheckCircle2, ChevronRight, Activity, Cpu, Plus, Trash2 } from 'lucide-react';

export const ServoPage: React.FC = () => {
  const { 
    openQuoteModal, 
    subPageTitle, 
    motorsData, 
    addItem, 
    deleteItem, 
    isAdminLoggedIn, 
    isEditMode 
  } = useApp();
  const [filterCategory, setFilterCategory] = useState<string>('All');

  useEffect(() => {
    if (subPageTitle) {
      if (subPageTitle.includes('Servo') || subPageTitle.includes('MG996R')) setFilterCategory('Servo Motor');
      else if (subPageTitle.includes('Stepper') || subPageTitle.includes('NEMA')) setFilterCategory('Stepper Motor');
      else if (subPageTitle.includes('BLDC') || subPageTitle.includes('Hub Motor') || subPageTitle.includes('72V')) setFilterCategory('High-Power BLDC');
      else if (subPageTitle.includes('ESC') || subPageTitle.includes('Aircraft Brushless')) setFilterCategory('ESC & Driver');
    }
  }, [subPageTitle]);

  const categories = ['All', 'Servo Motor', 'Stepper Motor', 'ESC & Driver', 'High-Power BLDC'];

  const filteredMotors = motorsData.filter(m => filterCategory === 'All' || m.category === filterCategory);

  const handleAddNewMotor = () => {
    const id = `motor-${Date.now()}`;
    const newMotor: MotorItem = {
      id,
      name: 'High-Precision Stepper / Servo Hybrid Drive',
      category: 'Servo Motor',
      torqueRating: '15 kg-cm @ 6.0V (High Stall Torque)',
      voltage: '4.8V – 7.4V DC',
      controlMethod: 'Standard PWM 50Hz Pulse Width Modulation (500µs – 2500µs)',
      applications: [
        'Robotic arm joint actuation with positional feedback',
        'Aircraft aileron and rudder servo link surfaces',
        'Automated camera pan-tilt panhead mount'
      ],
      description: 'Precision digital metal-gear motor engineered for high-vibration UAV airframes and high-stress robotic joints with zero gear strip.',
      image: '/src/assets/images/carbon_aircraft_drone_1791552230446.jpg'
    };
    addItem('servo', newMotor);
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
              Actuation, Robotics &amp; Kinetic Propulsion
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1D20] tracking-tight mb-3">
              Servo &amp; Stepper Motors for Robotics, DIY Aircraft &amp; Electric Vehicles
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Precision angular positioning, high-torque microstepping, and high-efficiency brushless DC propulsion. 
              Explore our industrial actuators designed for DIY aircraft control surfaces, autonomous solar tracking pedestals, 
              custom electric bicycles, and prototype robotic manipulators.
            </p>

            {/* Filter Toggle Buttons & Admin Action */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-lg">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      filterCategory === cat
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {isAdminLoggedIn && isEditMode && (
                <button
                  type="button"
                  onClick={handleAddNewMotor}
                  className="px-3.5 py-1.5 rounded-lg bg-[#008080] hover:bg-[#006666] text-white text-xs font-bold shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Motor / Actuator</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Motors: Continuous Alternating Layout */}
        <div className="space-y-8 mb-12">
          {filteredMotors.map((motor, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={motor.id}
                className={`bg-white rounded-3xl shadow-xs border border-slate-300 hover:border-[#008080] transition-all p-6 sm:p-8 flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-stretch gap-6 sm:gap-8`}
              >
                {/* Medium Picture: Plain and Clear to View */}
                <div className="w-full md:w-80 lg:w-96 shrink-0 flex flex-col justify-center">
                  <AdminImageOverlay
                    section="servo"
                    itemId={motor.id}
                    imageUrl={motor.image || '/src/assets/images/carbon_aircraft_drone_1791552230446.jpg'}
                    itemTitle={motor.name}
                    item={motor}
                    placeholderHeight="h-56"
                  >
                    <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-white border-2 border-slate-200 relative group p-3 shadow-inner flex items-center justify-center">
                      <img 
                        src={motor.image || '/src/assets/images/carbon_aircraft_drone_1791552230446.jpg'} 
                        alt={motor.name} 
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-lg bg-teal-600 text-white font-mono text-xs font-bold shadow-xs">
                        {motor.category}
                      </div>
                      <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-lg bg-black/70 text-[10px] text-white font-mono">
                        {motor.torqueRating.split(' ')[0]} {motor.torqueRating.split(' ')[1] || ''}
                      </div>
                    </div>
                  </AdminImageOverlay>

                  <span className="text-[11px] text-center text-slate-400 font-mono mt-2 block">
                    Precision Robotic &amp; BLDC Actuator
                  </span>
                </div>

                {/* Text and Specifications on Right (Alternating) */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-lg bg-teal-50 border border-teal-200 text-[#008080] font-bold text-xs">
                          {motor.category}
                        </span>
                        <span className="text-xs font-mono text-slate-600 font-semibold px-2 py-0.5 rounded-md bg-slate-100">
                          {motor.voltage}
                        </span>
                      </div>
                      {isAdminLoggedIn && isEditMode && (
                        <button
                          type="button"
                          onClick={() => {
                            if (window.confirm(`Delete motor "${motor.name}"?`)) {
                              deleteItem('servo', motor.id);
                            }
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Delete this motor item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 tracking-tight leading-snug">
                      {motor.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {motor.description}
                    </p>

                    {/* Torque and Control Specs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-4">
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="text-slate-500 block text-[11px]">Torque / Power Rating:</span>
                        <span className="font-bold text-slate-900 font-mono">{motor.torqueRating}</span>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="text-slate-500 block text-[11px]">Control Interface:</span>
                        <span className="font-bold text-slate-900 truncate block">{motor.controlMethod}</span>
                      </div>
                    </div>

                    {/* Practical Engineering Applications */}
                    <div className="p-3.5 bg-teal-50/70 rounded-xl border border-teal-200 text-xs text-teal-950 mb-2">
                      <span className="font-bold text-[#006666] block mb-1.5 flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-[#008080]" />
                        Tested Engineering Applications:
                      </span>
                      <ul className="space-y-1">
                        {motor.applications.map((app, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#008080] shrink-0 mt-0.5" />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <button
                      onClick={() => openQuoteModal(`Motor / Actuator Order: ${motor.name}`)}
                      className="inline-flex items-center gap-1 text-[#008080] hover:text-[#006666] font-semibold text-xs transition-colors cursor-pointer"
                    >
                      <span>Build Specification</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <BuyButton item={motor} className="px-5 py-2.5" />
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
