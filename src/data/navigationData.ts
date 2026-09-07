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
    name: 'Platform',
    href: '/platform',
    sections: [
      {
        title: 'Platform Architecture',
        items: [
          { name: 'Platform Overview', href: '/platform#overview', description: 'Unified fleet intelligence and telematics core' },
          { name: 'Web Dashboard', href: '/platform#dashboard', description: 'Desktop command center with live maps & analytics' },
          { name: 'Mobile App', href: '/platform#mobile-app', description: 'Real-time fleet tracking for iOS & Android' },
          { name: 'Fleet Management', href: '/platform#fleet-management', description: 'Vehicle grouping, driver allocation & operations' },
          { name: 'Administration & RBAC', href: '/platform#administration', description: 'Role-based access, audit trails & multi-tenant control' },
          { name: 'Telematics Infrastructure', href: '/platform#architecture', description: 'Traccar-compatible enterprise cloud protocol stack' },
        ],
      },
    ],
  },
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
          { name: 'Alerts & Notifications', href: '/features#alerts', description: 'Ignition, overspeed, towing & boundary alerts' },
        ],
      },
      {
        title: 'Operations & Intelligence',
        items: [
          { name: 'Vehicle Management', href: '/features#vehicle-management', description: 'Profiles, registrations, tracker devices & history' },
          { name: 'Driver Management', href: '/features#driver-management', description: 'Driver logs, vehicle assignments & safety scoring' },
          { name: 'Reports & Analytics', href: '/features#reports', description: 'Automated PDF, CSV & Excel operational reports' },
          { name: 'Fleet Monitoring Center', href: '/features#fleet-monitoring', description: 'Multi-screen real-time command dashboard' },
        ],
      },
      {
        title: 'Advanced & Security',
        items: [
          { name: 'Maintenance Schedules', href: '/features#maintenance', description: 'Preventive service schedules & maintenance logs' },
          { name: 'Vehicle Security & Cutoff', href: '/features#vehicle-security', description: 'Remote engine immobilizer & recovery visibility' },
          { name: 'API & Integrations', href: '/features#integrations', description: 'REST APIs, webhooks, ERP & Traccar connectivity' },
        ],
      },
    ],
  },
  {
    name: 'Solutions',
    href: '/solutions',
    sections: [
      {
        title: 'By Business Objective',
        items: [
          { name: 'Vehicle Tracking', href: '/solutions#vehicle-tracking', description: 'For individual owners & small business vehicles' },
          { name: 'Fleet Management', href: '/solutions#fleet-management', description: 'For organizations managing multiple vehicles' },
          { name: 'Vehicle Security', href: '/solutions#vehicle-security', description: 'Anti-theft, immobilizer & location protection' },
          { name: 'Logistics Management', href: '/solutions#logistics', description: 'For haulage, dispatch & freight operations' },
          { name: 'Driver Accountability', href: '/solutions#driver-management', description: 'Driver behavior, accountability & shift safety' },
          { name: 'Enterprise Governance', href: '/solutions#enterprise', description: 'Scalable role-based governance for 100+ fleets' },
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
          { name: 'Logistics & Haulage', href: '/industries#logistics', description: 'Interstate trucks, containers & freight' },
          { name: 'Transportation & Transit', href: '/industries#transportation', description: 'Interstate bus fleets & commercial transit' },
          { name: 'Last-Mile Delivery', href: '/industries#delivery', description: 'Couriers, delivery vans & dispatch bikes' },
          { name: 'Construction & Heavy Assets', href: '/industries#construction', description: 'Heavy machinery, earthmovers & site vehicles' },
          { name: 'Corporate Organizations', href: '/industries#corporate', description: 'Executive pool cars & employee transport' },
          { name: 'Car Rental & Leasing', href: '/industries#car-rental', description: 'Rental security, boundary lock & immobilizer' },
          { name: 'Security Patrol & Recovery', href: '/industries#security', description: 'Patrol units, cash-in-transit & rapid recovery' },
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
          { name: 'Resources Hub', href: '/resources', description: 'Guides, articles, FAQs and platform documentation' },
          { name: 'Blog & Telematics Insights', href: '/resources/blog', description: 'Industry articles, fleet trends & best practices' },
          { name: 'Help Center', href: '/help', description: 'Step-by-step guides, setup instructions & how-tos' },
          { name: 'Frequently Asked Questions', href: '/faq', description: 'Clear answers on tracking, hardware & features' },
          { name: 'Contact Support', href: '/support', description: 'Technical assistance, hardware support & sales desk' },
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
          { name: 'Our Technology Stack', href: '/about#technology', description: 'Cloud infrastructure, GPS protocols & security standards' },
          { name: 'Careers & Hiring', href: '/about#careers', description: 'Join our engineering and fleet operations team' },
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
