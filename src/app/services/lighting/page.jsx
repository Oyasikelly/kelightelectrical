"use client";
import React from "react";
import { motion } from "framer-motion";

import ServicesTestimonials from "@/app/testimonials/ServicesTestimonials";
import Link from "next/link";

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

const LightingInstallation = () => {
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
        style={{
          backgroundImage: 'url("/assets/lightingInstallation-bg.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold mb-4">Lighting Installation</h1>
          <p className="text-lg mb-6">
            Bring your home to life with professional lighting installation
            services. Enhance your space and reduce energy costs.
          </p>
          <motion.button
            className="px-6 py-2 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/contact">Contact us </Link>
          </motion.button>
        </div>
      </motion.header>

      {/* Service Overview */}
      <motion.article
        variants={fadeIn}
        className="text-gray-700 space-y-6 mt-8"
      >
        <p>
          Our lighting installation service is designed to brighten up your
          space while providing energy-efficient solutions. Whether you’re
          looking to upgrade your lighting fixtures or install brand-new
          systems, we offer expert installation for residential and commercial
          properties.
        </p>

        {/* Benefits Section */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Choose Our Lighting Installation Services?
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
            Save energy and reduce electricity costs
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
            Enhance the ambiance with custom lighting design
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
            Expert installation by certified professionals
          </li>
        </ul>

        {/* How It Works Section */}
        <h2 className="text-2xl font-semibold text-gray-800">How It Works</h2>
        <div className="space-y-4">
          <div className="flex gap-2 items-center">
            <h3 className="font-semibold text-lg text-gray-700">
              1. Consultation:
            </h3>
            <p>
              We begin with a consultation to understand your lighting needs and
              design preferences.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <h3 className="font-semibold text-lg text-gray-700">
              2. Custom Design:
            </h3>
            <p>
              Our experts create a custom lighting design tailored to your space
              and budget.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <h3 className="font-semibold text-lg text-gray-700">
              3. Installation:
            </h3>
            <p>
              Our licensed electricians handle the professional installation of
              your new lighting system.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <h3 className="font-semibold text-lg text-gray-700">
              4. Final Inspection:
            </h3>
            <p>
              We perform a final inspection to ensure everything is working as
              expected and up to code.
            </p>
          </div>
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
            Ready to enhance your space with professional lighting installation?
            Contact us today for a free consultation.
          </p>
          <motion.button
            className="px-6 py-2 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/contact">Contact us</Link>
          </motion.button>
        </div>
      </motion.article>
    </motion.div>
  );
};

export default LightingInstallation;
