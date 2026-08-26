import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Search, 
  ArrowRight, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { FAQ_ITEMS } from '../data/resourcesData';

export const FAQPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const categories = ['All', 'Hardware & Installation', 'Software & Tracking', 'Security & Immobilizer', 'Billing & Subscriptions'];

  const filteredFaqs = FAQ_ITEMS.filter(f => {
    const matchCat = selectedCat === 'All' || f.category === selectedCat;
    const matchSearch = f.question.toLowerCase().includes(search.toLowerCase()) ||
                        f.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <SEO 
        title="Frequently Asked Questions (FAQ) | VolterTrack"
        description="Clear answers regarding GPS hardware warranty, tracker battery lifespan, multi-branch fleet accounts, remote engine cutoff, and monthly subscriptions."
      />

      {/* Header */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Everything You Need to Know</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Clear, direct answers regarding hardware installation, tracking capabilities, engine immobilizers, and pricing.
        </p>

        {/* Search */}
        <div className="pt-2 max-w-lg mx-auto relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. warranty, installation, SIM card)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 text-xs font-medium focus:border-[#005CCC] focus:outline-none shadow-sm"
          />
        </div>
      </section>

      {/* Category Filter */}
      <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCat === cat
                ? 'bg-[#005CCC] text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-[#005CCC]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQs List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#012462] hover:text-[#005CCC] transition-colors"
              >
                <span>{faq.question}</span>
                <span className={`text-[#005CCC] text-lg transition-transform ${isOpen ? 'rotate-45 text-rose-600' : ''}`}>
                  +
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions */}
      <section className="p-8 rounded-3xl bg-blue-50 border border-blue-200 text-center space-y-3">
        <h3 className="text-lg font-bold text-[#012462]">Still have questions?</h3>
        <p className="text-xs text-slate-600 max-w-sm mx-auto">
          Our team is happy to answer technical questions regarding your fleet specifications.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-xl gradient-bg-brand-h text-white text-xs font-bold shadow-md"
          >
            Contact Support Desk
          </Link>
          <Link
            to="/demo"
            className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-50"
          >
            Schedule Live Demo
          </Link>
        </div>
      </section>

    </div>
  );
};
