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
import { COMPANY_CONTACT } from '../../data/contactData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#012462] border-t border-blue-900 text-blue-100 text-xs relative overflow-hidden">
      {/* Background radial glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#008CFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#005CCC]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 sm:gap-x-6 gap-y-8 md:gap-10 pb-10 sm:pb-12 border-b border-blue-900/80">
          
          {/* Column 1: Brand & Parent Company */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-4">
            <Link to="/#hero" className="inline-block">
              <div className="p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 inline-block">
                <img 
                  src="/logo.png" 
                  alt="VolterTrack Logo" 
                  className="h-10 sm:h-12 w-auto object-contain" 
                />
              </div>
            </Link>

            <p className="text-blue-200 text-xs leading-relaxed max-w-sm">
              VolterTrack delivers real-time GPS tracking, remote engine cutoff, and automated fleet intelligence across Nigeria.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/15 text-white w-fit">
                <Shield className="w-4 h-4 text-[#008CFF] shrink-0" />
                <span className="text-[11px]">A Product of <a href="https://volternet.com" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-[#008CFF] underline decoration-blue-400">Volternet Technologies</a></span>
              </div>
              <p className="text-[11px] text-blue-200 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#008CFF] shrink-0" />
                Lagos, Nigeria • Operating Globally
              </p>
            </div>

            {/* Mobile App Downloads Preview */}
            <div className="pt-3 space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-blue-300">
                VolterTrack Mobile Apps
              </p>
              <div className="flex flex-wrap gap-2">
                <a href={COMPANY_CONTACT.appStoreUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors">
                  <span className="text-sm"></span>
                  <div className="text-left">
                    <p className="text-[9px] text-blue-200 leading-none">Download on</p>
                    <p className="text-xs font-bold text-white leading-tight">App Store</p>
                  </div>
                </a>
                <a href="#mobile-app" className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors">
                  <span className="text-sm text-emerald-300">▶</span>
                  <div className="text-left">
                    <p className="text-[9px] text-blue-200 leading-none">Get it on</p>
                    <p className="text-xs font-bold text-white leading-tight">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="space-y-2.5 sm:space-y-3 min-w-0">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Platform</p>
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs text-blue-200">
              <li><Link to="/platform" className="hover:text-white transition-colors py-0.5 inline-block">Platform Overview</Link></li>
              <li><Link to="/platform#dashboard" className="hover:text-white transition-colors py-0.5 inline-block">Web Dashboard</Link></li>
              <li><Link to="/platform#mobile-app" className="hover:text-white transition-colors py-0.5 inline-block">Mobile App (iOS & Android)</Link></li>
              <li><Link to="/platform#fleet-management" className="hover:text-white transition-colors py-0.5 inline-block">Fleet Management</Link></li>
              <li><Link to="/platform#administration" className="hover:text-white transition-colors py-0.5 inline-block">Administration & RBAC</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors py-0.5 inline-block">Plans & Pricing</Link></li>
              <li><a href="https://app.voltertrack.com" target="_blank" rel="noopener noreferrer" className="text-[#008CFF] hover:underline inline-flex items-center gap-1 font-semibold py-0.5">Web App Sign In <ArrowUpRight className="w-3 h-3 shrink-0" /></a></li>
            </ul>
          </div>

          {/* Column 3: Features */}
          <div className="space-y-2.5 sm:space-y-3 min-w-0">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Features</p>
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs text-blue-200">
              <li><Link to="/features#live-tracking" className="hover:text-white transition-colors py-0.5 inline-block">Live GPS Tracking</Link></li>
              <li><Link to="/features#trip-history" className="hover:text-white transition-colors py-0.5 inline-block">Trip History & Playback</Link></li>
              <li><Link to="/features#geofencing" className="hover:text-white transition-colors py-0.5 inline-block">Geofencing & Alerts</Link></li>
              <li><Link to="/features#alerts" className="hover:text-white transition-colors py-0.5 inline-block">Alerts & Notifications</Link></li>
              <li><Link to="/features#vehicle-management" className="hover:text-white transition-colors py-0.5 inline-block">Vehicle Management</Link></li>
              <li><Link to="/features#driver-management" className="hover:text-white transition-colors py-0.5 inline-block">Driver Management</Link></li>
              <li><Link to="/features#maintenance" className="hover:text-white transition-colors py-0.5 inline-block">Maintenance Schedules</Link></li>
              <li><Link to="/features#vehicle-security" className="hover:text-white transition-colors py-0.5 inline-block">Remote Engine Cutoff</Link></li>
              <li><Link to="/features#integrations" className="hover:text-white transition-colors py-0.5 inline-block">APIs & Integrations</Link></li>
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div className="space-y-2.5 sm:space-y-3 min-w-0">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Industries</p>
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs text-blue-200">
              <li><Link to="/industries#logistics" className="hover:text-white transition-colors py-0.5 inline-block">Logistics & Haulage</Link></li>
              <li><Link to="/industries#transportation" className="hover:text-white transition-colors py-0.5 inline-block">Interstate Transportation</Link></li>
              <li><Link to="/industries#delivery" className="hover:text-white transition-colors py-0.5 inline-block">Last-Mile Delivery</Link></li>
              <li><Link to="/industries#construction" className="hover:text-white transition-colors py-0.5 inline-block">Construction & Equipment</Link></li>
              <li><Link to="/industries#corporate" className="hover:text-white transition-colors py-0.5 inline-block">Corporate Pool Fleets</Link></li>
              <li><Link to="/industries#car-rental" className="hover:text-white transition-colors py-0.5 inline-block">Car Rental & Leasing</Link></li>
              <li><Link to="/industries#security" className="hover:text-white transition-colors py-0.5 inline-block">Security & Patrol Units</Link></li>
              <li><Link to="/industries#government" className="hover:text-white transition-colors py-0.5 inline-block">Government & Municipal</Link></li>
            </ul>
          </div>

          {/* Column 5: Support & Quick CTAs */}
          <div className="space-y-2.5 sm:space-y-3 min-w-0">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Get In Touch</p>
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs text-blue-200">
              <li>
                <a 
                  href={COMPANY_CONTACT.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-300 hover:text-emerald-200 font-bold flex items-start gap-1.5 transition-colors py-0.5"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0 mt-1"></span>
                  <span className="break-words leading-snug">WhatsApp: {COMPANY_CONTACT.phoneDisplay}</span>
                </a>
                <span className="text-[10px] text-emerald-400/90 block pl-3.5">Online 24/7 to respond</span>
              </li>
              <li><Link to="/about" className="hover:text-white transition-colors py-0.5 inline-block">About & Leadership</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors py-0.5 inline-block">Contact Support Desk</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors py-0.5 inline-block">Frequently Asked Questions</Link></li>
              <li><Link to="/quote" className="hover:text-white transition-colors py-0.5 inline-block">Fleet Quote Calculator</Link></li>
              <li><Link to="/demo" className="hover:text-white transition-colors py-0.5 inline-block">Schedule Live Walkthrough</Link></li>
              <li><a href="mailto:info@voltertrack.com" className="hover:text-white transition-colors py-0.5 inline-block break-all">info@voltertrack.com</a></li>
              <li><a href="https://volternet.com" target="_blank" rel="noopener noreferrer" className="text-[#008CFF] font-bold hover:underline inline-flex items-center gap-1 py-0.5">Volternet Technologies <ExternalLink className="w-3 h-3 shrink-0" /></a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-300 text-center md:text-left">
          <p className="text-[11px] sm:text-xs">© {new Date().getFullYear()} VolterTrack • A Volternet Technologies Product. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 text-[11px]">
            {LEGAL_PAGES.map((lp) => (
              <Link key={lp.href} to={lp.href} className="hover:text-white transition-colors py-0.5 inline-block">
                {lp.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
