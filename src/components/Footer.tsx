import React from 'react';
import { useApp } from '../context/AppContext';
import { PageTab } from '../types';
import { Cpu, Phone, Mail, MapPin, Zap, ArrowRight, ShieldCheck, Lock, Video } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveTab, openQuoteModal, settings, isAdminLoggedIn, openLoginModal } = useApp();

  const handleNav = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#081F12] text-slate-300 border-t border-[#248C54]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1 & 2: Brand Lockup & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#248C54] to-[#14532D] flex items-center justify-center text-white shadow-md border border-[#97CD97]/40">
                <Cpu className="w-5 h-5 text-[#97CD97]" />
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                {settings.companyName || 'BARGAINPOWER & TECHNOLOGY'}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Pioneering hardware engineering, residential & industrial smart home automation, 
              heavy-duty 3-pole contactor integration, electric vehicle conversions, and dry-season agricultural snail climate automation.
            </p>

            <div className="pt-2 text-xs space-y-2">
              <div className="flex items-center gap-2 text-slate-200">
                <Phone className="w-3.5 h-3.5 text-[#97CD97]" />
                <a href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#97CD97] transition-colors">
                  {settings.whatsappNumber}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Mail className="w-3.5 h-3.5 text-[#97CD97]" />
                <a href={`mailto:${settings.helpEmail}`} className="hover:text-[#97CD97] transition-colors">
                  {settings.helpEmail}
                </a>
              </div>
              <div className="flex items-start gap-2 text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-[#97CD97] shrink-0 mt-0.5" />
                <span>{settings.address}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Hardware Catalog Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#97CD97] mb-3">
              Hardware Components
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('sensors')} className="hover:text-[#97CD97] transition-colors cursor-pointer">
                  Sensors Directory
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('microcontrollers')} className="hover:text-[#97CD97] transition-colors cursor-pointer">
                  Micro Controllers (ESP32 / Arduino)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contactors')} className="hover:text-[#97CD97] transition-colors cursor-pointer">
                  3-Pole AC/DC Contactors
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('breakers')} className="hover:text-[#97CD97] transition-colors cursor-pointer">
                  Circuit Breakers & Smart Meters
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('servo')} className="hover:text-[#97CD97] transition-colors cursor-pointer">
                  Servo & Stepper Motors
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Engineering Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#97CD97] mb-3">
              Engineering Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#97CD97] transition-colors cursor-pointer">
                  Full Home Automation Systems
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#97CD97] transition-colors cursor-pointer">
                  Dry-Season Snail Farming Automation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#97CD97] transition-colors cursor-pointer">
                  Electric Vehicle Conversions (BEV)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#97CD97] transition-colors cursor-pointer">
                  Custom Electric Bikes & Scooters
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#97CD97] transition-colors cursor-pointer">
                  Carbon-Fiber Aircraft Models
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#97CD97] transition-colors cursor-pointer">
                  Undergraduate Thesis Mentorship
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Support & Administration */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#97CD97] mb-3">
              Quick Actions
            </h4>
            <div className="space-y-2.5">
              <button
                onClick={() => openQuoteModal()}
                className="w-full py-2.5 px-3 rounded-lg bg-[#248C54] hover:bg-[#1E7747] text-white font-extrabold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 border-t border-[#97CD97]"
              >
                <Zap className="w-3.5 h-3.5 text-[#97CD97]" />
                <span>Build your Project</span>
              </button>

              <button
                onClick={() => handleNav('video')}
                className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5 border border-white/20"
              >
                <Video className="w-3.5 h-3.5 text-emerald-400" />
                <span>Watch Video Demos</span>
              </button>

              <button
                onClick={() => handleNav('faq')}
                className="w-full py-2 px-3 rounded-lg bg-[#113C23] hover:bg-[#1A5A35] text-slate-200 text-xs font-semibold transition-all cursor-pointer text-center border border-[#248C54]/50"
              >
                Technical Q&A / FAQs
              </button>

              <button
                onClick={() => handleNav('contact')}
                className="w-full py-2 px-3 rounded-lg bg-[#113C23] hover:bg-[#1A5A35] text-slate-200 text-xs font-semibold transition-all cursor-pointer text-center border border-[#248C54]/50"
              >
                Direct Inquiry Form
              </button>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (isAdminLoggedIn) {
                      handleNav('admin');
                    } else {
                      openLoginModal();
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-[#97CD97] cursor-pointer transition-colors"
                >
                  <Lock className="w-3 h-3 text-[#97CD97]" />
                  <span>{isAdminLoggedIn ? 'Administrative Portal' : 'Authorized Staff / Team Access'}</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-[#248C54]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#97CD97]" />
            <span>Industrial High-Voltage Safety Certified · 100% Tested Bench Deployments</span>
          </div>

          <div>
            © {new Date().getFullYear()} BARGAINPOWER & TECHNOLOGY. Precision Engineering Rigor.
          </div>
        </div>

      </div>
    </footer>
  );
};
