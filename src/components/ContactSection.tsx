import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { validateEmail, validatePhone } from '../utils/sanitize';

export const ContactSection: React.FC = () => {
  const { addInquiry, settings } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Home Automation System');
  const [message, setMessage] = useState('');
  
  // Anti-robot math check
  const [captchaNum1] = useState(Math.floor(Math.random() * 5 + 3));
  const [captchaNum2] = useState(Math.floor(Math.random() * 6 + 2));
  const [userCaptcha, setUserCaptcha] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationData, setConfirmationData] = useState<{
    id: string;
    name: string;
    email: string;
    service: string;
    message: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = 'Full name is required';
    if (!validateEmail(email)) newErrors.email = 'Please provide a valid email address';
    if (!validatePhone(phone)) newErrors.phone = 'Please provide a valid phone or WhatsApp number';
    if (!message.trim()) newErrors.message = 'Please include a brief message about your project';
    
    // Robot check
    if (parseInt(userCaptcha.trim(), 10) !== captchaNum1 + captchaNum2) {
      newErrors.captcha = `Security Check Failed: What is ${captchaNum1} + ${captchaNum2}?`;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      const result = addInquiry({
        name,
        email,
        phone,
        serviceInterested: service,
        message,
        captchaVerified: true
      });

      setIsSubmitting(false);
      setConfirmationData({
        id: result.id,
        name,
        email,
        service,
        message
      });

      // Clear fields
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setUserCaptcha('');
    }, 600);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008080] mb-2 inline-block">
            Fast Response · High-Visibility Inquiries
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1D20] tracking-tight mb-3">
            Contact BARGAINPOWER & TECHNOLOGY
          </h1>
          <p className="text-sm text-slate-600">
            Submit your hardware inquiry using our concise 4-field smart form. 
            You will receive an immediate automated confirmation and direct engineering follow-up within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & WhatsApp Hotline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4">
                Direct Engineering Channels
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-teal-50/70 border border-teal-200 hover:bg-teal-100 transition-colors group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#008080] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-teal-950 block">Official WhatsApp Desk</span>
                    <span className="text-teal-800 font-mono text-xs">{settings.whatsappNumber}</span>
                    <span className="text-[10px] text-teal-600 block mt-0.5">Instant chat & document sharing</span>
                  </div>
                </a>

                <a
                  href={`mailto:${settings.helpEmail}`}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors group cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Helpdesk & RFP Submissions</span>
                    <span className="text-slate-600 font-mono text-xs">{settings.helpEmail}</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">Schematics & commercial tender inquiries</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Engineering Laboratory</span>
                    <span className="text-slate-600 text-xs">{settings.address}</span>
                  </div>
                </div>
              </div>

              {/* Service guarantee */}
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#008080] shrink-0" />
                <span>All customer data is encrypted and protected against third-party resale.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Smart Inquiry Form (Concise 3-4 fields max + Security Robot Check) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200">
              <div className="mb-6">
                <span className="text-[11px] font-bold text-[#FF007F] uppercase tracking-wider block mb-1">
                  Smart Fast Form
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  Request a Project Quote or Technical Inquiry
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Field 1: Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Engr. Michael Ade"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-lg focus:ring-2 focus:ring-[#008080] focus:bg-white text-slate-900 focus:outline-hidden transition-all ${
                      errors.name ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Field 2: Email & Phone Dual Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address (For Instant Confirmation) *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. name@company.com"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-lg focus:ring-2 focus:ring-[#008080] focus:bg-white text-slate-900 focus:outline-hidden transition-all ${
                        errors.email ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +2348037704936"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-lg focus:ring-2 focus:ring-[#008080] focus:bg-white text-slate-900 focus:outline-hidden transition-all ${
                        errors.phone ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Field 3: Service Selected */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    System of Interest *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:bg-white text-slate-900 focus:outline-hidden transition-all"
                  >
                    <option value="Home Automation System">Home Automation Systems (WiFi / Relays)</option>
                    <option value="Smart Agricultural Irrigation & Snail Farming">Smart Agricultural Irrigation & Snail Farming (Dry Season)</option>
                    <option value="3-Pole Industrial Contactors & Coils">3-Pole Industrial Contactors & Coils</option>
                    <option value="Circuit Breakers & Smart DIN Meters">Circuit Breakers & Smart DIN Meters</option>
                    <option value="Building of Electric Vehicles (BEV Conversion)">Building of Electric Vehicles (Gasoline Conversion)</option>
                    <option value="Building of Custom Electric Bikes">Building of Custom Electric Bikes</option>
                    <option value="Building of Carbon-Fiber Aircraft Models">Building of Carbon-Fiber Aircraft Models (Airport Bird Control)</option>
                    <option value="Undergraduate Project Guidance">Undergraduate Project Guidance (Electrical / Mech / Mechatronics)</option>
                    <option value="Solar Power Customization">Solar Power Customization & LiFePO4 Storage</option>
                  </select>
                </div>

                {/* Field 4: Brief Message Area */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Brief Project Scope / Message *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you want to build (e.g. 5HP pump contactor panel, 50sqm snail misting chamber)..."
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border rounded-lg focus:ring-2 focus:ring-[#008080] focus:bg-white text-slate-900 focus:outline-hidden transition-all ${
                      errors.message ? 'border-red-500' : 'border-slate-300'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Security Robot Verification Check */}
                <div className="p-3 bg-slate-100 rounded-lg border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold text-slate-800">
                      Security Check: What is {captchaNum1} + {captchaNum2}? *
                    </span>
                  </div>
                  <input
                    type="number"
                    required
                    value={userCaptcha}
                    onChange={(e) => setUserCaptcha(e.target.value)}
                    placeholder="Answer"
                    className="w-24 px-2 py-1.5 bg-white border border-slate-300 rounded text-center font-bold text-slate-900 focus:ring-2 focus:ring-[#008080] focus:outline-hidden"
                  />
                </div>
                {errors.captcha && <p className="text-[11px] text-red-500">{errors.captcha}</p>}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#FF007F] to-[#E6006F] hover:from-[#E6006F] hover:to-[#B30056] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting Inquiries...' : 'Send Inquiry & Receive Instant Confirmation'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Immediate Confirmation Modal */}
        {confirmationData && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900 animate-scaleUp">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-extrabold text-center text-slate-900 mb-1">
                Inquiry Received Successfully!
              </h3>
              <p className="text-xs text-center text-slate-500 mb-6">
                Reference ID: <span className="font-mono font-bold text-slate-800">{confirmationData.id}</span>
              </p>

              {/* Simulated Automated Email Response Display */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2 mb-6 text-slate-700">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 font-semibold text-slate-900">
                  <span>Automated Confirmation Dispatch:</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Status: Sent to {confirmationData.email}</span>
                </div>
                <p><strong>Dear {confirmationData.name},</strong></p>
                <p>
                  Thank you for contacting <strong>BARGAINPOWER & TECHNOLOGY</strong> regarding <em>"{confirmationData.service}"</em>. 
                  We have logged your requirements in our engineering queue.
                </p>
                <p className="italic bg-white p-2 rounded border border-slate-200">
                  "{confirmationData.message}"
                </p>
                <p>
                  A lead technical specialist will contact you via WhatsApp/Email shortly with initial drawings or equipment availability.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20BARGAINPOWER,%20I%20just%20submitted%20inquiry%20${confirmationData.id}%20for%20${encodeURIComponent(confirmationData.service)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-lg bg-[#008080] hover:bg-[#006666] text-white text-xs font-bold text-center transition-colors"
                >
                  Expedite on WhatsApp Now
                </a>
                <button
                  onClick={() => setConfirmationData(null)}
                  className="py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
