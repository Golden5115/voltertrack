import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Bell, 
  Navigation, 
  Lock, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { MobileAppShowcase } from '../../components/interactive/MobileAppShowcase';

export const MobileAppPage: React.FC = () => {
  return (
    <div className="space-y-20 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="VolterTrack Mobile Apps | iOS & Android Fleet Control"
        description="Monitor vehicles 24/7 with native push alerts, journey playback, live GPS map tracking, and emergency remote engine immobilizer on iOS and Android."
      />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <Smartphone className="w-3.5 h-3.5" />
          <span>Native Mobile Telematics</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          VolterTrack for iOS & Android
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Stay connected to your vehicles at all times. Instant mobile push alerts, trip route playback, vehicle vitals, and emergency immobilizer in your pocket.
        </p>
      </section>

      {/* Interactive Mobile Simulator */}
      <MobileAppShowcase />

      {/* Feature Highlights Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold">
            <Bell className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#012462]">Zero-Delay Push Alerts</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Get pinged immediately when a vehicle starts ignition, breaks curfew hours, or crosses a warehouse geofence.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold">
            <Navigation className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#012462]">Trip Replays with Speed graphs</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Scrub through historic journeys with minute-by-minute breadcrumbs, stop durations, and max speed indicators.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center font-bold">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#012462]">One-Tap Engine Immobilizer</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Arm or disarm the vehicle engine relay safely with biometric FaceID / TouchID confirmation during theft emergencies.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="p-8 md:p-12 rounded-3xl gradient-bg-brand text-center text-white space-y-4 shadow-xl">
        <h3 className="text-2xl font-bold font-['Space_Grotesk']">
          Equip your drivers and managers with VolterTrack Mobile
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
