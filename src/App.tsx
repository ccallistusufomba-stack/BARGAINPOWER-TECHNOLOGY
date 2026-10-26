import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Breadcrumbs } from './components/Breadcrumbs';
import { HomePage } from './components/HomePage';
import { SensorsPage } from './components/SensorsPage';
import { MicrocontrollersPage } from './components/MicrocontrollersPage';
import { ContactorsPage } from './components/ContactorsPage';
import { BreakersPage } from './components/BreakersPage';
import { ServoPage } from './components/ServoPage';
import { SecurityPage } from './components/SecurityPage';
import { ServicesPage } from './components/ServicesPage';
import { VideosPage } from './components/VideosPage';
import { FaqSection } from './components/FaqSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { AdminDashboard } from './components/AdminDashboard';
import { AdminLoginView } from './components/AdminLoginView';
import { AdminTopBar } from './components/AdminTopBar';
import { AdminLoginModal } from './components/AdminLoginModal';
import { Footer } from './components/Footer';
import { CustomProjectBuilderModal } from './components/CustomProjectBuilderModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ChatWidget } from './components/ChatWidget';
import { CheckoutModal } from './components/CheckoutModal';
import { KinconyPage } from './components/KinconyPage';
import { ComponentsPage } from './components/ComponentsPage';
import { CctvPage } from './components/CctvPage';

const MainContent: React.FC = () => {
  const { activeTab, isAdminLoggedIn } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#1A1D20]">
      {/* 0. Sticky Admin Top Bar (Only visible when staff is logged in) */}
      <AdminTopBar />

      {/* 1. Header with Top Announcement Bar & Sticky Action */}
      <Header />

      {/* 2. Breadcrumbs: visible only when not on Home */}
      <Breadcrumbs />

      {/* 3. Main View Router */}
      <main className="flex-grow">
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'components' && <ComponentsPage />}
        {activeTab === 'sensors' && <SensorsPage />}
        {activeTab === 'microcontrollers' && <MicrocontrollersPage />}
        {activeTab === 'contactors' && <ContactorsPage />}
        {activeTab === 'breakers' && <BreakersPage />}
        {activeTab === 'servo' && <ServoPage />}
        {activeTab === 'security' && <SecurityPage />}
        {activeTab === 'kincony' && <KinconyPage />}
        {activeTab === 'cctv' && <CctvPage />}
        {activeTab === 'services' && <ServicesPage />}
        {activeTab === 'video' && <VideosPage />}
        {activeTab === 'faq' && <FaqSection />}
        {activeTab === 'reviews' && <ReviewsSection />}
        {activeTab === 'contact' && <ContactSection />}
        {activeTab === 'admin' && (isAdminLoggedIn ? <AdminDashboard /> : <AdminLoginView />)}
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* 5. Custom Project Builder / Dynamic Calculator Modal ("Build your Project") */}
      <CustomProjectBuilderModal />

      {/* 6. Floating Animated WhatsApp Contact Widget */}
      <FloatingWhatsApp />

      {/* 7. Chatbot with Triage & Live Admin Reply Protocol */}
      <ChatWidget />

      {/* 8. Staff / Team Authentication Modal */}
      <AdminLoginModal />

      {/* 9. Paystack / Monnify Bank Transfer Checkout Modal */}
      <CheckoutModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
