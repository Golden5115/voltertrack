import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Radio, 
  Shield, 
  Activity, 
  ArrowRight, 
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
import { GeofenceVisualizer } from '../components/interactive/GeofenceVisualizer';
import { LiveMapSimulator } from '../components/interactive/LiveMapSimulator';
import { ALL_FEATURES } from '../data/featuresData';
import { ALL_INDUSTRIES } from '../data/industriesData';
import { FAQ_ITEMS } from '../data/resourcesData';

import { HeroSection } from '../components/home/HeroSection';

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
    <div className="overflow-hidden">
      <SEO 
        title="VolterTrack | Smart Fleet Management & Vehicle Tracking Platform"
        description="Know where your vehicles are. Stay in control. Track, monitor, secure, and manage your vehicles in real time with intelligent GPS technology."
      />

      {/* 1. VISUAL HERO SECTION + STATS BANNER */}
      <div id="hero" className="scroll-mt-28">
        <HeroSection />
      </div>

      {/* 2. CORE VALUE PILLARS (Clean Crisp White Canvas) */}
      <section id="values" className="scroll-mt-28 bg-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#005CCC] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Shield className="w-4 h-4" />
              <span>Core Value Pillars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk'] tracking-tight">
              Everything you need to manage your fleet with confidence.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Engineered specifically to eliminate unauthorized vehicle use, route blindness, driver speeding, and vehicle security risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Visibility',
                tagline: 'Know where your vehicles are.',
                desc: 'Sub-second real-time GPS coordinates, vehicle statuses, street addresses, and speed telemetry on crisp vector and satellite maps.',
                highlights: ['Sub-second live map sync', 'Exact street address lookup', 'Online & moving telemetry'],
                icon: Radio,
                color: 'text-[#005CCC]',
                bgAccent: 'bg-blue-50',
                borderAccent: 'border-blue-200',
              },
              {
                step: '02',
                title: 'Control',
                tagline: 'Monitor activity & respond to events.',
                desc: 'Automate boundary geofencing, receive instant ignition/speed alerts, and remotely immobilize vehicle engines in emergencies.',
                highlights: ['Instant boundary geofences', 'Overspeeding & ignition alerts', 'Remote engine kill switch'],
                icon: ShieldCheck,
                color: 'text-emerald-600',
                bgAccent: 'bg-emerald-50',
                borderAccent: 'border-emerald-200',
              },
              {
                step: '03',
                title: 'Intelligence',
                tagline: 'Turn fleet data into useful insights.',
                desc: 'Transform raw GPS points into automated trip summaries, journey duration logs, driver safety scoring, and mileage reports.',
                highlights: ['Automated trip & stop summaries', 'Harsh braking & speeding reports', 'Digital mileage & operational logs'],
                icon: BarChart3,
                color: 'text-indigo-600',
                bgAccent: 'bg-indigo-50',
                borderAccent: 'border-indigo-200',
              },
              {
                step: '04',
                title: 'Security',
                tagline: 'Improve vehicle visibility & protection.',
                desc: 'Instant ignition alerts, remote engine cutoff immobilizer, internal backup battery, and recovery-assist live tracking.',
                highlights: ['Remote engine kill switch', 'Instant ignition & movement alert', 'Law-enforcement recovery feed'],
                icon: Lock,
                color: 'text-rose-600',
                bgAccent: 'bg-rose-50',
                borderAccent: 'border-rose-200',
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-7 md:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-blue-950/5 hover:border-[#008CFF] hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${pillar.bgAccent} border ${pillar.borderAccent} flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}>
                        <Icon className={`w-6 h-6 ${pillar.color}`} />
                      </div>
                      <span className="text-[11px] font-extrabold font-mono text-slate-400 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200">
                        {pillar.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#012462] group-hover:text-[#005CCC] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-bold text-[#005CCC] mt-1">
                      {pillar.tagline}
                    </p>
                    <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                    {pillar.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] font-medium text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
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

      {/* 3. FULL PLATFORM CAPABILITIES (All 12 Capabilities with Sub-Anchors) */}
      <section id="features" className="scroll-mt-28 bg-gradient-to-b from-[#EEF5FC] via-[#F6FAFF] to-[#EDF4FC] py-20 md:py-28 border-b border-blue-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blue-200/80 text-[#005CCC] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
                <Layers className="w-4 h-4" />
                <span>Full Platform Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk'] tracking-tight">
                Engineered for absolute operational mastery.
              </h2>
            </div>
            <Link
              to="/features"
              className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#005CCC] text-xs font-bold text-[#005CCC] hover:text-[#012462] shadow-sm hover:shadow-md transition-all flex items-center gap-2 self-start md:self-auto shrink-0"
            >
              <span>Explore all 12 platform features</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_FEATURES.slice(0, 6).map((feature) => {
              const anchorId = feature.slug === 'fuel-management' ? 'fuel-monitoring' : feature.slug;
              const Icon = getFeatureIcon(feature.slug);

              return (
                <Link
                  key={feature.id}
                  to={`/features#${anchorId}`}
                  className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md shadow-blue-950/5 hover:border-[#008CFF] hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#005CCC] group-hover:scale-110 transition-transform shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      {feature.badge && (
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-100/70 text-[#005CCC] border border-blue-200">
                          {feature.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-[#012462] group-hover:text-[#005CCC] transition-colors font-['Space_Grotesk']">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {feature.shortDescription}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#005CCC]">
                    <span>View capability deep dive</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom Explore CTA Link */}
          <div className="mt-12 text-center">
            <Link
              to="/features"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white hover:bg-blue-50 border border-blue-200 text-xs font-bold text-[#005CCC] hover:text-[#012462] shadow-md hover:shadow-xl transition-all group"
            >
              <span>Explore All 12 Capabilities in the Feature Matrix</span>
              <ArrowRight className="w-4 h-4 text-[#005CCC] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. PLATFORM ARCHITECTURE MODULES (Desktop, Mobile, Fleet Ops, RBAC & Cloud) */}
      <section id="platform" className="scroll-mt-28 bg-white py-20 md:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#005CCC] text-xs font-bold uppercase tracking-wider shadow-sm">
              <LayoutDashboard className="w-4 h-4" />
              <span>Unified Platform Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk'] tracking-tight">
              One central command system for your entire fleet.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Designed for live dispatchers, fleet directors, security managers, and individual vehicle owners.
            </p>
          </div>

          {/* Module 1: Web Dashboard */}
          <div id="dashboard" className="scroll-mt-28 p-8 md:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold">
                  <LayoutDashboard className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-[#005CCC] uppercase tracking-wider">
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
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="https://app.voltertrack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-bg-brand-h text-white font-bold text-xs shadow-md"
                  >
                    <span>Launch Web Console</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <LiveMapSimulator />
              </div>
            </div>
          </div>

          {/* Module 2: Mobile App Showcase */}
          <div id="mobile-app" className="scroll-mt-28">
            <MobileAppShowcase />
          </div>

          {/* Module 3: Fleet Management & Driver Scoring */}
          <div id="fleet-management" className="scroll-mt-28 p-8 md:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-lg">
            <div id="driver-management" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-[#005CCC] uppercase tracking-wider">
                  Module 03 • Operations Intelligence
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#012462] font-['Space_Grotesk']">
                  Fleet & Driver Management
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Manage drivers, track document expirations (licenses, insurance, roadworthiness), schedule maintenance based on actual odometer readings, and score driver safety.
                </p>

                <div className="space-y-2 text-xs text-slate-700">
                  {['Driver safety scorecards based on harsh braking and speeding', 'Odometer-triggered maintenance reminders (Oil, Tires, Brakes)', 'Vehicle document expiry tracking with early warnings'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200 space-y-3 font-mono text-xs shadow-sm">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="font-bold text-[#012462]">Driver Performance Scoreboard</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-bold">Fleet Avg: 92/100</span>
                </div>
                {[
                  { name: 'Ibrahim Danjuma', score: 98, trips: 142, status: 'Exemplary' },
                  { name: 'Emeka Okafor', score: 95, trips: 120, status: 'Safe' },
                  { name: 'Tunde Adeleke', score: 88, trips: 96, status: 'Review' },
                ].map((dr, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-sm">
                    <div>
                      <p className="font-bold text-[#012462]">{dr.name}</p>
                      <p className="text-[10px] text-slate-500">{dr.trips} verified trips this month</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-[#005CCC]">{dr.score}/100</span>
                      <p className="text-[9px] text-slate-500">{dr.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Module 4: Administration & RBAC */}
          <div id="administration" className="scroll-mt-28 p-8 md:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold">
                  <Lock className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-[#005CCC] uppercase tracking-wider">
                  Module 04 • Enterprise Governance
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#012462] font-['Space_Grotesk']">
                  Administration & Access Control
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Granular multi-tenant roles, branch segregation, immutable audit trails, and multi-factor authentication for enterprise-grade security.
                </p>

                <div className="space-y-2 text-xs text-slate-700">
                  {['Custom roles: Super Admin, Branch Manager, Dispatcher, Viewer', 'Branch vehicle isolation (e.g. Lagos vs Abuja branch visibility)', 'Immutable system audit logs tracking all logins and command dispatches'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200 space-y-3 font-mono text-xs shadow-sm">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-bold text-[#012462]">Audit Log: Remote Cutoff Executed</p>
                  <p className="text-[10px] text-slate-500">Actor: admin@swiftfreight.com • IP: 102.89.44.12</p>
                  <p className="text-[10px] text-emerald-600 font-bold">Status: Acknowledged by Hardware</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-bold text-[#012462]">Role Assignment: Lagos Dispatcher</p>
                  <p className="text-[10px] text-slate-500">Permitted: View Lagos Fleet, Create Geofences</p>
                  <p className="text-[10px] text-slate-500">Restricted: Remote Cutoff Disabled</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. GEOFENCING INTERACTIVE HIGHLIGHT */}
      <section id="geofencing" className="scroll-mt-28 bg-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GeofenceVisualizer />
        </div>
      </section>

      {/* 6. TAILORED INDUSTRY SOLUTIONS */}
      <section id="solutions" className="scroll-mt-28 bg-white py-16 md:py-24 border-b border-slate-100">
        <div id="industries" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#005CCC] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Building2 className="w-4 h-4" />
              <span>Tailored Industry Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk'] tracking-tight">
              Solutions built for your specific operational reality.
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Whether you operate heavy interstate haulage, urban dispatch bikes, or corporate pool cars, VolterTrack adapts to your exact business workflow.
            </p>
          </div>

          {/* Industry Pill Tabs */}
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
            {ALL_INDUSTRIES.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedIndustry.id === ind.id
                    ? 'bg-[#005CCC] text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-700 hover:text-[#005CCC]'
                }`}
              >
                {ind.title}
              </button>
            ))}
          </div>

          {/* Selected Industry Card */}
          <div className="mt-6 p-6 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-blue-950/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-bold text-[#005CCC] uppercase tracking-wider">
                  Industry Focus: {selectedIndustry.title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#012462] leading-tight font-['Space_Grotesk']">
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

                <div className="pt-4 flex flex-wrap gap-3">
                  <Link
                    to="/quote"
                    className="px-5 py-2.5 rounded-xl gradient-bg-brand-h hover:opacity-95 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md"
                  >
                    <span>Get {selectedIndustry.title} Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to={`/industries#${selectedIndustry.slug}`}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                  >
                    <span>View {selectedIndustry.title} Blueprint</span>
                  </Link>
                </div>
              </div>

              {/* Workflow Diagram Box */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 font-mono text-xs">
                  <p className="text-[11px] uppercase tracking-wider text-[#005CCC] font-bold">
                    Operational Workflow Architecture
                  </p>
                  
                  <div className="space-y-2 text-slate-700">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2 shadow-sm">
                      <span className="w-5 h-5 rounded-lg bg-blue-100 text-[#005CCC] flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                      <span className="text-[11px]">{selectedIndustry.workflow.step1}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2 shadow-sm">
                      <span className="w-5 h-5 rounded-lg bg-blue-100 text-[#005CCC] flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                      <span className="text-[11px]">{selectedIndustry.workflow.step2}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2 shadow-sm">
                      <span className="w-5 h-5 rounded-lg bg-blue-100 text-[#005CCC] flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
                      <span className="text-[11px]">{selectedIndustry.workflow.step3}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2 shadow-sm">
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

      {/* 7. API & ENTERPRISE INTEGRATIONS */}
      <section id="integrations" className="scroll-mt-28 bg-gradient-to-b from-white via-slate-50 to-white py-16 md:py-24 border-b border-slate-100">
        <div id="architecture" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#012462] via-[#003B8C] to-[#005CCC] text-white p-8 md:p-14 shadow-2xl border border-blue-400/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#008CFF] text-xs font-bold">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>API-First Architecture</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] leading-tight">
                  Connect VolterTrack to your business software.
                </h2>
                <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                  Stream live GPS coordinates, geofence trigger webhooks, odometer totals, and vehicle events directly into SAP, Oracle, Odoo, custom dispatch apps, or customer tracking portals.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 rounded-xl bg-white/10 border border-white/15 space-y-1">
                    <p className="font-bold text-white">RESTful JSON APIs</p>
                    <p className="text-[11px] text-blue-200">OpenAPI/Swagger docs with developer sandbox</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 border border-white/15 space-y-1">
                    <p className="font-bold text-white">Real-Time Webhooks</p>
                    <p className="text-[11px] text-blue-200">Instant event callbacks for arrival & alerts</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/features#integrations"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#008CFF] hover:text-white"
                  >
                    <span>Explore Developer Documentation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Architecture Visual */}
              <div className="lg:col-span-6 bg-white/10 rounded-2xl p-6 border border-white/20 font-mono text-xs space-y-4 shadow-xl">
                <div className="text-center p-3 rounded-xl bg-[#005CCC] text-white font-bold">
                  ⚡ VOLTERTRACK TELEMATICS ENGINE
                </div>

                <div className="flex items-center justify-center gap-2 text-[#008CFF] font-bold text-sm">
                  <span>↓ REST API</span>
                  <span>↓ Webhooks</span>
                  <span>↓ Traccar Bridge</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-white">
                    <p className="font-bold">ERP Systems</p>
                    <span className="text-blue-200">SAP / Oracle / Odoo</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-white">
                    <p className="font-bold">CRM & Billing</p>
                    <span className="text-blue-200">Salesforce / Zoho</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-white">
                    <p className="font-bold">Custom Apps</p>
                    <span className="text-blue-200">Dispatch Portals</span>
                  </div>
                </div>

                <div className="text-center p-2 rounded-xl bg-emerald-900/60 border border-emerald-500/50 text-[10px] text-emerald-300 font-bold">
                  ✓ 99.9% Telemetry Ingest SLA • End-to-End Encrypted Payload
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE FLEET QUOTE & ROI CALCULATOR */}
      <section id="quote" className="scroll-mt-28 bg-gradient-to-b from-[#EEF5FC] via-[#F8FAFC] to-white py-20 md:py-28 border-b border-blue-100/60">
        <div id="pricing" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteCalculator />
        </div>
      </section>

      {/* 9. COMPREHENSIVE FAQ ACCORDION */}
      <section id="faq" className="scroll-mt-28 bg-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#005CCC] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Shield className="w-4 h-4" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#012462] font-['Space_Grotesk']">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Everything you need to know about GPS tracking hardware, mobile apps, installation, and platform billing.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = expandedFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition-colors shadow-sm"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                    className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#012462] hover:text-[#005CCC] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className={`text-[#005CCC] text-lg transition-transform ${isOpen ? 'rotate-45 text-rose-600' : ''}`}>
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="text-xs font-bold text-[#005CCC] hover:text-[#008CFF] inline-flex items-center gap-1"
            >
              <span>View full knowledgebase & FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 10. FINAL CONVERSION CTA BANNER */}
      <section id="contact" className="scroll-mt-28 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 md:p-14 rounded-3xl gradient-bg-brand-h text-white text-center space-y-6 shadow-2xl shadow-blue-900/20 relative overflow-hidden">
          
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-white text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>Transform Your Fleet Operations Today</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Space_Grotesk'] leading-tight">
              Ready to take full control of your vehicles?
            </h2>
            
            <p className="text-blue-100 text-xs sm:text-base leading-relaxed">
              Get started with VolterTrack in less than 24 hours. Hardware installation available nationwide across Nigeria with 24/7 dedicated support.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/quote"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-blue-50 text-[#012462] font-bold text-xs shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Calculate Your Fleet Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/demo"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Schedule a 1-on-1 Demo</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
