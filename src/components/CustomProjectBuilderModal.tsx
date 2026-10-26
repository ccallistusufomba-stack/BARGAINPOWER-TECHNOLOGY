import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X, Wrench, CheckCircle2, Zap, DollarSign, Calculator, Send } from 'lucide-react';
import { validateEmail, validatePhone } from '../utils/sanitize';

export const CustomProjectBuilderModal: React.FC = () => {
  const { isQuoteModalOpen, closeQuoteModal, quoteModalService, addInquiry, settings } = useApp();

  const [projectCategory, setProjectCategory] = useState('Home Automation System');
  const [controllerChoice, setControllerChoice] = useState('ESP32 Dual-Core (Wi-Fi/BLE)');
  const [powerSwitching, setPowerSwitching] = useState('3-Pole 40A AC Magnetic Contactor Panel');
  const [sensorOptions, setSensorOptions] = useState<string[]>(['Temperature & Humidity (DHT22)']);
  const [scaleSize, setScaleSize] = useState<'Standard' | 'Medium Commercial' | 'Heavy Industrial'>('Standard');
  
  // Contact details
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [customNotes, setCustomNotes] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (quoteModalService) {
      setProjectCategory(quoteModalService);
    }
  }, [quoteModalService]);

  if (!isQuoteModalOpen) return null;

  // Dynamic cost estimation calculation
  const calculateEstimatedRange = () => {
    let baseMin = 150000; // in Naira (approx $200)
    let baseMax = 250000;

    if (projectCategory.includes('Electric Vehicle')) {
      baseMin = 1200000;
      baseMax = 2400000;
    } else if (projectCategory.includes('Electric Bike')) {
      baseMin = 280000;
      baseMax = 480000;
    } else if (projectCategory.includes('Aircraft')) {
      baseMin = 350000;
      baseMax = 750000;
    } else if (projectCategory.includes('Irrigation') || projectCategory.includes('Snail')) {
      baseMin = 220000;
      baseMax = 380000;
    } else if (projectCategory.includes('Undergraduate')) {
      baseMin = 65000;
      baseMax = 140000;
    }

    if (scaleSize === 'Medium Commercial') {
      baseMin = Math.round(baseMin * 1.6);
      baseMax = Math.round(baseMax * 1.7);
    } else if (scaleSize === 'Heavy Industrial') {
      baseMin = Math.round(baseMin * 2.8);
      baseMax = Math.round(baseMax * 3.2);
    }

    baseMin += sensorOptions.length * 15000;
    baseMax += sensorOptions.length * 28000;

    return {
      naira: `₦${baseMin.toLocaleString()} – ₦${baseMax.toLocaleString()}`,
      usd: `$${Math.round(baseMin / 750).toLocaleString()} – $${Math.round(baseMax / 750).toLocaleString()}`
    };
  };

  const handleToggleSensor = (sensor: string) => {
    setSensorOptions(prev => 
      prev.includes(sensor) ? prev.filter(s => s !== sensor) : [...prev, sensor]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!validateEmail(clientEmail)) {
      setErrorMsg('Please enter a valid email');
      return;
    }
    if (!validatePhone(clientPhone)) {
      setErrorMsg('Please enter a valid phone / WhatsApp number');
      return;
    }

    setErrorMsg('');
    const estimate = calculateEstimatedRange();

    const fullSummary = `[Custom Project Builder Request]\nCategory: ${projectCategory}\nScale: ${scaleSize}\nController: ${controllerChoice}\nPower Switching: ${powerSwitching}\nSensors Selected: ${sensorOptions.join(', ') || 'None'}\nEstimated Scope Budget: ${estimate.naira} (${estimate.usd})\nClient Notes: ${customNotes || 'N/A'}`;

    addInquiry({
      name: clientName,
      email: clientEmail,
      phone: clientPhone,
      serviceInterested: projectCategory,
      projectBudget: estimate.naira,
      message: fullSummary,
      captchaVerified: true
    });

    setSubmitted(true);
  };

  const estimate = calculateEstimatedRange();

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto my-auto p-6 sm:p-8 shadow-2xl border border-slate-300 text-slate-900 relative">
        
        {/* Close Button */}
        <button
          onClick={closeQuoteModal}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 text-center animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">
              Project Specification Submitted!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 max-w-md mx-auto">
              Our engineering team has received your custom configuration ({projectCategory}). 
              We will review hardware availability and prepare an itemized bill of materials (BOM).
            </p>
            <div className="p-3 bg-slate-50 rounded-lg text-xs font-mono mb-6 max-w-sm mx-auto text-slate-700">
              Estimated Baseline: {estimate.naira}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20BARGAINPOWER,%20I%20just%20configured%20a%20project:%20${encodeURIComponent(projectCategory)}%20with%20controller%20${encodeURIComponent(controllerChoice)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-[#008080] hover:bg-[#006666] text-white text-xs font-bold transition-all text-center"
              >
                Send Config to WhatsApp Desk
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  closeQuoteModal();
                }}
                className="px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2 text-[#008080]">
              <Wrench className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Dynamic Cost Estimator</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-1">
              Build Your Project Specification
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Configure your desired hardware, sensors, and power stages to calculate an instant estimated budget range.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Category */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">1. Project Category / System *</label>
                <select
                  value={projectCategory}
                  onChange={(e) => setProjectCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-[#008080] focus:outline-hidden"
                >
                  <option value="Home Automation System">Home Automation Systems (Multi-Channel Smart Relays)</option>
                  <option value="Smart Agricultural Irrigation & Snail Farming">Smart Agricultural Irrigation & Snail Farming (Dry Season Misting)</option>
                  <option value="3-Pole Heavy Contactor & Breaker Panel">3-Pole Heavy Contactor & Breaker Control Panel</option>
                  <option value="Building of Electric Vehicles (BEV Conversion)">Building of Electric Vehicles (BEV Conversion)</option>
                  <option value="Building of Custom Electric Bikes">Building of Custom Electric Bikes</option>
                  <option value="Building of Carbon-Fiber Aircraft Models">Building of Carbon-Fiber Aircraft Models</option>
                  <option value="Undergraduate Project Guidance">Undergraduate Project Guidance & Laboratory Build</option>
                  <option value="Solar Power Customization">Solar Power Customization & LiFePO4 Battery Bank</option>
                </select>
              </div>

              {/* Scale & Scope */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">2. Scale of Implementation *</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Standard', 'Medium Commercial', 'Heavy Industrial'] as const).map(scale => (
                    <button
                      type="button"
                      key={scale}
                      onClick={() => setScaleSize(scale)}
                      className={`py-2 px-3 rounded-lg border text-center font-semibold cursor-pointer transition-all ${
                        scaleSize === scale 
                          ? 'border-[#008080] bg-teal-50 text-[#008080]' 
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {scale}
                    </button>
                  ))}
                </div>
              </div>

              {/* Controller Choice */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">3. Microcontroller Architecture</label>
                  <select
                    value={controllerChoice}
                    onChange={(e) => setControllerChoice(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-[#008080] focus:outline-hidden"
                  >
                    <option value="ESP32 Dual-Core (Wi-Fi/BLE)">ESP32 Dual-Core (Wi-Fi/BLE Native)</option>
                    <option value="Arduino Uno R3 (ATmega328P)">Arduino Uno R3 (Hardwired)</option>
                    <option value="Arduino Nano V3 (Compact Embedded)">Arduino Nano V3 (Compact Embedded)</option>
                    <option value="STM32 ARM Cortex-M3 (High Speed)">STM32 ARM Cortex-M3 (High Speed)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">4. Power Switching Stage</label>
                  <select
                    value={powerSwitching}
                    onChange={(e) => setPowerSwitching(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-[#008080] focus:outline-hidden"
                  >
                    <option value="3-Pole 40A AC Magnetic Contactor Panel">3-Pole 40A AC Magnetic Contactor Panel</option>
                    <option value="16-Channel WiFi Optocoupled Relay Board">16-Channel WiFi Optocoupled Relay Board</option>
                    <option value="High-Voltage DC 500V Contactor (EV/Solar)">High-Voltage DC 500V Contactor (EV/Solar)</option>
                    <option value="Smart WiFi Energy-Metering DIN Breaker">Smart WiFi Energy-Metering DIN Breaker</option>
                  </select>
                </div>
              </div>

              {/* Sensors Checkboxes */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">5. Add-On Sensor Modules (Select all applicable)</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Temperature & Humidity (DHT22)',
                    'Capacitive Soil Moisture v1.2',
                    'Smoke / Gas Safety (MQ-2)',
                    'Microwave Radar (RCWL-0516)',
                    'Hall Current Sensor (ACS712)',
                    'Submersible Temp Probe (DS18B20)'
                  ].map((sensor) => {
                    const isChecked = sensorOptions.includes(sensor);
                    return (
                      <button
                        type="button"
                        key={sensor}
                        onClick={() => handleToggleSensor(sensor)}
                        className={`p-2 rounded border text-left flex items-center gap-1.5 cursor-pointer transition-all ${
                          isChecked 
                            ? 'border-[#008080] bg-teal-50 text-[#006666] font-semibold' 
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center text-[10px] ${
                          isChecked ? 'bg-[#008080] text-white border-[#008080]' : 'border-slate-400'
                        }`}>
                          {isChecked ? '✓' : ''}
                        </span>
                        <span className="truncate">{sensor}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Live Estimated Price Banner */}
              <div className="p-3.5 rounded-xl bg-teal-900 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 block">
                    Estimated Baseline Turnkey Budget
                  </span>
                  <div className="text-base sm:text-lg font-black font-mono">
                    {estimate.naira} <span className="text-xs font-normal text-teal-200">({estimate.usd})</span>
                  </div>
                </div>
                <div className="text-right text-[10px] text-teal-200">
                  <span>Includes Bench Testing & 12-Mo Warranty</span>
                </div>
              </div>

              {/* Client Information Fields */}
              <div className="pt-2 border-t border-slate-200 space-y-3">
                <span className="font-bold text-slate-800 block text-xs">6. Your Contact Coordinates</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-[#008080] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Your Email *"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-[#008080] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp *"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-[#008080] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Specific engineering requirements, floor area, or deadline details..."
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-[#008080] focus:outline-hidden"
                  ></textarea>
                </div>
              </div>

              {errorMsg && (
                <p className="text-xs text-red-500 font-semibold">{errorMsg}</p>
              )}

              {/* Form Action */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeQuoteModal}
                  className="px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#FF007F] to-[#E6006F] hover:from-[#E6006F] hover:to-[#B30056] text-white font-bold shadow-md cursor-pointer flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Specification to Lab</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
