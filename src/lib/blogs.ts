export type Blog = {
  slug: string;
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
  readTime: string;
  category: string;
  content: { heading: string; body: string }[];
};

const Blogs: Blog[] = [
  {
    slug: "electrical-maintenance",
    title: "5 Signs Your Home Needs Electrical Maintenance",
    description:
      "Electrical maintenance is crucial to prevent potential hazards and ensure efficiency. Learn the warning signs that your home may need immediate attention.",
    image: "/assets/blog1.jpg",
    link: "/blogs/electrical-maintenance",
    date: "Jan 12, 2025",
    readTime: "5 min read",
    category: "Maintenance",
    content: [
      {
        heading: "Why Electrical Maintenance Matters",
        body: "Your home's electrical system works silently in the background every day. Over time, wiring ages, connections loosen, and circuit demand increases. Ignoring warning signs can result in electrical fires, costly repairs, or even electrocution.",
      },
      {
        heading: "1. Frequent Circuit Breaker Trips",
        body: "If your breaker trips regularly, it's a clear signal that a circuit is overloaded or there is a fault in the wiring. Occasional trips are normal, but regular ones need a professional inspection immediately.",
      },
      {
        heading: "2. Flickering or Dimming Lights",
        body: "Lights that flicker or dim — especially when appliances start — can indicate loose wiring connections, a failing fixture, or an overloaded circuit. This should never be ignored.",
      },
      {
        heading: "3. Buzzing or Burning Smells",
        body: "Any burning smell from outlets, switches, or your electrical panel is a serious warning. A buzzing sound from walls or outlets often points to arcing wires — a leading cause of house fires.",
      },
      {
        heading: "4. Warm or Discolored Outlets",
        body: "Outlets that feel warm to the touch, or show scorch marks and discoloration, indicate dangerous overheating. This could be due to a loose connection, overload, or faulty wiring.",
      },
      {
        heading: "5. Outdated Wiring",
        body: "Homes older than 25 years may have wiring that no longer meets modern safety standards. Aluminum wiring, knob-and-tube, or two-prong outlets are all signs that a full electrical inspection is needed.",
      },
      {
        heading: "What to Do Next",
        body: "Don't wait for a crisis. Schedule a professional electrical maintenance inspection with KelightElectrical. Our certified team will assess your system, fix any issues, and ensure your home is safe and code-compliant.",
      },
    ],
  },
  {
    slug: "safe-wiring",
    title: "Top 10 Tips for Safe Wiring Installation",
    description:
      "Wiring can be tricky, but safety is key. Here are the top 10 tips for safe wiring in your home or office.",
    image: "/assets/blog2.jpg",
    link: "/blogs/safe-wiring",
    date: "Feb 5, 2025",
    readTime: "6 min read",
    category: "Safety",
    content: [
      {
        heading: "Safety First in Electrical Work",
        body: "Wiring installation requires precision and attention to detail. Improper installation can lead to electrical fires, system malfunctions, or fatal shocks. Follow these ten essential guidelines to stay safe.",
      },
      { heading: "1. Always Turn Off Power First", body: "Before starting any wiring project, switch off the relevant circuit at the breaker panel and use a voltage tester to confirm no current is flowing." },
      { heading: "2. Use the Right Wire Gauge", body: "Match wire gauge to the circuit's amperage. Using the wrong gauge causes overheating and fire hazards. Always refer to local electrical codes." },
      { heading: "3. Don't Overload Circuits", body: "Never connect too many devices to a single circuit. Overloading causes overheating, breaker trips, and can ignite surrounding materials." },
      { heading: "4. Use Proper Grounding", body: "Ground all outlets and switches to protect against electrical shock. A properly earthed system is your first line of defence against faults." },
      { heading: "5. Inspect Wires Before Use", body: "Check all cables for cuts, kinks, or damaged insulation before installation. Damaged cables should never be used — replace them immediately." },
      { heading: "6. Follow Local Electrical Codes", body: "All wiring must comply with your country's electrical regulations. In Nigeria, this means following the guidelines set by SON (Standards Organisation of Nigeria)." },
      { heading: "7. Use Approved Materials Only", body: "Only use wires, outlets, and fittings that meet certified safety standards. Counterfeit electrical materials are a leading cause of building fires." },
      { heading: "8. Avoid DIY for Complex Work", body: "Simple lamp replacements aside, leave circuit work, panel upgrades, and rewiring to certified electricians. The risk of injury or fire is too high." },
      { heading: "9. Test All Circuits After Installation", body: "Use a circuit tester or multimeter to verify correct voltage and polarity before switching power back on." },
      { heading: "10. Conduct Regular Inspections", body: "Schedule an electrical inspection every 3–5 years. Catching small issues early prevents dangerous and expensive failures later." },
    ],
  },
  {
    slug: "smart-lighting",
    title: "How to Save Energy with Smart Lighting Solutions",
    description:
      "Discover how smart lighting can help you save energy and significantly reduce electricity bills while enhancing your space.",
    image: "/assets/blog3.jpg",
    link: "/blogs/smart-lighting",
    date: "Feb 20, 2025",
    readTime: "4 min read",
    category: "Energy Saving",
    content: [
      { heading: "The Rise of Smart Lighting", body: "Smart lighting technology has transformed how homes and businesses manage energy. With LED bulbs, motion sensors, and app-controlled systems, you can cut lighting energy use by up to 75%." },
      { heading: "LED Bulbs: The Foundation", body: "LED bulbs use up to 80% less energy than traditional incandescent bulbs and last 25 times longer. Replacing your entire home is one of the single best investments you can make." },
      { heading: "Smart Dimmers and Switches", body: "Dimmer switches allow you to reduce brightness — and energy consumption — based on your actual needs. Smart dimmers connected to an app let you control every room from your phone." },
      { heading: "Motion Sensors Save Automatically", body: "Motion-activated lights eliminate energy waste in hallways, bathrooms, and storerooms. Lights only turn on when someone is present and switch off automatically." },
      { heading: "Scheduling and Automation", body: "Program lights to turn on at sunset and off at bedtime. Smart home systems like Google Home or Amazon Alexa can automate your entire lighting schedule." },
      { heading: "Daylight Harvesting", body: "Modern lighting systems can detect available natural light and automatically reduce artificial lighting. This is especially effective in offices and commercial buildings." },
      { heading: "Getting Started", body: "KelightElectrical can help you design and install a smart lighting system tailored to your home or business. Contact us today for a free consultation." },
    ],
  },
  {
    slug: "surge-protection",
    title: "The Importance of Surge Protection in Modern Homes",
    description:
      "Surge protection is a necessity in today's tech-driven homes. Learn why it's important and how it works.",
    image: "/assets/blog4.jpg",
    link: "/blogs/surge-protection",
    date: "Mar 3, 2025",
    readTime: "5 min read",
    category: "Safety",
    content: [
      { heading: "What is a Power Surge?", body: "A power surge is a sudden spike in electrical voltage that far exceeds the standard level. Surges can last microseconds but generate enough energy to permanently damage electronics and appliances." },
      { heading: "Common Causes of Power Surges", body: "Lightning strikes are the most dramatic cause, but most surges happen internally — from large appliances cycling on and off, or from utility grid switching. In Nigeria, irregular NEPA power supply is a major source." },
      { heading: "What Gets Damaged?", body: "TVs, computers, refrigerators, air conditioners, smart meters, and any device with a circuit board are all vulnerable. A single surge can cost hundreds of thousands of naira in replacements." },
      { heading: "How Surge Protectors Work", body: "A surge protector diverts excess voltage away from your devices through a component called a Metal Oxide Varistor (MOV). Whole-home surge protectors installed at your distribution board protect every circuit simultaneously." },
      { heading: "Whole-Home vs Point-of-Use Protection", body: "Whole-home surge protectors offer comprehensive protection at the panel level. Point-of-use protectors (power strips) provide a second layer for high-value devices. Both together give maximum protection." },
      { heading: "Solar and Generator Users Need This Too", body: "Inverters and generators themselves can introduce voltage irregularities. Surge protection is essential if you rely on alternative power sources." },
      { heading: "Get Protected Today", body: "KelightElectrical installs certified whole-home and individual surge protection systems. Don't wait for a costly surge — contact us to protect your investment." },
    ],
  },
  {
    slug: "electrical-panel-upgrade",
    title: "5 Reasons to Upgrade Your Electrical Panel",
    description:
      "An outdated electrical panel can cause significant problems. Find out why upgrading it is a smart and necessary investment.",
    image: "/assets/blog5.jpg",
    link: "/blogs/electrical-panel-upgrade",
    date: "Mar 18, 2025",
    readTime: "5 min read",
    category: "Upgrades",
    content: [
      { heading: "What Does Your Electrical Panel Do?", body: "Your electrical panel (also called a distribution board or consumer unit) is the nerve centre of your home's electricity supply. It distributes power to all circuits and protects them from overloads through circuit breakers." },
      { heading: "1. Your Panel is Over 25 Years Old", body: "Older panels were designed for much lower electrical loads than modern homes require. They may lack safety features like arc fault breakers and GFCI protection, increasing fire and shock risk." },
      { heading: "2. You're Adding Major Appliances", body: "Air conditioners, EV chargers, solar systems, and industrial equipment all require dedicated circuits with adequate amperage. An older panel often can't support these additions safely." },
      { heading: "3. You Experience Frequent Breaker Trips", body: "Breakers that constantly trip are your panel's way of saying it's overloaded. Rather than resetting the same breaker repeatedly, upgrade to a higher-capacity panel with more circuit slots." },
      { heading: "4. You Have a Fuse Box Instead of Breakers", body: "Fuse boxes are obsolete and a fire hazard. They can't be reset when they blow, and cheap replacements are often the wrong rating for the circuit. A breaker panel upgrade is essential." },
      { heading: "5. Your Home Insurance Requires It", body: "Many insurance companies in Nigeria will not cover homes with outdated panels or will charge significantly higher premiums. An upgraded panel can lower your insurance costs." },
      { heading: "Upgrade with KelightElectrical", body: "Our certified electricians will assess your current panel, recommend the right capacity upgrade, and complete the installation safely and efficiently. Contact us for a free assessment." },
    ],
  },
  {
    slug: "choosing-electrician",
    title: "Choosing the Right Electrician for Your Project",
    description:
      "Not all electricians are the same. Learn how to choose the right professional for your electrical needs.",
    image: "/assets/blog6.jpg",
    link: "/blogs/choosing-electrician",
    date: "Apr 2, 2025",
    readTime: "4 min read",
    category: "Tips",
    content: [
      { heading: "Why Choosing Carefully Matters", body: "Electrical work done incorrectly doesn't just fail — it can cause fires, electrocution, and failed building inspections. Choosing the right electrician is a safety decision, not just a cost decision." },
      { heading: "1. Verify Certification and Licensing", body: "Always ask for a qualified electrician's certificate. In Nigeria, look for electricians trained under NIEE (Nigerian Institution of Electrical-Electronic Engineers) or who hold COREN registration." },
      { heading: "2. Check Experience and Specialization", body: "Ask how many years they've been working and whether they specialize in your type of project — residential, commercial, or industrial. Experience directly correlates with quality and safety." },
      { heading: "3. Ask for References", body: "A confident, reputable electrician will happily provide client references. Contact two or three past clients to verify quality, professionalism, and whether they delivered on time and on budget." },
      { heading: "4. Get Multiple Written Quotes", body: "Never accept a verbal estimate. Get at least two or three written quotes that detail the scope of work, materials to be used, timeline, and payment terms. The cheapest is not always the best." },
      { heading: "5. Confirm Insurance Coverage", body: "Your electrician should carry public liability insurance. This protects you if something goes wrong during the project — property damage, injury, or faulty work." },
      { heading: "6. Look for Professionalism", body: "Punctuality, clear communication, a professional uniform, and organized tools are strong indicators of how an electrician approaches their work." },
      { heading: "Why Choose KelightElectrical", body: "KelightElectrical ticks every box — certified, experienced, insured, and professional. Contact us today for a transparent quote and expert advice." },
    ],
  },
  {
    slug: "home-automation-guide",
    title: "A Beginner's Guide to Home Automation",
    description:
      "Home automation can seem overwhelming, but this beginner's guide breaks it down simply and practically.",
    image: "/assets/blog7.jpg",
    link: "/blogs/home-automation-guide",
    date: "Apr 14, 2025",
    readTime: "7 min read",
    category: "Smart Home",
    content: [
      { heading: "What is Home Automation?", body: "Home automation — also called a smart home — allows you to control electrical systems and devices in your home remotely or automatically through a smartphone app, voice commands, or pre-set schedules." },
      { heading: "Core Components of a Smart Home", body: "A home automation system typically includes a smart hub or controller, smart switches and sockets, smart lights and bulbs, motion and temperature sensors, and connected appliances." },
      { heading: "Lighting Automation", body: "Smart lights can be controlled by voice, app, or schedule. Set lights to turn on at sunset, dim automatically for movie night, or flash as an alarm when sensors are triggered." },
      { heading: "Smart Security", body: "Automated door locks, video doorbells, motion-triggered cameras, and smart alarms all integrate into one system you can monitor from your phone anywhere in the world." },
      { heading: "Climate Control", body: "Smart air conditioners and fans can learn your preferences and adjust automatically. This saves energy by cooling only when needed and at optimal temperatures." },
      { heading: "Energy Monitoring", body: "Smart meters and energy monitors track your electricity consumption in real time. You can identify energy-hungry appliances and take action to reduce your bills." },
      { heading: "How to Get Started", body: "Start small — a few smart bulbs and a smart switch are a great first step. Once comfortable, expand to security and climate systems. KelightElectrical can design and install your complete smart home system." },
    ],
  },
  {
    slug: "electrical-inspections",
    title: "Why Regular Electrical Inspections Are Essential",
    description:
      "Regular electrical inspections can prevent disasters. Learn why they're essential for every property owner.",
    image: "/assets/blog8.jpg",
    link: "/blogs/electrical-inspections",
    date: "Apr 28, 2025",
    readTime: "5 min read",
    category: "Safety",
    content: [
      { heading: "The Purpose of an Electrical Inspection", body: "An electrical inspection — formally called an Electrical Installation Condition Report (EICR) — assesses the safety and condition of all wiring, fixtures, and electrical equipment in a building." },
      { heading: "How Often Should You Inspect?", body: "Homeowners: every 10 years. Landlords and rental properties: every 5 years, or between tenancies. Commercial properties: every 3–5 years depending on usage and equipment type." },
      { heading: "What Does an Inspection Cover?", body: "A comprehensive inspection checks the distribution board, all circuits, earthing and bonding, socket outlets, fixed appliances, and visual inspection of all accessible wiring." },
      { heading: "Hidden Dangers Inspections Catch", body: "Many electrical hazards develop invisibly inside walls or under floors — deteriorating insulation, corroded connections, vermin damage to cables, and overloaded circuits. An inspection catches these before they become emergencies." },
      { heading: "Inspections and Insurance", body: "Many home and commercial insurance policies require up-to-date electrical inspection records. A valid EICR can also increase property value and reassure tenants." },
      { heading: "Consequences of Skipping Inspections", body: "Fires caused by electrical faults account for a significant percentage of building fires in Nigeria. Many are entirely preventable with a routine inspection." },
      { heading: "Book Your Inspection Today", body: "KelightElectrical provides thorough, certified electrical inspections for residential and commercial properties. Contact us to schedule yours." },
    ],
  },
  {
    slug: "energy-efficient-design",
    title: "How to Design Energy-Efficient Electrical Systems",
    description:
      "Energy efficiency starts with smart electrical design. Explore practical tips for creating an efficient system from the ground up.",
    image: "/assets/blog9.jpg",
    link: "/blogs/energy-efficient-design",
    date: "May 7, 2025",
    readTime: "6 min read",
    category: "Energy Saving",
    content: [
      { heading: "Design Before You Build", body: "The most cost-effective time to implement energy efficiency is during the design phase — before walls are closed. Retrofitting an existing building is significantly more expensive than building it right the first time." },
      { heading: "Right-Size Your Electrical Load", body: "Calculate your expected peak electrical demand accurately. Oversizing leads to energy waste; undersizing causes overloads. A proper load calculation ensures every circuit is sized correctly." },
      { heading: "Use Energy-Efficient Lighting", body: "Specify LED lighting throughout — including recessed, pendant, and exterior fittings. Combine with daylight sensors and occupancy sensors to minimize consumption further." },
      { heading: "Install Sub-Metering", body: "Sub-meters on different zones or floors of a building let you identify where energy is consumed. This data empowers you to target the highest consumers for efficiency improvements." },
      { heading: "Optimize Appliance Layout", body: "Place high-draw appliances — refrigerators, AC units, water heaters — on dedicated circuits close to the distribution board to minimize voltage drop and energy loss." },
      { heading: "Factor in Renewable Energy", body: "Design your electrical system with solar integration in mind from the start. Install conduit routes for future solar cabling, and size your distribution board for an inverter input." },
      { heading: "Engage a Professional Designer", body: "KelightElectrical's team designs energy-efficient electrical systems for new builds and renovations. We combine technical expertise with practical experience to minimize your long-term energy costs." },
    ],
  },
  {
    slug: "renewable-energy-projects",
    title: "The Role of Electricians in Renewable Energy Projects",
    description:
      "Electricians play a critical role in the transition to renewable energy. Learn how they contribute to solar, wind, and more.",
    image: "/assets/blog10.jpg",
    link: "/blogs/renewable-energy-projects",
    date: "May 19, 2025",
    readTime: "5 min read",
    category: "Renewable Energy",
    content: [
      { heading: "Renewable Energy Needs Electricians", body: "While solar panels and wind turbines generate electricity, it takes certified electricians to safely connect, integrate, and maintain these systems with existing power infrastructure." },
      { heading: "Solar PV Installation", body: "Electricians are responsible for mounting panel arrays, running DC cabling, installing inverters, setting up battery banks, and connecting the system to the grid or building distribution board safely." },
      { heading: "Inverter and Battery Systems", body: "Inverter selection, sizing, and integration with backup battery storage requires deep electrical knowledge. Incorrect sizing leads to underperformance, overheating, and system failure." },
      { heading: "Grid Tie and Off-Grid Systems", body: "Grid-tied systems require careful synchronization with the utility grid. Off-grid systems need sizing that accounts for peak demand and days of autonomy. Both require specialist electrical expertise." },
      { heading: "Maintenance and Monitoring", body: "Renewable energy systems are long-term investments. Regular electrical maintenance — checking connections, cleaning contacts, and testing inverters — ensures they operate at peak efficiency for their full lifespan." },
      { heading: "Wind and Hydro", body: "Though less common in Nigeria, small-scale wind turbines and micro-hydro systems also require certified electricians for installation, generator connection, and load management." },
      { heading: "KelightElectrical and Renewables", body: "KelightElectrical is experienced in solar PV installation and integration. We design complete systems from panels to inverters, batteries, and distribution. Contact us to start your renewable energy journey." },
    ],
  },
  {
    slug: "choosing-solar-system",
    title: "Questions to Ask Yourself Before Choosing a Solar System",
    description:
      "There are different grades and capacities of solar systems. Before choosing a setup, here are some important questions to ask yourself to find the perfect fit.",
    image: "/assets/blog11.jpg",
    link: "/blogs/choosing-solar-system",
    date: "May 28, 2026",
    readTime: "6 min read",
    category: "Solar Energy",
    content: [
      {
        heading: "1. What appliances (loads) do you want to power?",
        body: "Examples include Bulbs, Fans, TVs, Decoder, Refrigerator, Freezer, Air Conditioner, Pumping machine, Laptop/Desktop, and CCTV cameras.",
      },
      {
        heading: "2. What is your budget?",
        body: "Your budget helps determine the size of the inverter, battery capacity, number of solar panels, and overall backup duration.",
      },
      {
        heading: "3. How long do you want the system to last during the night?",
        body: "Consider your needs for example: 4–6 hours, overnight usage, or 24/7 backup.",
      },
      {
        heading: "4. Do you want to power only essential appliances or the whole house?",
        body: "Some clients only want lights, fans, and TV. Others may want full-house coverage including ACs and heavy appliances.",
      },
      {
        heading: "5. How many hours of electricity supply do you currently get daily?",
        body: "This helps determine your necessary battery size, charging requirements, and solar panel quantity.",
      },
      {
        heading: "6. Are there heavy appliances you want to run?",
        body: "Examples include Air conditioners, Electric iron, Microwave, Water heater, and Deep freezer. Heavy loads require stronger and more expensive systems.",
      },
      {
        heading: "7. Do you prefer a future-upgradable system?",
        body: "Some systems can easily be expanded later by adding more batteries, adding more solar panels, or upgrading inverter capacity.",
      },
      {
        heading: "8. Do you want a solar-only system or solar + generator backup?",
        body: "Some setups integrate PHCN, a Generator, and a Solar system together.",
      },
      {
        heading: "9. What type of battery do you prefer?",
        body: "Options include Lithium batteries (longer lifespan, faster charging) or Tubular/Lead-acid batteries (more affordable).",
      },
      {
        heading: "10. How important is silent and stress-free power to you?",
        body: "Solar offers no generator noise, no fuel expenses, minimal maintenance, and cleaner energy.",
      },
      {
        heading: "11. Do you have enough roof space for solar panels?",
        body: "The available installation space affects the number of panels and expansion possibilities.",
      },
      {
        heading: "12. Are you looking for a temporary solution or a long-term investment?",
        body: "A good solar system is a long-term investment that can save money over time. At Kelight Electrical, we help you choose a solar solution that fits your needs and your budget perfectly.",
      },
    ],
  },
];

export default Blogs;
