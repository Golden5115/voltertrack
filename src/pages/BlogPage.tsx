import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Search, 
  ArrowRight, 
  Sparkles,
  Calendar,
  Clock,
  User
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { BLOG_POSTS } from '../data/resourcesData';

export const BlogPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [query, setQuery] = useState<string>('');

  const categories = ['All', 'Fleet Management', 'Vehicle Security', 'Telematics & IoT', 'Operations'];

  const filteredPosts = BLOG_POSTS.filter(p => {
    const matchCat = selectedCat === 'All' || p.category === selectedCat;
    const matchSearch = p.title.toLowerCase().includes(query.toLowerCase()) ||
                        p.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Fleet Telematics Blog & Intelligence | VolterTrack"
        description="Expert articles and best practices on fleet fuel savings, driver safety, GPS tracking technology, and vehicle security in Nigeria."
      />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <FileText className="w-3.5 h-3.5" />
          <span>VolterTrack Editorial</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          Fleet Intelligence Blog
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Actionable advice, regulatory updates, and telematics innovations from our engineering and field operations teams.
        </p>
      </section>

      {/* Search & Category Filter */}
      <section className="space-y-4 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles (e.g. fuel theft, immobilizer, driver safety)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 text-base sm:text-xs font-medium focus:border-[#005CCC] focus:outline-none shadow-sm"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 no-scrollbar snap-x">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`snap-start px-3.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                  selectedCat === cat
                    ? 'bg-[#005CCC] text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-[#005CCC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredPosts.map(post => (
          <Link
            key={post.id}
            to={`/resources/blog/${post.slug}`}
            className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md hover:border-[#005CCC] hover:shadow-xl transition-all group block flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono font-bold">
                <span className="text-[#005CCC] px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                  {post.category}
                </span>
                <span className="text-slate-500">{post.readTime}</span>
              </div>

              <h3 className="text-lg font-bold text-[#012462] group-hover:text-[#005CCC] transition-colors leading-snug">
                {post.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>{post.publishDate}</span>
              <span className="text-[#005CCC] font-bold">Read Article →</span>
            </div>
          </Link>
        ))}
      </section>

    </div>
  );
};
