import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Edit3, Eye, LogOut, FileText, Sparkles, CheckCircle2 } from 'lucide-react';

export const AdminTopBar: React.FC = () => {
  const { 
    isAdminLoggedIn, 
    isEditMode, 
    toggleEditMode, 
    logoutAdmin, 
    setActiveTab,
    activeTab
  } = useApp();

  if (!isAdminLoggedIn) return null;

  return (
    <aside 
      aria-label="Staff Administration Bar"
      className="bg-[#061B10] border-b border-[#248C54]/60 text-white px-4 py-2 text-xs flex flex-wrap items-center justify-between gap-3 shadow-md z-40 sticky top-0"
    >
      {/* Left: Status Badge */}
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#248C54]/30 border border-[#97CD97]/40 text-[#97CD97] font-extrabold text-[11px] tracking-wide">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Staff Engineering Session Active</span>
        </span>
        <span className="hidden md:inline text-slate-300 text-[11px]">
          Direct Picture &amp; Text Editing Enabled
        </span>
      </div>

      {/* Right: Controls & Actions */}
      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
        {/* Toggle Visual Edit Mode */}
        <button
          type="button"
          onClick={toggleEditMode}
          className={`px-3 py-1.5 rounded-lg font-bold text-[11px] flex items-center gap-1.5 transition-all cursor-pointer border ${
            isEditMode
              ? 'bg-[#248C54] text-white border-[#97CD97]/80 shadow-xs ring-1 ring-emerald-400/40'
              : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
          }`}
          title="Toggle inline picture and text editing controls"
        >
          {isEditMode ? (
            <>
              <Edit3 className="w-3.5 h-3.5 text-[#97CD97]" />
              <span>In-Page Visual Editor: ON</span>
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5 text-slate-400" />
              <span>Preview as Visitor (Editor OFF)</span>
            </>
          )}
        </button>

        {/* Shortcut to Admin Portal */}
        <button
          type="button"
          onClick={() => setActiveTab('admin')}
          className={`px-3 py-1.5 rounded-lg font-bold text-[11px] flex items-center gap-1.5 transition-all cursor-pointer border ${
            activeTab === 'admin'
              ? 'bg-purple-900/60 text-purple-200 border-purple-500'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
          }`}
        >
          <FileText className="w-3.5 h-3.5 text-purple-300" />
          <span>Admin Portal</span>
        </button>

        {/* Log Out Button */}
        <button
          type="button"
          onClick={logoutAdmin}
          className="px-3 py-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 border border-red-700/60 text-red-200 text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer"
          title="Log out of Staff Session"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};
