import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Check
} from 'lucide-react';

interface DemoBookingProps {
  onSuccess?: () => void;
  embedded?: boolean;
}

export const DemoBookingModal: React.FC<DemoBookingProps> = ({ embedded = false }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    fleetSize: '10-25 vehicles',
    industry: 'Logistics & Haulage',
    selectedModules: ['Live GPS Tracking', 'Route History & Playback', 'Geofencing'],
    preferredDate: '',
    preferredTime: '11:00 AM (WAT)',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleModule = (mod: string) => {
    if (formData.selectedModules.includes(mod)) {
      setFormData({
        ...formData,
        selectedModules: formData.selectedModules.filter(m => m !== mod)
      });
    } else {
      setFormData({
        ...formData,
        selectedModules: [...formData.selectedModules, mod]
      });
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
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }

      // Store lead in localStorage
      const existingLeads = JSON.parse(localStorage.getItem('voltertrack_leads') || '[]');
      existingLeads.push({
        ...formData,
        type: 'demo_booking',
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('voltertrack_leads', JSON.stringify(existingLeads));
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 md:p-12 rounded-3xl bg-white border border-blue-200 shadow-2xl text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-[#012462] font-['Space_Grotesk']">
            Demo Scheduled Successfully!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Thank you, <strong className="text-[#005CCC]">{formData.fullName}</strong>. A VolterTrack Fleet Solutions Specialist has reserved your session.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 max-w-md mx-auto text-left space-y-1.5 font-mono">
          <p><span className="text-slate-400">Company:</span> {formData.company || 'Private Fleet'}</p>
          <p><span className="text-slate-400">Fleet Size:</span> {formData.fleetSize}</p>
          <p><span className="text-slate-400">Scheduled Time:</span> {formData.preferredDate || 'Tomorrow'} at {formData.preferredTime}</p>
          <p><span className="text-slate-400">Confirmation Sent:</span> {formData.email}</p>
        </div>

        <div className="pt-2">
          <button
            onClick={() => {
              setIsSubmitted(false);
              setStep(1);
            }}
            className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
          >
            Book Another Demo Session
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white border border-slate-200/90 p-6 md:p-8 shadow-xl shadow-blue-950/5 relative overflow-hidden">
      
      {/* Progress Steps Header */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-200">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-mono font-bold text-sm">
            {step}/3
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#005CCC]">
              {step === 1 ? 'Step 1: Fleet Profile' : step === 2 ? 'Step 2: Platform Modules' : 'Step 3: Schedule & Contact'}
            </p>
            <h4 className="text-base font-bold text-[#012462]">
              {step === 1 ? 'Tell us about your vehicles' : step === 2 ? 'What would you like to see?' : 'Pick a time that suits you'}
            </h4>
          </div>
        </div>

        {/* Step dots */}
        <div className="flex items-center gap-1.5">
          {[1, 2, 3].map(s => (
            <span
              key={s}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                s === step ? 'w-6 bg-[#005CCC]' : s < step ? 'bg-emerald-500' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="pt-6 space-y-6">
        
        {/* STEP 1: Fleet Profile */}
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div>
              <label className="block text-xs font-bold text-[#012462] mb-1.5">
                Number of Vehicles in Fleet *
              </label>
              <select
                value={formData.fleetSize}
                onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold focus:border-[#005CCC] focus:outline-none"
              >
                <option value="1-3 vehicles">1 - 3 Vehicles (Personal / SME)</option>
                <option value="4-10 vehicles">4 - 10 Vehicles (Growing Fleet)</option>
                <option value="10-25 vehicles">10 - 25 Vehicles (Commercial Fleet)</option>
                <option value="25-100 vehicles">25 - 100 Vehicles (Mid-to-Large Fleet)</option>
                <option value="100+ vehicles">100+ Vehicles (Enterprise Fleet)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#012462] mb-1.5">
                Industry Sector *
              </label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold focus:border-[#005CCC] focus:outline-none"
              >
                <option value="Logistics & Haulage">Logistics & Haulage</option>
                <option value="Interstate Transportation">Interstate Transportation & Commercial Bus</option>
                <option value="Last-Mile Delivery">Last-Mile Delivery & Courier</option>
                <option value="Construction & Heavy Machinery">Construction & Heavy Machinery</option>
                <option value="Corporate Fleet">Corporate Organization & Pool Cars</option>
                <option value="Car Rental & Leasing">Car Rental & Vehicle Leasing</option>
                <option value="Security & Cash Transit">Security & Cash-in-Transit</option>
                <option value="Individual Vehicle Owner">Individual Vehicle Owner</option>
              </select>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full py-3.5 rounded-xl gradient-bg-brand-h hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all"
            >
              <span>Continue to Platform Features</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: Selected Modules */}
        {step === 2 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <p className="text-xs text-slate-500 font-medium">
              Select the capabilities you would like our specialist to demonstrate:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                'Live GPS Tracking & Status',
                'Route History & 1-Year Playback',
                'Geofencing & Boundary Alerts',
                'Driver Behavior & Safety Scoring',
                'Preventive Maintenance Scheduling',
                'Fuel Sensor & Anti-Siphon Monitoring',
                'Remote Engine Immobilizer',
                'Automated PDF/Excel Telematics Reports',
                'REST APIs & ERP/CRM Webhooks',
              ].map(mod => {
                const isSelected = formData.selectedModules.includes(mod);
                return (
                  <div
                    key={mod}
                    onClick={() => toggleModule(mod)}
                    className={`p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-blue-50/90 border-[#005CCC] text-[#012462]'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span>{mod}</span>
                    <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                      isSelected ? 'bg-[#005CCC] border-[#005CCC] text-white' : 'border-slate-300 bg-white'
                    }`}>
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="w-2/3 py-3.5 rounded-xl gradient-bg-brand-h hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all"
              >
                <span>Continue to Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Contact & Time */}
        {step === 3 && (
          <div className="space-y-4 animate-in fade-in duration-200">
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
                <label className="block text-xs font-bold text-[#012462] mb-1">Company / Organization *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. SwiftFreight Logistics Ltd"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
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
                <label className="block text-xs font-bold text-[#012462] mb-1">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+234 803 000 0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:border-[#005CCC] focus:outline-none"
                />
              </div>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-xs font-bold text-[#012462] mb-1">Preferred Date</label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:border-[#005CCC] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#012462] mb-1">Preferred Time Slot</label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold focus:border-[#005CCC] focus:outline-none"
                >
                  <option value="10:00 AM (WAT)">10:00 AM (WAT)</option>
                  <option value="11:30 AM (WAT)">11:30 AM (WAT)</option>
                  <option value="02:00 PM (WAT)">02:00 PM (WAT)</option>
                  <option value="04:00 PM (WAT)">04:00 PM (WAT)</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-1/3 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-2/3 py-3.5 rounded-xl gradient-bg-brand-h hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all"
              >
                {isSubmitting ? (
                  <span>Reserving Demo Slot...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-blue-200" />
                    <span>Confirm Live Demo Booking</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

      </form>
    </div>
  );
};
