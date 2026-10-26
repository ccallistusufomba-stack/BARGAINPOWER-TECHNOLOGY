import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Send } from 'lucide-react';
import { sanitizeInput } from '../utils/sanitize';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const FloatingWhatsApp: React.FC = () => {
  const { settings } = useApp();
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [projectInterest, setProjectInterest] = useState('Home Automation & Relays');
  const [briefQuestion, setBriefQuestion] = useState('');

  // Sanitize the phone number for WhatsApp URL
  const cleanPhone = settings.whatsappNumber.replace(/[^0-9]/g, '');

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = sanitizeInput(visitorName) || 'Visitor';
    const cleanMsg = sanitizeInput(briefQuestion) || 'I would like to inquire about your engineering solutions';

    const fullWaText = `Hello BARGAINPOWER & TECHNOLOGY!\nMy name is: ${cleanName}\nI am inquiring about: ${projectInterest}\nRequirements: ${cleanMsg}`;
    const encoded = encodeURIComponent(fullWaText);
    const waUrl = `https://wa.me/${cleanPhone}?text=${encoded}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setShowPromptModal(false);
  };

  const handleDirectClick = () => {
    setShowPromptModal(true);
  };

  return (
    <>
      {/* Fixed, Animated WhatsApp Floating Logo Button (Bottom Right) */}
      <aside 
        aria-label="WhatsApp Contact Button"
        className="fixed bottom-6 right-6 z-40 flex items-center"
      >
        <button
          onClick={handleDirectClick}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba5a] transition-all transform hover:scale-110 active:scale-95 cursor-pointer focus:outline-hidden focus:ring-4 focus:ring-emerald-400/50"
          aria-label="WhatsApp"
        >
          {/* Animated ping ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:opacity-70 pointer-events-none"></span>
          
          {/* Official WhatsApp Brand Logo */}
          <WhatsAppIcon className="w-8 h-8 relative z-10 fill-white drop-shadow-sm" />
        </button>
      </aside>

      {/* Responsive WhatsApp Requirements Modal Prompt */}
      {showPromptModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 text-slate-900 animate-scaleUp">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md">
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    Connect on WhatsApp
                  </h3>
                  <p className="text-[11px] text-slate-500 font-mono">
                    Direct Line: {settings.whatsappNumber}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowPromptModal(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer p-1"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              To route your WhatsApp message directly to our duty engineering specialist, 
              please confirm your name and project interest:
            </p>

            <form onSubmit={handleLaunchWhatsApp} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Engr. David"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-[#25D366] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Project Interest</label>
                <select
                  value={projectInterest}
                  onChange={(e) => setProjectInterest(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-[#25D366] focus:outline-hidden bg-white"
                >
                  <option value="Home Automation & Relays">Home Automation & WiFi Relays</option>
                  <option value="Smart Irrigation & Snail Farming">Smart Irrigation & Dry Season Snail Farming</option>
                  <option value="3-Pole Contactors & Circuit Breakers">3-Pole Contactors & Circuit Breakers</option>
                  <option value="Electric Vehicle / E-Bike Build">Electric Vehicle Conversion / E-Bikes</option>
                  <option value="Aircraft Model Prototype">Carbon Fiber Aircraft Model (Airport Bird Control)</option>
                  <option value="Undergraduate Thesis Mentorship">Undergraduate Engineering Project</option>
                  <option value="Solar Power & LiFePO4 Inverters">Solar Power Customization</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Brief Requirements</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need price for 16-channel relay module and 3-pole 40A contactor..."
                  value={briefQuestion}
                  onChange={(e) => setBriefQuestion(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-[#25D366] focus:outline-hidden"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setShowPromptModal(false)}
                  className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Open WhatsApp Web / App</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </>
  );
};
