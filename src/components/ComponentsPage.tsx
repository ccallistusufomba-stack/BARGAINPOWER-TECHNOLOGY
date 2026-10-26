import React from 'react';
import { useApp } from '../context/AppContext';
import { ComponentCategoryBar } from './ComponentCategoryBar';
import { 
  Layers, 
  Cpu, 
  Radio, 
  Zap, 
  Sliders, 
  Shield, 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  ArrowUpRight,
  HardDrive,
  Camera
} from 'lucide-react';
import { BuyButton } from './BuyButton';
import { formatNaira } from '../utils/pricing';

export const ComponentsPage: React.FC = () => {
  const { 
    setActiveTab, 
    kinconyData, 
    cctvData,
    sensorsData, 
    microcontrollersData, 
    contactorsData, 
    breakersData, 
    motorsData, 
    securityData 
  } = useApp();

  const componentCategories = [
    {
      id: 'cctv',
      name: 'Smart CCTV, 4K NVR, Hybrid DVR & PoE Surveillance',
      badge: 'CloudSecurity NG Products',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-300',
      description: 'Enterprise & residential surveillance hardware sourced from CloudSecurity NG. 4K Ultra-HD AI bullet cameras, IK10 vandal-proof domes, 30x optical PTZ speed domes, 16CH/32CH 4K NVRs, 5-in-1 hybrid XVR/DVRs, and turnkey plug-and-play PoE kits.',
      image: '/src/assets/images/cctv_poe_bullet_camera_1792362677536.jpg',
      icon: <Camera className="w-6 h-6 text-emerald-600" />,
      count: `${cctvData.length} CCTV Systems`,
      highlights: [
        'AI Human & Vehicle Smart Motion Detection (SMD 4.0)',
        '4K Ultra-HD 8MP Resolution with Starlight Color Night Vision',
        '16CH & 32CH 4K H.265+ NVRs with Up to 4x SATA 16TB Support',
        'Turnkey 4CH & 8CH PoE Plug-and-Play Surveillance Kits',
        'ANPR License Plate Recognition & Solar 4G Cellular PTZ'
      ],
      actionTab: 'cctv' as const,
      buttonText: 'Explore Smart CCTV, NVR & DVR',
      isFeatured: true
    },
    {
      id: 'kincony',
      name: 'KinCony Smart IoT & Relay Controllers',
      badge: '90 Official Devices',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'Official ESP32-S3, ESP32, and Raspberry Pi CM4 DIN rail automation controllers downloaded directly from the KinCony Product Selector. Includes relay, MOSFET, energy metering, and analog expansion modules with native Home Assistant, ESPHome, and Tasmota support.',
      image: '/src/assets/images/esp32_relay_24ch_1791552285027.jpg',
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      count: `${kinconyData.length} Devices`,
      highlights: [
        'Relay Controllers: 2 to 128 Channels (7A / 10A / 16A Removable)',
        'MOSFET Controllers: High-speed PWM Dimming & DC Motor Control',
        'Processors: ESP32-S3 Dual-Core 240MHz & Raspberry Pi CM4',
        'Protocols: Ethernet RJ45, RS485 Modbus, WiFi, BLE, LoRa, 4G GSM',
        'Official Selector: https://mq.kincony.com/qq/product/product-selector'
      ],
      actionTab: 'kincony' as const,
      buttonText: 'Browse All 90 KinCony Devices',
      isFeatured: true
    },
    {
      id: 'sensors',
      name: 'Sensors for Smart Home & Industrial IoT',
      badge: 'Precision Sensing',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'Industrial sensors engineered for Arduino and ESP32 automation systems. Non-corroding capacitive soil moisture probes, microwave Doppler radar, BME680 atmospheric sensors, and ACS712 Hall current transducers.',
      image: '/src/assets/images/esp32_iot_controller_relay_1791552230446.jpg',
      icon: <Radio className="w-6 h-6 text-emerald-600" />,
      count: `${sensorsData.length} Sensors`,
      highlights: [
        'Environmental: BME680, DHT22, DS18B20 Stainless Probe',
        'Surveillance: RCWL-0516 Doppler Radar & PIR Motion',
        'Electrical: ACS712 High-Voltage Hall Effect Isolation',
        'Agricultural: Corrosion-Resistant Capacitive Soil Moisture'
      ],
      actionTab: 'sensors' as const,
      buttonText: 'Explore Sensors'
    },
    {
      id: 'microcontrollers',
      name: 'Micro Controllers & Development Boards',
      badge: 'Core Processing',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      description: 'High-performance microcontrollers including ESP32 dual-core 240MHz Wi-Fi/BLE SoCs, Arduino Uno R3, Arduino Nano, and industrial edge computing microchips.',
      image: '/src/assets/images/esp32_relay_24ch_1791552285027.jpg',
      icon: <Activity className="w-6 h-6 text-indigo-600" />,
      count: `${microcontrollersData.length} Controllers`,
      highlights: [
        'ESP32 Dual-Core LX6 / LX7 @ 240 MHz with Wi-Fi & Bluetooth',
        'Arduino Uno R3 with ATmega328P 16MHz Clock',
        'Arduino Nano for Compact DIN Enclosure Embedding',
        'Comprehensive Pinout Guides & Automation Roles'
      ],
      actionTab: 'microcontrollers' as const,
      buttonText: 'Explore Microcontrollers'
    },
    {
      id: 'contactors',
      name: 'Heavy Industrial Contactors (AC/DC)',
      badge: 'Power Switching',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      description: '3-Pole AC and DC heavy-duty magnetic contactors for inductive motor starters, ATS automatic changeover switches, and high-current industrial load switching.',
      image: '/src/assets/images/contactor_3pole_modular_1791552272813.jpg',
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      count: `${contactorsData.length} Contactors`,
      highlights: [
        '18A to 65A Heavy-Duty Inductive AC Motor Starters',
        'Mechanical & Electrical Interlocks for Changeover Panels',
        'Back-EMF Arc Suppression & RC Snubber Compatibility',
        'Interactive SVG Wiring Diagrams for 3-Phase & Single-Phase'
      ],
      actionTab: 'contactors' as const,
      buttonText: 'Explore Contactors'
    },
    {
      id: 'breakers',
      name: 'Circuit Breakers & Smart Energy DIN Modules',
      badge: 'Panel Protection',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      description: '1P, 2P, 3P, and 4P Miniature Circuit Breakers (MCB), Molded Case Circuit Breakers (MCCB), and Smart WiFi Energy Monitoring DIN Rail Breakers.',
      image: '/src/assets/images/breaker_2pole_1791552258989.jpg',
      icon: <Sliders className="w-6 h-6 text-rose-600" />,
      count: `${breakersData.length} Breakers`,
      highlights: [
        'B, C, and D Curve Thermal-Magnetic Trip Characteristics',
        '6kA to 10kA High Breaking Capacity for Fault Current',
        'Smart Tuya/WiFi DIN Breakers with kWh Power Metering',
        'Bi-directional Overcurrent & Earth Leakage Protection'
      ],
      actionTab: 'breakers' as const,
      buttonText: 'Explore Breakers'
    },
    {
      id: 'servo',
      name: 'Servo, Stepper & High-Torque BLDC Motors',
      badge: 'Motion Control',
      badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      description: 'Precision metal gear servos, high-torque NEMA 17/23 stepper motors, brushless electronic speed controllers (ESC), and 72V 3000W BLDC electric mobility hub motors.',
      image: '/src/assets/images/carbon_aircraft_drone_1791552230446.jpg',
      icon: <Zap className="w-6 h-6 text-cyan-600" />,
      count: `${motorsData.length} Actuators`,
      highlights: [
        'MG996R Metal Gear 13kg/cm High-Torque Servos',
        'NEMA 17/23 Steppers for Precision Agricultural Feeders',
        '72V BLDC Hub Motors for Electric Mobility & Custom Bikes',
        'High-Amperage ESC & Microstepping Driver Boards'
      ],
      actionTab: 'servo' as const,
      buttonText: 'Explore Servo & Motors'
    },
    {
      id: 'security',
      name: 'Security & Automatic Fire Safety Systems',
      badge: 'Safety Compliance',
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
      description: 'Automatic 68°C thermal red-bulb dry powder fire extinguishers for electrical control panels, enclosure gas detection, and high-voltage emergency isolation.',
      image: '/src/assets/images/fire_extinguisher_auto_1791552230446.jpg',
      icon: <Shield className="w-6 h-6 text-red-600" />,
      count: `${securityData.length} Safety Systems`,
      highlights: [
        'Automatic 68°C Heat-Activated Dry Chemical ABC Powder Bulbs',
        'Non-Conductive Extinguishment Safe for Energized Panels',
        'MQ-2 Flammable Gas & Smoke Early Warning Interlocks',
        'Rapid Shunt-Trip Main Power Disconnect Relays'
      ],
      actionTab: 'security' as const,
      buttonText: 'Explore Security & Safety'
    }
  ];

  // Top KinCony preview items
  const featuredKincony = kinconyData.slice(0, 4);

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16 animate-fadeIn">
      {/* Top Component Category Switcher Bar */}
      <ComponentCategoryBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* HEADER HERO BANNER                                                        */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-2xl shadow-xs border border-slate-300 p-6 sm:p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#89618E]/10 text-[#89618E] border border-[#89618E]/30 mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>COMPLETE HARDWARE &amp; AUTOMATION COMPONENTS ECOSYSTEM</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Components Directory &amp; Device Ecosystem
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Explore our engineering component lines engineered for high-reliability residential, agricultural, and industrial infrastructure. 
                Now featuring the <strong>complete KinCony smart controllers catalog</strong> downloaded directly from the official KinCony Product Selector.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveTab('kincony')}
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Cpu className="w-4 h-4" />
                <span>Open KinCony Selector (90)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FEATURED: KINCONY SPOTLIGHT BANNER                                        */}
        {/* ========================================================================= */}
        <div className="bg-linear-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 mb-10 shadow-lg border border-blue-500/30 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                <span>NEWLY ADDED TO COMPONENTS: KINCONY OFFICIAL SELECTION</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight mb-2">
                KinCony Smart IoT, Relay &amp; MOSFET Controllers
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                All <strong>90 KinCony devices</strong> have been integrated into the Components tab from the official 
                KinCony Product Selector (<code className="text-blue-300 bg-blue-900/50 px-1 py-0.5 rounded font-mono text-[11px]">https://mq.kincony.com/qq/product/product-selector</code>). 
                Each unit includes full technical specifications, hardware and firmware features, and practical real-world applications.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveTab('kincony')}
                className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>View All 90 KinCony Devices</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://mq.kincony.com/qq/product/product-selector"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 border border-white/20"
              >
                <span>Official Selector</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 4 Preview Cards from KinCony */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/10">
            {featuredKincony.map((item) => (
              <div 
                key={item.id}
                onClick={() => setActiveTab('kincony')}
                className="bg-white/10 hover:bg-white/15 rounded-xl p-3 border border-white/10 backdrop-blur-xs cursor-pointer transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-slate-800 overflow-hidden shrink-0 border border-white/10">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="min-w-0">
                    <span className="px-1.5 py-0.2 rounded bg-blue-500 text-white font-mono text-[10px] font-bold">
                      {item.model}
                    </span>
                    <h4 className="text-xs font-bold text-white truncate mt-1">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-slate-300 font-mono truncate">
                      {item.specs.digitalOutputs || item.specs.digitalInputs || item.cpu}
                    </p>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-blue-300">
                  <span>{item.category}</span>
                  <span className="flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                    View Specs <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COMPONENT CATEGORIES DIRECTORY GRID (WELL ARRANGED PATTERN)               */}
        {/* ========================================================================= */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Hardware Component Lines
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Select any component category below to explore technical pinouts, diagrams, features, and specs.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-slate-500 px-3 py-1 bg-white rounded-lg border border-slate-200">
            {componentCategories.length} Categories
          </span>
        </div>

        <div className="space-y-8">
          {componentCategories.map((cat, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={cat.id}
                className={`bg-white rounded-3xl border border-slate-300 hover:border-slate-400 shadow-xs hover:shadow-lg transition-all p-6 sm:p-8 flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-stretch gap-6 sm:gap-8 ${
                  cat.isFeatured ? 'ring-2 ring-emerald-500/20' : ''
                }`}
              >
                {/* Medium Picture Container: Plain and Clear to View */}
                <div className="w-full md:w-80 lg:w-96 shrink-0 flex flex-col justify-center">
                  <div className="w-full h-56 sm:h-64 rounded-2xl bg-white border-2 border-slate-200 overflow-hidden p-3 shadow-inner flex items-center justify-center relative group">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 text-white text-[10px] font-mono font-bold backdrop-blur-xs flex items-center gap-1.5 shadow-xs">
                      {cat.icon}
                      <span>{cat.count}</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-center text-slate-400 font-mono mt-2 block">
                    Biock Verified Hardware Component
                  </span>
                </div>

                {/* Text & Specs on Right (Alternating) */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${cat.badgeColor}`}>
                        {cat.badge}
                      </span>
                      <span className="text-xs text-slate-500 font-mono font-bold">
                        {cat.count}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-2">
                      {cat.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                      <span className="text-[11px] uppercase font-black tracking-wider text-slate-500 font-mono block">
                        Engineering Highlights &amp; Hardware Attributes:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {cat.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-1.5 text-xs leading-tight">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <span className="text-xs font-mono text-slate-500 font-bold hidden sm:inline-block">
                      Technical Pinouts &amp; Applications Available
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveTab(cat.actionTab)}
                      className="px-6 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md bg-[#248C54] hover:bg-[#1E7747] text-white ml-auto"
                    >
                      <span>{cat.buttonText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
