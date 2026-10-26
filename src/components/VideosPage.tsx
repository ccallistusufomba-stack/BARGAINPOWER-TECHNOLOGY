import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { VideoClipItem } from '../types';
import { BuyButton } from './BuyButton';
import { formatNaira } from '../utils/pricing';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  RotateCcw, 
  Video, 
  Film, 
  Tag, 
  Clock, 
  Eye, 
  Search, 
  Trash2, 
  Sparkles, 
  Share2, 
  Check, 
  Zap, 
  X, 
  CheckCircle2, 
  AlertCircle,
  Tv,
  ArrowRight,
  ShieldCheck,
  Minimize2,
  Edit3,
  Upload,
  FileVideo,
  Save,
  CheckCheck
} from 'lucide-react';

export const VideosPage: React.FC = () => {
  const { 
    videosData, 
    updateVideoClip,
    deleteVideoClip, 
    isAdminLoggedIn, 
    isEditMode,
    subPageTitle,
    setSubPageTitle,
    setActiveTab,
    sensorsData,
    microcontrollersData,
    breakersData,
    contactorsData,
    motorsData,
    securityData,
    settings,
    updateCustomText
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVideo, setActiveVideo] = useState<VideoClipItem>(() => videosData[0]);

  // Window Size Selector for Active Video ('mini' = 360px, 'small' = 480px [default], 'compact' = 540px)
  const [playerWindowSize, setPlayerWindowSize] = useState<'mini' | 'small' | 'compact'>('small');

  // Video Player Controls State
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isLooping, setIsLooping] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);

  // Inline Small-Window Playing Video ID (allows playing directly inside any card)
  const [inlinePlayingId, setInlinePlayingId] = useState<string | null>(null);

  // =========================================================================
  // EDIT VIDEO MODAL STATE (Enables editing all text & changing video clips)
  // =========================================================================
  const [editingVideo, setEditingVideo] = useState<VideoClipItem | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editCategory, setEditCategory] = useState<VideoClipItem['category']>('Electric Mobility');
  const [editDescription, setEditDescription] = useState('');
  const [editVideoUrl, setEditVideoUrl] = useState('');
  const [editThumbnailUrl, setEditThumbnailUrl] = useState('');
  const [editDuration, setEditDuration] = useState('03:30');
  const [editTags, setEditTags] = useState('');
  const [editFeatured, setEditFeatured] = useState(false);
  const [editComponentId, setEditComponentId] = useState<string>('');
  const [editSourceType, setEditSourceType] = useState<'url' | 'file'>('url');
  const [editFileUploading, setEditFileUploading] = useState(false);
  const [editError, setEditError] = useState('');
  const [editSuccessMsg, setEditSuccessMsg] = useState('');
  const editPreviewVideoRef = useRef<HTMLVideoElement | null>(null);

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

  // Open Edit Modal for a given video
  const handleOpenEditModal = (video: VideoClipItem) => {
    setEditingVideo(video);
    setEditTitle(video.title);
    setEditCategory(video.category);
    setEditDescription(video.description);
    setEditVideoUrl(video.videoUrl);
    setEditThumbnailUrl(video.thumbnailUrl);
    setEditDuration(video.duration);
    setEditTags(video.tags.join(', '));
    setEditFeatured(video.featured || false);
    setEditComponentId(video.linkedComponents?.[0]?.id || '');
    setEditSourceType(video.videoUrl.startsWith('data:') ? 'file' : 'url');
    setEditError('');
    setEditSuccessMsg('');
  };

  // Handle Video File Replacement Upload via FileReader
  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('video/')) {
      setEditError('Please select a valid video file (.mp4, .webm, .mov, etc.).');
      return;
    }

    setEditFileUploading(true);
    setEditError('');

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setEditVideoUrl(result);
      setEditFileUploading(false);
    };
    reader.onerror = () => {
      setEditError('Failed to read video file. Please check file format.');
      setEditFileUploading(false);
    };
    reader.readAsDataURL(file);
  };

  // Handle Thumbnail File Upload
  const handleThumbnailFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setEditThumbnailUrl(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Save Video Clip Edits (Both text and video clip file/URL)
  const handleSaveVideoEdits = (e: React.FormEvent) => {
    e.preventDefault();
    setEditError('');

    if (!editingVideo) return;
    if (!editTitle.trim()) {
      setEditError('Video title cannot be empty.');
      return;
    }
    if (!editVideoUrl.trim()) {
      setEditError('Please provide a video file or valid URL.');
      return;
    }
    if (!editDescription.trim()) {
      setEditError('Please provide an engineering description.');
      return;
    }

    // Resolve linked component
    let linkedComponents: VideoClipItem['linkedComponents'] = undefined;
    if (editComponentId) {
      const match = allComponents.find(c => c.id === editComponentId);
      if (match) {
        linkedComponents = [{
          id: match.id,
          name: match.name,
          price: match.price,
          image: match.image
        }];
      }
    }

    const tagsArray = editTags
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);

    const updatedData: Partial<VideoClipItem> = {
      title: editTitle.trim(),
      category: editCategory,
      description: editDescription.trim(),
      videoUrl: editVideoUrl.trim(),
      thumbnailUrl: editThumbnailUrl.trim() || '/src/assets/images/electric_bike_custom_1790998717436.webp',
      duration: editDuration.trim() || '03:15',
      tags: tagsArray.length > 0 ? tagsArray : ['Engineering', 'Demonstration'],
      featured: editFeatured,
      linkedComponents
    };

    // Update in AppContext & localStorage
    updateVideoClip(editingVideo.id, updatedData);

    // If currently active video was edited, sync active video immediately
    if (activeVideo?.id === editingVideo.id) {
      setActiveVideo(prev => ({
        ...prev,
        ...updatedData
      }));
    }

    setEditSuccessMsg('✓ Video clip and all text updated successfully!');
    setTimeout(() => {
      setEditingVideo(null);
      setEditSuccessMsg('');
    }, 1500);
  };

  // Edit Page Header texts inline
  const handleEditPageHeader = () => {
    const currentHeadline = settings.customTexts?.['videos_headline'] || 'Engineering Video Demonstrations & Prototype Tests';
    const newHeadline = window.prompt('Edit Video Page Headline:', currentHeadline);
    if (newHeadline !== null && newHeadline.trim()) {
      updateCustomText('videos_headline', newHeadline.trim());
    }

    const currentSub = settings.customTexts?.['videos_subheadline'] || 'Watch verified dyno testing of 72V electric vehicles, 16-channel relay inductive switching, automatic 68°C fire suppression deployments, and wiring tutorials rendered in ergonomic small window players.';
    const newSub = window.prompt('Edit Video Page Subheadline / Description:', currentSub);
    if (newSub !== null && newSub.trim()) {
      updateCustomText('videos_subheadline', newSub.trim());
    }
  };

  // Handle URL query or subPageTitle routing
  useEffect(() => {
    if (subPageTitle) {
      const foundCategory = ['Electric Mobility', 'Smart Automation', 'Panel Protection', 'Microcontrollers', 'Lab Tests & Guides'].find(
        c => c.toLowerCase() === subPageTitle.toLowerCase()
      );
      if (foundCategory) {
        setSelectedCategory(foundCategory);
      }
    }
  }, [subPageTitle]);

  // Keep active video in sync if videosData changes
  useEffect(() => {
    if (videosData.length > 0 && !videosData.some(v => v.id === activeVideo?.id)) {
      setActiveVideo(videosData[0]);
    }
  }, [videosData, activeVideo]);

  // Categories list
  const categories = ['All', 'Electric Mobility', 'Smart Automation', 'Panel Protection', 'Microcontrollers', 'Lab Tests & Guides'];

  // Filtered videos
  const filteredVideos = videosData.filter(v => {
    const matchesCategory = selectedCategory === 'All' || v.category === selectedCategory;
    const matchesSearch = 
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  // Handle Video Player Events
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = Number(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = Number(e.target.value);
    setVolume(newVol);
    if (videoRef.current) {
      videoRef.current.volume = newVol;
      videoRef.current.muted = newVol === 0;
      setIsMuted(newVol === 0);
    }
  };

  const changePlaybackRate = (rate: number) => {
    setPlaybackRate(rate);
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
    }
    setShowSpeedMenu(false);
  };

  const togglePiP = async () => {
    if (!videoRef.current) return;
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else {
        await videoRef.current.requestPictureInPicture();
      }
    } catch (err) {
      console.log('PiP not supported or failed', err);
    }
  };

  const toggleFullscreen = () => {
    const playerContainer = document.getElementById('small-video-window-container');
    if (!playerContainer) return;

    if (!document.fullscreenElement) {
      playerContainer.requestFullscreen().catch(err => console.log(err));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(err => console.log(err));
      setIsFullscreen(false);
    }
  };

  const formatSeconds = (totalSeconds: number) => {
    if (isNaN(totalSeconds)) return '00:00';
    const mins = Math.floor(totalSeconds / 60);
    const secs = Math.floor(totalSeconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectVideo = (video: VideoClipItem) => {
    setActiveVideo(video);
    setIsPlaying(false);
    setInlinePlayingId(null);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Detect if URL is YouTube
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

  // Resolve player container width class based on small window selection
  const getSmallWindowWidthClass = () => {
    switch (playerWindowSize) {
      case 'mini':
        return 'w-full sm:max-w-[380px]';
      case 'compact':
        return 'w-full sm:max-w-[560px]';
      case 'small':
      default:
        return 'w-full sm:max-w-[480px]';
    }
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-8 sm:py-10 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* TOP HEADER: TITLE & SEARCH (CLEAN - NO "UPLOAD TRANSFERRED" BADGE)       */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-2xl shadow-xs border border-slate-300 p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#248C54] border border-emerald-200 mb-2">
                <Video className="w-3.5 h-3.5" />
                <span>OFFICIAL ENGINEERING VIDEO REPOSITORY &amp; FIELD DEMOS</span>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {settings.customTexts?.['videos_headline'] || 'Engineering Video Demonstrations & Prototype Tests'}
                </h1>
                {isAdminLoggedIn && isEditMode && (
                  <button
                    type="button"
                    onClick={handleEditPageHeader}
                    className="p-1 rounded text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer"
                    title="Edit page headline & description"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                {settings.customTexts?.['videos_subheadline'] || 'Watch verified dyno testing of 72V electric vehicles, 16-channel relay inductive switching, automatic 68°C fire suppression deployments, and wiring tutorials rendered in ergonomic small window players.'}
              </p>
            </div>

            {/* If admin is logged in, show direct edit mode indicator */}
            {isAdminLoggedIn && (
              <div className="shrink-0 flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-1.5">
                  <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Admin Mode: All Videos &amp; Texts Editable</span>
                </span>
              </div>
            )}
          </div>

          {/* Category Tabs & Search Bar */}
          <div className="mt-5 pt-5 border-t border-slate-200 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search videos, topics..."
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#248C54] focus:bg-white text-slate-900"
              />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ACTIVE MAIN VIDEO CONSOLE (SMALL WINDOW SIZE + CONTROLS HUD)              */}
        {/* ========================================================================= */}
        {activeVideo && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-300 p-5 sm:p-6 mb-10 animate-fadeIn">
            
            {/* Top Toolbar: Window Size Toggle & Video Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Active Small Video Window Console
                </span>
                <span className="px-2 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-[10px] font-mono font-semibold">
                  {activeVideo.category}
                </span>
              </div>

              {/* Small Window Size Selector */}
              <div className="flex items-center gap-1.5 self-start sm:self-auto bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs">
                <span className="text-[11px] text-slate-500 font-semibold px-1 flex items-center gap-1">
                  <Tv className="w-3 h-3" />
                  <span>Window Size:</span>
                </span>
                <button
                  type="button"
                  onClick={() => setPlayerWindowSize('mini')}
                  className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all cursor-pointer ${
                    playerWindowSize === 'mini' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Mini window (380px)"
                >
                  Mini (380px)
                </button>
                <button
                  type="button"
                  onClick={() => setPlayerWindowSize('small')}
                  className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all cursor-pointer ${
                    playerWindowSize === 'small' ? 'bg-[#248C54] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Small window (480px default)"
                >
                  Small (Default)
                </button>
                <button
                  type="button"
                  onClick={() => setPlayerWindowSize('compact')}
                  className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all cursor-pointer ${
                    playerWindowSize === 'compact' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Compact window (560px)"
                >
                  Compact
                </button>
              </div>
            </div>

            {/* Dual Column Layout: Left is the Small Window Player; Right is the Narrative & Hardware */}
            <div className="flex flex-col lg:flex-row items-start gap-6">
              
              {/* Left Column: SMALL VIDEO WINDOW (Strictly Contained Size) */}
              <div className={`${getSmallWindowWidthClass()} shrink-0 mx-auto lg:mx-0`}>
                <div 
                  className="rounded-xl overflow-hidden bg-black border-2 border-slate-800 shadow-md relative group aspect-16/9"
                  id="small-video-window-container"
                >
                  {isYouTubeUrl(activeVideo.videoUrl) ? (
                    <iframe
                      src={getYouTubeEmbedUrl(activeVideo.videoUrl)}
                      title={activeVideo.title}
                      className="w-full h-full border-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <video
                        ref={videoRef}
                        src={activeVideo.videoUrl}
                        poster={activeVideo.thumbnailUrl}
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleLoadedMetadata}
                        onEnded={() => setIsPlaying(false)}
                        onClick={togglePlay}
                        className="w-full h-full object-cover cursor-pointer"
                        playsInline
                        loop={isLooping}
                      />

                      {/* Small Window Play/Pause Center Overlay */}
                      {!isPlaying && (
                        <div 
                          onClick={togglePlay}
                          className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center cursor-pointer transition-opacity"
                        >
                          <div className="w-12 h-12 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform pl-1 border border-emerald-400">
                            <Play className="w-6 h-6 fill-current" />
                          </div>
                        </div>
                      )}

                      {/* Top HUD Tag inside Small Window */}
                      <div className="absolute top-2 left-2 right-2 flex items-center justify-between text-white pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-black/75 px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300 border border-white/10">
                          {activeVideo.duration}
                        </div>
                        <div className="bg-black/75 px-2 py-0.5 rounded text-[10px] font-mono text-white/80 border border-white/10">
                          Small Window HUD
                        </div>
                      </div>

                      {/* Bottom Controls Bar for Small Window */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        
                        {/* Seek Progress Bar */}
                        <div className="relative mb-2">
                          <input
                            type="range"
                            min="0"
                            max={duration || 100}
                            value={currentTime}
                            onChange={handleSeek}
                            className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-hidden"
                          />
                        </div>

                        {/* Controls Icons */}
                        <div className="flex items-center justify-between text-white text-xs">
                          <div className="flex items-center gap-2">
                            <button 
                              type="button" 
                              onClick={togglePlay} 
                              className="text-white hover:text-emerald-400 transition-colors cursor-pointer"
                            >
                              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                            </button>

                            <button 
                              type="button" 
                              onClick={toggleMute} 
                              className="text-white hover:text-emerald-400 transition-colors cursor-pointer"
                            >
                              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                            </button>

                            <input
                              type="range"
                              min="0"
                              max="1"
                              step="0.05"
                              value={isMuted ? 0 : volume}
                              onChange={handleVolumeChange}
                              className="w-12 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-emerald-400 hidden sm:inline-block"
                            />

                            <span className="text-[10px] font-mono text-slate-300">
                              {formatSeconds(currentTime)} / {formatSeconds(duration)}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            {/* Speed Selector */}
                            <div className="relative">
                              <button
                                type="button"
                                onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                                className="px-1.5 py-0.5 rounded bg-white/20 hover:bg-white/30 text-[10px] font-mono cursor-pointer"
                              >
                                {playbackRate}x
                              </button>
                              {showSpeedMenu && (
                                <div className="absolute bottom-6 right-0 bg-slate-900 border border-slate-700 rounded-lg p-1 text-[10px] space-y-0.5 z-30 shadow-xl">
                                  {[0.5, 0.75, 1, 1.25, 1.5, 2].map(r => (
                                    <button
                                      key={r}
                                      type="button"
                                      onClick={() => changePlaybackRate(r)}
                                      className={`block w-full text-left px-2 py-0.5 rounded cursor-pointer ${playbackRate === r ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
                                    >
                                      {r}x
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Loop */}
                            <button
                              type="button"
                              onClick={() => setIsLooping(!isLooping)}
                              className={`p-1 rounded cursor-pointer transition-colors ${isLooping ? 'text-emerald-400' : 'text-slate-300 hover:text-white'}`}
                              title={isLooping ? 'Looping enabled' : 'Enable loop'}
                            >
                              <RotateCcw className="w-3.5 h-3.5" />
                            </button>

                            {/* PiP */}
                            <button
                              type="button"
                              onClick={togglePiP}
                              className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                              title="Picture in Picture"
                            >
                              <Minimize2 className="w-3.5 h-3.5" />
                            </button>

                            {/* Fullscreen */}
                            <button
                              type="button"
                              onClick={toggleFullscreen}
                              className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                              title="Full Screen"
                            >
                              <Maximize className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                      </div>
                    </>
                  )}
                </div>

                {/* Small Window Underbar */}
                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2 px-1">
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>Duration: {activeVideo.duration}</span>
                  </span>
                  {activeVideo.views !== undefined && (
                    <span className="flex items-center gap-1 font-mono">
                      <Eye className="w-3 h-3 text-slate-400" />
                      <span>{activeVideo.views.toLocaleString()} views</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Right Column: Title, Narrative, Tags & Linked Store Hardware */}
              <div className="flex-grow space-y-3.5 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                        {activeVideo.title}
                      </h2>
                      {isAdminLoggedIn && (
                        <button
                          type="button"
                          onClick={() => handleOpenEditModal(activeVideo)}
                          className="p-1 rounded text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer"
                          title="Edit video title, clip & text"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono">
                      Published by BARGAINPOWER Engineering Division · Ref #{activeVideo.id}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {/* EDIT VIDEO CLIP & ALL TEXT BUTTON */}
                    {isAdminLoggedIn && (
                      <button
                        type="button"
                        onClick={() => handleOpenEditModal(activeVideo)}
                        className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs active:scale-95"
                        title="Edit video clip, change video file/URL and all text"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit Clip &amp; Text</span>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                      <span>{copiedLink ? 'Copied' : 'Share'}</span>
                    </button>
                  </div>
                </div>

                {/* Engineering Narrative (Editable) */}
                <div className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200 relative group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 block">
                      Engineering Test Parameters &amp; Circuit Telemetry:
                    </span>
                    {isAdminLoggedIn && (
                      <button
                        type="button"
                        onClick={() => handleOpenEditModal(activeVideo)}
                        className="text-[10px] text-emerald-700 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>Edit Narrative</span>
                      </button>
                    )}
                  </div>
                  <p>{activeVideo.description}</p>
                </div>

                {/* Tags */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <Tag className="w-3 h-3 text-slate-400" />
                  {activeVideo.tags.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-md bg-teal-50 border border-teal-200/60 text-teal-800 text-[10px] font-semibold">
                      #{t}
                    </span>
                  ))}
                  {isAdminLoggedIn && (
                    <button
                      type="button"
                      onClick={() => handleOpenEditModal(activeVideo)}
                      className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-800 text-[10px] font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <Edit3 className="w-2.5 h-2.5" />
                      <span>Edit Tags</span>
                    </button>
                  )}
                </div>

                {/* ========================================================================= */}
                {/* LINKED HARDWARE COMPONENTS WITH INSTANT BUY BUTTONS                       */}
                {/* ========================================================================= */}
                {activeVideo.linkedComponents && activeVideo.linkedComponents.length > 0 && (
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 border border-emerald-300 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Components Used in this Demonstration</span>
                      </span>
                      <span className="text-[10px] text-emerald-800 font-semibold font-mono">
                        Direct Bank Transfer Available
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeVideo.linkedComponents.map((comp) => (
                        <div 
                          key={comp.id} 
                          className="bg-white rounded-lg p-2.5 border border-slate-200 shadow-2xs flex flex-col justify-between"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            {comp.image ? (
                              <img 
                                src={comp.image} 
                                alt={comp.name} 
                                className="w-8 h-8 object-cover rounded border border-slate-200 shrink-0" 
                              />
                            ) : (
                              <div className="w-8 h-8 rounded bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                                <Zap className="w-4 h-4" />
                              </div>
                            )}
                            <div className="min-w-0">
                              <h4 className="font-bold text-[11px] text-slate-900 truncate">{comp.name}</h4>
                              <span className="text-[9px] text-slate-500 font-mono">Laboratory Bench Tested</span>
                            </div>
                          </div>

                          {/* Buy Button */}
                          <BuyButton item={comp} compact={true} className="justify-between" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIDEO CLIPS DIRECTORY & FEED (SMALL WINDOW CARDS WITH EDIT BUTTONS)       */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <h3 className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
              <Film className="w-4 h-4 text-[#248C54]" />
              <span>All Engineering Video Clips ({filteredVideos.length})</span>
            </h3>

            <span className="text-xs text-slate-500">
              Category: <strong className="text-slate-800">{selectedCategory}</strong>
            </span>
          </div>

          {filteredVideos.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 text-slate-500 space-y-3">
              <Video className="w-10 h-10 mx-auto text-slate-400 mb-2" />
              <p className="font-semibold text-slate-800">No video clips match "{searchQuery}".</p>
              <button
                type="button"
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="px-4 py-1.5 rounded-lg bg-[#248C54] text-white text-xs font-bold cursor-pointer"
              >
                Clear Search &amp; Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredVideos.map((video) => {
                const isSelected = activeVideo?.id === video.id;
                const isInlinePlaying = inlinePlayingId === video.id;

                return (
                  <div
                    key={video.id}
                    className={`bg-white rounded-xl border overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group ${
                      isSelected 
                        ? 'border-[#248C54] ring-2 ring-emerald-500/20' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      {/* SMALL WINDOW CONTAINER FOR EACH VIDEO */}
                      <div className="relative aspect-16/9 bg-black overflow-hidden">
                        {isInlinePlaying ? (
                          isYouTubeUrl(video.videoUrl) ? (
                            <iframe
                              src={getYouTubeEmbedUrl(video.videoUrl)}
                              title={video.title}
                              className="w-full h-full border-none"
                              allow="autoplay"
                            />
                          ) : (
                            <video
                              src={video.videoUrl}
                              controls
                              autoPlay
                              playsInline
                              className="w-full h-full object-cover"
                            />
                          )
                        ) : (
                          <>
                            <img 
                              src={video.thumbnailUrl} 
                              alt={video.title} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors"></div>

                            {/* Small Window Play Trigger */}
                            <div 
                              onClick={() => setInlinePlayingId(video.id)}
                              className="absolute inset-0 flex items-center justify-center cursor-pointer"
                              title="Play directly in this small window"
                            >
                              <div className="w-10 h-10 rounded-full bg-black/70 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transition-all pl-0.5 border border-white/20 hover:scale-110">
                                <Play className="w-5 h-5 fill-current" />
                              </div>
                            </div>

                            {/* Duration */}
                            <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/80 text-white text-[9px] font-mono font-bold">
                              {video.duration}
                            </div>

                            {/* Category Pill */}
                            <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded bg-[#081F12]/90 text-[#97CD97] text-[9px] font-bold border border-[#97CD97]/30">
                              {video.category}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-3.5 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 
                            onClick={() => handleSelectVideo(video)}
                            className="font-bold text-xs text-slate-900 leading-snug line-clamp-2 hover:text-[#248C54] cursor-pointer"
                          >
                            {video.title}
                          </h4>
                          {video.featured && (
                            <span className="shrink-0 px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 text-[9px] font-bold">
                              ★ Featured
                            </span>
                          )}
                        </div>

                        <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                          {video.description}
                        </p>

                        <div className="flex items-center gap-1 flex-wrap pt-1">
                          {video.tags.slice(0, 3).map((tag, tIdx) => (
                            <span key={tIdx} className="px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 text-[10px]">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => handleSelectVideo(video)}
                        className="text-[11px] font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Watch in Active Console</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      {/* EDIT AND DELETE BUTTONS FOR LOGGED IN ADMIN */}
                      {isAdminLoggedIn && (
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenEditModal(video);
                            }}
                            className="px-2 py-1 rounded bg-slate-200 hover:bg-emerald-100 text-slate-700 hover:text-emerald-800 text-[10px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
                            title="Edit text and change video clip"
                          >
                            <Edit3 className="w-3 h-3 text-emerald-600" />
                            <span>Edit</span>
                          </button>

                          {isEditMode && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (window.confirm(`Delete video "${video.title}"?`)) {
                                  deleteVideoClip(video.id);
                                }
                              }}
                              className="p-1 rounded text-red-600 hover:bg-red-50 cursor-pointer"
                              title="Delete clip"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* EDIT VIDEO CLIP & ALL TEXT MODAL (Fully Editable Clip & Content)           */}
      {/* ========================================================================= */}
      {editingVideo && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 border-2 border-emerald-500/50 shadow-2xl text-white relative animate-scaleUp my-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <Edit3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Edit Video Clip &amp; Content
                  </h3>
                  <p className="text-xs text-slate-400">
                    Modify all textual descriptions or replace the video clip file / stream URL.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setEditingVideo(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Error & Success Alerts */}
            {editError && (
              <div className="mb-4 p-3 rounded-lg bg-red-950/80 border border-red-500/50 text-red-200 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{editError}</span>
              </div>
            )}
            {editSuccessMsg && (
              <div className="mb-4 p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{editSuccessMsg}</span>
              </div>
            )}

            <form onSubmit={handleSaveVideoEdits} className="space-y-5">
              
              {/* SECTION 1: VIDEO CLIP REPLACEMENT */}
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5" />
                    <span>Change / Replace Video Clip</span>
                  </span>
                  
                  {/* Source Toggle */}
                  <div className="flex bg-slate-900 rounded-lg p-0.5 border border-slate-800 text-xs">
                    <button
                      type="button"
                      onClick={() => setEditSourceType('url')}
                      className={`px-2.5 py-1 rounded text-[11px] font-semibold cursor-pointer ${
                        editSourceType === 'url' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Video URL / YouTube
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditSourceType('file')}
                      className={`px-2.5 py-1 rounded text-[11px] font-semibold cursor-pointer ${
                        editSourceType === 'file' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Upload New File
                    </button>
                  </div>
                </div>

                {editSourceType === 'url' ? (
                  <div>
                    <label className="block text-[11px] text-slate-400 font-semibold mb-1">
                      Video Stream URL or YouTube Embed Link:
                    </label>
                    <input
                      type="url"
                      value={editVideoUrl}
                      onChange={(e) => setEditVideoUrl(e.target.value)}
                      placeholder="https://commondatastorage.googleapis.com/... or https://youtube.com/watch?v=..."
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                      required
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-[11px] text-slate-400 font-semibold mb-1">
                      Upload Replacement Video File (.mp4, .webm, .mov):
                    </label>
                    <div className="p-3 rounded-lg border-2 border-dashed border-slate-700 hover:border-emerald-500 bg-slate-900 text-center transition-colors">
                      <FileVideo className="w-6 h-6 mx-auto text-emerald-400 mb-1" />
                      <input
                        type="file"
                        accept="video/*"
                        onChange={handleVideoFileChange}
                        className="block w-full text-xs text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-emerald-600 file:text-white hover:file:bg-emerald-500 cursor-pointer"
                      />
                      {editFileUploading && (
                        <p className="text-xs text-emerald-400 mt-1 font-semibold animate-pulse">Reading video file...</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Small Preview Window inside Editor */}
                <div className="flex items-center gap-3 pt-1">
                  <div className="w-36 aspect-16/9 bg-black rounded-lg border border-slate-700 overflow-hidden shrink-0 relative">
                    {editVideoUrl && (
                      isYouTubeUrl(editVideoUrl) ? (
                        <iframe
                          src={getYouTubeEmbedUrl(editVideoUrl)}
                          title="Preview"
                          className="w-full h-full border-none"
                        />
                      ) : (
                        <video
                          ref={editPreviewVideoRef}
                          src={editVideoUrl}
                          poster={editThumbnailUrl}
                          className="w-full h-full object-cover"
                          controls
                        />
                      )
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    <span className="font-bold text-slate-200 block">Small Window Verification:</span>
                    <span>Confirm video stream responds and plays cleanly before saving.</span>
                  </div>
                </div>

                {/* Change Thumbnail */}
                <div className="pt-2 border-t border-slate-800">
                  <label className="block text-[11px] text-slate-400 font-semibold mb-1">
                    Change Thumbnail Image (Preset or Custom URL):
                  </label>
                  <div className="flex items-center gap-2 mb-2">
                    <input
                      type="text"
                      value={editThumbnailUrl}
                      onChange={(e) => setEditThumbnailUrl(e.target.value)}
                      placeholder="Thumbnail Image URL"
                      className="flex-grow px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                    <label className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer border border-slate-700 shrink-0">
                      Upload File
                      <input type="file" accept="image/*" onChange={handleThumbnailFileChange} className="hidden" />
                    </label>
                  </div>

                  {/* Thumbnail Presets */}
                  <div className="flex flex-wrap gap-1">
                    {PRESET_THUMBNAILS.map((p, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setEditThumbnailUrl(p.url)}
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold border transition-all cursor-pointer ${
                          editThumbnailUrl === p.url
                            ? 'bg-emerald-600/40 border-emerald-500 text-emerald-300'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* SECTION 2: EDIT ALL TEXT CONTENT */}
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3.5">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit All Text &amp; Specifications</span>
                </span>

                {/* Video Title */}
                <div>
                  <label className="block text-[11px] text-slate-300 font-semibold mb-1">
                    Video Title *
                  </label>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-xs font-bold focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    required
                  />
                </div>

                {/* Category & Duration */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-300 font-semibold mb-1">
                      Engineering Category *
                    </label>
                    <select
                      value={editCategory}
                      onChange={(e) => setEditCategory(e.target.value as any)}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden cursor-pointer"
                    >
                      <option value="Electric Mobility">Electric Mobility</option>
                      <option value="Smart Automation">Smart Automation</option>
                      <option value="Panel Protection">Panel Protection</option>
                      <option value="Microcontrollers">Microcontrollers</option>
                      <option value="Lab Tests & Guides">Lab Tests &amp; Guides</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-300 font-semibold mb-1">
                      Duration (MM:SS)
                    </label>
                    <input
                      type="text"
                      value={editDuration}
                      onChange={(e) => setEditDuration(e.target.value)}
                      placeholder="04:15"
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-xs font-mono focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                {/* Narrative / Description */}
                <div>
                  <label className="block text-[11px] text-slate-300 font-semibold mb-1">
                    Engineering Test Parameters &amp; Circuit Telemetry (Description) *
                  </label>
                  <textarea
                    rows={3}
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-xs leading-relaxed focus:ring-2 focus:ring-emerald-500 focus:outline-hidden resize-none"
                    required
                  />
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-[11px] text-slate-300 font-semibold mb-1">
                    Technical Tags (Comma Separated)
                  </label>
                  <input
                    type="text"
                    value={editTags}
                    onChange={(e) => setEditTags(e.target.value)}
                    placeholder="72V DC, BLDC, Dyno Telemetry"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>

                {/* Linked Hardware Store Item */}
                <div>
                  <label className="block text-[11px] text-slate-300 font-semibold mb-1 flex items-center justify-between">
                    <span>Link Hardware Component to Sell</span>
                    <span className="text-[10px] text-emerald-400">Enables Instant Bank Transfer Buy Button</span>
                  </label>
                  <select
                    value={editComponentId}
                    onChange={(e) => setEditComponentId(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden cursor-pointer"
                  >
                    <option value="">-- No Component Linked --</option>
                    {allComponents.map(comp => (
                      <option key={comp.id} value={comp.id}>
                        [{comp.category}] {comp.name} - {formatNaira(comp.price)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Featured toggle */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="editFeaturedToggle"
                    checked={editFeatured}
                    onChange={(e) => setEditFeatured(e.target.checked)}
                    className="w-4 h-4 rounded text-emerald-600 bg-slate-900 border-slate-700 focus:ring-emerald-500 cursor-pointer"
                  />
                  <label htmlFor="editFeaturedToggle" className="text-xs text-slate-300 font-semibold cursor-pointer">
                    Feature this clip at the top of the video repository
                  </label>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingVideo(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-950 flex items-center gap-2 cursor-pointer transition-all active:scale-95"
                >
                  <Save className="w-4 h-4" />
                  <span>Save All Changes</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};
