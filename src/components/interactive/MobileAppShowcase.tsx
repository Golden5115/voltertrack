import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Radio, 
  Bell, 
  Navigation, 
  Lock, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

interface ScreenData {
  id: 'map' | 'alerts' | 'trips' | 'security';
  title: string;
  subtitle: string;
  badge: string;
  desc: string;
  icon: React.ElementType;
  image: string;
  alt: string;
  highlights: string[];
}

const SCREENS: ScreenData[] = [
  {
    id: 'map',
    title: 'Live GPS View',
    subtitle: 'Sub-second real-time map with traffic',
    badge: 'Real-Time Map & Telemetry',
    desc: 'Monitor moving and parked vehicles in real-time. Instantly see driver details, current speed, ignition status, battery voltage, and street locations with sub-second GPS telemetry.',
    icon: Radio,
    image: '/mockups/live-fleet.png',
    alt: 'VolterTrack Live GPS fleet tracking map view on iPhone',
    highlights: [
      'Sub-second telemetry refresh with live vehicle pins',
      'Filter seamlessly between All, Moving, and Parked assets',
      'Interactive street layers with road and satellite maps'
    ]
  },
  {
    id: 'alerts',
    title: 'Push Alerts Feed',
    subtitle: 'Instant ignition, speed & boundary alerts',
    badge: 'Verified Telemetry Stream',
    desc: 'Stay informed the exact millisecond any vehicle activity occurs. Receive real-time push alerts for ignition on/off, overspeed thresholds, curfew hours, and depot geofence crossings.',
    icon: Bell,
    image: '/mockups/push-alerts.png',
    alt: 'VolterTrack real-time security and push alerts feed on iPhone',
    highlights: [
      'Instant push notifications for ignition start and shut off',
      'Continuous audit trail of vehicle departures and stops',
      'Color-coded urgency indicators for driver infractions'
    ]
  },
  {
    id: 'trips',
    title: 'Trip Replays',
    subtitle: 'Daily route breadcrumbs & stop durations',
    badge: 'Historical Route Playback',
    desc: 'Review historical journeys with minute-by-minute playback. Analyze exact route paths, travel durations, idle stopovers, top speeds, and distance covered across Today, Yesterday, or past 7 days.',
    icon: Navigation,
    image: '/mockups/trip-replays.png',
    alt: 'VolterTrack trip replays and journey telemetry playback on iPhone',
    highlights: [
      'One-tap trip replay with animated playback',
      'Accurate stop duration counters and idle monitoring',
      'Trip-by-trip average speed vs max speed records'
    ]
  },
  {
    id: 'security',
    title: 'Remote Cutoff',
    subtitle: 'Secure one-tap engine immobilizer',
    badge: 'Anti-Theft Command Center',
    desc: 'Safely and reliably immobilize stolen or unauthorized vehicles remotely via dedicated starter relay commands. Verify telemetry, call the tracker SIM directly, or restore engine power securely.',
    icon: Lock,
    image: '/mockups/remote-cutoff.png',
    alt: 'VolterTrack remote engine immobilizer and command center on iPhone',
    highlights: [
      'One-tap starter motor cutoff command from your phone',
      'Direct GSM SIM calling for immediate audio monitoring',
      'Live GPS coordinates, odometer, and battery telemetry'
    ]
  }
];

export const MobileAppShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'alerts' | 'trips' | 'security'>('map');

  const activeScreen = SCREENS.find(s => s.id === activeTab) || SCREENS[0];

  return (
    <div className="w-full rounded-3xl bg-gradient-to-b from-[#F0F6FF] via-[#F8FAFC] to-white border border-blue-100/80 p-6 sm:p-8 lg:p-12 shadow-xl shadow-blue-950/5 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        
        {/* Left Col: Explanatory Copy & Screen Switcher */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
            <Smartphone className="w-3.5 h-3.5" />
            <span>VolterTrack iOS & Android Apps</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#012462] tracking-tight leading-tight font-['Space_Grotesk']">
            Your entire fleet in the palm of your hand.
          </h3>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Monitor real-time vehicle movement, receive instant push notifications, replay journeys, and issue emergency engine cutoff commands directly from your mobile device anywhere in the world.
          </p>

          {/* Interactive Feature Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {SCREENS.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`text-left p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#005CCC] shadow-lg shadow-blue-900/10 ring-2 ring-[#005CCC]/20 translate-y-[-1px]'
                      : 'bg-white/80 border-slate-200/90 text-slate-600 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${isActive ? 'bg-[#005CCC] text-white' : 'bg-blue-50 text-[#005CCC]'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-xs font-bold ${isActive ? 'text-[#012462]' : 'text-slate-800'}`}>{item.title}</span>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#005CCC]" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2 line-clamp-1">{item.subtitle}</p>
                </button>
              );
            })}
          </div>

          {/* Active Screen Highlights Box */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/70 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#005CCC]">
                Active Screen • {activeScreen.title}
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Live App Preview
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {activeScreen.desc}
            </p>
            <div className="grid grid-cols-1 gap-1.5 pt-1">
              {activeScreen.highlights.map((h, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* App Store Download Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-900 text-white flex items-center gap-3 shadow-md hover:bg-slate-800 transition-colors"
            >
              <span className="text-2xl leading-none"></span>
              <div className="text-left">
                <p className="text-[9px] text-slate-300 uppercase tracking-wider font-medium">Download on the</p>
                <p className="text-xs font-bold text-white">Apple App Store</p>
              </div>
            </a>

            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-900 text-white flex items-center gap-3 shadow-md hover:bg-slate-800 transition-colors"
            >
              <span className="text-xl leading-none text-emerald-400">▶</span>
              <div className="text-left">
                <p className="text-[9px] text-slate-300 uppercase tracking-wider font-medium">Get it on</p>
                <p className="text-xs font-bold text-white">Google Play Store</p>
              </div>
            </a>

            <Link
              to="/quote"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#005CCC] hover:text-[#012462] transition-colors px-3 py-2"
            >
              <span>Request Fleet Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Col: Real High-Definition Phone Mockup Display */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[370px] mx-auto flex items-center justify-center">
            
            {/* Ambient Radial Glow Behind Device */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/25 via-[#005CCC]/20 to-indigo-500/10 rounded-full blur-3xl scale-95 pointer-events-none -z-10" />

            {/* Stacked Images for Zero-Delay Preloading and Smooth Cross-Fade */}
            <div className="relative w-full aspect-[900/1770]">
              {SCREENS.map((screen) => {
                const isActive = activeTab === screen.id;
                return (
                  <img
                    key={screen.id}
                    src={screen.image}
                    alt={screen.alt}
                    loading="eager"
                    className={`absolute inset-0 w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(1,36,98,0.22)] transition-all duration-300 ease-out ${
                      isActive
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-95 z-0 pointer-events-none'
                    }`}
                  />
                );
              })}
            </div>

          </div>

          {/* Floating Screen Badge Pill below phone */}
          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md text-xs font-semibold text-[#012462]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>{activeScreen.badge}</span>
          </div>

          {/* Mobile Screen Switcher Indicator Dots */}
          <div className="flex items-center gap-2 mt-3 sm:hidden">
            {SCREENS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveTab(s.id)}
                aria-label={`Switch to ${s.title}`}
                className={`h-2 rounded-full transition-all duration-200 ${
                  activeTab === s.id ? 'w-6 bg-[#005CCC]' : 'w-2 bg-slate-300'
                }`}
              />
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};
