import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Sparkles, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  Car,
  Building2,
  CheckCircle2,
  Wrench,
  Radio,
  Cpu,
  Lock
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { 
  PERSONAL_INSTALLATION_TIERS, 
  FLEET_INSTALLATION_RATE, 
  INCLUDED_INSTALLATION_FEATURES, 
  PRICING_SLOGAN,
  SENSOR_ADDONS 
} from '../data/pricingData';
import { QuoteCalculator } from '../components/interactive/QuoteCalculator';

export const PricingPage: React.FC = () => {
  const formatNgn = (val: number) => `₦${val.toLocaleString()}`;

  return (
    <div className="space-y-14 sm:space-y-20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Official Installation Price List | VolterTrack"
        description="One-time installation payment with zero renewal fees. Personal vehicle installation (₦80,000–₦300,000) and fleet flat rate (₦120,000/unit). Track. Protect. Manage. Control."
      />

      {/* Hero Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-[11px] sm:text-xs font-bold shadow-sm">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span>VOLTERTRACK – INSTALLATION PRICE LIST</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#012462] font-['Space_Grotesk'] leading-tight">
          One-Time Payment. <br />
          <span className="gradient-text-blue">Zero Renewal Fees.</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
          No monthly software subscriptions, no server hosting fees, and no annual renewal charges. Pay once for professional covert installation and enjoy lifetime GPS tracking.
        </p>

        <div className="pt-2">
          <span className="inline-block px-3.5 sm:px-4 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase">
            {PRICING_SLOGAN}
          </span>
        </div>
      </section>

      {/* Customer Guarantee Banner: We Come To You • Pay After Testing */}
      <section className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-50 via-white to-emerald-50 border-2 border-blue-200 shadow-xl shadow-blue-950/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-blue-200/80">
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/25">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#012462] font-['Space_Grotesk']">
                We Come To You
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Nationwide doorstep service. Our certified technicians install covertly at your home, office, depot, or warehouse with <strong className="text-[#005CCC]">zero hidden costs</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-600/25">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#012462] font-['Space_Grotesk']">
                Pay After Testing
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                100% Risk-Free Guarantee. You pay <strong className="text-emerald-700">ONLY AFTER</strong> installation is completed and you have tested live tracking and remote engine cutoff on your phone.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-[#012462] text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-950/25">
              <Sparkles className="w-6 h-6 text-[#008CFF]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#012462] font-['Space_Grotesk']">
                Zero Renewal Fees
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                One-time payment covers tracker hardware, covert installation, mobile apps, and lifetime tracking platform access. No recurring charges ever.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Main 2-Pillar Price Architecture */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* Pillar 1: Personal Vehicle Installation */}
        <div className="lg:col-span-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 p-5 sm:p-8 shadow-xl shadow-blue-950/5 flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-5 sm:space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#005CCC] shadow-sm">
                <Car className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-100 text-[#005CCC] border border-blue-200">
                1 to 10 Vehicles (Tiered by Year)
              </span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#012462] font-['Space_Grotesk']">
                Personal & Small Fleet Installation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Tiered pricing according to vehicle manufacturing year, CAN-bus architecture, and electronic immobilizer security for 1 to 10 vehicles.
              </p>
            </div>

            {/* Official Year Brackets Table */}
            <div className="space-y-2.5 pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[#012462]">
                Official Year Breakdown:
              </p>
              
              <div className="space-y-2">
                {PERSONAL_INSTALLATION_TIERS.map((tier) => (
                  <div 
                    key={tier.id}
                    className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 transition-all flex items-center justify-between"
                  >
                    <div>
                      <span className="text-sm font-bold text-[#012462] block">
                        {tier.yearRange}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {tier.description}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-base sm:text-lg font-mono font-extrabold text-[#005CCC]">
                        {formatNgn(tier.priceNgn)}
                      </span>
                      <span className="text-[10px] text-slate-400 block font-medium">One-Time Fee</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions summary */}
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 text-xs space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-[#012462]">
                <CheckCircle2 className="w-4 h-4 text-[#005CCC]" />
                <span>Zero Renewal Fees</span>
              </div>
              <p className="text-slate-600 text-[11px]">
                Includes 4G GPS tracker, covert installation, engine cutoff relay, and lifetime mobile app access.
              </p>
            </div>
          </div>

          <div className="pt-8">
            <Link
              to="/quote?tier=personal&vehicles=1"
              className="w-full py-4 px-6 rounded-2xl bg-white hover:bg-blue-50 border-2 border-[#005CCC] text-[#005CCC] font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <span>Book Personal Installation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Pillar 2: Company / Fleet Installation */}
        <div className="lg:col-span-6 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#012462] to-[#08152E] text-white p-5 sm:p-8 shadow-2xl border-2 border-blue-400/40 flex flex-col justify-between relative overflow-hidden">
          
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-[#008CFF]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-5 sm:space-y-6 relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#008CFF] shadow-sm backdrop-blur-md">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                Commercial Fleets (11+ Vehicles)
              </span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">
                Company / Fleet Installation
              </h2>
              <p className="text-xs sm:text-sm text-blue-200 mt-1">
                For commercial transport, delivery fleets, logistics haulage, and corporate pool cars with more than 10 vehicles.
              </p>
            </div>

            {/* Flat Rate Spotlight Card */}
            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-300 block">
                All Vehicle Models & Years Flat Rate:
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-5xl font-mono font-extrabold text-white">
                  {formatNgn(FLEET_INSTALLATION_RATE)}
                </span>
                <span className="text-xs text-blue-200">/ vehicle</span>
              </div>
              <p className="text-xs text-emerald-300 font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Zero Renewal Fees • No Monthly or Annual Charges
              </p>
              <p className="text-[11px] text-blue-200 leading-relaxed">
                Applies across all vehicles when installing on a fleet of more than 10 vehicles (11+ units), regardless of make, model, or year of manufacture (2000–2026).
              </p>
            </div>

            {/* Fleet Inclusions */}
            <div className="space-y-2.5 pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-200">
                Included Fleet Capabilities:
              </p>
              <div className="space-y-2 text-xs text-blue-100">
                {[
                  'Multi-Vehicle Unified Status Dashboard',
                  'Branch & Department Vehicle Grouping',
                  'Driver Safety Scoring & Harsh Braking Logs',
                  'Odometer-Triggered Maintenance Schedules',
                  'Automated PDF/Excel Executive Reports',
                  'Unlimited Geofence Boundaries & Route Corridors',
                  'Multi-Manager Role Permissions & Logins',
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 relative z-10">
            <Link
              to="/quote?tier=fleet&vehicles=12"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#005CCC] to-[#008CFF] hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 transition-all"
            >
              <span>Get Fleet Quote (₦120,000/Unit Flat Rate)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </section>

      {/* Embedded Interactive Calculator */}
      <section className="space-y-6 pt-6">
        <QuoteCalculator />
      </section>

      {/* What Every Installation Includes */}
      <section className="rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#005CCC] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Guaranteed With Every Installation</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#012462] font-['Space_Grotesk']">
            Everything Included. No Hidden Costs.
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Your one-time installation covers all hardware, covert labor, warranty, and platform access for the lifetime of the vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {INCLUDED_INSTALLATION_FEATURES.map((item, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 shadow-sm">
              <div className="w-7 h-7 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <span className="text-xs font-bold text-[#012462]">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Optional Hardware Add-ons */}
      <section className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#012462] font-['Space_Grotesk']">
            Optional Sensor Upgrades
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Specialized accessories for heavy haulage trucks, cold-chain refrigerated cargo, and driver identification.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SENSOR_ADDONS.map((addon) => (
            <div key={addon.id} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#005CCC]">
                  {formatNgn(addon.costNgn)} / unit
                </span>
                <h4 className="text-base font-bold text-[#012462] mt-1 font-['Space_Grotesk']">
                  {addon.name}
                </h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {addon.description}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <span className="text-[10px] text-slate-400 block">Recommended for:</span>
                <span className="text-[11px] font-semibold text-slate-700">{addon.recommendedFor}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing FAQ Section */}
      <section className="space-y-6 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#012462] font-['Space_Grotesk']">
            Frequently Asked Pricing Questions
          </h3>
        </div>

        <div className="space-y-3">
          {[
            {
              q: 'Are there any monthly or annual renewal fees?',
              a: 'No. VolterTrack operates strictly on a one-time installation payment. Once your vehicle is installed, there are ZERO recurring software fees, zero server maintenance costs, and zero annual subscription charges.',
            },
            {
              q: 'Why does personal vehicle pricing scale by year?',
              a: 'Modern vehicles (especially 2014–2026 models) feature complex multiplex CAN-bus networks, electronic engine immobilizers, smart keyless push-to-start systems, and encrypted ECU wiring that require specialized high-security micro-relays and certified senior technicians.',
            },
            {
              q: 'Does the ₦120,000 fleet flat rate apply to newer models too?',
              a: 'Yes! When installing on a fleet of more than 10 vehicles, you automatically unlock the flat rate of ₦120,000 per vehicle regardless of whether your vehicles are 2005 models or 2026 models. For 1 to 10 vehicles, individual year model pricing tiers apply.',
            },
            {
              q: 'Where does installation take place?',
              a: 'Our certified mobile technicians come directly to you. We carry out clean, covert installations at your home, office, or depot across Lagos, Abuja, Port Harcourt, and all 36 states nationwide.',
            },
          ].map((faq, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
              <h4 className="font-bold text-sm text-[#012462]">{faq.q}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
