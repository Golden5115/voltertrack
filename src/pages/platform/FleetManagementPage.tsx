import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Wrench, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  BarChart3
} from 'lucide-react';
import { SEO } from '../../components/common/SEO';

export const FleetManagementPage: React.FC = () => {
  return (
    <div className="space-y-20 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Fleet Operations & Driver Safety | VolterTrack"
        description="Driver behavior scoring, preventive maintenance schedules, vehicle document expiration tracking, and multi-depot fleet management."
      />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <Users className="w-3.5 h-3.5" />
          <span>Operations Intelligence</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          Fleet Operations & Driver Safety
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Maintain vehicle roadworthiness, lower maintenance costs, and coach drivers into safe, fuel-efficient habits with automated telematics telemetry.
        </p>
      </section>

      {/* 3 Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#012462]">Driver Safety Scorecards</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Automatically rank drivers based on harsh braking, sharp cornering, overspeeding, and excessive idling. Reduce accident liability and fuel waste.
          </p>
        </div>

        <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold">
            <Wrench className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#012462]">Odometer-Driven Service Reminders</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Never miss an engine oil change or brake inspection. Automated notifications trigger when vehicles hit mileage thresholds or operational hours.
          </p>
        </div>

        <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center font-bold">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#012462]">Vehicle Document Expirations</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Track Vehicle License, Roadworthiness, Comprehensive Insurance, and Hackney permits with 30-day early warning alerts.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="p-8 md:p-12 rounded-3xl gradient-bg-brand text-center text-white space-y-4 shadow-xl">
        <h3 className="text-2xl font-bold font-['Space_Grotesk']">
          Upgrade your fleet operations management today
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
