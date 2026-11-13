import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { BLOG_POSTS } from '../data/resourcesData';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/resources/blog" replace />;
  }

  return (
    <div className="space-y-8 sm:space-y-12 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <SEO 
        title={`${post.title} | VolterTrack Blog`}
        description={post.excerpt}
      />

      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <Link to="/resources/blog" className="hover:text-[#005CCC] flex items-center gap-1 py-1 shrink-0">
          <ArrowLeft className="w-3.5 h-3.5" /> Blog
        </Link>
        <span>/</span>
        <span className="text-[#005CCC] font-bold truncate">{post.title}</span>
      </div>

      {/* Article Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-bold text-[#005CCC] px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200">
            {post.category}
          </span>
          <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk'] leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 pb-4 border-y border-slate-200 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] font-bold flex items-center justify-center font-mono text-xs">
              VT
            </div>
            <div>
              <p className="font-bold text-[#012462]">{post.author.name}</p>
              <p className="text-[11px] text-slate-500">{post.author.role}</p>
            </div>
          </div>

          <span className="font-mono text-slate-500">{post.publishDate}</span>
        </div>
      </header>

      {/* Article Content */}
      <article className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-6">
        <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 my-6">
          <p className="text-xs font-bold text-[#012462] uppercase tracking-wider mb-1">
            Executive Summary
          </p>
          <p className="text-xs text-slate-700 leading-relaxed">
            In modern fleet management, reactive guesswork leads directly to severe fuel inflation and preventable asset depreciation. Modern telematics offers continuous visibility and measurable operational control.
          </p>
        </div>

        <div className="whitespace-pre-line leading-relaxed text-slate-700 space-y-4 text-xs sm:text-sm">
          {post.content}
        </div>
      </article>

      {/* Article CTA */}
      <section className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl gradient-bg-brand text-center text-white space-y-4 shadow-xl">
        <h3 className="text-xl font-bold font-['Space_Grotesk']">
          Ready to implement modern telematics on your fleet?
        </h3>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/quote"
            className="w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-xl bg-white hover:bg-blue-50 text-[#012462] font-bold text-xs shadow-lg transition-all text-center"
          >
            Get Fleet Quote
          </Link>
          <Link
            to="/demo"
            className="w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all text-center"
          >
            Schedule Live Demo
          </Link>
        </div>
      </section>

    </div>
  );
};
