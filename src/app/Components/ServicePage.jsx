"use client";
import React from "react";
import {
  FaTools,
  FaLightbulb,
  FaPlug,
  FaFan,
  FaCogs,
  FaSolarPanel,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaTools className="text-blue-500 text-4xl" />,
    title: "Electrical Repairs",
    description: "Expert solutions for all your electrical repair needs.",
    // link: "/services/electrical-repairs",
    link: "/contact",
  },
  {
    icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
    title: "Lighting Installation",
    description: "Illuminate your space with stylish and efficient lighting.",
    // link: "/services/lighting-installation",
    link: "/contact",
  },
  {
    icon: <FaPlug className="text-green-500 text-4xl" />,
    title: "Wiring & Rewiring",
    description: "Safe and reliable wiring for homes and businesses.",
    // link: "/services/wiring-rewiring",
    link: "/contact",
  },
  {
    icon: <FaFan className="text-teal-500 text-4xl" />,
    title: "Fan & HVAC Services",
    description: "Stay comfortable with professional fan and HVAC solutions.",
    // link: "/services/fan-hvac",
    link: "/contact",
  },
  {
    icon: <FaCogs className="text-gray-500 text-4xl" />,
    title: "Appliance Maintenance",
    description: "Keep your appliances running like new with our services.",
    // link: "/services/appliance-maintenance",
    link: "/contact",
  },
  {
    icon: <FaSolarPanel className="text-orange-500 text-4xl" />,
    title: "Solar Panel Installation",
    description: "Embrace sustainability with our solar solutions.",
    // link: "/services/solar-panel-installation",
    link: "/contact",
  },
];

const ServicesPage = () => {
  return (
    <div className="container mx-auto p-6 space-y-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          At KelightElectrical, we offer a wide range of services tailored to
          meet your electrical needs with precision and care.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white shadow-lg rounded-lg p-6 text-center space-y-4 hover:shadow-2xl hover:scale-105 transform transition duration-300"
          >
            <div>{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-700">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
            <a href={service.link} className="text-blue-600 hover:underline">
              Learn More →
            </a>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="text-center space-y-6 bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Have Questions? Get in Touch!
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
          Our expert team is ready to assist you with all your electrical needs.
          Whether it's repairs, installations, or consultations, we’re here to
          help.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-blue-400 text-white rounded-lg text-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default ServicesPage;
