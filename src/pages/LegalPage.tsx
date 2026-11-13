import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Shield, Lock, FileText, CheckCircle2, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const LegalPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  let title = 'Privacy Policy';
  let description = 'How VolterTrack and Volternet Technologies protect and process vehicle telematics data.';

  if (path.includes('terms')) {
    title = 'Terms of Service';
    description = 'Terms and conditions governing the use of the VolterTrack software and GPS hardware.';
  } else if (path.includes('cookie')) {
    title = 'Cookie Policy';
    description = 'Information about cookie utilization and browser tracking on VolterTrack websites.';
  } else if (path.includes('data-policy')) {
    title = 'Data Security & Retention Policy';
    description = 'Location data encryption, trajectory storage timelines, and cloud security architecture.';
  }

  return (
    <div className="space-y-8 sm:space-y-12 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <SEO title={`${title} | VolterTrack`} description={description} />

      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
        <Link to="/" className="hover:text-[#005CCC] flex items-center gap-1 py-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Home
        </Link>
        <span>/</span>
        <span className="text-[#005CCC] font-bold">{title}</span>
      </div>

      <header className="space-y-3 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005CCC] text-xs font-bold shadow-sm">
          <Shield className="w-3.5 h-3.5" />
          <span>NDPR & GDPR Compliance Documentation</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#012462] font-['Space_Grotesk']">
          {title}
        </h1>
        <p className="text-xs text-slate-500 font-mono">
          Last Updated: August 2026 • Product of Volternet Technologies
        </p>
      </header>

      {/* Dynamic Legal Content */}
      <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-6 leading-relaxed bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm">
        
        {path.includes('privacy') && (
          <>
            <p>
              VolterTrack (a product developed and operated by Volternet Technologies) is committed to protecting the privacy, confidentiality, and security of all vehicle telematics, user account, and location data processed through our platform.
            </p>

            <h3 className="text-base font-bold text-[#012462]">1. Information We Collect</h3>
            <p>
              When you use VolterTrack, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Account Information:</strong> Name, business email, telephone number, billing address, and company registration details.</li>
              <li><strong>Vehicle Telematics Data:</strong> Real-time latitude, longitude, speed, ignition status, battery voltage, heading, odometer mileage, and connected sensor readings (e.g. temperature, fuel levels).</li>
              <li><strong>Device & Hardware Telemetry:</strong> Tracker IMEI, IMSI, SIM phone number, GSM signal strength, and firmware diagnostic logs.</li>
            </ul>

            <h3 className="text-base font-bold text-[#012462]">2. How We Use Telematics Data</h3>
            <p>
              We process vehicle location data solely to fulfill our contractual obligations to you, including rendering live fleet maps, generating trip route histories, dispatching geofence alerts, calculating safety scores, and enabling authorized remote engine cutoff commands.
            </p>

            <h3 className="text-base font-bold text-[#012462]">3. Data Sharing & Third Parties</h3>
            <p>
              We never sell, rent, or monetize your vehicle tracking data. Data is only accessible to your authorized account users and essential telematics cloud infrastructure providers under strict confidentiality agreements.
            </p>
          </>
        )}

        {path.includes('terms') && (
          <>
            <p>
              These Terms of Service govern your access to and use of the VolterTrack software applications, web dashboard, APIs, and associated hardware telematics tracking devices.
            </p>

            <h3 className="text-base font-bold text-[#012462]">1. Lawful Vehicle Tracking</h3>
            <p>
              You represent and warrant that you own or have explicit legal authorization from the legal owner to install GPS tracking equipment and monitor the vehicles registered on your account in compliance with local privacy laws and labor regulations.
            </p>

            <h3 className="text-base font-bold text-[#012462]">2. Remote Engine Immobilization Safety</h3>
            <p>
              The remote engine cutoff function is an emergency anti-theft safeguard. Users agree to utilize this function strictly in accordance with safety recommendations, and acknowledge that the system contains speed-interlock safeguards to prevent cutoff while vehicles are operating at high speeds.
            </p>

            <h3 className="text-base font-bold text-[#012462]">3. Hardware Warranty</h3>
            <p>
              All genuine VolterTrack telematics hardware units include a 1-year replacement warranty covering manufacturer defects when installed by certified VolterTrack technicians.
            </p>
          </>
        )}

        {path.includes('cookie') && (
          <>
            <p>
              VolterTrack uses cookies and similar session tokens to provide a secure login environment, maintain dashboard preferences, and analyze marketing site performance.
            </p>
            <h3 className="text-base font-bold text-[#012462]">Types of Cookies We Use</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Essential Authentication Cookies:</strong> Required for secure login tokens and session maintenance on app.voltertrack.com.</li>
              <li><strong>Preference Cookies:</strong> Store your map style preferences (Dark / Satellite), filter presets, and currency selection.</li>
              <li><strong>Analytical Cookies:</strong> Help us measure website traffic and improve platform usability.</li>
            </ul>
          </>
        )}

        {path.includes('data-policy') && (
          <>
            <p>
              Our Data Security & Retention Policy outlines how VolterTrack safeguards sensitive vehicle telemetry against unauthorized access and data loss.
            </p>
            <h3 className="text-base font-bold text-[#012462]">1. Encryption Standards</h3>
            <p>
              All data transmitted between vehicle GPS trackers, our cloud ingestion cluster, and user browsers is protected using TLS 1.3 encryption. Data stored in databases is encrypted with AES-256 standards.
            </p>
            <h3 className="text-base font-bold text-[#012462]">2. Trajectory Retention Lifecycles</h3>
            <p>
              By default, complete minute-by-minute trajectory logs are retained for 90 days on Personal plans and 365 days on Business/Enterprise plans, after which data is aggregated into monthly distance logs or permanently purged upon account termination.
            </p>
          </>
        )}

      </div>
    </div>
  );
};
