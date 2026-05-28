"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaLightbulb, FaWrench, FaTools, FaBolt,
  FaFan, FaPlug, FaCogs, FaSolarPanel,
  FaArrowRight,
} from "react-icons/fa";

const serviceCards = [
  {
    icon: <FaLightbulb className="text-yellow-400 text-4xl" />,
    title: "Lighting Installation",
    description: "Professional indoor and outdoor lighting systems for homes and businesses.",
    href: "/services/lighting",
    accent: "bg-yellow-50 border-yellow-100",
  },
  {
    icon: <FaWrench className="text-blue-500 text-4xl" />,
    title: "Wiring & Rewiring",
    description: "Safe, code-compliant wiring for new builds and complete rewiring projects.",
    href: "/services/wiring",
    accent: "bg-blue-50 border-blue-100",
  },
  {
    icon: <FaTools className="text-green-500 text-4xl" />,
    title: "Electrical Maintenance",
    description: "Preventative maintenance and emergency fault finding to keep your system safe.",
    href: "/services/maintenance",
    accent: "bg-green-50 border-green-100",
  },
  {
    icon: <FaBolt className="text-orange-400 text-4xl" />,
    title: "Surge Protection",
    description: "Whole-home surge protection to shield appliances from damaging voltage spikes.",
    href: "/services/surge-protection",
    accent: "bg-orange-50 border-orange-100",
  },
  {
    icon: <FaFan className="text-purple-500 text-4xl" />,
    title: "Fan Installation",
    description: "Ceiling, wall, and industrial fan installation with speed control upgrades.",
    href: "/services/fan-installation",
    accent: "bg-purple-50 border-purple-100",
  },
  {
    icon: <FaPlug className="text-red-400 text-4xl" />,
    title: "Socket Repairs",
    description: "Fast, safe diagnosis and repair of faulty, burnt, or sparking sockets.",
    href: "/services/socket-repairs",
    accent: "bg-red-50 border-red-100",
  },
  {
    icon: <FaCogs className="text-gray-500 text-4xl" />,
    title: "Appliance Maintenance",
    description: "Servicing and maintenance for air conditioners, generators, and appliances.",
    href: "/services/appliance-maintenance",
    accent: "bg-gray-50 border-gray-200",
  },
  {
    icon: <FaSolarPanel className="text-amber-400 text-4xl" />,
    title: "Solar Panel Installation",
    description: "Complete solar power systems designed and installed for maximum savings.",
    href: "/services/solar-panel-installation",
    accent: "bg-amber-50 border-amber-100",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {serviceCards.map((service, i) => (
        <motion.div
          key={service.title}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="group"
        >
          <Link
            href={service.href}
            className={`block h-full p-6 rounded-2xl border ${service.accent} hover:shadow-lg transition-all duration-300`}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="font-bold text-gray-800 text-base mb-2 group-hover:text-blue-600 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
            <div className="flex items-center gap-1 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Learn more <FaArrowRight className="text-xs" />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
