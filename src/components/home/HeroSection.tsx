import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Radio, 
  TrendingUp, 
  MapPin, 
  Gauge, 
  Wifi, 
  Shield, 
  Layers, 
  ChevronRight,
  Brain,
  Clock,
  Car,
  Activity,
  CheckCircle2,
  Navigation,
  Sparkles,
  Zap,
  Fuel,
  ShieldCheck,
  Award
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [speed, setSpeed] = useState<number>(85);
  const [activeVehicles, setActiveVehicles] = useState<number>(24);

  // 3D Mouse Parallax Tilt state (motionsite.ai feel)
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 7;
    const rotateX = -((y - centerY) / centerY) * 7;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Live speed oscillation
  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(prev => Math.max(74, Math.min(96, Math.round(prev + (Math.random() - 0.5) * 5))));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      
      {/* HERO MAIN STAGE (Futuristic Deep Navy Cyber Atmosphere) */}
      <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden bg-gradient-to-b from-[#020c22] via-[#05143a] to-[#012462] text-white pt-10 md:pt-16 pb-28 md:pb-36 px-4 sm:px-6 lg:px-8 shadow-2xl select-none"
      >
        
        {/* Background Cyber Road Map Grid & Atmosphere */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <svg className="absolute w-full h-full text-blue-500/20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-road-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-road-grid)" />
            {/* Main Highway Vector Curves */}
            <path d="M-100,200 C300,150 600,450 1400,280" fill="none" stroke="#008CFF" strokeWidth="2" strokeOpacity="0.4" />
            <path d="M200,-50 C400,300 800,250 1500,500" fill="none" stroke="#005CCC" strokeWidth="2" strokeOpacity="0.3" />
          </svg>

          {/* Ambient Radial Glows */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#008CFF]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#005CCC]/25 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
            
            {/* LEFT COLUMN: Main Typography, Badges & CTAs */}
            <div className="lg:col-span-5 space-y-7 text-left">
              
              {/* Glowing Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008CFF]/10 border border-[#008CFF]/40 text-[#008CFF] text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#008CFF] animate-ping" />
                <span>Smart Vehicle Tracking & Fleet Management</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-['Space_Grotesk'] leading-[1.1] tracking-tight">
                Know Where Your <br className="hidden sm:inline" />
                Vehicles Are. <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-white via-blue-100 to-[#008CFF] bg-clip-text text-transparent">
                  Stay in Control.
                </span>
              </h1>

              {/* Subheading with highlighted emphasis */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
                <strong className="text-white font-semibold">Track</strong>, <strong className="text-white font-semibold">monitor</strong>, <span className="text-[#008CFF] font-bold">secure</span>, and <strong className="text-white font-semibold">manage</strong> your vehicles in <span className="text-[#008CFF] font-bold">real time</span> with intelligent GPS technology built for individuals and modern businesses.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                {/* Primary Glowing Button */}
                <Link
                  to="/quote"
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#008CFF] to-[#005CCC] hover:from-[#00A3FF] hover:to-[#006BE6] text-white font-bold text-sm shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>Track Your Vehicle</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Secondary Glass Button */}
                <Link
                  to="/solutions"
                  className="px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-sm border border-blue-400/40 hover:border-blue-400 backdrop-blur-md transition-all duration-300 shadow-md"
                >
                  Explore Solutions
                </Link>
              </div>

              {/* Bottom Feature Pill / Ticker */}
              <div className="pt-1">
                <div className="inline-flex flex-wrap items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs text-blue-100 backdrop-blur-md shadow-inner">
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#008CFF]" />
                    Real-Time Tracking
                  </span>
                  <span className="text-blue-400/60">•</span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Brain className="w-3.5 h-3.5 text-[#008CFF]" />
                    Fleet Intelligence
                  </span>
                  <span className="text-blue-400/60">•</span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#008CFF]" />
                    24/7 Visibility
                  </span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Extra-Large 3D Laptop Mockup with Parallax Tilt & Floating Motion Cards */}
            <div className="lg:col-span-7 relative flex items-center justify-center pt-6 lg:pt-0 perspective-1200 overflow-visible">
              
              {/* Background Luxury Car Outline Silhouette */}
              <div className="absolute -top-16 -left-10 right-0 h-96 opacity-20 pointer-events-none flex items-center justify-center">
                <svg viewBox="0 0 800 350" className="w-full h-full text-blue-400" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M 50 260 L 120 260 C 130 220 170 220 180 260 L 520 260 C 530 220 570 220 580 260 L 750 260 L 730 190 L 620 140 L 420 130 L 250 150 L 140 190 Z" strokeWidth="2.5" />
                  <path d="M 260 155 L 415 138 L 415 190 L 245 190 Z" strokeWidth="1.5" strokeDasharray="4 2" />
                  <path d="M 430 138 L 610 148 L 590 190 L 430 190 Z" strokeWidth="1.5" strokeDasharray="4 2" />
                  <circle cx="155" cy="260" r="35" strokeWidth="3" />
                  <circle cx="550" cy="260" r="35" strokeWidth="3" />
                </svg>
              </div>

              {/* Realistic Laptop Mockup Container with Interactive Parallax Tilt (Enlarged) */}
              <div 
                style={{
                  transform: isHovered 
                    ? `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.05, 1.05, 1.05)` 
                    : 'perspective(1200px) rotateX(1.5deg) rotateY(-1.5deg)',
                  transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="relative w-full max-w-[760px] lg:-mr-10 z-20 group transform-style-3d cursor-pointer"
              >
                
                {/* Scaled Realistic Laptop Mockup Image */}
                <div className="relative scale-110 sm:scale-125 lg:scale-130 transition-transform duration-300 origin-center">
                  <img 
                    src="/laptop-realistic.png" 
                    alt="VolterTrack Laptop Mockup" 
                    className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,140,255,0.4)] filter brightness-105 contrast-105 select-none" 
                  />

                  {/* Specular Light Reflection Sweep across the laptop screen */}
                  <div className="absolute top-[28%] left-[17%] w-[66%] h-[46%] rounded-lg overflow-hidden pointer-events-none">
                    <div className="w-44 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 animate-specular-sweep" />
                  </div>

                  {/* Animated Pulsing Sonar Rings over Lagos Vehicle Markers on the Laptop Screen */}
                  
                  {/* Marker 1: Benz GLE (Alimosho / Idimu) */}
                  <div className="absolute top-[44%] left-[56%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="w-10 h-10 rounded-full border-2 border-red-500/80 absolute -top-5 -left-5 animate-sonar-ring" />
                    <span className="w-10 h-10 rounded-full border border-red-400/50 absolute -top-5 -left-5 animate-sonar-ring-delayed" />
                    <span className="w-3 h-3 rounded-full bg-red-500 absolute -top-1.5 -left-1.5 shadow-md shadow-red-500 animate-pulse" />
                  </div>

                  {/* Marker 2: Toyota Camry (Agege / Ikeja) */}
                  <div className="absolute top-[39%] left-[67%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="w-10 h-10 rounded-full border-2 border-[#008CFF]/80 absolute -top-5 -left-5 animate-sonar-ring" />
                    <span className="w-10 h-10 rounded-full border border-cyan-400/50 absolute -top-5 -left-5 animate-sonar-ring-delayed" />
                    <span className="w-3 h-3 rounded-full bg-[#008CFF] absolute -top-1.5 -left-1.5 shadow-md shadow-blue-500 animate-pulse" />
                  </div>
                </div>

              </div>

              {/* FLOATING GLASS WIDGET 1: Top Right (24 Vehicles Online) with 3D Parallax */}
              <div 
                style={{
                  transform: isHovered 
                    ? `translate3d(${tilt.y * 2.2}px, ${-tilt.x * 2.2}px, 50px)` 
                    : 'translate3d(0, 0, 0)',
                  transition: isHovered ? 'transform 0.15s ease-out' : 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="absolute -top-2 right-0 sm:right-2 z-30 animate-float-a"
              >
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-white/25 to-white/10 backdrop-blur-xl border border-white/35 shadow-[0_15px_35px_rgba(0,140,255,0.35)] text-white flex items-center gap-3 hover:scale-105 transition-transform">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#005CCC] to-[#008CFF] flex items-center justify-center text-white shadow-md">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xl font-bold font-mono text-white leading-none block">
                      {activeVehicles}
                    </span>
                    <span className="text-[10px] text-blue-200 font-medium">
                      Vehicles Online
                    </span>
                  </div>
                </div>
              </div>

              {/* FLOATING GLASS WIDGET 2: Middle Right (Live Tracking Active) with Sonar */}
              <div 
                style={{
                  transform: isHovered 
                    ? `translate3d(${tilt.y * 2.6}px, ${-tilt.x * 2.6}px, 70px)` 
                    : 'translate3d(0, 0, 0)',
                  transition: isHovered ? 'transform 0.15s ease-out' : 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="absolute top-1/2 -right-2 sm:-right-4 transform -translate-y-1/2 z-30 animate-float-b"
              >
                <div className="p-3 rounded-2xl bg-gradient-to-br from-white/25 to-white/10 backdrop-blur-xl border border-white/35 shadow-[0_15px_35px_rgba(0,140,255,0.35)] text-white flex items-center gap-3 hover:scale-105 transition-transform">
                  <div className="w-9 h-9 rounded-xl bg-[#008CFF]/20 border border-[#008CFF]/40 flex items-center justify-center text-[#008CFF] shadow-inner">
                    <Radio className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">Live Tracking</p>
                    <p className="text-[10px] text-emerald-400 font-mono font-bold">ACTIVE</p>
                  </div>
                </div>
              </div>

              {/* FLOATING GLASS WIDGET 3: Bottom Right (85 km/h & Lagos, Nigeria) */}
              <div 
                style={{
                  transform: isHovered 
                    ? `translate3d(${tilt.y * 1.8}px, ${-tilt.x * 1.8}px, 40px)` 
                    : 'translate3d(0, 0, 0)',
                  transition: isHovered ? 'transform 0.15s ease-out' : 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="absolute -bottom-2 right-2 sm:right-6 z-30 animate-float-c"
              >
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-white/25 to-white/10 backdrop-blur-xl border border-white/35 shadow-[0_15px_35px_rgba(0,140,255,0.35)] text-white space-y-1 hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-[#008CFF]" />
                    <span className="text-base font-extrabold font-mono text-white">
                      {speed} <span className="text-[10px] font-normal text-blue-200">km/h</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-blue-200 font-medium">
                    <MapPin className="w-3 h-3 text-[#008CFF]" />
                    <span>Lagos, Nigeria</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* STYLISH CURVED TRANSITION SHAPE AT BOTTOM OF HERO */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
          <svg 
            viewBox="0 0 1440 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full h-12 sm:h-16 md:h-20 text-white preserve-3d"
          >
            <path 
              d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" 
              fill="currentColor"
            />
            {/* Ambient Cyan Glowing Stroke along curve */}
            <path 
              d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64" 
              stroke="#008CFF" 
              strokeWidth="2" 
              strokeOpacity="0.4"
            />
          </svg>
        </div>

      </section>

      {/* OVERLAPPING STYLISH STATS & TRUST RIBBON (Bridges Dark Hero into Light Sections) */}
      <div className="relative max-w-6xl mx-auto -mt-10 sm:-mt-14 md:-mt-16 px-4 sm:px-6 lg:px-8 z-30">
        <div className="p-4 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl shadow-blue-950/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          
          <div className="flex items-center gap-3 sm:gap-4 p-2">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200/80 text-[#005CCC] flex items-center justify-center shrink-0 shadow-sm">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold text-[#012462] font-mono block leading-tight">
                10s
              </span>
              <span className="text-[11px] text-slate-500 font-semibold">
                Sub-Second Telemetry Sync
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 p-2 pt-4 md:pt-2 md:pl-6">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold text-[#012462] font-mono block leading-tight">
                99.8%
              </span>
              <span className="text-[11px] text-slate-500 font-semibold">
                Anti-Theft Security Recovery
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 p-2 pt-4 md:pt-2 md:pl-6">
            <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-200/80 text-indigo-600 flex items-center justify-center shrink-0 shadow-sm">
              <Fuel className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold text-[#012462] font-mono block leading-tight">
                32%
              </span>
              <span className="text-[11px] text-slate-500 font-semibold">
                Avg. Fuel Waste Reduction
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 p-2 pt-4 md:pt-2 md:pl-6">
            <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center shrink-0 shadow-sm">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold text-[#012462] font-mono block leading-tight">
                24/7
              </span>
              <span className="text-[11px] text-slate-500 font-semibold">
                DGPS Multi-Network Guard
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
