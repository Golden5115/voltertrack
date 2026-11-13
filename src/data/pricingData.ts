import { VehicleYearTier, PricingPlan } from '../types';

export const PERSONAL_INSTALLATION_TIERS: VehicleYearTier[] = [
  { 
    id: '2000-2008', 
    yearRange: '2000–2008', 
    priceNgn: 80000, 
    description: 'Older model vehicles & classic cars',
    notes: 'Standard analog wiring harness and starter motor relay' 
  },
  { 
    id: '2009-2013', 
    yearRange: '2009–2013', 
    priceNgn: 120000, 
    description: 'Standard electronic management vehicles',
    notes: 'Electronic fuel injection & standard OBD/CAN interface' 
  },
  { 
    id: '2014-2017', 
    yearRange: '2014–2017', 
    priceNgn: 160000, 
    description: 'Modern CAN-bus & smart electronic vehicles',
    notes: 'Complex CAN bus protocols, push-button ignition, multiplex wiring' 
  },
  { 
    id: '2018-2019', 
    yearRange: '2018–2019', 
    priceNgn: 200000, 
    description: 'Advanced security & digital immobilizer systems',
    notes: 'Encrypted factory security, smart fobs, digital immobilizer integration' 
  },
  { 
    id: '2020-2026', 
    yearRange: '2020–2026', 
    priceNgn: 300000, 
    description: 'Latest smart ECU, push-to-start & hybrid/modern architecture',
    notes: 'High-security micro-relays, hybrid/EV powertrain safety, advanced encrypted bus' 
  },
];

// Flat rate per vehicle for Company / Fleet installation (more than 10 vehicles)
export const FLEET_INSTALLATION_RATE = 120000;
export const FLEET_MIN_THRESHOLD = 11; // Applies when installing on more than 10 vehicles

export const PRICING_SLOGAN = 'Track. Protect. Manage. Control.';

export const CUSTOMER_PROMISES = [
  {
    title: 'We Come To You Nationwide',
    subtitle: 'Zero Hidden Costs',
    description: 'Our certified mobile technicians come directly to your home, office, depot, or warehouse anywhere in Nigeria. No workshop hassle, no travel surcharges.',
  },
  {
    title: 'Pay After Installation & Testing',
    subtitle: '100% Risk-Free Guarantee',
    description: 'You pay ONLY after installation is complete and you have tested live tracking, mobile app access, and remote engine cutoff on your phone.',
  },
  {
    title: 'Zero Renewal Fees Ever',
    subtitle: '100% One-Time Payment',
    description: 'One single payment covers tracker hardware, professional installation, and lifetime platform tracking with zero monthly or annual renewals.',
  },
];

export const INCLUDED_INSTALLATION_FEATURES = [
  'High-precision 4G LTE GPS Hardware Tracker',
  'Concealed, tamper-proof installation by certified technicians',
  'Remote engine cutoff immobilizer relay with speed interlock',
  'Full lifetime access to iOS and Android mobile apps',
  'Desktop web command console with interactive live maps',
  'Sub-second live vehicle telemetry and status monitoring',
  'Instant push, SMS & email alerts (Ignition, Overspeed, Towing, Curfew)',
  'Unlimited geofence perimeters with entry and exit alerts',
  'Complete trip history replay and automated route logs',
  'ZERO renewal fees — No monthly or annual software charges ever',
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'personal',
    name: 'Personal & Small Fleet Installation',
    tagline: 'Covert GPS tracking and anti-theft immobilizer for private owners and fleets of 1 to 10 vehicles.',
    priceNgn: 80000,
    target: '1 - 10 Vehicles',
    ctaText: 'Book Installation',
    ctaLink: '/quote?tier=personal',
    features: [
      'Tiered by vehicle year: ₦80,000 – ₦300,000 per vehicle (2000–2026 models)',
      'Select year model individually for each vehicle',
      '4G LTE GPS Hardware Tracker & Covert On-Site Installation',
      'Remote Engine Cutoff (Anti-Theft Relay)',
      'iOS & Android Mobile App Access (Lifetime)',
      'Web Browser Dashboard Access',
      'Trip Route History & Playback',
      'Ignition ON/OFF Push & SMS Alerts',
      'Depot & Home Geofence Boundary Alerts',
      'Main Battery Disconnect & Towing Shock Alarms',
      'Zero Renewal Fees — 100% One-Time Payment',
    ],
    notIncluded: [
      'Multi-Branch Enterprise RBAC',
      'Driver RFID Key Tags',
    ],
  },
  {
    id: 'fleet',
    name: 'Fleet Volume Installation',
    tagline: 'Flat rate for commercial fleets, delivery operators, haulage & corporate pools with more than 10 vehicles.',
    popular: true,
    priceNgn: 120000,
    target: 'More than 10 Vehicles (11 - 1,000+ Vehicles)',
    ctaText: 'Get Fleet Flat Rate (₦120,000/unit)',
    ctaLink: '/quote?tier=fleet',
    features: [
      'Flat Rate: ₦120,000 per vehicle across all models and years (Fleets of >10 vehicles)',
      'Everything in Personal, plus:',
      'Fleet Grouping by Branch, Department, or Vehicle Class',
      'Driver Behavior Scoring & Harsh Braking Telemetry',
      'Automated PDF & Excel Scheduled Compliance Reports',
      'Odometer-Triggered Maintenance Reminders',
      'Multi-Manager Access with Role-Based Controls',
      'Unlimited Geofences & Interstate Transit Corridors',
      'Priority Dedicated Technical Account Manager',
      'Zero Renewal Fees — No Monthly or Annual Charges Ever',
    ],
  },
];

export const SENSOR_ADDONS = [
  {
    id: 'fuel-sensor',
    name: 'Ultrasonic Fuel Level Sensor',
    description: 'Non-invasive tank sensor for high-precision diesel tracking and anti-siphoning alerts.',
    costNgn: 45000,
    costUsd: 55,
    recommendedFor: 'Heavy trucks, haulage, generators, construction',
    badge: 'Sensor Ready',
  },
  {
    id: 'driver-rfid',
    name: 'RFID Driver Key Reader & 2 Tags',
    description: 'Requires drivers to tap their personalized RFID key tag before engine start.',
    costNgn: 18000,
    costUsd: 22,
    recommendedFor: 'Pool cars, commercial transport, delivery fleets',
  },
  {
    id: 'temp-sensor',
    name: 'Wireless Temperature & Humidity Sensor',
    description: 'Monitors refrigerated cargo temperatures in cold-chain logistics with breach alerts.',
    costNgn: 25000,
    costUsd: 30,
    recommendedFor: 'Pharmaceutical, meat, dairy & food logistics',
  },
  {
    id: 'sos-button',
    name: 'Concealed Emergency SOS Panic Button',
    description: 'Discreet under-dash button for drivers to silently trigger security alerts to dispatch.',
    costNgn: 6000,
    costUsd: 8,
    recommendedFor: 'Executive transit, security patrol, taxis',
  },
];
