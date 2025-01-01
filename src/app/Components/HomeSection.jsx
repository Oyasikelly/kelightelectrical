"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// components
import AuthenticationForm from "./AuthenticationForm";
import Services from "./Services";
import Testimonials from "./Testimonials";
import BlogPostsSection from "./Blogs";

export default function HomeSection() {
  const slides = [
    {
      id: 1,
      src: "/assets/slide1.jpg",
      alt: "Electrical Installation",
      caption: "Professional Installations",
    },
    {
      id: 2,
      src: "/assets/slide2.jpg",
      alt: "Maintenance Services",
      caption: "Reliable Maintenance",
    },
    {
      id: 3,
      src: "/assets/slide3.jpg",
      alt: "Power Solutions",
      caption: "Innovative Power Solutions",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isSignedUp, setSignedUp] = useState(false);

  // Check if the user is already signed up
  useEffect(() => {
    const user = localStorage.getItem("user");
    setSignedUp(!!user); // If user exists in local storage, they are signed up
  }, []);

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const handleSignUpClick = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  // Framer Motion Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="home" className="bg-gray-100 ">
      {/* Authentication Form */}
      {isFormVisible && <AuthenticationForm onClose={handleCloseForm} />}

      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center py-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-gray-800"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to <span className="text-blue-400">KelightElectrical</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-600"
            variants={fadeIn}
          >
            Your trusted partner for efficient, reliable, and professional
            electrical solutions. We power your world with expertise and
            excellence.
          </motion.p>
          <div className="mt-8 flex justify-center space-x-4">
            {!isSignedUp && (
              <motion.button
                onClick={handleSignUpClick}
                className="bg-blue-400 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Sign Up
              </motion.button>
            )}
            <motion.a
              href="/services"
              className="bg-gray-300 text-gray-700 py-3 px-6 rounded-md shadow-md hover:bg-gray-400 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Explore Services
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Sliding Images */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center text-white text-2xl font-semibold"
          key={slides[currentSlide].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {slides[currentSlide].caption}
        </motion.div>
        <img
          src={slides[currentSlide].src}
          alt={slides[currentSlide].alt}
          className="w-full h-full object-cover"
        />
        {/* Navigation Buttons */}
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + slides.length) % slides.length
            )
          }
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 text-white p-2 rounded-full"
        >
          &#8249;
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 text-white p-2 rounded-full"
        >
          &#8250;
        </button>
      </div>

      {/* Blog Section */}
      <motion.div
        className="bg-gray-200 py-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <BlogPostsSection />
        </div>
      </motion.div>

      {/* Testimonial Carousel */}
      <Testimonials />

      {/* Call to Action Section */}
      <div className="bg-blue-400 py-12 text-center text-white mt-16">
        <motion.h3 className="text-3xl font-semibold mb-4">
          Ready to Start Your Project?
        </motion.h3>
        <p className="text-xl mb-6">
          Let’s discuss your electrical needs today! Get a free quote and expert
          advice.
        </p>
        <motion.a
          href="/contact"
          className="bg-white text-blue-400 py-3 px-8 rounded-lg shadow-md text-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Free Estimate
        </motion.a>
      </div>

      <Services />
    </section>
  );
}
