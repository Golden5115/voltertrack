import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ContactForm } from '../components/interactive/ContactForm';
import { COMPANY_CONTACT } from '../data/contactData';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Contact Us | VolterTrack Commercial & Support Desks"
        description="Get in touch with VolterTrack sales, technical support, and partnership desks in Nigeria and internationally."
      />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          Let's talk about your fleet goals.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Whether you need a custom fleet quotation, technical hardware consultation, or pilot deployment, our team is ready to assist.
        </p>
      </section>

      {/* Grid: Contact Info on Left, Interactive Form on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* Left Column: Contact Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-[#012462] font-['Space_Grotesk']">
              Official Communication Channels
            </h3>

            <div className="space-y-4 text-xs">
              
              {/* Sales Email */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-slate-500 font-medium">Sales & Quotations</p>
                  <a href="mailto:sales@voltertrack.com" className="text-sm font-bold text-[#012462] hover:text-[#005CCC] font-mono">
                    sales@voltertrack.com
                  </a>
                </div>
              </div>

              {/* Technical Support */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-slate-500 font-medium">Technical & Recovery Support</p>
                  <a href="mailto:support@voltertrack.com" className="text-sm font-bold text-[#012462] hover:text-emerald-600 font-mono">
                    support@voltertrack.com
                  </a>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-[#25D366] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-slate-500 font-medium">WhatsApp & Call Desk</p>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold uppercase font-mono">
                      Online 24/7
                    </span>
                  </div>
                  <a 
                    href={COMPANY_CONTACT.whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-bold text-[#012462] hover:text-[#25D366] font-mono block transition-colors"
                  >
                    {COMPANY_CONTACT.phoneDisplay}
                  </a>
                  <p className="text-[10px] text-emerald-700 font-medium">
                    We are always online to respond 24/7 on WhatsApp & Phone.
                  </p>
                </div>
              </div>

              {/* Physical Location */}
              <div className="flex items-start gap-3 pt-2 border-t border-slate-200">
                <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#005CCC]" />
                </div>
                <div>
                  <p className="text-slate-500 font-medium">Corporate Headquarters</p>
                  <p className="text-sm font-bold text-[#012462]">Lagos, Nigeria</p>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Field installation operations available nationwide: Lagos, Abuja FCT, Port Harcourt, Kano, Ibadan & Regional hubs.
                  </p>
                </div>
              </div>

            </div>

            {/* Parent Company Badge */}
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-slate-700 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-mono font-bold">Parent Company</p>
                <p className="font-bold text-[#012462]">Volternet Technologies</p>
              </div>
              <a
                href="https://volternet.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#005CCC] hover:text-[#008CFF] flex items-center gap-1 text-xs font-bold"
              >
                Visit Site <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>

    </div>
  );
};
