import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Search, 
  ChevronRight, 
  Check, 
  BookOpen, 
  ArrowRight 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { HELP_TOPICS } from '../data/resourcesData';

export const HelpCenterPage: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState(HELP_TOPICS[0]);

  const filteredTopics = HELP_TOPICS.filter(t => 
    t.title.toLowerCase().includes(search.toLowerCase()) ||
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Help Center & Setup Documentation | VolterTrack"
        description="Step-by-step documentation, user guides, mobile app setup, geofence configuration, and device troubleshooting."
      />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Knowledge & Setup Base</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          How can we help you today?
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Step-by-step tutorials to get the most out of your VolterTrack software and GPS hardware.
        </p>

        {/* Search */}
        <div className="pt-2 max-w-lg mx-auto relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search guides (e.g. mobile app, geofences, cutoff)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 text-base sm:text-xs font-medium focus:border-[#005CCC] focus:outline-none shadow-sm"
          />
        </div>
      </section>

      {/* Grid: Topics list on Left, Topic Reader on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Left Col: Topic Navigation */}
        <div className="lg:col-span-4 space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-[#012462] px-2 mb-2">
            Setup Guides ({filteredTopics.length})
          </p>
          <div className="space-y-1.5">
            {filteredTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic)}
                className={`w-full p-3.5 rounded-2xl text-left transition-all flex items-center justify-between gap-2 ${
                  selectedTopic.id === topic.id
                    ? 'bg-blue-50 border-2 border-[#005CCC] text-[#012462] shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div>
                  <span className="text-[9px] font-mono text-[#005CCC] font-bold uppercase tracking-wider block">
                    {topic.category}
                  </span>
                  <span className="text-xs font-bold mt-0.5 block">{topic.title}</span>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 ${selectedTopic.id === topic.id ? 'text-[#005CCC]' : 'text-slate-400'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Col: Topic Reader */}
        <div className="lg:col-span-8 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
          <div className="space-y-2 pb-4 border-b border-slate-200">
            <span className="text-xs font-mono font-bold text-[#005CCC] uppercase tracking-wider">
              {selectedTopic.category}
            </span>
            <h2 className="text-2xl font-bold text-[#012462] font-['Space_Grotesk']">
              {selectedTopic.title}
            </h2>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            <p className="text-xs font-bold text-[#012462] uppercase tracking-wider">
              Step-by-Step Instructions:
            </p>
            {selectedTopic.steps.map((step, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-[#005CCC] text-white flex items-center justify-center font-bold text-xs font-mono shrink-0">
                  {idx + 1}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed pt-0.5">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="text-slate-700">Still have questions regarding this setup?</span>
            <Link to="/support" className="text-[#005CCC] font-bold hover:underline shrink-0">
              Open Support Ticket →
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
};
