import { BlogPost, HelpTopic, FAQItem } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: '5-ways-gps-telematics-slashes-fleet-costs-in-nigeria',
    title: '5 Ways GPS Telematics Slashes Fleet Operating Costs in Nigeria',
    excerpt: 'Rising fuel prices and bad road networks make fleet efficiency critical. Discover how modern telematics reduces fuel waste, stops unauthorized trips, and prevents breakdowns.',
    content: `Fleet operations in Nigeria face a distinct set of operational challenges: fluctuating diesel and petrol prices, demanding road conditions, traffic bottlenecks in major hubs like Lagos and Port Harcourt, and security considerations along interstate transit corridors.

For fleet managers and business owners, vehicle operating costs can easily spiral out of control without real-time data. Here are five proven ways that implementing a modern telematics platform like VolterTrack drives immediate return on investment:

### 1. Eliminating Unauthorized "Side-Trips" and Moonlighting
One of the most common drains on commercial vehicle profitability is off-book usage. When drivers use company vans, trucks, or motorcycles for unauthorized private business during weekends or late nights, your company bears the fuel cost, maintenance wear, and legal liability. 
With VolterTrack, automatic after-hours ignition alerts and geofence curfew notifications instantly alert managers if a vehicle moves outside approved working windows.

### 2. Reducing Costly Engine Idling
In urban traffic corridors, drivers frequently leave vehicle engines running with air conditioners blasting while parked for extended periods. Excessive idling burns up to 3.8 liters of fuel per hour without moving a single kilometer. 
VolterTrack generates dedicated Idle Reports, highlighting drivers with excessive stationary engine runtimes so fleet supervisors can coach better habits.

### 3. Transitioning from Reactive Breakdowns to Preventive Maintenance
Roadside breakdowns don't just cost money in towing and emergency mechanics; they destroy customer trust through missed delivery deadlines. 
By tracking actual odometer distance accumulated through GPS telemetry, VolterTrack triggers automated service alerts at exact mileage thresholds (e.g., 5,000 km oil changes, 20,000 km brake pad inspections).

### 4. Curbing Aggressive Driving & Road Violations
Harsh acceleration, sudden emergency braking, and high-speed highway driving degrade tires, transmissions, and brake pads prematurely while increasing accident risks. 
Telematics scoring gives fleet managers objective data to reward safe drivers and retrain aggressive ones.

### 5. Instant Recovery Visibility During Security Emergencies
In the event of attempted vehicle theft, every minute counts. VolterTrack's covert GPS trackers with built-in backup batteries and remote engine immobilization allow authorized personnel to disable the fuel pump and provide precise live GPS coordinates to law enforcement.`,
    category: 'Fleet Optimization',
    author: {
      name: 'Babajide Adeleke',
      role: 'Head of Fleet Telematics, VolterTrack',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    publishDate: 'August 14, 2026',
    readTime: '6 min read',
    featured: true,
    tags: ['Fleet Management', 'Fuel Optimization', 'Nigeria Business', 'Telematics ROI'],
  },
  {
    id: 'post-2',
    slug: 'the-anatomy-of-a-modern-gps-tracker-beyond-simple-location',
    title: 'The Anatomy of a Modern GPS Tracker: Why Simple Location Is No Longer Enough',
    excerpt: 'GPS tracking is no longer just dots on a map. Learn how IoT sensors, CAN-bus integration, and cloud intelligence transform vehicles into connected computers.',
    content: `Ten years ago, a GPS tracker was a bulky box that did one thing: send a text message with latitude and longitude coordinates when dialed. Today, telematics has evolved into intelligent edge computing.

A modern enterprise tracker acts as a digital nervous system for the vehicle:

### High-Precision Multi-Constellation GNSS
Modern tracking devices no longer rely solely on American GPS. They connect simultaneously to GLONASS, Galileo, and BeiDou satellite constellations, ensuring rapid time-to-first-fix (TTFF) and maintaining sub-meter accuracy even when driving through dense high-rise corridors like Lagos Island or Victoria Island.

### 4G LTE Cat-M1 and 2G Fallback Connectivity
Network coverage can vary between urban 4G towers and remote rural highways. VolterTrack hardware utilizes adaptive cellular modems with automatic band switching, buffering up to 10,000 offline telemetry points internally when passing through network dead zones, and transmitting the entire route history the instant a cellular signal is re-established.

### Built-in 3-Axis Accelerometers
Advanced MEMS accelerometers detect crash impacts, sudden vehicle roll, towing events while the engine is off, and driver behavior events such as rapid cornering and hard braking.

### Intelligent Remote Relays
Automotive relays integrated into the vehicle starter or fuel pump circuits allow authorized fleet managers to securely immobilize stolen vehicles through speed-interlocked digital commands.`,
    category: 'Telematics',
    author: {
      name: 'Engr. Nnamdi Okoro',
      role: 'Principal IoT Engineer, Volternet Technologies',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    publishDate: 'August 02, 2026',
    readTime: '5 min read',
    tags: ['GPS Hardware', 'IoT Technology', 'Vehicle Intelligence'],
  },
  {
    id: 'post-3',
    slug: 'how-geofencing-protects-logistics-fleets-from-interstate-hijackings',
    title: 'How Geofencing Protects Logistics Fleets from Route Diversion & Hijacking',
    excerpt: 'Virtual perimeters are the first line of defense for freight and haulage operators. Explore how corridor geofences automate alerts when drivers deviate from safe routes.',
    content: `When moving high-value goods across interstate routes—such as Lagos to Kano, or Port Harcourt to Abuja—maintaining route discipline is the single most critical factor in mitigating cargo theft and hijackings.

### What is Corridor Geofencing?
Unlike standard circular boundaries around a fixed depot, a corridor geofence creates a virtual polygon "tube" along an approved transit highway (e.g., within 500 meters of the expressway). 

If a truck departs from the approved corridor onto an unapproved feeder road or stops at an unauthorized location for longer than 15 minutes, VolterTrack automatically triggers instant high-priority alerts to the control room.

### Immediate Benefits for Logistics Operators:
1. **Zero-Delay Incident Detection**: You don't have to wait for a driver to fail to answer their phone. The system flags route deviations within 5 seconds.
2. **Automated Customer Proof of Transit**: Customers receive real-time notifications as trucks pass key transit milestones.
3. **Driver Compliance Verification**: Ensures drivers adhere strictly to company-approved rest stops with secure overnight parking facilities.`,
    category: 'Vehicle Security',
    author: {
      name: 'Amina Yusuf',
      role: 'Logistics Operations Specialist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    },
    publishDate: 'July 24, 2026',
    readTime: '4 min read',
    tags: ['Geofencing', 'Logistics Security', 'Haulage'],
  },
];

export const HELP_TOPICS: HelpTopic[] = [
  {
    id: 'getting-started-1',
    category: 'Getting Started',
    title: 'How to Log Into the VolterTrack Web Dashboard',
    summary: 'Step-by-step guide to accessing your fleet dashboard from any desktop browser.',
    steps: [
      'Navigate to app.voltertrack.com in your web browser (Chrome, Edge, Safari, or Firefox recommended).',
      'Enter your registered account email and secure password provided during fleet onboarding.',
      'If multi-factor authentication is enabled, enter the 6-digit verification code sent to your phone or authenticator app.',
      'Upon successful login, your dashboard will automatically render the Live Fleet Map with all assigned vehicles.',
    ],
  },
  {
    id: 'getting-started-2',
    category: 'Getting Started',
    title: 'Adding and Registering a New Vehicle to Your Account',
    summary: 'How to create a vehicle profile and link it to an installed GPS tracker IMEI.',
    steps: [
      'In the left navigation menu, click on "Vehicles" and then select "Add New Vehicle".',
      'Enter the vehicle license plate number, make, model, year, and vehicle type (Sedan, Truck, Van, Motorcycle).',
      'Input the 15-digit Tracker IMEI number printed on your VolterTrack hardware box or provided by your technician.',
      'Assign a primary driver from your driver roster and assign the vehicle to a branch or department.',
      'Click "Save & Activate". The vehicle will appear online as soon as the tracker sends its first satellite ping.',
    ],
  },
  {
    id: 'geofencing-1',
    category: 'Alerts & Geofencing',
    title: 'Creating a Custom Polygon Geofence Around a Depot or Client Site',
    summary: 'Draw custom boundary shapes on the map to monitor entry and exit events.',
    steps: [
      'Open the "Geofences" panel from the top toolbar on the Live Map.',
      'Click "Create Geofence" and choose the "Polygon" tool.',
      'Click on the map to draw points enclosing your depot or client facility. Double-click to close the perimeter.',
      'Name your geofence (e.g., "Apapa Warehouse Gate 2") and select a color marker.',
      'Configure alert triggers: Check "Notify on Entry", "Notify on Exit", or both.',
      'Select which vehicle groups this geofence applies to and click "Save Geofence".',
    ],
  },
  {
    id: 'security-1',
    category: 'Hardware & Troubleshooting',
    title: 'How to Safely Trigger Remote Engine Immobilization',
    summary: 'Emergency protocol for disabling vehicle engine via mobile app or web console.',
    steps: [
      'Open the vehicle detail card in the VolterTrack mobile app or web dashboard.',
      'Click the "Security Controls" tab and select "Remote Engine Cutoff".',
      'Enter your account Security PIN. (For safety, the platform will only engage the cutoff relay when the vehicle is stationary or traveling below 15 km/h to prevent high-speed collisions).',
      'Confirm the command. The engine starter circuit or fuel relay will be disabled.',
      'To re-enable the vehicle, return to the panel and select "Restore Engine Circuit".',
    ],
  },
  {
    id: 'reports-1',
    category: 'Reports & Exports',
    title: 'Generating and Scheduling Automated Mileage & Trip Reports',
    summary: 'Export PDF, Excel, and CSV logs of daily journeys, idle times, and fuel usage.',
    steps: [
      'Click on the "Reports" tab in the main sidebar.',
      'Choose your report type: Trip Summary, Daily Mileage, Idle Time, or Speed Violations.',
      'Select the target vehicles or entire fleet, and choose the desired date range.',
      'Click "Generate Report" to preview the data and charts on screen.',
      'Click "Export" to download in Microsoft Excel (.xlsx), CSV, or Adobe PDF format.',
      'Optionally click "Schedule Email" to have this report sent to management every Monday morning.',
    ],
  },
  {
    id: 'troubleshooting-1',
    category: 'Hardware & Troubleshooting',
    title: 'Troubleshooting a Vehicle Showing "Offline" Status',
    summary: 'What to check when a vehicle stops updating its location.',
    steps: [
      'Check vehicle location: If the vehicle is parked inside an underground basement or metal container, satellite GPS signals may be obstructed until it exits.',
      'Verify vehicle battery: Ensure the vehicle battery has not been disconnected for prolonged maintenance.',
      'Check GSM cellular coverage: If the vehicle is traveling through a remote area with zero cellular service, the tracker will buffer telemetry and upload all routes once back in coverage.',
      'Inspect tracker LED indicators: If accessible, ensure the Green (GSM) and Blue (GPS) status lights are flashing.',
      'If the unit remains offline for more than 24 hours, contact VolterTrack Technical Support at support@voltertrack.com.',
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is VolterTrack and who is it designed for?',
    answer: 'VolterTrack is a modern fleet management and vehicle intelligence platform developed by Volternet Technologies. It is built for individual car owners, small businesses, transport operators, logistics carriers, corporate fleets, and government agencies who need real-time GPS visibility, asset security, route history, and operational telematics.',
  },
  {
    id: 'faq-2',
    category: 'Hardware & Tracking',
    question: 'How does GPS vehicle tracking work?',
    answer: 'A compact GPS telematics device is discreetly installed inside your vehicle and connected to the electrical system. It receives high-precision orbital coordinates from GPS, GLONASS, and Galileo satellites and transmits live speed, location, ignition status, and sensor data over cellular 4G/2G networks directly to the VolterTrack secure cloud server every few seconds.',
  },
  {
    id: 'faq-3',
    category: 'Hardware & Tracking',
    question: 'What types of vehicles and machinery can be tracked?',
    answer: 'VolterTrack is compatible with virtually all motorized assets: passenger sedans, SUVs, pickup trucks, light commercial vans, heavy haulage articulated trucks, interstate buses, delivery motorcycles, tricycles, construction excavators, cranes, tractors, and stationary diesel generators.',
  },
  {
    id: 'faq-4',
    category: 'Mobile & Web App',
    question: 'Can I monitor my vehicles from my smartphone?',
    answer: 'Yes! VolterTrack offers native mobile applications for iOS (iPhone) and Android, as well as a full-featured web browser dashboard. You can log into your account from any smartphone, tablet, laptop, or desktop computer simultaneously.',
  },
  {
    id: 'faq-5',
    category: 'General',
    question: 'Can I manage multiple vehicles on a single account?',
    answer: 'Absolutely. Whether you have 2 vehicles or 500+ vehicles across multiple regional branches, you can view your entire fleet on a single interactive map, group vehicles by department, and filter by status (moving, idle, parked, offline).',
  },
  {
    id: 'faq-6',
    category: 'Security & Alerts',
    question: 'What kinds of alerts and notifications will I receive?',
    answer: 'Depending on your configuration, VolterTrack delivers instant push notifications, SMS, and email alerts for: Engine Ignition ON/OFF, Speeding threshold violations, Geofence boundary entry/exit, Main vehicle battery disconnection, Device tamper/vibration, Unauthorized towing, and Scheduled maintenance milestones.',
  },
  {
    id: 'faq-7',
    category: 'Security & Alerts',
    question: 'How does the Remote Engine Immobilizer work?',
    answer: 'When a vehicle is reported stolen or unauthorized, an authorized user can issue an encrypted remote immobilizer command via the mobile app or web console. To ensure road safety, the system verifies vehicle velocity and safely disables the starter relay or fuel pump to prevent the vehicle from being restarted once brought to a halt.',
  },
  {
    id: 'faq-8',
    category: 'Hardware & Tracking',
    question: 'How often does the vehicle location update on the map?',
    answer: 'While in motion, VolterTrack devices transmit location updates every 5 to 10 seconds (configurable down to 1 second in high-frequency recovery mode). When parked with the engine off, the device enters a smart low-power sleep mode and sends heartbeat updates every 1 to 2 hours to conserve vehicle battery.',
  },
  {
    id: 'faq-9',
    category: 'General',
    question: 'Can multiple employees or managers access the account with different permissions?',
    answer: 'Yes. On our Business and Enterprise plans, VolterTrack provides hierarchical Role-Based Access Control (RBAC). You can create custom roles such as Dispatchers, Branch Managers, Maintenance Leads, and Read-Only Viewers, restricting visibility only to specific vehicle groups or departments.',
  },
  {
    id: 'faq-10',
    category: 'Hardware & Tracking',
    question: 'Do you provide professional hardware installation in Nigeria?',
    answer: 'Yes! VolterTrack has certified automotive technicians who perform clean, covert installations at your company premises, depot, or home address in Lagos, Abuja, Port Harcourt, Kano, Ibadan, and other major commercial cities across Nigeria.',
  },
  {
    id: 'faq-11',
    category: 'Pricing & Plans',
    question: 'How much does VolterTrack cost and how is billing structured?',
    answer: 'Pricing is transparent and modular, consisting of a one-time hardware unit cost (including tracker and SIM card), a one-time professional installation fee, and an ongoing monthly or discounted annual software platform subscription. View our Pricing page or use the interactive Quote Calculator for instant estimates.',
  },
  {
    id: 'faq-12',
    category: 'General',
    question: 'What is the relationship between VolterTrack and Volternet Technologies?',
    answer: 'VolterTrack is the flagship fleet management and vehicle intelligence product built and operated by Volternet Technologies—a leading technology and software engineering company. Volternet Technologies provides the underlying cloud architecture, IoT engineering, and enterprise platform support for VolterTrack.',
  },
];
