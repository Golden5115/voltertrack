import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Radio, 
  Layers, 
  Smartphone, 
  LayoutDashboard, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  BarChart3, 
  Activity, 
  Lock, 
  Cpu, 
  CheckCircle2, 
  Check,
  Sparkles,
  ExternalLink,
  Shield,
  Zap,
  Clock,
  Server
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { LiveMapSimulator } from '../components/interactive/LiveMapSimulator';
import { MobileAppShowcase } from '../components/interactive/MobileAppShowcase';

export const PlatformPage: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-32 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="VolterTrack Platform | Comprehensive Fleet Intelligence Suite"
        description="Explore the unified VolterTrack telematics architecture: Web Dashboard, Native Mobile Apps, Fleet Operations, and Admin Control."
      />

      {/* Hero / Overview Section */}
      <section id="overview" className="scroll-mt-28 text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <Layers className="w-3.5 h-3.5" />
          <span>Unified Telematics Cloud & Hardware Suite</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#012462] font-['Space_Grotesk'] leading-tight">
          One intelligent platform. <br />
          <span className="gradient-text-blue">Complete operational control.</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          From a single vehicle to thousands of cross-country haulage trucks, VolterTrack unites live GPS tracking, vehicle health, driver safety, and automation into a single interface.
        </p>

        {/* Quick jump anchor bar */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
          {[
            { id: 'dashboard', label: 'Web Dashboard' },
            { id: 'mobile-app', label: 'Mobile App' },
            { id: 'fleet-management', label: 'Fleet Management' },
            { id: 'administration', label: 'Administration & RBAC' },
            { id: 'architecture', label: 'Telematics Infrastructure' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-[#005CCC] text-slate-600 hover:text-[#005CCC] hover:bg-blue-50 shadow-sm transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      {/* Platform Pillars Deep Dive Sections */}
      <section className="space-y-16">
        
        {/* Module 1: Web Dashboard */}
        <div id="dashboard" className="scroll-mt-28 p-8 md:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-blue-950/5 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold">
                <LayoutDashboard className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-[#005CCC] uppercase tracking-wider">
                Module 01 • Operations Console
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#012462] font-['Space_Grotesk']">
                Web Control Dashboard
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A desktop-optimized command center for dispatchers, fleet managers, and security operations. Real-time telemetry, filterable status boards, map layers, and multi-vehicle monitoring.
              </p>

              <div className="space-y-2 text-xs text-slate-700">
                {['Live streaming telemetry with 1-second refresh rates', 'Multi-tab fleet grouping by branch or vehicle class', 'Exportable PDF/Excel compliance and mileage reports', 'Custom sensor thresholds for fuel, temperature and battery'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <a
                  href="https://app.voltertrack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl gradient-bg-brand-h text-white font-bold text-xs shadow-md shadow-blue-600/20 hover:opacity-95 transition-all flex items-center gap-1.5"
                >
                  <span>Launch Web Console</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  to="/demo"
                  className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-[#012462] hover:border-[#005CCC] font-bold text-xs transition-colors"
                >
                  Request Live Demo
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <LiveMapSimulator />
            </div>
          </div>
        </div>

        {/* Module 2: Mobile App */}
        <div id="mobile-app" className="scroll-mt-28 p-8 md:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-blue-950/5 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <MobileAppShowcase />
            </div>

            <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-[#005CCC] uppercase tracking-wider">
                Module 02 • On-The-Go Access
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#012462] font-['Space_Grotesk']">
                Mobile Applications (iOS & Android)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Stay connected to your vehicles 24/7. Receive instant push notifications, view journey playback, check vehicle vitals, and issue remote engine cutoff commands in emergencies.
              </p>

              <div className="space-y-2 text-xs text-slate-700">
                {['Instant push notifications for ignition, speeding & geofencing', 'One-touch emergency engine immobilizer', 'Historical route scrubbers with speed graphs', 'Direct driver calling and trip logs sharing'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold flex items-center gap-2 shadow-sm">
                  <span> App Store</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold flex items-center gap-2 shadow-sm">
                  <span>▶ Google Play</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Module 3: Fleet Management */}
        <div id="fleet-management" className="scroll-mt-28 p-8 md:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-blue-950/5 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-[#005CCC] uppercase tracking-wider">
                Module 03 • Operations Intelligence
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#012462] font-['Space_Grotesk']">
                Fleet & Driver Management
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Manage drivers, track document expirations (licenses, insurance, roadworthiness), schedule maintenance based on actual odometer readings, and score driver safety.
              </p>

              <div className="space-y-2 text-xs text-slate-700">
                {['Driver safety scorecards based on harsh braking and speeding', 'Odometer-triggered maintenance reminders (Oil, Tires, Brakes)', 'Vehicle document expiry tracking with early warnings', 'Digital vehicle inspection reports & fuel consumption logs'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/quote"
                  className="px-5 py-2.5 rounded-xl gradient-bg-brand-h text-white font-bold text-xs shadow-md shadow-blue-600/20 hover:opacity-95 transition-all inline-flex items-center gap-1.5"
                >
                  <span>Configure Fleet Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 font-mono text-xs shadow-sm">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="font-bold text-[#012462]">Driver Performance Scoreboard</span>
                <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-bold">Fleet Avg: 92/100</span>
              </div>
              {[
                { name: 'Ibrahim Danjuma', score: 98, trips: 142, status: 'Exemplary' },
                { name: 'Emeka Okafor', score: 95, trips: 120, status: 'Safe' },
                { name: 'Tunde Adeleke', score: 88, trips: 96, status: 'Review' },
              ].map((dr, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
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
        <div id="administration" className="scroll-mt-28 p-8 md:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-blue-950/5 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-[#005CCC] uppercase tracking-wider">
                Module 04 • Enterprise Governance
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#012462] font-['Space_Grotesk']">
                Administration & Access Control
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Granular multi-tenant roles, branch segregation, immutable audit trails, and multi-factor authentication for enterprise-grade security.
              </p>

              <div className="space-y-2 text-xs text-slate-700">
                {['Custom roles: Super Admin, Branch Manager, Dispatcher, Viewer', 'Branch vehicle isolation (e.g. Lagos vs Abuja branch visibility)', 'Immutable system audit logs tracking all logins and command dispatches', 'Single Sign-On (SSO) and mandatory MFA support'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 font-mono text-xs shadow-sm">
              <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm">
                <p className="font-bold text-[#012462]">Audit Log: Remote Cutoff Executed</p>
                <p className="text-[10px] text-slate-500">Actor: admin@swiftfreight.com • IP: 102.89.44.12</p>
                <p className="text-[10px] text-emerald-600 font-bold">Status: Acknowledged by Hardware (IMEI 86429...)</p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm">
                <p className="font-bold text-[#012462]">Role Assignment: Lagos Dispatcher</p>
                <p className="text-[10px] text-slate-500">Permitted: View Lagos Fleet (64 vehicles), Create Geofences</p>
                <p className="text-[10px] text-slate-500">Restricted: Remote Cutoff Disabled</p>
              </div>
            </div>
          </div>
        </div>

        {/* Module 5: Telematics Infrastructure & Traccar Engine */}
        <div id="architecture" className="scroll-mt-28 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#012462] via-[#003B8C] to-[#005CCC] text-white shadow-2xl space-y-8 border border-blue-400/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-[#008CFF] flex items-center justify-center font-bold">
                <Server className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-[#008CFF] uppercase tracking-wider">
                Module 05 • Cloud Protocol Core
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">
                Telematics Infrastructure & Protocols
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                VolterTrack is built on high-throughput GPS ingestion engines with universal support for over 1,500+ GPS tracker models (Teltonika, Coban, Concox, Queclink, Suntech, and OBD-II plug-and-play).
              </p>

              <div className="space-y-2 text-xs text-blue-100">
                {['Supports 1,500+ GPS tracker communication protocols via TCP/UDP', 'Sub-second real-time telemetry processing with 99.98% uptime SLA', 'Enterprise REST APIs and Webhook callbacks for ERP and custom portals', 'End-to-end encrypted packet transmission with local offline storage'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 p-6 rounded-2xl bg-white/10 border border-white/20 space-y-3 font-mono text-xs shadow-xl">
              <div className="text-center p-2.5 rounded-xl bg-[#005CCC] text-white font-bold">
                ⚡ UNIVERSAL PROTOCOL INGESTION
              </div>
              <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
                <div className="p-2.5 rounded-lg bg-black/30 border border-white/10">Teltonika (FMB920/FMC130)</div>
                <div className="p-2.5 rounded-lg bg-black/30 border border-white/10">Concox / Jimi IoT (GT06/VL02)</div>
                <div className="p-2.5 rounded-lg bg-black/30 border border-white/10">Coban (TK103/TK303)</div>
                <div className="p-2.5 rounded-lg bg-black/30 border border-white/10">OBD-II Telematics & CAN-Bus</div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Conversion CTA */}
      <section className="p-8 md:p-12 rounded-3xl gradient-bg-brand text-center text-white space-y-4 shadow-2xl">
        <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk']">
          Ready to experience the VolterTrack platform?
        </h3>
        <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
          Schedule a live 15-minute walkthrough tailored to your fleet size and industry needs.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <Link
            to="/demo"
            className="px-6 py-3 rounded-xl bg-white hover:bg-blue-50 text-[#012462] font-bold text-xs shadow-lg transition-all"
          >
            Request Live Demo
          </Link>
          <Link
            to="/quote"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
          >
            Get Fleet Quote
          </Link>
        </div>
      </section>

    </div>
  );
};
