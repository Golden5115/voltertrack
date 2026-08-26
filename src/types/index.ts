export type VehicleStatus = 'moving' | 'idle' | 'parked' | 'offline';

export interface VehicleTelemetry {
  id: string;
  name: string;
  plate: string;
  type: 'truck' | 'van' | 'sedan' | 'motorcycle' | 'suv' | 'bus';
  status: VehicleStatus;
  speed: number; // km/h
  heading: number; // degrees
  batteryLevel: number; // %
  voltage: number; // V
  ignition: boolean;
  driverName: string;
  driverPhone: string;
  currentAddress: string;
  city: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  fuelLevel?: number; // %
  temperature?: number; // °C (cold chain)
  geofenceStatus: 'inside' | 'outside' | 'transiting';
  lastPing: string;
  todayDistanceKm: number;
  tripDurationMinutes: number;
}

export interface GeofenceZone {
  id: string;
  name: string;
  type: 'depot' | 'corridor' | 'restricted' | 'customer_site';
  coordinates: { x: number; y: number }[]; // percentage for vector map representation
  color: string;
  vehicleCount: number;
}

export interface FeatureItem {
  id: string;
  title: string;
  slug: string;
  category: 'core' | 'fleet' | 'security' | 'analytics' | 'integrations';
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  capabilities: string[];
  icon: string;
  badge?: string;
  statsHighlight?: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  slug: string;
  audience: string;
  heroHeadline: string;
  heroSubheadline: string;
  painPoints: { problem: string; impact: string }[];
  volterTrackSolutions: { feature: string; outcome: string }[];
  keyFeatures: string[];
  workflowSteps: { step: number; title: string; desc: string }[];
  roiMetric: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  slug: string;
  icon: string;
  heroHeadline: string;
  heroDescription: string;
  industryProblems: string[];
  volterTrackSolution: string[];
  relevantFeatures: string[];
  workflow: {
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
  };
  caseStudyHighlight: {
    clientType: string;
    result: string;
    quote: string;
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  popular?: boolean;
  monthlyNgn: number;
  annualNgn: number;
  hardwareCostNgn: number;
  installationCostNgn: number;
  monthlyUsd: number;
  hardwareCostUsd: number;
  features: string[];
  notIncluded?: string[];
  target: string;
  ctaText: string;
  ctaLink: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Fleet Management' | 'GPS Tracking' | 'Vehicle Security' | 'Logistics' | 'Telematics' | 'Fleet Optimization';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishDate: string;
  readTime: string;
  featured?: boolean;
  tags: string[];
}

export interface HelpTopic {
  id: string;
  category: 'Getting Started' | 'Dashboard & Web App' | 'Mobile Application' | 'Alerts & Geofencing' | 'Reports & Exports' | 'Hardware & Troubleshooting';
  title: string;
  summary: string;
  steps: string[];
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Hardware & Tracking' | 'Mobile & Web App' | 'Security & Alerts' | 'Pricing & Plans';
  question: string;
  answer: string;
}

export interface LeadSubmission {
  type: 'demo' | 'quote' | 'contact';
  name: string;
  company?: string;
  email: string;
  phone: string;
  fleetSize?: string;
  industry?: string;
  interestAreas?: string[];
  message?: string;
  submittedAt: string;
}
