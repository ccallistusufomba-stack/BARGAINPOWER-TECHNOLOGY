import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Lock, X, ShieldCheck, Key, User, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

export const AdminLoginModal: React.FC = () => {
  const { isLoginModalOpen, closeLoginModal, loginAdmin, setActiveTab } = useApp();
  const [emailOrUser, setEmailOrUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(password, emailOrUser);
    if (success) {
      setErrorMsg('');
      setActiveTab('admin');
    } else {
      setErrorMsg('Invalid staff credentials. Default passcode: admin or admin123');
    }
  };

  const handleQuickLogin = () => {
    const success = loginAdmin('admin123', 'team@bargainpower.com');
    if (success) {
      setErrorMsg('');
      setActiveTab('admin');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0A2617] text-white p-6 relative">
          <button
            onClick={closeLoginModal}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 text-[#97CD97]">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-black tracking-widest text-[#97CD97]">
                Engineering &amp; Staff Access
              </span>
              <h3 className="text-xl font-black text-white">Team Admin Portal</h3>
            </div>
          </div>
          <p className="text-xs text-emerald-100/90 leading-relaxed">
            Restricted to authorized BARGAINPOWER engineers and web editors to manage images, text, and customer triages.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {errorMsg && (
            <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#248C54]" />
              Staff Email / Username:
            </label>
            <input
              type="text"
              value={emailOrUser}
              onChange={(e) => setEmailOrUser(e.target.value)}
              placeholder="team@bargainpower.com or admin"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#248C54]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-[#248C54]" />
              Staff Passcode / Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter passcode (e.g. admin123)"
              required
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#248C54]"
            />
            <span className="text-[10px] text-slate-500 mt-1 block">
              Default passcode: <span className="font-mono font-bold text-slate-700">admin123</span> or <span className="font-mono font-bold text-slate-700">admin</span>
            </span>
          </div>

          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#248C54] hover:bg-[#1E7747] text-white text-xs font-extrabold shadow-lg shadow-[#248C54]/30 border-t border-[#97CD97] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#97CD97]" />
              <span>Authenticate Staff Session</span>
            </button>

            {/* Quick Demo Access button for instant testing */}
            <button
              type="button"
              onClick={handleQuickLogin}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#248C54]" />
              <span>One-Click Team Quick Login (Demo)</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
