import React, { useState, useMemo, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { CctvItem } from '../types';
import { BuyButton } from './BuyButton';
import { formatNaira } from '../utils/pricing';
import { ComponentCategoryBar } from './ComponentCategoryBar';
import { 
  ShieldCheck, 
  Video, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Search, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  X, 
  ExternalLink, 
  Sliders, 
  Layers, 
  Plus, 
  Trash2, 
  Edit3, 
  Camera, 
  Sun, 
  Radio, 
  Zap, 
  ArrowRight,
  Maximize2,
  FileText,
  Upload
} from 'lucide-react';

export const CctvPage: React.FC = () => {
  const { 
    cctvData, 
    updateCctvItem, 
    addItem, 
    deleteItem, 
    isAdminLoggedIn, 
    isEditMode 
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Detailed Modal Item
  const [selectedItem, setSelectedItem] = useState<CctvItem | null>(null);

  // High-Resolution Image Preview Modal
  const [previewImage, setPreviewImage] = useState<{ url: string; title: string } | null>(null);

  // Admin Edit Modal State
  const [editingItem, setEditingItem] = useState<CctvItem | null>(null);
  const [editForm, setEditForm] = useState<Partial<CctvItem>>({});
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Categories list based on CloudSecurity specifications
  const categories = [
    'All',
    'Smart AI Cameras',
    'NVR Network Video Recorders',
    'DVR / XVR Hybrid Recorders',
    'PoE Cameras',
    'Complete PoE Kits',
    'AI PTZ & Speed Domes'
  ];

  // Filtered Items
  const filteredItems = useMemo(() => {
    return cctvData.filter(item => {
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesModel = item.model.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesRes = item.resolution.toLowerCase().includes(q);
        const matchesFeatures = item.features.some(f => f.toLowerCase().includes(q));
        const matchesApps = item.applications.some(a => a.toLowerCase().includes(q));
        const matchesAi = item.aiFeatures.some(ai => ai.toLowerCase().includes(q));
        if (!matchesName && !matchesModel && !matchesCategory && !matchesRes && !matchesFeatures && !matchesApps && !matchesAi) {
          return false;
        }
      }
      return true;
    });
  }, [cctvData, selectedCategory, searchQuery]);

  // Handle Admin Add New Product
  const handleAddNewProduct = () => {
    const id = `cctv-${Date.now()}`;
    const newProduct: CctvItem = {
      id,
      name: '4K Ultra HD AI Smart Surveillance Camera (PoE)',
      model: `CS-PRO-${Math.floor(100 + Math.random() * 900)}`,
      category: 'Smart AI Cameras',
      resolution: '8MP 4K Ultra HD (3840 × 2160)',
      lensType: '2.8mm Wide-Angle Glass Lens',
      nightVision: '40m Full-Color Starlight Night Vision',
      connectivity: 'PoE (802.3af) / Gigabit RJ45',
      audio: 'Two-Way Audio with Built-in Speaker & Mic',
      storage: 'MicroSD up to 256GB + NVR Cloud Recording',
      powerMethod: 'Power over Ethernet (PoE 48V)',
      weatherproofRating: 'IP67 Weatherproof Metal Housing',
      aiFeatures: [
        'AI Human and Vehicle Motion Classification',
        'Facial Detection and Perimeter Intrusion Alert',
        'Virtual Tripwire Line Crossing Trigger'
      ],
      features: [
        'Ultra H.265+ high-efficiency compression algorithm',
        '120dB True Wide Dynamic Range (WDR) glare suppression',
        'Active deterrence strobe light and audible siren'
      ],
      applications: [
        'Commercial bank entrances and ATM vestibules',
        'Residential estate gate perimeter protection',
        'Warehouse logistics loading docks and storage sheds'
      ],
      image: '/src/assets/images/cctv_poe_bullet_camera_1792362677536.jpg',
      price: 75000
    };
    addItem('cctv', newProduct);
    setEditingItem(newProduct);
    setEditForm(newProduct);
  };

  // Open Edit Modal
  const handleOpenEdit = (item: CctvItem) => {
    setEditingItem(item);
    setEditForm({ ...item });
  };

  // Save Edit Form
  const handleSaveEdit = () => {
    if (!editingItem) return;
    updateCctvItem(editingItem.id, editForm);
    setEditingItem(null);
  };

  // Handle Image Upload via file reader
  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      setEditForm(prev => ({ ...prev, image: dataUrl }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16 animate-fadeIn">
      {/* Top Component Category Switcher Bar */}
      <ComponentCategoryBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* HEADER HERO SECTION                                                       */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-2xl shadow-xs border border-slate-300 p-6 sm:p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200 mb-3">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>OFFICIAL SMART CCTV, NVR, DVR &amp; POE SURVEILLANCE ECOSYSTEM</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Smart CCTV Cameras, 4K NVR, Hybrid DVR &amp; PoE Systems
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Professional surveillance technology sourced from <strong>Cloud Security Technology</strong> (<code className="text-blue-700 bg-blue-50 px-1 py-0.5 rounded font-mono text-[11px]">https://cloudsecurity.com.ng/#</code>). 
                Featuring deep-learning AI cameras (Face Recognition, License Plate ANPR, People Counting), high-throughput 4K PoE Network Video Recorders, 5-in-1 hybrid XVR/DVRs, and complete plug-and-play PoE kits.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <a
                href="https://cloudsecurity.com.ng/#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                title="Open CloudSecurity Nigeria"
              >
                <span>Live CloudSecurity Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {isAdminLoggedIn && isEditMode && (
                <button
                  type="button"
                  onClick={handleAddNewProduct}
                  className="px-4 py-2.5 rounded-xl bg-[#248C54] hover:bg-[#1E7747] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add CCTV / NVR / DVR</span>
                </button>
              )}
            </div>
          </div>

          {/* Key Advantages Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-200">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-500 font-mono block">Resolution Standard</span>
              <span className="text-sm sm:text-base font-black text-slate-900 font-mono">4K Ultra HD (8MP)</span>
              <span className="text-[11px] text-slate-500 block">Crystal Forensic Evidence</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-500 font-mono block">Night Vision</span>
              <span className="text-sm sm:text-base font-black text-blue-600 font-mono">Full-Color Starlight</span>
              <span className="text-[11px] text-slate-500 block">30m to 150m Laser IR</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-500 font-mono block">AI Intelligence</span>
              <span className="text-sm sm:text-base font-black text-emerald-600 font-mono">LPR &amp; Face Search</span>
              <span className="text-[11px] text-slate-500 block">Human &amp; Vehicle Filtering</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-500 font-mono block">Cabling Standard</span>
              <span className="text-sm sm:text-base font-black text-purple-600 font-mono">True PoE Plug &amp; Play</span>
              <span className="text-[11px] text-slate-500 block">Single Cat6 Cable Runs</span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* CATEGORY SWITCHER & SEARCH                                                */}
          {/* ========================================================================= */}
          <div className="mt-6 pt-6 border-t border-slate-200 space-y-4">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
              {categories.map(cat => {
                const count = cat === 'All' 
                  ? cctvData.length 
                  : cctvData.filter(i => i.category === cat).length;

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

            {/* Search Input */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="relative w-full sm:max-w-md">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search CCTV model, NVR, DVR, 4K PoE kits, AI features..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#248C54] focus:bg-white text-slate-900"
                />
              </div>

              <div className="text-xs text-slate-500 font-mono">
                Showing <strong>{filteredItems.length}</strong> of {cctvData.length} surveillance products
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* CONTINUOUS ALTERNATING CARD LIST: PICTURE LEFT / TEXT RIGHT ALTERNATIVELY */}
        {/* ========================================================================= */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-300 text-slate-500 space-y-3">
            <Camera className="w-12 h-12 mx-auto text-slate-400 mb-2" />
            <p className="font-semibold text-slate-800">No CCTV products match your search or filter.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-[#248C54] text-white text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredItems.map((item, index) => {
              // Alternating layout: even = picture left / text right; odd = picture right / text left
              const isEven = index % 2 === 0;

              return (
                <article
                  key={item.id}
                  id={item.id}
                  className="bg-white rounded-3xl border border-slate-300 hover:border-slate-400 shadow-sm hover:shadow-md transition-all overflow-hidden"
                >
                  <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch`}>
                    
                    {/* ================================================================= */}
                    {/* MEDIUM-SIZED PLAIN & CLEAR PICTURE CONTAINER                      */}
                    {/* ================================================================= */}
                    <div className="w-full md:w-80 lg:w-96 shrink-0 bg-slate-50 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 relative group">
                      
                      {/* Top Badges over image */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                        <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 text-white font-mono text-[11px] font-bold shadow-xs">
                          {item.model}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">
                          {item.weatherproofRating}
                        </span>
                      </div>

                      {/* Plain, clear, medium-sized image container */}
                      <div 
                        onClick={() => setPreviewImage({ url: item.image, title: item.name })}
                        className="w-full h-56 sm:h-64 rounded-2xl bg-white border border-slate-200 overflow-hidden flex items-center justify-center relative cursor-pointer shadow-xs p-2 group-hover:border-blue-400 transition-colors"
                        title="Click to zoom image"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                          <span className="px-3 py-1.5 rounded-xl bg-white/95 text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-md">
                            <Maximize2 className="w-3.5 h-3.5 text-blue-600" />
                            <span>View Full Picture</span>
                          </span>
                        </div>
                      </div>

                      {/* Admin Quick Picture Replacement */}
                      {isAdminLoggedIn && isEditMode && (
                        <div className="mt-3 flex items-center gap-2 w-full">
                          <button
                            type="button"
                            onClick={() => handleOpenEdit(item)}
                            className="flex-1 py-1.5 px-3 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <Camera className="w-3.5 h-3.5 text-blue-600" />
                            <span>Change Picture / Text</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              if (window.confirm(`Delete "${item.name}"?`)) {
                                deleteItem('cctv', item.id);
                              }
                            }}
                            className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 transition-colors cursor-pointer"
                            title="Delete this CCTV product"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* ================================================================= */}
                    {/* TEXT CONTENT CONTAINER (RIGHT OR LEFT ALTERNATIVELY)               */}
                    {/* ================================================================= */}
                    <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                      
                      <div>
                        {/* Category & Resolution Header */}
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                            {item.category}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[10px] font-mono font-bold border border-emerald-200">
                            {item.resolution}
                          </span>
                          {item.channels && (
                            <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 text-[10px] font-mono font-bold border border-purple-200">
                              {item.channels}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
                          {item.name}
                        </h2>

                        {/* Core Specification Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-600 font-mono">
                          <div>
                            <span className="text-slate-400 block text-[9px] uppercase font-bold">Optical Lens</span>
                            <span className="font-semibold text-slate-800 truncate block">{item.lensType}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[9px] uppercase font-bold">Night Vision</span>
                            <span className="font-semibold text-slate-800 truncate block">{item.nightVision}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[9px] uppercase font-bold">Cabling / Bus</span>
                            <span className="font-semibold text-slate-800 truncate block">{item.connectivity}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[9px] uppercase font-bold">Audio Interface</span>
                            <span className="font-semibold text-slate-800 truncate block">{item.audio}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[9px] uppercase font-bold">Storage / Capacity</span>
                            <span className="font-semibold text-slate-800 truncate block">{item.storage}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[9px] uppercase font-bold">Power Supply</span>
                            <span className="font-semibold text-slate-800 truncate block">{item.powerMethod}</span>
                          </div>
                        </div>

                        {/* AI & Smart Analytics Highlights */}
                        {item.aiFeatures && item.aiFeatures.length > 0 && (
                          <div className="mt-4 p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                            <span className="text-[10px] font-black uppercase tracking-wider text-blue-900 block font-mono mb-1.5 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                              <span>AI Deep Learning Features:</span>
                            </span>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-700">
                              {item.aiFeatures.slice(0, 4).map((ai, aIdx) => (
                                <li key={aIdx} className="flex items-start gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5"></span>
                                  <span className="leading-tight">{ai}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Hardware Features List */}
                        <div className="mt-3">
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block font-mono mb-1.5">
                            Hardware &amp; System Capabilities:
                          </span>
                          <ul className="space-y-1 text-xs text-slate-700">
                            {item.features.slice(0, 3).map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-1.5 text-[11px] leading-tight">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Real-World Deployment Applications */}
                        <div className="mt-3">
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block font-mono mb-1.5">
                            Real-World Deployment Applications:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.applications.slice(0, 3).map((app, appIdx) => (
                              <span 
                                key={appIdx} 
                                className="px-2 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-[10px] leading-tight"
                              >
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>

                      {/* Card Bottom: Investment, Full Specs Trigger, & Buy Button */}
                      <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                        <div>
                          <span className="text-[10px] text-slate-500 block">System Price (NGN)</span>
                          <span className="text-lg font-black text-slate-900 font-mono">
                            {formatNaira(item.price || 68000)}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setSelectedItem(item)}
                            className="px-3 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <FileText className="w-3.5 h-3.5 text-blue-600" />
                            <span>Full Details</span>
                          </button>

                          <BuyButton item={item} className="px-5 py-2" />
                        </div>
                      </div>

                    </div>

                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* DETAILED TECHNICAL MODAL (FITS TO PAGE WITH CLOSING BUTTON)               */}
      {/* ========================================================================= */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-300 shadow-2xl relative my-auto animate-scaleUp text-slate-900 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Sticky Header with Closing Button */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-3 z-10">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-mono font-black text-xs">
                  {selectedItem.model}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 text-[11px] font-bold border border-blue-200">
                  {selectedItem.category}
                </span>
              </div>

              {/* Obvious Accessible Closing Button */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold"
                aria-label="Close modal window"
              >
                <span>Close</span>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 text-xs">
              
              {/* Product Headline & Medium Picture */}
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div 
                  onClick={() => setPreviewImage({ url: selectedItem.image, title: selectedItem.name })}
                  className="w-full sm:w-64 h-48 sm:h-56 rounded-2xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center shrink-0 cursor-pointer hover:border-blue-400 transition-colors"
                >
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="space-y-2 flex-1">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    {selectedItem.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-mono font-bold border border-emerald-200">
                      {selectedItem.resolution}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 font-mono font-bold">
                      {selectedItem.weatherproofRating}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    Industrial surveillance hardware engineered for continuous 24/7 recording, high forensic evidentiary clarity, and automated intrusion alarms.
                  </p>
                </div>
              </div>

              {/* Complete Specifications Matrix */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 font-mono text-[11px]">
                <div className="font-bold text-slate-900 pb-1 border-b border-slate-200 text-xs">
                  Full Technical Specifications:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                  <div><strong>Model Number:</strong> {selectedItem.model}</div>
                  <div><strong>Resolution:</strong> {selectedItem.resolution}</div>
                  <div><strong>Optical Lens:</strong> {selectedItem.lensType}</div>
                  <div><strong>Night Vision:</strong> {selectedItem.nightVision}</div>
                  <div><strong>Audio System:</strong> {selectedItem.audio}</div>
                  <div><strong>Connectivity:</strong> {selectedItem.connectivity}</div>
                  <div><strong>Storage:</strong> {selectedItem.storage}</div>
                  <div><strong>Power Supply:</strong> {selectedItem.powerMethod}</div>
                  <div><strong>Enclosure Rating:</strong> {selectedItem.weatherproofRating}</div>
                  {selectedItem.channels && <div><strong>Channel Capacity:</strong> {selectedItem.channels}</div>}
                </div>
              </div>

              {/* AI Features */}
              {selectedItem.aiFeatures && selectedItem.aiFeatures.length > 0 && (
                <div>
                  <span className="font-bold text-slate-900 block uppercase tracking-wider text-[11px] font-mono mb-2">
                    AI Deep Learning Video Analytics:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedItem.aiFeatures.map((ai, idx) => (
                      <li key={idx} className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-2 text-[11px]">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{ai}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* All Hardware Features */}
              <div>
                <span className="font-bold text-slate-900 block uppercase tracking-wider text-[11px] font-mono mb-2">
                  Complete Hardware &amp; Firmware Features:
                </span>
                <ul className="space-y-1.5">
                  {selectedItem.features.map((feat, idx) => (
                    <li key={idx} className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-2 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* All Real-World Applications */}
              <div>
                <span className="font-bold text-slate-900 block uppercase tracking-wider text-[11px] font-mono mb-2">
                  Recommended Deployment &amp; Industry Applications:
                </span>
                <div className="space-y-1.5">
                  {selectedItem.applications.map((app, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2 text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-1"></span>
                      <span className="leading-snug">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-slate-200 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
              >
                Close Window
              </button>

              <div className="flex items-center gap-3">
                <span className="text-base font-black text-slate-900 font-mono">
                  {formatNaira(selectedItem.price || 68000)}
                </span>
                <BuyButton item={selectedItem} className="px-5 py-2" />
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* HIGH-RES PLAIN & CLEAR PICTURE PREVIEW MODAL (WITH CLOSING BUTTON)         */}
      {/* ========================================================================= */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setPreviewImage(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full p-6 border border-slate-300 shadow-2xl relative my-auto animate-scaleUp text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <h4 className="font-black text-sm text-slate-900 truncate">
                {previewImage.title}
              </h4>
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full h-80 sm:h-96 rounded-2xl bg-white border border-slate-200 p-4 flex items-center justify-center">
              <img
                src={previewImage.url}
                alt={previewImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-200">
              <span className="text-xs text-slate-500 font-mono">Plain &amp; High-Clarity View</span>
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="px-4 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold cursor-pointer hover:bg-slate-800"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ADMIN EDIT / ADD PRODUCT MODAL (FITS TO PAGE WITH CLOSING BUTTON)          */}
      {/* ========================================================================= */}
      {editingItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
          onClick={() => setEditingItem(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-300 shadow-2xl relative my-auto animate-scaleUp text-slate-900 p-6 sm:p-8 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <h3 className="font-black text-base text-slate-900">
                  Admin: Edit Surveillance Device &amp; Text
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Modify picture, model number, specifications, features, and applications
                </p>
              </div>
              <button
                type="button"
                onClick={() => setEditingItem(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                aria-label="Close edit modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-3 text-xs">
              
              <div>
                <label className="font-bold text-slate-700 block mb-1">Product Name</label>
                <input
                  type="text"
                  value={editForm.name || ''}
                  onChange={(e) => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium text-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Model Number</label>
                  <input
                    type="text"
                    value={editForm.model || ''}
                    onChange={(e) => setEditForm(prev => ({ ...prev, model: e.target.value }))}
                    className="w-full p-2 bg-slate-50 border border-slate-300 rounded-xl font-mono text-slate-900"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Category</label>
                  <select
                    value={editForm.category || 'Smart AI Cameras'}
                    onChange={(e) => setEditForm(prev => ({ ...prev, category: e.target.value as any }))}
                    className="w-full p-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900"
                  >
                    {categories.filter(c => c !== 'All').map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Resolution</label>
                  <input
                    type="text"
                    value={editForm.resolution || ''}
                    onChange={(e) => setEditForm(prev => ({ ...prev, resolution: e.target.value }))}
                    className="w-full p-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-mono"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Price (NGN)</label>
                  <input
                    type="number"
                    value={editForm.price || 0}
                    onChange={(e) => setEditForm(prev => ({ ...prev, price: Number(e.target.value) }))}
                    className="w-full p-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-mono"
                  />
                </div>
              </div>

              {/* Picture Update */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">Product Picture</label>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl bg-slate-100 border border-slate-300 overflow-hidden shrink-0 p-1 flex items-center justify-center">
                    <img src={editForm.image} alt="Preview" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <input
                      type="text"
                      value={editForm.image || ''}
                      onChange={(e) => setEditForm(prev => ({ ...prev, image: e.target.value }))}
                      placeholder="Paste image URL or upload file"
                      className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-mono text-[11px]"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold flex items-center gap-1.5 cursor-pointer hover:bg-blue-100"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload Local Picture</span>
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageFileChange}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Hardware Features (comma-separated or lines) */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">Features (one per line)</label>
                <textarea
                  rows={3}
                  value={(editForm.features || []).join('\n')}
                  onChange={(e) => setEditForm(prev => ({ ...prev, features: e.target.value.split('\n').filter(Boolean) }))}
                  className="w-full p-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-mono text-[11px]"
                />
              </div>

              {/* Applications (one per line) */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">Applications (one per line)</label>
                <textarea
                  rows={3}
                  value={(editForm.applications || []).join('\n')}
                  onChange={(e) => setEditForm(prev => ({ ...prev, applications: e.target.value.split('\n').filter(Boolean) }))}
                  className="w-full p-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-mono text-[11px]"
                />
              </div>

            </div>

            {/* Modal Actions */}
            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setEditingItem(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSaveEdit}
                className="px-5 py-2 rounded-xl bg-[#248C54] hover:bg-[#1E7747] text-white text-xs font-bold cursor-pointer shadow-xs"
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
