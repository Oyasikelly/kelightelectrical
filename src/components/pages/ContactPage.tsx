"use client";

import React, { useReducer } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import { supabase } from "@/lib/supabase";

const initialState = {
  formData: { name: "", email: "", message: "" },
  errors: {},
  submitted: false,
  loading: false,
  errorMsg: null,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        formData: { ...state.formData, [action.field]: action.value },
        errors: { ...state.errors, [action.field]: "" },
      };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "SET_LOADING":
      return { ...state, loading: action.loading };
    case "SUBMIT_SUCCESS":
      return { ...state, submitted: true, loading: false, errorMsg: null };
    case "RESET_FORM":
      return { ...initialState };
    case "SET_ERROR_MSG":
      return { ...state, errorMsg: action.errorMsg, loading: false };
    default:
      return state;
  }
}

export default function ContactPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { formData, errors, submitted, loading, errorMsg } = state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: "SET_FIELD", field: e.target.name, value: e.target.value });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    dispatch({ type: "SET_ERRORS", errors: newErrors });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch({ type: "SET_LOADING", loading: true });
      try {
        const { error } = await supabase.from("public contacts").insert({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        });

        if (error) throw error;
        
        dispatch({ type: "SUBMIT_SUCCESS" });
        setTimeout(() => {
          dispatch({ type: "RESET_FORM" });
        }, 5000); // Reset after 5 seconds
      } catch (error) {
        dispatch({ type: "SET_ERROR_MSG", errorMsg: "An error occurred while sending your message. Please try again." });
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-500 py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Get in Touch
          </h1>
          <p className="text-blue-100 text-lg">
            We're here to help. Reach out to us for any inquiries, quotes, or emergency electrical services.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information (Left Column) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Whether you need a quick repair, a major installation, or just some advice, our team is ready to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <a href="tel:+2349068318254" className="text-gray-500 hover:text-blue-600 transition-colors block mt-1">
                      +234 906 831 8254
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a href="mailto:Kelightelectrical@gmail.com" className="text-gray-500 hover:text-green-600 transition-colors block mt-1 break-all">
                      Kelightelectrical@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Office Location</h3>
                    <p className="text-gray-500 mt-1 leading-relaxed">
                      Effurun, Delta State,<br /> Nigeria
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-2">Business Hours</h3>
                <p className="text-gray-500 text-sm">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-500 text-sm mt-1">Emergency Services: 24/7</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right Column) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="lg:col-span-3"
          >
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Send us a Message</h2>
              <p className="text-gray-500 mb-8">We usually respond within 24 hours.</p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                      <FaCheckCircle className="text-5xl text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      Thank you for contacting KelightElectrical. We've received your message and will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => dispatch({ type: "RESET_FORM" })}
                      className="mt-8 text-blue-600 font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`w-full p-4 border rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                            errors.name ? "border-red-400 focus:ring-red-500" : "border-gray-200"
                          }`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`w-full p-4 border rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                            errors.email ? "border-red-400 focus:ring-red-500" : "border-gray-200"
                          }`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={5}
                        className={`w-full p-4 border rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none ${
                          errors.message ? "border-red-400 focus:ring-red-500" : "border-gray-200"
                        }`}
                      ></textarea>
                      {errors.message && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.message}</p>}
                    </div>

                    {errorMsg && (
                      <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
                        <p className="text-red-600 text-sm font-medium">{errorMsg}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-blue-500/20"
                    >
                      {loading ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>Send Message <FaPaperPlane className="text-sm" /></>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
