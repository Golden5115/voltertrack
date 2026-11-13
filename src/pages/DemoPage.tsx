import React from 'react';
import { 
  Radio, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Users
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { DemoBookingModal } from '../components/interactive/DemoBookingModal';

export const DemoPage: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Schedule a Live Demo | VolterTrack"
        description="Book a personalized 15-minute live platform demonstration with a VolterTrack fleet telematics specialist."
      />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive 1-on-1 Walkthrough</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          See VolterTrack in action on your fleet.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Experience live GPS tracking, boundary geofences, driver safety scoring, and remote engine cutoff tailored to your fleet.
        </p>
      </section>

      {/* Grid: Demo Benefits on Left, 3-Step Wizard on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* Left Column: What you'll get */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-[#012462] font-['Space_Grotesk']">
              What to Expect in Your Session
            </h3>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#012462]">15-Minute Tailored Walkthrough</p>
                  <p className="text-slate-500 mt-0.5">Focused specifically on your industry sector and vehicle volume.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                  <Radio className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#012462]">Live Hardware & Software Q&A</p>
                  <p className="text-slate-500 mt-0.5">Get direct answers on tracker installation, CAN-bus support, and sensor add-ons.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center font-bold shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#012462]">Complimentary ROI Assessment</p>
                  <p className="text-slate-500 mt-0.5">We calculate your estimated fuel savings and maintenance reduction timeline.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-[#012462]">
              <p className="font-bold">Operating Nationwide in Nigeria</p>
              <p className="text-slate-600 text-[11px] mt-0.5">
                Certified technicians available in Lagos, Abuja, Port Harcourt, Kano, Ibadan, and all 36 states.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: 3-Step Wizard */}
        <div className="lg:col-span-7">
          <DemoBookingModal />
        </div>

      </div>

    </div>
  );
};
