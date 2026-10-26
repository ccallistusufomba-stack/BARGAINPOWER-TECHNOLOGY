import React, { useState } from 'react';
import { X, Check, Edit3, Plus, Trash2, AlignLeft, Tag, Layers } from 'lucide-react';
import { sanitizeInput } from '../utils/sanitize';

interface AdminTextModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: any;
  onSave: (updates: Record<string, any>) => void;
  sectionTitle?: string;
}

export const AdminTextModal: React.FC<AdminTextModalProps> = ({
  isOpen,
  onClose,
  item,
  onSave,
  sectionTitle = 'Item'
}) => {
  if (!isOpen || !item) return null;

  // Detect fields dynamically based on item structure
  const [title, setTitle] = useState(item.title || item.name || '');
  const [badge, setBadge] = useState(item.badge || item.category || '');
  const [subtitle, setSubtitle] = useState(item.subtitle || item.subLabel || '');
  
  // Descriptions
  const [leadParagraph, setLeadParagraph] = useState(item.leadParagraph || item.shortDesc || item.workingPrinciple || item.homeAutomationRole || '');
  const [bodyParagraph, setBodyParagraph] = useState(item.bodyParagraph || item.fullDesc || item.description || item.homeAutomationUses || item.automationNeedReason || item.connectionDiagramDescription || '');
  const [secondaryText, setSecondaryText] = useState(item.smartCapabilities || item.operatingSpecs || item.homeIndustrialApplications || '');

  // Specs
  const [poles, setPoles] = useState(item.poles || '');
  const [ratedCurrent, setRatedCurrent] = useState(item.ratedCurrent || item.currentRatings || '');
  const [voltage, setVoltage] = useState(item.operatingVoltage || item.coilVoltage || item.voltage || '');

  // Highlights/features array
  const initialHighlights: string[] = Array.isArray(item.highlights) 
    ? [...item.highlights] 
    : Array.isArray(item.features) 
    ? [...item.features] 
    : Array.isArray(item.applications) 
    ? [...item.applications] 
    : Array.isArray(item.recommendedUseCases) 
    ? [...item.recommendedUseCases] 
    : [];
  
  const [highlights, setHighlights] = useState<string[]>(initialHighlights);
  const [newHighlightInput, setNewHighlightInput] = useState('');

  const handleAddHighlight = () => {
    if (!newHighlightInput.trim()) return;
    setHighlights(prev => [...prev, newHighlightInput.trim()]);
    setNewHighlightInput('');
  };

  const handleRemoveHighlight = (idx: number) => {
    setHighlights(prev => prev.filter((_, i) => i !== idx));
  };

  const handleHighlightChange = (idx: number, val: string) => {
    setHighlights(prev => prev.map((h, i) => i === idx ? val : h));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updates: Record<string, any> = {};

    if ('title' in item) updates.title = sanitizeInput(title);
    if ('name' in item) updates.name = sanitizeInput(title);

    if ('badge' in item) updates.badge = sanitizeInput(badge);
    if ('category' in item) updates.category = sanitizeInput(badge);

    if ('subtitle' in item) updates.subtitle = sanitizeInput(subtitle);
    if ('subLabel' in item) updates.subLabel = sanitizeInput(subtitle);

    if ('leadParagraph' in item) updates.leadParagraph = sanitizeInput(leadParagraph);
    if ('shortDesc' in item) updates.shortDesc = sanitizeInput(leadParagraph);
    if ('workingPrinciple' in item) updates.workingPrinciple = sanitizeInput(leadParagraph);
    if ('homeAutomationRole' in item) updates.homeAutomationRole = sanitizeInput(leadParagraph);

    if ('bodyParagraph' in item) updates.bodyParagraph = sanitizeInput(bodyParagraph);
    if ('fullDesc' in item) updates.fullDesc = sanitizeInput(bodyParagraph);
    if ('description' in item) updates.description = sanitizeInput(bodyParagraph);
    if ('homeAutomationUses' in item) updates.homeAutomationUses = sanitizeInput(bodyParagraph);
    if ('automationNeedReason' in item) updates.automationNeedReason = sanitizeInput(bodyParagraph);
    if ('connectionDiagramDescription' in item) updates.connectionDiagramDescription = sanitizeInput(bodyParagraph);

    if ('smartCapabilities' in item) updates.smartCapabilities = sanitizeInput(secondaryText);
    if ('operatingSpecs' in item) updates.operatingSpecs = sanitizeInput(secondaryText);
    if ('homeIndustrialApplications' in item) updates.homeIndustrialApplications = sanitizeInput(secondaryText);

    if ('poles' in item) updates.poles = sanitizeInput(poles);
    if ('ratedCurrent' in item) updates.ratedCurrent = sanitizeInput(ratedCurrent);
    if ('currentRatings' in item) updates.currentRatings = sanitizeInput(ratedCurrent);
    if ('operatingVoltage' in item) updates.operatingVoltage = sanitizeInput(voltage);
    if ('coilVoltage' in item) updates.coilVoltage = sanitizeInput(voltage);
    if ('voltage' in item) updates.voltage = sanitizeInput(voltage);

    if ('highlights' in item) updates.highlights = highlights.map(sanitizeInput);
    if ('features' in item) updates.features = highlights.map(sanitizeInput);
    if ('applications' in item) updates.applications = highlights.map(sanitizeInput);
    if ('recommendedUseCases' in item) updates.recommendedUseCases = highlights.map(sanitizeInput);

    onSave(updates);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-[#0A2617] text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-500/20 rounded-lg border border-emerald-400/30">
              <Edit3 className="w-5 h-5 text-[#97CD97]" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">Edit Text &amp; Specifications</h3>
              <p className="text-xs text-emerald-200/90 truncate max-w-md">Section: {sectionTitle}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Edit Form */}
        <form onSubmit={handleSave} className="flex-grow overflow-y-auto p-6 space-y-4">
          
          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#248C54]" />
              Title / Name:
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#248C54]"
            />
          </div>

          {/* Subtitle / Category / Badge */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Category / Badge:
              </label>
              <input
                type="text"
                value={badge}
                onChange={(e) => setBadge(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#248C54]"
              />
            </div>

            {('subtitle' in item || 'subLabel' in item) && (
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Subtitle / Sub-Label:
                </label>
                <input
                  type="text"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#248C54]"
                />
              </div>
            )}
          </div>

          {/* Lead Paragraph / Short Description */}
          {leadParagraph !== undefined && (
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                <AlignLeft className="w-3.5 h-3.5 text-[#248C54]" />
                Primary Overview / Working Principle:
              </label>
              <textarea
                rows={3}
                value={leadParagraph}
                onChange={(e) => setLeadParagraph(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#248C54] leading-relaxed"
              />
            </div>
          )}

          {/* Body Paragraph / Full Description */}
          {bodyParagraph !== undefined && (
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                <AlignLeft className="w-3.5 h-3.5 text-[#248C54]" />
                Detailed Technical Description / Use Cases:
              </label>
              <textarea
                rows={4}
                value={bodyParagraph}
                onChange={(e) => setBodyParagraph(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#248C54] leading-relaxed"
              />
            </div>
          )}

          {/* Secondary / Smart Specs text */}
          {secondaryText !== undefined && (
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                Smart Features / Automation Role / Operating Specs:
              </label>
              <textarea
                rows={2}
                value={secondaryText}
                onChange={(e) => setSecondaryText(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#248C54]"
              />
            </div>
          )}

          {/* Hardware Specs Grid if present */}
          {(poles || ratedCurrent || voltage) && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
              {poles && (
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-0.5">Poles:</label>
                  <input
                    type="text"
                    value={poles}
                    onChange={(e) => setPoles(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-white rounded-lg border border-slate-300 text-xs text-slate-900"
                  />
                </div>
              )}
              {ratedCurrent && (
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-0.5">Current Rating:</label>
                  <input
                    type="text"
                    value={ratedCurrent}
                    onChange={(e) => setRatedCurrent(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-white rounded-lg border border-slate-300 text-xs text-slate-900"
                  />
                </div>
              )}
              {voltage && (
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-0.5">Voltage:</label>
                  <input
                    type="text"
                    value={voltage}
                    onChange={(e) => setVoltage(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-white rounded-lg border border-slate-300 text-xs text-slate-900"
                  />
                </div>
              )}
            </div>
          )}

          {/* Bullet Points / Highlights */}
          {initialHighlights.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <label className="block text-xs font-bold text-slate-800 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#248C54]" />
                  Key Features &amp; Highlights (Bullet Points):
                </span>
                <span className="text-[11px] text-slate-500 font-normal">{highlights.length} items</span>
              </label>

              <div className="space-y-2">
                {highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={h}
                      onChange={(e) => handleHighlightChange(idx, e.target.value)}
                      className="flex-grow px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#248C54]"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveHighlight(idx)}
                      className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                      title="Remove bullet point"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Bullet Point */}
              <div className="flex gap-2 pt-1">
                <input
                  type="text"
                  placeholder="Add new highlight bullet point..."
                  value={newHighlightInput}
                  onChange={(e) => setNewHighlightInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddHighlight();
                    }
                  }}
                  className="flex-grow px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#248C54]"
                />
                <button
                  type="button"
                  onClick={handleAddHighlight}
                  className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl border border-slate-300 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>
            </div>
          )}

          {/* Form Actions */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-black bg-[#248C54] hover:bg-[#1E7747] text-white shadow-md shadow-[#248C54]/30 border-t border-[#97CD97] transition-all cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Save Text Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
