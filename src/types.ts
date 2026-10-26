export type PageTab = 
  | 'home' 
  | 'components'
  | 'sensors' 
  | 'microcontrollers' 
  | 'contactors' 
  | 'breakers' 
  | 'servo' 
  | 'security'
  | 'kincony'
  | 'cctv'
  | 'services' 
  | 'video'
  | 'faq' 
  | 'reviews' 
  | 'contact' 
  | 'admin';

export interface CctvItem {
  id: string;
  name: string;
  model: string;
  category: 'Smart AI Cameras' | 'NVR Network Video Recorders' | 'DVR / XVR Hybrid Recorders' | 'PoE Cameras' | 'Complete PoE Kits' | 'AI PTZ & Speed Domes';
  resolution: string;
  channels?: string;
  lensType: string;
  nightVision: string;
  connectivity: string;
  audio: string;
  storage: string;
  powerMethod: string;
  weatherproofRating: string;
  aiFeatures: string[];
  features: string[];
  applications: string[];
  image: string;
  price?: number;
}

export interface KinconyItem {
  id: string;
  model: string;
  name: string;
  category: 'Relay Controller' | 'MOSFET Controller' | 'Energy Meter & Dimmer' | 'Gateway & Wireless' | 'Development Board' | 'Smart Voice & Panel' | 'Smart Controller';
  cpu: string;
  description: string;
  features: string[];
  applications: string[];
  specs: {
    digitalOutputs?: string | null;
    digitalInputs?: string | null;
    analogOutputs?: string | null;
    analogInputs?: string | null;
    communication: string[];
    powerSupply: string;
    cover: string;
    dinRail: boolean;
    manualSwitch?: boolean;
    lcd?: boolean;
    rtc?: boolean;
    poe?: boolean;
    sdCard?: boolean;
    tuya?: boolean;
    voiceControl?: boolean;
  };
  image: string;
  productUrl: string;
  price?: number;
}

export interface SensorItem {
  id: string;
  name: string;
  category: 'Surveillance & Security' | 'Environmental & Temperature' | 'Fire & Smoke Safety' | 'Proximity & Motion' | 'Level & Flow';
  compatibleWith: string[];
  operatingVoltage: string;
  pinout: string;
  workingPrinciple: string;
  homeAutomationUses: string;
  image: string;
  tags: string[];
  price?: number;
}

export interface MicrocontrollerItem {
  id: string;
  name: string;
  processor: string;
  clockSpeed: string;
  flashMemory: string;
  sram: string;
  operatingVoltage: string;
  gpioPins: string;
  wirelessConnectivity: string;
  homeAutomationRole: string;
  recommendedUseCases: string[];
  image: string;
  price?: number;
}

export interface ContactorItem {
  id: string;
  name: string;
  powerType: 'AC Powered' | 'DC Powered';
  poles: '1-Pole' | '2-Pole' | '3-Pole';
  ratedCurrent: string;
  coilVoltage: string;
  connectionDiagramDescription: string;
  terminalDetails: string;
  homeIndustrialApplications: string;
  wiringDiagramSvgType: 'ac_3pole' | 'dc_contactor' | 'ac_single_pole' | 'ac_2pole';
  image?: string;
  price?: number;
}

export interface BreakerItem {
  id: string;
  name: string;
  poles: '1-Pole (1P)' | '2-Pole (2P)' | '3-Pole (3P)' | '4-Pole (4P)';
  type: 'MCB (Miniature Circuit Breaker)' | 'MCCB (Molded Case)' | 'Smart WiFi Breaker' | 'RCBO / Earth Leakage';
  tripCurve: 'B Curve (3-5x In)' | 'C Curve (5-10x In)' | 'D Curve (10-20x In)' | 'Smart Microprocessor Trip';
  currentRatings: string;
  breakingCapacity: string;
  automationNeedReason: string;
  smartCapabilities: string;
  image?: string;
  price?: number;
}

export interface SecurityItem {
  id: string;
  name: string;
  category: 'Fire Suppression' | 'Gas & Smoke Warning' | 'Enclosure Safety' | 'Power Isolation';
  operatingSpecs: string;
  activationMechanism: string;
  idealFor: string[];
  homeAutomationRole: string;
  image: string;
  features: string[];
  price?: number;
}

export interface MotorItem {
  id: string;
  name: string;
  category: 'Servo Motor' | 'Stepper Motor' | 'ESC & Driver' | 'High-Power BLDC';
  torqueRating: string;
  voltage: string;
  controlMethod: string;
  applications: string[];
  description: string;
  image?: string;
  price?: number;
}

export interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  startingPrice?: string;
  highlights: string[];
  deliverables: string[];
  image: string;
  price?: number;
}

export interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface DigitalReceipt {
  receiptNumber: string;
  transactionRef: string;
  paymentMethod: string;
  bankName: string;
  virtualAccount: string;
  amountPaid: number;
  currency: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  deliveryAddress: string;
  verifiedAt: string;
  verificationSource: string;
  authSignature: string;
}

export interface ShippingInfo {
  status: 'Pending Dispatch' | 'In Transit' | 'Delivered';
  carrier: string;
  trackingNumber: string | null;
  dispatchDate: string | null;
  estimatedDelivery: string;
  notes?: string;
  destination: string;
  items: CartItem[];
  updatedAt: string;
}

export interface OrderRecord {
  orderId: string;
  reference: string;
  provider: 'Paystack' | 'Monnify';
  status: 'Pending Payment' | 'Paid' | 'Failed' | 'Processing';
  failureReason?: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    notes?: string;
  };
  items: CartItem[];
  totalAmount: number;
  currency: string;
  virtualAccount: {
    bankName: string;
    bankCode: string;
    accountNumber: string;
    accountName: string;
    amount: number;
    currency: string;
    expiresAt: string;
  };
  createdAt: string;
  paidAt: string | null;
  receipt: DigitalReceipt | null;
  shipping: ShippingInfo | null;
}

export interface UndergraduateEngineeringGuide {
  field: 'Electrical Engineering' | 'Mechanical Engineering' | 'Mechatronics Engineering';
  overview: string;
  industryApplications: string[];
  whatMakesAGoodProject: string[];
  recommendedProjects: {
    title: string;
    description: string;
    hardwareTools: string[];
    skillsGained: string;
  }[];
}

export interface FaqItem {
  id: string;
  category: 'microcontrollers' | 'contactors' | 'relays' | 'services' | 'training';
  question: string;
  answer: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  companyOrRole: string;
  rating: number;
  comment: string;
  serviceRelated: string;
  date: string;
  approved: boolean;
}

export interface InquirySubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceInterested: string;
  projectBudget?: string;
  message: string;
  timestamp: string;
  captchaVerified: boolean;
  status: 'New' | 'In Review' | 'Replied';
  replies: {
    id: string;
    text: string;
    sentAt: string;
    author: string;
  }[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot' | 'team';
  text: string;
  timestamp: string;
  status?: 'Active' | 'Escalated to Team' | 'Resolved';
  userContact?: {
    name?: string;
    phone?: string;
    email?: string;
  };
  replies?: {
    id: string;
    text: string;
    sentAt: string;
    author: string;
    channel?: 'chat' | 'whatsapp' | 'both';
  }[];
}

export interface VisitorLog {
  id: string;
  ip: string;
  device: string;
  browser: string;
  pageVisited: string;
  timestamp: string;
}

export interface HeroSlide {
  id: number | string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  image: string;
  actionText: string;
}

export interface HomeSectionItem {
  id: string;
  badge: string;
  question: string;
  leadParagraph: string;
  bodyParagraph: string;
  highlights: string[];
  image: string;
  primaryActionText: string;
  primaryActionTarget: PageTab;
  secondaryActionText: string;
}

export interface VideoClipItem {
  id: string;
  title: string;
  category: 'Electric Mobility' | 'Smart Automation' | 'Panel Protection' | 'Microcontrollers' | 'Lab Tests & Guides';
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: string;
  uploadDate: string;
  views?: number;
  tags: string[];
  featured?: boolean;
  linkedComponents?: {
    id: string;
    name: string;
    price: number;
    image?: string;
  }[];
}

export type CmsSection = 
  | 'hero_slides' 
  | 'home_sections' 
  | 'sensors' 
  | 'microcontrollers' 
  | 'contactors' 
  | 'breakers' 
  | 'servo' 
  | 'security' 
  | 'services'
  | 'videos'
  | 'kincony'
  | 'cctv';

export interface SiteSettings {
  companyName: string;
  whatsappNumber: string;
  helpEmail: string;
  topAnnouncement: string;
  address: string;
  heroHeadline: string;
  heroSubheadline: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
    youtube: string;
    github: string;
  };
  customTexts: Record<string, string>;
}
