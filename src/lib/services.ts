export type ServiceStep = {
  num: number;
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  icon: string;
  price: string;
  priceNote: string;
  features: string[];
  steps: ServiceStep[];
  testimonials: { name: string; text: string }[];
};

const Services: Service[] = [
  {
    slug: "lighting",
    title: "Lighting Installation",
    tagline: "Brighten your space with expert lighting solutions.",
    description:
      "We provide professional indoor and outdoor lighting installation tailored to residential, commercial, and industrial properties. From ambient lighting to smart LED setups, our team ensures your space is perfectly lit.",
    heroImage: "/assets/services/lighting.jpg",
    icon: "FaLightbulb",
    price: "From ₦20,000",
    priceNote: "Price varies based on scope and number of fittings.",
    features: [
      "Full indoor and outdoor lighting systems",
      "LED and energy-efficient bulb upgrades",
      "Smart lighting and dimmer installations",
      "Safety-compliant wiring and fittings",
      "Commercial and residential solutions",
    ],
    steps: [
      { num: 1, title: "Consultation", description: "We assess your space and discuss your lighting goals." },
      { num: 2, title: "Design", description: "A tailored lighting plan is created for optimal placement and aesthetics." },
      { num: 3, title: "Installation", description: "Our certified electricians install all fittings and wiring safely." },
      { num: 4, title: "Testing", description: "All circuits and connections are tested before handover." },
    ],
    testimonials: [
      { name: "Adaeze O.", text: "Our office was transformed with the new LED lighting. Very professional team!" },
      { name: "Emeka N.", text: "Fast and clean installation. The smart dimmer system is exactly what we wanted." },
    ],
  },
  {
    slug: "wiring",
    title: "Wiring & Rewiring",
    tagline: "Safe and code-compliant electrical wiring for every building.",
    description:
      "Our certified electricians handle complete wiring and rewiring projects for new constructions, renovations, and existing structures requiring electrical upgrades. We ensure full compliance with Nigerian Electrical Safety Standards.",
    heroImage: "/assets/services/wiring.jpg",
    icon: "FaWrench",
    price: "From ₦35,000",
    priceNote: "Price depends on property size and wiring complexity.",
    features: [
      "New construction wiring and panel setup",
      "Full property rewiring and upgrades",
      "Compliance with NEC and local codes",
      "Concealed and surface wiring options",
      "Grounding and earthing solutions",
    ],
    steps: [
      { num: 1, title: "Assessment", description: "We inspect existing wiring and identify hazards or upgrade needs." },
      { num: 2, title: "Planning", description: "A detailed circuit plan is drawn up to meet all safety standards." },
      { num: 3, title: "Wiring", description: "All cables, conduits, and connections are expertly installed." },
      { num: 4, title: "Certification", description: "A safety check is conducted and a completion certificate is issued." },
    ],
    testimonials: [
      { name: "Kola A.", text: "They rewired our entire building safely and on time. Excellent work!" },
      { name: "Blessing I.", text: "Very thorough. They explained every step and left the place spotless." },
    ],
  },
  {
    slug: "maintenance",
    title: "Electrical Maintenance",
    tagline: "Preventative care that keeps your electrical system running safely.",
    description:
      "Regular electrical maintenance prevents costly breakdowns and dangerous faults. Our maintenance service covers routine inspections, fault detection, component testing, and emergency callouts for residential and commercial clients.",
    heroImage: "/assets/services/maintenance.jpg",
    icon: "FaTools",
    price: "From ₦15,000",
    priceNote: "Monthly and annual maintenance contracts available.",
    features: [
      "Routine electrical safety inspections",
      "Fault finding and circuit testing",
      "Breaker and fuse panel servicing",
      "Emergency same-day callouts",
      "Annual maintenance contracts for businesses",
    ],
    steps: [
      { num: 1, title: "Scheduling", description: "Book a maintenance visit at your convenience." },
      { num: 2, title: "Inspection", description: "Our team thoroughly checks all circuits, panels, and appliances." },
      { num: 3, title: "Repairs", description: "Any faults discovered are repaired immediately where possible." },
      { num: 4, title: "Report", description: "You receive a detailed health report of your electrical system." },
    ],
    testimonials: [
      { name: "Ngozi T.", text: "KelightElectrical's maintenance contract saved us from a major fault. Highly recommended." },
      { name: "David E.", text: "Prompt, thorough, and very professional. Our go-to electricians." },
    ],
  },
  {
    slug: "surge-protection",
    title: "Surge Protection",
    tagline: "Shield your appliances and electronics from voltage spikes.",
    description:
      "Power surges can destroy expensive appliances and electronics in seconds. Our surge protection solutions safeguard your home or business with whole-building surge protectors, individual outlet protection, and proper earthing systems.",
    heroImage: "/assets/services/surge-protection.jpg",
    icon: "FaBolt",
    price: "From ₦18,000",
    priceNote: "Cost varies by protection level and number of circuits.",
    features: [
      "Whole-building surge protection units",
      "Individual socket and appliance protection",
      "Generator changeover protection",
      "Earthing and bonding installation",
      "Compatible with solar and inverter systems",
    ],
    steps: [
      { num: 1, title: "Risk Assessment", description: "We evaluate your property's surge risk and sensitive equipment." },
      { num: 2, title: "Recommendation", description: "We recommend the appropriate protection tier for your needs." },
      { num: 3, title: "Installation", description: "Surge protectors are fitted at the distribution board and key outlets." },
      { num: 4, title: "Verification", description: "All protection devices are tested for effective operation." },
    ],
    testimonials: [
      { name: "Funke B.", text: "After a surge burned our TV, KelightElectrical installed full protection. No issues since!" },
      { name: "Raymond O.", text: "Professional installation of surge protectors. Peace of mind for our business." },
    ],
  },
  {
    slug: "fan-installation",
    title: "Fan Installation",
    tagline: "Expert ceiling and industrial fan installation done right.",
    description:
      "From ceiling fans in bedrooms to industrial exhaust fans in warehouses, our team installs all types of fans safely and securely. We also handle replacements, motor repairs, and speed controller upgrades.",
    heroImage: "/assets/services/fan-installation.jpg",
    icon: "FaFan",
    price: "From ₦8,000",
    priceNote: "Per fan. Bulk installation packages available.",
    features: [
      "Ceiling and pedestal fan installation",
      "Industrial exhaust and ventilation fans",
      "Speed controller and remote upgrades",
      "Fan motor and blade replacement",
      "Safe ceiling bracket and wiring work",
    ],
    steps: [
      { num: 1, title: "Site Check", description: "We confirm ceiling height, fan type, and wiring access." },
      { num: 2, title: "Bracket Setup", description: "Ceiling mounts are securely fixed to prevent wobbling." },
      { num: 3, title: "Wiring", description: "Fan is connected to the correct circuit with proper switching." },
      { num: 4, title: "Testing", description: "All speeds and directions are tested before completion." },
    ],
    testimonials: [
      { name: "Chioma P.", text: "Three ceiling fans installed in one afternoon. Very efficient team!" },
      { name: "Hassan M.", text: "Great job replacing our old fan motor. Works like new!" },
    ],
  },
  {
    slug: "socket-repairs",
    title: "Socket Repairs",
    tagline: "Faulty sockets fixed fast, safely, and professionally.",
    description:
      "Damaged or sparking sockets are a serious fire hazard. Our electricians diagnose and repair faulty sockets, replace broken outlets, install additional sockets, and upgrade to USB and smart outlet options.",
    heroImage: "/assets/services/socket-repairs.jpg",
    icon: "FaPlug",
    price: "From ₦5,000",
    priceNote: "Per socket/outlet. Minimum call-out fee applies.",
    features: [
      "Faulty socket diagnosis and repair",
      "Double and triple socket replacements",
      "USB and smart outlet upgrades",
      "Additional socket point installation",
      "Outdoor and weatherproof socket fitting",
    ],
    steps: [
      { num: 1, title: "Diagnosis", description: "We identify the cause — loose wiring, burnt contacts, or circuit faults." },
      { num: 2, title: "Isolation", description: "The affected circuit is safely isolated before any work begins." },
      { num: 3, title: "Repair/Replace", description: "Faulty components are repaired or replaced with new fittings." },
      { num: 4, title: "Test", description: "The socket is tested with load to confirm safe operation." },
    ],
    testimonials: [
      { name: "Tunde A.", text: "Fixed our sparking socket within an hour. Safe and reliable service." },
      { name: "Lara J.", text: "They installed extra sockets in our home office. Clean and tidy work." },
    ],
  },
  {
    slug: "appliance-maintenance",
    title: "Appliance Maintenance",
    tagline: "Keep your electrical appliances running longer and safer.",
    description:
      "We service and maintain a wide range of electrical appliances — from air conditioners and refrigerators to generators and industrial equipment. Our preventative maintenance extends appliance lifespan and reduces energy consumption.",
    heroImage: "/assets/services/appliance-maintenance.jpg",
    icon: "FaCogs",
    price: "From ₦12,000",
    priceNote: "Price depends on appliance type and complexity.",
    features: [
      "Air conditioner cleaning and servicing",
      "Refrigerator and freezer maintenance",
      "Generator servicing and repairs",
      "Industrial equipment maintenance",
      "Electrical fault diagnosis on appliances",
    ],
    steps: [
      { num: 1, title: "Booking", description: "Schedule an appliance maintenance visit at a time that suits you." },
      { num: 2, title: "Diagnosis", description: "We run diagnostics on the appliance to identify issues." },
      { num: 3, title: "Service", description: "Cleaning, lubrication, part replacement, and tuning are performed." },
      { num: 4, title: "Performance Check", description: "The appliance is run under load to verify optimal performance." },
    ],
    testimonials: [
      { name: "Grace N.", text: "Our AC unit is working better than when it was new. Excellent service!" },
      { name: "Peter K.", text: "Generator serviced and running perfectly. Very reasonable pricing." },
    ],
  },
  {
    slug: "solar-panel-installation",
    title: "Solar Panel Installation",
    tagline: "Harness the power of the sun with expert solar solutions.",
    description:
      "Going solar is the smartest investment for your home or business. Our team designs and installs complete solar power systems — from rooftop panels to battery storage and inverter integration — ensuring maximum efficiency and savings.",
    heroImage: "/assets/services/solar-installation.jpg",
    icon: "FaSolarPanel",
    price: "From ₦450,000",
    priceNote: "Full system pricing depends on capacity (kW) and panel count.",
    features: [
      "Solar panel design and full installation",
      "Battery storage and inverter setup",
      "On-grid and off-grid system options",
      "Net metering and monitoring systems",
      "Post-installation support and warranty",
    ],
    steps: [
      { num: 1, title: "Energy Assessment", description: "We evaluate your energy needs and optimal panel placement." },
      { num: 2, title: "System Design", description: "A custom solar system is designed for maximum output and savings." },
      { num: 3, title: "Installation", description: "Panels, inverters, and batteries are professionally installed." },
      { num: 4, title: "Activation", description: "The system is activated, monitored, and handed over with full guidance." },
    ],
    testimonials: [
      { name: "Jessica H.", text: "The solar installation was seamless and professional. We're already saving on energy bills!" },
      { name: "Samuel T.", text: "They explained everything clearly and delivered excellent service. The system works perfectly!" },
    ],
  },
];

export default Services;
