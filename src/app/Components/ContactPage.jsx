"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { supabase } from "@/lib/supabase";

const ThankYou = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center space-y-6 bg-green-50 p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold text-green-600">Thank You!</h2>
      <p className="text-lg text-gray-700">
        Your message has been sent successfully. We'll get back to you shortly!
      </p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <img
          src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
          alt="Thank You"
          className="w-32 mx-auto"
        />
      </motion.div>
    </motion.div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on input change
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true); // Show thank-you component
      submitContact();
      insertData();
      // Reset after 10 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" }); // Reset form
        setSubmitted(false); // Hide thank-you component
      }, 10000); // 10 seconds
    }
  };

  async function submitContact() {
    console.log(formData);
    try {
      const { data, error } = await supabase.from("public contacts").insert({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      // .select();

      // if (data) {
      //   setSuccessfull(true);
      //   console.log(data);
      // }
    } catch (error) {
      setErrorMsg("An error occured!");
      // console.log(error);
    } finally {
      setSuccessfull(false);
    }
  }

  return (
    <div className="container mx-auto p-6 lg:p-12 space-y-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Let’s connect! Fill out the form or use the details below to reach us.
          We’d love to hear from you!
        </p>
      </motion.div>

      {submitted ? (
        <ThankYou />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-100 p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="text-start">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full mt-1 p-3 border rounded-lg focus:outline-none ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              {/* Email */}
              <div className="text-start">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full mt-1 p-3 border rounded-lg focus:outline-none ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              {/* Message */}
              <div className="text-start">
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className={`w-full mt-1 p-3 border rounded-lg h-32 focus:outline-none ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
              >
                Send Message
              </button>
              {errorMsg && <p className="text-red-400">{errorMsg}</p>}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-600 text-3xl" />
              <div className="text-start">
                <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
                <p className="text-gray-600">+234 906 831 8254</p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-green-600 text-3xl" />
              <div className="text-start">
                <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                <p className="text-gray-600">Kelightelectrical@gmail.com</p>
              </div>
            </div>
            {/* Address */}
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-red-600 text-3xl" />
              <div className="text-start">
                <h3 className="text-lg font-semibold text-gray-700">Address</h3>
                <p className="text-gray-600">Effurun, Delta, Nigeria</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
