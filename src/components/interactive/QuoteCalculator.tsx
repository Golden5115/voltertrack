import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  ArrowRight, 
  Truck,
  Car,
  Building2,
  CheckCircle2,
  Plus,
  Trash2,
  MapPin,
  ShieldCheck,
  CreditCard,
  Sparkles
} from 'lucide-react';
import { 
  PERSONAL_INSTALLATION_TIERS, 
  FLEET_INSTALLATION_RATE, 
  PRICING_SLOGAN
} from '../../data/pricingData';

interface VehicleConfig {
  id: string;
  yearTierId: string;
}

export const QuoteCalculator: React.FC = () => {
  // Mode: 'individual' (select year for each vehicle) or 'bulk' (fast slider for large fleets)
  const [configMode, setConfigMode] = useState<'individual' | 'bulk'>('individual');
  
  // Individual vehicles list
  const [vehicles, setVehicles] = useState<VehicleConfig[]>([
    { id: 'v-1', yearTierId: '2009-2013' }
  ]);

  // Bulk count (for large fleets of more than 10 vehicles)
  const [bulkCount, setBulkCount] = useState<number>(12);

  const totalVehicleCount = configMode === 'individual' ? vehicles.length : bulkCount;
  const isSingle = totalVehicleCount === 1;
  const isFleetFlatRate = totalVehicleCount > 10; // 120k flat rate applies only if installing on fleet of more than 10 vehicles

  // Add a vehicle in individual mode
  const handleAddVehicle = () => {
    if (vehicles.length >= 25) {
      setConfigMode('bulk');
      setBulkCount(vehicles.length + 1);
      return;
    }
    const newId = `v-${Date.now()}`;
    setVehicles(prev => [...prev, { id: newId, yearTierId: '2014-2017' }]);
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

  // Calculate base installation total
  const getVehicleStandardPrice = (yearTierId: string) => {
    const tier = PERSONAL_INSTALLATION_TIERS.find(t => t.id === yearTierId);
    return tier ? tier.priceNgn : 120000;
  };

  let totalBaseInstallation = 0;
  let totalStandardWorth = 0;

  if (configMode === 'individual') {
    if (!isFleetFlatRate) {
      // 1 to 10 vehicles: price is based on each vehicle's specific year tier
      totalBaseInstallation = vehicles.reduce((sum, v) => sum + getVehicleStandardPrice(v.yearTierId), 0);
      totalStandardWorth = totalBaseInstallation;
    } else {
      // More than 10 vehicles: every vehicle gets the ₦120,000 flat rate!
      totalBaseInstallation = vehicles.length * FLEET_INSTALLATION_RATE;
      totalStandardWorth = vehicles.reduce((sum, v) => sum + getVehicleStandardPrice(v.yearTierId), 0);
    }
  } else {
    // Bulk fleet mode (more than 10 vehicles): flat rate ₦120,000 per vehicle
    totalBaseInstallation = bulkCount * FLEET_INSTALLATION_RATE;
    totalStandardWorth = bulkCount * 160000; // Average standard worth
  }

  // Savings calculation if fleet rate discount applies
  const totalSavings = Math.max(0, totalStandardWorth - totalBaseInstallation);

  const grandTotal = totalBaseInstallation;

  const formatNgn = (val: number) => `₦${val.toLocaleString()}`;

  return (
    <div className="w-full rounded-2xl md:rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-6 md:p-10 shadow-2xl shadow-blue-950/8 relative overflow-x-clip">
      
      {/* Decorative subtle blue glow */}
      <div className="absolute -top-24 -right-24 w-64 sm:w-80 h-64 sm:h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* CORE SELLING POINTS BANNER: We Come To You • Pay After Testing */}
      <div className="mb-6 sm:mb-8 p-3.5 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/50 to-emerald-50/50 border border-blue-200 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 divide-y md:divide-y-0 md:divide-x divide-blue-200/80">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#012462] uppercase tracking-wider">
                We Come To You Nationwide
              </p>
              <p className="text-[11px] text-slate-600">
                Covert on-site installation at your home, office, or depot with <strong className="text-blue-700">zero hidden costs</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-5">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
                Pay After Installation & Testing
              </p>
              <p className="text-[11px] text-slate-600">
                You pay <strong className="text-emerald-700">ONLY AFTER</strong> our technician finishes, tests tracking, and verifies engine cutoff on your phone.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-[#005CCC] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Interactive Installation Configurator</span>
          </div>
          <h3 className="text-xl md:text-3xl font-extrabold text-[#012462] mt-1 font-['Space_Grotesk']">
            Calculate Your Vehicle Tracking Investment
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Configure vehicle years individually • One-Time Payment • <strong className="text-emerald-700 font-bold">Zero Renewal Fees</strong>
          </p>
        </div>

        {/* Mode Switch: Individual Vehicles vs Bulk Fleet */}
        <div className="flex w-full md:w-auto rounded-xl bg-slate-100 p-1 border border-slate-200 self-start md:self-auto">
          <button
            type="button"
            onClick={() => setConfigMode('individual')}
            className={`flex-1 md:flex-none px-3 sm:px-3.5 py-2 sm:py-1.5 text-[11px] sm:text-xs font-bold rounded-lg transition-all cursor-pointer text-center ${
              configMode === 'individual'
                ? 'bg-[#005CCC] text-white shadow-sm'
                : 'text-slate-600 hover:text-[#012462]'
            }`}
          >
            Per Vehicle ({vehicles.length})
          </button>
          <button
            type="button"
            onClick={() => setConfigMode('bulk')}
            className={`flex-1 md:flex-none px-3 sm:px-3.5 py-2 sm:py-1.5 text-[11px] sm:text-xs font-bold rounded-lg transition-all cursor-pointer text-center ${
              configMode === 'bulk'
                ? 'bg-[#005CCC] text-white shadow-sm'
                : 'text-slate-600 hover:text-[#012462]'
            }`}
          >
            Quick Fleet Slider
          </button>
        </div>
      </div>

      {/* Grid: Configurator on Left, Live Receipt on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-4 sm:pt-8 items-start">
        
        {/* Left Column: Vehicle Year Selectors */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">

          {/* Mobile Sticky Live Total Strip (keeps pricing total always in view on mobile) */}
          <div className="lg:hidden sticky top-[52px] sm:top-[64px] z-30 p-3.5 rounded-2xl bg-[#012462]/95 backdrop-blur-md text-white shadow-xl shadow-blue-950/25 border border-blue-400/30 flex items-center justify-between gap-2.5">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-200">
                  Total One-Time Fee
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#005CCC] text-white">
                  {totalVehicleCount} {totalVehicleCount === 1 ? 'Vehicle' : 'Vehicles'}
                </span>
              </div>
              <p className="text-[10px] text-emerald-300 font-semibold mt-0.5 truncate">
                {totalSavings > 0
                  ? `Saved ${formatNgn(totalSavings)} (₦120k Fleet Rate)`
                  : '₦0 Renewals • Pay After Testing'}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-lg sm:text-xl font-mono font-extrabold text-white">
                {formatNgn(grandTotal)}
              </span>
              <Link
                to={`/quote?vehicles=${totalVehicleCount}&total=${grandTotal}`}
                className="px-2.5 sm:px-3 py-2 rounded-xl bg-gradient-to-r from-[#005CCC] to-[#008CFF] text-white text-[11px] font-bold shadow-md whitespace-nowrap"
              >
                Lock In →
              </Link>
            </div>
          </div>
          
          {/* INDIVIDUAL VEHICLE YEAR CONFIGURATION */}
          {configMode === 'individual' ? (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-bold text-[#012462] uppercase tracking-wider flex items-center gap-1.5 font-['Space_Grotesk']">
                    <Car className="w-4 h-4 text-[#005CCC] shrink-0" />
                    <span>Select Year Model For Each Vehicle</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {isFleetFlatRate
                      ? `Fleet Flat Rate Active (11+ vehicles): All ${vehicles.length} vehicles qualify for the ₦120,000 flat rate!`
                      : isSingle 
                      ? 'Select your vehicle manufacturing year below.' 
                      : `Configuring ${vehicles.length} vehicles individually (1–10 vehicles). Fleets of more than 10 vehicles qualify for the ₦120,000 flat rate.`}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleAddVehicle}
                  className="w-full sm:w-auto justify-center px-3.5 py-2.5 sm:py-2 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-[#005CCC] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm shrink-0"
                >
                  <Plus className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Add Another Vehicle</span>
                </button>
              </div>

              {/* Multi-Vehicle / Fleet Status Alert */}
              {isFleetFlatRate ? (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5 text-emerald-950 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    <strong>Fleet Discount Active:</strong> Installing on {vehicles.length} vehicles (more than 10 units) qualifies every vehicle for the <strong>₦120,000 flat rate</strong>, regardless of year!
                  </span>
                </div>
              ) : vehicles.length > 1 ? (
                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 flex items-center gap-2.5 text-[#012462] text-xs">
                  <Car className="w-4 h-4 text-[#005CCC] shrink-0" />
                  <span>
                    <strong>Year-Tier Pricing (1–10 Vehicles):</strong> Each vehicle is priced by its model year. Installing on <strong>more than 10 vehicles</strong> unlocks our flat ₦120,000 rate per vehicle!
                  </span>
                </div>
              ) : null}

              {/* Dynamic Vehicle Cards List */}
              <div className="space-y-3">
                {vehicles.map((veh, index) => {
                  const standardPrice = getVehicleStandardPrice(veh.yearTierId);
                  const effectivePrice = isFleetFlatRate ? FLEET_INSTALLATION_RATE : standardPrice;
                  const hasDiscount = isFleetFlatRate && standardPrice > FLEET_INSTALLATION_RATE;

                  return (
                    <div 
                      key={veh.id}
                      className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2.5 hover:border-blue-200 transition-colors"
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
                          <div className="text-right">
                            {hasDiscount && (
                              <span className="text-[10px] text-slate-400 line-through mr-1.5 font-mono">
                                {formatNgn(standardPrice)}
                              </span>
                            )}
                            <span className="text-sm font-extrabold font-mono text-[#005CCC]">
                              {formatNgn(effectivePrice)}
                            </span>
                          </div>

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

                      {/* Year Selector Dropdown / Radio Grid */}
                      <div>
                        <label className="text-[11px] font-bold text-slate-600 block mb-1.5">
                          Select Manufacturing Year:
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-1.5">
                          {PERSONAL_INSTALLATION_TIERS.map((tier, tIdx) => {
                            const isSelected = veh.yearTierId === tier.id;
                            const isLastOdd = tIdx === PERSONAL_INSTALLATION_TIERS.length - 1 && PERSONAL_INSTALLATION_TIERS.length % 2 === 1;
                            return (
                              <button
                                key={tier.id}
                                type="button"
                                onClick={() => handleUpdateVehicleYear(veh.id, tier.id)}
                                className={`px-2.5 py-2.5 sm:py-2 rounded-xl text-center text-xs font-bold transition-all cursor-pointer border min-h-[48px] ${
                                  isLastOdd ? 'col-span-2 sm:col-span-1' : ''
                                } ${
                                  isSelected
                                    ? 'bg-[#005CCC] text-white border-[#005CCC] shadow-sm'
                                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300'
                                }`}
                              >
                                <span className="block text-[11px]">{tier.yearRange}</span>
                                <span className={`block text-[10px] font-mono font-medium ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                                  {isFleetFlatRate ? formatNgn(FLEET_INSTALLATION_RATE) : formatNgn(tier.priceNgn)}
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

              {/* Bottom Add Vehicle trigger */}
              <button
                type="button"
                onClick={handleAddVehicle}
                className="w-full py-3 rounded-2xl border-2 border-dashed border-blue-200 hover:border-[#005CCC] text-[#005CCC] hover:bg-blue-50/50 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>+ Add Vehicle #{vehicles.length + 1} to Quote</span>
              </button>
            </div>
          ) : (
            /* BULK FLEET SLIDER (For more than 10 commercial vehicles) */
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-bold text-[#012462] flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#005CCC] shrink-0" />
                    <span>Bulk Fleet Size (₦120,000 / Vehicle Flat Rate)</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fast estimate for commercial fleets and haulage operators (more than 10 vehicles).
                  </p>
                </div>
                <span className="self-start sm:self-auto text-sm sm:text-base font-mono font-extrabold text-[#005CCC] bg-white px-3 py-1 rounded-xl border border-blue-200 shadow-sm shrink-0">
                  {bulkCount} Vehicles
                </span>
              </div>

              <input
                type="range"
                min="11"
                max="150"
                value={bulkCount}
                onChange={(e) => setBulkCount(Math.max(11, parseInt(e.target.value) || 11))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#005CCC]"
              />

              <div className="flex flex-wrap gap-2 pt-1">
                {[11, 15, 25, 50, 75, 100].map(count => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setBulkCount(count)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                      bulkCount === count
                        ? 'bg-[#005CCC] text-white'
                        : 'bg-white border border-slate-200 text-slate-700 hover:border-blue-300'
                    }`}
                  >
                    {count} Units
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right Column: Live Estimate & Guarantee Receipt Card */}
        <div className="lg:col-span-5 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-[#012462] text-white shadow-2xl space-y-5 sm:space-y-6 lg:sticky lg:top-24 relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#008CFF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 sm:space-y-5 relative z-10">
            
            {/* Header / Tier Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-blue-900/80">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                Official Cost Summary
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-bold px-2.5 sm:px-3 py-1 rounded-full bg-[#005CCC] text-white shadow-sm">
                {isSingle 
                  ? 'Personal (1 Vehicle)' 
                  : isFleetFlatRate 
                  ? `Fleet Flat Rate (${totalVehicleCount} Vehicles)` 
                  : `Multi-Vehicle (${totalVehicleCount} Vehicles)`}
              </span>
            </div>

            {/* Itemized Breakdown */}
            <div className="space-y-3 text-xs text-blue-100">
              
              <div className="flex justify-between items-start gap-3">
                <span>
                  {isSingle 
                    ? `Installation (${vehicles[0]?.yearTierId || 'Single'} Model):` 
                    : isFleetFlatRate
                    ? `Fleet Flat Rate (₦120,000 × ${totalVehicleCount}):`
                    : `Installation (${totalVehicleCount} Vehicles, Year-Tiered):`}
                </span>
                <span className="font-mono font-bold text-white text-sm shrink-0">
                  {formatNgn(totalBaseInstallation)}
                </span>
              </div>

              {totalSavings > 0 && (
                <div className="flex justify-between items-center text-emerald-300 font-bold bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-500/40">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    Fleet Flat Rate Savings:
                  </span>
                  <span className="font-mono">
                    -{formatNgn(totalSavings)}
                  </span>
                </div>
              )}

              {/* Total Box */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-2 mt-4 shadow-lg">
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

              {/* KEY CUSTOMER GUARANTEE CALLOUT */}
              <div className="p-3.5 rounded-2xl bg-emerald-900/40 border border-emerald-500/50 space-y-1.5 text-[11px] text-emerald-200">
                <p className="font-bold text-emerald-300 flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5" />
                  PAY AFTER INSTALLATION & TESTING
                </p>
                <p className="leading-relaxed">
                  No upfront deposit. You only pay after our mobile technician comes to you, installs covertly, and you test tracking live on your phone.
                </p>
              </div>

              {/* Slogan */}
              <div className="text-center pt-1">
                <span className="text-[11px] font-mono font-bold tracking-widest text-blue-300 uppercase">
                  {PRICING_SLOGAN}
                </span>
              </div>

            </div>

          </div>

          {/* CTA */}
          <div className="pt-2 space-y-2.5 relative z-10">
            <Link
              to={`/quote?vehicles=${totalVehicleCount}&total=${grandTotal}`}
              className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-[#005CCC] to-[#008CFF] hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 transition-all cursor-pointer"
            >
              <span>Lock In Installation Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <p className="text-[10px] text-center text-blue-300">
              We come to you nationwide with zero hidden costs • 1-Year hardware warranty.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
