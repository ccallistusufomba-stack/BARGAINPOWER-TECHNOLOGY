import React, { useState, useEffect } from 'react';
import { SensorItem } from '../types';
import { useApp } from '../context/AppContext';
import { Search, Sliders, Shield, Zap, Terminal, CheckCircle2, ChevronRight, Plus, Trash2 } from 'lucide-react';
import { AdminImageOverlay } from './AdminImageOverlay';
import { BuyButton } from './BuyButton';
import { ComponentCategoryBar } from './ComponentCategoryBar';

export const SensorsPage: React.FC = () => {
  const { 
    openQuoteModal, 
    subPageTitle, 
    sensorsData, 
    addItem, 
    deleteItem, 
    isAdminLoggedIn, 
    isEditMode 
  } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (subPageTitle) {
      if (subPageTitle.includes('Surveillance') || subPageTitle.includes('Radar') || subPageTitle.includes('RCWL') || subPageTitle.includes('Hall') || subPageTitle.includes('ACS712')) {
        setSelectedCategory('Surveillance & Security');
      } else if (subPageTitle.includes('Environmental') || subPageTitle.includes('Temp') || subPageTitle.includes('DHT22') || subPageTitle.includes('DS18B20') || subPageTitle.includes('Soil')) {
        setSelectedCategory('Environmental & Temperature');
      } else if (subPageTitle.includes('Fire') || subPageTitle.includes('Gas') || subPageTitle.includes('Smoke') || subPageTitle.includes('MQ-2')) {
        setSelectedCategory('Fire & Smoke Safety');
      }
    }
  }, [subPageTitle]);

  const categories = [
    'All',
    'Surveillance & Security',
    'Environmental & Temperature',
    'Fire & Smoke Safety',
    'Proximity & Motion'
  ];

  const handleAddNewSensor = () => {
    const id = `sensor-${Date.now()}`;
    const newSensor: SensorItem = {
      id,
      name: 'BME680 Environmental Gas, Barometric Pressure, Temp & Humidity Sensor',
      category: 'Environmental & Temperature',
      operatingVoltage: '3.3V – 5V DC',
      compatibleWith: ['ESP32', 'Arduino Uno', 'Raspberry Pi', 'STM32'],
      workingPrinciple: 'Combines metal oxide gas sensing with piezoresistive pressure MEMS to measure Indoor Air Quality (IAQ) and ambient weather metrics.',
      homeAutomationUses: 'Triggers HVAC exhaust fans, terrarium venting blowers, and smart air purifier units.',
      pinout: 'VCC, GND, SCL (I2C Clock), SDA (I2C Data), SDO, CS',
      tags: ['BME680', 'Air Quality', 'Barometric', 'Temp/RH', 'I2C/SPI'],
      image: '/src/assets/images/esp32_iot_controller_relay_1791552230446.jpg'
    };
    addItem('sensors', newSensor);
  };

  const filteredSensors = sensorsData.filter(sensor => {
    const matchesCategory = selectedCategory === 'All' || sensor.category === selectedCategory;
    const matchesQuery = 
      sensor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sensor.workingPrinciple.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sensor.homeAutomationUses.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sensor.compatibleWith.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-10">
      {/* Top Component Category Switcher Bar */}
      <ComponentCategoryBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-xs border border-slate-200 mb-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-wider uppercase text-[#008080] mb-2 block">
              Hardware Directory · Arduino & ESP32 Compatible
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1D20] tracking-tight mb-3">
              Sensors for Smart Home & Industrial IoT Automation
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore professional sensors engineered for Arduino Uno, Arduino Nano, and ESP32 microcontrollers. 
              From microwave Doppler radar and capacitive non-corroding moisture probes to high-isolation Hall current sensors, 
              discover how each sensor protects and automates high-end residential, agricultural, and industrial infrastructure.
            </p>
          </div>

          {/* Filter Bar and Search */}
          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Category Segmented Buttons */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-lg">
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

            {/* Live Search Input & Add Sensor */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search sensors, pinouts, uses..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#008080] focus:bg-white text-slate-900 transition-all"
                />
              </div>

              {isAdminLoggedIn && isEditMode && (
                <button
                  type="button"
                  onClick={handleAddNewSensor}
                  className="px-3.5 py-2 rounded-lg bg-[#008080] hover:bg-[#006666] text-white text-xs font-bold shadow-sm flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Sensor</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Sensor Items: Exactly "The picture of the sensor will be at the left, in a square box with good border and the text describing the sensor will be at the right with good border." */}
        {/* Sensor Items: Picture on left and text on right, alternatively and continuous */}
        <div className="space-y-6">
          {filteredSensors.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center border border-slate-200 text-slate-500">
              <p>No sensors match your query "{searchQuery}". Try searching for ESP32, DHT22, or Smoke.</p>
            </div>
          ) : (
            filteredSensors.map((sensor, index) => {
              const isEven = index % 2 === 0;
              return (
              <div 
                key={sensor.id}
                className={`bg-white rounded-2xl shadow-xs border border-slate-300 hover:border-[#008080] transition-all p-5 sm:p-6 flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-6 items-stretch`}
              >
                {/* Medium Picture in clear box */}
                <div className="w-full md:w-80 lg:w-96 md:shrink-0 flex flex-col justify-center">
                  <AdminImageOverlay
                    section="sensors"
                    itemId={sensor.id}
                    imageUrl={sensor.image}
                    itemTitle={sensor.name}
                    item={sensor}
                    placeholderHeight="h-56"
                  >
                    <div className="w-full h-56 sm:h-64 bg-white rounded-xl border-2 border-slate-300 overflow-hidden relative group p-3 flex items-center justify-center shadow-inner">
                      <img 
                        src={sensor.image} 
                        alt={sensor.name} 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[10px] text-white font-mono backdrop-blur-xs">
                        {sensor.operatingVoltage}
                      </div>
                    </div>
                  </AdminImageOverlay>

                  {/* Compatibility badges */}
                  <div className="mt-3">
                    <span className="text-[11px] font-semibold text-slate-500 block mb-1">Supported Platforms:</span>
                    <div className="flex flex-wrap gap-1">
                      {sensor.compatibleWith.map(plat => (
                        <span key={plat} className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-medium rounded">
                          {plat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Text describing the sensor in a box with good border */}
                <div className="flex-1 bg-[#FDFDFE] rounded-lg border-2 border-slate-200 p-5 flex flex-col justify-between">
                  <div>
                    {/* Header and Category */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#008080] uppercase tracking-wide">
                          {sensor.category}
                        </span>
                        {isAdminLoggedIn && isEditMode && (
                          <button
                            type="button"
                            onClick={() => {
                              if (window.confirm(`Delete sensor "${sensor.name}"?`)) {
                                deleteItem('sensors', sensor.id);
                              }
                            }}
                            className="p-1 rounded text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                            title="Delete this sensor item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                        {sensor.tags.map((t, idx) => (
                          <span key={idx} className="bg-teal-50 text-teal-800 border border-teal-200/60 px-2 py-0.5 rounded text-[10px] font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Sensor Name */}
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                      {sensor.name}
                    </h2>

                    {/* Working Principle */}
                    <div className="mb-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <span className="font-semibold text-slate-900 block mb-0.5">Working Principle & Hardware Architecture:</span>
                      <p>{sensor.workingPrinciple}</p>
                    </div>

                    {/* Pinout Details */}
                    <div className="mb-3 p-2.5 bg-slate-50 rounded border border-slate-200 font-mono text-[11px] text-slate-800">
                      <div className="flex items-center gap-1 text-[#008080] font-bold text-xs mb-1">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Standard Terminal Pinout:</span>
                      </div>
                      <p>{sensor.pinout}</p>
                    </div>

                    {/* Home Automation Application & Uses */}
                    <div className="p-3 bg-teal-50/70 rounded border border-teal-200 text-xs sm:text-sm text-teal-950">
                      <span className="font-bold text-[#006666] flex items-center gap-1.5 mb-1">
                        <CheckCircle2 className="w-4 h-4 text-[#008080] shrink-0" />
                        Home Automation Applications & Heavy Relay Triggers:
                      </span>
                      <p>{sensor.homeAutomationUses}</p>
                    </div>
                  </div>

                  {/* Buy Button & Direct Checkout */}
                  <BuyButton item={sensor} className="mt-3" />

                  {/* Secondary Inquiry Action */}
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="text-[11px]">
                      Immediate Dispatch • Tested & Verified
                    </span>
                    <button
                      onClick={() => openQuoteModal(`Sensor Project Setup: ${sensor.name}`)}
                      className="inline-flex items-center gap-1 text-[#008080] hover:text-[#006666] font-semibold text-xs transition-colors cursor-pointer"
                    >
                      <span>Custom Lab Inquiry</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
        </div>

      </div>
    </div>
  );
};
