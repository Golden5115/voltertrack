import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Truck, 
  ShieldCheck,
  Send
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SENSOR_ADDONS, PRICING_PLANS } from '../data/pricingData';

export const QuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const defaultVehicles = parseInt(searchParams.get('vehicles') || '10');
  const defaultTier = searchParams.get('tier') || 'business';
  const defaultCurrency = (searchParams.get('currency') as 'NGN' | 'USD') || 'NGN';
  const defaultCycle = (searchParams.get('cycle') as 'monthly' | 'annual') || 'annual';

  const [vehicleCount, setVehicleCount] = useState<number>(defaultVehicles);
  const [planId, setPlanId] = useState<string>(defaultTier);
  const [currency, setCurrency] = useState<'NGN' | 'USD'>(defaultCurrency);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>(defaultCycle);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['engine-immobilizer']);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    city: 'Lagos',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activePlan = PRICING_PLANS.find(p => p.id === planId) || PRICING_PLANS[1];

  // Pricing math
  const hwUnit = currency === 'NGN' ? activePlan.hardwareCostNgn : activePlan.hardwareCostUsd;
  const installUnit = currency === 'NGN' ? activePlan.installationCostNgn : 12;
  const monthlySubUnit = currency === 'NGN' ? activePlan.monthlyNgn : activePlan.monthlyUsd;

  const subPerUnit = billingCycle === 'annual'
    ? Math.round(monthlySubUnit * 12 * 0.85)
    : monthlySubUnit;

  const addonPerUnit = selectedAddons.reduce((acc, addonId) => {
    const item = SENSOR_ADDONS.find(a => a.id === addonId);
    if (!item) return acc;
    return acc + (currency === 'NGN' ? item.costNgn : item.costUsd);
  }, 0);

  const totalHardware = (hwUnit + installUnit + addonPerUnit) * vehicleCount;
  const totalSubscription = subPerUnit * vehicleCount;

  const formatMoney = (val: number) => {
    if (currency === 'NGN') return `₦${val.toLocaleString()}`;
    return `$${val.toLocaleString()}`;
  };

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {}

      // Save lead
      const existingQuotes = JSON.parse(localStorage.getItem('voltertrack_quotes') || '[]');
      existingQuotes.push({
        ...formData,
        vehicleCount,
        planId,
        currency,
        billingCycle,
        selectedAddons,
        totalHardware,
        totalSubscription,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('voltertrack_quotes', JSON.stringify(existingQuotes));
    }, 750);
  };

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Custom Fleet Quote Generator | VolterTrack"
        description="Generate an official proposal for your vehicle fleet tracking hardware, setup, and monthly telematics software."
      />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <Calculator className="w-3.5 h-3.5" />
          <span>Custom Proposal Configurator</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          Get Your Official Fleet Quotation
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Configure your vehicle count, preferred sensors, and plan tier. Receive an instant estimate and itemized proposal sent to your email.
        </p>
      </section>

      {isSubmitted ? (
        <div className="max-w-2xl mx-auto p-8 md:p-12 rounded-3xl bg-white border border-blue-200 shadow-2xl text-center space-y-5 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-[#012462] font-['Space_Grotesk']">
              Proposal Dispatched!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Thank you, <strong className="text-[#005CCC]">{formData.fullName}</strong>. An official itemized fleet proposal for <strong className="text-[#012462]">{vehicleCount} vehicles</strong> has been sent to <strong className="text-[#012462]">{formData.email}</strong>.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 text-left space-y-1 font-mono">
            <p><span className="text-slate-400">Total Setup & Hardware:</span> {formatMoney(totalHardware)}</p>
            <p><span className="text-slate-400">Software Subscription ({billingCycle}):</span> {formatMoney(totalSubscription)}</p>
            <p><span className="text-slate-400">Deployment Location:</span> {formData.city}, Nigeria</p>
          </div>

          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold"
          >
            Create Another Quote
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form Configuration */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step A: Fleet Configuration */}
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-5">
              <h3 className="text-lg font-bold text-[#012462] font-['Space_Grotesk']">
                1. Vehicle & Plan Configuration
              </h3>

              {/* Vehicle slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-[#012462]">Vehicle Count:</span>
                  <span className="font-mono text-sm text-[#005CCC] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                    {vehicleCount} Vehicles
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="150"
                  value={vehicleCount}
                  onChange={(e) => setVehicleCount(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#005CCC]"
                />
              </div>

              {/* Plan Tier Selector */}
              <div className="grid grid-cols-3 gap-2 text-xs">
                {PRICING_PLANS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPlanId(p.id)}
                    className={`p-3 rounded-xl border text-center transition-all font-bold ${
                      planId === p.id 
                        ? 'bg-[#005CCC] text-white border-[#005CCC] shadow-sm' 
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>

              {/* Sensor Selection */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold text-[#012462]">Include Hardware Add-ons:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SENSOR_ADDONS.map(addon => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-2.5 rounded-xl border text-xs cursor-pointer flex items-center justify-between ${
                          isChecked ? 'bg-blue-50 border-[#005CCC] text-[#012462] font-bold' : 'bg-slate-50 border-slate-200 text-slate-600'
                        }`}
                      >
                        <span className="truncate">{addon.name}</span>
                        <span className="font-mono text-[10px] text-[#005CCC] shrink-0 ml-1">
                          +{currency === 'NGN' ? `₦${addon.costNgn.toLocaleString()}` : `$${addon.costUsd}`}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step B: Contact Information */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4">
              <h3 className="text-lg font-bold text-[#012462] font-['Space_Grotesk']">
                2. Contact & Deployment Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#012462] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Babatunde Lawal"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:border-[#005CCC] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#012462] mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="babatunde@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:border-[#005CCC] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#012462] mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 803 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:border-[#005CCC] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#012462] mb-1">Company Name</label>
                  <input
                    type="text"
                    placeholder="e.g. SwiftHaulage Logistics"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:border-[#005CCC] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#012462] mb-1">Primary State / City of Installation *</label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold focus:border-[#005CCC] focus:outline-none"
                >
                  <option value="Lagos">Lagos (Headquarters & Field Hub)</option>
                  <option value="Abuja">Abuja FCT</option>
                  <option value="Port Harcourt">Port Harcourt (Rivers)</option>
                  <option value="Kano">Kano</option>
                  <option value="Ibadan">Ibadan (Oyo)</option>
                  <option value="Nationwide / Other">Other State (Nationwide Dispatch)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl gradient-bg-brand-h hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all pt-3"
              >
                {isSubmitting ? (
                  <span>Generating Official Proposal...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Official Proposal & Cost Breakdown</span>
                  </>
                )}
              </button>
            </form>

          </div>

          {/* Right Column: Live Estimate Summary Card */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-[#012462] text-white shadow-2xl space-y-6 sticky top-24">
            
            <div className="flex justify-between items-center pb-4 border-b border-blue-900">
              <div>
                <p className="text-[10px] text-blue-300 uppercase tracking-wider font-mono">Quotation Summary</p>
                <h4 className="text-base font-bold text-white">{activePlan.name} Tier</h4>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#005CCC] text-white">
                {vehicleCount} Vehicles
              </span>
            </div>

            <div className="space-y-3 text-xs text-blue-100">
              <div className="flex justify-between">
                <span>Hardware Units ({vehicleCount}x):</span>
                <span className="font-mono font-bold text-white">{formatMoney(hwUnit * vehicleCount)}</span>
              </div>
              <div className="flex justify-between">
                <span>Professional Installation:</span>
                <span className="font-mono font-bold text-white">{formatMoney(installUnit * vehicleCount)}</span>
              </div>
              {addonPerUnit > 0 && (
                <div className="flex justify-between">
                  <span>Selected Sensors & Relays:</span>
                  <span className="font-mono font-bold text-[#008CFF]">{formatMoney(addonPerUnit * vehicleCount)}</span>
                </div>
              )}
              
              <div className="pt-3 border-t border-blue-900 flex justify-between font-bold text-sm">
                <span>Initial One-Time Setup:</span>
                <span className="font-mono text-[#008CFF]">{formatMoney(totalHardware)}</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 mt-3 space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-white">
                    Subscription ({billingCycle}):
                  </span>
                  <span className="text-xl font-mono font-bold text-[#008CFF]">
                    {formatMoney(totalSubscription)}
                  </span>
                </div>
                <p className="text-[10px] text-blue-200">
                  {billingCycle === 'annual' ? 'Billed annually with 15% discount applied.' : 'Billed monthly.'}
                </p>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-blue-200 space-y-1.5 border-t border-blue-900">
              <p className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#008CFF]" /> 1-Year Hardware Replacement Warranty Included
              </p>
              <p className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#008CFF]" /> Professional Covert Installation Available Nationwide
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
