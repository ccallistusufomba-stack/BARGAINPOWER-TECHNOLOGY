import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { KinconyItem } from '../types';
import { BuyButton } from './BuyButton';
import { formatNaira } from '../utils/pricing';
import { 
  Layers, 
  Cpu, 
  Zap, 
  Wifi, 
  Check, 
  ExternalLink, 
  Search, 
  Sliders, 
  Eye, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Sparkles, 
  Server, 
  HardDrive, 
  Filter, 
  ArrowUpRight, 
  Radio, 
  Terminal, 
  ChevronRight, 
  X,
  Gauge,
  Clock,
  Box,
  Share2,
  FileText,
  Trash2
} from 'lucide-react';
import { ComponentCategoryBar } from './ComponentCategoryBar';

export const KinconyPage: React.FC = () => {
  const { 
    kinconyData, 
    isAdminLoggedIn, 
    isEditMode, 
    updateItemImage, 
    updateItemText, 
    addItem, 
    deleteItem 
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCpu, setSelectedCpu] = useState<string>('All');
  const [selectedChannel, setSelectedChannel] = useState<string>('All');
  const [selectedComm, setSelectedComm] = useState<string>('All');

  // Detailed Modal Item & Preview Image
  const [selectedItem, setSelectedItem] = useState<KinconyItem | null>(null);
  const [previewImage, setPreviewImage] = useState<{ url: string; title: string } | null>(null);
  const [editingDevice, setEditingDevice] = useState<KinconyItem | null>(null);

  // Categories list
  const categories = [
    'All',
    'Relay Controller',
    'MOSFET Controller',
    'Energy Meter & Dimmer',
    'Gateway & Wireless',
    'Development Board',
    'Smart Voice & Panel'
  ];

  // CPU list
  const cpus = ['All', 'ESP32-S3', 'ESP32', 'Raspberry Pi CM4', 'ARM Cortex'];

  // Channels filter list
  const channelOptions = ['All', '2-6 Channels', '8-16 Channels', '24-32 Channels'];

  // Communication protocols list
  const commOptions = ['All', 'Ethernet', 'RS485', '4G', 'LoRa', 'WiFi'];

  // Filtered KinCony items
  const filteredItems = useMemo(() => {
    return kinconyData.filter(item => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }

      // CPU filter
      if (selectedCpu !== 'All') {
        if (!item.cpu.toLowerCase().includes(selectedCpu.toLowerCase())) {
          return false;
        }
      }

      // Channel filter
      if (selectedChannel !== 'All') {
        const doStr = item.specs.digitalOutputs || '';
        const match = doStr.match(/(\d+)/);
        const ch = match ? parseInt(match[1], 10) : 0;
        if (selectedChannel === '2-6 Channels' && (ch < 2 || ch > 6)) return false;
        if (selectedChannel === '8-16 Channels' && (ch < 8 || ch > 16)) return false;
        if (selectedChannel === '24-32 Channels' && ch < 24) return false;
      }

      // Communication filter
      if (selectedComm !== 'All') {
        const hasComm = item.specs.communication.some(c => 
          c.toLowerCase().includes(selectedComm.toLowerCase())
        );
        if (!hasComm) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesModel = item.model.toLowerCase().includes(q);
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesFeatures = item.features.some(f => f.toLowerCase().includes(q));
        const matchesApps = item.applications.some(a => a.toLowerCase().includes(q));
        if (!matchesModel && !matchesName && !matchesDesc && !matchesFeatures && !matchesApps) {
          return false;
        }
      }

      return true;
    });
  }, [kinconyData, selectedCategory, selectedCpu, selectedChannel, selectedComm, searchQuery]);

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-12 animate-fadeIn">
      {/* Top Component Category Switcher Bar */}
      <ComponentCategoryBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* HERO SECTION & PRODUCT SELECTOR BADGE                                     */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-2xl shadow-xs border border-slate-300 p-6 sm:p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
                <Cpu className="w-3.5 h-3.5" />
                <span>OFFICIAL KINCONY IoT &amp; INDUSTRIAL CONTROLLER ECOSYSTEM</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                KinCony Smart Relay, MOSFET &amp; IoT Controllers
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Complete catalog of <strong>90 precision hardware automation controllers</strong> downloaded from the 
                official KinCony Product Selector (<code className="text-blue-700 bg-blue-50 px-1 py-0.5 rounded font-mono text-[11px]">https://mq.kincony.com/qq/product/product-selector</code>). 
                Engineered for native <strong>Home Assistant, ESPHome, Tasmota, and Modbus RS485</strong> integration with 
                robust 35mm DIN rail housings, optocoupled inputs, and industrial-grade switching.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <a
                href="https://mq.kincony.com/qq/product/product-selector"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                title="Open KinCony selector"
              >
                <span>Live KinCony Selector</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://www.kincony.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>KinCony Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-300" />
              </a>
            </div>
          </div>

          {/* Key Advantages Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-200">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-500 font-mono block">Hardware Catalog</span>
              <span className="text-sm sm:text-base font-black text-slate-900 font-mono">{kinconyData.length} Devices</span>
              <span className="text-[11px] text-slate-500 block">Relays, MOSFETs &amp; Meters</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-500 font-mono block">Processors</span>
              <span className="text-sm sm:text-base font-black text-blue-600 font-mono">ESP32-S3 / CM4</span>
              <span className="text-[11px] text-slate-500 block">Dual-Core 240MHz + Wi-Fi</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-500 font-mono block">Home Assistant</span>
              <span className="text-sm sm:text-base font-black text-emerald-600 font-mono">ESPHome Native</span>
              <span className="text-[11px] text-slate-500 block">Zero Cloud Local Control</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-500 font-mono block">Form Factor</span>
              <span className="text-sm sm:text-base font-black text-purple-600 font-mono">35mm DIN Rail</span>
              <span className="text-[11px] text-slate-500 block">Aluminium &amp; Plastic Housings</span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* CATEGORY SWITCHER & ADVANCED ATTRIBUTE FILTERS                           */}
          {/* ========================================================================= */}
          <div className="mt-6 pt-6 border-t border-slate-200 space-y-4">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
              {categories.map(cat => {
                const count = cat === 'All' 
                  ? kinconyData.length 
                  : kinconyData.filter(i => i.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedCategory === cat
                        ? 'bg-[#248C54] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                      selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Filter Row: Search & Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              
              {/* Search */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search model (B16, A6v3, T16M, F24)..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#248C54] focus:bg-white text-slate-900"
                />
              </div>

              {/* CPU Filter */}
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1.5">
                <Cpu className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <select
                  value={selectedCpu}
                  onChange={(e) => setSelectedCpu(e.target.value)}
                  className="w-full bg-transparent text-xs text-slate-800 font-semibold focus:outline-hidden cursor-pointer"
                >
                  <option value="All">All CPU Types</option>
                  <option value="ESP32-S3">ESP32-S3</option>
                  <option value="ESP32">ESP32</option>
                  <option value="Raspberry Pi CM4">Raspberry Pi CM4</option>
                  <option value="ARM Cortex">ARM Cortex</option>
                </select>
              </div>

              {/* Channel Output Count */}
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1.5">
                <Sliders className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <select
                  value={selectedChannel}
                  onChange={(e) => setSelectedChannel(e.target.value)}
                  className="w-full bg-transparent text-xs text-slate-800 font-semibold focus:outline-hidden cursor-pointer"
                >
                  <option value="All">All Output Channels</option>
                  <option value="2-6 Channels">2 to 6 Channels</option>
                  <option value="8-16 Channels">8 to 16 Channels</option>
                  <option value="24-32 Channels">24 to 32 Channels</option>
                </select>
              </div>

              {/* Communication Protocol */}
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1.5">
                <Wifi className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <select
                  value={selectedComm}
                  onChange={(e) => setSelectedComm(e.target.value)}
                  className="w-full bg-transparent text-xs text-slate-800 font-semibold focus:outline-hidden cursor-pointer"
                >
                  <option value="All">All Communications</option>
                  <option value="Ethernet">Ethernet RJ45</option>
                  <option value="RS485">RS485 Modbus</option>
                  <option value="4G">4G Cellular</option>
                  <option value="LoRa">LoRa Wireless</option>
                  <option value="WiFi">Wi-Fi Only</option>
                </select>
              </div>

            </div>

            {/* Active Filters Summary */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <span>Showing <strong>{filteredItems.length}</strong> of {kinconyData.length} KinCony devices</span>
              {(selectedCategory !== 'All' || selectedCpu !== 'All' || selectedChannel !== 'All' || selectedComm !== 'All' || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedCpu('All');
                    setSelectedChannel('All');
                    setSelectedComm('All');
                    setSearchQuery('');
                  }}
                  className="text-xs text-emerald-700 hover:text-emerald-900 font-bold hover:underline cursor-pointer"
                >
                  Reset All Filters
                </button>
              )}
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* DEVICES GALLERY: WELL-ARRANGED PATTERN (FEATURES & APPLICATIONS ONLY)     */}
        {/* ========================================================================= */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-300 text-slate-500 space-y-3">
            <Cpu className="w-12 h-12 mx-auto text-slate-400 mb-2" />
            <p className="font-semibold text-slate-800">No KinCony devices match your filter criteria.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSelectedCpu('All');
                setSelectedChannel('All');
                setSelectedComm('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-[#248C54] text-white text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredItems.map((device, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={device.id}
                  className={`bg-white rounded-3xl border border-slate-300 hover:border-slate-400 shadow-xs hover:shadow-lg transition-all p-6 sm:p-8 flex flex-col ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-stretch gap-6 sm:gap-8`}
                >
                  {/* Medium Picture Container: Plain and Clear to View */}
                  <div className="w-full md:w-80 lg:w-96 shrink-0 flex flex-col items-center justify-center">
                    <div 
                      onClick={() => setPreviewImage({ url: device.image, title: device.name })}
                      className="w-full h-56 sm:h-64 rounded-2xl bg-white border-2 border-slate-200 overflow-hidden p-3 shadow-inner flex items-center justify-center relative group cursor-pointer"
                      title="Click to view plain high-resolution image"
                    >
                      <img 
                        src={device.image} 
                        alt={device.name} 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                        <div className="bg-white/95 text-slate-900 px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-md">
                          <Eye className="w-4 h-4 text-blue-600" />
                          <span>View Full Picture</span>
                        </div>
                      </div>
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-blue-600 text-white font-mono font-black text-xs shadow-xs">
                        {device.model}
                      </div>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-[11px] text-slate-400 font-mono">
                        Click image for plain high-resolution view
                      </span>
                    </div>

                    {/* Admin Image Edit Button */}
                    {isAdminLoggedIn && isEditMode && (
                      <div className="mt-3 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setEditingDevice(device)}
                          className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-lg border border-blue-200 transition-colors cursor-pointer"
                        >
                          Edit Device
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (window.confirm(`Delete device ${device.model}?`)) {
                              deleteItem('kincony', device.id);
                            }
                          }}
                          className="p-1.5 bg-red-50 hover:bg-red-100 text-red-600 text-xs rounded-lg border border-red-200 cursor-pointer"
                          title="Delete device"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Text & Specs on Right (or Left Alternating) */}
                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <span className="px-2.5 py-0.5 rounded-lg bg-blue-600 text-white font-mono font-black text-xs">
                          {device.model}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-semibold">
                          CPU: {device.cpu}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                          {device.category}
                        </span>
                        {device.specs.dinRail && (
                          <span className="px-2 py-0.5 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-mono font-semibold">
                            35mm DIN Rail Mount
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                        {device.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                        {device.description}
                      </p>

                      {/* Hardware / Firmware Features */}
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <span className="text-[11px] uppercase font-black tracking-wider text-slate-500 font-mono block mb-2">
                          Hardware &amp; Firmware Features:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                          {device.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-1.5 leading-tight">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Recommended Applications */}
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <span className="text-[11px] uppercase font-black tracking-wider text-slate-500 font-mono block mb-2">
                          Recommended Real-World Applications:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {device.applications.map((app, aIdx) => (
                            <div key={aIdx} className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                              <span className="leading-snug">{app}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Communication Buses */}
                      <div className="mt-3 flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs text-slate-400 font-mono font-bold">Protocols:</span>
                        {device.specs.communication.map((comm, cIdx) => (
                          <span key={cIdx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[11px] border border-slate-200">
                            {comm}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-slate-500 block font-mono">Unit Investment (NGN)</span>
                        <span className="text-xl font-black text-slate-900 font-mono">
                          {formatNaira(device.price || 85000)}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedItem(device)}
                          className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <FileText className="w-4 h-4 text-blue-600" />
                          <span>Full Specifications</span>
                        </button>
                        <BuyButton item={device} className="px-5 py-2.5" />
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* PLAIN IMAGE FULL-SIZE PREVIEW MODAL                                       */}
      {/* ========================================================================= */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn"
          onClick={() => setPreviewImage(null)}
        >
          <div 
            className="bg-white rounded-3xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto flex flex-col relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4 sticky top-0 bg-white z-10">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base truncate pr-4">
                {previewImage.title} (Clear High-Resolution Hardware View)
              </h3>
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="p-1.5 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="w-full flex-1 flex items-center justify-center bg-white rounded-2xl p-4 min-h-[300px]">
              <img 
                src={previewImage.url} 
                alt={previewImage.title} 
                className="max-h-[60vh] max-w-full object-contain"
              />
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 flex justify-end sticky bottom-0 bg-white">
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* DETAILED TECHNICAL MODAL FOR CHOSEN KINCONY DEVICE                        */}
      {/* ========================================================================= */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn overflow-y-auto"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-300 max-h-[90vh] overflow-y-auto relative my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-200 mb-5 gap-3 sticky top-0 bg-white z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold shrink-0 border border-blue-200">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-mono font-black text-xs">
                      {selectedItem.model}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200">
                      {selectedItem.category}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mt-1">
                    {selectedItem.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    {selectedItem.description}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-5 text-xs">
              
              {/* Product Photo & Core Specs Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="aspect-16/10 bg-white rounded-lg overflow-hidden border border-slate-200 p-2 flex items-center justify-center">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.name} 
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="space-y-1.5 font-mono text-[11px]">
                  <div className="pb-1 mb-1 border-b border-slate-200 font-bold text-slate-900">
                    Technical Specifications:
                  </div>
                  <div><strong>CPU:</strong> {selectedItem.cpu}</div>
                  <div><strong>Power Supply:</strong> {selectedItem.specs.powerSupply}</div>
                  <div><strong>Outputs:</strong> {selectedItem.specs.digitalOutputs || 'N/A'}</div>
                  <div><strong>Inputs:</strong> {selectedItem.specs.digitalInputs || 'N/A'}</div>
                  <div><strong>Analog I/O:</strong> {selectedItem.specs.analogInputs || 'N/A'}</div>
                  <div><strong>Enclosure:</strong> {selectedItem.specs.cover}</div>
                  <div><strong>DIN Rail:</strong> {selectedItem.specs.dinRail ? 'Yes (35mm standard)' : 'No'}</div>
                  <div><strong>Buses:</strong> {selectedItem.specs.communication.join(', ')}</div>
                </div>
              </div>

              {/* Complete Features */}
              <div>
                <span className="font-bold text-slate-900 block uppercase tracking-wider text-[11px] font-mono mb-2">
                  All Device Features &amp; Specifications:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedItem.features.map((feat, idx) => (
                    <li key={idx} className="p-2 rounded-lg bg-emerald-50/60 border border-emerald-100 flex items-start gap-1.5 text-[11px]">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Complete Applications */}
              <div>
                <span className="font-bold text-slate-900 block uppercase tracking-wider text-[11px] font-mono mb-2">
                  All Practical Application Domains:
                </span>
                <div className="space-y-1.5">
                  {selectedItem.applications.map((app, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-blue-50/50 border border-blue-100 flex items-start gap-2 text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-1"></span>
                      <span className="leading-snug">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer with Close Button */}
            <div className="pt-4 border-t border-slate-200 mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sticky bottom-0 bg-white">
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
              >
                Close Window
              </button>

              <div className="flex items-center gap-3">
                <span className="text-base font-black text-slate-900 font-mono">
                  {formatNaira(selectedItem.price || 85000)}
                </span>
                <BuyButton item={selectedItem} className="px-5 py-2.5" />
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ADMIN EDIT KINCONY DEVICE MODAL                                           */}
      {/* ========================================================================= */}
      {editingDevice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-300 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="font-black text-slate-900 text-base">Edit KinCony Device ({editingDevice.model})</h3>
              <button 
                type="button"
                onClick={() => setEditingDevice(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Image URL / File Path</label>
              <input
                type="text"
                value={editingDevice.image}
                onChange={(e) => setEditingDevice({ ...editingDevice, image: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Device Name</label>
              <input
                type="text"
                value={editingDevice.name}
                onChange={(e) => setEditingDevice({ ...editingDevice, name: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Description</label>
              <textarea
                value={editingDevice.description}
                rows={3}
                onChange={(e) => setEditingDevice({ ...editingDevice, description: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Price (NGN)</label>
              <input
                type="number"
                value={editingDevice.price || 85000}
                onChange={(e) => setEditingDevice({ ...editingDevice, price: Number(e.target.value) })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl font-mono"
              />
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setEditingDevice(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  updateItemImage('kincony', editingDevice.id, editingDevice.image);
                  updateItemText('kincony', editingDevice.id, {
                    name: editingDevice.name,
                    description: editingDevice.description,
                    price: editingDevice.price
                  });
                  setEditingDevice(null);
                }}
                className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
