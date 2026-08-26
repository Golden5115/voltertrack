import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ArrowRight, 
  Sparkles,
  ChevronRight,
  Truck,
  Check,
  Shield,
  Activity,
  Layers,
  MapPin
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ALL_INDUSTRIES } from '../data/industriesData';

export const IndustriesPage: React.FC = () => {
  return (
    <div className="space-y-20 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Industry Solutions | VolterTrack Fleet Management"
        description="Tailored vehicle intelligence workflows for logistics, interstate haulage, delivery dispatch, construction, corporate pools, and government fleets."
      />

      {/* Header & Quick Jump Bar */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <Building2 className="w-3.5 h-3.5" />
          <span>Industry Blueprints</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#012462] font-['Space_Grotesk'] tracking-tight">
          Engineered for your sector's exact operational reality.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Every industry has unique operating conditions, risk factors, and reporting requirements. VolterTrack delivers purpose-built telematics workflows for your market.
        </p>

        {/* Quick jump anchor bar */}
        <div className="pt-3 flex flex-wrap items-center justify-center gap-1.5 text-xs font-semibold">
          {ALL_INDUSTRIES.map((ind) => (
            <a
              key={ind.id}
              href={`#${ind.slug}`}
              className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-[#005CCC] text-slate-600 hover:text-[#005CCC] hover:bg-blue-50 shadow-sm transition-all text-[11px]"
            >
              {ind.title}
            </a>
          ))}
        </div>
      </section>

      {/* Industries Detailed Anchor Sections */}
      <section className="space-y-16">
        {ALL_INDUSTRIES.map((ind) => (
          <div
            key={ind.id}
            id={ind.slug}
            className="scroll-mt-28 p-8 md:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-blue-950/5 hover:border-[#008CFF] transition-all duration-300 space-y-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold shadow-sm">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold font-mono text-[#005CCC] uppercase tracking-wider block">
                    Sector Blueprint
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#012462] font-['Space_Grotesk']">
                    {ind.title}
                  </h2>
                </div>
              </div>

              <Link
                to="/quote"
                className="px-5 py-2.5 rounded-xl gradient-bg-brand-h text-white font-bold text-xs shadow-md shadow-blue-600/20 hover:opacity-95 transition-all inline-flex items-center gap-1.5 self-start md:self-auto"
              >
                <span>Get Quote for {ind.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
              {ind.heroHeadline}
            </p>

            {/* Typical Fleet Size & Challenges Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#012462]">
                  Target Fleet Profile
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Typical Scale:</strong> {ind.typicalFleetSize}
                </p>
                <div className="pt-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-[#005CCC] border border-blue-200">
                    Industry Tailored
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-rose-950">
                  Critical Sector Challenges
                </p>
                <div className="space-y-1 text-xs text-rose-900">
                  {ind.keyChallenges.map((ch, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-950">
                  VolterTrack Outcomes
                </p>
                <div className="space-y-1 text-xs text-emerald-900">
                  {ind.recommendedFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="p-8 md:p-14 rounded-3xl gradient-bg-brand text-center text-white space-y-4 shadow-2xl">
        <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk']">
          Don't see your specific sector listed?
        </h3>
        <p className="text-xs sm:text-sm text-blue-100 max-w-lg mx-auto leading-relaxed">
          VolterTrack supports custom sensor configurations, protocols, and APIs for any asset tracking scenario.
        </p>
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
            Talk to an Engineer
          </Link>
        </div>
      </section>

    </div>
  );
};
