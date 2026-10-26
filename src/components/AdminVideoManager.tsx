import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { VideoClipItem } from '../types';
import { formatNaira } from '../utils/pricing';
import { DEFAULT_VIDEOS } from '../data/mockData';
import { 
  Video, 
  Upload, 
  Film, 
  Play, 
  Pause, 
  Trash2, 
  Edit3, 
  Plus, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink, 
  Zap, 
  AlertCircle, 
  X, 
  Eye, 
  Clock, 
  Tag, 
  RefreshCw,
  Check,
  ShieldAlert,
  Sliders,
  Tv,
  Layers,
  FileVideo
} from 'lucide-react';

export const AdminVideoManager: React.FC = () => {
  const { 
    videosData, 
    addVideoClip, 
    deleteVideoClip, 
    updateVideoClip,
    sensorsData,
    microcontrollersData,
    breakersData,
    contactorsData,
    motorsData,
    securityData,
    setActiveTab
  } = useApp();

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  // Upload Form State
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [sourceType, setSourceType] = useState<'file' | 'url'>('url');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<VideoClipItem['category']>('Electric Mobility');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('/src/assets/images/electric_bike_custom_1790998717436.webp');
  const [duration, setDuration] = useState('03:30');
  const [tags, setTags] = useState('Engineering, Prototype, Laboratory Test');
  const [featured, setFeatured] = useState(false);
  const [selectedComponentId, setSelectedComponentId] = useState<string>('');
  const [fileUploading, setFileUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Editing Video State
  const [editingVideo, setEditingVideo] = useState<VideoClipItem | null>(null);

  // Small Preview Player inside Admin
  const [previewPlaying, setPreviewPlaying] = useState(false);
  const previewVideoRef = useRef<HTMLVideoElement | null>(null);

  // Presets for Thumbnails
  const PRESET_THUMBNAILS = [
    { label: 'E-Bike Dyno', url: '/src/assets/images/electric_bike_custom_1790998717436.webp' },
    { label: '16-Ch Relay', url: '/src/assets/images/relay_16ch_wifi_1790998673524.webp' },
    { label: 'Fire Extinguisher', url: '/src/assets/images/fire_extinguisher_auto_1791552230446.jpg' },
    { label: 'ESP32 Controller', url: '/src/assets/images/esp32_relay_24ch_1791552285027.jpg' },
    { label: '3-Pole Contactor', url: '/src/assets/images/contactors_3pole_ac_dc_1790998707179.webp' },
    { label: 'EV Conversion', url: '/src/assets/images/electric_vehicle_conversion_1790998727320.webp' },
    { label: 'Industrial Breakers', url: '/src/assets/images/breakers_3pole_industrial_1790998696308.webp' }
  ];

  // All components for linking
  const allComponents = [
    ...sensorsData.map(i => ({ id: i.id, name: i.name, category: 'Sensor', image: i.image, price: i.price || 18500 })),
    ...microcontrollersData.map(i => ({ id: i.id, name: i.name, category: 'Microcontroller', image: i.image, price: i.price || 85000 })),
    ...contactorsData.map(i => ({ id: i.id, name: i.name, category: 'Contactor', image: i.image || '/src/assets/images/contactors_3pole_ac_dc_1790998707179.webp', price: i.price || 48000 })),
    ...breakersData.map(i => ({ id: i.id, name: i.name, category: 'Breaker', image: i.image || '/src/assets/images/breakers_3pole_industrial_1790998696308.webp', price: i.price || 42000 })),
    ...motorsData.map(i => ({ id: i.id, name: i.name, category: 'Motor/Servo', image: i.image || '/src/assets/images/electric_bike_custom_1790998717436.webp', price: i.price || 54000 })),
    ...securityData.map(i => ({ id: i.id, name: i.name, category: 'Security/Fire', image: i.image, price: i.price || 64000 }))
  ];

  // Detect YouTube
  const isYouTubeUrl = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  const getYouTubeEmbedUrl = (url: string) => {
    let videoId = '';
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('watch?v=')) {
      videoId = url.split('watch?v=')[1]?.split('&')[0];
    } else if (url.includes('embed/')) {
      return url;
    }
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  // Handle Local Video File Upload
  const handleVideoFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('video/')) {
      setErrorMessage('Please select a valid video file (.mp4, .webm, .mov, etc.).');
      return;
    }

    setFileUploading(true);
    setErrorMessage('');

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setVideoUrl(result);
      if (!title) {
        setTitle(file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '));
      }
      setFileUploading(false);
    };
    reader.onerror = () => {
      setErrorMessage('Failed to read local video file. Please check file size or use a video URL.');
      setFileUploading(false);
    };
    reader.readAsDataURL(file);
  };

  // Handle Thumbnail File Upload
  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setThumbnailUrl(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Submit Video Clip (Add or Update)
  const handleSubmitVideo = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!title.trim()) {
      setErrorMessage('Please provide a descriptive engineering video title.');
      return;
    }
    if (!videoUrl.trim()) {
      setErrorMessage('Please select a video file or enter a valid streaming/video URL.');
      return;
    }
    if (!description.trim()) {
      setErrorMessage('Please enter an engineering summary or test specifications.');
      return;
    }

    // Resolve linked component
    let linkedComponents: VideoClipItem['linkedComponents'] = undefined;
    if (selectedComponentId) {
      const match = allComponents.find(c => c.id === selectedComponentId);
      if (match) {
        linkedComponents = [{
          id: match.id,
          name: match.name,
          price: match.price,
          image: match.image
        }];
      }
    }

    const tagsArray = tags
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);

    if (editingVideo) {
      // Update existing video
      updateVideoClip(editingVideo.id, {
        title: title.trim(),
        category,
        description: description.trim(),
        videoUrl: videoUrl.trim(),
        thumbnailUrl: thumbnailUrl.trim() || '/src/assets/images/electric_bike_custom_1790998717436.webp',
        duration: duration.trim() || '03:15',
        tags: tagsArray.length > 0 ? tagsArray : ['Engineering', 'Demonstration'],
        featured,
        linkedComponents
      });
      setSuccessMessage(`✓ Video "${title}" updated successfully in website repository!`);
      setEditingVideo(null);
    } else {
      // Add new video
      addVideoClip({
        title: title.trim(),
        category,
        description: description.trim(),
        videoUrl: videoUrl.trim(),
        thumbnailUrl: thumbnailUrl.trim() || '/src/assets/images/electric_bike_custom_1790998717436.webp',
        duration: duration.trim() || '03:15',
        tags: tagsArray.length > 0 ? tagsArray : ['Engineering', 'Demonstration'],
        featured,
        linkedComponents
      });
      setSuccessMessage(`✓ New video clip "${title}" uploaded and published to website repository!`);
    }

    // Reset Form
    setIsFormOpen(false);
    setTitle('');
    setDescription('');
    setVideoUrl('');
    setSelectedComponentId('');
    setErrorMessage('');
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  // Populate form for editing
  const startEditVideo = (video: VideoClipItem) => {
    setEditingVideo(video);
    setTitle(video.title);
    setCategory(video.category);
    setDescription(video.description);
    setVideoUrl(video.videoUrl);
    setThumbnailUrl(video.thumbnailUrl);
    setDuration(video.duration);
    setTags(video.tags.join(', '));
    setFeatured(video.featured || false);
    setSelectedComponentId(video.linkedComponents?.[0]?.id || '');
    setIsFormOpen(true);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  // Reset to default clips
  const handleResetDefaults = () => {
    if (window.confirm('Reset video repository to original laboratory demonstration clips? Any custom additions will be refreshed.')) {
      localStorage.removeItem('bp_cms_data');
      window.location.reload();
    }
  };

  // Filtered list
  const filteredVideos = videosData.filter(v => {
    const matchesCat = categoryFilter === 'All' || v.category === categoryFilter;
    const matchesSearch = 
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Header Card */}
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-950/80 text-purple-300 border border-purple-800 mb-2">
            <Film className="w-3.5 h-3.5 text-purple-400" />
            <span>CENTRALIZED ADMIN VIDEO STUDIO &amp; UPLOAD MANAGEMENT</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Video Clips &amp; Technical Demonstrations Manager
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Upload and publish bench-test video clips, manage streaming URLs, configure linked hardware components for instant bank-transfer purchase, and preview clips in compact windows.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => {
              setEditingVideo(null);
              setIsFormOpen(!isFormOpen);
            }}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-md flex items-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            {isFormOpen ? <X className="w-4 h-4" /> : <Upload className="w-4 h-4" />}
            <span>{isFormOpen ? 'Close Uploader' : '+ Upload New Video Clip'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('video')}
            className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
            title="View public video page"
          >
            <ExternalLink className="w-4 h-4 text-emerald-400" />
            <span>View Live Website</span>
          </button>
        </div>
      </div>

      {/* Success Notification */}
      {successMessage && (
        <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs sm:text-sm font-semibold flex items-center justify-between animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{successMessage}</span>
          </div>
          <button
            onClick={() => setActiveTab('video')}
            className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
          >
            Go to Videos Tab &rarr;
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* UPLOAD FORM (ADMIN ONLY)                                                  */}
      {/* ========================================================================= */}
      {isFormOpen && (
        <form onSubmit={handleSubmitVideo} className="bg-slate-900 rounded-2xl p-6 sm:p-8 border-2 border-emerald-500/40 shadow-xl space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Upload className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {editingVideo ? `Edit Video: ${editingVideo.title} (Modify All Text & Change Clip)` : 'Upload & Publish Video Clip to Website'}
                </h3>
                <p className="text-xs text-slate-400">
                  Clip will be immediately accessible on the public "VIDEOS" tab with instant mini-window and small video playback.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsFormOpen(false);
                setEditingVideo(null);
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {errorMessage && (
            <div className="p-3 rounded-lg bg-red-950/80 border border-red-500/50 text-red-200 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Column: Title, Category, Source Type & Video Link */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Video Clip Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. 72V High-Torque BLDC Incline Dyno Run"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs sm:text-sm focus:outline-hidden focus:border-emerald-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Engineering Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:outline-hidden focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="Electric Mobility">Electric Mobility</option>
                    <option value="Smart Automation">Smart Automation</option>
                    <option value="Panel Protection">Panel Protection</option>
                    <option value="Microcontrollers">Microcontrollers</option>
                    <option value="Lab Tests & Guides">Lab Tests &amp; Guides</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Duration (MM:SS)
                  </label>
                  <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="04:15"
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:outline-hidden focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Source Type Switcher */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Video Source Method *
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-950 rounded-xl border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setSourceType('url')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      sourceType === 'url' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Tv className="w-3.5 h-3.5" />
                    <span>Video URL / YouTube</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSourceType('file')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      sourceType === 'file' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Local File</span>
                  </button>
                </div>
              </div>

              {sourceType === 'url' ? (
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Direct Video URL or YouTube Link *
                  </label>
                  <input
                    type="url"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="https://commondatastorage.googleapis.com/... or https://youtube.com/watch?v=..."
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs font-mono focus:outline-hidden focus:border-emerald-500"
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      type="button"
                      onClick={() => setVideoUrl('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4')}
                      className="text-[11px] text-emerald-400 hover:underline cursor-pointer"
                    >
                      Use Demo MP4 #1
                    </button>
                    <span className="text-slate-600">·</span>
                    <button
                      type="button"
                      onClick={() => setVideoUrl('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4')}
                      className="text-[11px] text-teal-400 hover:underline cursor-pointer"
                    >
                      Use Demo MP4 #2
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Select Local Video File (.mp4, .webm, .mov)
                  </label>
                  <div className="p-4 rounded-xl border-2 border-dashed border-slate-700 hover:border-emerald-500 bg-slate-950 text-center transition-colors">
                    <FileVideo className="w-8 h-8 mx-auto text-emerald-400 mb-2" />
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleVideoFileUpload}
                      className="block w-full text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-emerald-600 file:text-white hover:file:bg-emerald-500 cursor-pointer"
                    />
                    {fileUploading && (
                      <p className="text-xs text-emerald-400 mt-2 font-semibold animate-pulse">Reading video file...</p>
                    )}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Technical Tags (Comma Separated)
                </label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="72V DC, BLDC Motor, Dyno Telemetry, High Torque"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:outline-hidden focus:border-emerald-500"
                />
              </div>

              {/* Featured toggle */}
              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="featuredToggle"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="w-4 h-4 rounded text-emerald-600 bg-slate-950 border-slate-700 focus:ring-emerald-500 cursor-pointer"
                />
                <label htmlFor="featuredToggle" className="text-xs text-slate-300 font-semibold cursor-pointer">
                  Feature this clip at the top of the video repository
                </label>
              </div>
            </div>

            {/* Right Column: Description, Thumbnail, Hardware Linking & Small Window Preview */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Engineering Narrative &amp; Test Summary *
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the physical testing procedure, electrical parameters, instrumentation, and observed results..."
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs sm:text-sm focus:outline-hidden focus:border-emerald-500 resize-none"
                  required
                />
              </div>

              {/* Thumbnail Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Thumbnail Image (Preset or Custom URL)
                </label>
                <div className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    value={thumbnailUrl}
                    onChange={(e) => setThumbnailUrl(e.target.value)}
                    placeholder="Image URL or choose preset below"
                    className="flex-grow px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:outline-hidden focus:border-emerald-500 font-mono"
                  />
                  <label className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold cursor-pointer border border-slate-700 shrink-0">
                    Browse File
                    <input type="file" accept="image/*" onChange={handleThumbnailUpload} className="hidden" />
                  </label>
                </div>

                {/* Preset Thumbnails */}
                <div className="flex flex-wrap gap-1.5">
                  {PRESET_THUMBNAILS.map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setThumbnailUrl(p.url)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold border transition-all cursor-pointer ${
                        thumbnailUrl === p.url
                          ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hardware Component Linking */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Link Hardware Component to Sell via Video</span>
                  <span className="text-[10px] text-emerald-400 font-normal">Enables Instant Bank Transfer Buy Button</span>
                </label>
                <select
                  value={selectedComponentId}
                  onChange={(e) => setSelectedComponentId(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:outline-hidden focus:border-emerald-500 cursor-pointer"
                >
                  <option value="">-- No Component Linked (View Only) --</option>
                  {allComponents.map(comp => (
                    <option key={comp.id} value={comp.id}>
                      [{comp.category}] {comp.name} - {formatNaira(comp.price)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Small Window Preview Box */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Tv className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Small Window Preview (Exact Visitor Size)</span>
                </label>
                
                <div className="w-full max-w-[340px] aspect-16/9 bg-black rounded-xl border border-slate-700 overflow-hidden relative shadow-inner">
                  {videoUrl ? (
                    isYouTubeUrl(videoUrl) ? (
                      <iframe
                        src={getYouTubeEmbedUrl(videoUrl)}
                        title="Preview"
                        className="w-full h-full border-none"
                      />
                    ) : (
                      <div className="relative w-full h-full group">
                        <video
                          ref={previewVideoRef}
                          src={videoUrl}
                          poster={thumbnailUrl}
                          className="w-full h-full object-cover"
                          controls
                          playsInline
                        />
                      </div>
                    )
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-600 p-4 text-center">
                      <Film className="w-6 h-6 mb-1 text-slate-500" />
                      <span className="text-[11px]">Enter a video URL or upload a file to preview in this small window</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Form Actions */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                setIsFormOpen(false);
                setEditingVideo(null);
              }}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-950 flex items-center gap-2 cursor-pointer transition-all active:scale-95"
            >
              <Check className="w-4 h-4" />
              <span>{editingVideo ? 'Save Changes (Text & Video Clip)' : 'Publish Clip to Website'}</span>
            </button>
          </div>
        </form>
      )}

      {/* ========================================================================= */}
      {/* VIDEO CLIPS DIRECTORY & MANAGEMENT TABLE                                 */}
      {/* ========================================================================= */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-lg">
        
        {/* Table Controls Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Category Filter:</span>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-xs font-semibold focus:outline-hidden cursor-pointer"
            >
              <option value="All">All Categories ({videosData.length})</option>
              <option value="Electric Mobility">Electric Mobility</option>
              <option value="Smart Automation">Smart Automation</option>
              <option value="Panel Protection">Panel Protection</option>
              <option value="Microcontrollers">Microcontrollers</option>
              <option value="Lab Tests & Guides">Lab Tests &amp; Guides</option>
            </select>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search video title, tags..."
              className="w-full pl-8 pr-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-xs focus:outline-hidden focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Video Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 uppercase font-mono text-[10px]">
              <tr>
                <th className="py-3 px-4">Small Window Preview</th>
                <th className="py-3 px-4">Title &amp; Engineering Topic</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Duration &amp; Views</th>
                <th className="py-3 px-4">Linked Store Item</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {filteredVideos.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500">
                    No videos found matching current filter.
                  </td>
                </tr>
              ) : (
                filteredVideos.map((video) => (
                  <tr key={video.id} className="hover:bg-slate-800/40 transition-colors">
                    
                    {/* Small Window Preview */}
                    <td className="py-3 px-4">
                      <div className="w-28 h-16 rounded-lg bg-black border border-slate-700 overflow-hidden relative group shrink-0">
                        <img 
                          src={video.thumbnailUrl} 
                          alt={video.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                          <Play className="w-4 h-4 text-white fill-white" />
                        </div>
                        <div className="absolute bottom-1 right-1 px-1 py-0.2 rounded bg-black/80 text-[9px] font-mono font-bold text-white">
                          {video.duration}
                        </div>
                      </div>
                    </td>

                    {/* Title & Info */}
                    <td className="py-3 px-4">
                      <div className="font-bold text-white text-xs mb-1">
                        {video.title}
                        {video.featured && (
                          <span className="ml-2 px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] font-mono">
                            ★ FEATURED
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-1 max-w-sm">
                        {video.description}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        {video.tags.slice(0, 3).map((tag, tIdx) => (
                          <span key={tIdx} className="px-1.5 py-0.2 rounded bg-slate-800 text-[10px] text-slate-400">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-300 text-[10px] font-mono font-semibold whitespace-nowrap">
                        {video.category}
                      </span>
                    </td>

                    {/* Duration & Views */}
                    <td className="py-3 px-4 font-mono text-[11px]">
                      <div>{video.duration}</div>
                      <div className="text-slate-500 text-[10px]">{video.views?.toLocaleString() || 0} views</div>
                    </td>

                    {/* Linked Store Item */}
                    <td className="py-3 px-4">
                      {video.linkedComponents && video.linkedComponents.length > 0 ? (
                        <div className="text-[11px]">
                          <span className="font-bold text-teal-400 block truncate max-w-xs">
                            {video.linkedComponents[0].name}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {formatNaira(video.linkedComponents[0].price)} · Instant Buy enabled
                          </span>
                        </div>
                      ) : (
                        <span className="text-slate-500 text-[10px]">None</span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => startEditVideo(video)}
                          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                          title="Edit all text and change video clip"
                        >
                          <Edit3 className="w-3 h-3 text-emerald-400" />
                          <span>Edit Text &amp; Clip</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            if (window.confirm(`Delete video clip "${video.title}" from the website repository?`)) {
                              deleteVideoClip(video.id);
                              setSuccessMessage(`Video clip deleted.`);
                              setTimeout(() => setSuccessMessage(''), 3000);
                            }
                          }}
                          className="p-1.5 rounded-lg bg-red-950/60 hover:bg-red-900/80 text-red-400 hover:text-red-200 transition-colors cursor-pointer"
                          title="Delete video clip"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer info & Reset */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Total active video clips: <strong>{videosData.length}</strong></span>

          <button
            type="button"
            onClick={handleResetDefaults}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Demo Video Repository</span>
          </button>
        </div>

      </div>

    </div>
  );
};
