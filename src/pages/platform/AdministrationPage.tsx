import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, 
  ShieldCheck, 
  Users, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  FileCheck
} from 'lucide-react';
import { SEO } from '../../components/common/SEO';

export const AdministrationPage: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Administration & RBAC Governance | VolterTrack"
        description="Role-based access control, multi-branch fleet segregation, immutable audit trails, and multi-factor authentication for enterprise organizations."
      />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <Lock className="w-3.5 h-3.5" />
          <span>Enterprise Governance</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          Administration & Access Control
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Ensure security and data governance across your organization. Control exactly who can view location feeds, edit geofences, or issue emergency cutoff commands.
        </p>
      </section>

      {/* 3 Governance Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <div className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#005CCC] flex items-center justify-center font-bold">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#012462]">Granular User Roles</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Assign tailored permissions: Super Admin, Branch Manager, Dispatcher, Driver, or Read-Only Auditor with single-sign-on (SSO) support.
          </p>
        </div>

        <div className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#012462]">Multi-Branch Fleet Isolation</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Segregate vehicles by regional depots (e.g. Lagos, Abuja, Port Harcourt). Branch managers only see vehicles assigned to their operational territory.
          </p>
        </div>

        <div className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center font-bold">
            <FileCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#012462]">Immutable Audit Logs</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every user login, geofence edit, and remote engine immobilizer command is logged with timestamp, user identity, and IP address for compliance.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl gradient-bg-brand text-center text-white space-y-4 shadow-xl">
        <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk']">
          Ensure institutional security and compliance across your fleet
        </h3>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/quote"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-blue-50 text-[#012462] font-bold text-xs shadow-lg transition-all text-center"
          >
            Get Fleet Quote
          </Link>
          <Link
            to="/demo"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all text-center"
          >
            Schedule Live Demo
          </Link>
        </div>
      </section>

    </div>
  );
};
