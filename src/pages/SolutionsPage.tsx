import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  ChevronRight,
  AlertTriangle,
  Zap,
  Check,
  Building2,
  Users,
  Lock,
  Truck,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ALL_SOLUTIONS } from '../data/solutionsData';

export const SolutionsPage: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Fleet Management Solutions | VolterTrack"
        description="Targeted telematics solutions designed to eliminate route blindness, prevent vehicle theft, curb driver speeding, and automate maintenance."
      />

      {/* Header & Quick Jump Bar */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Targeted Solutions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#012462] font-['Space_Grotesk'] tracking-tight">
          Solutions tailored to your exact operational reality.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          From private car owners needing 24/7 security to commercial logistics fleets requiring corridor geofencing and automated reporting.
        </p>

        {/* Quick jump anchor bar */}
        <div className="pt-3 flex items-center justify-start md:justify-center flex-nowrap md:flex-wrap gap-2 md:gap-1.5 overflow-x-auto pb-2 no-scrollbar snap-x text-xs font-semibold">
          {ALL_SOLUTIONS.map((sol) => (
            <a
              key={sol.id}
              href={`#${sol.slug}`}
              className="snap-start px-3.5 py-2 md:px-3 md:py-1.5 rounded-xl bg-white border border-slate-200 hover:border-[#005CCC] text-slate-600 hover:text-[#005CCC] hover:bg-blue-50 shadow-sm transition-all text-[11px] whitespace-nowrap shrink-0"
            >
              {sol.title}
            </a>
          ))}
        </div>
      </section>

      {/* Solutions Detailed Anchor Sections */}
      <section className="space-y-10 sm:space-y-16">
        {ALL_SOLUTIONS.map((sol) => (
          <div
            key={sol.id}
            id={sol.slug}
            className="scroll-mt-28 p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-blue-950/5 hover:border-[#008CFF] transition-all duration-300 space-y-6 sm:space-y-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold shadow-sm shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold font-mono text-[#005CCC] uppercase tracking-wider block">
                    Operational Solution
                  </span>
                  <h2 className="text-xl sm:text-3xl font-bold text-[#012462] font-['Space_Grotesk']">
                    {sol.title}
                  </h2>
                </div>
              </div>
              
              <Link
                to="/quote"
                className="w-full md:w-auto px-5 py-3 sm:py-2.5 rounded-xl gradient-bg-brand-h text-white font-bold text-xs shadow-md shadow-blue-600/20 hover:opacity-95 transition-all inline-flex items-center justify-center gap-1.5"
              >
                <span>Get Quote for {sol.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
              {sol.heroSubheadline}
            </p>

            {/* Pain Points vs VolterTrack Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              
              {/* Pain Points */}
              <div className="p-4 sm:p-6 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-3">
                <h3 className="text-sm font-bold text-rose-950 flex items-center gap-2 font-['Space_Grotesk']">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  Fleet Vulnerabilities Solved
                </h3>
                <div className="space-y-2">
                  {sol.painPoints.map((pain, i) => (
                    <div key={i} className="text-xs text-rose-900 flex flex-col gap-0.5">
                      <span className="font-bold">✕ {pain.problem}</span>
                      <span className="text-[11px] text-rose-700 pl-3">Impact: {pain.impact}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* VolterTrack Solutions */}
              <div className="p-4 sm:p-6 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-3">
                <h3 className="text-sm font-bold text-[#012462] flex items-center gap-2 font-['Space_Grotesk']">
                  <Zap className="w-4 h-4 text-[#005CCC]" />
                  The VolterTrack Fix
                </h3>
                <div className="space-y-2">
                  {sol.volterTrackSolutions.map((fix, i) => (
                    <div key={i} className="text-xs text-slate-800 flex flex-col gap-0.5">
                      <span className="font-bold text-[#012462] flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                        {fix.feature}
                      </span>
                      <span className="text-[11px] text-slate-500 pl-5">{fix.outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="p-6 sm:p-8 md:p-14 rounded-2xl sm:rounded-3xl gradient-bg-brand text-center text-white space-y-4 shadow-2xl">
        <h3 className="text-xl sm:text-3xl font-bold font-['Space_Grotesk']">
          Need a customized solution for your enterprise?
        </h3>
        <p className="text-xs sm:text-sm text-blue-100 max-w-lg mx-auto leading-relaxed">
          Our telematics architects will design a bespoke hardware and sensor setup for your exact requirements.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/quote"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-blue-50 text-[#012462] font-bold text-xs shadow-lg transition-all text-center"
          >
            Get Custom Quote
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all text-center"
          >
            Contact Fleet Solutions Team
          </Link>
        </div>
      </section>

    </div>
  );
};
