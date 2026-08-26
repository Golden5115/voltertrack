import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Truck
} from 'lucide-react';
import { SENSOR_ADDONS } from '../../data/pricingData';

export const QuoteCalculator: React.FC = () => {
  const [vehicleCount, setVehicleCount] = useState<number>(10);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['engine-immobilizer']);

  // Base pricing logic
  const isPersonal = vehicleCount <= 3;
  const isEnterprise = vehicleCount >= 50;
  
  // Hardware unit cost
  const baseHardwareNgn = isPersonal ? 35000 : isEnterprise ? 45000 : 40000;
  const baseHardwareUsd = isPersonal ? 40 : isEnterprise ? 55 : 48;
  
  // Installation per vehicle
  const installFeeNgn = 10000;
  const installFeeUsd = 12;

  // Subscription per vehicle per month
  const subMonthlyNgn = isPersonal ? 3500 : isEnterprise ? 6500 : 5000;
  const subMonthlyUsd = isPersonal ? 5 : isEnterprise ? 12 : 8;

  // Annual discount: 15% off subscription
  const subPerVehicle = billingCycle === 'annual'
    ? (currency === 'NGN' ? Math.round(subMonthlyNgn * 12 * 0.85) : Math.round(subMonthlyUsd * 12 * 0.85))
    : (currency === 'NGN' ? subMonthlyNgn : subMonthlyUsd);

  // Addons total per vehicle
  const addonPerVehicle = selectedAddons.reduce((acc, addonId) => {
    const item = SENSOR_ADDONS.find(a => a.id === addonId);
    if (!item) return acc;
    return acc + (currency === 'NGN' ? item.costNgn : item.costUsd);
  }, 0);

  // Totals
  const totalHardware = (currency === 'NGN' ? baseHardwareNgn : baseHardwareUsd) * vehicleCount;
  const totalInstall = (currency === 'NGN' ? installFeeNgn : installFeeUsd) * vehicleCount;
  const totalAddons = addonPerVehicle * vehicleCount;
  const totalOneTime = totalHardware + totalInstall + totalAddons;
  const totalSubscription = subPerVehicle * vehicleCount;

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const formatMoney = (amount: number) => {
    if (currency === 'NGN') {
      return `₦${amount.toLocaleString()}`;
    }
    return `$${amount.toLocaleString()}`;
  };

  return (
    <div className="w-full rounded-2xl md:rounded-3xl bg-white border border-slate-200/90 p-6 md:p-8 shadow-xl shadow-blue-950/5 relative overflow-hidden">
      
      {/* Decorative subtle blue blur */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Header & Currency / Billing Toggle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-[#005CCC] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Interactive ROI & Fleet Cost Configurator</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#012462] mt-1 font-['Space_Grotesk']">
            Calculate Your Fleet Investment
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Transparent pricing: Hardware + Professional Setup + Software Subscription.
          </p>
        </div>

        {/* Currency & Billing Cycle Toggles */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          {/* Currency */}
          <div className="flex rounded-xl bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setCurrency('NGN')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                currency === 'NGN' ? 'bg-[#005CCC] text-white shadow-sm' : 'text-slate-600 hover:text-[#012462]'
              }`}
            >
              NGN (₦)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                currency === 'USD' ? 'bg-[#005CCC] text-white shadow-sm' : 'text-slate-600 hover:text-[#012462]'
              }`}
            >
              USD ($)
            </button>
          </div>

          {/* Billing Cycle */}
          <div className="flex rounded-xl bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all flex items-center gap-1 ${
                billingCycle === 'annual' ? 'bg-[#005CCC] text-white shadow-sm' : 'text-slate-600 hover:text-[#012462]'
              }`}
            >
              Annual <span className="text-[10px] text-blue-100 bg-[#012462] px-1 rounded">-15%</span>
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                billingCycle === 'monthly' ? 'bg-[#005CCC] text-white shadow-sm' : 'text-slate-600 hover:text-[#012462]'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>
      </div>

      {/* Grid: Configurator on Left, Instant Estimate Breakdown on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        
        {/* Left Col: Vehicle Slider & Addons */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Vehicle Count Slider */}
          <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-[#012462] flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#005CCC]" />
                Fleet Size (Number of Vehicles)
              </label>
              <span className="text-lg font-mono font-bold text-[#005CCC] bg-blue-50 px-3 py-0.5 rounded-lg border border-blue-200">
                {vehicleCount} {vehicleCount === 1 ? 'Vehicle' : 'Vehicles'}
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="150"
              step="1"
              value={vehicleCount}
              onChange={(e) => setVehicleCount(parseInt(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#005CCC]"
            />

            <div className="flex justify-between text-[10px] font-mono text-slate-500 font-semibold">
              <span>1 (Solo)</span>
              <span>25 (Fleet)</span>
              <span>50 (Enterprise)</span>
              <span>100+ (Custom)</span>
            </div>
          </div>

          {/* Optional Sensors & Hardware Add-ons */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#012462]">
              Hardware Upgrades & Sensor Add-ons (Per Vehicle)
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SENSOR_ADDONS.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      isChecked
                        ? 'bg-blue-50/80 border-[#005CCC] shadow-sm'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isChecked ? 'bg-[#005CCC] border-[#005CCC] text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-bold text-[#012462] leading-tight">
                          {addon.name}
                        </span>
                      </div>
                      {addon.badge && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-100 text-[#005CCC] font-bold border border-blue-200 shrink-0">
                          {addon.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#005CCC] font-mono font-bold mt-1.5 pl-6">
                      +{currency === 'NGN' ? `₦${addon.costNgn.toLocaleString()}` : `$${addon.costUsd}`} / unit
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Col: Instant Cost Estimate Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-[#012462] text-white shadow-xl">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-blue-900">
              <span className="text-xs font-bold uppercase text-blue-200">Estimate Tier</span>
              <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-[#005CCC] text-white">
                {isEnterprise ? 'Enterprise Plan' : isPersonal ? 'Personal Plan' : 'Business Fleet'}
              </span>
            </div>

            {/* Breakdown List */}
            <div className="space-y-2.5 text-xs text-blue-100">
              <div className="flex justify-between">
                <span>GPS Hardware Trackers ({vehicleCount}x):</span>
                <span className="font-mono font-bold text-white">{formatMoney(totalHardware)}</span>
              </div>

              <div className="flex justify-between">
                <span>Professional Installation:</span>
                <span className="font-mono font-bold text-white">{formatMoney(totalInstall)}</span>
              </div>

              {totalAddons > 0 && (
                <div className="flex justify-between">
                  <span>Selected Sensors & Relays:</span>
                  <span className="font-mono font-bold text-[#008CFF]">{formatMoney(totalAddons)}</span>
                </div>
              )}

              <div className="pt-2 border-t border-blue-900 flex justify-between text-blue-300 text-[11px]">
                <span>Total One-Time Initial Setup:</span>
                <span className="font-mono font-bold text-white">{formatMoney(totalOneTime)}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 mt-3 space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-white">
                    Software Subscription ({billingCycle}):
                  </span>
                  <span className="text-xl font-mono font-extrabold text-[#008CFF]">
                    {formatMoney(totalSubscription)}
                  </span>
                </div>
                <p className="text-[10px] text-blue-200">
                  {billingCycle === 'annual' ? 'Billed annually with 15% fleet savings included.' : 'Billed monthly with no long-term lock-in.'}
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-6 space-y-2">
            <Link
              to={`/quote?vehicles=${vehicleCount}&cycle=${billingCycle}&currency=${currency}&tier=${isEnterprise ? 'enterprise' : isPersonal ? 'personal' : 'business'}`}
              className="w-full py-3.5 px-4 rounded-xl bg-[#008CFF] hover:bg-[#005CCC] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all"
            >
              <span>Lock In Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <p className="text-[10px] text-center text-blue-300">
              Zero obligation. Hardware includes 1-year replacement warranty.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
