import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  HelpCircle, 
  FileText, 
  Headphones, 
  ArrowRight, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { BLOG_POSTS } from '../data/resourcesData';

export const ResourcesPage: React.FC = () => {
  return (
    <div className="space-y-20 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Knowledge, Guides & Support Hub | VolterTrack"
        description="Explore telematics whitepapers, installation tutorials, fleet management guides, blog articles, and help topics."
      />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Knowledge & Resource Center</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          Insights, guides, and tools to master your fleet.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Whether you want to optimize fuel spend, understand GPS hardware wiring, or train dispatchers, our resource library is here to assist.
        </p>
      </section>

      {/* Resource Category Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <Link
          to="/resources/blog"
          className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md hover:border-[#005CCC] hover:shadow-xl transition-all group space-y-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#012462] group-hover:text-[#005CCC] transition-colors">
              Telematics Blog & Insights
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              In-depth articles on fleet fuel optimization, Nigerian haulage safety, vehicle security, and IoT innovation.
            </p>
          </div>
          <div className="pt-2 text-xs font-bold text-[#005CCC] flex items-center gap-1">
            <span>Read Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>

        <Link
          to="/help"
          className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md hover:border-[#005CCC] hover:shadow-xl transition-all group space-y-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#012462] group-hover:text-emerald-600 transition-colors">
              Help Center & Setup Guides
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Step-by-step documentation on mobile app onboarding, geofence creation, maintenance setup, and reports.
            </p>
          </div>
          <div className="pt-2 text-xs font-bold text-emerald-600 flex items-center gap-1">
            <span>Browse Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>

        <Link
          to="/support"
          className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md hover:border-[#005CCC] hover:shadow-xl transition-all group space-y-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
            <Headphones className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#012462] group-hover:text-indigo-600 transition-colors">
              Technical & Recovery Desks
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Direct access to our 24/7 vehicle recovery hotline, ticketing system, and dedicated account managers.
            </p>
          </div>
          <div className="pt-2 text-xs font-bold text-indigo-600 flex items-center gap-1">
            <span>Contact Support</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>

      </section>

      {/* Featured Articles Section */}
      <section className="space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-xs font-mono font-bold text-[#005CCC] uppercase tracking-wider">
              From the Editorial Desk
            </span>
            <h2 className="text-2xl font-bold text-[#012462] font-['Space_Grotesk'] mt-1">
              Latest Fleet Management Insights
            </h2>
          </div>
          <Link to="/resources/blog" className="text-xs font-bold text-[#005CCC] hover:underline">
            View all articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(0, 3).map(post => (
            <Link
              key={post.id}
              to={`/resources/blog/${post.slug}`}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md hover:border-[#005CCC] hover:shadow-xl transition-all group block space-y-3"
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 font-bold">
                <span className="text-[#005CCC] px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-base font-bold text-[#012462] group-hover:text-[#005CCC] transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-xs text-slate-600 line-clamp-3">
                {post.excerpt}
              </p>
              <p className="text-[10px] text-slate-400 font-mono pt-2 border-t border-slate-100">
                {post.publishDate} • By {post.author.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};
