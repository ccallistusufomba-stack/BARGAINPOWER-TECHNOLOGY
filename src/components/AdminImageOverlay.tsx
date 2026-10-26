import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CmsSection } from '../types';
import { Camera, Trash2, Edit3, Plus, Sparkles, ImageOff } from 'lucide-react';
import { AdminImageModal } from './AdminImageModal';
import { AdminTextModal } from './AdminTextModal';

interface AdminImageOverlayProps {
  section: CmsSection;
  itemId: string | number;
  imageUrl?: string;
  itemTitle: string;
  item?: any;
  children?: React.ReactNode;
  className?: string;
  placeholderHeight?: string;
}

export const AdminImageOverlay: React.FC<AdminImageOverlayProps> = ({
  section,
  itemId,
  imageUrl,
  itemTitle,
  item,
  children,
  className = '',
  placeholderHeight = 'h-48'
}) => {
  const { 
    isAdminLoggedIn, 
    isEditMode, 
    updateItemImage, 
    deleteItemImage, 
    updateItemText 
  } = useApp();

  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isTextModalOpen, setIsTextModalOpen] = useState(false);

  const hasImage = Boolean(imageUrl && imageUrl.trim().length > 0);

  // If user is visitor or edit mode is off, simply render original children or empty if deleted
  if (!isAdminLoggedIn || !isEditMode) {
    if (!hasImage) return null;
    return <>{children}</>;
  }

  // Admin Edit Mode is ON
  return (
    <>
      <div className={`relative group/admin ${className}`}>
        {hasImage ? (
          <>
            {/* The Original Image Container */}
            {children}

            {/* Admin Floating Image Action Toolbar (High Visibility) */}
            <div className="absolute top-2.5 right-2.5 z-30 flex items-center gap-1.5 opacity-90 group-hover/admin:opacity-100 transition-opacity">
              {/* Change Picture */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setIsImageModalOpen(true);
                }}
                className="px-2.5 py-1.5 rounded-lg bg-[#0A2617]/90 hover:bg-[#0A2617] text-white text-[11px] font-black tracking-wide border border-[#97CD97]/60 shadow-lg backdrop-blur-xs flex items-center gap-1.5 cursor-pointer transform hover:scale-105 transition-all"
                title="Change or Replace Picture"
              >
                <Camera className="w-3.5 h-3.5 text-[#97CD97]" />
                <span className="hidden sm:inline">Change Picture</span>
              </button>

              {/* Delete Picture */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  if (window.confirm(`Are you sure you want to remove the picture for "${itemTitle}"? You can add a new one anytime.`)) {
                    deleteItemImage(section, itemId);
                  }
                }}
                className="p-1.5 rounded-lg bg-red-600/90 hover:bg-red-700 text-white text-[11px] font-bold border border-red-300/40 shadow-lg backdrop-blur-xs flex items-center cursor-pointer transform hover:scale-105 transition-all"
                title="Delete Picture"
              >
                <Trash2 className="w-3.5 h-3.5 text-white" />
              </button>

              {/* Edit Text */}
              {item && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setIsTextModalOpen(true);
                  }}
                  className="px-2 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-950 text-white text-[11px] font-bold border border-white/20 shadow-lg backdrop-blur-xs flex items-center gap-1 cursor-pointer transform hover:scale-105 transition-all"
                  title="Edit Text & Specifications"
                >
                  <Edit3 className="w-3.5 h-3.5 text-purple-300" />
                  <span className="hidden md:inline">Edit Text</span>
                </button>
              )}
            </div>
          </>
        ) : (
          /* Empty / Image Deleted state for Admin: Shows highlighted dashed Dropzone Box */
          <div 
            onClick={(e) => {
              e.stopPropagation();
              setIsImageModalOpen(true);
            }}
            className={`w-full ${placeholderHeight} rounded-2xl border-2 border-dashed border-[#248C54] bg-emerald-50/60 hover:bg-emerald-50 transition-all flex flex-col items-center justify-center p-4 text-center cursor-pointer group shadow-inner`}
          >
            <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-emerald-200 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform text-[#248C54]">
              <Plus className="w-6 h-6" />
            </div>
            <span className="text-xs font-black text-slate-900 mb-0.5">
              + Add Picture for "{itemTitle}"
            </span>
            <p className="text-[11px] text-slate-500 max-w-xs mb-3">
              Click to upload a new picture from your device or select from media presets
            </p>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-[#248C54] hover:bg-[#1E7747] text-white text-[11px] font-bold shadow-xs">
                Upload / Choose Picture
              </span>
              {item && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsTextModalOpen(true);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-[11px] font-bold shadow-xs flex items-center gap-1"
                >
                  <Edit3 className="w-3 h-3 text-[#248C54]" />
                  <span>Edit Text</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Admin Image Modal */}
      <AdminImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        currentImage={imageUrl}
        itemTitle={itemTitle}
        onSave={(newImg) => updateItemImage(section, itemId, newImg)}
        onDelete={() => deleteItemImage(section, itemId)}
      />

      {/* Admin Text Modal */}
      {item && (
        <AdminTextModal
          isOpen={isTextModalOpen}
          onClose={() => setIsTextModalOpen(false)}
          item={item}
          sectionTitle={itemTitle}
          onSave={(updates) => updateItemText(section, itemId, updates)}
        />
      )}
    </>
  );
};
