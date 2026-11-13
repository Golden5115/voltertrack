import { SolutionItem } from '../types';

export const ALL_SOLUTIONS: SolutionItem[] = [
  {
    id: 'vehicle-tracking',
    title: 'Personal Vehicle Tracking',
    slug: 'vehicle-tracking',
    audience: 'Car Owners, Families & Private Vehicles',
    heroHeadline: 'Total peace of mind with 24/7 personal vehicle security.',
    heroSubheadline: 'View your vehicle on your phone anytime, get instant ignition alerts, and immobilize the engine remotely in emergencies.',
    painPoints: [
      { problem: 'Fear of vehicle theft in parking lots and residential areas', impact: 'High anxiety and risk of asset loss' },
      { problem: 'Unauthorized use by domestic drivers or mechanics', impact: 'Excessive wear-and-tear and unwarranted mileage' },
    ],
    volterTrackSolutions: [
      { feature: '24/7 Mobile App Tracking', outcome: 'Live vehicle location, speed, and battery health on your smartphone' },
      { feature: 'Remote Engine Immobilization', outcome: 'Safely disable the engine from your phone during theft emergencies' },
    ],
    keyFeatures: ['Live GPS Map', 'Mobile Push Alerts', 'Trip Route Replay', 'Remote Engine Cutoff', 'Battery Health Monitor'],
    workflowSteps: [
      { step: 1, title: 'Discreet Installation', desc: 'A certified technician covertly installs the compact GPS tracker in your vehicle.' },
      { step: 2, title: 'Instant Mobile Login', desc: 'Download the VolterTrack iOS or Android app and access your private dashboard.' },
      { step: 3, title: 'Total 24/7 Control', desc: 'Monitor movements, receive instant ignition alerts, and arm remote cutoff anytime.' },
    ],
    roiMetric: '100% Asset Visibility & 24/7 Peace of Mind',
  },
  {
    id: 'fleet-management',
    title: 'Commercial Fleet Operations',
    slug: 'fleet-management',
    audience: 'Fleet Managers & Business Owners',
    heroHeadline: 'Cut operating costs, stop route waste, and master fleet utilization.',
    heroSubheadline: 'Centralize multi-vehicle tracking, driver accountability, and scheduled maintenance on a single operations dashboard.',
    painPoints: [
      { problem: 'Route blindness, unauthorized detours, and excessive idling', impact: 'Inflated fuel bills and lost operating hours' },
      { problem: 'Unscheduled breakdowns causing customer delivery delays', impact: 'Costly emergency repairs and damaged client trust' },
    ],
    volterTrackSolutions: [
      { feature: 'Multi-Vehicle Live Dashboard', outcome: 'View all assets simultaneously with status filters and active telemetry' },
      { feature: 'Odometer-Based Service Alerts', outcome: 'Automate maintenance reminders to prevent breakdowns before they occur' },
    ],
    keyFeatures: ['Multi-Vehicle Live Map', 'Odometer Service Reminders', 'Automated Scheduled Reports', 'Idle Time Analytics', 'Geofence Boundaries'],
    workflowSteps: [
      { step: 1, title: 'Fleet Setup', desc: 'Equip vehicles with pre-configured 4G GPS telematics hardware.' },
      { step: 2, title: 'Organize & Group', desc: 'Group assets by branch, department, and assigned driver profiles.' },
      { step: 3, title: 'Automate & Save', desc: 'Use scheduled mileage reports and idle alerts to cut operating costs by up to 25%.' },
    ],
    roiMetric: 'Up to 25% Reduction in Fleet Operational Expenses',
  },
  {
    id: 'logistics',
    title: 'Cargo & Interstate Logistics',
    slug: 'logistics',
    audience: 'Haulage Companies & Freight Operators',
    heroHeadline: 'End-to-end interstate cargo visibility and transit control.',
    heroSubheadline: 'Track heavy trucks and flatbeds across Nigerian highway corridors with route deviation alerts and automated customer ETAs.',
    painPoints: [
      { problem: 'Zero visibility into truck location on interstate transit routes', impact: 'Inability to provide accurate delivery ETAs to shippers' },
      { problem: 'Drivers making unauthorized highway detours or risky stops', impact: 'Cargo theft risks and delayed turnaround times' },
    ],
    volterTrackSolutions: [
      { feature: 'Corridor Geofencing', outcome: 'Instant alerts if a truck deviates from the approved interstate route' },
      { feature: 'Customer Live Tracking Links', outcome: 'Share real-time transit tracking links with shippers for proof of delivery' },
    ],
    keyFeatures: ['Corridor Geofencing', 'Interstate Route History', 'Customer Live Tracking Links', 'Driver Shift Tracking', 'Rest Stop Audits'],
    workflowSteps: [
      { step: 1, title: 'Dispatch Creation', desc: 'Assign driver, vehicle, cargo manifest, and approved corridor.' },
      { step: 2, title: 'In-Transit Monitoring', desc: 'Track speed, rest stops, and route adherence in real time.' },
      { step: 3, title: 'Automated Delivery Proof', desc: 'Depot geofences log arrival and departure times automatically.' },
    ],
    roiMetric: '100% Route Adherence & Verified Delivery Timelines',
  },
  {
    id: 'vehicle-security',
    title: 'High-Risk Asset Security & Recovery',
    slug: 'vehicle-security',
    audience: 'High-Value Asset Owners & Security Fleets',
    heroHeadline: 'Tamper-proof protection with emergency recovery assistance.',
    heroSubheadline: 'Engineered for high-risk assets, bullion transit, and luxury vehicles with internal backup power and remote engine cutoff.',
    painPoints: [
      { problem: 'Thieves disconnecting the vehicle battery to disable standard trackers', impact: 'Conventional tracking devices stop transmitting immediately' },
      { problem: 'Unauthorized towing or flatbed transport without ignition on', impact: 'Vehicle stolen silently without triggering standard alarms' },
    ],
    volterTrackSolutions: [
      { feature: 'Internal Backup Battery', outcome: 'Keeps tracking for up to 48 hours after main vehicle battery is disconnected' },
      { feature: 'Tamper & Towing Alarms', outcome: 'Instant alerts triggered by vibration, tilt, towing, or power severance' },
    ],
    keyFeatures: ['Remote Engine Cutoff', 'Battery Disconnect Alert', 'Towing & Vibration Alarms', '1-Second Recovery Tracking', 'Covert Installation'],
    workflowSteps: [
      { step: 1, title: 'Security Installation', desc: 'Certified technicians install ruggedized, covert GPS trackers with internal batteries.' },
      { step: 2, title: 'Set Curfew Rules', desc: 'Configure time-of-day curfew geofences and motion sensitivity.' },
      { step: 3, title: 'Emergency Recovery', desc: 'Remotely disable engine and stream live coordinates to recovery teams.' },
    ],
    roiMetric: '99.8% Asset Recovery Rate with Sub-Second Tracking',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Multi-Branch Governance',
    slug: 'enterprise',
    audience: 'Enterprises, Conglomerates & Multi-Branch Fleets',
    heroHeadline: 'Hierarchical governance and role-based access for large fleets.',
    heroSubheadline: 'Scale oversight across 50 to 5,000+ vehicles with branch segregation, immutable audit trails, and ERP integrations.',
    painPoints: [
      { problem: 'Managing hundreds of vehicles across diverse states without regional isolation', impact: 'Lack of accountability and data security risks' },
      { problem: 'Disconnect between vehicle telematics and internal ERP systems', impact: 'Manual data entry errors and delayed reporting cycles' },
    ],
    volterTrackSolutions: [
      { feature: 'Hierarchical Role-Based Access (RBAC)', outcome: 'Branch managers see only their branch assets; executives see the full national fleet' },
      { feature: 'Enterprise REST APIs & Webhooks', outcome: 'Directly sync vehicle coordinates, mileage, and geofence events into SAP, Oracle, or Odoo' },
    ],
    keyFeatures: ['Hierarchical Roles & Permissions', 'Full Audit Logging', 'Enterprise REST APIs & Webhooks', 'Dedicated SLA & Account Manager', 'Custom Data Retention'],
    workflowSteps: [
      { step: 1, title: 'Architecture Mapping', desc: 'Our enterprise team sets up your organizational hierarchy and branch roles.' },
      { step: 2, title: 'Nationwide Deployment', desc: 'Coordinated tracker installations across nationwide branches with zero downtime.' },
      { step: 3, title: 'Automated Governance', desc: 'Executive visibility, automated compliance reporting, and 99.9% uptime SLA.' },
    ],
    roiMetric: 'Consolidated National Oversight & Full Audit Compliance',
  },
];
