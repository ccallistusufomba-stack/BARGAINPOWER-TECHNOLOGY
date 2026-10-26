import { 
  SensorItem, 
  MicrocontrollerItem, 
  ContactorItem, 
  BreakerItem, 
  SecurityItem,
  MotorItem, 
  ServiceDetail, 
  UndergraduateEngineeringGuide, 
  FaqItem, 
  ReviewItem, 
  SiteSettings,
  HeroSlide,
  HomeSectionItem,
  VideoClipItem
} from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: '16-Channel WiFi Relay Module',
    subtitle: 'Industrial Grade Multi-Channel Automation Controller',
    badge: 'Hardware Flagship',
    description: 'Optocoupler isolated relays capable of 10A 250VAC switching with ESP32/ESP8266 or Tuya firmware integration for heavy smart home loads.',
    image: '/src/assets/images/relay_16ch_wifi_1790998673524.webp',
    actionText: 'Explore Relay Specs'
  },
  {
    id: 2,
    title: 'Tuya WiFi 12-Channel Control Board',
    subtitle: 'Cloud & Local MQTT Smart Automation',
    badge: 'Smart Living',
    description: 'Multi-gang smart switching with timer scheduling, scene interlocking, and mobile app voice synchronization via Google Assistant and Alexa.',
    image: '/src/assets/images/smart_switches_tuya_1790998685408.webp',
    actionText: 'View Smart Switches'
  },
  {
    id: 3,
    title: 'Smart Touch Wall Switches',
    subtitle: 'Capacitive Glass Panels & Ambient Lighting',
    badge: 'Interior Tech',
    description: 'Ultra-responsive touch tempered glass panels with dual-way neutral/no-neutral wiring and status illumination for architectural spaces.',
    image: '/src/assets/images/smart_switches_tuya_1790998685408.webp',
    actionText: 'See Automation Systems'
  },
  {
    id: 4,
    title: '3-Pole Industrial Circuit Breakers',
    subtitle: 'Certified Overload & Short-Circuit Protection',
    badge: 'Power Distribution',
    description: '10kA high-breaking capacity 3P DIN-rail miniature circuit breakers designed for three-phase balanced industrial and residential distribution.',
    image: '/src/assets/images/breakers_3pole_industrial_1790998696308.webp',
    actionText: 'Inspect Breaker Specs'
  },
  {
    id: 5,
    title: '3-Pole AC/DC Heavy-Duty Contactors',
    subtitle: 'High Amperage Induction Motor & Pump Switching',
    badge: 'Industrial Automation',
    description: 'Robust 220V/380V AC coils and high-voltage DC contactors featuring silver alloy contacts and auxiliary feedback signals for automated control.',
    image: '/src/assets/images/contactors_3pole_ac_dc_1790998707179.webp',
    actionText: 'Study Wiring Diagrams'
  },
  {
    id: 6,
    title: 'Custom High-Performance Electric Bikes',
    subtitle: 'Precision Engineered Urban & Off-Road Mobility',
    badge: 'Electric Mobility',
    description: 'Custom lithium-ion battery integration, high-torque brushless hub/mid-drive motors, regenerative braking, and digital telemetry cockpits.',
    image: '/src/assets/images/electric_bike_custom_1790998717436.webp',
    actionText: 'See E-Bike Models'
  },
  {
    id: 7,
    title: 'Electric Vehicle Conversions & Prototypes',
    subtitle: 'Gasoline-to-Electric Drivetrain Engineering',
    badge: 'Clean Energy Vehicles',
    description: 'Complete powertrain overhaul: DC-DC converters, high-voltage battery enclosures, smart battery management systems (BMS), and torque inverters.',
    image: '/src/assets/images/electric_vehicle_conversion_1790998727320.webp',
    actionText: 'Build Your EV Project'
  },
  {
    id: 8,
    title: 'Automatic Electrical Fire Extinguishers',
    subtitle: 'Autonomous Thermal & Flame Panel Suppression',
    badge: 'Panel Safety Flagship',
    description: 'Dual-action 68°C thermal bulb canister and 360° omnidirectional fire ball designed for electrical DB boards, solar inverter cabinets, and lithium battery rooms. Suppresses fires in under 3 seconds with non-conductive clean agents.',
    image: '/src/assets/images/fire_extinguisher_auto_1791552230446.jpg',
    actionText: 'Inspect Fire Extinguisher Specs'
  }
];

export const DEFAULT_HOME_SECTIONS: HomeSectionItem[] = [
  {
    id: 'home-relays',
    badge: 'SMART LIVING & ENERGY AUTOMATION',
    question: 'What is Multi-Channel WiFi Relay Automation?',
    leadParagraph: 'A multi-channel smart relay system is an industrial-grade controller engineered to provide wireless (WiFi/BLE) and automated management of high-draw domestic and industrial appliances. Operating with optocoupler-isolated relays capable of 10A 250VAC per channel, it serves as the intelligent brain of modern smart architectural spaces.',
    bodyParagraph: 'Unlike delicate consumer smart plugs that fail under continuous loads, our 16-channel and 12-channel Tuya/ESP32 boards integrate local server redundancy. Even if the internet goes offline, internal timers and scene interlocks continue triggering borehole pumps, perimeter lighting, security gates, and air conditioning compressors without interruption.',
    highlights: [
      'Optocoupler isolated switching with zero electrical crosstalk',
      'Direct smartphone app control with automated timer scheduling',
      'Local server redundancy: operates fully during internet downtime',
      'Voice synchronization via Google Home & Amazon Alexa engines'
    ],
    image: '/src/assets/images/relay_16ch_wifi_1790998673524.webp',
    primaryActionText: 'Explore Home Automation',
    primaryActionTarget: 'services',
    secondaryActionText: 'Configure Custom Relay Board'
  },
  {
    id: 'home-contactors',
    badge: 'INDUSTRIAL APPLIANCE & MOTOR PROTECTION',
    question: 'What are 3-Pole Heavy-Duty Magnetic Contactors & Breakers?',
    leadParagraph: 'Magnetic contactors are heavy-duty electromechanical switches designed to safely handle the massive inductive inrush currents generated by electric motors, deep-well pumps, industrial air chillers, and automated transfer switches (ATS). They isolate sensitive microcontrollers from high-voltage arcs.',
    bodyParagraph: 'When an inductive load powers on, it draws up to 7x its continuous operating current, creating intense back-EMF sparks that instantly melt standard smart switches. By pairing our 40A and 63A 3-pole AC/DC magnetic contactors with 10kA miniature circuit breakers, we provide foolproof arc suppression, physical phase separation, and fail-safe overcurrent interruption.',
    highlights: [
      'High-breaking capacity: clears 10,000A short-circuit surges in <10ms',
      'Silver alloy contacts with specialized arc-extinguishing chambers',
      'A1/A2 low-voltage coil control interlocked with smart microcontrollers',
      'Certified DIN-rail enclosure setups for single and 3-phase systems'
    ],
    image: '/src/assets/images/contactors_3pole_ac_dc_1790998707179.webp',
    primaryActionText: 'View Contactor Diagrams',
    primaryActionTarget: 'contactors',
    secondaryActionText: 'Inquire on Contactor Panels'
  },
  {
    id: 'home-agritech',
    badge: 'AGRITECH & CLIMATE CONTROL',
    question: 'What is Dry-Season Snail Farming & AgriTech Automation?',
    leadParagraph: 'Automated dry-season snail farming is an IoT-driven microclimate system that prevents tropical land snails (Achatina achatina / Archachatina marginata) from entering catastrophic aestivation. During dry seasons, uncontrolled heat and dry soil traditionally cause over 70% mortality across commercial snail farms.',
    bodyParagraph: 'BARGAINPOWER & TECHNOLOGY engineered an automated environmental chamber using corrosion-resistant capacitive soil moisture probes, DHT22 sensors, and high-pressure atomizing misting nozzles. The system maintains a continuous 24°C–27°C and 80%–85% humidity year-round, allowing farmers to rear, breed, and triple harvest yields even in severe dry seasons.',
    highlights: [
      'Perpetual cool microclimate: prevents dormancy and triples snail meat harvest',
      'Capacitive non-corroding soil sensors triggered at optimal root depths',
      'Automated solar borehole pump cycling with reservoir level alarms',
      'Instant SMS and WhatsApp alert notifications during low water pressure'
    ],
    image: '/src/assets/images/smart_switches_tuya_1790998685408.webp',
    primaryActionText: 'Inspect AgriTech System',
    primaryActionTarget: 'services',
    secondaryActionText: 'Request Farm Consultation'
  },
  {
    id: 'home-ev',
    badge: 'CLEAN AUTOMOTIVE MOBILITY',
    question: 'What are Electric Vehicle Conversions & Ground-Up Builds?',
    leadParagraph: 'Electric vehicle conversion is the complete mechanical overhaul of conventional internal combustion engine (gasoline/diesel) automobiles into high-torque, whisper-quiet Battery Electric Vehicles (BEVs). It repurposes a sound vehicular chassis while permanently eliminating fossil fuel expenditures.',
    bodyParagraph: 'We perform complete engine extractions, custom CNC transmission adapter plate fabrication, high-voltage brushless DC (BLDC) motor installations, and liquid-cooled battery enclosure integration. Featuring active battery management systems (BMS), regenerative braking, and on-board AC smart charging, our conversions offer instant torque from zero RPM.',
    highlights: [
      'Complete elimination of fuel costs, oil filters, and tailpipe emissions',
      'Modular high-discharge Lithium Iron Phosphate (LiFePO4) battery packs',
      'Active BMS telemetry: real-time voltage, cell balance, and thermal logging',
      'Pyrofuse and high-voltage DC contactor cut-offs for safety standards'
    ],
    image: '/src/assets/images/electric_vehicle_conversion_1790998727320.webp',
    primaryActionText: 'Explore EV Conversions',
    primaryActionTarget: 'services',
    secondaryActionText: 'Build Your EV Project'
  },
  {
    id: 'home-ebike',
    badge: 'CLEAN URBAN COMMUTING',
    question: 'What are Custom High-Torque Electric Bikes & Commuters?',
    leadParagraph: 'Custom electric bicycles are handcrafted high-performance personal mobility vehicles engineered with aircraft-grade aluminum/steel frames, high-torque brushless hub motors (500W to 3000W), and removable high-capacity lithium battery packs built with genuine Samsung 21700 cells.',
    bodyParagraph: 'Capable of reaching ranges up to 80 km on a single charge and top speeds exceeding 60 km/h, our custom e-bikes are built to conquer rugged road conditions and steep inclines. Integrated digital cockpits, pedal-assist torque sensors, dual hydraulic disc brakes, and key-locked removable batteries make them optimal for daily urban transit and heavy cargo delivery.',
    highlights: [
      'Reinforced heavy-duty frame designed for rough road endurance',
      'Removable key-locked battery: charge safely inside home or office',
      'Dual hydraulic disc brakes with instant electronic motor kill-switch',
      'Digital handlebar telemetry LCD displaying speed, volts, and trip range'
    ],
    image: '/src/assets/images/electric_bike_custom_1790998717436.webp',
    primaryActionText: 'See E-Bike Models',
    primaryActionTarget: 'services',
    secondaryActionText: 'Order Custom Built E-Bike'
  },
  {
    id: 'home-aerospace',
    badge: 'AEROSPACE & AIRPORT BIRD SAFETY',
    question: 'What are Carbon-Fiber Aircraft Models & Drone Prototypes?',
    leadParagraph: 'Carbon-fiber aircraft prototypes are rigid, ultra-lightweight aerodynamic UAVs and scale aircraft models engineered for aerodrome bird hazard dispersal, agricultural multispectral scanning, and flight-test aeronautical research.',
    bodyParagraph: 'Constructed from aerospace vacuum-infused carbon fiber layups and composite balsa spars, these aircraft integrate digital fly-by-wire servos, high-efficiency brushless outrunner motors, and autonomous GPS autopilot flight controllers (Pixhawk / ArduPilot). Designed with acoustic deterrents and predatory hawk profiles, they safeguard airport runways from bird strikes.',
    highlights: [
      'Aerospace vacuum-infused carbon fiber: superior strength-to-weight ratio',
      'Predatory raptor flight profiles for humane aerodrome bird dispersion',
      'Autonomous GPS waypoint mission navigation with fail-safe return-to-home',
      'Long-range digital telemetry links up to 25 km with encrypted radio links'
    ],
    image: '/src/assets/images/electric_aircraft_model_1790998739880.webp',
    primaryActionText: 'View Aircraft Specs',
    primaryActionTarget: 'services',
    secondaryActionText: 'Consult Drone Engineers'
  },
  {
    id: 'home-breakers',
    badge: 'POWER DISTRIBUTION & SYSTEM PROTECTION',
    question: 'What are Industrial Circuit Breakers & Smart Power Protection Systems?',
    leadParagraph: 'Industrial circuit breakers are mission-critical protective devices designed to automatically interrupt dangerous electrical fault currents, thermal overloads, and short circuits, protecting valuable automated appliances and structural wiring from catastrophic fire damage.',
    bodyParagraph: 'We deploy certified miniature circuit breakers (MCB), molded case circuit breakers (MCCB), and smart WiFi energy metering breakers. Featuring thermal-magnetic trip curves and calibrated bimetallic strips, they trip within milliseconds during locked rotor stalls, while smart WiFi units stream real-time kilowatt-hour power analytics directly to your mobile phone.',
    highlights: [
      'Certified C-Curve & D-Curve trip profiles for high inrush inductive motors',
      'Integrated real-time kWh energy consumption and voltage metering',
      'Single-pole, 2-pole, 3-pole, and 4-pole DIN rail configurations',
      'Essential physical barrier safeguarding microcontrollers and contactors'
    ],
    image: '/src/assets/images/breakers_3pole_industrial_1790998696308.webp',
    primaryActionText: 'Inspect Breaker Specs',
    primaryActionTarget: 'breakers',
    secondaryActionText: 'Request Electrical Audit'
  },
  {
    id: 'home-security-fire',
    badge: 'PANEL SECURITY & AUTOMATED LIFE SAFETY',
    question: 'What are Automatic Fire Extinguishers & Panel Suppression Systems?',
    leadParagraph: 'An automatic electrical panel fire extinguisher is an autonomous thermal safety device engineered to sit directly inside or above electrical breaker boxes, solar inverter enclosures, and lithium battery cabinets to eliminate electrical fires in under 3 seconds.',
    bodyParagraph: 'Electrical fires originate inside sealed metal distribution enclosures from arcing contactors, loose terminal lugs, or lithium thermal runaway. Because external building sprinklers cannot penetrate closed metal panels, this system activates autonomously at 68°C using a thermo-sensitive glass bulb and an omnidirectional fire suppression ball, deluging the fault zone with non-conductive, residue-free clean agents.',
    highlights: [
      'Dual-action suppression: 68°C thermal bulb canister + 360° omnidirectional fire ball',
      '100% non-conductive: completely safe on live 415V 3-phase and high-voltage DC',
      'Zero corrosive chemical residue: leaves delicate microcontrollers and contactors pristine',
      'Instantaneous discharge in under 3 seconds directly at point of origin'
    ],
    image: '/src/assets/images/fire_extinguisher_auto_1791552230446.jpg',
    primaryActionText: 'Inspect Fire Extinguisher Specs',
    primaryActionTarget: 'security',
    secondaryActionText: 'Request Panel Safety Audit'
  }
];

export const SENSORS_DATA: SensorItem[] = [
  {
    id: 'sensor-dht22',
    name: 'DHT22 / AM2302 High-Precision Temperature & Humidity Sensor',
    category: 'Environmental & Temperature',
    compatibleWith: ['ESP32', 'Arduino Uno', 'Arduino Nano', 'Raspberry Pi'],
    operatingVoltage: '3.3V – 5.5V DC',
    pinout: 'Pin 1: VCC, Pin 2: Data Out (10k pull-up resistor to VCC), Pin 3: NC (Not Connected), Pin 4: GND',
    workingPrinciple: 'Combines a capacitive humidity sensing element and a high-precision NTC thermistor. An onboard 8-bit chip outputs a calibrated digital signal via a single-bus communication protocol.',
    homeAutomationUses: 'Crucial for HVAC central temperature regulation, automated exhaust fans in server closets, dehumidifier switching, and precision greenhouse/agricultural climate chambers.',
    image: '/src/assets/images/relay_16ch_wifi_1790998673524.webp',
    tags: ['Temp: -40 to 80°C (±0.5°C)', 'Humidity: 0-100% RH (±2%)', 'Digital 1-Wire']
  },
  {
    id: 'sensor-mq2',
    name: 'MQ-2 Gas, Smoke & Combustible Vapour Sensor Module',
    category: 'Fire & Smoke Safety',
    compatibleWith: ['ESP32', 'Arduino Uno', 'Arduino Nano', 'STM32'],
    operatingVoltage: '5.0V DC (Heater requires 5V ~150mA)',
    pinout: 'Pin 1: VCC (5V), Pin 2: GND, Pin 3: D0 (Digital threshold comparator), Pin 4: A0 (Analog voltage output)',
    workingPrinciple: 'Features a tin dioxide (SnO2) sensitive layer inside a stainless steel mesh. In clean air, conductivity is low. When combustible gases or smoke molecules contact the heated surface, resistance drops proportionally to gas concentration.',
    homeAutomationUses: 'Acts as the primary early-warning smoke detector in kitchen and battery rooms. Triggers automatic gas solenoid shut-off valves, turns on emergency extractors, and sounds sirens through home automation relay interlocking.',
    image: '/src/assets/images/breakers_3pole_industrial_1790998696308.webp',
    tags: ['LPG & Propane', 'Methane & Smoke', 'Analog + Digital Triggers']
  },
  {
    id: 'sensor-pir-hc-sr501',
    name: 'HC-SR501 Passive Infrared (PIR) Human Motion Detector',
    category: 'Proximity & Motion',
    compatibleWith: ['ESP32', 'Arduino Uno', 'Arduino Nano', 'All microcontrollers'],
    operatingVoltage: '4.5V – 20V DC (Outputs 3.3V High logic level)',
    pinout: 'Pin 1: VCC, Pin 2: Digital Signal Output (3.3V TTL High on motion), Pin 3: GND. Includes sensitivity & delay potentiometers.',
    workingPrinciple: 'Utilizes a pyroelectric sensor behind a multi-faceted Fresnel lens. When a warm human or animal body crosses radiation zones, the differential voltage spikes, triggering a high digital pulse.',
    homeAutomationUses: 'Automates security lighting in hallways, staircases, and corridors; disarms or arms security zones; toggles room air conditioning only when human presence is confirmed to eliminate standby energy waste.',
    image: '/src/assets/images/smart_switches_tuya_1790998685408.webp',
    tags: ['Range: up to 7m', 'Angle: 120° cone', 'Repeatable Trigger Mode']
  },
  {
    id: 'sensor-rcwl-0516',
    name: 'RCWL-0516 Microwave Radar Doppler Proximity Motion Sensor',
    category: 'Surveillance & Security',
    compatibleWith: ['ESP32', 'Arduino Uno', 'Arduino Nano'],
    operatingVoltage: '4.0V – 28V DC (Outputs 3.3V logic)',
    pinout: 'Pin 1: 3V3 (Out), Pin 2: GND, Pin 3: OUT (3.3V high on motion), Pin 4: VIN, Pin 5: CDS (Light-dependent trigger enable)',
    workingPrinciple: 'Transmits microwave RF signals at ~3.18 GHz and detects Doppler frequency shifts reflected by moving physical objects. Unlike PIR, it operates through wooden doors, drywall, plastics, and glass enclosures.',
    homeAutomationUses: 'Enables completely concealed security and lighting automation. Installed behind decorative wall panels or ceiling drywall where visible sensors are aesthetically prohibited.',
    image: '/src/assets/images/relay_16ch_wifi_1790998673524.webp',
    tags: ['360° Omnidirectional', 'Penetrates Drywall/Glass', 'Immune to Temperature Fluctuations']
  },
  {
    id: 'sensor-soil-capacitive',
    name: 'Capacitive Soil Moisture Sensor v1.2 (Corrosion Resistant)',
    category: 'Environmental & Temperature',
    compatibleWith: ['ESP32', 'Arduino Uno', 'Arduino Nano'],
    operatingVoltage: '3.3V – 5.5V DC',
    pinout: 'Pin 1: GND, Pin 2: VCC (3.3V recommended for ESP32 ADC), Pin 3: AOUT (Analog Voltage)',
    workingPrinciple: 'Measures soil dielectric permittivity via capacitance variations rather than direct metallic contact resistance. Because copper traces are coated, it does not corrode or contaminate soil electrolysis.',
    homeAutomationUses: 'Core component in our Smart Agricultural Irrigation systems and Snail Farming Terrariums. Signals microcontrollers to open automated water solenoid valves only when root zone moisture drops below threshold.',
    image: '/src/assets/images/electric_bike_custom_1790998717436.webp',
    tags: ['Zero Oxidation PCB', 'Analog Voltage Output', 'Agricultural Grade']
  },
  {
    id: 'sensor-ds18b20',
    name: 'DS18B20 Waterproof Stainless Steel Digital Temperature Probe',
    category: 'Environmental & Temperature',
    compatibleWith: ['ESP32', 'Arduino Uno', 'Arduino Nano', 'Raspberry Pi'],
    operatingVoltage: '3.0V – 5.5V DC',
    pinout: 'Red: VCC, Black: GND, Yellow/Blue: Data (Requires 4.7kΩ pull-up to VCC)',
    workingPrinciple: 'Dallas 1-Wire digital protocol. Every sensor possesses a unique 64-bit laser-etched serial code, allowing dozens of probes to be wired in parallel along a single 3-wire bus over long distances.',
    homeAutomationUses: 'Monitoring solar water heater tanks, electric vehicle battery pack thermal zones, fish farm ponds, and snail farming incubation beds where moisture-proof submersion is essential.',
    image: '/src/assets/images/contactors_3pole_ac_dc_1790998707179.webp',
    tags: ['Submersible IP68', '1-Wire Bus Multiplexing', '-55°C to +125°C']
  },
  {
    id: 'sensor-acs712',
    name: 'ACS712 Fully-Isolated Hall Effect AC/DC Current Sensor',
    category: 'Surveillance & Security',
    compatibleWith: ['ESP32', 'Arduino Uno', 'Arduino Nano', 'STM32'],
    operatingVoltage: '5.0V DC',
    pinout: 'High Current Terminals: In-line AC/DC Load. Logic Pins: VCC (5V), GND, OUT (Analog 2.5V center point)',
    workingPrinciple: 'Features a low-resistance copper conduction path near an internal Hall sensor IC. Current generates a dynamic magnetic field which the Hall IC converts into a proportional linear analog voltage.',
    homeAutomationUses: 'Monitors real-time power draw of heavy appliances (air conditioners, borehole submersible pumps, EV charging stations). Provides instant over-current trips and energy telemetry to protect distribution breakers.',
    image: '/src/assets/images/breakers_3pole_industrial_1790998696308.webp',
    tags: ['2.1kV RMS Dielectric Isolation', 'Measures Both AC & DC', 'Up to 30A Continuous']
  }
];

export const MICROCONTROLLERS_DATA: MicrocontrollerItem[] = [
  {
    id: 'mcu-esp32',
    name: '24-Channel ESP32 IoT Relay & Automation Controller',
    processor: 'Tensilica Xtensa Dual-Core 32-bit LX6 Microprocessor (240MHz)',
    clockSpeed: '240 MHz Dual-Core Processing Speed',
    flashMemory: '4MB SPI Flash (Expandable up to 16MB)',
    sram: '520 KB High-Speed Internal SRAM',
    operatingVoltage: '12V / 5V DC Industrial Input (Onboard Buck Step-Down)',
    gpioPins: '24 Isolated Relay Channels + 12 Digital/Analog Sensor GPIOs',
    wirelessConnectivity: 'Integrated 802.11 b/g/n Wi-Fi + Bluetooth 4.2 BLE / Local MQTT',
    homeAutomationRole: 'The ultimate powerhouse for multi-zone residential and industrial automation. Drives 24 heavy-duty relay outputs directly from ESP32 with zero external drivers, complete with local web dashboard and Home Assistant integration.',
    recommendedUseCases: [
      '24-zone whole-house smart lighting and appliance control panel',
      'Industrial electrical panel automated breaker shunt-tripping and transfer',
      'Smart agricultural greenhouse misting and solenoid valve sequencing',
      'Electric vehicle charging depot automated power load shedding'
    ],
    image: '/src/assets/images/esp32_relay_24ch_1791552285027.jpg'
  },
  {
    id: 'mcu-power-supply-din',
    name: 'Industrial DIN-Rail Dual Power Supply (12VDC 10A & 5VDC 2A)',
    processor: 'High-Efficiency Pulse-Width Modulation (PWM) Power Switching Core',
    clockSpeed: '100 kHz Switching Frequency',
    flashMemory: 'N/A (Analog High-Efficiency SMPS Controller)',
    sram: 'Electrolytic Low-ESR Filter Buffer Capacitors (105°C Rated)',
    operatingVoltage: '100V – 240V AC 50/60Hz Input -> 12VDC & 5VDC Regulated Output',
    gpioPins: 'Dual Isolated Terminal Output Blocks (12V+ / 12V- & 5V+ / 5V- / GND)',
    wirelessConnectivity: 'Compatible with IoT voltage telemetry probes and relay controllers',
    homeAutomationRole: 'Provides clean, ripple-free regulated DC power to ESP32 microcontrollers, 24-channel relay coils, magnetic contactor coils, and security sensors inside electrical distribution enclosures.',
    recommendedUseCases: [
      'Primary power source for DIN-rail smart home automation distribution boards',
      'Backbone power for 12V contactor coils and emergency shutoff valves',
      'Regulated 5V logic power for Arduino, ESP32, and sensitive gas/smoke sensors',
      'Server closet and network cabinet backup DC distribution bus'
    ],
    image: '/src/assets/images/power_supply_din_1791552295224.jpg'
  },
  {
    id: 'mcu-arduino-uno',
    name: 'Arduino Uno R3 (ATmega328P)',
    processor: 'Microchip 8-bit AVR RISC ATmega328P',
    clockSpeed: '16 MHz Crystal Oscillator',
    flashMemory: '32 KB (0.5 KB utilized by bootloader)',
    sram: '2 KB SRAM & 1 KB EEPROM',
    operatingVoltage: '5V Operating (7-12V Recommended Input via barrel jack)',
    gpioPins: '14 Digital I/O (6 PWM outputs), 6 Analog 10-bit Input Pins',
    wirelessConnectivity: 'Requires external shield (ESP8266, NRF24L01, or LoRa module)',
    homeAutomationRole: 'Industry gold standard for rapid hardware prototyping, hardware debugging, and rock-solid deterministic relay switching without network latency concerns.',
    recommendedUseCases: [
      'Hardwired interlocked emergency stop and breaker trip controllers',
      'Undergraduate electrical & mechatronics student baseline laboratory setups',
      'Borehole pump automatic water level sequencer with float switches',
      'Standalone solar charge controller logic board'
    ],
    image: '/src/assets/images/esp32_relay_24ch_1791552285027.jpg'
  },
  {
    id: 'mcu-arduino-nano',
    name: 'Arduino Nano V3 (ATmega328P Compact)',
    processor: 'Microchip 8-bit AVR RISC ATmega328P',
    clockSpeed: '16 MHz',
    flashMemory: '32 KB Flash',
    sram: '2 KB SRAM',
    operatingVoltage: '5V (Mini-B / Type-C USB or 7-12V Vin Pin)',
    gpioPins: '22 Total I/O Pins (8 Analog Inputs, 6 Hardware PWM channels)',
    wirelessConnectivity: 'Direct SPI/I2C interfacing with NRF24L01+ 2.4GHz transceivers',
    homeAutomationRole: 'Miniature breadboard-friendly form factor ideal for embedding directly inside standard 86mm electrical wall boxes, sensor pods, and small robot chassis.',
    recommendedUseCases: [
      'Concealed wall switch retrofit modules behind traditional faceplates',
      'Precision drone flight controller helper boards and ESC throttle generators',
      'Snail farming microclimate misting controllers in remote zones',
      'Ultrasonic automated water tank level transceivers'
    ],
    image: '/src/assets/images/power_supply_din_1791552295224.jpg'
  },
  {
    id: 'mcu-stm32',
    name: 'STM32F103C8T6 (Blue Pill ARM Cortex-M3)',
    processor: '32-bit ARM Cortex-M3 High-Efficiency Core',
    clockSpeed: '72 MHz Maximum Clock Frequency',
    flashMemory: '64 KB / 128 KB Flash',
    sram: '20 KB High-Speed SRAM',
    operatingVoltage: '3.3V Operating (5V Tolerant I/O Pins)',
    gpioPins: '37 GPIO Pins, Dual 12-bit ADCs (16 channels), Hardware CAN bus',
    wirelessConnectivity: 'Compatible with external ESP8266, HC-05, and LoRa SX1278',
    homeAutomationRole: 'Industrial-grade computational speed, precise hardware timers, and onboard CAN bus make it unbeatable for brushless motor drive controllers in electric vehicles and aircraft models.',
    recommendedUseCases: [
      'Electric aircraft prototype avionics and multi-servo stabilization',
      'Electric vehicle CAN-bus instrument cluster and dashboard decoder',
      'High-speed multi-axis CNC and 3D printer stepper pulse generation',
      'High-frequency inverter sine-wave PWM synthesis'
    ],
    image: '/src/assets/images/electric_aircraft_model_1790998739880.webp'
  }
];

export const CONTACTORS_DATA: ContactorItem[] = [
  {
    id: 'contactor-3p-ac-40a',
    name: '3-Pole Heavy-Duty AC Magnetic Contactor (40A / 18.5kW)',
    powerType: 'AC Powered',
    poles: '3-Pole',
    ratedCurrent: '40A Continuous (AC-1) / 32A Inductive (AC-3, up to 15kW Motor)',
    coilVoltage: '220V - 240V AC 50/60Hz (Optional 24V AC/DC coil)',
    connectionDiagramDescription: 'L1, L2, L3 on top incoming terminals connect to the 3-phase AC mains (or Live, Neutral for single-phase heavy loads). T1, T2, T3 on bottom terminals lead directly to the load (induction motor, industrial immersion heater, 3-phase compressor). A1 and A2 are the electromagnetic coil terminals connected to the automation relay or thermostat.',
    terminalDetails: 'Main Power Contacts: 1/L1, 3/L2, 5/L3 (Inlet) & 2/T1, 4/T2, 6/T3 (Outlet). Auxiliary Contacts: 13NO & 14NO for automated self-holding logic or PLC status feedback.',
    homeIndustrialApplications: 'Safely controls heavy inductive appliances that would instantly destroy standard relays: 5HP borehole deep-well pumps, whole-building central air conditioning chillers, automatic transfer switches (ATS) between utility grid and backup generators.',
    wiringDiagramSvgType: 'ac_3pole',
    image: '/src/assets/images/contactor_3pole_modular_1791552272813.jpg'
  },
  {
    id: 'contactor-3p-ac-63a',
    name: '3-Pole Industrial Magnetic Contactor (63A / 30kW)',
    powerType: 'AC Powered',
    poles: '3-Pole',
    ratedCurrent: '63A Continuous (AC-1) / 50A Heavy Duty (AC-3)',
    coilVoltage: '220VAC / 380VAC 50Hz',
    connectionDiagramDescription: 'Main supply feeds 1/L1, 3/L2, 5/L3 via upstream 3-Pole MCB/MCCB. Output wires 2/T1, 4/T2, 6/T3 wire directly into the motor thermal overload relay (TOR). Coil terminals A1/A2 are powered by smart automation controller via interlocked contact.',
    terminalDetails: 'Screw clamp high-torque copper lugs accepting up to 25mm² cable. Dual auxiliary contacts: 1 Normally Open (NO) + 1 Normally Closed (NC).',
    homeIndustrialApplications: 'Commercial factory motor starters, municipal water treatment pumps, warehouse ventilation fans, and three-phase solar hybrid inverter bypass contactor systems.',
    wiringDiagramSvgType: 'ac_3pole',
    image: '/src/assets/images/contactor_3pole_modular_1791552272813.jpg'
  },
  {
    id: 'contactor-2p-ac-25a',
    name: '2-Pole Modular DIN-Rail Contactor (25A Silent Operation)',
    powerType: 'AC Powered',
    poles: '2-Pole',
    ratedCurrent: '25A Continuous / 5.5kW',
    coilVoltage: '220V – 240V AC 50Hz (Hum-free magnetic core)',
    connectionDiagramDescription: 'Terminals 1 and 3 receive Live & Neutral from circuit breaker. Terminals 2 and 4 output to load. Coil A1/A2 is triggered by smart WiFi switch or microcontroller relay board.',
    terminalDetails: 'DIN rail mountable (2 modules wide / 36mm). Low coil holding power of 1.6W with zero hum hum-free design.',
    homeIndustrialApplications: 'Residential water heaters (geysers), 2.5HP split air conditioners, EV home level-2 wallbox chargers (32A rated models), and smart home master disconnect circuits.',
    wiringDiagramSvgType: 'ac_2pole',
    image: '/src/assets/images/contactor_3pole_modular_1791552272813.jpg'
  },
  {
    id: 'contactor-1p-ac-32a',
    name: '1-Pole + Neutral Modular Contactor (32A Compact)',
    powerType: 'AC Powered',
    poles: '1-Pole',
    ratedCurrent: '32A (AC-1)',
    coilVoltage: '230V AC',
    connectionDiagramDescription: 'Single line switching terminal 1 -> 2 with neutral passthrough terminal. Coil A1/A2 activated by smart home control module.',
    terminalDetails: 'Compact 1-module DIN width (18mm). Integrated visual contact position flag (Red = Energized, Green = Open).',
    homeIndustrialApplications: 'Single-phase residential pool pumps, outdoor landscape lighting arrays, heavy electric ovens, and dedicated server rack UPS automated shedding circuits.',
    wiringDiagramSvgType: 'ac_single_pole',
    image: '/src/assets/images/contactor_3pole_modular_1791552272813.jpg'
  },
  {
    id: 'contactor-dc-500v',
    name: 'High-Voltage DC Power Contactor (500V DC / 200A Ceramic Arc Extinction)',
    powerType: 'DC Powered',
    poles: '1-Pole',
    ratedCurrent: '200A Continuous / 500V DC (Inrush withstand up to 1000A)',
    coilVoltage: '12V DC or 24V DC Low-Voltage Coil with economizer circuit',
    connectionDiagramDescription: 'Main HV DC Positive bus passes through bidirectional ceramic sealed contacts marked Main+ and Main-. Coil terminals are 12V/24V polarity protected, managed by BMS (Battery Management System).',
    terminalDetails: 'Epoxy resin sealed chamber filled with inert gas to instantaneously extinguish high-voltage DC electric arcs upon contact opening. Stainless M8 bolts.',
    homeIndustrialApplications: 'Electric vehicle (EV) main battery pack isolation contactors, high-voltage solar DC combiner boxes, battery energy storage systems (BESS), and DC rapid fast-charging stations.',
    wiringDiagramSvgType: 'dc_contactor',
    image: '/src/assets/images/contactors_3pole_ac_dc_1790998707179.webp'
  }
];

export const BREAKERS_DATA: BreakerItem[] = [
  {
    id: 'breaker-1p-mcb-32a',
    name: '1-Pole Miniature Circuit Breaker (1P MCB 32A C-Curve)',
    poles: '1-Pole (1P)',
    type: 'MCB (Miniature Circuit Breaker)',
    tripCurve: 'C Curve (5-10x In)',
    currentRatings: '6A, 10A, 16A, 20A, 32A, 40A',
    breakingCapacity: '6,000A (6kA IEC 60898-1)',
    automationNeedReason: 'Protects individual single-phase lighting circuits, smart socket banks, and dedicated automation branch conduits against dead short circuits and prolonged wire overheating.',
    smartCapabilities: 'Equipped with visual trip indicator; compatible with add-on auxiliary contacts and smart motor drives for remote status indication.',
    image: '/src/assets/images/breaker_1pole_1791552247575.jpg'
  },
  {
    id: 'breaker-2p-mcb-63a',
    name: '2-Pole Dual Miniature Circuit Breaker (2P MCB 63A)',
    poles: '2-Pole (2P)',
    type: 'MCB (Miniature Circuit Breaker)',
    tripCurve: 'C Curve (5-10x In)',
    currentRatings: '16A, 25A, 32A, 40A, 63A',
    breakingCapacity: '6,000A / 10,000A High Breaking Capacity',
    automationNeedReason: 'Simultaneously interrupts both Live and Neutral conductors to completely isolate inverter lines, battery chargers, and single-phase sub-panels during faults or maintenance.',
    smartCapabilities: 'Dual mechanical interlock ensuring complete galvanic separation; integrates seamlessly with DIN-rail shunt trip actuators.',
    image: '/src/assets/images/breaker_2pole_1791552258989.jpg'
  },
  {
    id: 'breaker-3p-mcb-63a',
    name: '3-Pole Industrial Circuit Breaker (3P MCB 63A C-Curve)',
    poles: '3-Pole (3P)',
    type: 'MCB (Miniature Circuit Breaker)',
    tripCurve: 'C Curve (5-10x In)',
    currentRatings: '16A, 32A, 40A, 63A Available',
    breakingCapacity: '6,000A / 10,000A (6kA/10kA IEC 60898-1)',
    automationNeedReason: 'Protects the three-phase distribution bus and heavy contactors from destructive short circuits and sustained thermal overloads. Tripping clears dangerous phase faults before sensitive electronics catch fire.',
    smartCapabilities: 'Pairable with auxiliary alarm contacts and remote shunt trip releases to automatically disconnect power during fire alarm activations or emergency shutdowns.',
    image: '/src/assets/images/breakers_3pole_industrial_1790998696308.webp'
  },
  {
    id: 'breaker-smart-wifi-2p',
    name: 'Smart WiFi Energy-Metering DIN Breaker (2P 63A Remote Control)',
    poles: '2-Pole (2P)',
    type: 'Smart WiFi Breaker',
    tripCurve: 'C Curve (5-10x In)',
    currentRatings: '10A to 63A Software Configurable',
    breakingCapacity: '6kA Breaking Capacity with Motorized Solenoid Mechanism',
    automationNeedReason: 'Eliminates manual trips for non-fault scenarios. Allows homeowners and facility managers to remotely schedule power, set over-voltage / under-voltage protections, and cut power during suspected pipe bursts or gas leaks.',
    smartCapabilities: 'Real-time telemetry showing Active Power (Watts), Voltage (V), Current (Amps), and Cumulative Electricity Consumption (kWh) straight to mobile and Home Assistant dashboard.',
    image: '/src/assets/images/breaker_2pole_1791552258989.jpg'
  },
  {
    id: 'breaker-4p-mccb-160a',
    name: '4-Pole Molded Case Circuit Breaker (4P MCCB 160A Industrial)',
    poles: '4-Pole (4P)',
    type: 'MCCB (Molded Case)',
    tripCurve: 'D Curve (10-20x In)',
    currentRatings: '100A, 160A, 250A Adjustable Thermal-Magnetic Trip',
    breakingCapacity: '35kA to 50kA Heavy Industrial Rating',
    automationNeedReason: 'Essential at the main service entrance where generator transfer switches and utility feeds meet. Switches all 3 phases plus the neutral line to ensure zero ground loop circulating currents during generator switchover.',
    smartCapabilities: 'Equipped with electronic trip unit (ETU) with Modbus RS485 communication for central SCADA automation monitoring.',
    image: '/src/assets/images/breaker_2pole_1791552258989.jpg'
  },
  {
    id: 'breaker-1p-rcbo',
    name: '1-Pole + Neutral RCBO (Residual Current Breaker with Overcurrent Protection)',
    poles: '1-Pole (1P)',
    type: 'RCBO / Earth Leakage',
    tripCurve: 'B Curve (3-5x In)',
    currentRatings: '16A / 30mA Earth Leakage Trip Sensitivity',
    breakingCapacity: '6kA with High Speed Millisecond Galvanic Trip',
    automationNeedReason: 'Human life safety and fire prevention. Detects minute 30mA leakage currents to ground caused by damp conduits, damaged appliance insulation, or human contact, cutting power within 30 milliseconds.',
    smartCapabilities: 'Visual trip indicator distinguishes between overcurrent overload trip versus earth leakage residual fault.',
    image: '/src/assets/images/breaker_1pole_1791552247575.jpg'
  }
];

export const MOTORS_DATA: MotorItem[] = [
  {
    id: 'motor-mg996r',
    name: 'MG996R Metal Gear High-Torque Digital Servo',
    category: 'Servo Motor',
    torqueRating: '11.0 kg·cm @ 6V / 9.4 kg·cm @ 4.8V',
    voltage: '4.8V – 7.2V DC',
    controlMethod: 'Standard 50Hz PWM (1000μs to 2000μs pulse width for 0°–180° rotation)',
    applications: [
      'DIY electric aircraft flight control surfaces (ailerons, elevator, rudder)',
      'Automated motorized home window openers and duct dampeners',
      'Heavy robotic arms and multi-joint pick-and-place manipulators',
      'Electric car automatic steering assist and throttle linkage prototypes'
    ],
    description: 'Upgraded metal gear train with double ball bearings. Resists gear stripping under extreme aerodynamic flight turbulence or mechanical loads.'
  },
  {
    id: 'motor-nema23',
    name: 'NEMA 23 High-Torque Bipolar Stepper Motor (2.8A / 1.9Nm)',
    category: 'Stepper Motor',
    torqueRating: '1.9 N·m (269 oz·in) Holding Torque',
    voltage: '24V – 48V DC Recommended Driver Bus',
    controlMethod: 'Step / Direction digital pulses via DM542 / TB6600 Microstepping Driver',
    applications: [
      'Precision motorized solar tracking array pedestals',
      'Undergraduate mechatronics CNC routing and 3D prototyping machines',
      'Automated heavy conveyor indexing in agricultural processing',
      'Aircraft prototype wind-tunnel angle-of-attack positioners'
    ],
    description: 'Precision 1.8° step angle (200 steps per revolution) offering microscopic positioning repeatability without accumulative error.'
  },
  {
    id: 'motor-bldc-hub',
    name: '72V 3000W Brushless DC (BLDC) Electric Bike / Vehicle Hub Motor',
    category: 'High-Power BLDC',
    torqueRating: '110 N·m Peak Torque / 820 RPM',
    voltage: '48V – 84V DC (Compatible with 20S Li-ion battery packs)',
    controlMethod: 'Field Oriented Control (FOC) Sinusoidal Vector Controller with Hall Sensors',
    applications: [
      'Custom electric bicycle rear wheel propulsion (speeds up to 80 km/h)',
      'Light electric vehicle conversion drivetrains and electric cargo tricycles',
      'High-speed prototype electric aircraft ground taxiing propulsion',
      'Undergraduate electric formula and mobility testbeds'
    ],
    description: 'High-efficiency neodymium permanent magnets, aluminum alloy cooling fins, and thermal sensor wire embedded directly in the stator coils.'
  },
  {
    id: 'motor-esc-60a',
    name: '60A Brushless ESC with 5V/5A Switching BEC for Aircraft & Drones',
    category: 'ESC & Driver',
    torqueRating: '60A Continuous / 80A Burst (10 seconds)',
    voltage: '2S – 6S LiPo (7.4V – 22.2V DC)',
    controlMethod: 'PWM / OneShot125 / DShot600 digital throttle protocols',
    applications: [
      'Electric aircraft prototype propulsion motor speed regulation',
      'High-speed multirotor surveillance aircraft for farm inspection',
      'Automated aerodynamic testing rigs'
    ],
    description: 'Features ultra-low internal resistance MOSFETs, smooth linear throttle response, and multiple safety protections (low voltage cut-off, thermal overload, throttle signal loss).'
  }
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'service-home-automation',
    title: 'Full Home Automation Systems',
    category: 'Smart Living & Energy',
    shortDesc: 'Complete turn-key automation of lighting, heavy appliances, smart locks, climate, and automated curtain control.',
    fullDesc: 'We design and commission bespoke architectural home automation systems utilizing both wireless (WiFi/Zigbee/BLE) and industrial hardwired RS485/KNX protocols. Our systems intelligently manage high-draw appliances via magnetic contactors, preventing utility peak tariff penalties while giving you unified control from smartphones, tablets, wall capacitive panels, and voice commands.',
    startingPrice: 'Starting at ₦185,000 / $250',
    highlights: [
      'Heavy appliance protection with AC magnetic contactor interlocking',
      'Local server redundancy: systems continue running even if the internet goes down',
      'Scheduled scenes: Good Morning, Away, Cinema Mode, and Security Lockout',
      'Energy monitoring dashboards logging individual room kWh usage'
    ],
    deliverables: [
      'Custom electrical distribution box design & schematic drawings',
      'Pre-assembled DIN-rail smart breaker and relay panels',
      'Mobile application setup with secure remote access credentials',
      '12-month on-site warranty and preventative maintenance support'
    ],
    image: '/src/assets/images/smart_switches_tuya_1790998685408.webp'
  },
  {
    id: 'service-smart-irrigation-snail',
    title: 'Smart Agricultural Irrigation & Snail Farming Automation',
    category: 'AgriTech & Climate Control',
    shortDesc: 'Automated soil moisture sensing, drip irrigation, and microclimate temperature/humidity chambers for dry-season snail training and breeding.',
    fullDesc: 'Dry seasons in tropical regions traditionally force giant African land snails (Achatina achatina / Archachatina marginata) into dormant aestivation, stalling growth and causing high mortality. BARGAINPOWER & TECHNOLOGY engineered an automated IoT climate control system using capacitive soil sensors, DHT22 ambient sensors, high-pressure ultrasonic misting nozzles, and automated solar-powered irrigation valves. The system automatically creates a perpetual cool, humid microclimate (24°C–27°C with 80%–85% humidity), allowing farmers to rear, breed, and train snails continuously year-round during intense dry seasons.',
    startingPrice: 'Starting at ₦220,000 / $300',
    highlights: [
      'Perpetual dry-season snail rearing: prevents aestivation and triples annual snail harvest weight',
      'Automated misting cycles triggered automatically when humidity falls below 75%',
      'Solar-powered borehole pump triggering with automatic dry-run water level protection',
      'Mobile SMS and WhatsApp alert notifications when water reservoirs run low'
    ],
    deliverables: [
      'Central IoT microclimate controller with weatherproof enclosure',
      'High-pressure misting pump and brass atomizing nozzle plumbing array',
      'Soil moisture and digital humidity probe networks',
      'Training manual on optimal snail farming microclimate management'
    ],
    image: '/src/assets/images/relay_16ch_wifi_1790998673524.webp'
  },
  {
    id: 'service-web-development',
    title: 'Corporate Website & Web Application Development',
    category: 'Software & Digital Engineering',
    shortDesc: 'High-performance, modern, mobile-first websites and bespoke business management portals designed for real commercial growth.',
    fullDesc: 'We build ultra-fast, responsive web applications for technology companies, manufacturing plants, educational institutions, and corporate enterprises. Engineered with modern tech stacks (React, TypeScript, Tailwind CSS, Node.js, and cloud databases), our web platforms feature seamless client inquiry pipelines, automated customer WhatsApp dispatch, interactive product configurators, and role-based administrative dashboards.',
    startingPrice: 'Starting at ₦150,000 / $200',
    highlights: [
      'Lighthouse 95+ performance scores and mobile-optimized layouts',
      'Integrated live chat triage engines with automated WhatsApp / Email escalation',
      'Comprehensive SEO meta tags, Google Search Console indexing, and rich snippet schemas',
      'Zero-clutter administrative backends for real-time lead and content management'
    ],
    deliverables: [
      'Responsive multi-page website with custom design identity',
      'Admin control dashboard with analytics & inquiry response pipelines',
      'Domain configuration, SSL security certificate & cloud hosting deployment',
      'Technical documentation and staff training handover session'
    ],
    image: '/src/assets/images/breakers_3pole_industrial_1790998696308.webp'
  },
  {
    id: 'service-cctv-installation',
    title: 'Advanced CCTV & Smart Surveillance Systems',
    category: 'Physical Security & Vision',
    shortDesc: 'High-definition IP cameras, night-vision PTZ domes, AI person/vehicle classification, and encrypted mobile remote monitoring.',
    fullDesc: 'We install enterprise-grade surveillance networks for residential estates, corporate headquarters, agricultural farms, and logistics yards. Featuring Starlight low-light sensors, active deterrence spotlights, two-way audio intercoms, and Network Video Recorders (NVR) with RAID redundancy, our surveillance systems tie directly into smart home automation relays to trigger security floodlights when perimeter tripwires are crossed.',
    startingPrice: 'Starting at ₦130,000 / $175',
    highlights: [
      'Smart AI human and vehicle classification: eliminates 95% of false insect/wind alarms',
      'Zero monthly subscription fees: all footage stored on encrypted local NVR hard drives',
      'Seamless live stream access across Android, iPhone, Windows, and Mac',
      'Solar-backed battery power integration for continuous 24/7 recording during grid blackouts'
    ],
    deliverables: [
      'Complete site survey & strategic camera field-of-view layout plan',
      'Cat6 shielded cable runs with professional PVC trunking',
      'High-definition IP cameras with PoE (Power over Ethernet) switches',
      'Mobile app configuration on all client family/staff devices'
    ],
    image: '/src/assets/images/contactors_3pole_ac_dc_1790998707179.webp'
  },
  {
    id: 'service-aircraft-model',
    title: 'Building of Aircraft Models & Carbon Fiber Prototypes',
    category: 'Aerospace & Creative Prototyping',
    shortDesc: 'Precision carbon-fiber aerodynamic aircraft models for airport bird hazard deterrence, surveillance, and flight test research.',
    fullDesc: 'We construct rigid, lightweight carbon fiber and balsa composite aircraft models ranging from small tactical hand-launch drones to large-scale 3-meter wingspan fixed-wing UAVs. Designed for airport runway bird hazard dispersion, agricultural mapping, and aerospace research, these models integrate brushless electric propulsion, precision digital servos, and programmable autopilot flight controllers (Pixhawk / ArduPilot).',
    startingPrice: 'Starting at ₦350,000 / $470',
    highlights: [
      'High strength-to-weight ratio aerospace vacuum-infused carbon fiber layups',
      'Acoustic deterrent and predatory hawk profile options for airport bird management',
      'Autonomous GPS waypoint navigation, return-to-home, and fail-safe parachute deployment',
      'Telemetry range up to 25 km with encrypted digital radio control links'
    ],
    deliverables: [
      'Fully assembled and flight-tested carbon fiber airframe',
      'Brushless power propulsion system, servos, and electronic speed controller',
      'Flight controller programming with pre-calibrated PID flight stabilization',
      'Flight safety manual and pilot ground station software suite'
    ],
    image: '/src/assets/images/electric_aircraft_model_1790998739880.webp'
  },
  {
    id: 'service-electric-aircraft-innovation',
    title: 'Innovating Electric Aircraft & eVTOL Engineering',
    category: 'Aerospace & Clean Propulsion',
    shortDesc: 'Cutting-edge electric propulsion, high-voltage battery management systems, and aerodynamic testing for next-generation flight.',
    fullDesc: 'The future of regional aviation is electric. BARGAINPOWER & TECHNOLOGY actively researches and fabricates electric aircraft propulsion prototypes. We engineer lightweight lithium-ion cell packs with thermal dissipation jackets, high-torque outrunner brushless DC motors, and dual-redundant fly-by-wire servo control buses. Our research assists aeronautical engineering teams, universities, and aerospace innovators in testing electric vertical take-off and landing (eVTOL) designs.',
    startingPrice: 'Custom Engineering Contract',
    highlights: [
      'High-discharge LiFePO4 and Lithium-Cobalt pouch cell battery module packaging',
      'Aerodynamic bench dynamometer testing measuring thrust (kgf), current, and efficiency (g/W)',
      'Dual-redundant avionics power buses with automatic battery changeover circuits',
      'Carbon-fiber motor pylons and vibration-damped structural mounts'
    ],
    deliverables: [
      'Full powertrain CAD models and finite element structural analysis reports',
      'Propulsion test-bench performance log sheets and data graphs',
      'Bespoke battery management and telemetry interface hardware',
      'Engineering prototype demonstration and technical consultation'
    ],
    image: '/src/assets/images/electric_aircraft_model_1790998739880.webp'
  },
  {
    id: 'service-electric-vehicles',
    title: 'Electric Vehicle Conversions & Ground-Up Builds',
    category: 'Clean Automotive Mobility',
    shortDesc: 'Converting conventional internal combustion engine (gasoline/diesel) vehicles into high-torque, zero-emission Battery Electric Vehicles (BEVs).',
    fullDesc: 'Why scrap a sound automobile chassis when you can transform it into a whisper-quiet, zero-emission electric machine? We carry out complete internal combustion engine removals, custom transmission adapter plates, motor-mount fabrication, high-voltage DC wiring, and liquid-cooled battery pack installations. Our conversions feature regenerative braking, digital instrument cluster conversion, and on-board high-speed AC chargers compatible with standard electrical outlets.',
    startingPrice: 'Starting at ₦1,800,000 / $2,400',
    highlights: [
      'Complete elimination of fuel costs, engine oil changes, and exhaust emissions',
      'Instantaneous maximum torque delivery from zero RPM for superior urban drivability',
      'Modular lithium battery systems with active thermal and cell balancing BMS',
      'High-voltage safety interlocking with automatic pyrofuse and DC contactor cut-offs'
    ],
    deliverables: [
      'Complete powertrain engineering: AC induction / permanent magnet motor + controller',
      'Engineered battery enclosure with waterproof IP67 sealing',
      'Regenerative electronic accelerator throttle and brake sensor setup',
      'Full vehicle inspection certificate, operating manual, and warranty'
    ],
    image: '/src/assets/images/electric_vehicle_conversion_1790998727320.webp'
  },
  {
    id: 'service-electric-bikes',
    title: 'Building of Custom Electric Bikes & Commuter Scooters',
    category: 'Clean Automotive Mobility',
    shortDesc: 'Handcrafted high-torque electric bicycles engineered for daily commuting, heavy cargo delivery, and rugged off-road performance.',
    fullDesc: 'We construct custom e-bikes utilizing aircraft-grade aluminum and steel frames, high-power brushless hub motors (500W to 3000W), and removable high-capacity lithium-ion battery packs built with genuine Samsung/LG 21700 cells. Capable of ranges up to 80 km on a single charge and top speeds over 60 km/h, our bikes include pedal-assist torque sensors, LED headlights, USB phone charging ports, and anti-theft GPS trackers.',
    startingPrice: 'Starting at ₦290,000 / $390',
    highlights: [
      'Heavy-duty frames reinforced for tough road conditions and cargo delivery',
      'Removable key-locked battery packs that can be charged inside your office or living room',
      'Dual hydraulic disc brakes with automatic electronic motor cutoff switches',
      'Smart handlebar LCD display displaying speed, battery percentage, and trip distance'
    ],
    deliverables: [
      'Custom fabricated electric bike tailored to rider height and desired range',
      'High-efficiency smart charger (0 to 100% in 4 hours)',
      'Toolkit, extra tire tubes, and digital battery diagnostic guide',
      'Free 6-month tune-up and spoke re-tensioning service'
    ],
    image: '/src/assets/images/electric_bike_custom_1790998717436.webp'
  },
  {
    id: 'service-solar-customization',
    title: 'Solar Power Customization & Off-Grid Energy Systems',
    category: 'Renewable Power & Storage',
    shortDesc: 'Tailored solar PV installations, MPPT charge controllers, pure sine wave inverters, and long-life LiFePO4 lithium battery banks.',
    fullDesc: 'Standard off-the-shelf solar setups frequently fail because loads were improperly audited. We calculate exact real-world surge currents of inductive compressors, contactors, and pumps to build indestructible solar power plants. Our systems feature Tier-1 monocrystalline panels, high-efficiency MPPT controllers (up to 99% tracking efficiency), and Grade-A Lithium Iron Phosphate (LiFePO4) battery racks boasting over 6,000 charge cycles (10+ year lifespan).',
    startingPrice: 'Starting at ₦480,000 / $640',
    highlights: [
      'Zero-flicker automatic changeover during grid failure (<10ms switch time)',
      'LiFePO4 lithium storage chemistry: zero memory effect, zero fire explosion hazard',
      'Smart hybrid inverters with WiFi telemetry and mobile cloud power generation analytics',
      'Surge protection devices (SPD) and DC circuit breakers safeguarding the entire array'
    ],
    deliverables: [
      'Comprehensive on-site load audit and energy generation calculation sheet',
      'Tier-1 Monocrystalline solar panels with heavy-gauge aluminum roof mounting rails',
      'Pure sine wave hybrid inverter and custom LiFePO4 battery cabinet',
      'Earthing and lightning surge protection system installation'
    ],
    image: '/src/assets/images/breakers_3pole_industrial_1790998696308.webp'
  }
];

export const UNDERGRAD_GUIDES: UndergraduateEngineeringGuide[] = [
  {
    field: 'Electrical Engineering',
    overview: 'Electrical engineering students bridge foundational electromagnetic theory, power electronics, analog signal processing, and embedded systems. In today’s competitive engineering job market, an undergraduate thesis must move beyond basic simulation models to tangible, physical hardware prototypes that solve genuine socioeconomic problems.',
    industryApplications: [
      'High-voltage power transmission & smart grid distribution protection',
      'Renewable solar PV inverter design & battery energy storage management',
      'Industrial motor drive automation using magnetic contactors and PLCs',
      'IoT smart metering and power factor correction controllers'
    ],
    whatMakesAGoodProject: [
      'Working physical hardware prototype with neatly soldered PCB/stripboard and enclosed chassis',
      'Rigorous mathematical modeling backed by measurable test data (oscilloscope waveforms, efficiency calculations)',
      'Failsafe safety systems: fuses, circuit breakers, and thermal cut-offs incorporated in the design',
      'Clear economic cost-benefit analysis showing practical commercial feasibility'
    ],
    recommendedProjects: [
      {
        title: 'Microcontroller-Driven Automatic Three-Phase Phase Selector & Fault Isolator',
        description: 'Design and fabrication of a smart system that automatically monitors 3-phase utility incoming power, detects phase dropouts, under-voltage, or phase reversals, and seamlessly shifts single-phase critical loads to the healthiest phase using contactors.',
        hardwareTools: ['Arduino Nano / ESP32', '3-Pole AC Contactors', 'Optocoupled Voltage Zero-Crossing Detectors', 'Current Transformers'],
        skillsGained: 'Three-phase electrical safety, magnetic contactor interlocking, analog AC voltage sensing.'
      },
      {
        title: 'Smart MPPT Solar Charge Controller with Real-Time Bluetooth / LoRa Telemetry',
        description: 'Construction of a Synchronous Buck Converter with Perturb & Observe (P&O) maximum power point tracking algorithm, charging a 12V/24V LiFePO4 battery pack with 96%+ efficiency.',
        hardwareTools: ['Power MOSFETs (IRFP260N)', 'High-Current Ferrite Inductor', 'IR2104 Gate Driver', 'ESP32 / ACS712 Current Sensor'],
        skillsGained: 'Switch-mode power supply (SMPS) design, high-frequency PWM switching, thermal heatsink calculation.'
      },
      {
        title: 'IoT Non-Intrusive Appliance Energy Monitor with Deep Neural Load Disaggregation',
        description: 'Hardware energy meter using split-core current transformers on the main electrical panel that communicates high-speed sample data to detect exactly when the refrigerator or pump cycles on.',
        hardwareTools: ['ESP32', 'SCT-013-000 Non-invasive Current Sensor', 'ADS1115 16-Bit ADC', 'OLED Display'],
        skillsGained: 'High-precision ADC data sampling, FFT signal processing, MQTT telemetry.'
      }
    ]
  },
  {
    field: 'Mechanical Engineering',
    overview: 'Mechanical engineering underpins the physical manifestation of all kinetic technology: thermodynamics, aerodynamics, structural finite element analysis (FEA), materials science, and fluid dynamics. A high-scoring mechanical undergraduate project demonstrates precision machining, stress-strain validation, and energetic optimization.',
    industryApplications: [
      'Automotive electric vehicle chassis dynamics and suspension tuning',
      'Aerospace fixed-wing drone aerodynamics and carbon fiber manufacturing',
      'Thermodynamic microclimate conditioning for intensive agriculture and livestock',
      'Robotic mechanical end-effectors and gear train reduction systems'
    ],
    whatMakesAGoodProject: [
      'Parametric 3D CAD modeling (SolidWorks / Fusion 360) with real engineering tolerances',
      'Finite Element Analysis (FEA) demonstrating factor of safety under peak stress loads',
      'Physical fabrication utilizing real metal welding, lathe turning, 3D printing, or carbon composite layups',
      'Empirical experimental validation comparing theoretical equations with actual physical test data'
    ],
    recommendedProjects: [
      {
        title: 'Design, Structural FEA & Aerodynamic Wind-Tunnel Analysis of a Carbon-Fiber UAV Airframe',
        description: 'Development of an aerodynamic fixed-wing unmanned aircraft model optimized for airport perimeter surveillance and bird dispersion, featuring vacuum-bagged carbon composite wings.',
        hardwareTools: ['SolidWorks / ANSYS Fluent', 'Vacuum Resin Infusion Kit', 'Balsa & Carbon Fiber Fabric', 'Load Cell Thrust Stand'],
        skillsGained: 'Aerodynamic lift/drag calculation, composite layup technology, structural stress simulation.'
      },
      {
        title: 'Conversion of a Gasoline Motorcycle Chassis to an Electric Powertrain with Optimized Chain Drive Ratio',
        description: 'Complete mechanical retrofit involving custom laser-cut motor mounting brackets, torque arm reinforcement, stress analysis of the rear swingarm, and thermal design of the battery enclosure.',
        hardwareTools: ['Mild Steel Plate / TIG Welding', 'CNC Laser Cutting Service', '72V BLDC Motor', 'Custom Chain Sprockets'],
        skillsGained: 'Torsional stress calculation, drivetrain gear ratio optimization, CAD-to-CAM manufacturing.'
      },
      {
        title: 'Automated Solar-Powered Microclimate Environmental Chamber for Tropical Dry-Season Snail Farming',
        description: 'Design and mechanical construction of a sealed agricultural chamber with dual-fluid air-atomizing misting nozzles, thermodynamic evaporative cooling pads, and automated drainage.',
        hardwareTools: ['Food-Grade Acrylic & Aluminum Extrusions', 'High-Pressure Diaphragm Pump', 'Fine Brass Atomizing Nozzles', 'Air Flow Anemometer'],
        skillsGained: 'Psychrometric chart analysis, fluid mechanics of atomized sprays, thermal insulation design.'
      }
    ]
  },
  {
    field: 'Mechatronics Engineering',
    overview: 'Mechatronics engineering is the synergistic integration of mechanical mechanisms, electronic sensors, microcontrollers, and real-time control algorithms. It is the premier discipline behind robotics, automated manufacturing, electric vehicles, and smart home appliances.',
    industryApplications: [
      'Autonomous mobile robots (AMR) and industrial robotic arms',
      'Fly-by-wire electric aircraft flight control and stabilization systems',
      'Automated agricultural IoT irrigation and greenhouse robotics',
      'Smart home centralized automation panels with closed-loop PID control'
    ],
    whatMakesAGoodProject: [
      'Seamless multi-domain integration where mechanics, electronics, and software depend upon each other',
      'Closed-loop feedback control (PID loops, state-space estimators, or fuzzy logic)',
      'Robust physical packaging with zero loose breadboard wires or structural wobbles',
      'Interactive user interface (touch display, mobile app, or telemetry dashboard)'
    ],
    recommendedProjects: [
      {
        title: 'Autonomous Dual-Axis Solar Tracking Pedestal with Closed-Loop Optical & Astronomical Control',
        description: 'Mechanical pan-tilt gimbal powered by NEMA 23 stepper motors and worm gearboxes, utilizing both quadrant LDR light sensors and GPS sun-position algorithms to increase solar panel power harvest by 35%.',
        hardwareTools: ['ESP32 / Arduino Uno', 'NEMA 23 Stepper Motors + TB6600 Drivers', 'Worm Gear Reduction Drives', 'INA219 DC Power Monitor'],
        skillsGained: 'Kinematic pan-tilt modeling, stepper microstepping control, solar irradiance optimization.'
      },
      {
        title: 'IoT Autonomous Snail Farm Microclimate Robot with Soil Probing & Automatic Misting Arm',
        description: 'A rail-mounted or autonomous mobile robot that patrols agricultural snail beds, inserts a capacitive soil moisture sensor, checks temperature/humidity, and actuates localized misting valves on demand.',
        hardwareTools: ['Arduino Nano / ESP32', 'MG996R Servos', 'Capacitive Moisture Sensors', 'Linear Lead Screw Actuator'],
        skillsGained: 'Robotic actuation, distributed sensor sampling, closed-loop environmental control.'
      },
      {
        title: 'Fly-By-Wire Autonomous Electric Aircraft Model with Gyroscopic PID Auto-Leveling & Telemetry',
        description: 'Construction of a small carbon fiber aircraft with digital metal gear servos controlling ailerons, elevator, and rudder via MPU6050 accelerometer/gyroscope sensor fusion and custom flight control software.',
        hardwareTools: ['STM32F103 / ESP32', 'MPU6050 IMU', 'MG996R Metal Servos', '60A BLDC ESC', '2.4GHz Telemetry Transceiver'],
        skillsGained: 'Sensor fusion (Kalman filter / complementary filter), PID loop tuning, real-time embedded C++.'
      }
    ]
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'microcontrollers',
    question: 'Why do you recommend the ESP32 over the traditional Arduino Uno for home automation?',
    answer: 'While the Arduino Uno (ATmega328P) is an exceptional learning platform, it runs at only 16 MHz, has 2 KB of RAM, and possesses zero native wireless networking without bulky external add-on shields. The ESP32 provides a blazing 240 MHz dual-core processor, 520 KB of SRAM, and built-in Wi-Fi and Bluetooth BLE on a single chip. It natively hosts web servers, handles secure SSL/TLS connections, runs MQTT protocols for home automation, and supports over-the-air (OTA) wireless firmware updates while remaining extremely cost-effective.'
  },
  {
    id: 'faq-2',
    category: 'microcontrollers',
    question: 'Can the Arduino Nano handle real-time home automation sensor networks?',
    answer: 'Yes! The Arduino Nano is fantastic as a localized sensor node. Because of its miniature footprint, you can place a Nano inside electrical junction boxes or sensor pods to read digital temperature, ultrasonic levels, or motion sensors, and forward data to a central ESP32 master hub via RS485 Modbus or NRF24L01 2.4GHz wireless transceivers.'
  },
  {
    id: 'faq-3',
    category: 'contactors',
    question: 'Why can’t I connect a 2HP borehole water pump or 3-ton air conditioner directly to a standard smart relay?',
    answer: 'Standard smart relays and PCB relay boards are only rated for resistive loads (like light bulbs). Inductive loads—such as water pumps, refrigeration compressors, and electric motors—draw an enormous inrush startup current 5 to 7 times their running rating. Furthermore, when an inductive coil disconnects, it creates a massive reverse electromagnetic back-EMF arc. This back-EMF will melt the contacts of small relays together within days or cause fire hazards. A magnetic contactor is engineered with heavy copper lugs, silver-alloy contacts, and internal arc chutes designed to absorb this high inductive surge effortlessly.'
  },
  {
    id: 'faq-4',
    category: 'contactors',
    question: 'What is the functional difference between 1-Pole, 2-Pole, and 3-Pole contactors?',
    answer: 'A 1-Pole contactor switches only one live conductor (ideal for light single-phase loads). A 2-Pole contactor switches both the Live and Neutral lines simultaneously, ensuring total electrical isolation of the load when deactivated. A 3-Pole contactor switches all three separate phase lines (L1, L2, L3) simultaneously, which is mandatory for 3-phase induction motors, commercial chillers, and industrial heavy machinery.'
  },
  {
    id: 'faq-5',
    category: 'contactors',
    question: 'What are the A1 and A2 terminals on a contactor?',
    answer: 'Terminals A1 and A2 are the connections to the electromagnetic coil inside the contactor. When you supply the rated voltage (typically 220VAC or 24VDC depending on your model) across A1 and A2, the coil energizes and pulls the heavy spring-loaded power contacts closed. This allows a delicate, low-power microcontroller or smart relay to switch hundreds of amps of heavy machinery safely.'
  },
  {
    id: 'faq-6',
    category: 'relays',
    question: 'What is optocoupler isolation on our 16-Channel WiFi Relay board and why does it matter?',
    answer: 'An optocoupler transmits switching signals using an internal LED and phototransistor across an absolute physical air gap. This means there is zero direct electrical wire connection between your sensitive 3.3V microcontroller brain and the 250V high-voltage power relay coils. Even if a lightning surge or motor coil back-EMF hits the relay side, it is completely blocked from frying your microcontroller.'
  },
  {
    id: 'faq-7',
    category: 'services',
    question: 'How does your Smart Irrigation system solve dry-season snail mortality in Africa?',
    answer: 'Snails are poikilothermic, moisture-dependent gastropods. In the dry season, low humidity and high temperatures trigger aestivation—the snail seals its shell aperture with a dried calcified mucus membrane, ceases eating, loses up to 40% body mass, and egg production drops to zero. Our smart automation system deploys capacitive soil sensors and ambient humidity sensors linked to automated high-pressure micro-misters. Whenever soil moisture drops or air humidity falls below 80%, the system automatically generates an ultra-fine, cool mist and gently irrigates the soil. This fools the snails into perceiving perpetual monsoon conditions, resulting in uninterrupted feeding, continuous breeding, and rapid weight gain during the most lucrative market season.'
  },
  {
    id: 'faq-8',
    category: 'services',
    question: 'Can you convert any gasoline car to an electric vehicle (EV)?',
    answer: 'In principle, almost any front-engine or rear-wheel-drive vehicle can be converted. The best candidates are manual transmission vehicles with sound structural chassis (compact pickups, classic sedans, delivery vans). We engineer a custom CNC aluminum adapter plate that bolts the high-torque electric motor directly to the existing transmission bellhousing, mount battery packs strategically to maintain 50:50 weight distribution, and install vacuum assist pumps for power braking.'
  },
  {
    id: 'faq-9',
    category: 'training',
    question: 'What assistance do you provide to undergraduate engineering students?',
    answer: 'We provide mentorship, schematic design review, PCB prototyping, component procurement, and hands-on laboratory testing for electrical, mechanical, and mechatronics engineering final-year projects. We teach students how to solder properly, program real-time microcontrollers, calculate component thermal tolerances, and prepare presentation boards that impress university defense panels and external examiners.'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Engr. Chukwudi O.',
    companyOrRole: 'Operations Director, Prime Industrial Mills',
    rating: 5,
    comment: 'BARGAINPOWER & TECHNOLOGY engineered a complete 3-pole contactor automation panel for our 15kW borehole pumping system. Before their installation, our smart switches kept burning out due to inductive surges. Their engineering design with proper A1/A2 coil interlocking has been running flawlessly for over 14 months without a single hiccup!',
    serviceRelated: 'Home & Industrial Automation',
    date: '2026-02-14',
    approved: true
  },
  {
    id: 'rev-2',
    author: 'Dr. Fatima B. Bello',
    companyOrRole: 'Chief Agronomist, GreenHorizon Snail Farm',
    rating: 5,
    comment: 'The automated dry-season snail farming microclimate system developed by BARGAINPOWER is revolutionary. Last dry season we lost over 35% of our breeders to aestivation. With their capacitive soil sensors and automated misting system, our snails remained active and laying eggs throughout January and February! Our profits tripled.',
    serviceRelated: 'Smart Agricultural Irrigation',
    date: '2026-01-20',
    approved: true
  },
  {
    id: 'rev-3',
    author: 'Emmanuel Adeyemi',
    companyOrRole: 'Final Year Mechatronics Student, UNILAG',
    rating: 5,
    comment: 'I consulted BARGAINPOWER for my undergraduate project on an autonomous dual-axis solar tracking pedestal. They helped me select the right NEMA 23 stepper motors and guided my PID closed-loop code. My project was awarded Best Hardware Thesis in the department!',
    serviceRelated: 'Undergraduate Projects & Training',
    date: '2025-11-28',
    approved: true
  },
  {
    id: 'rev-4',
    author: 'Capt. Kenneth Alabi',
    companyOrRole: 'Aerodrome Safety Consultant',
    rating: 5,
    comment: 'Their carbon-fiber aircraft model for runway bird hazard deterrence is exceptionally rigid and responsive. High-power brushless motor, long radio range, and rock-solid aerodynamic stability. A top-tier engineering outfit.',
    serviceRelated: 'Building of Aircraft Models',
    date: '2025-12-05',
    approved: true
  },
  {
    id: 'rev-5',
    author: 'Sarah Jenkins',
    companyOrRole: 'EcoCommute Logistics',
    rating: 5,
    comment: 'We purchased two custom electric cargo bikes for urban delivery. The 72V battery lasts an entire day of continuous stop-and-go driving with zero overheating. The hydraulic disc brakes and torque sensors make riding smooth and safe.',
    serviceRelated: 'Building of Electric Bikes',
    date: '2026-02-02',
    approved: true
  }
];

export const SECURITY_DATA: SecurityItem[] = [
  {
    id: 'sec-fire-extinguisher',
    name: 'Automatic Fire Extinguisher (Clean Agent Canister & 360° Dry Chemical Fire Ball)',
    category: 'Fire Suppression',
    operatingSpecs: 'Dual Thermal Trigger: 68°C (155°F) Sprinkler Bulb + Instant Flame-Burst 360° Dispersal (Discharge < 3 Seconds)',
    activationMechanism: 'Dual passive & active self-actuation: 1) Thermal bulb expansion fractures at 68°C to deluge enclosure with non-conductive FK-5-1-12 clean gas. 2) Fire ball activates within 2-3 seconds of contact with open flame, dispersing an omnidirectional micro-powder cloud.',
    idealFor: [
      'Electrical Distribution Boards & Breaker Cabinets',
      'Solar Inverter & LiFePO4 Lithium Battery Storage Enclosures',
      'Home Automation Relay & Contactor Control Panels',
      'Server Racks & High-Voltage Transformer Compartments',
      'Electric Vehicle Battery Enclosures & Charging Hubs'
    ],
    homeAutomationRole: 'The ultimate line of defense for automated homes and industrial facilities. Electrical fires originate inside closed metal control panels from loose copper lugs, contactor arcing, or lithium thermal runaway. Room-level sprinklers cannot penetrate sealed panel boxes. The Automatic Fire Extinguisher sits directly mounted inside or above the enclosure, neutralizing flames within 3 seconds without damaging sensitive microcontrollers or causing live circuit arc-overs.',
    image: '/src/assets/images/fire_extinguisher_auto_1791552230446.jpg',
    features: [
      'Zero Electrical Conductivity (Safe for live 415V 3-Phase & high-voltage DC switchgear)',
      '100% Unattended Auto-Activation (Protects panels even when facility is unoccupied)',
      'Dual System: Clean Agent Cylinder + Omni-directional Fire Suppression Ball',
      'Integrated High-Accuracy Bourdon Tube Pressure Gauge',
      'Heavy-Duty Powder-Coated Steel Wall & Cabinet Mounting Brackets included',
      'Non-Corrosive Clean Agent Formulation (Zero residue destruction on microcontrollers)'
    ]
  },
  {
    id: 'sec-din-power-supply',
    name: 'Industrial DIN-Rail 12VDC & 5VDC Enclosure Power Supply & Isolation Unit',
    category: 'Power Isolation',
    operatingSpecs: '100-240V AC 50/60Hz Input · Regulated 12VDC (10A) & 5VDC (2A) Dual Output with Surge Suppression',
    activationMechanism: 'Continuous galvanic isolation with built-in MOV metal oxide varistors and 4kV transient surge suppression.',
    idealFor: [
      'Automatic Fire Alarm Sensors & Solenoid Shutoff Valves',
      '24-Channel Relay Boards & IoT Smoke Detectors',
      'Contactor 12V Coil Actuators & Remote Shunt Trips'
    ],
    homeAutomationRole: 'Guarantees reliable, uncorrupted DC power to safety relays, gas sniffers, and fire alarm triggers inside the panel board even during heavy grid lightning or voltage sags.',
    image: '/src/assets/images/power_supply_din_1791552295224.jpg',
    features: [
      'Perforated Industrial Heat-Dissipation Steel Enclosure',
      'Short-Circuit, Overload & Thermal Auto-Recovery Protection',
      'High-Visibility "DC OK" Status LED Indicator',
      'Standard 35mm DIN-Rail Clip-on Mounting'
    ]
  },
  {
    id: 'sec-esp32-fire-shunt',
    name: '24-Channel ESP32 Emergency Fire Shunt-Trip & Panel Isolation Controller',
    category: 'Enclosure Safety',
    operatingSpecs: 'Dual-Core 240MHz ESP32 · 24 High-Current Relay Channels with Optical Isolation',
    activationMechanism: 'Instantly trips upstream circuit breaker shunt releases upon detecting smoke, heat rise, or fire extinguisher discharge pressure drop.',
    idealFor: [
      'Multi-Zone Smart Home Emergency Power Cutoff',
      'Automated Facility Ventilation Fan Interlocking',
      'SMS & WhatsApp Remote Alarm Dispatch to Facility Managers'
    ],
    homeAutomationRole: 'Acts as the intelligent coordinator during an emergency. When thermal or gas sensors trigger, the ESP32 instantaneously signals contactors to drop heavy inductive loads and trips the main breaker to de-energize the house before fire spreads.',
    image: '/src/assets/images/esp32_relay_24ch_1791552285027.jpg',
    features: [
      'Real-Time WiFi / BLE Telemetry & MQTT Event Dispatch',
      'Millisecond Relay Trip Latency with Hardware Interlocking',
      'Optocoupled Isolation on Every Channel (Protects ESP32 from spikes)',
      'Status LED Indicators on all 24 Channels'
    ]
  },
  {
    id: 'sec-mcb-dual-isolation',
    name: '2-Pole Automatic Circuit Isolation & Shunt-Trip Breaker',
    category: 'Enclosure Safety',
    operatingSpecs: '2-Pole (2P) 63A Dual Conductor Disconnect · 10kA Short-Circuit Rating',
    activationMechanism: 'Mechanical toggle interlock triggered by overcurrent, short circuit, or automated remote shunt solenoid pulse.',
    idealFor: [
      'Lithium Battery Inverter Disconnect Circuits',
      'Main Incomer Panel Emergency Cutoff',
      'Whole-Building Solar Hybrid Disconnect'
    ],
    homeAutomationRole: 'Provides physical mechanical galvanic disconnection of both Live and Neutral conductors simultaneously, eliminating dangerous backfeed voltages during fire safety shutdowns.',
    image: '/src/assets/images/breaker_2pole_1791552258989.jpg',
    features: [
      'Simultaneous 2-Pole Disconnection (No floating neutral danger)',
      'High Arc-Suppression Ceramic Chamber',
      'Visible Trip Flag (Red = Tripped, Green = Safe)',
      'Tested to IEC 60898-1 International Safety Standards'
    ]
  }
];

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  companyName: 'BARGAINPOWER & TECHNOLOGY',
  whatsappNumber: '+2348037704936',
  helpEmail: 'biockhelpdesk@gmail.com',
  topAnnouncement: 'Cutting-Edge Engineering: Home Automation · Microcontrollers · Contactors · Electric Vehicles · Aircraft Prototypes · Smart Snail Farming',
  address: 'Plot 14 Engineering Technology Corridor, Lagos / Abuja, Nigeria',
  heroHeadline: 'INNOVATIVE HARDWARE, AUTOMATION & ELECTRIC MOBILITY',
  heroSubheadline: 'We design and construct high-performance home automation panels, heavy-duty contactor systems, electric vehicles, carbon-fiber aircraft models, and solar IoT agricultural ecosystems.',
  socialLinks: {
    facebook: 'https://facebook.com/bargainpowertech',
    twitter: 'https://x.com/bargainpowertech',
    linkedin: 'https://linkedin.com/company/bargainpower-technology',
    youtube: 'https://youtube.com/@bargainpowertech',
    github: 'https://github.com/bargainpower'
  },
  customTexts: {}
};

export const DEFAULT_VIDEOS: VideoClipItem[] = [
  {
    id: 'vid-ev-bike-dyno',
    title: 'Custom 72V High-Torque Electric Bike Dyno & Acceleration Test',
    category: 'Electric Mobility',
    description: 'Bench testing our custom lithium-ion battery integration and brushless hub powertrain under 45° incline load. Features digital cockpit telemetry and regenerative braking tests.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: '/src/assets/images/electric_bike_custom_1790998717436.webp',
    duration: '04:18',
    uploadDate: '2026-03-12',
    views: 1420,
    tags: ['72V DC', 'Brushless Motor', 'E-Bike Dyno', 'Regenerative Braking'],
    featured: true,
    linkedComponents: [
      {
        id: 'motor-bldc-outrunner',
        name: 'High-Power Brushless BLDC Outrunner Motor (72V / 3kW)',
        price: 68000,
        image: '/src/assets/images/electric_bike_custom_1790998717436.webp'
      },
      {
        id: 'motor-esc-120a',
        name: '120A Heavy-Duty Sine Wave Electronic Speed Controller (ESC)',
        price: 54000,
        image: '/src/assets/images/contactors_3pole_ac_dc_1790998707179.webp'
      }
    ]
  },
  {
    id: 'vid-relay-switching-test',
    title: '16-Channel WiFi Relay Module: High-Amperage Inductive Load Test',
    category: 'Smart Automation',
    description: 'Rigorous 250VAC 10A switching demonstration triggering 3-phase borehole pumps and perimeter floodlights with zero optocoupler crosstalk and instant Tuya/MQTT telemetry.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: '/src/assets/images/relay_16ch_wifi_1790998673524.webp',
    duration: '03:45',
    uploadDate: '2026-03-24',
    views: 980,
    tags: ['16-Channel Relay', 'Tuya Smart', 'MQTT', 'Optocoupler Isolation'],
    featured: false,
    linkedComponents: [
      {
        id: 'mcu-esp32',
        name: '24-Channel ESP32 IoT Relay & Automation Controller',
        price: 85000,
        image: '/src/assets/images/esp32_relay_24ch_1791552285027.jpg'
      },
      {
        id: 'contactor-3p-40a',
        name: '3-Pole 40A AC Magnetic Contactor',
        price: 48000,
        image: '/src/assets/images/contactors_3pole_ac_dc_1790998707179.webp'
      }
    ]
  },
  {
    id: 'vid-fire-suppression-demo',
    title: 'Automatic Electrical Fire Extinguisher 68°C Thermal Burst Demonstration',
    category: 'Panel Protection',
    description: 'Controlled live electrical panel test inside an enclosed DB cabinet. Thermal bulb shatters at exactly 68°C, deploying non-conductive ABC clean agent to suppress fire in under 2.8 seconds.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl: '/src/assets/images/fire_extinguisher_auto_1791552230446.jpg',
    duration: '02:50',
    uploadDate: '2026-04-02',
    views: 2150,
    tags: ['Thermal Bulb', 'Fire Suppression', 'DB Board Safety', 'Clean Agent'],
    featured: true,
    linkedComponents: [
      {
        id: 'sec-fire-ext-canister',
        name: 'Automatic Electrical Fire Extinguisher Canister (68°C Thermal Bulb)',
        price: 64000,
        image: '/src/assets/images/fire_extinguisher_auto_1791552230446.jpg'
      },
      {
        id: 'breaker-3p-mcb-63a',
        name: '3-Pole 63A DIN Rail Miniature Circuit Breaker (MCB)',
        price: 42000,
        image: '/src/assets/images/breakers_3pole_industrial_1790998696308.webp'
      }
    ]
  },
  {
    id: 'vid-esp32-panel-assembly',
    title: '24-Channel ESP32 Dual-Core Industrial Controller Assembly & Home Assistant Setup',
    category: 'Microcontrollers',
    description: 'Detailed bench walkthrough of wiring 24 optoisolated channels to DIN-rail dual power supplies (12V & 5V), programming local web server dashboards, and deterministic fail-safe tripping.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: '/src/assets/images/esp32_relay_24ch_1791552285027.jpg',
    duration: '06:12',
    uploadDate: '2026-04-09',
    views: 1730,
    tags: ['ESP32', 'Home Assistant', 'DIN Rail SMPS', 'Automation Blueprint'],
    featured: false,
    linkedComponents: [
      {
        id: 'mcu-esp32',
        name: '24-Channel ESP32 IoT Relay & Automation Controller',
        price: 85000,
        image: '/src/assets/images/esp32_relay_24ch_1791552285027.jpg'
      },
      {
        id: 'mcu-power-supply-din',
        name: 'Industrial DIN-Rail Dual Power Supply (12VDC 10A & 5VDC 2A)',
        price: 42000,
        image: '/src/assets/images/power_supply_din_1791552295224.jpg'
      }
    ]
  },
  {
    id: 'vid-ats-contactor-schematic',
    title: 'Three-Phase Automatic Transfer Switch (ATS) 63A Wiring & Arc Snubber Guide',
    category: 'Lab Tests & Guides',
    description: 'Laboratory tutorial on wiring 3-pole 63A AC magnetic contactors with mechanical interlocking for generator and national grid automatic changeovers.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: '/src/assets/images/contactors_3pole_ac_dc_1790998707179.webp',
    duration: '05:30',
    uploadDate: '2026-04-12',
    views: 3100,
    tags: ['ATS Transfer', '3-Pole 63A', 'Contactor Interlock', 'Electrical Wiring'],
    featured: false,
    linkedComponents: [
      {
        id: 'contactor-3p-63a',
        name: '3-Pole 63A Heavy-Duty AC Magnetic Contactor',
        price: 72000,
        image: '/src/assets/images/contactors_3pole_ac_dc_1790998707179.webp'
      },
      {
        id: 'breaker-4p-mccb-100a',
        name: '4-Pole 100A Molded Case Circuit Breaker (MCCB)',
        price: 78000,
        image: '/src/assets/images/breakers_3pole_industrial_1790998696308.webp'
      }
    ]
  }
];
