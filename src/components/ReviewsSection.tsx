import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, User, Building } from 'lucide-react';
import { sanitizeInput } from '../utils/sanitize';

export const ReviewsSection: React.FC = () => {
  const { reviews, addReview } = useApp();
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [author, setAuthor] = useState('');
  const [companyOrRole, setCompanyOrRole] = useState('');
  const [serviceRelated, setServiceRelated] = useState('Home & Industrial Automation');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const approvedReviews = reviews.filter(r => r.approved);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) return;

    addReview({
      author: sanitizeInput(author),
      companyOrRole: sanitizeInput(companyOrRole) || 'Verified Client',
      serviceRelated,
      rating,
      comment: sanitizeInput(comment)
    });

    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setShowSubmitModal(false);
      setAuthor('');
      setCompanyOrRole('');
      setComment('');
    }, 1500);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Call to Action to Leave a Review */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-xs border border-slate-200 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008080] mb-2 block">
              Verified Social Proof & Field Reports
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1D20] tracking-tight mb-2">
              Client Testimonials & Engineering Trust
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Read authentic feedback from industrial operations directors, commercial agronomists, 
              aerodrome consultants, and undergraduate engineering scholars who built projects with BARGAINPOWER & TECHNOLOGY.
            </p>
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-5 py-2.5 rounded-lg bg-[#008080] hover:bg-[#006666] text-white text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer whitespace-nowrap"
          >
            Leave a Client Review
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approvedReviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars and Service Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {rev.serviceRelated}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-teal-100 text-[#008080] flex items-center justify-center font-bold text-xs">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    {rev.author}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {rev.companyOrRole}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leave a Review Modal */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-scaleUp">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Submit Your Experience with BARGAINPOWER
                </h3>
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="text-slate-400 hover:text-slate-600 cursor-pointer text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              {submitSuccess ? (
                <div className="p-6 bg-teal-50 rounded-xl text-center text-teal-900 border border-teal-200">
                  <CheckCircle2 className="w-8 h-8 text-[#008080] mx-auto mb-2" />
                  <p className="font-bold">Thank You For Your Review!</p>
                  <p className="text-xs text-teal-700">Your review is now logged in the system.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Your Full Name / Title *</label>
                    <input
                      type="text"
                      required
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="e.g. Engr. Samuel Johnson"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Role / Organization *</label>
                    <input
                      type="text"
                      required
                      value={companyOrRole}
                      onChange={(e) => setCompanyOrRole(e.target.value)}
                      placeholder="e.g. Operations Manager, Lagos Solar Farm"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Service Consulted *</label>
                    <select
                      value={serviceRelated}
                      onChange={(e) => setServiceRelated(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:outline-hidden bg-white"
                    >
                      <option value="Home & Industrial Automation">Home & Industrial Automation</option>
                      <option value="Smart Agricultural Irrigation">Smart Agricultural Irrigation & Snail Farming</option>
                      <option value="Contactors & Breakers Supply">Contactors & Circuit Breakers</option>
                      <option value="Building of Electric Vehicles">Building of Electric Vehicles / Bikes</option>
                      <option value="Building of Aircraft Models">Building of Aircraft Models</option>
                      <option value="Undergraduate Projects & Training">Undergraduate Projects & Training</option>
                      <option value="Solar Power Customization">Solar Power Customization</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Star Rating</label>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setRating(star)}
                          className="p-1 cursor-pointer text-amber-400"
                        >
                          <Star className={`w-5 h-5 ${star <= rating ? 'fill-amber-400' : 'text-slate-300'}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Your Detailed Review *</label>
                    <textarea
                      required
                      rows={3}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Describe the hardware, delivery, technical support, and results achieved..."
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:outline-hidden"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowSubmitModal(false)}
                      className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-lg bg-[#008080] hover:bg-[#006666] text-white font-bold cursor-pointer"
                    >
                      Publish Review
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
