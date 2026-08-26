import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Smartphone, 
  CheckCircle2,
  Lock,
  Globe
} from 'lucide-react';
import { LEGAL_PAGES } from '../../data/navigationData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#012462] border-t border-blue-900 text-blue-100 text-xs relative overflow-hidden">
      {/* Background radial glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#008CFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#005CCC]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-blue-900/80">
          
          {/* Column 1: Brand & Parent Company */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <div className="p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 inline-block">
                <img 
                  src="/logo.png" 
                  alt="VolterTrack Logo" 
                  className="h-12 w-auto object-contain" 
                />
              </div>
            </Link>

            <p className="text-blue-200 text-xs leading-relaxed max-w-sm">
              VolterTrack is a modern vehicle tracking and fleet intelligence SaaS platform engineered to deliver real-time visibility, security, telematics, and operational control.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/15 text-white">
                <Shield className="w-4 h-4 text-[#008CFF] shrink-0" />
                <span className="text-[11px]">A Product of <a href="https://volternet.com" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-[#008CFF] underline decoration-blue-400">Volternet Technologies</a></span>
              </div>
              <p className="text-[11px] text-blue-200 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#008CFF]" />
                Lagos, Nigeria • Operating Globally
              </p>
            </div>

            {/* Mobile App Downloads Preview */}
            <div className="pt-3 space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-blue-300">
                VolterTrack Mobile Apps
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors">
                  <span className="text-sm"></span>
                  <div className="text-left">
                    <p className="text-[9px] text-blue-200 leading-none">Download on</p>
                    <p className="text-xs font-bold text-white leading-tight">App Store</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors">
                  <span className="text-sm text-emerald-300">▶</span>
                  <div className="text-left">
                    <p className="text-[9px] text-blue-200 leading-none">Get it on</p>
                    <p className="text-xs font-bold text-white leading-tight">Google Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Platform</p>
            <ul className="space-y-2 text-blue-200">
              <li><Link to="/platform" className="hover:text-white transition-colors">Platform Overview</Link></li>
              <li><Link to="/platform/dashboard" className="hover:text-white transition-colors">Web Dashboard</Link></li>
              <li><Link to="/platform/mobile-app" className="hover:text-white transition-colors">Mobile App (iOS & Android)</Link></li>
              <li><Link to="/platform/fleet-management" className="hover:text-white transition-colors">Fleet Management</Link></li>
              <li><Link to="/platform/administration" className="hover:text-white transition-colors">Administration & RBAC</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Plans & Pricing</Link></li>
              <li><a href="https://app.voltertrack.com" target="_blank" rel="noopener noreferrer" className="text-[#008CFF] hover:underline flex items-center gap-1 font-semibold">Web App Sign In <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>

          {/* Column 3: Features */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Features</p>
            <ul className="space-y-2 text-blue-200">
              <li><Link to="/features/live-tracking" className="hover:text-white transition-colors">Live GPS Tracking</Link></li>
              <li><Link to="/features/trip-history" className="hover:text-white transition-colors">Trip History & Playback</Link></li>
              <li><Link to="/features/geofencing" className="hover:text-white transition-colors">Geofencing & Alerts</Link></li>
              <li><Link to="/features/alerts" className="hover:text-white transition-colors">Alerts & Notifications</Link></li>
              <li><Link to="/features/vehicle-management" className="hover:text-white transition-colors">Vehicle Management</Link></li>
              <li><Link to="/features/driver-management" className="hover:text-white transition-colors">Driver Management</Link></li>
              <li><Link to="/features/maintenance" className="hover:text-white transition-colors">Maintenance Schedules</Link></li>
              <li><Link to="/features/fuel-management" className="hover:text-white transition-colors">Fuel Management</Link></li>
              <li><Link to="/features/vehicle-security" className="hover:text-white transition-colors">Remote Immobilizer</Link></li>
              <li><Link to="/features/integrations" className="hover:text-white transition-colors">APIs & Integrations</Link></li>
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Industries</p>
            <ul className="space-y-2 text-blue-200">
              <li><Link to="/industries/logistics" className="hover:text-white transition-colors">Logistics & Haulage</Link></li>
              <li><Link to="/industries/transportation" className="hover:text-white transition-colors">Interstate Transportation</Link></li>
              <li><Link to="/industries/delivery" className="hover:text-white transition-colors">Last-Mile Delivery</Link></li>
              <li><Link to="/industries/construction" className="hover:text-white transition-colors">Construction & Equipment</Link></li>
              <li><Link to="/industries/corporate" className="hover:text-white transition-colors">Corporate Pool Fleets</Link></li>
              <li><Link to="/industries/car-rental" className="hover:text-white transition-colors">Car Rental & Leasing</Link></li>
              <li><Link to="/industries/security" className="hover:text-white transition-colors">Security & Patrol Units</Link></li>
              <li><Link to="/industries/government" className="hover:text-white transition-colors">Government & Municipal</Link></li>
            </ul>
          </div>

          {/* Column 5: Resources & Company */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Resources & Company</p>
            <ul className="space-y-2 text-blue-200">
              <li><Link to="/resources/blog" className="hover:text-white transition-colors">Blog & Telematics Insights</Link></li>
              <li><Link to="/help" className="hover:text-white transition-colors">Help Center & Guides</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Support & Ticketing</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About VolterTrack</Link></li>
              <li><Link to="/about/technology" className="hover:text-white transition-colors">Our Technology Architecture</Link></li>
              <li><Link to="/about/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Sales</Link></li>
              <li><Link to="/demo" className="text-[#008CFF] font-bold hover:underline">Schedule Live Demo</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Legal, Security & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-blue-300">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} VolterTrack. A product of Volternet Technologies. All rights reserved.</span>
            <span className="hidden sm:inline text-blue-400">•</span>
            <span>Built for Nigeria & Global Fleet Operators</span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-4">
            {LEGAL_PAGES.map((page) => (
              <Link
                key={page.name}
                to={page.href}
                className="hover:text-white transition-colors"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
