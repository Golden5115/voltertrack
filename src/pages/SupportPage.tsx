import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Headphones, 
  Phone, 
  Mail, 
  ShieldAlert, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  Clock
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ContactForm } from '../components/interactive/ContactForm';

export const SupportPage: React.FC = () => {
  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Technical Support & 24/7 Vehicle Recovery | VolterTrack"
        description="Reach VolterTrack technical support, emergency 24/7 vehicle recovery hotline, and commercial customer service."
      />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <Headphones className="w-3.5 h-3.5" />
          <span>Customer & Technical Support</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          We're here to keep your fleet moving.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Access our dedicated technical desks, device configuration specialists, and 24/7 emergency vehicle recovery team.
        </p>
      </section>

      {/* Emergency 24/7 Recovery Hotline Banner */}
      <section className="p-6 md:p-8 rounded-3xl bg-red-50 border-2 border-red-200 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center font-bold shrink-0 shadow-lg shadow-red-500/20">
            <ShieldAlert className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-700">
              Critical Emergency Incident
            </span>
            <h3 className="text-xl font-bold text-red-950">24/7 Vehicle Theft & Recovery Hotline</h3>
            <p className="text-xs text-red-800 mt-1 max-w-xl leading-relaxed">
              If your vehicle is stolen or compromised, call our emergency control room immediately for live law-enforcement coordinates and emergency remote engine immobilization.
            </p>
          </div>
        </div>

        <div className="shrink-0 space-y-1">
          <a
            href="tel:+234800865837"
            className="px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+234 800 VOLTER (865837)</span>
          </a>
          <p className="text-[10px] text-center text-red-700 font-mono">Toll-Free in Nigeria • 24/7/365</p>
        </div>
      </section>

      {/* Grid: Support Desks & Interactive Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Col: Desks */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold">
              <Mail className="w-4 h-4" />
            </div>
            <h4 className="text-base font-bold text-[#012462]">Technical Support & Tracking Help</h4>
            <p className="text-xs text-slate-600">
              Assistance with tracker offline status, mobile app logins, and SIM data renewals.
            </p>
            <p className="text-xs font-mono font-bold text-[#005CCC]">support@voltertrack.com</p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold">
              <MessageSquare className="w-4 h-4" />
            </div>
            <h4 className="text-base font-bold text-[#012462]">Sales & Fleet Subscriptions</h4>
            <p className="text-xs text-slate-600">
              Custom enterprise billing, additional tracker orders, and sensor upgrades.
            </p>
            <p className="text-xs font-mono font-bold text-emerald-600">sales@voltertrack.com</p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center font-bold">
              <Clock className="w-4 h-4" />
            </div>
            <h4 className="text-base font-bold text-[#012462]">Standard Support Hours</h4>
            <p className="text-xs text-slate-600">
              Monday – Friday: 8:00 AM – 6:00 PM WAT <br />
              Saturday: 9:00 AM – 3:00 PM WAT <br />
              <strong className="text-[#012462]">24/7 for Emergency Theft Recovery</strong>
            </p>
          </div>

        </div>

        {/* Right Col: Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>

    </div>
  );
};
