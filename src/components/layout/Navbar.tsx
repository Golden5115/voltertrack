import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles,
  ExternalLink,
  Shield
} from 'lucide-react';
import { MAIN_NAVIGATION } from '../../data/navigationData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <>
      {/* Parent Company Top Banner */}
      <div className="bg-[#012462] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#005CCC] text-white">
              PARENT COMPANY
            </span>
            <span className="text-blue-100 text-xs">
              A Product of <strong className="text-white font-bold">Volternet Technologies</strong>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-blue-200 text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Platform Status: <strong className="text-emerald-300">All Systems Operational</strong>
            </span>
            <span className="text-blue-400">|</span>
            <a 
              href="https://volternet.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors flex items-center gap-1 font-semibold"
            >
              volternet.com <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Light Glassmorphic Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-md shadow-blue-950/5 py-2.5' 
          : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Official Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <img 
                src="/logo.png" 
                alt="VolterTrack Logo" 
                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform" 
              />
            </Link>

            {/* Desktop Navigation Links with Mega Dropdowns */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {MAIN_NAVIGATION.map((item) => {
                const hasSubsections = item.sections && item.sections.length > 0;
                const isOpen = activeDropdown === item.name;

                if (!hasSubsections) {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`px-3 py-2 text-sm font-semibold rounded-xl transition-colors ${
                        location.pathname === item.href
                          ? 'text-[#005CCC] bg-blue-50'
                          : 'text-slate-700 hover:text-[#005CCC] hover:bg-slate-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-xl transition-colors ${
                        location.pathname.startsWith(item.href) || isOpen
                          ? 'text-[#005CCC] bg-blue-50'
                          : 'text-slate-700 hover:text-[#005CCC] hover:bg-slate-50'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#005CCC]' : 'text-slate-400'}`} />
                    </Link>

                    {/* Mega Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute top-full left-0 pt-2 w-max max-w-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="bg-white/98 backdrop-blur-2xl border border-slate-200/90 rounded-2xl p-4 shadow-2xl shadow-blue-950/15 ring-1 ring-blue-500/10">
                          <div className={`grid gap-4 ${item.sections!.length > 1 ? 'grid-cols-2 min-w-[500px]' : 'grid-cols-1 min-w-[340px]'}`}>
                            {item.sections!.map((sec, idx) => (
                              <div key={idx} className="space-y-2">
                                <p className="text-[11px] font-bold uppercase tracking-wider text-[#012462] px-2.5">
                                  {sec.title}
                                </p>
                                <div className="space-y-1">
                                  {sec.items.map((sub) => (
                                    <Link
                                      key={sub.name}
                                      to={sub.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="flex flex-col px-3 py-2 rounded-xl text-xs hover:bg-blue-50 hover:text-[#005CCC] transition-colors group/sub"
                                    >
                                      <div className="flex items-center justify-between font-bold text-slate-800 group-hover/sub:text-[#005CCC]">
                                        <span>{sub.name}</span>
                                        {sub.badge && (
                                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-100 text-[#005CCC] font-semibold border border-blue-200">
                                            {sub.badge}
                                          </span>
                                        )}
                                      </div>
                                      {sub.description && (
                                        <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                          {sub.description}
                                        </span>
                                      )}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Dropdown footer quick link */}
                          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between px-2 text-[11px] text-slate-500">
                            <span>Explore all {item.name.toLowerCase()} capabilities</span>
                            <Link 
                              to={item.href} 
                              onClick={() => setActiveDropdown(null)}
                              className="text-[#005CCC] hover:text-[#008CFF] font-bold flex items-center gap-1"
                            >
                              View {item.name} Hub <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* App Login */}
              <a
                href="https://app.voltertrack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-[#005CCC] hover:bg-slate-100 rounded-xl transition-colors"
              >
                Sign In
              </a>

              {/* Demo CTA */}
              <Link
                to="/demo"
                className="px-3.5 py-2 text-xs font-bold text-[#005CCC] bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-all shadow-sm"
              >
                Request Demo
              </Link>

              {/* Primary Gradient CTA */}
              <Link
                to="/quote"
                className="px-4 py-2.5 rounded-xl font-bold text-xs text-white gradient-bg-brand-h hover:opacity-95 shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 transition-all flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-200" />
                <span>Get Started</span>
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                to="/quote"
                className="px-3 py-1.5 text-xs font-bold text-white gradient-bg-brand rounded-lg shadow-sm"
              >
                Get Started
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#005CCC] rounded-lg bg-slate-100 border border-slate-200 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-2xl px-4 pt-4 pb-8 space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200 shadow-xl">
            <div className="space-y-1">
              {MAIN_NAVIGATION.map((item) => (
                <div key={item.name} className="border-b border-slate-100 py-2">
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-base font-bold text-[#012462] hover:text-[#005CCC] py-1"
                  >
                    <span>{item.name}</span>
                  </Link>

                  {item.sections && (
                    <div className="pl-3 mt-2 space-y-1 border-l-2 border-blue-100">
                      {item.sections.flatMap(sec => sec.items).map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 text-xs text-slate-600 hover:text-[#005CCC] font-medium transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 space-y-2">
              <a
                href="https://app.voltertrack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2.5 text-sm font-bold text-slate-700 bg-slate-100 rounded-xl border border-slate-200"
              >
                Sign In to Platform
              </a>
              <Link
                to="/demo"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-2.5 text-sm font-bold text-[#005CCC] bg-blue-50 rounded-xl border border-blue-200"
              >
                Request a Live Demo
              </Link>
              <Link
                to="/quote"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-2.5 text-sm font-bold text-white gradient-bg-brand rounded-xl shadow-lg shadow-blue-600/25"
              >
                Get a Custom Fleet Quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
