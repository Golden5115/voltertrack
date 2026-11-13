import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Check, 
  ArrowRight, 
  Sparkles,
  AlertTriangle,
  Zap
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ALL_SOLUTIONS } from '../data/solutionsData';

export const SolutionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = ALL_SOLUTIONS.find(s => s.slug === slug);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title={`${solution.title} | VolterTrack Solutions`}
        description={solution.heroSubheadline}
      />

      {/* Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
        <Link to="/solutions" className="hover:text-[#005CCC] flex items-center gap-1 py-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Solutions Directory
        </Link>
        <span>/</span>
        <span className="text-[#005CCC] font-bold">{solution.title}</span>
      </div>

      {/* Hero */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Operational Solution</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk'] leading-tight">
          {solution.heroHeadline}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {solution.heroSubheadline}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <Link
            to="/quote"
            className="w-full sm:w-auto px-6 py-3 rounded-xl gradient-bg-brand-h hover:opacity-95 text-white font-bold text-xs shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
          >
            <span>Get Quote for {solution.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/demo"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-slate-200 text-[#012462] font-bold text-xs hover:border-[#005CCC] transition-colors text-center"
          >
            Request Live Demo
          </Link>
        </div>
      </section>

      {/* Side-by-Side: Pain Points vs VolterTrack Solution */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        {/* The Pain Points */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-rose-50/50 border border-rose-200 shadow-md space-y-4">
          <h3 className="text-lg font-bold text-rose-900 flex items-center gap-2 font-['Space_Grotesk']">
            <AlertTriangle className="w-5 h-5 text-rose-600" />
            Typical Fleet Vulnerabilities
          </h3>

          <div className="space-y-3">
            {solution.painPoints.map((pain, idx) => (
              <div key={idx} className="flex flex-col gap-0.5 text-xs text-rose-950 font-medium">
                <span className="font-bold text-rose-900">✕ {pain.problem}</span>
                <span className="text-[11px] text-rose-700 pl-3">Impact: {pain.impact}</span>
              </div>
            ))}
          </div>
        </div>

        {/* The VolterTrack Fix */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-blue-50/50 border border-blue-200 shadow-md space-y-4">
          <h3 className="text-lg font-bold text-[#012462] flex items-center gap-2 font-['Space_Grotesk']">
            <Zap className="w-5 h-5 text-[#005CCC]" />
            How VolterTrack Solves This
          </h3>

          <div className="space-y-3">
            {solution.volterTrackSolutions.map((fix, idx) => (
              <div key={idx} className="flex flex-col gap-0.5 text-xs text-slate-800 font-semibold">
                <span className="flex items-center gap-1.5 text-[#012462]">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                  {fix.feature}
                </span>
                <span className="text-[11px] text-slate-500 pl-5">{fix.outcome}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl gradient-bg-brand text-center text-white space-y-4 shadow-xl">
        <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk']">
          Ready to eliminate these risks in your fleet?
        </h3>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/quote"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-blue-50 text-[#012462] font-bold text-xs shadow-lg transition-all text-center"
          >
            Get Custom Quote
          </Link>
          <Link
            to="/demo"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all text-center"
          >
            Schedule 1-on-1 Demo
          </Link>
        </div>
      </section>

    </div>
  );
};
