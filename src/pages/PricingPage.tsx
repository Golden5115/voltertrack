import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Sparkles, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  Layers,
  Wrench
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PRICING_PLANS, SENSOR_ADDONS } from '../data/pricingData';
import { QuoteCalculator } from '../components/interactive/QuoteCalculator';

export const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');

  return (
    <div className="space-y-20 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Transparent Fleet Pricing & Plans | VolterTrack"
        description="Clear, transparent pricing for hardware GPS trackers, nationwide installation, and monthly telematics software subscriptions."
      />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Straightforward, Transparent Investment</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          Predictable fleet pricing with zero hidden fees.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Hardware trackers include a 1-year replacement warranty. Subscriptions include 4G telemetry data SIM, cloud servers, and live support.
        </p>

        {/* Currency & Billing Toggles */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <div className="flex rounded-xl bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setCurrency('NGN')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                currency === 'NGN' ? 'bg-[#005CCC] text-white shadow-sm' : 'text-slate-600 hover:text-[#012462]'
              }`}
            >
              NGN (₦)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                currency === 'USD' ? 'bg-[#005CCC] text-white shadow-sm' : 'text-slate-600 hover:text-[#012462]'
              }`}
            >
              USD ($)
            </button>
          </div>

          <div className="flex rounded-xl bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1 ${
                billingCycle === 'annual' ? 'bg-[#005CCC] text-white shadow-sm' : 'text-slate-600 hover:text-[#012462]'
              }`}
            >
              Annual Billing <span className="text-[10px] text-blue-100 bg-[#012462] px-1 rounded">-15%</span>
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                billingCycle === 'monthly' ? 'bg-[#005CCC] text-white shadow-sm' : 'text-slate-600 hover:text-[#012462]'
              }`}
            >
              Monthly Billing
            </button>
          </div>
        </div>
      </section>

      {/* 3 Tier Pricing Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {PRICING_PLANS.map((plan) => {
          const isPop = plan.popular;
          const monthlySub = currency === 'NGN' ? plan.monthlyNgn : plan.monthlyUsd;
          const finalSub = billingCycle === 'annual' ? Math.round(monthlySub * 0.85) : monthlySub;
          const hw = currency === 'NGN' ? plan.hardwareCostNgn : plan.hardwareCostUsd;
          const install = currency === 'NGN' ? plan.installationCostNgn : 12;

          return (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                isPop
                  ? 'bg-white border-2 border-[#005CCC] shadow-2xl shadow-blue-950/10 -translate-y-2'
                  : 'bg-white border border-slate-200 shadow-lg'
              }`}
            >
              {isPop && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full gradient-bg-brand-h text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                  Most Popular for Fleets
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#012462]">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{plan.target}</p>
                </div>

                {/* Subscription Cost */}
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 font-medium">Software Subscription</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#012462] font-mono">
                      {currency === 'NGN' ? `₦${finalSub.toLocaleString()}` : `$${finalSub}`}
                    </span>
                    <span className="text-xs text-slate-500">/ vehicle / month</span>
                  </div>
                </div>

                {/* Hardware & Setup Breakdown */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                  <div className="flex justify-between text-slate-600">
                    <span>Hardware Tracker Unit:</span>
                    <span className="font-mono font-bold text-[#012462]">
                      {currency === 'NGN' ? `₦${hw.toLocaleString()}` : `$${hw}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Professional Installation:</span>
                    <span className="font-mono font-bold text-[#012462]">
                      {currency === 'NGN' ? `₦${install.toLocaleString()}` : `$${install}`}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 pt-2">
                  <p className="text-xs font-bold text-[#012462] uppercase tracking-wider">
                    Included Features:
                  </p>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3] mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <Link
                  to={`/quote?tier=${plan.id}&currency=${currency}&cycle=${billingCycle}`}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all ${
                    isPop
                      ? 'gradient-bg-brand-h text-white shadow-blue-600/25 hover:opacity-95'
                      : 'bg-slate-100 hover:bg-slate-200 text-[#012462]'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Sensor Add-on Catalog (PRD Section 29) */}
      <section className="p-8 md:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
        <div>
          <span className="text-xs font-mono font-bold text-[#005CCC] uppercase tracking-wider">
            Hardware Add-ons & Accessories
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#012462] font-['Space_Grotesk'] mt-1">
            Optional Specialized Telematics Sensors
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Customize your trackers with modular relays, ultrasonic level sensors, temperature probes, and RFID reader keyfobs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SENSOR_ADDONS.map((sensor) => (
            <div key={sensor.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-[#012462]">{sensor.name}</h4>
                {sensor.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-[#005CCC] font-bold border border-blue-200">
                    {sensor.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {sensor.description}
              </p>
              <div className="pt-2 flex justify-between items-center text-xs font-mono font-bold">
                <span className="text-slate-500">Hardware Unit:</span>
                <span className="text-[#005CCC]">
                  {currency === 'NGN' ? `+₦${sensor.costNgn.toLocaleString()}` : `+$${sensor.costUsd}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Slider Configurator */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#012462]">Interactive Cost Estimator</h2>
        <QuoteCalculator />
      </section>

    </div>
  );
};
