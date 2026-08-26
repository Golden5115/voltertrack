import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Radio, 
  ArrowLeft, 
  Check, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ALL_FEATURES } from '../data/featuresData';
import { LiveMapSimulator } from '../components/interactive/LiveMapSimulator';
import { GeofenceVisualizer } from '../components/interactive/GeofenceVisualizer';

export const FeatureDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const feature = ALL_FEATURES.find(f => f.slug === slug);

  if (!feature) {
    return <Navigate to="/features" replace />;
  }

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title={`${feature.title} | VolterTrack Features`}
        description={feature.shortDescription}
      />

      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link to="/features" className="hover:text-[#005CCC] flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Features Directory
        </Link>
        <span>/</span>
        <span className="text-[#005CCC] font-bold">{feature.title}</span>
      </div>

      {/* Hero */}
      <section className="space-y-4 max-w-3xl">
        {feature.badge && (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
            {feature.badge}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk'] leading-tight">
          {feature.title}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {feature.fullDescription}
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <Link
            to="/quote"
            className="px-6 py-3 rounded-xl gradient-bg-brand-h hover:opacity-95 text-white font-bold text-xs shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2"
          >
            <span>Get Quote for {feature.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/demo"
            className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-[#012462] font-bold text-xs hover:border-[#005CCC] transition-colors"
          >
            Request Live Demo
          </Link>
        </div>
      </section>

      {/* Interactive Simulator (Contextual) */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-[#012462]">Interactive Feature Simulation</h2>
        {feature.id === 'geofencing' ? <GeofenceVisualizer /> : <LiveMapSimulator />}
      </section>

      {/* Capabilities & Business Benefits Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Key Capabilities */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4">
          <h3 className="text-lg font-bold text-[#012462] flex items-center gap-2 font-['Space_Grotesk']">
            <Zap className="w-4 h-4 text-[#005CCC]" />
            Core Technical Capabilities
          </h3>

          <div className="space-y-2.5">
            {feature.capabilities.map((cap, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Business Benefits */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4">
          <h3 className="text-lg font-bold text-[#012462] flex items-center gap-2 font-['Space_Grotesk']">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Operational & Commercial Benefits
          </h3>

          <div className="space-y-2.5">
            {feature.benefits.map((ben, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                <Check className="w-4 h-4 text-[#005CCC] shrink-0 stroke-[3] mt-0.5" />
                <span>{ben}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Conversion Banner */}
      <section className="p-8 md:p-12 rounded-3xl gradient-bg-brand text-center text-white space-y-4 shadow-xl">
        <h3 className="text-2xl font-bold font-['Space_Grotesk']">
          Ready to activate {feature.title} for your vehicles?
        </h3>
        <p className="text-xs sm:text-sm text-blue-100 max-w-lg mx-auto">
          Hardware installation and platform setup takes less than 48 hours anywhere in Nigeria.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <Link
            to="/quote"
            className="px-6 py-3 rounded-xl bg-white hover:bg-blue-50 text-[#012462] font-bold text-xs shadow-lg transition-all"
          >
            Get Custom Quote
          </Link>
          <Link
            to="/demo"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
          >
            Schedule 1-on-1 Demo
          </Link>
        </div>
      </section>

    </div>
  );
};
