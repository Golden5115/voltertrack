import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Radio, 
  ShieldCheck, 
  Cpu, 
  Users, 
  ExternalLink, 
  ArrowRight, 
  Sparkles,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-20 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="About VolterTrack | Fleet Intelligence by Volternet Technologies"
        description="Learn about VolterTrack, our mission, and our parent technology engineering company, Volternet Technologies."
      />

      {/* Hero */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <Building2 className="w-3.5 h-3.5" />
          <span>Our Vision & Provenance</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk'] leading-tight">
          Pioneering vehicle intelligence for modern enterprises.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          VolterTrack was founded with a singular purpose: to give individuals and commercial organizations absolute visibility, security, and control over every journey.
        </p>
      </section>

      {/* Corporate Heritage: Volternet Technologies relationship (PRD Section 36 & 37) */}
      <section className="p-8 md:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-bold text-[#005CCC] uppercase tracking-wider">
            Engineering Provenance
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#012462] font-['Space_Grotesk']">
            A Technology Product of Volternet Technologies
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            VolterTrack is built and operated by <strong className="text-[#012462]">Volternet Technologies</strong>—a leading software engineering, cloud architecture, and IoT systems company. While Volternet Technologies delivers bespoke enterprise digital systems, VolterTrack is its dedicated, specialized telematics SaaS platform.
          </p>
        </div>

        {/* Visual Architecture Diagram (PRD Section 36) */}
        <div className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs text-center space-y-4 max-w-2xl mx-auto shadow-inner">
          <div className="p-3 rounded-xl bg-[#012462] text-white font-bold inline-block shadow-md">
            🏢 VOLTERNET TECHNOLOGIES (Parent Engineering Company)
          </div>
          <div className="text-[#005CCC] font-bold text-lg">↓</div>
          <div className="p-3.5 rounded-xl gradient-bg-brand-h text-white font-bold shadow-md">
            ⚡ VOLTERTRACK (Fleet Telematics & Vehicle SaaS Platform)
          </div>
          <div className="text-[#005CCC] font-bold text-lg">┌───────────────┼───────────────┐</div>
          <div className="grid grid-cols-3 gap-2 text-[11px]">
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold shadow-sm">
              Web Dashboard
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold shadow-sm">
              iOS & Android Apps
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold shadow-sm">
              REST APIs & Webhooks
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="https://volternet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#005CCC] hover:text-[#008CFF] flex items-center gap-1.5"
          >
            Learn more about Volternet Technologies <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* Core Values / Mission */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold">
            <Radio className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#012462]">Sub-Second Precision</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            We don't settle for delayed or inaccurate pings. Our hardware and cloud brokers process telemetry with sub-second latency across 4G and 2G bands.
          </p>
        </div>

        <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#012462]">Uncompromising Security</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Your location data is private and encrypted. From covert hardware installation to strict NDPR data protection, we guard your fleet assets.
          </p>
        </div>

        <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center font-bold">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#012462]">Continuous Innovation</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Backed by Volternet Technologies R&D lab, we continually expand support for ultrasonic fuel sensors, CAN-bus analytics, and AI predictive maintenance.
          </p>
        </div>
      </section>

      {/* Leadership & CTA */}
      <section className="p-8 md:p-12 rounded-3xl gradient-bg-brand text-center text-white space-y-4 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk']">
          Ready to partner with a trusted fleet technology provider?
        </h2>
        <div className="pt-2 flex justify-center gap-3">
          <Link
            to="/quote"
            className="px-6 py-3 rounded-xl bg-white hover:bg-blue-50 text-[#012462] font-bold text-xs shadow-lg transition-all"
          >
            Get Fleet Quote
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
          >
            Contact Our Executive Team
          </Link>
        </div>
      </section>

    </div>
  );
};
