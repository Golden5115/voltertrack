import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Truck, 
  Car,
  Building2,
  ShieldCheck,
  Send,
  Phone,
  Mail,
  Printer,
  MapPin,
  CreditCard,
  Plus,
  Trash2
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { 
  PERSONAL_INSTALLATION_TIERS, 
  FLEET_INSTALLATION_RATE, 
  PRICING_SLOGAN
} from '../data/pricingData';
import { COMPANY_CONTACT } from '../data/contactData';

interface VehicleConfig {
  id: string;
  yearTierId: string;
}

export const QuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const paramVehicles = parseInt(searchParams.get('vehicles') || '1');
  const paramYearTier = searchParams.get('yearTier') || '2009-2013';

  // State: list of vehicles with year tier for each
  const [vehicles, setVehicles] = useState<VehicleConfig[]>(() => {
    if (paramVehicles > 1) {
      const initial: VehicleConfig[] = [];
      const count = Math.min(paramVehicles, 15);
      for (let i = 0; i < count; i++) {
        initial.push({ id: `veh-${i + 1}`, yearTierId: paramYearTier });
      }
      return initial;
    }
    return [{ id: 'veh-1', yearTierId: paramYearTier }];
  });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    city: 'Lagos',
    installationAddress: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReference, setQuoteReference] = useState('');

  const vehicleCount = vehicles.length;
  const isPersonal = vehicleCount === 1;

  // Add vehicle
  const handleAddVehicle = () => {
    if (vehicles.length >= 25) return;
    setVehicles(prev => [...prev, { id: `veh-${Date.now()}`, yearTierId: '2014-2017' }]);
  };

  // Remove vehicle
  const handleRemoveVehicle = (id: string) => {
    if (vehicles.length <= 1) return;
    setVehicles(prev => prev.filter(v => v.id !== id));
  };

  // Update vehicle year
  const handleUpdateVehicleYear = (id: string, yearTierId: string) => {
    setVehicles(prev => prev.map(v => v.id === id ? { ...v, yearTierId } : v));
  };

  const getVehiclePrice = (yearTierId: string) => {
    const tier = PERSONAL_INSTALLATION_TIERS.find(t => t.id === yearTierId);
    return tier ? tier.priceNgn : 120000;
  };

  // Pricing math
  const isFleetFlatRate = vehicleCount > 10;
  let totalBaseInstallation = 0;
  if (isFleetFlatRate) {
    // Fleet flat rate ₦120k for all vehicles when installing on more than 10 vehicles
    totalBaseInstallation = vehicleCount * FLEET_INSTALLATION_RATE;
  } else {
    // 1 to 10 vehicles: price is based on each vehicle's model year tier
    totalBaseInstallation = vehicles.reduce((sum, v) => sum + getVehiclePrice(v.yearTierId), 0);
  }

  const grandTotal = totalBaseInstallation;

  const formatNgn = (val: number) => `₦${val.toLocaleString()}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const ref = `VT-QUO-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteReference(ref);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 85,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {}

      // Save quote in localStorage
      const existingQuotes = JSON.parse(localStorage.getItem('voltertrack_quotes') || '[]');
      existingQuotes.push({
        ref,
        ...formData,
        vehicleCount,
        vehicles: vehicles.map(v => ({
          year: PERSONAL_INSTALLATION_TIERS.find(t => t.id === v.yearTierId)?.yearRange || v.yearTierId,
        })),
        isPersonal,
        grandTotal,
        paymentTerms: 'Pay after installation and testing',
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('voltertrack_quotes', JSON.stringify(existingQuotes));
    }, 750);
  };

  return (
    <div className="space-y-10 sm:space-y-16 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Official Installation Quote Generator | VolterTrack"
        description="Select vehicle years individually and generate your official one-time proposal. We come to you with zero hidden costs • Pay after installation and testing."
      />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <Calculator className="w-3.5 h-3.5" />
          <span>VOLTERTRACK INSTALLATION PROPOSAL</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          Get Your Official Installation Quote
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Configure vehicle years individually. One-time payment with <strong className="text-[#005CCC]">zero renewal fees</strong>.
        </p>
      </section>

      {/* Selling Points Callout Banner */}
      <div className="p-4 sm:p-6 rounded-3xl bg-gradient-to-r from-blue-50 via-white to-emerald-50 border-2 border-blue-200 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 divide-y md:divide-y-0 md:divide-x divide-blue-200/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#012462] uppercase tracking-wider">
                We Come To You With Zero Hidden Costs
              </p>
              <p className="text-[11px] text-slate-600">
                Nationwide on-site covert installation at your home, office, or depot.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-5">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
                Pay After Installation Has Been Done & Tested
              </p>
              <p className="text-[11px] text-slate-600">
                You pay <strong className="text-emerald-700">ONLY AFTER</strong> you test live tracking and remote engine cutoff on your phone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {isSubmitted ? (
        /* Official Generated Proposal Card */
        <div className="max-w-3xl mx-auto p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-white border border-blue-200 shadow-2xl space-y-6 sm:space-y-8 animate-in fade-in duration-300">
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#012462] font-['Space_Grotesk']">
              Official Proposal Generated!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Thank you, <strong className="text-[#005CCC]">{formData.fullName}</strong>. Your official quote <strong className="font-mono text-[#012462]">{quoteReference}</strong> has been generated and dispatched to <strong className="text-[#012462] break-all">{formData.email}</strong>.
            </p>
          </div>

          {/* Official Quote Receipt Box */}
          <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 font-mono text-xs text-slate-700">
            <div className="flex flex-wrap justify-between items-center gap-2 pb-3 border-b border-slate-200">
              <span className="font-bold text-[#012462]">Reference: {quoteReference}</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded">STATUS: LOCKED IN</span>
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap justify-between gap-2">
                <span>Number of Vehicles:</span>
                <span className="font-bold text-[#012462]">{vehicleCount} {vehicleCount === 1 ? 'Vehicle' : 'Vehicles'}</span>
              </div>

              {/* Per-vehicle breakdown */}
              <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1.5 my-2">
                <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">Vehicle Year Breakdown:</span>
                {vehicles.map((v, i) => {
                  const tier = PERSONAL_INSTALLATION_TIERS.find(t => t.id === v.yearTierId);
                  const effectivePrice = isFleetFlatRate ? FLEET_INSTALLATION_RATE : (tier?.priceNgn || 120000);
                  return (
                    <div key={v.id} className="flex flex-wrap justify-between gap-2 text-[11px]">
                      <span>Vehicle #{i + 1} ({tier?.yearRange} Model):</span>
                      <span className="font-bold text-[#012462]">{formatNgn(effectivePrice)}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap justify-between gap-2">
                <span>Installation City / State:</span>
                <span className="font-bold text-[#012462]">{formData.city}, Nigeria</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-wrap justify-between items-baseline gap-2 text-sm">
              <span className="font-bold text-[#012462]">Total One-Time Fee:</span>
              <span className="text-xl font-extrabold text-[#005CCC]">{formatNgn(grandTotal)}</span>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
              <div className="flex flex-wrap items-center justify-between gap-1.5 font-bold">
                <span>Payment Terms:</span>
                <span className="text-emerald-700 uppercase">Pay After Installation & Testing</span>
              </div>
              <p className="text-[10px] text-emerald-800">
                Zero upfront deposit. You only pay after our mobile technician covertly installs and you test tracking live on your phone.
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-100 flex flex-wrap items-center justify-between gap-1.5 font-bold text-slate-700">
              <span>Renewal Fees:</span>
              <span className="text-emerald-700 font-extrabold uppercase">₦0 (No Renewals Ever)</span>
            </div>

            <p className="text-[11px] text-slate-500 text-center pt-2">
              {PRICING_SLOGAN}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => window.print()}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(`Hello VolterTrack, I have an official quote ${quoteReference} for ${vehicleCount} vehicle(s) (Total: ${formatNgn(grandTotal)}). I want to schedule installation.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 cursor-pointer transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Connect on WhatsApp ({COMPANY_CONTACT.phoneDisplay} • 24/7)</span>
            </a>
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs text-[#005CCC] hover:underline font-semibold"
            >
              ← Reconfigure Another Quote
            </button>
          </div>

        </div>
      ) : (
        /* Configuration & Submission Form */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Form Configuration */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">

            {/* Mobile Sticky Live Total Bar */}
            <div className="lg:hidden sticky top-[52px] sm:top-[64px] z-30 p-3.5 rounded-2xl bg-[#012462]/95 backdrop-blur-md text-white shadow-xl shadow-blue-950/25 border border-blue-400/30 flex items-center justify-between gap-2.5">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-200">
                    Total One-Time Fee
                  </span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#005CCC] text-white">
                    {vehicleCount} {vehicleCount === 1 ? 'Vehicle' : 'Vehicles'}
                  </span>
                </div>
                <p className="text-[10px] text-emerald-300 font-semibold mt-0.5 truncate">
                  ₦0 Renewals • Pay After Testing
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-lg sm:text-xl font-mono font-extrabold text-white">
                  {formatNgn(grandTotal)}
                </span>
                <a
                  href="#quote-step-2"
                  className="px-2.5 sm:px-3 py-2 rounded-xl bg-gradient-to-r from-[#005CCC] to-[#008CFF] text-white text-[11px] font-bold shadow-md whitespace-nowrap"
                >
                  Step 2 ↓
                </a>
              </div>
            </div>
            
            {/* Step 1: Vehicle & Year Configuration */}
            <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-xl space-y-5 sm:space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h3 className="text-base sm:text-lg font-bold text-[#012462] font-['Space_Grotesk'] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-[#005CCC] flex items-center justify-center text-xs font-bold shrink-0">1</span>
                  <span>Select Year For Each Vehicle</span>
                </h3>

                <button
                  type="button"
                  onClick={handleAddVehicle}
                  className="w-full sm:w-auto justify-center px-3.5 py-2.5 sm:py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-[#005CCC] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm shrink-0"
                >
                  <Plus className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Add Vehicle</span>
                </button>
              </div>

              {isFleetFlatRate ? (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5 text-emerald-950 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    <strong>Fleet Flat Rate Active:</strong> Installing on {vehicleCount} vehicles (more than 10 units) qualifies every vehicle for the <strong>₦120,000 flat rate</strong>!
                  </span>
                </div>
              ) : vehicleCount > 1 ? (
                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 flex items-center gap-2.5 text-[#012462] text-xs">
                  <Car className="w-4 h-4 text-[#005CCC] shrink-0" />
                  <span>
                    <strong>Year-Tier Pricing (1–10 Vehicles):</strong> Each vehicle is priced by model year. Installing on <strong>more than 10 vehicles</strong> unlocks our ₦120,000 flat rate!
                  </span>
                </div>
              ) : null}

              {/* Dynamic Vehicle Cards List */}
              <div className="space-y-3">
                {vehicles.map((veh, index) => {
                  const tier = PERSONAL_INSTALLATION_TIERS.find(t => t.id === veh.yearTierId);
                  const standardPrice = tier ? tier.priceNgn : 120000;
                  const effectivePrice = isFleetFlatRate ? FLEET_INSTALLATION_RATE : standardPrice;

                  return (
                    <div 
                      key={veh.id}
                      className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-[#005CCC] text-white flex items-center justify-center text-xs font-bold font-mono shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-xs font-bold text-[#012462]">
                            Vehicle #{index + 1}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-sm font-extrabold font-mono text-[#005CCC]">
                            {formatNgn(effectivePrice)}
                          </span>

                          {vehicles.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveVehicle(veh.id)}
                              className="w-9 h-9 sm:w-7 sm:h-7 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 flex items-center justify-center transition-colors cursor-pointer"
                              title="Remove vehicle"
                            >
                              <Trash2 className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Year Selector */}
                      <div>
                        <label className="text-[11px] font-bold text-slate-600 block mb-1.5">
                          Select Manufacturing Year Model:
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-1.5">
                          {PERSONAL_INSTALLATION_TIERS.map((t, tIdx) => {
                            const isSelected = veh.yearTierId === t.id;
                            const isLastOdd = tIdx === PERSONAL_INSTALLATION_TIERS.length - 1 && PERSONAL_INSTALLATION_TIERS.length % 2 === 1;
                            return (
                              <button
                                key={t.id}
                                type="button"
                                onClick={() => handleUpdateVehicleYear(veh.id, t.id)}
                                className={`px-2 py-2 sm:py-1.5 rounded-xl text-center text-xs font-bold transition-all cursor-pointer border min-h-[46px] ${
                                  isLastOdd ? 'col-span-2 sm:col-span-1' : ''
                                } ${
                                  isSelected
                                    ? 'bg-[#005CCC] text-white border-[#005CCC] shadow-sm'
                                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300'
                                }`}
                              >
                                <span className="block text-[11px]">{t.yearRange}</span>
                                <span className={`block text-[10px] font-mono font-medium ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                                  {isFleetFlatRate ? formatNgn(FLEET_INSTALLATION_RATE) : formatNgn(t.priceNgn)}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Contact & Deployment Form */}
            <form id="quote-step-2" onSubmit={handleSubmit} className="scroll-mt-32 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-[#012462] font-['Space_Grotesk'] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-50 text-[#005CCC] flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <span>Contact & On-Site Installation Details</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#012462] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Babatunde Lawal"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-base sm:text-xs font-medium focus:border-[#005CCC] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#012462] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="babatunde@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-base sm:text-xs font-medium focus:border-[#005CCC] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#012462] mb-1">Phone Number (WhatsApp Preferred) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 803 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-base sm:text-xs font-medium focus:border-[#005CCC] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#012462] mb-1">
                    {isPersonal ? 'Company / Business Name (Optional)' : 'Company / Fleet Organization *'}
                  </label>
                  <input
                    type="text"
                    required={!isPersonal}
                    placeholder={isPersonal ? 'Optional' : 'e.g. SwiftHaulage Logistics Ltd'}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-base sm:text-xs font-medium focus:border-[#005CCC] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#012462] mb-1">Installation State / City *</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-base sm:text-xs font-semibold focus:border-[#005CCC] focus:outline-none"
                  >
                    <option value="Lagos">Lagos (Main Hub)</option>
                    <option value="Abuja">Abuja FCT</option>
                    <option value="Port Harcourt">Port Harcourt (Rivers)</option>
                    <option value="Kano">Kano</option>
                    <option value="Ibadan">Ibadan (Oyo)</option>
                    <option value="Benin City">Benin City (Edo)</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Kaduna">Kaduna</option>
                    <option value="Nationwide / Other">Other State (Nationwide Deployment)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#012462] mb-1">Address / Installation Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Home address or Fleet Depot"
                    value={formData.installationAddress}
                    onChange={(e) => setFormData({ ...formData, installationAddress: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-base sm:text-xs font-medium focus:border-[#005CCC] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-4 rounded-xl gradient-bg-brand-h hover:opacity-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-blue-600/25 transition-all cursor-pointer min-h-[48px]"
              >
                {isSubmitting ? (
                  <span>Generating Official Proposal...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 shrink-0" />
                    <span>Generate Proposal (Pay After Installation & Testing)</span>
                  </>
                )}
              </button>
            </form>

          </div>

          {/* Right Column: Live Estimate Card */}
          <div className="lg:col-span-5 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#012462] text-white shadow-2xl space-y-6 lg:sticky lg:top-24">
            
            <div className="flex flex-wrap justify-between items-center gap-2 pb-4 border-b border-blue-900">
              <div>
                <p className="text-[10px] text-blue-300 uppercase tracking-wider font-mono">Quotation Summary</p>
                <h4 className="text-base font-bold text-white">
                  {isPersonal 
                    ? 'Personal Installation' 
                    : isFleetFlatRate 
                    ? `Fleet Flat Rate (${vehicleCount} Units)` 
                    : `Multi-Vehicle Installation (${vehicleCount} Units)`}
                </h4>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#005CCC] text-white">
                {vehicleCount} {vehicleCount === 1 ? 'Vehicle' : 'Vehicles'}
              </span>
            </div>

            <div className="space-y-3.5 text-xs text-blue-100">
              
              <div className="space-y-1.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold text-blue-300">Vehicle Breakdown:</span>
                {vehicles.map((v, i) => {
                  const t = PERSONAL_INSTALLATION_TIERS.find(tier => tier.id === v.yearTierId);
                  const rate = isFleetFlatRate ? FLEET_INSTALLATION_RATE : (t?.priceNgn || 120000);
                  return (
                    <div key={v.id} className="flex justify-between text-[11px]">
                      <span>Vehicle #{i + 1} ({t?.yearRange}):</span>
                      <span className="font-mono font-bold text-white">{formatNgn(rate)}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2 mt-4 shadow-lg">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-blue-100 uppercase tracking-wider">
                    Total One-Time Fee:
                  </span>
                  <span className="text-2xl sm:text-3xl font-mono font-extrabold text-white">
                    {formatNgn(grandTotal)}
                  </span>
                </div>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs">
                  <span className="text-emerald-300 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Renewal Fees:
                  </span>
                  <span className="font-bold text-emerald-300 font-mono uppercase">
                    ₦0 (No Renewals Ever)
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 space-y-1 text-[11px] text-emerald-200">
                <p className="font-bold text-emerald-300 flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5" />
                  PAY AFTER INSTALLATION & TESTING
                </p>
                <p className="text-[10px] leading-relaxed text-emerald-200/90">
                  Zero advance payment. Our technician installs on-site and you test tracking live before paying.
                </p>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-blue-200 space-y-2 border-t border-blue-900">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#008CFF] shrink-0" />
                <span>We Come To You With Zero Hidden Costs</span>
              </p>
              <p className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#008CFF] shrink-0" />
                <span>1-Year Hardware Replacement Warranty Included</span>
              </p>
            </div>

            <div className="text-center pt-2">
              <span className="text-[11px] font-mono font-bold tracking-widest text-blue-300 uppercase">
                {PRICING_SLOGAN}
              </span>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
