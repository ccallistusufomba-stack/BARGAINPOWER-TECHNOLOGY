import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Users, 
  MessageSquare, 
  FileText, 
  Settings, 
  ShieldCheck, 
  Send, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Trash2, 
  Edit3, 
  ExternalLink, 
  RefreshCw, 
  Save, 
  Eye, 
  AlertTriangle, 
  Clock, 
  Activity, 
  Headphones,
  Check,
  CornerDownRight,
  Sparkles,
  X,
  Camera,
  Truck,
  Film
} from 'lucide-react';
import { sanitizeInput } from '../utils/sanitize';
import { WhatsAppIcon } from './FloatingWhatsApp';
import { AdminMediaManager } from './AdminMediaManager';
import { AdminShippingFulfillment } from './AdminShippingFulfillment';
import { AdminVideoManager } from './AdminVideoManager';

export const AdminDashboard: React.FC = () => {
  const { 
    inquiries, 
    replyToInquiry, 
    deleteInquiry, 
    chatMessages, 
    sendTeamReplyToChat, 
    replyToHandoverRequest,
    visitorLogs, 
    visitorCount, 
    reviews, 
    toggleReviewApproval, 
    deleteReview, 
    settings, 
    updateSettings, 
    resetSettingsToDefault,
    videosData,
    subPageTitle
  } = useApp();

  const [activeTab, setActiveTab] = useState<'inquiries' | 'chat_triage' | 'visitors' | 'reviews' | 'cms_settings' | 'cms_media' | 'shipping_queue' | 'admin_videos'>('admin_videos');

  // Switch to admin_videos if navigating from upload or video section
  React.useEffect(() => {
    if (subPageTitle === 'admin_videos' || subPageTitle === 'upload') {
      setActiveTab('admin_videos');
    }
  }, [subPageTitle]);

  // Inquiry Reply Modal State
  const [selectedInquiryId, setSelectedInquiryId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [replyAuthor, setReplyAuthor] = useState('Engr. Team Lead');
  const [replyStatusMsg, setReplyStatusMsg] = useState('');

  // Chat Triage Reply State
  const [chatReplyInput, setChatReplyInput] = useState('');
  const [chatReplySuccess, setChatReplySuccess] = useState(false);

  // Live Chat Handover Request Reply Modal State
  const [activeHandoverId, setActiveHandoverId] = useState<string | null>(null);
  const [handoverReplyText, setHandoverReplyText] = useState('');
  const [handoverPhoneInput, setHandoverPhoneInput] = useState('');
  const [handoverAuthor, setHandoverAuthor] = useState('Engr. Team Lead');
  const [handoverFeedbackMsg, setHandoverFeedbackMsg] = useState('');
  const [handoverSuccessChannel, setHandoverSuccessChannel] = useState<'chat' | 'whatsapp' | 'both' | null>(null);

  // Settings State Form
  const [waNumberInput, setWaNumberInput] = useState(settings.whatsappNumber);
  const [emailInput, setEmailInput] = useState(settings.helpEmail);
  const [companyNameInput, setCompanyNameInput] = useState(settings.companyName);
  const [announcementInput, setAnnouncementInput] = useState(settings.topAnnouncement);
  const [addressInput, setAddressInput] = useState(settings.address);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Live Chat Handover items
  const escalatedChats = chatMessages.filter(m => m.status === 'Escalated to Team' || m.sender === 'user');
  const urgentHandoverRequests = chatMessages.filter(
    m => m.status === 'Escalated to Team' || (m.replies && m.replies.length > 0) || (m.sender === 'user' && m.userContact)
  );

  // Active inquiry for modal
  const selectedInquiry = inquiries.find(i => i.id === selectedInquiryId);

  // Active handover request for modal
  const selectedHandover = chatMessages.find(m => m.id === activeHandoverId);

  // Preset Handover templates
  const HANDOVER_TEMPLATES = [
    {
      title: 'Engineering Consultation',
      text: (name: string) => `Hello ${name || 'there'}! This is the engineering desk at BARGAINPOWER & TECHNOLOGY. We received your live chat request regarding your hardware specifications. A specialist is standing by to guide you through component selection and wiring diagrams.`
    },
    {
      title: 'Custom Automation / EV Build',
      text: (name: string) => `Dear ${name || 'Client'}, thank you for reaching out to BARGAINPOWER. We engineer custom automation panels, electric vehicle/bike drivetrains, and agricultural misting chambers. Could you confirm your required operating voltage (e.g. 220V AC or 72V DC) and target load?`
    },
    {
      title: 'Quote & Invoicing Follow-up',
      text: (name: string) => `Hello ${name || 'there'}! Engr. Team Lead here from BARGAINPOWER. We have logged your handover inquiry and prepared preliminary project pricing details. Let us know if you would like a formal technical quote sent to your email.`
    }
  ];

  const handleOpenHandoverReply = (req: typeof chatMessages[0]) => {
    setActiveHandoverId(req.id);
    const phone = req.userContact?.phone || (req.text.match(/(\+?[0-9]{10,14})/) ? req.text.match(/(\+?[0-9]{10,14})/)![0] : '');
    const name = req.userContact?.name || 'Client';
    setHandoverPhoneInput(phone);
    setHandoverReplyText(`Hello ${name}! This is the engineering team at BARGAINPOWER & TECHNOLOGY following up on your live chat request. How can we assist you with your project today?`);
    setHandoverFeedbackMsg('');
    setHandoverSuccessChannel(null);
  };

  const handleDispatchHandoverReply = (channel: 'chat' | 'whatsapp' | 'both') => {
    if (!activeHandoverId || !handoverReplyText.trim()) return;

    replyToHandoverRequest(activeHandoverId, handoverReplyText, channel, handoverPhoneInput, handoverAuthor);
    setHandoverSuccessChannel(channel);

    if (channel === 'chat') {
      setHandoverFeedbackMsg(`✓ Team reply transmitted directly to visitor's active live chat window!`);
    } else if (channel === 'whatsapp') {
      setHandoverFeedbackMsg(`✓ WhatsApp conversation opened for ${handoverPhoneInput || 'client'}!`);
    } else {
      setHandoverFeedbackMsg(`✓ Dispatched to both visitor's live chat window AND WhatsApp!`);
    }

    setTimeout(() => {
      setActiveHandoverId(null);
      setHandoverFeedbackMsg('');
      setHandoverSuccessChannel(null);
    }, 2200);
  };

  const handleSendInquiryReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedInquiryId || !replyText.trim()) return;

    replyToInquiry(selectedInquiryId, replyText, replyAuthor);
    setReplyStatusMsg(`Reply recorded and simulated dispatch sent to ${selectedInquiry?.email}`);

    // Also trigger direct mailto option
    if (selectedInquiry) {
      const subject = encodeURIComponent(`RE: ${selectedInquiry.serviceInterested} - BARGAINPOWER & TECHNOLOGY`);
      const body = encodeURIComponent(`Dear ${selectedInquiry.name},\n\n${replyText}\n\nWarm regards,\n${replyAuthor}\nBARGAINPOWER & TECHNOLOGY\nWhatsApp: ${settings.whatsappNumber}`);
      const mailtoUrl = `mailto:${selectedInquiry.email}?subject=${subject}&body=${body}`;
      window.open(mailtoUrl, '_blank');
    }

    setTimeout(() => {
      setReplyText('');
      setReplyStatusMsg('');
      setSelectedInquiryId(null);
    }, 1800);
  };

  const handleSendChatTeamReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatReplyInput.trim()) return;

    sendTeamReplyToChat(chatReplyInput);
    setChatReplyInput('');
    setChatReplySuccess(true);
    setTimeout(() => setChatReplySuccess(false), 2000);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      companyName: sanitizeInput(companyNameInput),
      whatsappNumber: sanitizeInput(waNumberInput),
      helpEmail: sanitizeInput(emailInput),
      topAnnouncement: sanitizeInput(announcementInput),
      address: sanitizeInput(addressInput)
    });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  return (
    <div className="bg-[#0B1528] min-h-screen text-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Admin Dashboard Top Navigation Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                Team Operations & Lead Telemetry
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              BARGAINPOWER Admin Control Center
            </h1>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
              <span className="text-slate-400 block text-[10px]">Active Visitors</span>
              <span className="font-bold text-white font-mono">{visitorCount} Sessions</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
              <span className="text-slate-400 block text-[10px]">Inquiries</span>
              <span className="font-bold text-teal-400 font-mono">{inquiries.length} Inbound</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
              <span className="text-slate-400 block text-[10px]">Chat Handovers</span>
              <span className="font-bold text-[#FF007F] font-mono">{urgentHandoverRequests.length} Urgent</span>
            </div>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center gap-2 my-6 overflow-x-auto no-scrollbar pb-2">
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'inquiries'
                ? 'bg-[#008080] text-white shadow-md'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Form Inquiries ({inquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('chat_triage')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer relative ${
              activeTab === 'chat_triage'
                ? 'bg-[#008080] text-white shadow-md'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Headphones className="w-4 h-4 text-pink-400" />
            <span>Live Chat Triage</span>
            {urgentHandoverRequests.length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-[#FF007F] text-white text-[10px] font-bold">
                {urgentHandoverRequests.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('visitors')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'visitors'
                ? 'bg-[#008080] text-white shadow-md'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Visitor Analytics & Logs</span>
          </button>

          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'reviews'
                ? 'bg-[#008080] text-white shadow-md'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Reviews ({reviews.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('cms_settings')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'cms_settings'
                ? 'bg-[#008080] text-white shadow-md'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>CMS & Contact Control</span>
          </button>

          <button
            onClick={() => setActiveTab('shipping_queue')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'shipping_queue'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Truck className="w-4 h-4 text-emerald-300" />
            <span>Fulfillment &amp; Ship Out Queue</span>
          </button>

          <button
            onClick={() => setActiveTab('cms_media')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'cms_media'
                ? 'bg-[#248C54] text-white shadow-md'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Camera className="w-4 h-4 text-[#97CD97]" />
            <span>Site Media &amp; Picture CMS</span>
          </button>

          <button
            onClick={() => setActiveTab('admin_videos')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'admin_videos'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Film className="w-4 h-4 text-purple-400" />
            <span>Video Clips Studio &amp; Uploads ({videosData.length})</span>
          </button>
        </div>

        {/* Tab 1: Public Form Inquiries with Direct Email Reply */}
        {activeTab === 'inquiries' && (
          <div className="space-y-4">
            <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white text-sm">
                  Public Client Inquiries (Connected to LocalStorage Engine)
                </h3>
                <p className="text-xs text-slate-400">
                  Every submission includes automated robot verification status and direct email reply triggers.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {inquiries.length === 0 ? (
                <div className="bg-slate-900 p-8 rounded-xl text-center text-slate-500 border border-slate-800">
                  No form inquiries in queue.
                </div>
              ) : (
                inquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="bg-slate-900 rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Bar: Name, Status, Robot Verification Badge */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-white text-base">
                            {inq.name}
                          </h4>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            inq.status === 'New' 
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' 
                              : 'bg-slate-800 text-slate-300'
                          }`}>
                            {inq.status}
                          </span>
                          {/* Security Check for Robot Badge */}
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-teal-950 text-teal-300 border border-teal-800 flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3 text-teal-400" />
                            <span>Security Check: Verified Human</span>
                          </span>
                        </div>

                        <span className="text-[11px] text-slate-400 font-mono">
                          {inq.timestamp}
                        </span>
                      </div>

                      {/* Contact Coordinates */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-teal-400" />
                          <a href={`mailto:${inq.email}`} className="hover:underline">{inq.email}</a>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-teal-400" />
                          <a href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {inq.phone}
                          </a>
                        </span>
                        <span className="text-teal-300 font-semibold">
                          Interested in: {inq.serviceInterested}
                        </span>
                        {inq.projectBudget && (
                          <span className="text-amber-400 font-mono text-[11px]">
                            Budget: {inq.projectBudget}
                          </span>
                        )}
                      </div>

                      {/* Message Content */}
                      <div className="p-3 bg-slate-950 rounded-lg text-xs text-slate-200 border border-slate-800/80 mb-3 leading-relaxed whitespace-pre-wrap">
                        {inq.message}
                      </div>

                      {/* Previous Replies Recorded */}
                      {inq.replies && inq.replies.length > 0 && (
                        <div className="space-y-1.5 mb-3 pl-4 border-l-2 border-teal-500">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 block">
                            Sent Team Replies:
                          </span>
                          {inq.replies.map((rep) => (
                            <div key={rep.id} className="text-xs text-slate-300 bg-slate-800/60 p-2 rounded">
                              <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                                <span>{rep.author}</span>
                                <span>{rep.sentAt}</span>
                              </div>
                              <p>{rep.text}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Actions: Reply Button & Delete Button */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                      <div className="flex items-center gap-2">
                        {/* Direct Form Inquiry Button Reply (Opens composer modal + sends to visitor email) */}
                        <button
                          onClick={() => {
                            setSelectedInquiryId(inq.id);
                            setReplyText(`Dear ${inq.name},\n\nThank you for reaching out to BARGAINPOWER & TECHNOLOGY regarding ${inq.serviceInterested}.\n\nOur engineering team has reviewed your specifications and would like to confirm...`);
                          }}
                          className="px-3.5 py-1.5 rounded-lg bg-[#008080] hover:bg-[#006666] text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Reply to Visitor's Email</span>
                        </button>

                        <a
                          href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(inq.name)},%20this%20is%20the%20engineering%20desk%20at%20BARGAINPOWER%20following%20up%20on%20your%20inquiry.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-xs font-semibold flex items-center gap-1"
                        >
                          <Phone className="w-3 h-3" />
                          <span>WhatsApp Client</span>
                        </a>
                      </div>

                      <button
                        onClick={() => deleteInquiry(inq.id)}
                        className="p-1.5 text-slate-500 hover:text-red-400 transition-colors cursor-pointer"
                        title="Delete Inquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Live Chat Triage & Instant Chat Reply */}
        {activeTab === 'chat_triage' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left 7 Cols: Live Conversation Stream */}
            <div className="lg:col-span-7 bg-slate-900 rounded-xl p-5 border border-slate-800 flex flex-col justify-between h-[600px]">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                  <div className="flex items-center gap-2">
                    <Headphones className="w-4 h-4 text-[#FF007F]" />
                    <h3 className="font-bold text-white text-sm">
                      Live Visitor Chat Stream (Synced in Real-Time)
                    </h3>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">Listening on LocalStorage</span>
                </div>

                {/* Messages log */}
                <div className="h-[430px] overflow-y-auto space-y-2.5 pr-2">
                  {chatMessages.map((msg) => (
                    <div 
                      key={msg.id}
                      className={`p-3 rounded-lg text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-slate-800 text-slate-100 ml-6 border border-slate-700'
                          : msg.sender === 'team'
                          ? 'bg-teal-950 text-teal-200 ml-6 border border-teal-800 font-medium'
                          : 'bg-slate-950 text-slate-300 mr-6 border border-slate-900'
                      }`}
                    >
                      <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                        <span className="font-bold uppercase tracking-wider">
                          {msg.sender === 'user' ? '👤 Visitor' : msg.sender === 'team' ? '👨‍💻 Team Engineer' : '🤖 Assistant'}
                        </span>
                        <span>{msg.timestamp}</span>
                      </div>
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                      {msg.status === 'Escalated to Team' && (
                        <div className="mt-1 text-[10px] text-[#FF007F] font-bold">
                          [URGENT TRIAGE: Handover Requested]
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Instant Team Reply Bar (Chatbot reply button: visitor will receive instant message from the team!) */}
              <form onSubmit={handleSendChatTeamReply} className="pt-3 border-t border-slate-800 flex gap-2">
                <input
                  type="text"
                  value={chatReplyInput}
                  onChange={(e) => setChatReplyInput(e.target.value)}
                  placeholder="Type an instant reply directly to the visitor's live chat window..."
                  className="flex-1 px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-hidden focus:ring-2 focus:ring-[#008080]"
                />
                <button
                  type="submit"
                  disabled={!chatReplyInput.trim()}
                  className="px-4 py-2 bg-[#FF007F] hover:bg-[#E6006F] text-white text-xs font-bold rounded-lg disabled:opacity-40 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Chat Reply</span>
                </button>
              </form>
              {chatReplySuccess && (
                <span className="text-[11px] text-emerald-400 mt-1 block">
                  ✓ Message transmitted instantly to visitor's chat tray!
                </span>
              )}
            </div>

            {/* Right 5 Cols: Urgent Handover Requests Panel */}
            <div className="lg:col-span-5 bg-slate-900 rounded-xl p-5 border border-slate-800 flex flex-col">
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-pink-400" />
                  <h3 className="font-bold text-white text-sm">
                    Live Chat Handover Requests
                  </h3>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-950 text-pink-300 border border-pink-800/80">
                  {urgentHandoverRequests.length} Total
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                Visitors who requested an "agent", "human", "pricing", or submitted their phone/WhatsApp:
              </p>

              <div className="space-y-3.5 overflow-y-auto max-h-[520px] pr-1">
                {urgentHandoverRequests.length === 0 ? (
                  <div className="p-6 bg-slate-950 rounded-lg text-center text-slate-500 text-xs border border-slate-800">
                    No urgent pending chat escalations right now.
                  </div>
                ) : (
                  urgentHandoverRequests.map((req) => {
                    const hasReplies = req.replies && req.replies.length > 0;
                    const reqPhone = req.userContact?.phone || (req.text.match(/(\+?[0-9]{10,14})/) ? req.text.match(/(\+?[0-9]{10,14})/)![0] : '');
                    const reqName = req.userContact?.name || 'Client';

                    return (
                      <div 
                        key={req.id} 
                        className={`p-3.5 rounded-xl border text-xs transition-all ${
                          hasReplies
                            ? 'bg-slate-950/70 border-emerald-800/50'
                            : 'bg-pink-950/25 border-pink-800/60 shadow-md'
                        }`}
                      >
                        {/* Header: Timestamp & Status Badge */}
                        <div className="flex justify-between items-center text-[10px] mb-2">
                          <span className="text-slate-400 font-mono">
                            Escalated at {req.timestamp}
                          </span>
                          {hasReplies ? (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-700/80 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              <span>Replied by Team</span>
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-pink-950 text-pink-400 border border-pink-700/80 flex items-center gap-1 animate-pulse">
                              <AlertTriangle className="w-3 h-3 text-pink-400" />
                              <span>Pending Team Reply</span>
                            </span>
                          )}
                        </div>

                        {/* Request Text */}
                        <div className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-800 text-slate-200 font-mono text-[11px] mb-2 leading-relaxed whitespace-pre-wrap">
                          {req.text}
                        </div>

                        {/* Visitor Contact Card */}
                        {req.userContact && (
                          <div className="p-2.5 bg-slate-900/60 rounded-lg border border-slate-800/80 text-[11px] text-slate-300 space-y-1 mb-2.5">
                            {req.userContact.name && (
                              <div className="flex items-center justify-between">
                                <span className="text-slate-400">Visitor Name:</span>
                                <span className="font-semibold text-white">{req.userContact.name}</span>
                              </div>
                            )}
                            {req.userContact.phone && (
                              <div className="flex items-center justify-between">
                                <span className="text-slate-400">WhatsApp / Phone:</span>
                                <a 
                                  href={`https://wa.me/${req.userContact.phone.replace(/[^0-9]/g, '')}`} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="text-[#25D366] font-bold flex items-center gap-1 hover:underline"
                                >
                                  <WhatsAppIcon className="w-3 h-3 fill-current" />
                                  <span>{req.userContact.phone}</span>
                                </a>
                              </div>
                            )}
                            {req.userContact.email && (
                              <div className="flex items-center justify-between">
                                <span className="text-slate-400">Email:</span>
                                <span className="text-teal-300 font-mono text-[10px]">{req.userContact.email}</span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* History of Sent Replies on this Handover */}
                        {hasReplies && (
                          <div className="space-y-1.5 mb-3 pl-3 border-l-2 border-emerald-500">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                              Dispatched Team Replies:
                            </span>
                            {req.replies!.map((rep) => (
                              <div key={rep.id} className="text-xs text-slate-300 bg-slate-900 p-2 rounded border border-slate-800">
                                <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1">
                                  <span className="font-bold text-teal-300">{rep.author || 'Engr. Team Lead'}</span>
                                  <span className="flex items-center gap-1 font-mono">
                                    {rep.channel === 'whatsapp' ? (
                                      <span className="text-[#25D366] font-bold flex items-center gap-0.5">
                                        <WhatsAppIcon className="w-3 h-3 fill-current" /> WhatsApp
                                      </span>
                                    ) : rep.channel === 'both' ? (
                                      <span className="text-teal-300 font-bold">Chat + WhatsApp</span>
                                    ) : (
                                      <span className="text-teal-400 font-bold">💬 Live Chat Window</span>
                                    )}
                                    <span>· {rep.sentAt}</span>
                                  </span>
                                </div>
                                <p className="text-[11px] text-slate-200 whitespace-pre-wrap">{rep.text}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Action Toolbar: Primary "Reply" Button + WhatsApp Direct */}
                        <div className="flex items-center justify-between pt-2.5 border-t border-slate-800/80 gap-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            {/* Primary Reply Button (Opens custom reply composer to send to Live Chat Window or WhatsApp) */}
                            <button
                              onClick={() => handleOpenHandoverReply(req)}
                              className="px-3.5 py-1.5 rounded-lg bg-[#008080] hover:bg-[#009999] text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:translate-y-0.5"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                              <span>Reply</span>
                            </button>

                            {/* Direct WhatsApp Action if phone available */}
                            {reqPhone && (
                              <a
                                href={`https://wa.me/${reqPhone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(reqName)},%20this%20is%20the%20engineering%20team%20at%20BARGAINPOWER%20following%20up%20on%20your%20live%20chat%20request.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-xs font-bold flex items-center gap-1.5 border border-[#25D366]/40 transition-colors"
                                title="Open WhatsApp Chat directly"
                              >
                                <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
                                <span>WhatsApp Direct</span>
                              </a>
                            )}
                          </div>

                          <button
                            onClick={() => {
                              handleOpenHandoverReply(req);
                            }}
                            className="text-[10px] text-slate-400 hover:text-teal-300 underline cursor-pointer"
                          >
                            Live Triage
                          </button>
                        </div>

                      </div>
                    );
                  })
                )}
              </div>
            </div>

          </div>
        )}

        {/* Tab 3: Visitor Analytics & Access Logs */}
        {activeTab === 'visitors' && (
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="font-bold text-white text-base">
                  Record of Visitors on the Website
                </h3>
                <p className="text-xs text-slate-400">
                  Continuous session monitoring logging simulated IP, device hardware, browser engine, and page navigation history.
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-teal-400 font-mono">{visitorCount}</span>
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider">Logged Sessions</span>
              </div>
            </div>

            {/* Visitor Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] font-semibold border-b border-slate-800">
                  <tr>
                    <th className="py-2.5 px-3">Session IP</th>
                    <th className="py-2.5 px-3">Device & OS</th>
                    <th className="py-2.5 px-3">Browser</th>
                    <th className="py-2.5 px-3">Page Visited</th>
                    <th className="py-2.5 px-3 text-right">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                  {visitorLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 text-teal-300">{log.ip}</td>
                      <td className="py-2.5 px-3 text-slate-200">{log.device}</td>
                      <td className="py-2.5 px-3 text-slate-400">{log.browser}</td>
                      <td className="py-2.5 px-3 text-white font-sans">{log.pageVisited}</td>
                      <td className="py-2.5 px-3 text-right text-slate-400">{log.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Reviews Moderation */}
        {activeTab === 'reviews' && (
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 space-y-4">
            <div className="pb-4 border-b border-slate-800">
              <h3 className="font-bold text-white text-base">
                Client Reviews Moderation & Publishing
              </h3>
              <p className="text-xs text-slate-400">
                Approve, reject, or purge customer feedback before or after display on the public site.
              </p>
            </div>

            <div className="space-y-3">
              {reviews.map((rev) => (
                <div key={rev.id} className="p-4 rounded-lg bg-slate-950 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">{rev.author}</span>
                      <span className="text-xs text-slate-400">({rev.companyOrRole})</span>
                      <span className="text-amber-400 text-xs font-mono">★ {rev.rating}/5</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        rev.approved ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-red-950 text-red-400'
                      }`}>
                        {rev.approved ? 'Live' : 'Hidden'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 italic">"{rev.comment}"</p>
                    <span className="text-[10px] text-teal-400 block">Service: {rev.serviceRelated}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => toggleReviewApproval(rev.id)}
                      className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 cursor-pointer"
                    >
                      {rev.approved ? 'Unpublish' : 'Approve'}
                    </button>
                    <button
                      onClick={() => deleteReview(rev.id)}
                      className="p-1.5 rounded bg-red-950/40 hover:bg-red-900 text-red-400 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: CMS Control Center Panel (Edit text, images, WhatsApp, endpoints) */}
        {activeTab === 'cms_settings' && (
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <div className="pb-4 border-b border-slate-800 mb-6 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white text-base">
                  Website Control Center & Real-Time Content Editor
                </h3>
                <p className="text-xs text-slate-400">
                  Update active WhatsApp phone number, support email, company details, or hero copy dynamically.
                </p>
              </div>
              <button
                type="button"
                onClick={resetSettingsToDefault}
                className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer"
              >
                Reset Defaults
              </button>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-4 max-w-3xl text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Active WhatsApp Phone Number (Global wa.me Endpoint) *
                  </label>
                  <input
                    type="text"
                    required
                    value={waNumberInput}
                    onChange={(e) => setWaNumberInput(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white font-mono focus:ring-2 focus:ring-[#008080] focus:outline-hidden"
                  />
                  <p className="text-[10px] text-slate-500 mt-1">Default: +2348037704936</p>
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Primary Helpdesk Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white font-mono focus:ring-2 focus:ring-[#008080] focus:outline-hidden"
                  />
                  <p className="text-[10px] text-slate-500 mt-1">Default: biockhelpdesk@gmail.com</p>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">
                  Company Name (Header, Branding & SEO) *
                </label>
                <input
                  type="text"
                  required
                  value={companyNameInput}
                  onChange={(e) => setCompanyNameInput(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white font-bold focus:ring-2 focus:ring-[#008080] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">
                  Top Announcement Bar Information (Smaller Rectangle at Top) *
                </label>
                <input
                  type="text"
                  value={announcementInput}
                  onChange={(e) => setAnnouncementInput(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-[#008080] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">
                  Physical Laboratory / Office Address
                </label>
                <input
                  type="text"
                  value={addressInput}
                  onChange={(e) => setAddressInput(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-[#008080] focus:outline-hidden"
                />
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-[#008080] hover:bg-[#006666] text-white font-bold transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save CMS Settings</span>
                </button>
                {saveSuccess && (
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Settings synchronized across the entire site!</span>
                  </span>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Tab: Products to Ship Out & Fulfillment Queue */}
        {activeTab === 'shipping_queue' && (
          <AdminShippingFulfillment />
        )}

        {/* Tab 6: Site Media & Picture CMS Manager */}
        {activeTab === 'cms_media' && (
          <AdminMediaManager />
        )}

        {/* Tab 7: Video Clips Studio & Upload Management */}
        {activeTab === 'admin_videos' && (
          <AdminVideoManager />
        )}

        {/* Modal: Direct Reply to Public Form Inquiry */}
        {selectedInquiry && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-slate-900 rounded-2xl max-w-xl w-full p-6 border border-slate-700 text-white shadow-2xl animate-scaleUp">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <div>
                  <h3 className="text-base font-bold text-white">
                    Send Email Response to {selectedInquiry.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Recipient: {selectedInquiry.email} ({selectedInquiry.phone})
                  </p>
                </div>
                <button
                  onClick={() => setSelectedInquiryId(null)}
                  className="text-slate-400 hover:text-white p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="p-3 bg-slate-950 rounded-lg text-xs text-slate-300 mb-4 border border-slate-800">
                <span className="text-slate-500 block text-[10px] mb-1 font-bold">Client Inquired:</span>
                <p className="line-clamp-2 italic">"{selectedInquiry.message}"</p>
              </div>

              <form onSubmit={handleSendInquiryReply} className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Responding Officer Name</label>
                  <input
                    type="text"
                    required
                    value={replyAuthor}
                    onChange={(e) => setReplyAuthor(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-hidden focus:ring-2 focus:ring-[#008080]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Email Body Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-hidden focus:ring-2 focus:ring-[#008080]"
                  ></textarea>
                </div>

                {replyStatusMsg && (
                  <p className="text-xs text-emerald-400 font-semibold">{replyStatusMsg}</p>
                )}

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedInquiryId(null)}
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-[#008080] hover:bg-[#006666] text-white font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send & Dispatch to Email</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal 2: Live Chat Handover Request Reply Composer (Direct to WhatsApp, Live Chat Window, or Both) */}
        {activeHandoverId && selectedHandover && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
            <div className="bg-slate-900 rounded-2xl max-w-xl w-full p-6 border border-teal-500/50 text-white shadow-2xl relative animate-scaleUp">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#008080] text-white flex items-center justify-center shadow-md">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Reply to Live Chat Handover Request
                    </h3>
                    <span className="text-[11px] text-teal-300">
                      Visitor: {selectedHandover.userContact?.name || 'Live Chat Visitor'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveHandoverId(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Visitor's Original Message Snapshot */}
              <div className="mb-4 p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-pink-400 block mb-1">
                  Visitor Handover Inquiry:
                </span>
                <p className="text-xs text-slate-200 leading-relaxed font-mono">
                  {selectedHandover.text}
                </p>
              </div>

              {/* Editable Visitor WhatsApp / Phone Input */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
                    <span>Target WhatsApp / Phone Number:</span>
                  </span>
                  <span className="text-[10px] text-slate-400">Can be verified or edited before dispatch</span>
                </label>
                <input
                  type="text"
                  value={handoverPhoneInput}
                  onChange={(e) => setHandoverPhoneInput(e.target.value)}
                  placeholder="e.g. +2348037704936"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white font-mono text-xs focus:ring-2 focus:ring-[#008080] focus:outline-hidden"
                />
              </div>

              {/* Quick Template Selector */}
              <div className="mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                  Quick Response Templates:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {HANDOVER_TEMPLATES.map((tmpl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setHandoverReplyText(tmpl.text(selectedHandover.userContact?.name || 'Client'))}
                      className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-teal-900/60 hover:text-teal-200 text-[11px] font-medium text-slate-300 border border-slate-700 transition-colors cursor-pointer"
                    >
                      {tmpl.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reply Message Textarea */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Team Reply Message:
                </label>
                <textarea
                  rows={4}
                  value={handoverReplyText}
                  onChange={(e) => setHandoverReplyText(e.target.value)}
                  placeholder="Type your engineering response to the visitor..."
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white text-xs leading-relaxed focus:ring-2 focus:ring-[#008080] focus:outline-hidden"
                />
              </div>

              {/* Status Feedback Notification */}
              {handoverFeedbackMsg && (
                <div className="mb-4 p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-600 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{handoverFeedbackMsg}</span>
                </div>
              )}

              {/* Dispatch Action Options: WhatsApp or Live Chat Window */}
              <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                <button
                  type="button"
                  onClick={() => setActiveHandoverId(null)}
                  className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer text-center"
                >
                  Cancel
                </button>

                <div className="flex items-center gap-2 flex-wrap justify-end">
                  {/* Option 1: Send directly to visitor's Live Chat Window */}
                  <button
                    type="button"
                    disabled={!handoverReplyText.trim()}
                    onClick={() => handleDispatchHandoverReply('chat')}
                    className="px-3.5 py-2 rounded-lg bg-[#008080] hover:bg-[#009999] disabled:opacity-40 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md active:translate-y-0.5"
                    title="Transmits message in real-time to visitor's active floating chat window"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send to Live Chat Window</span>
                  </button>

                  {/* Option 2: Send directly on WhatsApp */}
                  <button
                    type="button"
                    disabled={!handoverReplyText.trim()}
                    onClick={() => handleDispatchHandoverReply('whatsapp')}
                    className="px-3.5 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] disabled:opacity-40 text-black font-extrabold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md active:translate-y-0.5"
                    title="Opens WhatsApp session directly with the visitor"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-black" />
                    <span>Reply on WhatsApp</span>
                  </button>

                  {/* Option 3: Send to Both */}
                  <button
                    type="button"
                    disabled={!handoverReplyText.trim()}
                    onClick={() => handleDispatchHandoverReply('both')}
                    className="px-3 py-2 rounded-lg bg-gradient-to-r from-[#008080] to-[#25D366] hover:brightness-110 disabled:opacity-40 text-white font-black text-xs transition-all flex items-center justify-center gap-1 cursor-pointer shadow-md active:translate-y-0.5"
                    title="Dispatches to visitor chat window and launches WhatsApp"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                    <span>Send to Both</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
