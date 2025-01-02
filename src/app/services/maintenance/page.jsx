"use client";
import React from "react";
import { motion } from "framer-motion";
import ServicesTestimonials from "@/app/testimonials/ServicesTestimonials";
import Link from "next/link";

const HOW_IT_WORKS = [
  {
    num: 1,
    title: "Initial Assessment",
    description:
      "We evaluate your electrical system to identify potential issues or inefficiencies.",
  },
  {
    num: 2,
    title: "Preventive Maintenance",
    description:
      "Regular servicing of electrical systems to avoid costly repairs and downtime.",
  },
  {
    num: 3,
    title: "Repairs & Upgrades",
    description:
      "Fixing faults and recommending updates to improve performance and safety.",
  },
  {
    num: 4,
    title: "Final Report",
    description:
      "Providing a detailed report on the maintenance work completed and future recommendations.",
  },
];

const clientInfo = [
  {
    img: "/assets/testimonial1.jpg",
    name: "Sarah M.",
    testimonial:
      "The lighting design transformed our living room! The team was efficient and professional.",
  },
  {
    img: "/assets/testimonial2.jpg",
    name: "John D.",
    testimonial:
      "Highly recommend! They installed energy-efficient lighting that made a noticeable difference.",
  },
  {
    img: "/assets/testimonial7.jpg",
    name: "Mark Ayo.",
    testimonial:
      "Excellent service! The team was fast, friendly, and did a fantastic job installing our lighting. Very pleased with the results!",
  },
];

const ElectricalMaintenance = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section with Overlay Image */}
      <motion.header
        variants={fadeIn}
        className="relative bg-cover bg-center h-96 text-center text-white"
        style={{ backgroundImage: 'url("/assets/maintenance-bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold mb-4">Electrical Maintenance</h1>
          <p className="text-lg mb-6">
            Keep your electrical systems safe and efficient with our expert
            maintenance services.
          </p>
          <motion.button
            className="px-6 py-2 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/contact">Schedule a Maintenance Check</Link>
          </motion.button>
        </div>
      </motion.header>

      {/* Service Overview */}
      <motion.article
        variants={fadeIn}
        className="text-gray-700 space-y-6 mt-8"
      >
        <p>
          Regular electrical maintenance is crucial to prevent unexpected
          breakdowns and ensure the longevity of your systems. Our team offers
          tailored maintenance services for residential, commercial, and
          industrial properties.
        </p>

        {/* Benefits Section */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Choose Our Electrical Maintenance Services?
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <svg
              className="w-6 h-6 text-blue-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Reduce energy costs with optimized system performance
          </li>
          <li className="flex items-center">
            <svg
              className="w-6 h-6 text-blue-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Minimize downtime with regular preventative checks
          </li>
          <li className="flex items-center">
            <svg
              className="w-6 h-6 text-blue-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Ensure compliance with electrical safety standards
          </li>
        </ul>

        {/* How It Works Section */}
        <h2 className="text-2xl font-semibold text-gray-800">How It Works</h2>
        <div className="space-y-4">
          {HOW_IT_WORKS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center xl:items-start xl:flex-row gap-2"
            >
              <span className="font-semibold text-lg text-gray-700">
                {item.num}.
              </span>
              <h3 className="font-semibold text-lg text-gray-700">
                {item.title}
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="my-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            What Our Clients Say
          </h2>
          {clientInfo.map((client, index) => (
            <div key={index}>
              <ServicesTestimonials
                clientImg={client.img}
                clientName={client.name}
                clientTestimonial={client.testimonial}
              />
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-600 mb-4">
            Ensure your electrical systems remain reliable and safe. Schedule a
            maintenance check today!
          </p>
          <motion.button
            className="px-6 py-2 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/contact">Schedule a Maintenance Check</Link>
          </motion.button>
        </div>
      </motion.article>
    </motion.div>
  );
};

export default ElectricalMaintenance;
