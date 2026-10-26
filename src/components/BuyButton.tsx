import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getItemPrice, formatNaira } from '../utils/pricing';
import { ShoppingBag, ShoppingCart, Check, Zap } from 'lucide-react';

interface BuyButtonProps {
  item: {
    id?: string | number;
    name?: string;
    title?: string;
    category?: string;
    price?: number;
    image?: string;
    startingPrice?: string;
  };
  compact?: boolean;
  className?: string;
}

export const BuyButton: React.FC<BuyButtonProps> = ({ item, compact = false, className = '' }) => {
  const { buyNow, addToCart } = useApp();
  const [justAdded, setJustAdded] = useState(false);

  const price = getItemPrice(item);
  const formattedPrice = formatNaira(price);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(item, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    buyNow(item);
  };

  if (compact) {
    return (
      <div className={`flex items-center gap-1.5 ${className}`}>
        <span className="font-mono font-bold text-xs text-slate-900 bg-slate-100 px-2 py-1 rounded border border-slate-200">
          {formattedPrice}
        </span>
        <button
          type="button"
          onClick={handleBuyNow}
          className="px-2.5 py-1 rounded bg-[#081F12] hover:bg-[#124B2C] text-white text-[11px] font-bold flex items-center gap-1 shadow-xs transition-all active:scale-95 cursor-pointer"
          title={`Buy ${item.name || item.title} now via Bank Transfer`}
        >
          <Zap className="w-3 h-3 text-emerald-400" />
          <span>BUY</span>
        </button>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-slate-100 ${className}`}>
      {/* Price tag */}
      <div className="flex flex-col">
        <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Direct Price</span>
        <span className="text-base sm:text-lg font-bold font-mono text-emerald-800">
          {formattedPrice}
        </span>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={handleAddToCart}
          className="px-2.5 py-1.5 rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer active:scale-95"
          title="Add to cart"
        >
          {justAdded ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
              <span className="text-emerald-700 font-bold">Added</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-3.5 h-3.5 text-slate-600" />
              <span className="hidden sm:inline">Add</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleBuyNow}
          className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#081F12] to-[#124B2C] hover:from-[#0a2717] hover:to-[#175b36] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
          title={`Buy ${item.name || item.title} now via Paystack/Monnify Bank Transfer`}
        >
          <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
          <span>BUY NOW</span>
        </button>
      </div>
    </div>
  );
};
