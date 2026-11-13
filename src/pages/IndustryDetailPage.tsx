import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Building2, 
  ArrowLeft, 
  Check, 
  ArrowRight, 
  Sparkles,
  Truck,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ALL_INDUSTRIES } from '../data/industriesData';

export const IndustryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = ALL_INDUSTRIES.find(i => i.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title={`${industry.title} Fleet Tracking | VolterTrack`}
        description={industry.heroDescription}
      />

      {/* Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
        <Link to="/industries" className="hover:text-[#005CCC] flex items-center gap-1 py-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Industries Directory
        </Link>
        <span>/</span>
        <span className="text-[#005CCC] font-bold">{industry.title}</span>
      </div>

      {/* Hero */}
      <section className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <Building2 className="w-3.5 h-3.5" />
          <span>Industry Sector Solution</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk'] leading-tight">
          {industry.heroHeadline}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {industry.heroDescription}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <Link
            to="/quote"
            className="w-full sm:w-auto px-6 py-3 rounded-xl gradient-bg-brand-h hover:opacity-95 text-white font-bold text-xs shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
          >
            <span>Get Quote for {industry.title}</span>
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

      {/* Side-by-Side: Sector Problems vs VolterTrack Solution */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        {/* Industry Challenges */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-rose-50/50 border border-rose-200 shadow-md space-y-4">
          <h3 className="text-lg font-bold text-rose-900 font-['Space_Grotesk']">
            Common Sector Vulnerabilities
          </h3>

          <div className="space-y-3">
            {industry.industryProblems.map((prob, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-rose-950 font-medium">
                <span className="text-rose-600 font-bold shrink-0">✕</span>
                <span>{prob}</span>
              </div>
            ))}
          </div>
        </div>

        {/* VolterTrack Solution */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-blue-50/50 border border-blue-200 shadow-md space-y-4">
          <h3 className="text-lg font-bold text-[#012462] font-['Space_Grotesk']">
            VolterTrack Solution Architecture
          </h3>

          <div className="space-y-3">
            {industry.volterTrackSolution.map((sol, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800 font-semibold">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span>{sol}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 5-Step Operational Workflow Architecture */}
      <section className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
        <div>
          <span className="text-xs font-mono font-bold text-[#005CCC] uppercase tracking-wider">
            Operational Blueprint
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#012462] font-['Space_Grotesk'] mt-1">
            5-Step {industry.title} Workflow
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { num: 1, text: industry.workflow.step1 },
            { num: 2, text: industry.workflow.step2 },
            { num: 3, text: industry.workflow.step3 },
            { num: 4, text: industry.workflow.step4 },
            { num: 5, text: industry.workflow.step5 },
          ].filter(s => !!s.text).map(step => (
            <div key={step.num} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-7 h-7 rounded-xl bg-[#005CCC] text-white flex items-center justify-center font-bold text-xs font-mono shadow-sm">
                0{step.num}
              </span>
              <p className="text-xs font-semibold text-slate-800 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Case Study Highlight Banner */}
        <div className="mt-6 p-6 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#005CCC]">
              Verified Client Outcome • {industry.caseStudyHighlight.clientType}
            </span>
            <p className="text-base font-bold text-[#012462]">
              {industry.caseStudyHighlight.result}
            </p>
            <p className="text-xs text-slate-600 italic">
              "{industry.caseStudyHighlight.quote}"
            </p>
          </div>
          <Link
            to="/quote"
            className="px-5 py-2.5 rounded-xl gradient-bg-brand-h text-white font-bold text-xs shrink-0 self-start md:self-auto shadow-md"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl gradient-bg-brand text-center text-white space-y-4 shadow-xl">
        <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk']">
          Ready to implement this workflow for your {industry.title.toLowerCase()} fleet?
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
