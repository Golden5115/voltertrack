import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Radio, 
  Shield, 
  Activity, 
  ArrowRight, 
  ArrowUpRight,
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Navigation, 
  Bell, 
  Car, 
  Users, 
  BarChart3, 
  Wrench, 
  Lock, 
  Cpu, 
  Truck, 
  Building2, 
  Smartphone, 
  Check, 
  ExternalLink, 
  ChevronRight, 
  ShieldCheck, 
  Fuel, 
  Globe, 
  Zap, 
  Award,
  Server,
  LayoutDashboard
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { MobileAppShowcase } from '../components/interactive/MobileAppShowcase';
import { QuoteCalculator } from '../components/interactive/QuoteCalculator';
import { ALL_FEATURES } from '../data/featuresData';
import { ALL_INDUSTRIES } from '../data/industriesData';
import { FAQ_ITEMS } from '../data/resourcesData';

import { HeroSection } from '../components/home/HeroSection';
import { COMPANY_CONTACT } from '../data/contactData';

export const HomePage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(ALL_INDUSTRIES[0]);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(FAQ_ITEMS[0].id);

  const getFeatureIcon = (slug: string) => {
    switch (slug) {
      case 'live-tracking': return Radio;
      case 'trip-history': return Zap;
      case 'geofencing': return Navigation;
      case 'alerts': return Bell;
      case 'vehicle-management': return Car;
      case 'driver-management': return Users;
      case 'reports': return BarChart3;
      case 'fleet-monitoring': return Activity;
      case 'maintenance': return Wrench;
      case 'vehicle-security': return Lock;
      case 'integrations': return Cpu;
      default: return Radio;
    }
  };

  return (
    <div className="overflow-x-clip">
      <SEO 
        title="VolterTrack | Smart Fleet Management & Vehicle Tracking Platform"
        description="Know where your vehicles are. Stay in control. Track, monitor, secure, and manage your vehicles in real time with intelligent GPS technology."
      />

      {/* 1. VISUAL HERO SECTION + STATS BANNER */}
      <div id="hero" className="scroll-mt-28">
        <HeroSection />
      </div>

      {/* 2. CORE VALUE PILLARS (VolterTrack Ice-Blue Tech Canvas) */}
      <section id="values" className="scroll-mt-28 relative bg-gradient-to-b from-[#EEF5FC] via-[#F6FAFF] to-[#E9F2FB] py-10 sm:py-16 md:py-28 border-b border-blue-200/70 overflow-x-clip">
        {/* Subtle Cyber Grid & Ambient Glows */}
        <div className="absolute inset-0 bg-grid-cyber opacity-70 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[320px] bg-gradient-to-b from-blue-400/15 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-0 w-96 h-96 bg-[#008CFF]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2.5 sm:space-y-3 max-w-3xl mx-auto mb-7 sm:mb-12 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/90 border border-blue-200 text-[#005CCC] text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Core Value</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk'] tracking-tight">
              Everything you need to manage your vehicles with confidence.
            </h2>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
              Eliminate location blind spots, curb unauthorized trips, and secure assets 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5 lg:gap-8">
            {[
              {
                step: '01',
                title: 'Live Visibility',
                tagline: 'Real-time location & status',
                desc: 'Sub-second GPS coordinates, street addresses, and speed telemetry on crisp vector and satellite maps.',
                highlights: ['Live map coordinates', 'Exact street address lookup', 'Moving & parked statuses'],
                icon: Radio,
                color: 'text-[#005CCC]',
                bgAccent: 'bg-blue-50',
                borderAccent: 'border-blue-200',
              },
              {
                step: '02',
                title: 'Operational Control',
                tagline: 'Perimeters & driver alerts',
                desc: 'Automate geofence boundaries, speed threshold monitoring, and instant ignition notifications.',
                highlights: ['Depot entry & exit geofences', 'Overspeed & curfew alerts', 'Route deviation tracking'],
                icon: ShieldCheck,
                color: 'text-emerald-600',
                bgAccent: 'bg-emerald-50',
                borderAccent: 'border-emerald-200',
              },
              {
                step: '03',
                title: 'Fleet Intelligence',
                tagline: 'Automated logs & analytics',
                desc: 'Turn raw GPS points into automated trip summaries, driver safety scorecards, and maintenance reminders.',
                highlights: ['Automated trip & stop summaries', 'Driver safety scorecards', 'Odometer service reminders'],
                icon: BarChart3,
                color: 'text-indigo-600',
                bgAccent: 'bg-indigo-50',
                borderAccent: 'border-indigo-200',
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-blue-100 shadow-lg md:shadow-xl shadow-blue-950/5 hover:border-[#008CFF] hover:shadow-2xl hover:shadow-blue-500/12 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-2 items-center gap-x-3 md:gap-y-5 mb-2.5 md:mb-3">
                      <div className={`col-start-1 row-start-1 w-9 h-9 md:w-12 md:h-12 rounded-xl md:rounded-2xl ${pillar.bgAccent} border ${pillar.borderAccent} flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm shrink-0`}>
                        <Icon className={`w-4 h-4 md:w-6 md:h-6 ${pillar.color}`} />
                      </div>
                      <span className="col-start-3 row-start-1 md:col-start-2 justify-self-end text-[10px] md:text-[11px] font-extrabold font-mono text-[#005CCC] px-2 md:px-2.5 py-0.5 md:py-1 rounded-lg bg-blue-50 border border-blue-200 shrink-0">
                        {pillar.step}
                      </span>
                      <div className="col-start-2 row-start-1 md:col-start-1 md:col-span-2 md:row-start-2 min-w-0">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#012462] group-hover:text-[#005CCC] transition-colors leading-tight">
                          {pillar.title}
                        </h3>
                        <p className="text-[11px] md:text-xs font-bold text-[#005CCC] mt-0.5 md:mt-1 leading-tight">
                          {pillar.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 text-[11px] md:text-xs leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 md:mt-6 md:pt-5 border-t border-slate-100 space-y-1 md:space-y-2">
                    {pillar.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 md:gap-2 text-[10px] sm:text-[11px] font-medium text-slate-700">
                        <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. CORE PLATFORM CAPABILITIES (Crisp High-Contrast White with Blue Focus Spotlight) */}
      <section id="features" className="scroll-mt-28 relative bg-white py-10 sm:py-16 md:py-24 border-b border-slate-200/80 overflow-x-clip">
        {/* Subtle Radial Blue Spotlight & Ambient Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[320px] bg-[radial-gradient(ellipse_at_top,rgba(0,92,204,0.07),transparent_70%)] pointer-events-none" />
        <div className="absolute -left-40 top-1/3 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-40 bottom-1/4 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#005CCC] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3 shadow-sm">
                <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Platform Capabilities</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk'] tracking-tight">
                Engineered for complete operational control.
              </h2>
            </div>
            <Link
              to="/features"
              className="hidden md:inline-flex px-5 py-2.5 rounded-xl bg-blue-50/70 border border-blue-200 hover:border-[#005CCC] text-xs font-bold text-[#005CCC] hover:text-[#012462] shadow-sm hover:shadow-md transition-all items-center gap-2 shrink-0 min-h-[40px]"
            >
              <span>Explore all 10 platform features</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4 lg:gap-5">
            {ALL_FEATURES.slice(0, 6).map((feature, idx) => {
              const Icon = getFeatureIcon(feature.slug);

              return (
                <Link
                  key={feature.id}
                  to={`/features#${feature.slug}`}
                  className="aspect-square sm:aspect-auto sm:min-h-[195px] md:min-h-[215px] p-3 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[#F6F9FE] hover:bg-gradient-to-br hover:from-[#012462] hover:to-[#003B8C] border border-blue-200/70 hover:border-[#008CFF] shadow-xs hover:shadow-xl hover:shadow-blue-950/20 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Subtle geometric corner texture */}
                  <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-blue-500/5 group-hover:bg-[#008CFF]/20 transition-colors pointer-events-none" />

                  <div className="flex items-start justify-between gap-2 relative z-10">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg sm:rounded-xl bg-[#012462] group-hover:bg-[#008CFF] text-white flex items-center justify-center shrink-0 shadow-sm transition-colors">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-slate-400 group-hover:text-blue-200 transition-colors">
                      <span>0{idx + 1}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#005CCC] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>

                  <div className="mt-auto pt-2 relative z-10 space-y-1 sm:space-y-1.5">
                    <h3 className="text-[12.5px] sm:text-base md:text-lg font-bold text-[#012462] group-hover:text-white transition-colors font-['Space_Grotesk'] leading-[1.2] sm:leading-snug">
                      {feature.title}
                    </h3>
                    <p className="sm:hidden text-[10px] text-slate-500 group-hover:text-blue-100/90 leading-[1.3] line-clamp-2 transition-colors">
                      {feature.tagline}
                    </p>
                    <p className="hidden sm:block text-xs text-slate-600 group-hover:text-blue-100/90 leading-relaxed line-clamp-3 transition-colors">
                      {feature.shortDescription}
                    </p>
                    <div className="hidden sm:block pt-1">
                      <span className="block h-0.5 w-8 bg-[#008CFF]/40 group-hover:w-full group-hover:bg-[#008CFF] rounded-full transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom Explore CTA Link */}
          <div className="mt-6 sm:mt-10 text-center">
            <Link
              to="/features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50/60 hover:from-blue-100 hover:to-indigo-100 border border-blue-200 text-xs font-bold text-[#005CCC] hover:text-[#012462] shadow-md hover:shadow-xl transition-all group min-h-[44px]"
            >
              <span>Explore All 10 Capabilities</span>
              <ArrowRight className="w-4 h-4 text-[#005CCC] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. PLATFORM ARCHITECTURE MODULES (VolterTrack Tech Horizon Canvas) */}
      <section id="platform" className="scroll-mt-28 relative bg-gradient-to-b from-[#EBF2FC] via-[#F4F8FE] to-[#E7F0FA] py-14 sm:py-20 md:py-28 border-b border-blue-200/80 overflow-x-clip">
        {/* Subtle Cyber Grid & Ambient Lighting */}
        <div className="absolute inset-0 bg-grid-cyber opacity-75 pointer-events-none" />
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#008CFF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#005CCC]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-[#005CCC] text-xs font-bold uppercase tracking-wider shadow-sm">
              <LayoutDashboard className="w-4 h-4" />
              <span>Unified Platform Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk'] tracking-tight">
              One central command system for your entire fleet.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Designed for live dispatchers, fleet directors, security managers, and individual vehicle owners.
            </p>
          </div>

          {/* Module 1: Web Dashboard */}
          <div id="dashboard" className="scroll-mt-28 p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-md border border-blue-200/90 shadow-2xl shadow-blue-950/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold">
                  <LayoutDashboard className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-[#005CCC] uppercase tracking-wider block">
                  Module 01 • Operations Console
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#012462] font-['Space_Grotesk']">
                  Web Control Dashboard
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A desktop-optimized command center for dispatchers, fleet managers, and security operations. Real-time telemetry, filterable status boards, map layers, and multi-vehicle monitoring.
                </p>

                <div className="space-y-2 text-xs text-slate-700">
                  {['Live streaming telemetry with 1-second refresh rates', 'Multi-tab fleet grouping by branch or vehicle class', 'Exportable PDF/Excel compliance and mileage reports'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="https://app.voltertrack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-xl gradient-bg-brand-h text-white font-bold text-xs shadow-md hover:opacity-95 transition-opacity min-h-[44px]"
                  >
                    <span>Launch Web Console</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-blue-200/80 shadow-2xl shadow-blue-900/15 bg-slate-900 group">
                  <img
                    src="/central-command-system.png"
                    alt="VolterTrack Central Command System"
                    className="w-full h-auto object-cover rounded-2xl md:rounded-3xl group-hover:scale-[1.01] transition-transform duration-300 shadow-md select-none"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Module 2: Mobile App Showcase */}
          <div id="mobile-app" className="scroll-mt-28">
            <MobileAppShowcase />
          </div>

        </div>
      </section>

      {/* 5. TAILORED INDUSTRY SOLUTIONS (Crisp White Canvas with VolterTrack Blue Accents) */}
      <section id="solutions" className="scroll-mt-28 relative bg-white py-14 sm:py-20 md:py-28 border-b border-slate-200/80 overflow-x-clip">
        {/* Subtle top ambient transition and soft dots */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#E7F0FA]/60 to-transparent pointer-events-none" />
        <div className="absolute -left-20 top-1/2 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-0 top-1/4 w-80 h-80 bg-[radial-gradient(circle,rgba(0,92,204,0.06)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

        <div id="industries" className="scroll-mt-28 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#005CCC] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Building2 className="w-4 h-4" />
              <span>Tailored Industry Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk'] tracking-tight">
              Solutions built for your specific operational reality.
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Whether you operate heavy interstate haulage, urban dispatch bikes, or corporate pool cars, VolterTrack adapts to your exact business workflow.
            </p>
          </div>

          {/* Industry Pill Tabs */}
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-3 sm:pb-4 snap-x no-scrollbar -mx-1 px-1">
            {ALL_INDUSTRIES.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 snap-start min-h-[40px] ${
                  selectedIndustry.id === ind.id
                    ? 'bg-gradient-to-r from-[#012462] via-[#003B8C] to-[#005CCC] text-white shadow-lg shadow-blue-900/25 ring-2 ring-[#005CCC]/20'
                    : 'bg-[#F0F6FD] border border-blue-200/80 text-slate-700 hover:text-[#005CCC] hover:bg-blue-50 hover:border-blue-300 shadow-sm'
                }`}
              >
                {ind.title}
              </button>
            ))}
          </div>

          {/* Selected Industry Card */}
          <div className="mt-5 sm:mt-8 p-5 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#FAFCFF] to-white border border-blue-200/80 shadow-2xl shadow-blue-950/8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-bold text-[#005CCC] uppercase tracking-wider">
                  Industry Focus: {selectedIndustry.title}
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-[#012462] leading-tight font-['Space_Grotesk']">
                  {selectedIndustry.heroHeadline}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {selectedIndustry.heroDescription}
                </p>

                {/* Problems & Solutions list */}
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold text-[#012462]">Key Problems Solved:</p>
                  {selectedIndustry.industryProblems.slice(0, 3).map((prob, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="text-rose-600 font-bold shrink-0">✕</span>
                      <span>{prob}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/quote"
                    className="w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-xl gradient-bg-brand-h hover:opacity-95 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md min-h-[44px]"
                  >
                    <span>Get {selectedIndustry.title} Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to={`/industries#${selectedIndustry.slug}`}
                    className="w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-xl bg-blue-50/80 hover:bg-blue-100 border border-blue-200 text-[#005CCC] text-xs font-bold transition-colors flex items-center justify-center min-h-[44px]"
                  >
                    <span>View {selectedIndustry.title} Blueprint</span>
                  </Link>
                </div>
              </div>

              {/* Workflow Diagram Box */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-[#F0F6FD] to-[#E8F1FC] border border-blue-200/90 space-y-3 font-mono text-xs shadow-inner">
                  <p className="text-[11px] uppercase tracking-wider text-[#005CCC] font-bold">
                    Operational Workflow Architecture
                  </p>
                  
                  <div className="space-y-2 text-slate-700">
                    <div className="p-2.5 rounded-xl bg-white border border-blue-100 flex items-center gap-2 shadow-sm">
                      <span className="w-5 h-5 rounded-lg bg-blue-100 text-[#005CCC] flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                      <span className="text-[11px]">{selectedIndustry.workflow.step1}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-blue-100 flex items-center gap-2 shadow-sm">
                      <span className="w-5 h-5 rounded-lg bg-blue-100 text-[#005CCC] flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                      <span className="text-[11px]">{selectedIndustry.workflow.step2}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-blue-100 flex items-center gap-2 shadow-sm">
                      <span className="w-5 h-5 rounded-lg bg-blue-100 text-[#005CCC] flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
                      <span className="text-[11px]">{selectedIndustry.workflow.step3}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-emerald-100 flex items-center gap-2 shadow-sm">
                      <span className="w-5 h-5 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0">4</span>
                      <span className="text-[11px]">{selectedIndustry.workflow.step4}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. API & ENTERPRISE INTEGRATIONS (Full-Bleed VolterTrack Deep Tech Navy & Cyber Space) */}
      <section id="integrations" className="scroll-mt-28 relative bg-gradient-to-b from-[#08152E] via-[#012462] to-[#041126] text-white py-16 sm:py-24 md:py-32 border-y border-blue-900/70 overflow-x-clip shadow-2xl">
        {/* Deep Tech Cyber Grid & High-Intensity Glowing Orbs */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,140,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,140,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#005CCC]/25 via-[#008CFF]/20 to-transparent blur-[120px] pointer-events-none" />
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#008CFF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-[#005CCC]/15 rounded-full blur-3xl pointer-events-none" />

        <div id="architecture" className="scroll-mt-28 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl p-5 sm:p-8 md:p-14 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#008CFF] text-xs font-bold backdrop-blur-sm shadow-sm">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>API-First Architecture</span>
                </div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Space_Grotesk'] leading-tight">
                  Connect VolterTrack to your business software.
                </h2>
                <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
                  Stream live GPS coordinates, geofence trigger webhooks, odometer totals, and vehicle events directly into SAP, Oracle, Odoo, custom dispatch apps, or customer tracking portals.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 pt-2 text-xs">
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-1 hover:bg-white/15 transition-all shadow-md">
                    <p className="font-bold text-white">RESTful JSON APIs</p>
                    <p className="text-[11px] text-blue-200">OpenAPI/Swagger docs with developer sandbox</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-1 hover:bg-white/15 transition-all shadow-md">
                    <p className="font-bold text-white">Real-Time Webhooks</p>
                    <p className="text-[11px] text-blue-200">Instant event callbacks for arrival & alerts</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/features#integrations"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#008CFF] hover:text-white transition-colors py-1"
                  >
                    <span>Explore Developer Documentation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Architecture Visual */}
              <div className="lg:col-span-6 bg-gradient-to-b from-white/10 to-white/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20 backdrop-blur-xl font-mono text-xs space-y-4 sm:space-y-5 shadow-2xl shadow-black/40">
                <div className="text-center p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#005CCC] to-[#008CFF] text-white font-bold tracking-wide shadow-lg shadow-blue-500/25 text-[11px] sm:text-xs">
                  ⚡ VOLTERTRACK TELEMATICS ENGINE
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[#008CFF] font-bold text-xs sm:text-sm">
                  <span>↓ REST API</span>
                  <span>↓ Webhooks</span>
                  <span>↓ Traccar Bridge</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center text-[11px] sm:text-[10px]">
                  <div className="p-3 sm:p-3.5 rounded-xl bg-white/10 border border-white/15 text-white hover:border-[#008CFF]/50 transition-colors shadow-sm">
                    <p className="font-bold">ERP Systems</p>
                    <span className="text-blue-200">SAP / Oracle / Odoo</span>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-xl bg-white/10 border border-white/15 text-white hover:border-[#008CFF]/50 transition-colors shadow-sm">
                    <p className="font-bold">CRM & Billing</p>
                    <span className="text-blue-200">Salesforce / Zoho</span>
                  </div>
                  <div className="p-3 sm:p-3.5 rounded-xl bg-white/10 border border-white/15 text-white hover:border-[#008CFF]/50 transition-colors shadow-sm">
                    <p className="font-bold">Custom Apps</p>
                    <span className="text-blue-200">Dispatch Portals</span>
                  </div>
                </div>

                <div className="text-center p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-[10px] sm:text-[11px] text-emerald-300 font-bold backdrop-blur-sm">
                  ✓ 99.9% Telemetry Ingest SLA • End-to-End Encrypted Payload
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE FLEET QUOTE & ROI CALCULATOR (Soft VolterTrack Ice-Blue Canvas) */}
      <section id="quote" className="scroll-mt-28 relative bg-gradient-to-b from-[#F2F7FE] via-[#F8FAFF] to-[#EBF3FC] py-14 sm:py-20 md:py-28 border-b border-blue-200/80 overflow-x-clip">
        {/* Subtle Cyber Grid & Ambient Glows */}
        <div className="absolute inset-0 bg-grid-cyber opacity-60 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-300/15 blur-3xl pointer-events-none" />

        <div id="pricing" className="scroll-mt-28 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteCalculator />
        </div>
      </section>

      {/* 8. COMPREHENSIVE FAQ ACCORDION (Crisp White Canvas with Blue Highlights) */}
      <section id="faq" className="scroll-mt-28 relative bg-white py-14 sm:py-20 md:py-28 border-b border-slate-200/80 overflow-x-clip">
        {/* Subtle Top Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[250px] bg-[radial-gradient(ellipse_at_top,rgba(0,92,204,0.06),transparent_75%)] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#005CCC] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Shield className="w-4 h-4" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk'] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about GPS tracking hardware, mobile apps, installation, and platform billing.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-3.5">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = expandedFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-blue-50/40 border border-[#005CCC]/50 shadow-md shadow-blue-900/5 ring-1 ring-[#005CCC]/20'
                      : 'bg-slate-50/70 border border-slate-200 hover:border-blue-300 hover:bg-white shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                    className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#012462] hover:text-[#005CCC] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className={`text-[#005CCC] text-xl font-mono transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-45 text-rose-600' : ''}`}>
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-blue-100/80 bg-white/80">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <Link
              to="/faq"
              className="text-xs font-bold text-[#005CCC] hover:text-[#008CFF] inline-flex items-center gap-1.5 transition-colors py-1"
            >
              <span>View full knowledgebase & FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 9. FINAL CONVERSION CTA BANNER (Framed VolterTrack Canvas with Signature Gradient Banner) */}
      <section id="contact" className="scroll-mt-28 relative bg-gradient-to-b from-[#F2F7FE] via-[#E8F1FC] to-[#DCE9FA] py-12 sm:py-16 md:py-24 border-t border-blue-200/80 overflow-x-clip">
        {/* Ambient Cyber Grid & Floating Glows */}
        <div className="absolute inset-0 bg-grid-cyber opacity-70 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#008CFF]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-8 md:p-16 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#012462] via-[#005CCC] to-[#008CFF] text-white text-center space-y-5 sm:space-y-6 shadow-2xl shadow-blue-900/30 border border-blue-300/30 relative overflow-hidden">
            {/* Specular Ambient Glows inside Banner */}
            <div className="absolute top-0 right-0 w-[260px] sm:w-[450px] h-[260px] sm:h-[450px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[260px] sm:w-[450px] h-[260px] sm:h-[450px] bg-black/25 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-bold backdrop-blur-sm shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-200" />
                <span>Transform Your Fleet Operations Today</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-['Space_Grotesk'] leading-tight">
                Ready to take full control of your vehicles?
              </h2>
              
              <p className="text-blue-100 text-xs sm:text-base leading-relaxed">
                We come directly to your home, office, or depot with zero hidden costs. You pay only after installation has been completed and tested live on your phone.
              </p>

              {/* Customer Guarantee Trust Badges */}
              <div className="pt-1 sm:pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-blue-200">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[3]" /> We Come To You
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[3]" /> Zero Hidden Costs
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[3]" /> Pay After Testing
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[3]" /> Zero Renewal Fees
                </span>
              </div>

              <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-3.5">
                <Link
                  to="/quote"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-blue-50 text-[#012462] font-bold text-xs shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 min-h-[46px]"
                >
                  <span>Calculate Your Fleet Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={COMPANY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-xl transition-all flex items-center justify-center gap-2 min-h-[46px]"
                >
                  <span>WhatsApp ({COMPANY_CONTACT.phoneDisplay} • 24/7)</span>
                </a>
                <Link
                  to="/demo"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/30 backdrop-blur-sm transition-all flex items-center justify-center gap-2 min-h-[46px]"
                >
                  <span>Schedule a 1-on-1 Demo</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
