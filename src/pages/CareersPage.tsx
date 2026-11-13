import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Briefcase
} from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const CareersPage: React.FC = () => {
  const openRoles = [
    {
      title: 'Senior IoT & Telematics Systems Engineer',
      type: 'Full-Time',
      location: 'Lagos, Nigeria (Hybrid)',
      department: 'Hardware & Embedded IoT',
      description: 'Lead hardware protocol testing, CAN-bus decoder development, and GPS tracker firmware configuration.',
    },
    {
      title: 'Lead Frontend Engineer (React / Next.js)',
      type: 'Full-Time',
      location: 'Remote / Lagos',
      department: 'Software Engineering',
      description: 'Build mission-control web dashboards, high-frequency map renderers, and responsive user interfaces.',
    },
    {
      title: 'Automotive Field Installation Specialist',
      type: 'Full-Time',
      location: 'Lagos / Abuja / Port Harcourt',
      department: 'Field Operations',
      description: 'Perform professional covert GPS tracker and fuel sensor installations on trucks, luxury vehicles, and heavy machinery.',
    },
    {
      title: 'Enterprise Fleet Sales Executive',
      type: 'Full-Time',
      location: 'Lagos, Nigeria',
      department: 'Commercial Sales',
      description: 'Drive high-value fleet subscriptions and manage enterprise relationships with logistics and transport companies.',
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO 
        title="Careers at VolterTrack | Join Our Engineering Team"
        description="Join VolterTrack and Volternet Technologies in building the future of vehicle intelligence, IoT, and fleet SaaS in Africa."
      />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Join the Team</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          Build the future of fleet intelligence.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          We are solving complex mobility and asset visibility challenges across emerging markets and beyond. Join our passionate engineering and operations team.
        </p>
      </section>

      {/* Open Roles List */}
      <section className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-[#012462] font-['Space_Grotesk']">
          Open Positions
        </h2>

        <div className="space-y-4">
          {openRoles.map((role, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 hover:border-[#005CCC] shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-[#005CCC] border border-blue-200">
                    {role.department}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {role.type} • {role.location}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#012462]">{role.title}</h3>
                <p className="text-xs text-slate-600">{role.description}</p>
              </div>

              <a
                href="mailto:careers@volternet.com?subject=Application for "
                className="w-full md:w-auto text-center px-5 py-3 sm:py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-[#005CCC] hover:border-[#005CCC] text-xs font-bold transition-colors shrink-0"
              >
                Apply Now →
              </a>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
