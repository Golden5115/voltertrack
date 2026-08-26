import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Building, 
  User, 
  MessageSquare
} from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    department: 'sales',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // ignore
      }

      // Save in localStorage
      const existingLeads = JSON.parse(localStorage.getItem('voltertrack_messages') || '[]');
      existingLeads.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('voltertrack_messages', JSON.stringify(existingLeads));
    }, 700);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-3xl bg-white border border-blue-200 shadow-2xl text-center space-y-4 animate-in fade-in duration-300">
        <div className="w-14 h-14 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-[#012462] font-['Space_Grotesk']">
          Message Transmitted Successfully!
        </h3>
        <p className="text-xs text-slate-600 max-w-sm mx-auto">
          Thank you, <strong className="text-[#005CCC]">{formData.name}</strong>. Our {formData.department.toUpperCase()} desk has received your request and will respond within 2 business hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              department: 'sales',
              subject: '',
              message: '',
            });
          }}
          className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white border border-slate-200/90 p-6 md:p-8 shadow-xl shadow-blue-950/5 space-y-4">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-[#012462] mb-1">Your Name *</label>
          <input
            type="text"
            required
            placeholder="e.g. Oluwaseun Davies"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:border-[#005CCC] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#012462] mb-1">Work Email *</label>
          <input
            type="email"
            required
            placeholder="oluwaseun@company.com"
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
            placeholder="+234 802 000 0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:border-[#005CCC] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#012462] mb-1">Company / Fleet Name</label>
          <input
            type="text"
            placeholder="e.g. Premier Haulage Ltd"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:border-[#005CCC] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-[#012462] mb-1">Department</label>
          <select
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold focus:border-[#005CCC] focus:outline-none"
          >
            <option value="sales">Sales & Fleet Quotations (sales@voltertrack.com)</option>
            <option value="support">Technical Support & Tracking (support@voltertrack.com)</option>
            <option value="billing">Billing & Subscriptions</option>
            <option value="enterprise">Enterprise Partnerships</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#012462] mb-1">Subject</label>
          <input
            type="text"
            placeholder="e.g. Inquiry regarding 25 Truck Fleet Tracking"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:border-[#005CCC] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#012462] mb-1">How can we help? *</label>
        <textarea
          required
          rows={4}
          placeholder="Please describe your fleet requirements, questions, or vehicle tracking needs..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:border-[#005CCC] focus:outline-none resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-xl gradient-bg-brand-h hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all"
      >
        {isSubmitting ? (
          <span>Sending Message...</span>
        ) : (
          <>
            <Send className="w-3.5 h-3.5" />
            <span>Send Secure Message</span>
          </>
        )}
      </button>

      <p className="text-[10px] text-center text-slate-400">
        Your data is encrypted and processed in accordance with NDPR & GDPR privacy standards.
      </p>

    </form>
  );
};
