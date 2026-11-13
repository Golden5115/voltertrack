import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Radio, 
  Layers, 
  Search, 
  ArrowRight, 
  Sparkles,
  ChevronRight,
  ShieldCheck, 
  Lock, 
  Clock, 
  MapPin, 
  Car, 
  Users, 
  BarChart3, 
  Wrench, 
  Cpu, 
  Bell, 
  CheckCircle2, 
  Navigation, 
  Activity, 
  Zap, 
  Check,
  Fuel
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ALL_FEATURES } from '../data/featuresData';

export const FeaturesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFeatures = ALL_FEATURES.filter(f => 
    (f.title || '').toLowerCase().includes(searchQuery.toLowerCase()) || 
    (f.shortDescription || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (f.tagline || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getFeatureIcon = (slug: string) => {
    switch (slug) {
      case 'live-tracking': return Radio;
      case 'trip-history': return Clock;
      case 'geofencing': return Navigation;
      case 'alerts': return Bell;
      case 'vehicle-management': return Car;
      case 'driver-management': return Users;
      case 'reports': return BarChart3;
      case 'fleet-monitoring': return Activity;
      case 'maintenance': return Wrench;
      case 'fuel-management': return Fuel;
      case 'vehicle-security': return Lock;
      case 'integrations': return Cpu;
      default: return Radio;
    }
  };

  return (
    <div className="space-y-12 sm:space-y-20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Platform Features Catalog | VolterTrack"
        description="Explore all 10 VolterTrack platform capabilities: Live GPS, Route Replay, Geofencing, Speed Governance, Remote Cutoff, Maintenance, and APIs."
      />

      {/* 1. Header & Anchor Quick-Jump Bar */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <Layers className="w-3.5 h-3.5" />
          <span>Platform Capabilities</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#012462] font-['Space_Grotesk'] tracking-tight">
          Every tool to track, protect, and optimize your fleet.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          From live GPS tracking and boundary perimeters to remote engine cutoff and driver safety scorecards.
        </p>

        {/* Search Bar */}
        <div className="pt-3 max-w-lg mx-auto relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search capabilities (e.g. geofence, cutoff, playback)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 text-base sm:text-xs font-medium focus:border-[#005CCC] focus:outline-none shadow-sm"
          />
        </div>

        {/* Anchor Quick Jump Chips */}
        <div className="pt-3 flex items-center justify-start md:justify-center flex-nowrap md:flex-wrap gap-2 md:gap-1.5 overflow-x-auto pb-2 no-scrollbar snap-x text-xs font-semibold">
          {ALL_FEATURES.map((feat) => (
            <a
              key={feat.id}
              href={`#${feat.slug}`}
              className="snap-start px-3.5 py-2 md:px-3 md:py-1.5 rounded-xl bg-white border border-slate-200 hover:border-[#005CCC] text-slate-600 hover:text-[#005CCC] hover:bg-blue-50/50 shadow-sm transition-all text-[11px] whitespace-nowrap shrink-0"
            >
              {feat.title}
            </a>
          ))}
        </div>
      </section>

      {/* 2. Detailed Single-Page Feature Showcase Sections */}
      <section className="space-y-10 sm:space-y-16">
        {filteredFeatures.map((feature, idx) => {
          const Icon = getFeatureIcon(feature.slug);
          const isEven = idx % 2 === 0;

          return (
            <div
              key={feature.id}
              id={feature.slug}
              className="scroll-mt-28 p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-blue-950/5 hover:border-[#008CFF] transition-all duration-300 relative overflow-hidden"
            >
              {/* Ambient radial accent */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                
                {/* Left Text & Breakdown */}
                <div className={`space-y-5 ${isEven ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'}`}>
                  
                  {/* Category & Badge */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-extrabold font-mono text-[#005CCC] uppercase tracking-wider px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200">
                      {(feature.category || 'Core').toUpperCase()}
                    </span>
                    {feature.badge && (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200">
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subheadline */}
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#012462] font-['Space_Grotesk'] leading-tight">
                      {feature.title}
                    </h2>
                    <p className="text-[#005CCC] text-xs sm:text-sm font-bold mt-1.5">
                      {feature.tagline || feature.shortDescription}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {feature.fullDescription || feature.shortDescription}
                  </p>

                  {/* Operational Benefits */}
                  {feature.benefits && feature.benefits.length > 0 && (
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                      <span className="font-bold text-[#012462] uppercase tracking-wider text-[11px]">Direct Operational Benefits:</span>
                      <div className="space-y-1.5 text-slate-700">
                        {feature.benefits.map((b, i) => (
                          <div key={i} className="flex items-start gap-2 text-[11px]">
                            <span className="text-[#005CCC] font-bold">✓</span>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Capabilities Checklist */}
                  {feature.capabilities && feature.capabilities.length > 0 && (
                    <div className="space-y-2 pt-1">
                      <p className="text-xs font-bold text-[#012462] uppercase tracking-wider">
                        Included Capabilities:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {feature.capabilities.map((cap, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action CTAs */}
                  <div className="pt-3 flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/quote"
                      className="w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-xl gradient-bg-brand-h hover:opacity-95 text-white font-bold text-xs shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Get Quote for {feature.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to="/demo"
                      className="w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-xl bg-white border border-slate-200 text-[#012462] hover:border-[#005CCC] font-bold text-xs transition-colors text-center"
                    >
                      Request Live Demo
                    </Link>
                  </div>

                </div>

                {/* Right Interactive Telemetry Dossier Panel */}
                <div className={`space-y-4 ${isEven ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1'}`}>
                  <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-[#012462] to-[#041d4a] text-white shadow-2xl border border-blue-500/20 space-y-4">
                    
                    <div className="flex items-center justify-between border-b border-blue-900/80 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-[#008CFF]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white font-mono">{feature.title}</p>
                          <span className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            LIVE PROTOCOL ACTIVE
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stats & Capability Highlights */}
                    <div className="space-y-2 font-mono text-xs">
                      <p className="text-[10px] text-blue-300 uppercase tracking-wider font-bold">
                        Engine Telemetry & Standards
                      </p>
                      
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] space-y-1">
                        <div className="flex justify-between text-slate-300">
                          <span>Status:</span>
                          <span className="text-emerald-400 font-bold">Operational 24/7</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>Sync Interval:</span>
                          <span className="text-[#008CFF] font-bold">Sub-Second Live</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>Network:</span>
                          <span className="text-[#008CFF] font-bold">4G Multi-Network</span>
                        </div>
                      </div>

                      {feature.statsHighlight && (
                        <div className="p-2.5 rounded-lg bg-[#005CCC]/30 border border-blue-400/30 text-[11px] text-blue-100 font-bold text-center">
                          ⚡ {feature.statsHighlight}
                        </div>
                      )}
                    </div>

                    <div className="pt-2 border-t border-blue-900/80 flex items-center justify-between text-[10px] text-blue-200">
                      <span>Encryption: <strong className="text-emerald-300">TLS 1.3 + AES</strong></span>
                      <span>Access: <strong className="text-[#008CFF]">Web & Mobile</strong></span>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          );
        })}
      </section>

      {/* 3. Bottom Conversion CTA */}
      <section className="p-6 sm:p-8 md:p-14 rounded-2xl sm:rounded-3xl gradient-bg-brand text-center text-white space-y-5 shadow-2xl">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Space_Grotesk']">
          Ready to equip your fleet with all these features?
        </h3>
        <p className="text-blue-100 text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
          Get transparent hardware pricing, nationwide GPS installation across Nigeria, and full access to web and mobile portals in less than 24 hours.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/quote"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-blue-50 text-[#012462] font-bold text-xs shadow-xl transition-all"
          >
            Calculate Custom Quote
          </Link>
          <Link
            to="/demo"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/25 transition-all"
          >
            Schedule Live Demo
          </Link>
        </div>
      </section>

    </div>
  );
};
