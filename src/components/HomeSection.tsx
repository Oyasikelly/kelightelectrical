"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AuthenticationForm from "./auth/AuthenticationForm";
import Services from "./Services";
import Testimonials from "./Testimonials";
import BlogPostsSection from "./Blogs";
import {
  FaBolt, FaShieldAlt, FaTools, FaLeaf,
  FaChevronLeft, FaChevronRight, FaPhoneAlt,
} from "react-icons/fa";

const slides = [
  {
    id: 1,
    src: "/assets/slide1.jpg",
    alt: "Electrical Installation",
    caption: "Professional Electrical Installations",
    sub: "Certified, safe, and efficient wiring for every property.",
  },
  {
    id: 2,
    src: "/assets/slide2.jpg",
    alt: "Maintenance Services",
    caption: "Reliable Maintenance & Repairs",
    sub: "Keeping your electrical systems running at peak performance.",
  },
  {
    id: 3,
    src: "/assets/slide3.jpg",
    alt: "Solar Power Solutions",
    caption: "Innovative Solar Power Solutions",
    sub: "Harnessing clean, renewable energy for homes and businesses.",
  },
];

const stats = [
  { label: "Projects Completed", value: "500+", icon: <FaBolt className="text-blue-400 text-2xl" /> },
  { label: "Years of Experience", value: "8+", icon: <FaTools className="text-blue-400 text-2xl" /> },
  { label: "Happy Clients", value: "300+", icon: <FaShieldAlt className="text-blue-400 text-2xl" /> },
  { label: "Eco-Friendly Services", value: "100%", icon: <FaLeaf className="text-blue-400 text-2xl" /> },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function HomeSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFormVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const goNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const goPrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="bg-gray-50">
      {isFormVisible && <AuthenticationForm onClose={() => setFormVisible(false)} />}

      {/* ─── Hero Slider ─── */}
      <div className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        {/* Slides */}
        <AnimatePresence mode="sync">
          <motion.div
            key={slides[currentSlide].id}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slides[currentSlide].src}')` }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <span className="inline-block bg-blue-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
                  KelightElectrical
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                  {slides[currentSlide].caption}
                </h1>
                <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                  {slides[currentSlide].sub}
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    onClick={() => setFormVisible(true)}
                    className="bg-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Sign Up Free
                  </motion.button>
                  <Link
                    href="/services"
                    className="bg-white/15 backdrop-blur text-white border border-white/30 px-7 py-3.5 rounded-xl font-semibold hover:bg-white/25 transition-colors"
                  >
                    Explore Services
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide Controls */}
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Next slide"
        >
          <FaChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-6 bg-blue-400" : "w-2 bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Floating contact chip */}
        <a
          href="tel:+2349068318254"
          className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 bg-white/90 backdrop-blur text-gray-800 text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <FaPhoneAlt className="text-blue-600" />
          +234 906 831 8254
        </a>
      </div>

      {/* ─── Stats Bar ─── */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center gap-4 text-white"
              >
                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ─── Services Preview ─── */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Our Core Services</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              From basic repairs to complete solar systems, KelightElectrical delivers reliable solutions for every electrical need.
            </p>
          </motion.div>
          <Services />
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Testimonials ─── */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Our Clients</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">What People Say</h2>
          </motion.div>
          <Testimonials />
        </div>
      </div>

      {/* ─── Blog Section ─── */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Knowledge Hub</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Latest from Our Blog</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Tips, guides, and insights on electrical safety, energy efficiency, and smart home technology.
            </p>
          </motion.div>
          <BlogPostsSection />
          <div className="text-center mt-10">
            <Link
              href="/blogs"
              className="inline-block border-2 border-blue-600 text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </div>

      {/* ─── CTA Banner ─── */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Power Your World?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Get a free consultation and quote from KelightElectrical's expert team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                Get a Free Estimate
              </Link>
              <a
                href="tel:+2349068318254"
                className="border-2 border-white/60 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <FaPhoneAlt /> Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
