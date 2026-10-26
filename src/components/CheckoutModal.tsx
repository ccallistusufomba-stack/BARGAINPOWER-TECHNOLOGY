import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { CartItem, OrderRecord } from '../types';
import { formatNaira } from '../utils/pricing';
import confetti from 'canvas-confetti';
import { 
  X, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  Copy, 
  Check, 
  Clock, 
  AlertCircle, 
  RefreshCw, 
  Printer, 
  Truck, 
  PackageCheck, 
  CreditCard, 
  Trash2, 
  Plus, 
  Minus,
  Sparkles,
  ExternalLink,
  Lock,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const { 
    isCheckoutOpen, 
    closeCheckout, 
    cart, 
    directBuyItem, 
    removeFromCart, 
    updateCartQuantity, 
    clearCart,
    settings 
  } = useApp();

  // Active items for this checkout session: either the single directBuyItem, or the full shopping cart
  const itemsToCheckout: CartItem[] = directBuyItem ? [directBuyItem] : cart;

  // Checkout Steps: 'review_details' | 'awaiting_transfer' | 'payment_success' | 'payment_failed'
  const [step, setStep] = useState<'review_details' | 'awaiting_transfer' | 'payment_success' | 'payment_failed'>('review_details');

  // Customer Delivery Info
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [city, setCity] = useState('Lagos');
  const [state, setState] = useState('Lagos State');
  const [deliveryNotes, setDeliveryNotes] = useState('');
  const [provider, setProvider] = useState<'Paystack' | 'Monnify'>('Paystack');

  // Error feedback
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Active Order and Virtual Account from Backend
  const [activeOrder, setActiveOrder] = useState<OrderRecord | null>(null);
  const [countdown, setCountdown] = useState(1800); // 30 mins in seconds
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedAmount, setCopiedAmount] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [isPolling, setIsPolling] = useState(false);

  const pollingIntervalRef = useRef<any>(null);

  // Calculate pricing breakdown
  const subtotal = itemsToCheckout.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  // Free shipping above ₦100,000, else standard ₦2,500 nationwide courier
  const shippingFee = subtotal > 100000 || subtotal === 0 ? 0 : 2500;
  const grandTotal = subtotal + shippingFee;

  // Reset modal state when opened/closed
  useEffect(() => {
    if (isCheckoutOpen) {
      if (!activeOrder) {
        setStep('review_details');
      }
      setFormError('');
    } else {
      // Clear polling when closed
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
      }
    }
  }, [isCheckoutOpen]);

  // Countdown timer when awaiting transfer
  useEffect(() => {
    let timer: any;
    if (step === 'awaiting_transfer' && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setStep('payment_failed');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step, countdown]);

  // Real-time Polling / Webhook Listener
  useEffect(() => {
    if (step === 'awaiting_transfer' && activeOrder?.orderId) {
      setIsPolling(true);

      const checkOrderStatus = async () => {
        try {
          const res = await fetch(`/api/orders/${activeOrder.orderId}`);
          if (!res.ok) return;
          const data = await res.json();
          
          if (data.status === 'Paid') {
            setActiveOrder(prev => prev ? { ...prev, status: 'Paid', receipt: data.receipt, shipping: data.shipping, paidAt: data.paidAt } : null);
            setStep('payment_success');
            setIsPolling(false);
            if (pollingIntervalRef.current) clearInterval(pollingIntervalRef.current);
            
            // Trigger confetti celebration
            try {
              confetti({
                particleCount: 120,
                spread: 70,
                origin: { y: 0.6 }
              });
            } catch (err) {
              console.log(err);
            }

            // Clear the cart if it was a cart checkout
            if (!directBuyItem) {
              clearCart();
            }
          } else if (data.status === 'Failed') {
            setActiveOrder(prev => prev ? { ...prev, status: 'Failed', failureReason: data.failureReason } : null);
            setStep('payment_failed');
            setIsPolling(false);
            if (pollingIntervalRef.current) clearInterval(pollingIntervalRef.current);
          }
        } catch (err) {
          console.error('Polling error checking order:', err);
        }
      };

      // Poll every 2.5 seconds
      pollingIntervalRef.current = setInterval(checkOrderStatus, 2500);

      return () => {
        if (pollingIntervalRef.current) {
          clearInterval(pollingIntervalRef.current);
        }
      };
    }
  }, [step, activeOrder?.orderId]);

  if (!isCheckoutOpen) return null;

  // Form submit: Call backend to create order & generate dynamic one-time virtual account
  const handleInitiateTransfer = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim()) {
      setFormError('Please enter your full customer / company name.');
      return;
    }
    if (!customerEmail.trim() || !customerEmail.includes('@')) {
      setFormError('Please provide a valid email address for receipt delivery.');
      return;
    }
    if (!customerPhone.trim() || customerPhone.length < 8) {
      setFormError('Please enter your active phone / WhatsApp contact for dispatch notification.');
      return;
    }
    if (!deliveryAddress.trim()) {
      setFormError('Please enter the delivery address for shipping.');
      return;
    }
    if (itemsToCheckout.length === 0) {
      setFormError('Your order contains no items.');
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/payment/initiate-transfer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: customerName.trim(),
          customerEmail: customerEmail.trim(),
          customerPhone: customerPhone.trim(),
          deliveryAddress: deliveryAddress.trim(),
          city,
          state,
          notes: deliveryNotes,
          items: itemsToCheckout,
          totalAmount: grandTotal,
          provider
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to generate dynamic virtual account');
      }

      setActiveOrder(data.order);
      setCountdown(1800); // 30 minutes
      setStep('awaiting_transfer');
    } catch (error: any) {
      setFormError(error.message || 'Error communicating with backend payment server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Simulate server-to-server webhook (for testing & verification)
  const handleSimulateWebhook = async (eventType: 'charge.success' | 'charge.failed') => {
    if (!activeOrder?.orderId) return;
    setIsSimulating(true);

    try {
      const res = await fetch('/api/payment/simulate-webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: activeOrder.orderId,
          eventType,
          failureReason: eventType === 'charge.failed' ? 'Bank transfer declined by sending bank / session expired' : undefined
        })
      });
      const data = await res.json();
      if (data.success && data.order) {
        setActiveOrder(data.order);
        if (eventType === 'charge.success') {
          setStep('payment_success');
          try {
            confetti({
              particleCount: 130,
              spread: 75,
              origin: { y: 0.6 }
            });
          } catch (e) {
            console.log(e);
          }
          if (!directBuyItem) {
            clearCart();
          }
        } else {
          setStep('payment_failed');
        }
      }
    } catch (err) {
      console.error('Simulation error:', err);
    } finally {
      setIsSimulating(false);
    }
  };

  const copyToClipboard = (text: string, type: 'account' | 'amount') => {
    navigator.clipboard.writeText(text);
    if (type === 'account') {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2500);
    } else {
      setCopiedAmount(true);
      setTimeout(() => setCopiedAmount(false), 2500);
    }
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-[#081F12] text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-emerald-900/60 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base sm:text-lg text-white">
                  {step === 'review_details' && 'Secure Checkout & Bank Transfer'}
                  {step === 'awaiting_transfer' && 'Dynamic Virtual Account Transfer'}
                  {step === 'payment_success' && 'Payment Verified & Confirmed!'}
                  {step === 'payment_failed' && 'Payment Declined'}
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                  {provider} Bank Transfer
                </span>
              </div>
              <p className="text-xs text-emerald-200/80">
                Official BARGAINPOWER & TECHNOLOGY Engineering Store
              </p>
            </div>
          </div>

          <button
            onClick={closeCheckout}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with Scroll */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6 flex-1">

          {/* ========================================================================= */}
          {/* STEP 1: REVIEW ITEMS & CUSTOMER DETAILS                                   */}
          {/* ========================================================================= */}
          {step === 'review_details' && (
            <div className="space-y-6">
              
              {/* Order Items List */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5 text-[#008080]" />
                    <span>Order Summary ({itemsToCheckout.reduce((acc, i) => acc + i.quantity, 0)} Items)</span>
                  </h4>
                  {directBuyItem ? (
                    <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Express Direct Purchase
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-500">
                      Nationwide Delivery
                    </span>
                  )}
                </div>

                {itemsToCheckout.length === 0 ? (
                  <div className="text-center py-6 text-slate-500 text-xs">
                    Your cart is empty. Please add components to buy.
                  </div>
                ) : (
                  <div className="divide-y divide-slate-200 max-h-48 overflow-y-auto pr-1">
                    {itemsToCheckout.map((item) => (
                      <div key={item.id} className="py-2.5 flex items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-3 min-w-0">
                          {item.image ? (
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-10 h-10 object-cover rounded-lg border border-slate-200 shrink-0 bg-white"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0 text-[#008080]">
                              <Building2 className="w-5 h-5" />
                            </div>
                          )}
                          <div className="min-w-0">
                            <p className="font-bold text-slate-900 truncate">{item.name}</p>
                            <p className="text-[11px] text-slate-500">{item.category} • {formatNaira(item.price)} each</p>
                          </div>
                        </div>

                        {/* Quantity & Price */}
                        <div className="flex items-center gap-3 shrink-0">
                          {!directBuyItem ? (
                            <div className="flex items-center border border-slate-300 rounded-md bg-white">
                              <button
                                type="button"
                                onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                                className="px-1.5 py-0.5 text-slate-500 hover:text-slate-800 cursor-pointer"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2 font-mono font-semibold text-slate-800">{item.quantity}</span>
                              <button
                                type="button"
                                onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                                className="px-1.5 py-0.5 text-slate-500 hover:text-slate-800 cursor-pointer"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          ) : (
                            <span className="px-2 py-0.5 rounded bg-slate-200 font-mono text-slate-700">
                              Qty: {item.quantity}
                            </span>
                          )}

                          <span className="font-bold font-mono text-slate-900 w-24 text-right">
                            {formatNaira(item.price * item.quantity)}
                          </span>

                          {!directBuyItem && (
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              className="text-slate-400 hover:text-red-600 transition-colors p-1"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Subtotals & Fees */}
                <div className="mt-3 pt-3 border-t border-slate-200 space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-mono font-semibold text-slate-900">{formatNaira(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Insured Nationwide Courier Dispatch:</span>
                    <span className="font-mono font-semibold text-slate-900">
                      {shippingFee === 0 ? <span className="text-emerald-700">FREE (Orders &gt; ₦100,000)</span> : formatNaira(shippingFee)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-slate-900 pt-1.5 border-t border-slate-200">
                    <span className="text-emerald-950">Total Amount to Pay:</span>
                    <span className="font-mono text-base text-emerald-800">{formatNaira(grandTotal)}</span>
                  </div>
                </div>
              </div>

              {/* Payment Provider Selector */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Bank Transfer Gateway Provider
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label 
                    className={`flex items-start gap-3 p-3 rounded-xl border-2 transition-all cursor-pointer ${
                      provider === 'Paystack' 
                        ? 'bg-emerald-50/50 border-emerald-600 text-slate-900' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="payment_provider" 
                      checked={provider === 'Paystack'} 
                      onChange={() => setProvider('Paystack')}
                      className="mt-1 text-emerald-600 focus:ring-emerald-500" 
                    />
                    <div>
                      <span className="font-bold text-xs text-slate-900 block flex items-center gap-1.5">
                        <span>Paystack Dedicated Virtual Account</span>
                        <span className="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 text-[9px]">Recommended</span>
                      </span>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                        Instant dynamic account on Wema Bank / Titan Trust Bank with automatic server webhook confirmation.
                      </p>
                    </div>
                  </label>

                  <label 
                    className={`flex items-start gap-3 p-3 rounded-xl border-2 transition-all cursor-pointer ${
                      provider === 'Monnify' 
                        ? 'bg-blue-50/50 border-blue-600 text-slate-900' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="payment_provider" 
                      checked={provider === 'Monnify'} 
                      onChange={() => setProvider('Monnify')}
                      className="mt-1 text-blue-600 focus:ring-blue-500" 
                    />
                    <div>
                      <span className="font-bold text-xs text-slate-900 block">
                        Monnify Dynamic Bank Transfer
                      </span>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                        Dynamic one-time virtual account on Providus Bank with automated settlement and status tracking.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Customer & Shipping Details Form */}
              <form onSubmit={handleInitiateTransfer} className="space-y-4">
                <div className="border-t border-slate-200 pt-4">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#008080]" />
                    <span>Customer & Delivery Details</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Full Name / Company Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Engr. Babatunde Adeleke"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Email Address (for Digital Receipt) *
                      </label>
                      <input 
                        type="email" 
                        required
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        placeholder="babatunde@automation.ng"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp Number (Dispatch Tracking) *
                      </label>
                      <input 
                        type="tel" 
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="+234 803 123 4567"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          City
                        </label>
                        <input 
                          type="text" 
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="e.g. Ikeja"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          State
                        </label>
                        <input 
                          type="text" 
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          placeholder="e.g. Lagos State"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block font-semibold text-slate-700 mb-1">
                        Delivery Street Address *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        placeholder="Plot 12, Industrial Layout, Off Commercial Avenue"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block font-semibold text-slate-700 mb-1">
                        Delivery Instructions / Component Specifications (Optional)
                      </label>
                      <textarea 
                        rows={2}
                        value={deliveryNotes}
                        onChange={(e) => setDeliveryNotes(e.target.value)}
                        placeholder="e.g. Please call upon arrival at gate. Test voltage coil before packing."
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                      />
                    </div>
                  </div>
                </div>

                {formError && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || itemsToCheckout.length === 0}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#081F12] via-[#0D3820] to-[#124B2C] hover:from-[#0a2717] hover:to-[#175b36] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Generating Dynamic Virtual Account...</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 text-emerald-400" />
                        <span>Generate One-Time Bank Account & Pay {formatNaira(grandTotal)}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-slate-500 mt-2 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>A unique dedicated virtual account number will be created specifically for this exact amount.</span>
                  </p>
                </div>
              </form>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 2: AWAITING DYNAMIC BANK TRANSFER (VIRTUAL ACCOUNT DISPLAY & POLLER) */}
          {/* ========================================================================= */}
          {step === 'awaiting_transfer' && activeOrder && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Notice Banner */}
              <div className="p-4 rounded-xl bg-emerald-50 border-2 border-emerald-300 text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-emerald-900">
                      Dynamic Virtual Account Ready for Transfer
                    </h4>
                    <p className="text-[11px] text-emerald-800 leading-relaxed">
                      Please open your mobile banking app or internet banking and transfer the <strong>exact amount</strong> to the dedicated account below.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-emerald-300 shadow-xs font-mono font-bold text-emerald-900 text-xs shrink-0">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                  <span>Expires in: {formatTimer(countdown)}</span>
                </div>
              </div>

              {/* The Dynamic One-Time Virtual Account Card */}
              <div className="bg-gradient-to-br from-slate-900 via-[#0a1f14] to-slate-900 rounded-2xl p-6 text-white shadow-xl border border-emerald-700/50 relative overflow-hidden">
                {/* Background glow watermark */}
                <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between border-b border-emerald-800/60 pb-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300">
                        {activeOrder.provider.toUpperCase()} DEDICATED VIRTUAL ACCOUNT
                      </span>
                      <h3 className="text-sm font-semibold text-white">One-Time Dynamic Bank Account</h3>
                    </div>
                    <div className="px-2.5 py-1 rounded bg-emerald-900/80 border border-emerald-500/50 text-[11px] font-mono font-bold text-emerald-300">
                      Order #{activeOrder.orderId}
                    </div>
                  </div>

                  {/* Main Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Bank Name */}
                    <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                      <span className="text-[10px] text-emerald-300/80 block uppercase font-mono">Bank Name</span>
                      <span className="text-base sm:text-lg font-bold text-white block mt-0.5">
                        {activeOrder.virtualAccount.bankName}
                      </span>
                    </div>

                    {/* Account Name */}
                    <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                      <span className="text-[10px] text-emerald-300/80 block uppercase font-mono">Beneficiary Account Name</span>
                      <span className="text-sm sm:text-base font-bold text-emerald-200 block mt-0.5 truncate">
                        {activeOrder.virtualAccount.accountName}
                      </span>
                    </div>

                    {/* Account Number with 1-Click Copy */}
                    <div className="bg-white/10 rounded-xl p-4 border border-emerald-500/50 md:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] text-emerald-300 font-mono uppercase tracking-wider block">
                          One-Time 10-Digit NUBAN Account Number
                        </span>
                        <div className="text-2xl sm:text-3xl font-mono font-black tracking-widest text-emerald-300 mt-1 select-all">
                          {activeOrder.virtualAccount.accountNumber}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => copyToClipboard(activeOrder.virtualAccount.accountNumber, 'account')}
                        className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer shrink-0"
                      >
                        {copiedAccount ? (
                          <>
                            <Check className="w-4 h-4 text-slate-950 stroke-[3]" />
                            <span>Account Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy Account Number</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Exact Amount to Transfer */}
                    <div className="bg-white/5 rounded-xl p-3.5 border border-white/10 md:col-span-2 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-emerald-300/80 block uppercase font-mono">
                          Exact Transfer Amount (Do Not Round Up or Down)
                        </span>
                        <span className="text-xl sm:text-2xl font-bold font-mono text-white block mt-0.5">
                          {formatNaira(activeOrder.virtualAccount.amount)}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => copyToClipboard(String(activeOrder.virtualAccount.amount), 'amount')}
                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                      >
                        {copiedAmount ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedAmount ? 'Copied' : 'Copy Amount'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Warning advice */}
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 text-[11px] text-amber-200 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      This virtual account is uniquely generated for this transaction only. 
                      Do not reuse or save this account number for future purchases.
                    </span>
                  </div>
                </div>
              </div>

              {/* Active Webhook Listener & Polling Status */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </div>
                    <span className="text-xs font-bold text-slate-800">
                      Webhook Listener Active: Awaiting Server Confirmation...
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-slate-500">
                    Endpoint: POST /api/webhooks/{activeOrder.provider.toLowerCase()}
                  </span>
                </div>

                <p className="text-[11px] text-slate-600 leading-relaxed">
                  As soon as you transfer the funds via your bank, {activeOrder.provider}'s payment network sends a cryptographic server-to-server webhook confirmation (<code>charge.success</code>). 
                  Our backend will automatically verify it, update your order to 'Paid', unlock your purchase, and queue the items for dispatch.
                </p>

                {/* Developer / Tester Webhook Simulation Controls */}
                <div className="pt-2 border-t border-slate-200 mt-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#008080]" />
                      <span>Live Testing & Webhook Verification Simulator</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">No real money required to test</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      disabled={isSimulating}
                      onClick={() => handleSimulateWebhook('charge.success')}
                      className="px-3.5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                      title="Simulate bank transfer confirmation from Paystack webhook"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Simulate Customer Bank Transfer (charge.success)</span>
                    </button>

                    <button
                      type="button"
                      disabled={isSimulating}
                      onClick={() => handleSimulateWebhook('charge.failed')}
                      className="px-3 py-2 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold transition-all cursor-pointer disabled:opacity-50"
                      title="Simulate transfer decline"
                    >
                      <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                      <span>Simulate Transfer Declined (charge.failed)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Back button */}
              <div className="flex justify-between items-center text-xs">
                <button
                  type="button"
                  onClick={() => setStep('review_details')}
                  className="text-slate-500 hover:text-slate-800 underline cursor-pointer"
                >
                  &larr; Back to Order Details
                </button>
                <span className="text-slate-400 font-mono text-[11px]">
                  Ref: {activeOrder.reference}
                </span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 3: PAYMENT CONFIRMED / SUCCESS SCREEN                                 */}
          {/* ========================================================================= */}
          {step === 'payment_success' && activeOrder && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Success Hero Header */}
              <div className="text-center py-4 bg-emerald-50 rounded-2xl border-2 border-emerald-300 p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-600/30">
                  <Check className="w-9 h-9 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-emerald-950">
                    Payment Successfully Verified!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 font-medium mt-1">
                    Confirmed via Server-to-Server Webhook ({activeOrder.receipt?.verificationSource || 'charge.success'})
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-200/80 border border-emerald-400 text-emerald-900 text-xs font-mono font-bold">
                  <PackageCheck className="w-4 h-4 text-emerald-800" />
                  <span>Order Status: PAID & UNLOCKED</span>
                </div>
              </div>

              {/* Automatic Shipping Dispatch Notification */}
              <div className="p-4 rounded-xl bg-slate-900 text-white border border-emerald-600/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-emerald-300">
                      Added to Backend Dispatch & Shipping Queue
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                      Your items have been entered into our warehouse fulfillment log. 
                      Our hardware team is preparing ESD static-shield packaging for immediate courier dispatch to:
                    </p>
                    <p className="text-xs text-white font-semibold mt-1">
                      {activeOrder.customer.address}, {activeOrder.customer.city}, {activeOrder.customer.state}
                    </p>
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-mono shrink-0">
                  Estimated Delivery: 2-3 Business Days
                </div>
              </div>

              {/* Official Verifiable Digital Receipt Card */}
              {activeOrder.receipt && (
                <div className="bg-white rounded-xl border-2 border-slate-300 p-5 shadow-sm space-y-4 print:border-none print:shadow-none" id="digital-receipt">
                  <div className="flex items-start justify-between border-b border-slate-200 pb-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#008080] font-bold">
                        OFFICIAL VERIFIED DIGITAL RECEIPT
                      </span>
                      <h4 className="text-base font-bold text-slate-900">
                        BARGAINPOWER & TECHNOLOGY LTD.
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Automated Power, Microcontrollers & Industrial Automation
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] font-mono font-bold text-slate-900 block">
                        {activeOrder.receipt.receiptNumber}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono block">
                        {new Date(activeOrder.receipt.verifiedAt).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Customer and Settlement Info */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase block">Billed To</span>
                      <span className="font-bold text-slate-800 block truncate">{activeOrder.customer.name}</span>
                      <span className="text-[11px] text-slate-500 block truncate">{activeOrder.customer.email}</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase block">Payment Channel</span>
                      <span className="font-bold text-slate-800 block">Bank Transfer (DVA)</span>
                      <span className="text-[11px] text-slate-500 block">{activeOrder.virtualAccount.bankName}</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase block">Transaction Ref</span>
                      <span className="font-mono font-semibold text-slate-800 text-[11px] block truncate">
                        {activeOrder.receipt.transactionRef}
                      </span>
                      <span className="text-[10px] text-emerald-700 font-semibold">● Settled Server-to-Server</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase block">Total Amount Settled</span>
                      <span className="text-sm font-black font-mono text-emerald-800 block">
                        {formatNaira(activeOrder.receipt.amountPaid)}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase font-mono">100% Verified</span>
                    </div>
                  </div>

                  {/* Purchased Items Table */}
                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 text-slate-600 border-b border-slate-200 font-semibold">
                        <tr>
                          <th className="p-2.5">Component / Product Description</th>
                          <th className="p-2.5 text-center">Qty</th>
                          <th className="p-2.5 text-right">Unit Price</th>
                          <th className="p-2.5 text-right">Line Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-800">
                        {activeOrder.items.map((item, idx) => (
                          <tr key={idx}>
                            <td className="p-2.5">
                              <span className="font-bold block text-slate-900">{item.name}</span>
                              <span className="text-[10px] text-slate-500">{item.category}</span>
                            </td>
                            <td className="p-2.5 text-center font-mono">{item.quantity}</td>
                            <td className="p-2.5 text-right font-mono">{formatNaira(item.price)}</td>
                            <td className="p-2.5 text-right font-mono font-bold">{formatNaira(item.price * item.quantity)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Verification Auth Seal */}
                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-slate-200 text-[11px] text-slate-500">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Security Verification Hash: <code className="font-mono text-slate-700 bg-slate-100 px-1 py-0.5 rounded">{activeOrder.receipt.authSignature}</code></span>
                    </div>

                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print / Save Receipt</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Close / Continue Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={closeCheckout}
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Return to Store & Browse Components</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 4: PAYMENT DECLINED / FAILED SCREEN                                   */}
          {/* ========================================================================= */}
          {step === 'payment_failed' && (
            <div className="space-y-6 text-center py-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto border-2 border-red-300">
                <AlertCircle className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-red-950">
                  Transfer Declined or Expired
                </h3>
                <p className="text-xs sm:text-sm text-red-700 max-w-md mx-auto mt-1">
                  {activeOrder?.failureReason || 'The bank transfer was not completed or the dynamic virtual account reached its expiration timeout.'}
                </p>
              </div>

              {/* Blocked Access Notice */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-xs text-red-800 max-w-lg mx-auto text-left flex items-start gap-3">
                <Lock className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-red-900">Access to Order Blocked</span>
                  <span>
                    Because payment could not be verified by the server webhook, the order has not been placed in the dispatch queue. 
                    Please generate a fresh dynamic account to re-attempt payment.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setStep('review_details');
                    setActiveOrder(null);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  Generate New Dynamic Account
                </button>

                <a
                  href={`https://wa.me/${(settings.whatsappNumber || '2348000000000').replace(/[^0-9]/g, '')}?text=Hello%20BARGAINPOWER,%20I%20had%20an%20issue%20with%20bank%20transfer%20for%20order%20${activeOrder?.orderId || ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all inline-flex items-center justify-center gap-2"
                >
                  <span>Speak with Technical Support on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
