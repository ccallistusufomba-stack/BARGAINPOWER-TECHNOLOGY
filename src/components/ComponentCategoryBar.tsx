import React from 'react';
import { useApp } from '../context/AppContext';
import { PageTab } from '../types';
import { 
  Layers, 
  Cpu, 
  Radio, 
  Zap, 
  Sliders, 
  Shield, 
  Activity, 
  Sparkles,
  Camera
} from 'lucide-react';

export const ComponentCategoryBar: React.FC = () => {
  const { activeTab, setActiveTab, setSubPageTitle, kinconyData, cctvData } = useApp();

  const componentTabs: { tab: PageTab; label: string; count?: number; icon: React.ReactNode; isNew?: boolean }[] = [
    { 
      tab: 'cctv', 
      label: 'Smart CCTV, NVR & DVR', 
      count: cctvData?.length || 12, 
      icon: <Camera className="w-3.5 h-3.5 text-blue-600" />,
      isNew: true
    },
    { 
      tab: 'kincony', 
      label: 'KinCony Smart Controllers', 
      count: kinconyData?.length || 90, 
      icon: <Cpu className="w-3.5 h-3.5 text-blue-500" />
    },
    { 
      tab: 'sensors', 
      label: 'Sensors', 
      icon: <Radio className="w-3.5 h-3.5 text-emerald-500" /> 
    },
    { 
      tab: 'microcontrollers', 
      label: 'Micro Controllers', 
      icon: <Activity className="w-3.5 h-3.5 text-indigo-500" /> 
    },
    { 
      tab: 'contactors', 
      label: 'Contactors', 
      icon: <Zap className="w-3.5 h-3.5 text-amber-500" /> 
    },
    { 
      tab: 'breakers', 
      label: 'Circuit Breakers', 
      icon: <Sliders className="w-3.5 h-3.5 text-rose-500" /> 
    },
    { 
      tab: 'servo', 
      label: 'Servo & Motors', 
      icon: <Zap className="w-3.5 h-3.5 text-cyan-500" /> 
    },
    { 
      tab: 'security', 
      label: 'Security & Fire Safety', 
      icon: <Shield className="w-3.5 h-3.5 text-red-500" /> 
    }
  ];

  return (
    <div className="w-full bg-white border-b border-slate-200/90 shadow-2xs py-2 px-4 mb-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        
        {/* Label */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-6 h-6 rounded-md bg-[#89618E]/10 text-[#89618E] flex items-center justify-center">
            <Layers className="w-3.5 h-3.5" />
          </div>
          <span className="text-[11px] uppercase font-black tracking-wider text-slate-700">
            Components Catalog:
          </span>
        </div>

        {/* Categories Tab Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-thin">
          {componentTabs.map((item) => {
            const isActive = activeTab === item.tab;

            return (
              <button
                key={item.tab}
                type="button"
                onClick={() => {
                  setActiveTab(item.tab);
                  setSubPageTitle(null);
                }}
                className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#89618E] text-white shadow-xs border-b-2 border-[#5B3960]'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80 hover:text-slate-900'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
                {item.count !== undefined && (
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono font-extrabold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {item.count}
                  </span>
                )}
                {item.isNew && (
                  <span className="px-1 py-0.2 rounded text-[9px] font-black uppercase tracking-tight bg-amber-400 text-slate-900 animate-pulse">
                    HOT
                  </span>
                )}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
