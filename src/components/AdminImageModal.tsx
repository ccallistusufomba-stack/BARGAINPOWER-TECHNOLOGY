import React, { useState, useRef } from 'react';
import { X, Upload, Link as LinkIcon, Image as ImageIcon, Check, Trash2, Sparkles } from 'lucide-react';
import { compressImageFile } from '../utils/imageCompressor';

export interface GalleryAsset {
  name: string;
  category: string;
  path: string;
}

export const PRESET_GALLERY_ASSETS: GalleryAsset[] = [
  { name: 'Smart AI 4K Ultra-HD PoE Bullet Camera', category: 'CCTV & Surveillance', path: '/src/assets/images/cctv_poe_bullet_camera_1792362677536.jpg' },
  { name: '4K IK10 Vandal-Proof PoE Dome Camera', category: 'CCTV & Surveillance', path: '/src/assets/images/cctv_poe_dome_camera_1792362692208.jpg' },
  { name: '16-Channel 4K Ultra-HD Network Video Recorder (NVR)', category: 'CCTV & Surveillance', path: '/src/assets/images/cctv_4k_nvr_recorder_1792362707557.jpg' },
  { name: '8-Channel 5-in-1 Hybrid XVR / DVR Security System', category: 'CCTV & Surveillance', path: '/src/assets/images/cctv_hybrid_dvr_system_1792362721665.jpg' },
  { name: 'Turnkey 4-Camera 4K PoE Surveillance Kit', category: 'CCTV & Surveillance', path: '/src/assets/images/cctv_poe_complete_kit_1792362736914.jpg' },
  { name: '30x Optical Zoom PTZ Speed Dome Camera', category: 'CCTV & Surveillance', path: '/src/assets/images/cctv_ptz_speed_dome_1792362751336.jpg' },
  { name: 'Automatic Fire Extinguisher (Clean Agent & Fire Ball)', category: 'Safety & Security', path: '/src/assets/images/fire_extinguisher_auto_1791552230446.jpg' },
  { name: '1-Pole Miniature Circuit Breaker (1P MCB)', category: 'Breakers', path: '/src/assets/images/breaker_1pole_1791552247575.jpg' },
  { name: '2-Pole Dual Miniature Circuit Breaker (2P MCB)', category: 'Breakers', path: '/src/assets/images/breaker_2pole_1791552258989.jpg' },
  { name: '3-Pole Industrial Circuit Breaker (3P MCB)', category: 'Breakers', path: '/src/assets/images/breakers_3pole_industrial_1790998696308.webp' },
  { name: '3-Pole Modular Magnetic Contactor', category: 'Contactors', path: '/src/assets/images/contactor_3pole_modular_1791552272813.jpg' },
  { name: '3-Pole AC/DC Heavy-Duty Contactor', category: 'Contactors', path: '/src/assets/images/contactors_3pole_ac_dc_1790998707179.webp' },
  { name: '24-Channel ESP32 IoT Relay Controller', category: 'Microcontrollers & Relays', path: '/src/assets/images/esp32_relay_24ch_1791552285027.jpg' },
  { name: '16-Channel WiFi Relay Controller', category: 'Microcontrollers & Relays', path: '/src/assets/images/relay_16ch_wifi_1790998673524.webp' },
  { name: 'DIN-Rail 12VDC/5VDC Industrial Power Supply', category: 'Power Supply', path: '/src/assets/images/power_supply_din_1791552295224.jpg' },
  { name: 'Tuya Smart WiFi Multi-Gang Touch Switches', category: 'Smart Switches', path: '/src/assets/images/smart_switches_tuya_1790998685408.webp' },
  { name: 'Custom High-Torque Electric Bike', category: 'Electric Mobility', path: '/src/assets/images/electric_bike_custom_1790998717436.webp' },
  { name: 'Electric Vehicle (EV) Drivetrain Conversion', category: 'Electric Mobility', path: '/src/assets/images/electric_vehicle_conversion_1790998727320.webp' },
  { name: 'Carbon-Fiber Aerodrome Aircraft Prototype', category: 'Aerospace & Drones', path: '/src/assets/images/electric_aircraft_model_1790998739880.webp' }
];

interface AdminImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImage?: string;
  itemTitle?: string;
  onSave: (newImageUrl: string) => void;
  onDelete?: () => void;
}

export const AdminImageModal: React.FC<AdminImageModalProps> = ({
  isOpen,
  onClose,
  currentImage = '',
  itemTitle = 'Item',
  onSave,
  onDelete
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'url' | 'presets'>('upload');
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>(currentImage);
  const [urlInput, setUrlInput] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please select a valid image file (PNG, JPG, WEBP, SVG, GIF)');
      return;
    }

    try {
      setIsProcessing(true);
      setErrorMessage('');
      const compressedDataUrl = await compressImageFile(file, 1200, 1200, 0.82);
      setSelectedImageUrl(compressedDataUrl);
    } catch (err) {
      console.error(err);
      setErrorMessage('Failed to process image. Please try a different image or use a direct URL.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleApplyUrl = () => {
    if (!urlInput.trim()) {
      setErrorMessage('Please enter an image URL');
      return;
    }
    setSelectedImageUrl(urlInput.trim());
    setErrorMessage('');
  };

  const handleSave = () => {
    onSave(selectedImageUrl);
    onClose();
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
      onClose();
    } else {
      onSave('');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-[#0A2617] text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-500/20 rounded-lg border border-emerald-400/30">
              <ImageIcon className="w-5 h-5 text-[#97CD97]" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">Change or Add Picture</h3>
              <p className="text-xs text-emerald-200/90 truncate max-w-md">Target: {itemTitle}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center border-b border-slate-200 bg-slate-50 px-6 pt-2 gap-2">
          <button
            onClick={() => setActiveTab('upload')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-xl border-t border-x transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'upload'
                ? 'bg-white border-slate-200 text-[#248C54] shadow-xs'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload From Device</span>
          </button>

          <button
            onClick={() => setActiveTab('presets')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-xl border-t border-x transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'presets'
                ? 'bg-white border-slate-200 text-[#248C54] shadow-xs'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Media Library Presets</span>
          </button>

          <button
            onClick={() => setActiveTab('url')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-xl border-t border-x transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'url'
                ? 'bg-white border-slate-200 text-[#248C54] shadow-xs'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5" />
            <span>Paste Image URL</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-grow space-y-5">
          {errorMessage && (
            <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
              {errorMessage}
            </div>
          )}

          {/* TAB 1: Upload from Device */}
          {activeTab === 'upload' && (
            <div className="space-y-4">
              <input 
                ref={fileInputRef}
                type="file" 
                accept="image/*" 
                onChange={handleFileUpload} 
                className="hidden" 
              />
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-emerald-400/60 hover:border-[#248C54] bg-emerald-50/40 hover:bg-emerald-50/80 rounded-2xl p-8 text-center cursor-pointer transition-all flex flex-col items-center justify-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-emerald-200 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform text-[#248C54]">
                  <Upload className="w-7 h-7" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Click to Choose or Drag Image Here
                </h4>
                <p className="text-xs text-slate-500 max-w-sm mb-3">
                  Select any picture (PNG, JPG, WEBP, SVG) from your computer or phone. Automatically optimized for fast loading.
                </p>
                <span className="px-4 py-2 bg-[#248C54] text-white rounded-xl text-xs font-bold shadow-xs hover:bg-[#1E7747] transition-colors">
                  Select Picture from Computer
                </span>
              </div>

              {isProcessing && (
                <div className="text-center py-2 text-xs font-semibold text-[#248C54] animate-pulse">
                  Optimizing image resolution &amp; compression...
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Presets Library */}
          {activeTab === 'presets' && (
            <div className="space-y-3">
              <div className="text-xs text-slate-600 mb-1">
                Choose from pre-loaded verified hardware &amp; engineering photographs:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-72 overflow-y-auto p-1">
                {PRESET_GALLERY_ASSETS.map((asset, i) => {
                  const isSelected = selectedImageUrl === asset.path;
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        setSelectedImageUrl(asset.path);
                        setErrorMessage('');
                      }}
                      className={`group relative rounded-xl border-2 p-1.5 cursor-pointer transition-all flex flex-col items-center bg-white ${
                        isSelected 
                          ? 'border-[#248C54] ring-2 ring-emerald-500/30 shadow-md' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="w-full aspect-4/3 rounded-lg overflow-hidden bg-slate-50 mb-1.5 relative">
                        <img 
                          src={asset.path} 
                          alt={asset.name} 
                          className="w-full h-full object-contain p-1"
                          referrerPolicy="no-referrer"
                        />
                        {isSelected && (
                          <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-[#248C54] text-white flex items-center justify-center">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] font-bold text-slate-800 text-center line-clamp-1">
                        {asset.name}
                      </span>
                      <span className="text-[9px] text-slate-500 truncate">
                        {asset.category}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: Direct URL */}
          {activeTab === 'url' && (
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-800">
                Enter Web Picture Link (HTTPS):
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://images.unsplash.com/... or /src/assets/images/..."
                  className="flex-grow px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#248C54]"
                />
                <button
                  type="button"
                  onClick={handleApplyUrl}
                  className="px-4 py-2.5 bg-[#248C54] hover:bg-[#1E7747] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Preview
                </button>
              </div>
              <p className="text-[11px] text-slate-500">
                You can paste image URLs hosted anywhere on the web or local asset paths.
              </p>
            </div>
          )}

          {/* Live Preview Box */}
          <div className="mt-4 pt-4 border-t border-slate-200">
            <span className="text-xs font-bold text-slate-700 block mb-2">
              Selected Picture Preview:
            </span>
            {selectedImageUrl ? (
              <div className="relative w-full max-w-sm mx-auto aspect-16/10 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center group shadow-sm">
                <img 
                  src={selectedImageUrl} 
                  alt="Preview" 
                  className="w-full h-full object-contain p-2"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/70 text-[10px] text-white font-mono">
                  Ready to Apply
                </div>
              </div>
            ) : (
              <div className="w-full max-w-sm mx-auto aspect-16/10 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                <ImageIcon className="w-8 h-8 mb-1" />
                <span className="text-xs font-semibold">No picture selected (Image will be empty/deleted)</span>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <div>
            {currentImage && (
              <button
                type="button"
                onClick={handleDelete}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl border border-red-200 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete Picture</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-black bg-[#248C54] hover:bg-[#1E7747] text-white shadow-md shadow-[#248C54]/30 border-t border-[#97CD97] transition-all cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Apply &amp; Save Picture</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
