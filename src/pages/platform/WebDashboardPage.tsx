import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Radio, 
  MapPin, 
  Layers, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { LiveMapSimulator } from '../../components/interactive/LiveMapSimulator';

export const WebDashboardPage: React.FC = () => {
  return (
    <div className="space-y-20 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Web Dashboard & Fleet Console | VolterTrack"
        description="Desktop-optimized fleet command center: live map tracking, telemetry monitors, filterable status boards, and automated compliance reports."
      />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <LayoutDashboard className="w-3.5 h-3.5" />
          <span>Desktop Fleet Mission Control</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          Web Control Dashboard
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Engineered for dispatch teams and fleet managers who require fast, high-density vehicle visibility and operational control across multiple screens.
        </p>
      </section>

      {/* Live Interactive Map Console */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#012462]">Live Console Interactive Simulation</h2>
          <a
            href="https://app.voltertrack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#005CCC] hover:text-[#008CFF] flex items-center gap-1"
          >
            Launch Production Console <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
        <LiveMapSimulator />
      </section>

      {/* Core Web Dashboard Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold">
            <Radio className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#012462]">Sub-Second Telemetry Ingest</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Real-time WebSocket streaming provides instant updates when vehicles start engines, accelerate, or cross designated perimeter geofences.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#012462]">Custom Map Layers & Traffic</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Switch effortlessly between dark, light vector, satellite imagery, and live Google Maps traffic overlays to guide drivers around congestion.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center font-bold">
            <BarChart3 className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#012462]">Automated PDF / Excel Exports</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Schedule automatic daily or weekly trip summaries, fuel utilization logs, and driver scorecard reports delivered straight to management email.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="p-8 md:p-12 rounded-3xl gradient-bg-brand text-center text-white space-y-4 shadow-xl">
        <h3 className="text-2xl font-bold font-['Space_Grotesk']">
          Ready to deploy the web dashboard for your operations team?
        </h3>
        <div className="pt-2 flex justify-center gap-3">
          <Link
            to="/quote"
            className="px-6 py-3 rounded-xl bg-white hover:bg-blue-50 text-[#012462] font-bold text-xs shadow-lg transition-all"
          >
            Get Fleet Quote
          </Link>
          <Link
            to="/demo"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
          >
            Schedule Live Demo
          </Link>
        </div>
      </section>

    </div>
  );
};
