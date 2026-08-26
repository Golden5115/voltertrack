import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Radio, 
  Layers, 
  Search, 
  ArrowRight, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ALL_FEATURES } from '../data/featuresData';

export const FeaturesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'tracking', label: 'Tracking & Telematics' },
    { id: 'management', label: 'Operations & Management' },
    { id: 'security', label: 'Security & Automation' },
  ];

  const filteredFeatures = ALL_FEATURES.filter(f => {
    const matchesCat = selectedCategory === 'all' || f.category === selectedCategory;
    const matchesSearch = f.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          f.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Features Directory | VolterTrack Fleet Intelligence Platform"
        description="Search and explore all 12 core VolterTrack capabilities: real-time GPS tracking, trip playback, geofencing, fuel monitoring, remote engine immobilizer, and APIs."
      />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <Layers className="w-3.5 h-3.5" />
          <span>Complete Feature Matrix</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          Every tool you need to track, manage, and protect your fleet.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Explore the industry-leading telematics tools powering thousands of commercial vehicles across logistics, transport, delivery, and corporate pool fleets.
        </p>
      </section>

      {/* Search & Category Filter Bar */}
      <section className="space-y-4 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search features (e.g. geofencing, fuel, immobilizer)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 text-xs font-medium focus:border-[#005CCC] focus:outline-none shadow-sm"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#005CCC] text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-[#005CCC]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFeatures.map((feature) => (
          <Link
            key={feature.id}
            to={`/features/${feature.slug}`}
            className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md shadow-blue-950/5 hover:border-[#005CCC] hover:shadow-xl transition-all group block"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#005CCC] group-hover:scale-110 transition-transform">
                <Radio className="w-5 h-5" />
              </div>
              {feature.badge && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-[#005CCC] border border-blue-200">
                  {feature.badge}
                </span>
              )}
            </div>

            <h3 className="text-lg font-bold text-[#012462] group-hover:text-[#005CCC] transition-colors">
              {feature.title}
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
              {feature.shortDescription}
            </p>

            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#005CCC]">
              <span>Explore deep dive</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </section>

      {/* Bottom Conversion */}
      <section className="p-8 md:p-12 rounded-3xl gradient-bg-brand text-center text-white space-y-4 shadow-xl">
        <h3 className="text-2xl font-bold font-['Space_Grotesk']">
          Ready to equip your vehicles with these capabilities?
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
