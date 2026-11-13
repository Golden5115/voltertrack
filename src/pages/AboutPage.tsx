import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Radio, 
  ShieldCheck, 
  Cpu, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Target,
  Zap,
  Clock,
  MessageCircle
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { COMPANY_CONTACT } from '../data/contactData';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-14 py-8 md:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="About VolterTrack | Executive Leadership & Engineering Provenance"
        description="Meet the leadership behind VolterTrack Technologies, including Chief Operating Officer Onafunwa Ayomide Matthew, and discover our engineering heritage under Volternet Technologies."
      />

      {/* Concise Hero Header */}
      <section className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <Building2 className="w-3.5 h-3.5" />
          <span>ABOUT VOLTERTRACK TECHNOLOGIES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk'] leading-tight">
          Pioneering vehicle intelligence & security across Nigeria.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          VolterTrack gives individual vehicle owners, logistics fleets, and commercial organizations absolute visibility, covert anti-theft immobilization, and zero-renewal telematics.
        </p>
      </section>

      {/* EXECUTIVE LEADERSHIP SPOTLIGHT: COO ONAFUNWA AYOMIDE MATTHEW (Upper Part of Page & Top-Aligned Portrait) */}
      <section className="space-y-6">
        {/* Feature Profile Card */}
        <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/30 border-2 border-blue-200 shadow-2xl shadow-blue-950/10 relative overflow-hidden">
          
          {/* Subtle Cyber Accents */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#008CFF]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#005CCC]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Large Portrait aligned to the upper-left + Bio & Credentials aligned to top-right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
            
            {/* Left Column (5 cols): Large Portrait positioned at the upper part */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              
              <div className="relative w-full max-w-md mx-auto lg:max-w-none group">
                {/* Glowing Aura */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#012462] via-[#005CCC] to-[#008CFF] rounded-[32px] blur-lg opacity-40 group-hover:opacity-70 transition duration-500" />

                {/* Portrait Container */}
                <div className="relative w-full aspect-[3/4] rounded-3xl bg-gradient-to-tr from-[#012462] via-[#005CCC] to-[#008CFF] p-2 shadow-2xl shadow-blue-950/30 overflow-hidden">
                  <div className="w-full h-full rounded-[20px] overflow-hidden relative bg-[#081b3e] border border-white/20">
                    <img
                      src="/onafunwa-ayomide.png"
                      alt="Onafunwa Ayomide Matthew - Chief Operating Officer (COO), VolterTrack Technologies"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Subtle gradient vignette at the bottom only (upper part of photo stays 100% clear) */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#012462]/90 via-[#012462]/30 to-transparent pointer-events-none" />

                    {/* Bottom identity plaque on the photo */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#012462]/90 backdrop-blur-md border border-white/20 shadow-xl space-y-1">
                      <p className="text-lg sm:text-xl font-extrabold text-white font-['Space_Grotesk'] leading-tight">
                        Onafunwa Ayomide Matthew
                      </p>
                      <div className="flex items-center justify-between text-xs pt-0.5">
                        <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Chief Operating Officer</span>
                        </span>
                        <span className="text-blue-200 text-[10px] font-mono">
                          VolterTrack
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (7 cols): Credentials & Executive Bio */}
            <div className="lg:col-span-7 flex flex-col justify-start space-y-5">
              
              {/* Header & Badges */}
              <div className="space-y-3.5">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#005CCC] text-xs font-bold">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Executive Leadership</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Nationwide Operations & QA</span>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#012462] font-['Space_Grotesk'] tracking-tight">
                    Onafunwa Ayomide Matthew
                  </h2>
                  <p className="text-sm font-bold text-[#005CCC] uppercase tracking-wider mt-1">
                    Chief Operating Officer (COO) • VolterTrack Technologies
                  </p>
                </div>

                {/* Educational & Discipline Credential Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  
                  <div className="p-3.5 rounded-2xl bg-white border border-blue-200 shadow-sm flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005CCC] flex items-center justify-center shrink-0 shadow-sm">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono font-bold block">
                        Academic Degree
                      </span>
                      <span className="text-xs font-bold text-[#012462] block leading-tight mt-0.5">
                        B.Sc. in Microbiology
                      </span>
                      <span className="text-[11px] text-slate-600 block mt-0.5">
                        Federal University Oye-Ekiti (FUOYE)
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-emerald-200 shadow-sm flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono font-bold block">
                        Discipline & Focus
                      </span>
                      <span className="text-xs font-bold text-emerald-950 block leading-tight mt-0.5">
                        Technology Enthusiast
                      </span>
                      <span className="text-[11px] text-slate-600 block mt-0.5">
                        IoT Telematics & Field Scalability
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bio Text */}
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/80 pt-4">
                <p>
                  As the <strong className="text-[#012462]">Chief Operating Officer (COO) of VolterTrack Technologies</strong>, <strong className="text-[#012462]">Onafunwa Ayomide Matthew</strong> steers the operational architecture, decentralized field engineering teams, quality assurance frameworks, and client-first delivery protocols that power thousands of vehicle journeys across Nigeria every day.
                </p>

                <p>
                  A graduate of the <strong className="text-[#012462]">Federal University of Oye-Ekiti (FUOYE)</strong> with a <strong className="text-[#012462]">B.Sc. in Microbiology</strong>, Matthew applies scientific inquiry, systematic problem-solving, and experimental rigor to the challenges of automotive telematics and hardware IoT. His innate curiosity as a devoted <strong className="text-[#005CCC]">technology enthusiast</strong> inspired him to bridge the gap between empirical science and high-speed telemetry networks.
                </p>

                <p>
                  Under his operational leadership, VolterTrack established its signature nationwide service model: <strong className="text-emerald-700 font-bold">"We come to you with zero hidden costs, and you pay only after installation has been done and tested live on your phone."</strong> Matthew orchestrates certified mobile technicians across all 36 states, enforcing tamper-proof covert installations, 100% pre-payment test verification, and round-the-clock emergency vehicle recovery support.
                </p>
              </div>

            </div>

          </div>

          {/* Bottom Row inside Card: Operational Pillars & Quote */}
          <div className="mt-8 pt-7 border-t border-blue-200/70 space-y-5 relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#005CCC] flex items-center justify-center font-bold">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-[#012462]">Nationwide Deployment</h3>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Standardized covert installations across Lagos, Abuja, Port Harcourt, and all 36 states with zero travel fees.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-[#012462]">100% Tested Quality Assurance</h3>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Zero upfront deposit. Customers pay only after verifying live tracking and engine cutoff on their phone.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-[#012462]">24/7 Response Readiness</h3>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Directing our emergency rapid response recovery desk and instant 24/7 WhatsApp support channel.
                </p>
              </div>
            </div>

            {/* Executive Quote Block */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#012462] text-white space-y-2 shadow-lg border border-blue-400/20">
              <p className="text-xs sm:text-sm italic text-blue-100 leading-relaxed font-['Space_Grotesk']">
                "Operations is where technology meets human trust. At VolterTrack, we believe vehicle security must be transparent and effortless. By delivering certified covert installation directly to our clients and letting them test their engine cutoff before paying, we build confidence that lasts."
              </p>
              <div className="flex items-center justify-between pt-1.5 border-t border-blue-900/80 text-[11px]">
                <span className="font-bold text-white">— Onafunwa Ayomide Matthew</span>
                <span className="text-emerald-300 font-mono font-medium">Chief Operating Officer, VolterTrack Technologies</span>
              </div>
            </div>

          </div>

        </div>

        {/* Operations Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#005CCC] font-mono block">36</span>
            <span className="text-xs font-bold text-[#012462] block mt-0.5">States Covered</span>
            <span className="text-[10px] text-slate-500">Nationwide doorstep technicians</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-mono block">100%</span>
            <span className="text-xs font-bold text-[#012462] block mt-0.5">Tested Before Pay</span>
            <span className="text-[10px] text-slate-500">Zero upfront deposit</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#008CFF] font-mono block">&lt; 5s</span>
            <span className="text-xs font-bold text-[#012462] block mt-0.5">Engine Immobilization</span>
            <span className="text-[10px] text-slate-500">Instant remote phone kill-switch</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#012462] font-mono block">24/7</span>
            <span className="text-xs font-bold text-[#012462] block mt-0.5">Online Support</span>
            <span className="text-[10px] text-slate-500">Always available on WhatsApp</span>
          </div>
        </div>
      </section>

      {/* Corporate Heritage: Volternet Technologies relationship */}
      <section className="p-8 md:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-bold text-[#005CCC] uppercase tracking-wider">
            Engineering Provenance
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#012462] font-['Space_Grotesk']">
            A Technology Product of Volternet Technologies
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            VolterTrack is built and operated by <strong className="text-[#012462]">Volternet Technologies</strong>—a premier software engineering, cloud architecture, and IoT systems innovation company. While Volternet Technologies engineers bespoke digital infrastructure for enterprise organizations, VolterTrack is its dedicated, specialized telematics SaaS platform created to bring intelligent visibility and anti-theft protection to the automotive and transport sector.
          </p>
        </div>

        {/* Visual Architecture Diagram */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs text-center space-y-3 sm:space-y-4 max-w-2xl mx-auto shadow-inner">
          <div className="p-3 rounded-xl bg-[#012462] text-white font-bold inline-block shadow-md text-[11px] sm:text-xs">
            🏢 VOLTERNET TECHNOLOGIES (Parent Engineering Company)
          </div>
          <div className="text-[#005CCC] font-bold text-lg">↓</div>
          <div className="p-3.5 rounded-xl gradient-bg-brand-h text-white font-bold shadow-md text-[11px] sm:text-xs">
            ⚡ VOLTERTRACK (Fleet Telematics & Vehicle SaaS Platform)
          </div>
          <div className="hidden sm:block text-[#005CCC] font-bold text-lg">┌───────────────┼───────────────┐</div>
          <div className="sm:hidden text-[#005CCC] font-bold text-lg">↓</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold shadow-sm">
              Web Dashboard
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold shadow-sm">
              iOS & Android Apps
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold shadow-sm">
              REST APIs & Webhooks
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="https://volternet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#005CCC] hover:text-[#008CFF] flex items-center gap-1.5"
          >
            Learn more about Volternet Technologies <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* Core Values / Operational Mission */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <div className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold">
            <Radio className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#012462]">Sub-Second Precision</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            We don't settle for delayed or inaccurate pings. Our hardware and cloud brokers process telemetry with sub-second latency across 4G and 2G bands nationwide.
          </p>
        </div>

        <div className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#012462]">Uncompromising Security</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Your location data is private and encrypted. From covert hardware installation to strict NDPR data protection, we guard your vehicular assets round-the-clock.
          </p>
        </div>

        <div className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center font-bold">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#012462]">Continuous Innovation</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Backed by Volternet Technologies R&D lab, we continually expand support for ultrasonic fuel sensors, CAN-bus analytics, and AI predictive maintenance.
          </p>
        </div>
      </section>

      {/* Leadership & Deployment CTA */}
      <section className="p-6 sm:p-8 md:p-14 rounded-2xl sm:rounded-3xl gradient-bg-brand text-center text-white space-y-6 shadow-2xl relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-2xl mx-auto space-y-3 relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-200">
            EXPERIENCE THE VOLTERTRACK STANDARD
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Space_Grotesk'] leading-tight">
            Ready to secure your vehicles with certified nationwide installation?
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
            We come directly to your doorstep anywhere in Nigeria. Zero deposit, zero hidden charges, and you pay only after installation has been done and tested on your phone.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 relative z-10">
          <Link
            to="/quote"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-blue-50 text-[#012462] font-bold text-xs shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
          >
            <span>Configure Your Installation Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`${COMPANY_CONTACT.whatsappUrl}?text=${encodeURIComponent('Hello Mr. Onafunwa Ayomide / VolterTrack Team, I would like to inquire about fleet tracking installation.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp ({COMPANY_CONTACT.phoneDisplay} • 24/7)</span>
          </a>

          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/25 backdrop-blur-sm transition-all flex items-center justify-center gap-2"
          >
            <span>Contact Operations Desk</span>
          </Link>
        </div>
      </section>

    </div>
  );
};
export default AboutPage;
