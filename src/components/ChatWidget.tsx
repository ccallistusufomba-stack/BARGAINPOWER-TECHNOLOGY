import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  ShieldAlert, 
  CheckCircle2, 
  Headphones, 
  AlertCircle,
  Minimize2
} from 'lucide-react';
import { validateEmail, validatePhone } from '../utils/sanitize';

export const ChatWidget: React.FC = () => {
  const { 
    chatMessages, 
    isChatOpen, 
    toggleChat, 
    sendUserMessage, 
    sendUserContactInfo, 
    isEscalated 
  } = useApp();

  const [inputText, setInputText] = useState('');
  const [showContactCapture, setShowContactCapture] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactError, setContactError] = useState('');

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll chat to latest message
  useEffect(() => {
    if (isChatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isChatOpen]);

  // Check if latest message asks for contact info
  useEffect(() => {
    const lastMsg = chatMessages[chatMessages.length - 1];
    if (lastMsg && lastMsg.status === 'Escalated to Team' && lastMsg.sender === 'bot') {
      setShowContactCapture(true);
    }
  }, [chatMessages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendUserMessage(inputText);
    setInputText('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim()) {
      setContactError('Please enter your name');
      return;
    }
    if (!validatePhone(contactPhone)) {
      setContactError('Please enter a valid phone number');
      return;
    }
    if (!validateEmail(contactEmail)) {
      setContactError('Please enter a valid email address');
      return;
    }

    setContactError('');
    sendUserContactInfo({
      name: contactName,
      phone: contactPhone,
      email: contactEmail
    });
    setShowContactCapture(false);
  };

  return (
    <>
      {/* Floating Chat Trigger Button (Bottom Right, positioned beside or above WhatsApp) */}
      {!isChatOpen && (
        <aside 
          aria-label="Live Chat Support"
          className="fixed bottom-24 right-6 z-40"
        >
          <button
            onClick={toggleChat}
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#008080] hover:bg-[#006666] text-white shadow-xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer font-bold text-xs"
            aria-label="Open Live Chat"
          >
            <div className="relative">
              <MessageSquare className="w-5 h-5" />
              {isEscalated && (
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF007F] absolute -top-1 -right-1 ring-2 ring-white animate-pulse"></span>
              )}
            </div>
            <span className="hidden sm:inline">Ask Engineer / Chat</span>
          </button>
        </aside>
      )}

      {/* Floating Chat Tray Interface */}
      {isChatOpen && (
        <aside 
          aria-label="Live Technical Chat Session"
          className="fixed bottom-6 right-4 sm:right-6 z-50 w-[94vw] sm:w-[380px] h-[520px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-300 flex flex-col overflow-hidden animate-scaleUp"
        >
          {/* Chat Header (Dark Navy) */}
          <div className="bg-[#0A192F] text-white p-3.5 flex items-center justify-between border-b border-teal-900/60 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-800 text-teal-300 flex items-center justify-center border border-teal-600/40">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-white">
                  BARGAINPOWER Engineering Desk
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-teal-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>{isEscalated ? 'Team Agent Interfacing' : 'AI Engineer Online'}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={toggleChat}
                className="p-1 text-slate-300 hover:text-white rounded hover:bg-slate-800 cursor-pointer"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={toggleChat}
                className="p-1 text-slate-300 hover:text-white rounded hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Log Area */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#F8F9FA] text-xs">
            {chatMessages.map((msg) => {
              const isUser = msg.sender === 'user';
              const isTeam = msg.sender === 'team';

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 leading-relaxed shadow-2xs ${
                      isUser
                        ? 'bg-[#008080] text-white rounded-br-none'
                        : isTeam
                        ? 'bg-amber-100 border border-amber-300 text-amber-950 font-medium rounded-bl-none'
                        : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
                    }`}
                  >
                    {!isUser && (
                      <span className="block text-[10px] font-bold uppercase tracking-wider mb-1 text-slate-500">
                        {isTeam ? '👨‍💻 Human Engineer Reply:' : '⚡ BARGAINPOWER Assistant:'}
                      </span>
                    )}
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    {msg.status === 'Escalated to Team' && !isUser && (
                      <div className="mt-2 pt-1 border-t border-slate-200/60 flex items-center gap-1 text-[10px] text-pink-600 font-bold">
                        <AlertCircle className="w-3 h-3" />
                        <span>Escalated to Live Engineering Queue</span>
                      </div>
                    )}
                  </div>
                  <span className="text-[9px] text-slate-400 mt-1 px-1 font-mono">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {/* In-chat contact capture form when user asks for agent/team/quote */}
            {showContactCapture && (
              <div className="bg-white rounded-xl p-3.5 border border-teal-300 shadow-sm animate-fadeIn">
                <div className="flex items-center gap-1.5 text-teal-800 font-bold text-xs mb-2">
                  <Headphones className="w-4 h-4 text-[#008080]" />
                  <span>Escalation: Dispatch to Live Engineering Team</span>
                </div>
                <p className="text-[11px] text-slate-600 mb-2.5">
                  Confirm your contact information so our duty engineer can respond directly to your inquiry:
                </p>

                <form onSubmit={handleContactSubmit} className="space-y-2 text-xs">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-2.5 py-1.5 border border-slate-300 rounded bg-slate-50 focus:bg-white focus:outline-hidden"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp / Phone Number *"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full px-2.5 py-1.5 border border-slate-300 rounded bg-slate-50 focus:bg-white focus:outline-hidden"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-2.5 py-1.5 border border-slate-300 rounded bg-slate-50 focus:bg-white focus:outline-hidden"
                  />
                  {contactError && (
                    <p className="text-[10px] text-red-500 font-medium">{contactError}</p>
                  )}
                  <button
                    type="submit"
                    className="w-full py-1.5 px-3 rounded bg-[#008080] hover:bg-[#006666] text-white font-bold text-xs cursor-pointer shadow-xs"
                  >
                    Confirm & Send to Live Duty Engineer
                  </button>
                </form>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Suggestion Chips */}
          <div className="px-3 py-1.5 bg-slate-100 border-t border-slate-200 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 text-[10px]">
            <span className="text-slate-400 font-semibold shrink-0">Quick Ask:</span>
            <button
              onClick={() => sendUserMessage('I want to speak with a human live person / agent')}
              className="px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-teal-500 hover:text-teal-800 shrink-0 cursor-pointer"
            >
              Talk to Human Agent
            </button>
            <button
              onClick={() => sendUserMessage('How do 3-pole contactors protect smart relays?')}
              className="px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-teal-500 hover:text-teal-800 shrink-0 cursor-pointer"
            >
              Contactor Specs
            </button>
            <button
              onClick={() => sendUserMessage('Tell me about your dry season snail farming irrigation')}
              className="px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-teal-500 hover:text-teal-800 shrink-0 cursor-pointer"
            >
              Snail Farming
            </button>
          </div>

          {/* Chat Input Bar */}
          <form 
            onSubmit={handleSendMessage}
            className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask a question or type 'agent'..."
              className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#008080]"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2 rounded-lg bg-[#008080] hover:bg-[#006666] text-white disabled:opacity-40 transition-colors cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </aside>
      )}
    </>
  );
};
