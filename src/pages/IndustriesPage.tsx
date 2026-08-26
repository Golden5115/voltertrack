import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ArrowRight, 
  Sparkles,
  ChevronRight,
  Truck
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ALL_INDUSTRIES } from '../data/industriesData';

export const IndustriesPage: React.FC = () => {
  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Industry Solutions | VolterTrack Fleet Management"
        description="Tailored vehicle intelligence workflows for logistics, interstate haulage, delivery dispatch, construction, corporate pools, and government fleets."
      />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <Building2 className="w-3.5 h-3.5" />
          <span>Industry Blueprints</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          Engineered for your sector's exact operational reality.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Every industry has unique operating conditions, risk factors, and reporting requirements. VolterTrack delivers purpose-built telematics workflows for your market.
        </p>
      </section>

      {/* Industry Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ALL_INDUSTRIES.map((ind) => (
          <Link
            key={ind.id}
            to={`/industries/${ind.slug}`}
            className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md shadow-blue-950/5 hover:border-[#005CCC] hover:shadow-xl transition-all group block space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <Truck className="w-5 h-5" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#012462] group-hover:text-[#005CCC] transition-colors">
                {ind.title}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                {ind.heroHeadline}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#005CCC]">
              <span>View Workflow</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </section>

      {/* CTA */}
      <section className="p-8 md:p-12 rounded-3xl gradient-bg-brand text-center text-white space-y-4 shadow-xl">
        <h3 className="text-2xl font-bold font-['Space_Grotesk']">
          Don't see your specific industry listed?
        </h3>
        <p className="text-xs sm:text-sm text-blue-100 max-w-lg mx-auto">
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
