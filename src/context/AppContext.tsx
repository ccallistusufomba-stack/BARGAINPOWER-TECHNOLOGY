import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  PageTab, 
  SiteSettings, 
  InquirySubmission, 
  ChatMessage, 
  VisitorLog, 
  ReviewItem,
  HeroSlide,
  HomeSectionItem,
  CmsSection,
  SensorItem,
  MicrocontrollerItem,
  ContactorItem,
  BreakerItem,
  SecurityItem,
  MotorItem,
  ServiceDetail,
  CartItem,
  VideoClipItem,
  KinconyItem,
  CctvItem
} from '../types';
import { 
  DEFAULT_SITE_SETTINGS, 
  REVIEWS_DATA,
  HERO_SLIDES,
  DEFAULT_HOME_SECTIONS,
  SENSORS_DATA,
  MICROCONTROLLERS_DATA,
  CONTACTORS_DATA,
  BREAKERS_DATA,
  MOTORS_DATA,
  SECURITY_DATA,
  SERVICES_DATA,
  DEFAULT_VIDEOS
} from '../data/mockData';
import { KINCONY_DATA } from '../data/kinconyData';
import { CCTV_DATA } from '../data/cctvData';
import { sanitizeInput } from '../utils/sanitize';
import { getItemPrice } from '../utils/pricing';

interface AppContextType {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  subPageTitle: string | null;
  setSubPageTitle: (title: string | null) => void;
  
  // Cart & Checkout
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (item: any, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateCartQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  buyNow: (item: any) => void;
  isCheckoutOpen: boolean;
  openCheckout: (itemToBuyDirectly?: any) => void;
  closeCheckout: () => void;
  directBuyItem: CartItem | null;

  // Custom Project / Quote modal
  isQuoteModalOpen: boolean;
  openQuoteModal: (initialService?: string) => void;
  closeQuoteModal: () => void;
  quoteModalService: string;

  // Admin Authentication & Team Mode
  isAdminLoggedIn: boolean;
  isEditMode: boolean;
  toggleEditMode: () => void;
  loginAdmin: (password: string, emailOrUser?: string) => boolean;
  logoutAdmin: () => void;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;

  // Live CMS Content (Editable Images & Text directly without coding)
  heroSlides: HeroSlide[];
  homeSections: HomeSectionItem[];
  sensorsData: SensorItem[];
  microcontrollersData: MicrocontrollerItem[];
  contactorsData: ContactorItem[];
  breakersData: BreakerItem[];
  motorsData: MotorItem[];
  securityData: SecurityItem[];
  servicesData: ServiceDetail[];
  videosData: VideoClipItem[];
  kinconyData: KinconyItem[];
  cctvData: CctvItem[];

  // Video Clip Actions
  addVideoClip: (video: Omit<VideoClipItem, 'id' | 'uploadDate' | 'views'>) => void;
  deleteVideoClip: (id: string) => void;
  updateVideoClip: (id: string, updates: Partial<VideoClipItem>) => void;
  updateKinconyItem: (id: string, updates: Partial<KinconyItem>) => void;
  updateCctvItem: (id: string, updates: Partial<CctvItem>) => void;

  // CMS Mutation Actions
  updateItemImage: (section: CmsSection, itemId: string | number, newImageUrl: string) => void;
  deleteItemImage: (section: CmsSection, itemId: string | number) => void;
  updateItemText: (section: CmsSection, itemId: string | number, updates: Record<string, any>) => void;
  addItem: (section: CmsSection, newItem: any) => void;
  deleteItem: (section: CmsSection, itemId: string | number) => void;
  resetSectionToDefault: (section: CmsSection) => void;
  resetAllContentToDefault: () => void;

  // Site Settings & CMS
  settings: SiteSettings;
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
  updateCustomText: (key: string, value: string) => void;
  resetSettingsToDefault: () => void;

  // Inquiries
  inquiries: InquirySubmission[];
  addInquiry: (inquiry: Omit<InquirySubmission, 'id' | 'timestamp' | 'status' | 'replies'>) => { success: boolean; id: string };
  replyToInquiry: (inquiryId: string, replyText: string, author?: string) => void;
  deleteInquiry: (inquiryId: string) => void;

  // Chat Triage
  chatMessages: ChatMessage[];
  isChatOpen: boolean;
  toggleChat: () => void;
  sendUserMessage: (text: string) => void;
  sendUserContactInfo: (contact: { name: string; phone: string; email: string }) => void;
  sendTeamReplyToChat: (replyText: string) => void;
  replyToHandoverRequest: (
    requestId: string,
    replyText: string,
    channel: 'chat' | 'whatsapp' | 'both',
    targetPhone?: string,
    author?: string
  ) => void;
  isEscalated: boolean;
  unreadAdminChats: number;

  // Visitor Logging
  visitorLogs: VisitorLog[];
  visitorCount: number;

  // Reviews
  reviews: ReviewItem[];
  addReview: (review: Omit<ReviewItem, 'id' | 'date' | 'approved'>) => void;
  toggleReviewApproval: (id: string) => void;
  deleteReview: (id: string) => void;
}

const STORAGE_KEYS = {
  SETTINGS: 'bp_site_settings',
  INQUIRIES: 'bp_inquiries',
  CHAT_MESSAGES: 'bp_chat_messages',
  VISITOR_LOGS: 'bp_visitor_logs',
  REVIEWS: 'bp_reviews',
  ADMIN_LOGGED_IN: 'bp_admin_logged_in',
  EDIT_MODE: 'bp_edit_mode',
  CMS_DATA: 'bp_cms_data'
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const INITIAL_BOT_MESSAGE: ChatMessage = {
  id: 'msg-init-1',
  sender: 'bot',
  text: 'Hello and welcome to BARGAINPOWER & TECHNOLOGY! How can we assist you today? You can ask about our 16-channel WiFi relays, 3-pole contactors, circuit breakers, custom electric vehicles/bikes, or smart agricultural irrigation. Type "agent" anytime to speak with our technical team.',
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  status: 'Active'
};

const INITIAL_CHAT_MESSAGES: ChatMessage[] = [
  INITIAL_BOT_MESSAGE,
  {
    id: 'msg-sample-handover-1',
    sender: 'user',
    text: 'Hello, our factory ATS transfer switch keeps tripping when our 3-phase borehole pump engages. We need an on-site engineer or guidance on installing a 3-pole 63A contactor with snubber arc protection. Can someone WhatsApp or call me on +2348037704936?',
    timestamp: new Date(Date.now() - 3600000 * 2).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    status: 'Escalated to Team',
    userContact: {
      name: 'Engr. Kenneth Adeleke',
      phone: '+2348037704936',
      email: 'k.adeleke@metroindustrial.com.ng'
    },
    replies: []
  },
  {
    id: 'msg-sample-handover-ack',
    sender: 'bot',
    text: 'Thank you, Engr. Kenneth Adeleke! Your request has been flagged as [Escalated to Team] on our live Admin Console. An engineer is reviewing your inquiry and can reply directly in this chat or via WhatsApp at +2348037704936.',
    timestamp: new Date(Date.now() - 3590000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    status: 'Escalated to Team'
  }
];

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTabState] = useState<PageTab>('home');
  const [subPageTitle, setSubPageTitle] = useState<string | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteModalService, setQuoteModalService] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Admin Auth State (Persisted)
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.ADMIN_LOGGED_IN) === 'true';
    } catch {
      return false;
    }
  });

  const [isEditMode, setIsEditMode] = useState<boolean>(() => {
    try {
      const val = localStorage.getItem(STORAGE_KEYS.EDIT_MODE);
      return val !== null ? val === 'true' : true;
    } catch {
      return true;
    }
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Cart & Checkout State
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem('bp_shopping_cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [directBuyItem, setDirectBuyItem] = useState<CartItem | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('bp_shopping_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const addToCart = (item: any, quantity: number = 1) => {
    const id = String(item.id || item.name);
    const resolvedPrice = getItemPrice(item);
    const name = item.name || item.title || 'Automation Component';
    const category = item.category || 'Components';
    const image = item.image;

    setCart(prev => {
      const existing = prev.find(i => i.id === id);
      if (existing) {
        return prev.map(i => i.id === id ? { ...i, quantity: i.quantity + quantity } : i);
      }
      return [...prev, { id, name, category, price: resolvedPrice, quantity, image }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(i => i.id !== itemId));
  };

  const updateCartQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prev => prev.map(i => i.id === itemId ? { ...i, quantity } : i));
  };

  const clearCart = () => {
    setCart([]);
  };

  const buyNow = (item: any) => {
    const id = String(item.id || item.name);
    const resolvedPrice = getItemPrice(item);
    const name = item.name || item.title || 'Automation Component';
    const category = item.category || 'Components';
    const image = item.image;

    const cartItem: CartItem = {
      id,
      name,
      category,
      price: resolvedPrice,
      quantity: 1,
      image
    };

    setDirectBuyItem(cartItem);
    setIsCheckoutOpen(true);
  };

  const openCheckout = (itemToBuyDirectly?: any) => {
    if (itemToBuyDirectly) {
      buyNow(itemToBuyDirectly);
    } else {
      setDirectBuyItem(null);
      setIsCheckoutOpen(true);
    }
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
    setDirectBuyItem(null);
  };

  // CMS Content State Initializer (Loads from localStorage with fallback to pristine factory mockData)
  const getStoredCms = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.CMS_DATA);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  };

  const storedCms = getStoredCms();
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>(() => storedCms.hero_slides || HERO_SLIDES);
  const [homeSections, setHomeSections] = useState<HomeSectionItem[]>(() => storedCms.home_sections || DEFAULT_HOME_SECTIONS);
  const [sensorsData, setSensorsData] = useState<SensorItem[]>(() => storedCms.sensors || SENSORS_DATA);
  const [microcontrollersData, setMicrocontrollersData] = useState<MicrocontrollerItem[]>(() => storedCms.microcontrollers || MICROCONTROLLERS_DATA);
  const [contactorsData, setContactorsData] = useState<ContactorItem[]>(() => storedCms.contactors || CONTACTORS_DATA);
  const [breakersData, setBreakersData] = useState<BreakerItem[]>(() => storedCms.breakers || BREAKERS_DATA);
  const [motorsData, setMotorsData] = useState<MotorItem[]>(() => storedCms.servo || MOTORS_DATA);
  const [securityData, setSecurityData] = useState<SecurityItem[]>(() => storedCms.security || SECURITY_DATA);
  const [servicesData, setServicesData] = useState<ServiceDetail[]>(() => storedCms.services || SERVICES_DATA);
  const [videosData, setVideosData] = useState<VideoClipItem[]>(() => storedCms.videos || DEFAULT_VIDEOS);
  const [kinconyData, setKinconyData] = useState<KinconyItem[]>(() => storedCms.kincony || KINCONY_DATA);
  const [cctvData, setCctvData] = useState<CctvItem[]>(() => storedCms.cctv || CCTV_DATA);

  // Sync CMS updates to localStorage
  useEffect(() => {
    try {
      const store = {
        hero_slides: heroSlides,
        home_sections: homeSections,
        sensors: sensorsData,
        microcontrollers: microcontrollersData,
        contactors: contactorsData,
        breakers: breakersData,
        servo: motorsData,
        security: securityData,
        services: servicesData,
        videos: videosData,
        kincony: kinconyData,
        cctv: cctvData
      };
      localStorage.setItem(STORAGE_KEYS.CMS_DATA, JSON.stringify(store));
    } catch (e) {
      console.error('Error saving CMS data to localStorage:', e);
    }
  }, [heroSlides, homeSections, sensorsData, microcontrollersData, contactorsData, breakersData, motorsData, securityData, servicesData, videosData, kinconyData, cctvData]);

  const updateKinconyItem = (id: string, updates: Partial<KinconyItem>) => {
    setKinconyData(prev => prev.map(item => item.id === id ? { ...item, ...updates } : item));
  };

  const updateCctvItem = (id: string, updates: Partial<CctvItem>) => {
    setCctvData(prev => prev.map(item => item.id === id ? { ...item, ...updates } : item));
  };

  const addVideoClip = (video: Omit<VideoClipItem, 'id' | 'uploadDate' | 'views'>) => {
    const id = `vid-${Date.now()}`;
    const newClip: VideoClipItem = {
      ...video,
      id,
      uploadDate: new Date().toISOString().split('T')[0],
      views: 0
    };
    setVideosData(prev => [newClip, ...prev]);
  };

  const deleteVideoClip = (id: string) => {
    setVideosData(prev => prev.filter(v => v.id !== id));
  };

  const updateVideoClip = (id: string, updates: Partial<VideoClipItem>) => {
    setVideosData(prev => prev.map(v => v.id === id ? { ...v, ...updates } : v));
  };

  // Admin Auth Methods
  const loginAdmin = (password: string, emailOrUser?: string): boolean => {
    const trimmedPass = (password || '').trim();
    const trimmedUser = (emailOrUser || '').trim().toLowerCase();
    
    // Accept standard engineering credentials: admin, admin123, bargain2024, 1234, team, or matching emails
    const validPasswords = ['admin', 'admin123', 'bargain2024', '1234', 'team', 'team2024'];
    const isPassValid = validPasswords.includes(trimmedPass.toLowerCase());
    const isUserValid = !trimmedUser || trimmedUser.includes('admin') || trimmedUser.includes('team') || trimmedUser.includes('bargainpower') || trimmedUser.includes('callistus');

    if (isPassValid || trimmedPass === 'admin123') {
      setIsAdminLoggedIn(true);
      try {
        localStorage.setItem(STORAGE_KEYS.ADMIN_LOGGED_IN, 'true');
      } catch (e) {
        console.error(e);
      }
      setIsLoginModalOpen(false);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    try {
      localStorage.setItem(STORAGE_KEYS.ADMIN_LOGGED_IN, 'false');
    } catch (e) {
      console.error(e);
    }
    if (activeTab === 'admin') {
      setActiveTabState('home');
    }
  };

  const toggleEditMode = () => {
    setIsEditMode(prev => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEYS.EDIT_MODE, String(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  // Live CMS Actions: Update Image directly without coding
  const updateItemImage = (section: CmsSection, itemId: string | number, newImageUrl: string) => {
    const matchId = String(itemId);
    switch (section) {
      case 'hero_slides':
        setHeroSlides(prev => prev.map(item => String(item.id) === matchId ? { ...item, image: newImageUrl } : item));
        break;
      case 'home_sections':
        setHomeSections(prev => prev.map(item => String(item.id) === matchId ? { ...item, image: newImageUrl } : item));
        break;
      case 'sensors':
        setSensorsData(prev => prev.map(item => String(item.id) === matchId ? { ...item, image: newImageUrl } : item));
        break;
      case 'microcontrollers':
        setMicrocontrollersData(prev => prev.map(item => String(item.id) === matchId ? { ...item, image: newImageUrl } : item));
        break;
      case 'contactors':
        setContactorsData(prev => prev.map(item => String(item.id) === matchId ? { ...item, image: newImageUrl } : item));
        break;
      case 'breakers':
        setBreakersData(prev => prev.map(item => String(item.id) === matchId ? { ...item, image: newImageUrl } : item));
        break;
      case 'servo':
        setMotorsData(prev => prev.map(item => String(item.id) === matchId ? { ...item, image: newImageUrl } : item));
        break;
      case 'security':
        setSecurityData(prev => prev.map(item => String(item.id) === matchId ? { ...item, image: newImageUrl } : item));
        break;
      case 'services':
        setServicesData(prev => prev.map(item => String(item.id) === matchId ? { ...item, image: newImageUrl } : item));
        break;
      case 'kincony':
        setKinconyData(prev => prev.map(item => String(item.id) === matchId ? { ...item, image: newImageUrl } : item));
        break;
      case 'cctv':
        setCctvData(prev => prev.map(item => String(item.id) === matchId ? { ...item, image: newImageUrl } : item));
        break;
    }
  };

  // Live CMS Actions: Delete Image directly without coding
  const deleteItemImage = (section: CmsSection, itemId: string | number) => {
    updateItemImage(section, itemId, '');
  };

  // Live CMS Actions: Update Text directly once admin logged in
  const updateItemText = (section: CmsSection, itemId: string | number, updates: Record<string, any>) => {
    const matchId = String(itemId);
    switch (section) {
      case 'hero_slides':
        setHeroSlides(prev => prev.map(item => String(item.id) === matchId ? { ...item, ...updates } : item));
        break;
      case 'home_sections':
        setHomeSections(prev => prev.map(item => String(item.id) === matchId ? { ...item, ...updates } : item));
        break;
      case 'sensors':
        setSensorsData(prev => prev.map(item => String(item.id) === matchId ? { ...item, ...updates } : item));
        break;
      case 'microcontrollers':
        setMicrocontrollersData(prev => prev.map(item => String(item.id) === matchId ? { ...item, ...updates } : item));
        break;
      case 'contactors':
        setContactorsData(prev => prev.map(item => String(item.id) === matchId ? { ...item, ...updates } : item));
        break;
      case 'breakers':
        setBreakersData(prev => prev.map(item => String(item.id) === matchId ? { ...item, ...updates } : item));
        break;
      case 'servo':
        setMotorsData(prev => prev.map(item => String(item.id) === matchId ? { ...item, ...updates } : item));
        break;
      case 'security':
        setSecurityData(prev => prev.map(item => String(item.id) === matchId ? { ...item, ...updates } : item));
        break;
      case 'services':
        setServicesData(prev => prev.map(item => String(item.id) === matchId ? { ...item, ...updates } : item));
        break;
      case 'kincony':
        setKinconyData(prev => prev.map(item => String(item.id) === matchId ? { ...item, ...updates } : item));
        break;
      case 'cctv':
        setCctvData(prev => prev.map(item => String(item.id) === matchId ? { ...item, ...updates } : item));
        break;
    }
  };

  // Live CMS Actions: Add new Item
  const addItem = (section: CmsSection, newItem: any) => {
    switch (section) {
      case 'hero_slides':
        setHeroSlides(prev => [...prev, newItem]);
        break;
      case 'home_sections':
        setHomeSections(prev => [...prev, newItem]);
        break;
      case 'sensors':
        setSensorsData(prev => [...prev, newItem]);
        break;
      case 'microcontrollers':
        setMicrocontrollersData(prev => [...prev, newItem]);
        break;
      case 'contactors':
        setContactorsData(prev => [...prev, newItem]);
        break;
      case 'breakers':
        setBreakersData(prev => [...prev, newItem]);
        break;
      case 'servo':
        setMotorsData(prev => [...prev, newItem]);
        break;
      case 'security':
        setSecurityData(prev => [...prev, newItem]);
        break;
      case 'services':
        setServicesData(prev => [...prev, newItem]);
        break;
      case 'videos':
        setVideosData(prev => [newItem, ...prev]);
        break;
      case 'kincony':
        setKinconyData(prev => [newItem, ...prev]);
        break;
      case 'cctv':
        setCctvData(prev => [newItem, ...prev]);
        break;
    }
  };

  // Live CMS Actions: Delete Item
  const deleteItem = (section: CmsSection, itemId: string | number) => {
    const matchId = String(itemId);
    switch (section) {
      case 'hero_slides':
        setHeroSlides(prev => prev.filter(item => String(item.id) !== matchId));
        break;
      case 'home_sections':
        setHomeSections(prev => prev.filter(item => String(item.id) !== matchId));
        break;
      case 'sensors':
        setSensorsData(prev => prev.filter(item => String(item.id) !== matchId));
        break;
      case 'microcontrollers':
        setMicrocontrollersData(prev => prev.filter(item => String(item.id) !== matchId));
        break;
      case 'contactors':
        setContactorsData(prev => prev.filter(item => String(item.id) !== matchId));
        break;
      case 'breakers':
        setBreakersData(prev => prev.filter(item => String(item.id) !== matchId));
        break;
      case 'servo':
        setMotorsData(prev => prev.filter(item => String(item.id) !== matchId));
        break;
      case 'security':
        setSecurityData(prev => prev.filter(item => String(item.id) !== matchId));
        break;
      case 'services':
        setServicesData(prev => prev.filter(item => String(item.id) !== matchId));
        break;
      case 'videos':
        setVideosData(prev => prev.filter(item => String(item.id) !== matchId));
        break;
      case 'kincony':
        setKinconyData(prev => prev.filter(item => String(item.id) !== matchId));
        break;
      case 'cctv':
        setCctvData(prev => prev.filter(item => String(item.id) !== matchId));
        break;
    }
  };

  // Reset section or all content to factory mockData
  const resetSectionToDefault = (section: CmsSection) => {
    switch (section) {
      case 'hero_slides': setHeroSlides(HERO_SLIDES); break;
      case 'home_sections': setHomeSections(DEFAULT_HOME_SECTIONS); break;
      case 'sensors': setSensorsData(SENSORS_DATA); break;
      case 'microcontrollers': setMicrocontrollersData(MICROCONTROLLERS_DATA); break;
      case 'contactors': setContactorsData(CONTACTORS_DATA); break;
      case 'breakers': setBreakersData(BREAKERS_DATA); break;
      case 'servo': setMotorsData(MOTORS_DATA); break;
      case 'security': setSecurityData(SECURITY_DATA); break;
      case 'services': setServicesData(SERVICES_DATA); break;
      case 'videos': setVideosData(DEFAULT_VIDEOS); break;
      case 'kincony': setKinconyData(KINCONY_DATA); break;
      case 'cctv': setCctvData(CCTV_DATA); break;
    }
  };

  const resetAllContentToDefault = () => {
    setHeroSlides(HERO_SLIDES);
    setHomeSections(DEFAULT_HOME_SECTIONS);
    setSensorsData(SENSORS_DATA);
    setMicrocontrollersData(MICROCONTROLLERS_DATA);
    setContactorsData(CONTACTORS_DATA);
    setBreakersData(BREAKERS_DATA);
    setMotorsData(MOTORS_DATA);
    setSecurityData(SECURITY_DATA);
    setServicesData(SERVICES_DATA);
    setVideosData(DEFAULT_VIDEOS);
    setKinconyData(KINCONY_DATA);
    setCctvData(CCTV_DATA);
    try {
      localStorage.removeItem(STORAGE_KEYS.CMS_DATA);
    } catch (e) {
      console.error(e);
    }
  };

  // Settings State
  const [settings, setSettings] = useState<SiteSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return saved ? JSON.parse(saved) : DEFAULT_SITE_SETTINGS;
    } catch {
      return DEFAULT_SITE_SETTINGS;
    }
  });

  // Inquiries State
  const [inquiries, setInquiries] = useState<InquirySubmission[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
      if (saved) return JSON.parse(saved);
      return [
        {
          id: 'inq-sample-1',
          name: 'Engr. Daniel Okafor',
          email: 'daniel.okafor@primepower.ng',
          phone: '+2348023456789',
          serviceInterested: 'Home & Industrial Automation',
          projectBudget: '₦450,000 - ₦800,000',
          message: 'We require a 3-pole contactor interlocking panel with WiFi smart breaker integration for our commercial poultry ventilation fans.',
          timestamp: new Date(Date.now() - 3600000 * 4).toLocaleString(),
          captchaVerified: true,
          status: 'New',
          replies: []
        },
        {
          id: 'inq-sample-2',
          name: 'Mrs. Amina Yusuf',
          email: 'amina.agrotech@gmail.com',
          phone: '+2348098765432',
          serviceInterested: 'Smart Agricultural Irrigation & Snail Farming',
          projectBudget: '₦200,000 - ₦400,000',
          message: 'Inquiring about your dry season automated misting chamber for snail training and breeding. How many nozzles do you recommend for a 50sqm space?',
          timestamp: new Date(Date.now() - 3600000 * 20).toLocaleString(),
          captchaVerified: true,
          status: 'Replied',
          replies: [
            {
              id: 'rep-sample-1',
              text: 'Dear Mrs. Amina, for a 50sqm snail chamber we recommend an 8-nozzle high-pressure brass misting array with dual capacitive soil probes to maintain 85% humidity.',
              sentAt: new Date(Date.now() - 3600000 * 18).toLocaleString(),
              author: 'BARGAINPOWER Support Team'
            }
          ]
        }
      ];
    } catch {
      return [];
    }
  });

  // Chat Messages State
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CHAT_MESSAGES);
      return saved ? JSON.parse(saved) : INITIAL_CHAT_MESSAGES;
    } catch {
      return INITIAL_CHAT_MESSAGES;
    }
  });

  // Visitor Logs State
  const [visitorLogs, setVisitorLogs] = useState<VisitorLog[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.VISITOR_LOGS);
      if (saved) return JSON.parse(saved);
      // Seed realistic initial logs
      return [
        {
          id: 'vis-1',
          ip: '102.89.33.14',
          device: 'Desktop (Windows / Chrome)',
          browser: 'Chrome 124.0.0',
          pageVisited: 'Home > Hero Showcase',
          timestamp: new Date(Date.now() - 3600000 * 2).toLocaleTimeString()
        },
        {
          id: 'vis-2',
          ip: '197.210.45.88',
          device: 'Mobile (iOS / Safari)',
          browser: 'Mobile Safari 17.4',
          pageVisited: 'Contactors > 3-Pole 40A',
          timestamp: new Date(Date.now() - 3600000 * 1).toLocaleTimeString()
        },
        {
          id: 'vis-3',
          ip: '105.112.98.204',
          device: 'Desktop (macOS / Firefox)',
          browser: 'Firefox 125.0',
          pageVisited: 'Services > Snail Farming Automation',
          timestamp: new Date(Date.now() - 1800000).toLocaleTimeString()
        }
      ];
    } catch {
      return [];
    }
  });

  // Reviews State
  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.REVIEWS);
      return saved ? JSON.parse(saved) : REVIEWS_DATA;
    } catch {
      return REVIEWS_DATA;
    }
  });

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (e) {
      console.error(e);
    }
  }, [settings]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
    } catch (e) {
      console.error(e);
    }
  }, [inquiries]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CHAT_MESSAGES, JSON.stringify(chatMessages));
    } catch (e) {
      console.error(e);
    }
  }, [chatMessages]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.VISITOR_LOGS, JSON.stringify(visitorLogs));
    } catch (e) {
      console.error(e);
    }
  }, [visitorLogs]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
    } catch (e) {
      console.error(e);
    }
  }, [reviews]);

  // Sync across tabs in real-time
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEYS.CHAT_MESSAGES && e.newValue) {
        try {
          setChatMessages(JSON.parse(e.newValue));
        } catch {}
      }
      if (e.key === STORAGE_KEYS.INQUIRIES && e.newValue) {
        try {
          setInquiries(JSON.parse(e.newValue));
        } catch {}
      }
      if (e.key === STORAGE_KEYS.SETTINGS && e.newValue) {
        try {
          setSettings(JSON.parse(e.newValue));
        } catch {}
      }
      if (e.key === STORAGE_KEYS.REVIEWS && e.newValue) {
        try {
          setReviews(JSON.parse(e.newValue));
        } catch {}
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Record current visitor session on initial load
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const deviceType = isMobile ? 'Mobile Device' : 'Desktop Workstation';
    
    // Generate a pseudo-IP for demonstration logging
    const simulatedIp = `102.${Math.floor(Math.random() * 200 + 50)}.${Math.floor(Math.random() * 250)}.${Math.floor(Math.random() * 250)}`;
    
    const newLog: VisitorLog = {
      id: `vis-${Date.now()}`,
      ip: simulatedIp,
      device: `${deviceType} (${navigator.platform || 'Web'})`,
      browser: userAgent.includes('Chrome') ? 'Chrome' : userAgent.includes('Safari') ? 'Safari' : userAgent.includes('Firefox') ? 'Firefox' : 'Modern Browser',
      pageVisited: 'Home Page',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };

    setVisitorLogs(prev => [newLog, ...prev.slice(0, 49)]); // keep latest 50
  }, []);

  // Update visitor log on page change
  const setActiveTab = (tab: PageTab) => {
    setActiveTabState(tab);
    setSubPageTitle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Append navigation log
    const navLog: VisitorLog = {
      id: `vis-nav-${Date.now()}`,
      ip: visitorLogs[0]?.ip || '102.89.44.12',
      device: visitorLogs[0]?.device || 'Web Session',
      browser: visitorLogs[0]?.browser || 'Browser',
      pageVisited: tab.toUpperCase(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };
    setVisitorLogs(prev => [navLog, ...prev.slice(0, 49)]);
  };

  const openQuoteModal = (initialService = '') => {
    setQuoteModalService(initialService);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const toggleChat = () => {
    setIsChatOpen(prev => !prev);
  };

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const updateCustomText = (key: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      customTexts: {
        ...prev.customTexts,
        [key]: sanitizeInput(value)
      }
    }));
  };

  const resetSettingsToDefault = () => {
    setSettings(DEFAULT_SITE_SETTINGS);
  };

  const addInquiry = (inquiryData: Omit<InquirySubmission, 'id' | 'timestamp' | 'status' | 'replies'>) => {
    const newInquiry: InquirySubmission = {
      id: `inq-${Date.now()}`,
      name: sanitizeInput(inquiryData.name),
      email: sanitizeInput(inquiryData.email),
      phone: sanitizeInput(inquiryData.phone),
      serviceInterested: sanitizeInput(inquiryData.serviceInterested),
      projectBudget: inquiryData.projectBudget ? sanitizeInput(inquiryData.projectBudget) : undefined,
      message: sanitizeInput(inquiryData.message),
      timestamp: new Date().toLocaleString(),
      captchaVerified: inquiryData.captchaVerified,
      status: 'New',
      replies: []
    };

    setInquiries(prev => [newInquiry, ...prev]);
    return { success: true, id: newInquiry.id };
  };

  const replyToInquiry = (inquiryId: string, replyText: string, author = 'BARGAINPOWER Support Team') => {
    const cleanReply = sanitizeInput(replyText);
    if (!cleanReply) return;

    setInquiries(prev => prev.map(inq => {
      if (inq.id === inquiryId) {
        return {
          ...inq,
          status: 'Replied',
          replies: [
            ...inq.replies,
            {
              id: `rep-${Date.now()}`,
              text: cleanReply,
              sentAt: new Date().toLocaleString(),
              author
            }
          ]
        };
      }
      return inq;
    }));
  };

  const deleteInquiry = (inquiryId: string) => {
    setInquiries(prev => prev.filter(inq => inq.id !== inquiryId));
  };

  // Chatbot Triage Engine
  const sendUserMessage = (rawText: string) => {
    const text = sanitizeInput(rawText);
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const lower = text.toLowerCase();
    const escalationKeywords = ['agent', 'team', 'live person', 'pricing', 'human', 'quote', 'custom build', 'whatsapp', 'call'];
    const isEscalationRequested = escalationKeywords.some(keyword => lower.includes(keyword));

    setChatMessages(prev => {
      const updated = [...prev, userMsg];

      if (isEscalationRequested) {
        // Mark conversation as Escalated and request contact info
        userMsg.status = 'Escalated to Team';
        setTimeout(() => {
          const botResponse: ChatMessage = {
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: 'I understand you would like direct support from our engineering team! Our lead engineers have been notified. Please confirm your Name, Phone Number (or WhatsApp), and Email below so a team specialist can respond immediately.',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            status: 'Escalated to Team'
          };
          setChatMessages(curr => [...curr, botResponse]);
        }, 600);
      } else if (lower.includes('contactor') || lower.includes('relay')) {
        setTimeout(() => {
          const botResponse: ChatMessage = {
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: 'We stock and install 1-Pole, 2-Pole, and 3-Pole AC/DC contactors (40A, 63A) with 220V coil ratings for heavy pumps, inductive chillers, and ATS panels. Standard relays melt under inductive inrush currents, which is why our designs always isolate heavy loads through magnetic contactors.',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          setChatMessages(curr => [...curr, botResponse]);
        }, 700);
      } else if (lower.includes('snail') || lower.includes('irrigation')) {
        setTimeout(() => {
          const botResponse: ChatMessage = {
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: 'Our Smart Agricultural Snail Microclimate system uses corrosion-resistant capacitive soil probes and high-pressure atomizing misting nozzles to maintain 80%+ humidity and 25°C temperatures throughout dry seasons, preventing snail aestivation and tripling farmer yield.',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          setChatMessages(curr => [...curr, botResponse]);
        }, 700);
      } else if (lower.includes('electric vehicle') || lower.includes('ev') || lower.includes('e-bike') || lower.includes('bike')) {
        setTimeout(() => {
          const botResponse: ChatMessage = {
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: 'We engineer custom electric bikes (500W to 3000W BLDC motors with 72V Samsung lithium battery packs) and execute full gasoline-to-electric vehicle conversions with custom CNC bellhousing adapters, high-voltage contactors, and digital dashboard telemetry.',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          setChatMessages(curr => [...curr, botResponse]);
        }, 700);
      } else {
        setTimeout(() => {
          const botResponse: ChatMessage = {
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: 'Thank you for reaching out! You can explore our dedicated tabs above for Sensors, Microcontrollers, Contactors, Breakers, and Engineering Services. To request a quotation or talk to our live team, type "agent" or click "Get a Quote" on the top right.',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          setChatMessages(curr => [...curr, botResponse]);
        }, 800);
      }

      return updated;
    });
  };

  const sendUserContactInfo = (contact: { name: string; phone: string; email: string }) => {
    const name = sanitizeInput(contact.name);
    const phone = sanitizeInput(contact.phone);
    const email = sanitizeInput(contact.email);

    const contactMsg: ChatMessage = {
      id: `user-contact-${Date.now()}`,
      sender: 'user',
      text: `[Contact Details Submitted]: ${name} | Phone: ${phone} | Email: ${email}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Escalated to Team',
      userContact: { name, phone, email }
    };

    setChatMessages(prev => [
      ...prev,
      contactMsg,
      {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `Thank you, ${name}! Your request has been flagged as [Escalated to Team] on our live Admin Console. An engineer is reviewing your inquiry and can reply directly in this chat or via WhatsApp at ${phone}.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'Escalated to Team'
      }
    ]);
  };

  // Team reply sent from Admin panel to visitor chat
  const sendTeamReplyToChat = (replyText: string) => {
    const text = sanitizeInput(replyText);
    if (!text) return;

    const teamMsg: ChatMessage = {
      id: `team-${Date.now()}`,
      sender: 'team',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Resolved'
    };

    setChatMessages(prev => [...prev, teamMsg]);
  };

  // Dedicated Handover Request Reply Handler (Supports Live Chat Window, WhatsApp, or Both)
  const replyToHandoverRequest = (
    requestId: string,
    replyText: string,
    channel: 'chat' | 'whatsapp' | 'both',
    targetPhone?: string,
    author = 'Engr. Team Lead'
  ) => {
    const cleanReply = sanitizeInput(replyText);
    if (!cleanReply) return;

    const replyTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 1. If sending to live chat window (or both)
    if (channel === 'chat' || channel === 'both') {
      const teamMsg: ChatMessage = {
        id: `team-rep-${Date.now()}`,
        sender: 'team',
        text: cleanReply,
        timestamp: replyTimestamp,
        status: 'Resolved'
      };
      setChatMessages(prev => [...prev, teamMsg]);
    }

    // 2. Record reply into the specific handover message log and mark it resolved
    setChatMessages(prev => prev.map(msg => {
      if (msg.id === requestId) {
        const existingReplies = msg.replies || [];
        return {
          ...msg,
          status: 'Resolved',
          replies: [
            ...existingReplies,
            {
              id: `rep-${Date.now()}`,
              text: cleanReply,
              sentAt: `${new Date().toLocaleDateString()} ${replyTimestamp}`,
              channel,
              author
            }
          ]
        };
      }
      return msg;
    }));

    // 3. If sending directly on WhatsApp (or both)
    if (channel === 'whatsapp' || channel === 'both') {
      const cleanPhone = (targetPhone || '').replace(/[^0-9]/g, '');
      if (cleanPhone) {
        const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(cleanReply)}`;
        window.open(waUrl, '_blank');
      }
    }
  };

  // Reviews actions
  const addReview = (reviewData: Omit<ReviewItem, 'id' | 'date' | 'approved'>) => {
    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: sanitizeInput(reviewData.author),
      companyOrRole: sanitizeInput(reviewData.companyOrRole),
      rating: reviewData.rating,
      comment: sanitizeInput(reviewData.comment),
      serviceRelated: sanitizeInput(reviewData.serviceRelated),
      date: new Date().toISOString().split('T')[0],
      approved: true // approved by default for instant feedback
    };
    setReviews(prev => [newRev, ...prev]);
  };

  const toggleReviewApproval = (id: string) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, approved: !r.approved } : r));
  };

  const deleteReview = (id: string) => {
    setReviews(prev => prev.filter(r => r.id !== id));
  };

  const isEscalated = chatMessages.some(m => m.status === 'Escalated to Team');
  const unreadAdminChats = chatMessages.filter(m => m.status === 'Escalated to Team').length;

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        subPageTitle,
        setSubPageTitle,
        isQuoteModalOpen,
        openQuoteModal,
        closeQuoteModal,
        quoteModalService,

        // Cart & Checkout
        cart,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        buyNow,
        isCheckoutOpen,
        openCheckout,
        closeCheckout,
        directBuyItem,

        // Admin Auth & Team Mode
        isAdminLoggedIn,
        isEditMode,
        toggleEditMode,
        loginAdmin,
        logoutAdmin,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal,

        // CMS Content Stores
        heroSlides,
        homeSections,
        sensorsData,
        microcontrollersData,
        contactorsData,
        breakersData,
        motorsData,
        securityData,
        servicesData,
        videosData,
        kinconyData,
        cctvData,
        addVideoClip,
        deleteVideoClip,
        updateVideoClip,
        updateKinconyItem,
        updateCctvItem,

        // CMS Actions (Image & Text editing without coding)
        updateItemImage,
        deleteItemImage,
        updateItemText,
        addItem,
        deleteItem,
        resetSectionToDefault,
        resetAllContentToDefault,

        settings,
        updateSettings,
        updateCustomText,
        resetSettingsToDefault,
        inquiries,
        addInquiry,
        replyToInquiry,
        deleteInquiry,
        chatMessages,
        isChatOpen,
        toggleChat,
        sendUserMessage,
        sendUserContactInfo,
        sendTeamReplyToChat,
        replyToHandoverRequest,
        isEscalated,
        unreadAdminChats,
        visitorLogs,
        visitorCount: visitorLogs.length,
        reviews,
        addReview,
        toggleReviewApproval,
        deleteReview
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
