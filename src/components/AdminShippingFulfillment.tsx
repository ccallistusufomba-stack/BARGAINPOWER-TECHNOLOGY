import React, { useState, useEffect } from 'react';
import { formatNaira } from '../utils/pricing';
import { OrderRecord, ShippingInfo, CartItem } from '../types';
import { 
  Truck, 
  Package, 
  CheckCircle2, 
  Clock, 
  Search, 
  RefreshCw, 
  Printer, 
  ExternalLink, 
  ShieldCheck, 
  Building2, 
  Send, 
  AlertCircle, 
  ArrowRight,
  Filter,
  Sparkles,
  Check,
  User,
  Phone,
  MapPin,
  X
} from 'lucide-react';

export const AdminShippingFulfillment: React.FC = () => {
  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<'All' | 'Pending Dispatch' | 'In Transit' | 'Delivered'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedReceiptOrder, setSelectedReceiptOrder] = useState<OrderRecord | null>(null);

  // Edit shipping modal state
  const [editingOrderId, setEditingOrderId] = useState<string | null>(null);
  const [carrierInput, setCarrierInput] = useState('GIG Logistics');
  const [trackingInput, setTrackingInput] = useState('');
  const [statusInput, setStatusInput] = useState<'Pending Dispatch' | 'In Transit' | 'Delivered'>('In Transit');
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateMessage, setUpdateMessage] = useState('');

  // Fetch orders
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/orders');
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders || []);
      }
    } catch (err) {
      console.error('Failed to load orders:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Update shipping details
  const handleSaveShipping = async (orderId: string) => {
    setIsUpdating(true);
    setUpdateMessage('');
    try {
      const res = await fetch(`/api/shipping/${orderId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: statusInput,
          carrier: carrierInput,
          trackingNumber: trackingInput.trim() || null
        })
      });
      const data = await res.json();
      if (data.success) {
        setUpdateMessage('Shipping status updated successfully!');
        setTimeout(() => {
          setEditingOrderId(null);
          setUpdateMessage('');
        }, 1200);
        fetchOrders();
      }
    } catch (err) {
      console.error('Failed to update shipping:', err);
    } finally {
      setIsUpdating(false);
    }
  };

  // Filter orders
  const paidOrders = orders.filter(o => o.status === 'Paid');

  const filteredOrders = paidOrders.filter(order => {
    const matchesStatus = filterStatus === 'All' || order.shipping?.status === filterStatus;
    const matchesSearch = 
      order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.phone.includes(searchQuery) ||
      order.items.some(i => i.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesStatus && matchesSearch;
  });

  // Calculate metrics
  const totalRevenue = paidOrders.reduce((sum, o) => sum + o.totalAmount, 0);
  const pendingDispatchCount = paidOrders.filter(o => !o.shipping || o.shipping.status === 'Pending Dispatch').length;
  const inTransitCount = paidOrders.filter(o => o.shipping?.status === 'In Transit').length;
  const deliveredCount = paidOrders.filter(o => o.shipping?.status === 'Delivered').length;

  return (
    <div className="space-y-6">
      
      {/* Top Banner & Control */}
      <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
              <Truck className="w-5 h-5" />
            </span>
            <h3 className="font-bold text-white text-base">
              Products to Ship Out &amp; Fulfillment Queue
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Backend dispatch system automatically populated whenever Paystack / Monnify server webhooks verify <code>charge.success</code>.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={fetchOrders}
            className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
            title="Refresh list"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh Queue</span>
          </button>
        </div>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
            Total Paid Orders
          </span>
          <span className="text-xl sm:text-2xl font-bold font-mono text-white">
            {paidOrders.length}
          </span>
          <span className="text-[10px] text-emerald-400 block mt-1">● Webhook Verified</span>
        </div>

        <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block mb-1">
            Pending Dispatch
          </span>
          <span className="text-xl sm:text-2xl font-bold font-mono text-amber-300">
            {pendingDispatchCount}
          </span>
          <span className="text-[10px] text-slate-400 block mt-1">Awaiting Packing &amp; Courier</span>
        </div>

        <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
          <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 block mb-1">
            In Transit / Shipped
          </span>
          <span className="text-xl sm:text-2xl font-bold font-mono text-blue-300">
            {inTransitCount}
          </span>
          <span className="text-[10px] text-slate-400 block mt-1">With Dispatch Courier</span>
        </div>

        <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-1">
            Total Verified Revenue
          </span>
          <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-300">
            {formatNaira(totalRevenue)}
          </span>
          <span className="text-[10px] text-slate-400 block mt-1">Direct Bank Transfers</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Status Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800">
          {(['All', 'Pending Dispatch', 'In Transit', 'Delivered'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setFilterStatus(tab)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                filterStatus === tab
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Order ID, client, product..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Shipping Queue List */}
      <div className="space-y-4">
        {filteredOrders.length === 0 ? (
          <div className="bg-slate-900 rounded-xl p-12 text-center border border-slate-800 text-slate-400">
            <Package className="w-10 h-10 mx-auto text-slate-600 mb-2" />
            <p className="text-sm font-semibold">No paid orders match your filter.</p>
            <p className="text-xs text-slate-500 mt-1">
              When a customer completes a bank transfer and the webhook verifies charge.success, items will immediately appear here.
            </p>
          </div>
        ) : (
          filteredOrders.map((order) => {
            const shipping = order.shipping;
            const isPending = !shipping || shipping.status === 'Pending Dispatch';
            const isInTransit = shipping?.status === 'In Transit';
            const isDelivered = shipping?.status === 'Delivered';

            return (
              <div 
                key={order.orderId}
                className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-md"
              >
                {/* Order Top Bar */}
                <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-white text-sm">
                      {order.orderId}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-mono text-[11px] font-semibold">
                      {order.provider} Verified (DVA)
                    </span>
                    <span className="text-slate-400 text-[11px]">
                      Paid on {order.paidAt ? new Date(order.paidAt).toLocaleString() : 'N/A'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Status Badge */}
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold font-mono flex items-center gap-1.5 ${
                      isPending ? 'bg-amber-950/80 text-amber-300 border border-amber-600/40' :
                      isInTransit ? 'bg-blue-950/80 text-blue-300 border border-blue-600/40' :
                      'bg-emerald-950/80 text-emerald-300 border border-emerald-600/40'
                    }`}>
                      {isPending && <Clock className="w-3.5 h-3.5 text-amber-400" />}
                      {isInTransit && <Truck className="w-3.5 h-3.5 text-blue-400" />}
                      {isDelivered && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                      <span>{shipping?.status || 'Pending Dispatch'}</span>
                    </span>

                    <button
                      onClick={() => setSelectedReceiptOrder(order)}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 border border-slate-700"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Receipt</span>
                    </button>
                  </div>
                </div>

                <div className="p-5 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Left: Products to Ship Out (The critical requirement!) */}
                  <div className="lg:col-span-7 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                        <Package className="w-4 h-4" />
                        <span>Products to Ship Out ({order.items.reduce((s, i) => s + i.quantity, 0)} Units)</span>
                      </span>
                      <span className="font-mono font-bold text-white text-xs">
                        Total Settled: {formatNaira(order.totalAmount)}
                      </span>
                    </div>

                    <div className="divide-y divide-slate-800/80">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="py-2.5 flex items-center justify-between gap-3 text-xs">
                          <div className="flex items-center gap-3">
                            {item.image ? (
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-11 h-11 object-cover rounded-lg border border-slate-700 bg-slate-950 shrink-0" 
                              />
                            ) : (
                              <div className="w-11 h-11 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 shrink-0">
                                <Package className="w-5 h-5" />
                              </div>
                            )}
                            <div>
                              <h5 className="font-bold text-white">{item.name}</h5>
                              <p className="text-[11px] text-slate-400">
                                {item.category || 'Component'} • {formatNaira(item.price)} each
                              </p>
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-600/50 text-emerald-300 font-mono font-bold text-xs">
                              Qty: {item.quantity}
                            </span>
                            <span className="block font-mono text-slate-300 text-xs mt-1">
                              {formatNaira(item.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {order.customer.notes && (
                      <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-amber-200">
                        <span className="font-bold block text-amber-400">Customer Packaging Instructions:</span>
                        {order.customer.notes}
                      </div>
                    )}
                  </div>

                  {/* Right: Shipping Destination & Courier Tracking Controls */}
                  <div className="lg:col-span-5 bg-slate-950/70 rounded-xl p-4 border border-slate-800 flex flex-col justify-between text-xs space-y-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                        Destination Shipping Address
                      </span>
                      
                      <div className="space-y-1.5 text-slate-300">
                        <div className="flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="font-bold text-white">{order.customer.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <a 
                            href={`https://wa.me/${order.customer.phone.replace(/[^0-9]/g, '')}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-emerald-400 hover:underline flex items-center gap-1"
                          >
                            <span>{order.customer.phone}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{order.customer.address}, {order.customer.city}, {order.customer.state}</span>
                        </div>
                      </div>
                    </div>

                    {/* Shipping Fulfillment Action Box */}
                    <div className="pt-3 border-t border-slate-800">
                      {editingOrderId === order.orderId ? (
                        <div className="space-y-3 bg-slate-900 p-3 rounded-lg border border-slate-700">
                          <span className="font-bold text-white block">Update Dispatch Details</span>
                          
                          <div>
                            <label className="text-[10px] text-slate-400 block mb-1">Carrier Name</label>
                            <input
                              type="text"
                              value={carrierInput}
                              onChange={(e) => setCarrierInput(e.target.value)}
                              placeholder="e.g. GIG Logistics / Red Star"
                              className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-white text-xs"
                            />
                          </div>

                          <div>
                            <label className="text-[10px] text-slate-400 block mb-1">Waybill / Tracking Number</label>
                            <input
                              type="text"
                              value={trackingInput}
                              onChange={(e) => setTrackingInput(e.target.value)}
                              placeholder="e.g. GIG-LAG-99214-NG"
                              className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-white text-xs"
                            />
                          </div>

                          <div>
                            <label className="text-[10px] text-slate-400 block mb-1">Status</label>
                            <select
                              value={statusInput}
                              onChange={(e: any) => setStatusInput(e.target.value)}
                              className="w-full px-2 py-1 bg-slate-950 border border-slate-700 rounded text-white text-xs"
                            >
                              <option value="Pending Dispatch">Pending Dispatch</option>
                              <option value="In Transit">In Transit / Dispatched</option>
                              <option value="Delivered">Delivered</option>
                            </select>
                          </div>

                          {updateMessage && (
                            <span className="text-[11px] text-emerald-400 block">{updateMessage}</span>
                          )}

                          <div className="flex items-center gap-2 pt-1">
                            <button
                              type="button"
                              disabled={isUpdating}
                              onClick={() => handleSaveShipping(order.orderId)}
                              className="px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer disabled:opacity-50"
                            >
                              {isUpdating ? 'Saving...' : 'Save & Update Order'}
                            </button>
                            <button
                              type="button"
                              onClick={() => setEditingOrderId(null)}
                              className="px-2.5 py-1.5 rounded bg-slate-800 text-slate-300 text-xs hover:bg-slate-700 cursor-pointer"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">Courier Carrier:</span>
                            <span className="font-semibold text-white">
                              {shipping?.carrier || 'GIG Logistics / Red Star'}
                            </span>
                            {shipping?.trackingNumber && (
                              <span className="block font-mono text-[11px] text-emerald-400">
                                Tracking: {shipping.trackingNumber}
                              </span>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              setEditingOrderId(order.orderId);
                              setCarrierInput(shipping?.carrier || 'GIG Logistics');
                              setTrackingInput(shipping?.trackingNumber || '');
                              setStatusInput(shipping?.status || 'In Transit');
                            }}
                            className="px-3 py-1.5 rounded bg-slate-800 hover:bg-emerald-800 text-white font-semibold text-xs transition-colors cursor-pointer border border-slate-700"
                          >
                            Update Dispatch
                          </button>
                        </div>
                      )}
                    </div>

                  </div>

                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Digital Receipt Modal for Admin */}
      {selectedReceiptOrder && selectedReceiptOrder.receipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 text-slate-900 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h4 className="font-bold text-base text-slate-900">
                  Digital Receipt #{selectedReceiptOrder.receipt.receiptNumber}
                </h4>
                <p className="text-xs text-slate-500">
                  Verified by Server-to-Server Webhook
                </p>
              </div>
              <button
                onClick={() => setSelectedReceiptOrder(null)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Beneficiary Virtual Account:</span>
                <span className="font-mono font-bold text-slate-800">{selectedReceiptOrder.virtualAccount.accountNumber} ({selectedReceiptOrder.virtualAccount.bankName})</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Customer Name:</span>
                <span className="font-semibold text-slate-800">{selectedReceiptOrder.customer.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Amount Paid:</span>
                <span className="font-mono font-bold text-emerald-800">{formatNaira(selectedReceiptOrder.receipt.amountPaid)}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Transaction Ref:</span>
                <span className="font-mono text-slate-700">{selectedReceiptOrder.receipt.transactionRef}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Verification Hash:</span>
                <span className="font-mono text-slate-700">{selectedReceiptOrder.receipt.authSignature}</span>
              </div>
            </div>

            {/* Item list */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">Purchased Items:</span>
              <div className="divide-y divide-slate-100 max-h-40 overflow-y-auto text-xs">
                {selectedReceiptOrder.items.map((i, idx) => (
                  <div key={idx} className="py-1.5 flex justify-between">
                    <span>{i.quantity}x {i.name}</span>
                    <span className="font-mono font-semibold">{formatNaira(i.price * i.quantity)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t flex justify-end gap-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-black cursor-pointer flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Packing Slip</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
