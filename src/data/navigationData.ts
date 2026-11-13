export interface NavItem {
  name: string;
  href: string;
  description?: string;
  badge?: string;
  icon?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const MAIN_NAVIGATION = [
  {
    name: 'Features',
    href: '/features',
    sections: [
      {
        title: 'Core Tracking & Control',
        items: [
          { name: 'Live GPS Tracking', href: '/features#live-tracking', description: 'Sub-second real-time vehicle location & status' },
          { name: 'Trip History & Playback', href: '/features#trip-history', description: 'Route replays, stops, idle time & speed logs' },
          { name: 'Geofencing & Perimeters', href: '/features#geofencing', description: 'Virtual boundaries with instant entry/exit alerts' },
          { name: 'Smart Alerts & Notifications', href: '/features#alerts', description: 'Ignition, overspeed, towing & power-cut alerts' },
        ],
      },
      {
        title: 'Operations & Maintenance',
        items: [
          { name: 'Vehicle & Documents', href: '/features#vehicle-management', description: 'Asset specs, registrations & expiry reminders' },
          { name: 'Driver Safety & Scoring', href: '/features#driver-management', description: 'Driver behavior, harsh braking & scorecards' },
          { name: 'Reports & Analytics', href: '/features#reports', description: 'Automated PDF & Excel mileage and trip reports' },
          { name: 'Preventive Maintenance', href: '/features#maintenance', description: 'Odometer-triggered service schedules & logs' },
        ],
      },
      {
        title: 'Security & Developers',
        items: [
          { name: 'Remote Engine Cutoff', href: '/features#vehicle-security', description: 'Speed-interlocked engine kill switch & anti-theft' },
          { name: 'APIs & Webhooks', href: '/features#integrations', description: 'REST APIs, webhooks & ERP connectivity' },
        ],
      },
    ],
  },
  {
    name: 'Solutions',
    href: '/solutions',
    sections: [
      {
        title: 'By Business Need',
        items: [
          { name: 'Personal Vehicle Tracking', href: '/solutions#vehicle-tracking', description: '24/7 location & security for private car owners' },
          { name: 'Commercial Fleets', href: '/solutions#fleet-management', description: 'Multi-vehicle visibility & operational control' },
          { name: 'Cargo & Haulage Logistics', href: '/solutions#logistics', description: 'Interstate corridor tracking & proof of delivery' },
          { name: 'Security & Asset Recovery', href: '/solutions#vehicle-security', description: 'Tamper-proof protection & remote engine shutoff' },
          { name: 'Enterprise Governance', href: '/solutions#enterprise', description: 'Hierarchical RBAC & ERP integration for 50+ fleets' },
        ],
      },
    ],
  },
  {
    name: 'Industries',
    href: '/industries',
    sections: [
      {
        title: 'Sectors We Power',
        items: [
          { name: 'Logistics & Haulage', href: '/industries#logistics', description: 'Interstate trucks, containers & heavy freight' },
          { name: 'Commercial Transit', href: '/industries#transportation', description: 'Interstate buses & passenger coach transit' },
          { name: 'Last-Mile Delivery', href: '/industries#delivery', description: 'Couriers, delivery vans & dispatch bikes' },
          { name: 'Construction & Equipment', href: '/industries#construction', description: 'Heavy machinery, earthmovers & site assets' },
          { name: 'Corporate Pool Fleets', href: '/industries#corporate', description: 'Executive pool cars & departmental transport' },
          { name: 'Car Rental & Leasing', href: '/industries#car-rental', description: 'Rental security, boundary lock & immobilizer' },
          { name: 'Security & Armored Patrol', href: '/industries#security', description: 'Cash-in-transit, patrol units & rapid recovery' },
          { name: 'Government Fleets', href: '/industries#government', description: 'Public works, utility fleets & emergency response' },
        ],
      },
    ],
  },
  {
    name: 'Pricing',
    href: '/pricing',
  },
  {
    name: 'Resources',
    href: '/resources',
    sections: [
      {
        title: 'Knowledge & Support',
        items: [
          { name: 'Resources Hub', href: '/resources', description: 'Guides, articles, FAQs and documentation' },
          { name: 'Telematics Blog', href: '/resources/blog', description: 'Fleet optimization trends & best practices' },
          { name: 'Help Center', href: '/help', description: 'Step-by-step setup guides & tutorials' },
          { name: 'Frequently Asked Questions', href: '/faq', description: 'Clear answers on hardware, tracking & billing' },
          { name: 'Contact Support', href: '/support', description: 'Technical assistance & 24/7 recovery desk' },
        ],
      },
    ],
  },
  {
    name: 'About',
    href: '/about',
    sections: [
      {
        title: 'Company & Technology',
        items: [
          { name: 'About VolterTrack', href: '/about#overview', description: 'Our mission to bring intelligence to vehicle mobility' },
          { name: 'Volternet Technologies', href: 'https://volternet.com', description: 'Our parent engineering company & innovation lab' },
          { name: 'Cloud Architecture', href: '/about/technology', description: 'Cloud infrastructure, GPS protocols & security' },
          { name: 'Careers', href: '/about/careers', description: 'Join our engineering and operations team' },
        ],
      },
    ],
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export const LEGAL_PAGES = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookie-policy' },
  { name: 'Data Security & Retention', href: '/data-policy' },
];
