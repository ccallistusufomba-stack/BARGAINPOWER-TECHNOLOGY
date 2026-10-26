import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Lock, ShieldCheck, Key, User, ArrowLeft, Sparkles, AlertCircle } from 'lucide-react';

export const AdminLoginView: React.FC = () => {
  const { loginAdmin, setActiveTab } = useApp();
  const [emailOrUser, setEmailOrUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(password, emailOrUser);
    if (!success) {
      setErrorMsg('Invalid staff credentials. Default passcode: admin or admin123');
    }
  };

  const handleQuickLogin = () => {
    loginAdmin('admin123', 'team@bargainpower.com');
  };

  return (
    <div className="min-h-[80vh] bg-slate-900 py-16 px-4 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
        
        {/* Brand Banner */}
        <div className="bg-[#0A2617] text-white p-8 text-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-[#97CD97] shadow-inner">
            <Lock className="w-8 h-8" />
          </div>

          <span className="text-[10px] uppercase font-black tracking-widest text-[#97CD97] px-3 py-1 rounded-full bg-white/10 border border-white/20 inline-block mb-2">
            Restricted Engineering Area
          </span>
          <h2 className="text-2xl font-black text-white mb-2">
            Team &amp; Admin Portal
          </h2>
          <p className="text-xs text-emerald-100/90 leading-relaxed max-w-xs mx-auto">
            This portal is restricted to the BARGAINPOWER engineering team. Regular visitors cannot access this console.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          {errorMsg && (
            <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#248C54]" />
              Staff Email / Username:
            </label>
            <input
              type="text"
              value={emailOrUser}
              onChange={(e) => setEmailOrUser(e.target.value)}
              placeholder="team@bargainpower.com or admin"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#248C54]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
              <Key className="w-4 h-4 text-[#248C54]" />
              Staff Passcode:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password (e.g. admin123)"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#248C54]"
            />
            <span className="text-[10px] text-slate-500 mt-1 block">
              Default passcode: <span className="font-mono font-bold text-slate-700">admin123</span> or <span className="font-mono font-bold text-slate-700">admin</span>
            </span>
          </div>

          <div className="pt-2 space-y-2.5">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-[#248C54] hover:bg-[#1E7747] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-[#248C54]/30 border-t border-[#97CD97] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#97CD97]" />
              <span>Log In to Team Portal</span>
            </button>

            <button
              type="button"
              onClick={handleQuickLogin}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#248C54]" />
              <span>One-Click Team Quick Login (Demo)</span>
            </button>
          </div>

          <div className="pt-4 border-t border-slate-200 text-center">
            <button
              type="button"
              onClick={() => setActiveTab('home')}
              className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#248C54] font-semibold transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Public Website</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
