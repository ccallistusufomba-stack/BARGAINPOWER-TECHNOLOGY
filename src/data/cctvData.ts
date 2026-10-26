// Smart CCTV, NVR, DVR, and PoE Surveillance Systems Catalog
// Sourced from Cloud Security Technology (https://cloudsecurity.com.ng/#)
// Contains complete smart CCTV cameras, NVRs, DVRs, PoE cameras, and turnkey kits
// with comprehensive technical specifications, hardware/AI features, and real-world applications

import { CctvItem } from '../types';

export const CCTV_DATA: CctvItem[] = [
  {
    id: 'cctv-bullet-4k-ai',
    name: '8MP 4K Ultra HD AI Smart Bullet Camera (PoE)',
    model: 'CS-B800-4K-AI',
    category: 'Smart AI Cameras',
    resolution: '8MP 4K Ultra HD (3840 × 2160) @ 30fps',
    lensType: '2.8mm Ultra-Wide Fixed Lens (108° Field of View)',
    nightVision: '40m ColorHunter Full-Color Day/Night + Starlight IR',
    connectivity: 'Standard PoE (IEEE 802.3af) / RJ45 100M Ethernet',
    audio: 'Built-in High-Sensitivity Microphone & Speaker (2-Way Audio)',
    storage: 'MicroSD Slot up to 512GB + NVR Continuous Stream',
    powerMethod: 'Power over Ethernet (PoE 48V) or 12V DC Auxiliary',
    weatherproofRating: 'IP67 Heavy-Duty Aluminum Weatherproof Housing',
    aiFeatures: [
      'License Plate Recognition (ANPR / LPR) with automated barrier gate trigger',
      'Deep Learning Human and Vehicle Classification (eliminates false insect/wind alerts)',
      'Virtual Perimeter Tripwire & Line Crossing Detection',
      'Face Detection & Real-time Facial Image Capture'
    ],
    features: [
      'Next-generation H.265+ smart video compression (saves up to 80% bandwidth)',
      'True 120dB Wide Dynamic Range (WDR) for crisp imaging against intense sunlight',
      'Dual-stream network video encoding for lag-free mobile streaming',
      'Active deterrence white strobe light with programmable voice warning prompt',
      'Seamless ONVIF Profile S/G/T compliance with third-party NVRs & Home Assistant'
    ],
    applications: [
      'Residential gated estate perimeter fences and driveway entry checkpoints',
      'Banking branch cash drop zones, ATM lobbies, and bullion vault gates',
      'Commercial warehouse high-bay loading bays and dispatch docks',
      'Fuel station pump islands and vehicle forecourt surveillance',
      'Agricultural farm boundary fencing and automated livestock surveillance'
    ],
    image: '/src/assets/images/cctv_poe_bullet_camera_1792362677536.jpg',
    price: 68000
  },
  {
    id: 'cctv-dome-4k-ik10',
    name: '4K Vandal-Proof AI Dome Security Camera (PoE)',
    model: 'CS-D800-IK10-AI',
    category: 'PoE Cameras',
    resolution: '8MP 4K UHD (3840 × 2160) Crystal Clarity',
    lensType: '2.8mm – 12mm Motorized Varifocal Optical Zoom Lens',
    nightVision: '30m Smart Matrix IR Night Vision with Zero Glow',
    connectivity: 'PoE (802.3af) / RJ45 Ethernet Network Interface',
    audio: 'Integrated Noise-Canceling Microphone (Audio Recording)',
    storage: 'Onboard MicroSD Slot up to 512GB + Central NVR Recording',
    powerMethod: 'PoE (48V) / 12V DC Auxiliary In',
    weatherproofRating: 'IK10 Impact Vandal-Proof & IP67 Dust/Waterproof',
    aiFeatures: [
      'Automated People Counting with Foot-Traffic Density Heatmaps',
      'Customer Loitering & Intrusion Stay-Duration Monitoring',
      'Object Abandoned / Luggage Left Behind Detection',
      'Face Capture with Metadata Attribute Logging'
    ],
    features: [
      'Toughened polycarbonate optical dome resistant to blunt physical strikes (IK10)',
      'Motorized optical zoom with autofocus controllable from mobile app or NVR',
      'Smart IR anti-reflection ring prevents nighttime infrared fogging and glare',
      'Corridor format 9:16 aspect ratio mode for narrow hotel and hospital hallways',
      'Zero-latency sub-stream for simultaneous live streaming on multiple client devices'
    ],
    applications: [
      'Supermarket checkout counters and retail shopping mall aisles',
      'Corporate boardroom corridors, reception areas, and server room suites',
      'Hospital emergency room entrances and pharmacy dispensary counters',
      'Commercial passenger elevator cabs and residential stairwells',
      'School campus indoor common rooms, libraries, and laboratories'
    ],
    image: '/src/assets/images/cctv_poe_dome_camera_1792362692208.jpg',
    price: 62000
  },
  {
    id: 'cctv-nvr-16ch-4k',
    name: '16-Channel 4K Ultra HD PoE Network Video Recorder (NVR)',
    model: 'CS-NVR16-4K-POE',
    category: 'NVR Network Video Recorders',
    resolution: 'Up to 12MP / 4K UHD Decoding & Recording per Channel',
    channels: '16 Independent PoE Ports (Plug & Play Power + Data)',
    lensType: 'High-Throughput 160Mbps Incoming Bandwidth Controller',
    nightVision: 'Centralized Day/Night Stream Processing & Scheduling',
    connectivity: '16× PoE RJ45 Ports, 1× Gigabit LAN WAN Port, RS485 Port',
    audio: '1× RCA Audio In / 1× RCA Audio Out for Intercom Console',
    storage: '2× SATA HDD Bays (Supports up to 32TB Storage Capacity)',
    powerMethod: 'AC 110V – 240V Internal High-Efficiency Power Supply',
    weatherproofRating: 'Standard 1U Rackmount / Desktop Metal Chassis',
    aiFeatures: [
      'Centralized Face Recognition Database with 10,000 Facial Profiles',
      'Smart Target Search: Filter 1,000s of hours of footage by Person or Vehicle in seconds',
      'Simultaneous multi-channel smart event playback and quick timeline bookmarks',
      'Automated Alarm Trigger: Push notifications, buzzer alert, and email snapshots'
    ],
    features: [
      '16 Built-in PoE Ports provide plug-and-play power and video over single Cat6 cables',
      'Ultra H.265 / H.265+ compression doubles recording time on standard hard drives',
      'Independent HDMI 4K UHD (3840×2160) and VGA 1080P simultaneous outputs',
      'Free CloudSecurity Mobile App (iOS / Android) with rapid QR Code P2P pairing',
      'Custom motion masking to block public sidewalks and respect privacy laws'
    ],
    applications: [
      'Multi-tenant residential compounds and luxury private villas in Nigeria',
      'Commercial office buildings, co-working hubs, and boutique hotel facilities',
      'Manufacturing factories, assembly lines, and raw materials inventory stores',
      'Automotive car dealerships, auto workshops, and spare parts warehouses',
      'Agricultural farm facilities, poultry coops, and remote processing depots'
    ],
    image: '/src/assets/images/cctv_4k_nvr_recorder_1792362707557.jpg',
    price: 175000
  },
  {
    id: 'cctv-nvr-32ch-ent',
    name: '32-Channel Enterprise 4K Ultra NVR Recorder (4-SATA)',
    model: 'CS-NVR32-4K-ENT',
    category: 'NVR Network Video Recorders',
    resolution: '12MP / 4K Extreme Resolution Recording on All 32 Channels',
    channels: '32 IP Channels via Enterprise PoE Gigabit Switch',
    lensType: 'Enterprise 320Mbps Throughput with Hardware RAID Support',
    nightVision: 'Enterprise Video Wall Matrix Support & Multi-Screen Splitting',
    connectivity: 'Dual Gigabit LAN Ports (Failover / Multi-Subnet Routing)',
    audio: 'Multi-Channel Audio Matrix & Two-Way Security Guard Dispatch',
    storage: '4× SATA HDD Bays (Supports up to 64TB Total Capacity)',
    powerMethod: 'AC 100V – 240V Redundant Industrial Power Supply',
    weatherproofRating: '1.5U 19-inch Server Rack Mount Heavy-Duty Enclosure',
    aiFeatures: [
      'Multi-Camera Target Tracking: Follow a suspect camera-to-camera across facility',
      'Vehicle Color, Plate Number, and Speed Attribute Meta-tagging',
      'Crowd Gathering Detection & Perimeter Loitering Early Warning',
      'Facial Comparison with Blacklist Instant Alarm for Restricted Zones'
    ],
    features: [
      'Massive 32-channel simultaneous recording with zero dropped frames at 4K',
      'Dual Gigabit network cards allow isolating CCTV camera traffic from corporate LAN',
      'RAID 0, 1, 5, 6, 10 disk redundancy prevents footage loss if an HDD fails',
      'Central Management System (CMS) software supports up to 256 connected NVRs',
      'Automated scheduled backup to offsite FTP servers, NAS, and secure cloud'
    ],
    applications: [
      'Large university campuses, secondary schools, and teaching hospitals',
      'Commercial shipping ports, airport logistics bays, and cargo terminals',
      'State-wide bank branch networks with centralized security operations center',
      'Government secretariat complexes, ministries, and high-security embassies',
      'Extensive industrial estates and manufacturing plants across Nigeria'
    ],
    image: '/src/assets/images/cctv_4k_nvr_recorder_1792362707557.jpg',
    price: 285000
  },
  {
    id: 'cctv-xvr-8ch-hybrid',
    name: '8-Channel 5MP/4K Hybrid DVR / XVR Video Recorder',
    model: 'CS-XVR800-5M-HYB',
    category: 'DVR / XVR Hybrid Recorders',
    resolution: '5MP / 4K UHD Hybrid Video Processing & Recording',
    channels: '8 BNC Coaxial Ports + 4 Additional IP Channels (12 Total)',
    lensType: 'Universal 5-in-1 Auto-Detect Video Signal Processor',
    nightVision: 'Enhanced Night Noise Reduction 3D-DNR for Analog/IP',
    connectivity: '8× BNC Video In, 1× RJ45 Ethernet, 2× USB, 1× HDMI, 1× VGA',
    audio: 'Audio-over-Coax (AoC) Support on all 8 BNC Channels + RCA In/Out',
    storage: '1× SATA Port supporting up to 16TB Surveillance Hard Drive',
    powerMethod: '12V DC External Low-Noise Power Adapter',
    weatherproofRating: 'Compact Desktop Metal Body with Quiet Heat Dissipation',
    aiFeatures: [
      'Smart Motion Detection 2.0: Distinguishes between humans, vehicles, and pets',
      'Quick Search by Event Type directly on the local monitor or phone',
      'Real-time push notifications to smartphone when boundary line is crossed'
    ],
    features: [
      '5-in-1 Hybrid Compatibility: Automatically detects HD-TVI, AHD, CVI, CVBS, and IP',
      'Audio-over-Coaxial: Transmits crisp audio along existing coaxial cable without extra wire',
      'H.265 Pro+ encoding reduces storage consumption by up to 75% compared to H.264',
      'Long-distance coaxial video transmission up to 800 meters over RG59 cable',
      'Full P2P cloud connectivity for viewing anywhere in the world on iOS and Android'
    ],
    applications: [
      'Upgrading older analog CCTV installations without replacing existing coaxial cables',
      'Residential houses and small business shops with legacy wiring',
      'Pharmacies, retail boutiques, and restaurants transitioning to high definition',
      'Private clinic waiting rooms and dental offices',
      'Storage yards and workshops with long coaxial cable runs'
    ],
    image: '/src/assets/images/cctv_hybrid_dvr_system_1792362721665.jpg',
    price: 85000
  },
  {
    id: 'cctv-xvr-16ch-hybrid',
    name: '16-Channel 5MP Ultra HD Hybrid XVR / DVR Video Recorder',
    model: 'CS-XVR1600-5M-HYB',
    category: 'DVR / XVR Hybrid Recorders',
    resolution: '5MP Ultra HD on all 16 BNC Analog Channels + 8 IP Channels',
    channels: '16 BNC Coaxial Ports + 8 IP Channels (24 Channels Total)',
    lensType: 'High-Capacity Coaxial & IP Dual-Architecture Processor',
    nightVision: 'Intelligent Contrast Adaptation for Dim Lighting Cameras',
    connectivity: '16× BNC In, 1× RJ45 Gigabit LAN, 2× USB, HDMI 4K + VGA Out',
    audio: '16-Channel Audio-over-Coax + 4 RCA Audio Inputs & 1 Output',
    storage: '2× SATA Bays supporting up to 32TB (2× 16TB Storage)',
    powerMethod: '12V DC 5A High-Grade Power Adapter',
    weatherproofRating: '1U Rackmount / Desktop Robust Metal Housing',
    aiFeatures: [
      'Full-Channel AI Motion Detection 2.0 with Human/Vehicle Target Filtering',
      '2-Channel Perimeter Protection & Virtual Tripwire Analytics',
      'Instant Smart Search for fast forensic retrieval of recorded video'
    ],
    features: [
      'Supports mixed camera setups: Keep existing coaxial cameras and add new 4K IP cameras',
      'H.265+ multi-stream hardware compression extends hard drive storage lifespan',
      'HDMI 4K high-resolution monitor display output for security guard consoles',
      'Comprehensive PTZ control support via RS485 and Coaxial Up-the-Coax protocol',
      'CloudSecurity Cloud P2P remote monitoring with multi-user access permissions'
    ],
    applications: [
      'Commercial shopping complexes upgrading from older fuzzy analog CCTV systems',
      'School campuses and private colleges with existing underground coaxial lines',
      'Warehousing and distribution centers needing both indoor and perimeter coverage',
      'Automobile mechanics and car dealerships with multiple service bays',
      'Large residential estates requiring reliable continuous offline recording'
    ],
    image: '/src/assets/images/cctv_hybrid_dvr_system_1792362721665.jpg',
    price: 135000
  },
  {
    id: 'cctv-kit-8ch-poe',
    name: '8-Camera 4K Ultra HD PoE Complete Security System Kit',
    model: 'CS-KIT8-4K-POE',
    category: 'Complete PoE Kits',
    resolution: '4K 8MP Ultra HD (3840 × 2160) on All 8 Cameras',
    channels: '8 PoE Channels (Includes 4 Bullet Cameras + 4 Dome Cameras)',
    lensType: '2.8mm Ultra-Wide Angle Lenses with 110° Field of View',
    nightVision: '40m ColorHunter Full-Color Night Vision + Starlight Infrared',
    connectivity: 'Plug-and-Play PoE over Single Cat6 Cable (Power + Video + Audio)',
    audio: 'Full Two-Way Audio on Bullet Cameras + Built-in Mic on Domes',
    storage: 'Includes Pre-Installed 2TB Surveillance Hard Drive (Expandable to 16TB)',
    powerMethod: 'Single NVR Power Cord Powers All 8 Cameras via PoE',
    weatherproofRating: 'IP67 Metal Waterproof (Bullets) & IK10 Vandal-Proof (Domes)',
    aiFeatures: [
      'Smart Human and Vehicle Detection with Zero False Alarm Filtering',
      'Active Deterrence: Red/Blue LED flash and customizable speaker warning siren',
      'Instant Smartphone App Push Notifications with Snapshot Preview'
    ],
    features: [
      'Complete All-in-One Turnkey Kit: 1× 8CH 4K PoE NVR, 4× 4K Bullets, 4× 4K Domes, 8× 30m Cat6 Cables',
      'Zero Network Setup: Plug each camera into NVR and picture appears instantly',
      'Pre-installed 2TB Western Digital Purple surveillance-grade hard drive included',
      'Free CloudSecurity mobile app with zero monthly cloud subscription fees',
      'Simultaneous live-view on smart TV, desktop PC, iPad, and smartphone'
    ],
    applications: [
      'Modern private duplexes, penthouses, and residential luxury homes in Lagos & Abuja',
      'Corporate headquarters, law firms, and financial consultancy offices',
      'Retail supermarkets, boutique showrooms, and high-value jewelry stores',
      'Community gated residential estate perimeters and security guardhouses',
      'Private hospitals, specialist medical centers, and surgical clinics'
    ],
    image: '/src/assets/images/cctv_poe_complete_kit_1792362736914.jpg',
    price: 420000
  },
  {
    id: 'cctv-kit-4ch-poe',
    name: '4-Camera 4K Ultra HD PoE Complete Security System Kit',
    model: 'CS-KIT4-4K-POE',
    category: 'Complete PoE Kits',
    resolution: '4K 8MP Ultra HD (3840 × 2160) Ultra-Sharp Video',
    channels: '4 PoE Channels (Includes 2 Outdoor Bullets + 2 Indoor Domes)',
    lensType: '2.8mm Wide Angle Precision Glass Lenses',
    nightVision: '30m Night Vision with Intelligent Ambient Light Sensing',
    connectivity: 'Standard 48V PoE over Single Cat6 Network Cable',
    audio: 'Built-in High-Sensitivity Audio Microphone on All Cameras',
    storage: 'Includes Pre-Installed 1TB Surveillance Hard Drive',
    powerMethod: 'PoE Powered Directly from Central NVR',
    weatherproofRating: 'IP67 Weatherproof Rated for Heavy Tropical Rainstorms',
    aiFeatures: [
      'AI Human Motion Detection with Instant Phone Alerts',
      'Smart Search Event Playback: Skip empty footage straight to movement',
      'Mobile App Remote Live Viewing & Playback with Digital Zoom'
    ],
    features: [
      'Ready-to-Deploy Kit: 1× 4CH 4K NVR, 2× 4K Bullets, 2× 4K Domes, 4× 20m Cat6 Cables, Mouse, HDMI Cable',
      'Pre-installed 1TB surveillance-certified hard drive provides weeks of recording',
      'Clean single-cable installation: No messy local power sockets required near cameras',
      'Works 100% locally offline for recording even when internet connectivity is down',
      'Supports optional cloud backup and remote P2P access when connected to router'
    ],
    applications: [
      'Single-family homes, townhouses, and residential apartments',
      'Small retail shops, salons, boutiques, and bakeries',
      'Remote storage units, inventory rooms, and lock-up garages',
      'Private office suites and accounting practices',
      'School administrative offices and student bursary counters'
    ],
    image: '/src/assets/images/cctv_poe_complete_kit_1792362736914.jpg',
    price: 260000
  },
  {
    id: 'cctv-ptz-speed-dome',
    name: 'AI High-Speed PTZ Auto-Tracking Speed Dome Camera (PoE+)',
    model: 'CS-PTZ500-30X-AI',
    category: 'AI PTZ & Speed Domes',
    resolution: '4K Ultra HD (3840 × 2160) @ 60fps High-Speed Imaging',
    lensType: '30× Optical Zoom + 16× Digital Zoom Motorized Telephoto Lens',
    nightVision: '150m Smart Laser Infrared Night Vision with Adaptive Beam',
    connectivity: 'PoE+ (IEEE 802.3at) High-Power / RJ45 1000M Ethernet',
    audio: 'High-Decibel Siren Speaker + Two-Way Audio Intercom System',
    storage: 'MicroSD Slot up to 512GB + Central NVR Live Tracking Stream',
    powerMethod: 'PoE+ (802.3at 30W) or 24V AC Industrial Power Supply',
    weatherproofRating: 'IP67 Weatherproof & 6kV Lightning Surge Protection',
    aiFeatures: [
      'Deep-Learning Human & Vehicle Auto-Tracking: Camera automatically rotates & zooms to follow intruder',
      'Preset Guard Tour: Automatically patrols up to 256 programmed preset viewpoints',
      'Auto-Return Home: Resumes designated security patrol position after event clears',
      'Active Deterrence: Blinding blue/red strobe light and 110dB siren upon line breach'
    ],
    features: [
      '360° Endless High-Speed Continuous Pan (up to 300°/second rotation speed)',
      '-15° to 90° Auto-Flip Tilt range for tracking subjects directly underneath camera',
      '30x Optical Zoom allows reading license plates and recognizing faces up to 250 meters away',
      'Heavy-duty cast aluminum wall mount bracket with integrated cable concealment',
      'Defrost and defog heating element for harsh morning humidity and rainy weather'
    ],
    applications: [
      'Large agricultural plantations, snail farms, poultry complexes, and cattle ranches',
      'Airport tarmac perimeters, logistics holding yards, and freight container terminals',
      'High-security gated community main boundary fences and estate perimeters',
      'Industrial quarry sites, mining locations, and construction developments',
      'Commercial sports stadiums, open parking facilities, and event centers'
    ],
    image: '/src/assets/images/cctv_ptz_speed_dome_1792362751336.jpg',
    price: 195000
  },
  {
    id: 'cctv-solar-4g-ptz',
    name: 'Off-Grid Solar-Powered 4G LTE PTZ Security Camera',
    model: 'CS-SOLAR-4G-PTZ',
    category: 'AI PTZ & Speed Domes',
    resolution: '4MP 2K Quad HD (2560 × 1440) Crisp Color Video',
    lensType: '4× Digital Zoom with 355° Pan and 90° Tilt Motorized Gimbal',
    nightVision: '30m Color Night Vision with High-Lumen White Spotlight',
    connectivity: '4G LTE SIM Card (Supports MTN, Airtel, Glo, 9mobile in Nigeria)',
    audio: 'Clear Two-Way Audio Talk with Built-in Speaker and Mic',
    storage: 'Supports MicroSD Card up to 256GB + Encrypted Cloud Backup',
    powerMethod: '60W Monocrystalline Solar Panel + 20,000mAh Rechargeable Lithium Battery',
    weatherproofRating: 'IP66 Rated for Sun, Torrential Rain, and Dust Resistance',
    aiFeatures: [
      'PIR + Radar Dual Detection: Wakes up in 0.2 seconds upon human presence',
      'Ultra-low power standby mode preserves battery during extended cloudy days',
      'Smart Phone Push Notifications with instant live streaming video'
    ],
    features: [
      '100% Wire-Free: No electrical wiring, no network cables, no WiFi needed',
      'High-efficiency solar panel continuously recharges the internal battery pack',
      '360° panoramic view controllable directly from smartphone app anywhere in the world',
      'Color Night Vision spotlights illuminate nighttime intruders in full vivid color',
      'Pre-configured for Nigerian 4G cellular bands with instant plug-and-play SIM connectivity'
    ],
    applications: [
      'Remote agricultural farms, fish ponds, and agro-allied processing locations in rural Nigeria',
      'Oil pipeline inspection valves, telecom mast stations, and remote solar power arrays',
      'Building construction sites without electrical grid power or internet service',
      'Weekend country homes, farmhouses, and isolated private properties',
      'Highway bridge surveillance, wildlife observation, and forestry monitoring'
    ],
    image: '/src/assets/images/cctv_ptz_speed_dome_1792362751336.jpg',
    price: 145000
  },
  {
    id: 'cctv-lpr-anpr-bullet',
    name: 'AI License Plate Recognition (ANPR / LPR) Bullet Camera',
    model: 'CS-LPR900-4K-AI',
    category: 'Smart AI Cameras',
    resolution: '4K Ultra HD (3840 × 2160) @ 60fps High-Speed Sensor',
    lensType: '5mm – 50mm Motorized Telephoto Lens with Automatic Focus',
    nightVision: '50m Starlight Optical Sensor with Headlight Glare Suppression',
    connectivity: 'PoE+ (802.3at) / RJ45 Gigabit Ethernet / RS485 / Wiegand',
    audio: 'Integrated Audio Line-In and Alarm Relay Trigger Output',
    storage: 'MicroSD Slot up to 512GB + Central ANPR Database Server',
    powerMethod: 'PoE+ or 12V DC Auxiliary Input',
    weatherproofRating: 'IP67 Metal Housing with Integrated Sunshield & Rain Visor',
    aiFeatures: [
      'Embedded Optical Character Recognition (OCR) reads license plates up to 120 km/h',
      'Automated White-List & Black-List Database: Triggers automatic boom barrier gate',
      'Captures vehicle color, vehicle type, and timestamp metadata alongside plate text',
      'Instant Security Alert when blacklisted or unregistered vehicle is detected'
    ],
    features: [
      'Specialized Anti-Glare Shutter technology neutralizes vehicle high-beam headlights',
      'Direct dry-contact relay output connects directly to automated boom barrier gates',
      'Wiegand protocol output for seamless integration with commercial access control systems',
      'High frame rate 60fps guarantees sharp, blur-free capture of moving vehicle plates',
      'Database stores up to 50,000 license plate records locally inside the camera'
    ],
    applications: [
      'Commercial office park and corporate headquarters entry security boom gates',
      'Residential estate access control gates with automatic resident barrier lift',
      'Hotel valet and customer parking garage ticketing and entry authentication',
      'Toll collection plazas, weighbridges, and logistics dispatch checkpoints',
      'Airport long-term parking lots and government ministry restricted access zones'
    ],
    image: '/src/assets/images/cctv_poe_bullet_camera_1792362677536.jpg',
    price: 165000
  }
];
