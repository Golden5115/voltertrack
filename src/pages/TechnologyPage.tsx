import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Radio, 
  ShieldCheck, 
  Server, 
  Lock, 
  Wifi, 
  CheckCircle2, 
  ArrowRight,
  Database
} from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const TechnologyPage: React.FC = () => {
  return (
    <div className="space-y-20 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Technology & Cloud Architecture | VolterTrack"
        description="High-availability telematics cloud infrastructure, GPS hardware protocols, sub-second socket streaming, and AES-256 data encryption."
      />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <Cpu className="w-3.5 h-3.5" />
          <span>Under the Hood</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          Enterprise Cloud Telematics Architecture
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Engineered for mission-critical reliability. Built on distributed cloud clusters with multi-constellation satellite receivers, Traccar protocol bridges, and sub-second socket streaming.
        </p>
      </section>

      {/* Architecture Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold">
            <Radio className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#012462]">Multi-GNSS Reception</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Connects to GPS (USA), GLONASS (Russia), Galileo (EU), and BeiDou (China) for fast sub-meter fixes in urban canyons.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold">
            <Server className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#012462]">99.9% Uptime Cluster</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Auto-scaling ingestion nodes process millions of telemetry coordinates daily with geo-redundant database backups.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center font-bold">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#012462]">AES-256 Encryption</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            TLS 1.3 in-transit encryption and AES-256 at-rest encryption keep vehicle location coordinates strictly confidential.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center font-bold">
            <Database className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#012462]">Traccar Protocol Core</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Universal compatibility with over 100+ hardware tracking protocols (Concox, Teltonika, Queclink, Sinotrack, Coban).
          </p>
        </div>
      </section>

      {/* Developer API Callout */}
      <section className="p-8 md:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl font-bold text-[#012462] font-['Space_Grotesk']">
              Developer APIs & Webhooks
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Integrate VolterTrack location streaming directly into your internal logistics portals or enterprise ERPs using standard REST APIs and webhook callbacks.
            </p>
          </div>
          <Link
            to="/features/integrations"
            className="px-6 py-3 rounded-xl gradient-bg-brand-h text-white font-bold text-xs shrink-0 shadow-md"
          >
            Explore API Documentation
          </Link>
        </div>
      </section>

    </div>
  );
};
