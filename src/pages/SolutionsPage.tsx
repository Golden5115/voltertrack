import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ALL_SOLUTIONS } from '../data/solutionsData';

export const SolutionsPage: React.FC = () => {
  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Fleet Management Solutions | VolterTrack"
        description="Targeted telematics solutions designed to solve fuel wastage, unauthorized vehicle use, safety liabilities, and logistics route delays."
      />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Business Problem Solving</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          Solutions tailored to your primary operational hurdles.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Explore how VolterTrack addresses specific challenges across vehicle tracking, anti-theft security, driver accountability, and fleet logistics.
        </p>
      </section>

      {/* Solutions Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ALL_SOLUTIONS.map((sol) => (
          <Link
            key={sol.id}
            to={`/solutions/${sol.slug}`}
            className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-md shadow-blue-950/5 hover:border-[#005CCC] hover:shadow-xl transition-all group block space-y-4"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#012462] group-hover:text-[#005CCC] transition-colors">
                {sol.title}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                {sol.heroSubheadline}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#005CCC]">
              <span>Explore Solution</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </section>

      {/* CTA */}
      <section className="p-8 md:p-12 rounded-3xl gradient-bg-brand text-center text-white space-y-4 shadow-xl">
        <h3 className="text-2xl font-bold font-['Space_Grotesk']">
          Need a customized solution for your enterprise?
        </h3>
        <p className="text-xs sm:text-sm text-blue-100 max-w-lg mx-auto">
          Our telematics architects will design a bespoke hardware and sensor setup for your exact requirements.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <Link
            to="/quote"
            className="px-6 py-3 rounded-xl bg-white hover:bg-blue-50 text-[#012462] font-bold text-xs shadow-lg transition-all"
          >
            Get Custom Quote
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
          >
            Contact Fleet Solutions Team
          </Link>
        </div>
      </section>

    </div>
  );
};
