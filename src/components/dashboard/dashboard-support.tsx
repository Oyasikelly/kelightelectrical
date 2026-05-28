"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { supabase } from "@/lib/supabase";
import useClientInfo from "@/context/ClientInfoContext";

const SupportAndHelp = () => {
  const { clientInfo } = useClientInfo();
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: clientInfo?.name || "",
    email: clientInfo?.email || "",
    message: "",
  });

  const toggleFAQ = () => setIsFAQOpen(!isFAQOpen);
  const toggleContactForm = () => {
    setIsContactFormOpen(!isContactFormOpen);
    setSubmitted(false);
    setErrors({});
  };
  const toggleFeedback = () => setIsFeedbackOpen(!isFeedbackOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const { error } = await supabase.from("support_tickets").insert({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        user_id: sessionData?.session?.user?.id || null,
      });
      if (error) {
        console.error("Error submitting support ticket:", error);
        setErrors({ message: "Failed to send. Please try again." });
      } else {
        setSubmitted(true);
        setFormData({ name: clientInfo?.name || "", email: clientInfo?.email || "", message: "" });
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setLoading(false);
    }
  }

  async function handleFeedbackSubmit() {
    if (!feedbackText.trim()) return;
    setLoading(true);
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      await supabase.from("feedback").insert({
        feedback: feedbackText,
        user_id: sessionData?.session?.user?.id || null,
      });
      setFeedbackSubmitted(true);
      setFeedbackText("");
    } catch (err) {
      console.error("Error submitting feedback:", err);
    } finally {
      setLoading(false);
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const faqData = [
    {
      question: "How do I reset my password?",
      answer:
        "Go to the login page and click 'Forgot Password.' A reset link will be sent to your registered email address.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact support via the form below, email at Kelightelectrical@gmail.com, or call +234 906 831 8254.",
    },
    {
      question: "What are your hours of operation?",
      answer:
        "Our support team is available Monday to Saturday, 8am – 6pm (WAT). Emergency electrical services are available 24/7.",
    },
    {
      question: "How long does a typical service request take?",
      answer:
        "Most service appointments are confirmed within 24 hours. On-site visits are typically scheduled within 2–5 business days depending on availability.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "Refunds are available within 7 days of the service date for incomplete or unsatisfactory work. Please contact support with your service ID to initiate the process.",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-4 sm:p-6 max-w-4xl mx-auto"
    >
      <motion.h1
        variants={childVariants}
        className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800"
      >
        Support &amp; Help
      </motion.h1>

      {/* FAQ Section */}
      <motion.div
        variants={childVariants}
        className="mb-6 p-6 bg-white rounded-2xl shadow-md border border-gray-100"
      >
        <button
          onClick={toggleFAQ}
          className="w-full flex justify-between items-center text-left"
        >
          <h2 className="text-xl font-semibold text-gray-800">Frequently Asked Questions</h2>
          <span className="text-blue-500 transition-transform duration-300">
            {isFAQOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </button>
        <AnimatePresence>
          {isFAQOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-4 overflow-hidden"
            >
              {faqData.map((faq, index) => (
                <li key={index} className="border-b pb-4 last:border-b-0">
                  <h3 className="font-semibold text-base text-gray-800 mb-1">{faq.question}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        variants={childVariants}
        className="mb-6 p-6 bg-white rounded-2xl shadow-md border border-gray-100"
      >
        <button
          onClick={toggleContactForm}
          className="w-full flex justify-between items-center text-left"
        >
          <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
          <span className="text-green-500 transition-transform duration-300">
            {isContactFormOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </button>
        <AnimatePresence>
          {isContactFormOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 overflow-hidden"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-3 py-6 text-center"
                >
                  <FaCheckCircle className="text-green-500 text-5xl" />
                  <h3 className="text-lg font-semibold text-gray-800">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">
                    We&apos;ve received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-blue-600 text-sm underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full name"
                      className={`w-full border rounded-lg p-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                        errors.name ? "border-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className={`w-full border rounded-lg p-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                        errors.email ? "border-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Describe your issue or question..."
                      className={`w-full border rounded-lg p-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                        errors.message ? "border-red-400" : "border-gray-200"
                      }`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {loading ? "Sending..." : <>Send Message <FaPaperPlane /></>}
                  </button>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Feedback Section */}
      <motion.div
        variants={childVariants}
        className="mb-6 p-6 bg-white rounded-2xl shadow-md border border-gray-100"
      >
        <button
          onClick={toggleFeedback}
          className="w-full flex justify-between items-center text-left"
        >
          <h2 className="text-xl font-semibold text-gray-800">Leave Feedback</h2>
          <span className="text-yellow-500 transition-transform duration-300">
            {isFeedbackOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </button>
        <AnimatePresence>
          {isFeedbackOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-4 overflow-hidden"
            >
              {feedbackSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-3 py-6 text-center"
                >
                  <FaCheckCircle className="text-yellow-500 text-5xl" />
                  <p className="text-gray-700 font-semibold">Thank you for your feedback!</p>
                  <button
                    onClick={() => setFeedbackSubmitted(false)}
                    className="text-blue-600 text-sm underline"
                  >
                    Leave more feedback
                  </button>
                </motion.div>
              ) : (
                <>
                  <textarea
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder="Share your experience with KelightElectrical..."
                    rows="4"
                    className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  ></textarea>
                  <button
                    type="button"
                    onClick={handleFeedbackSubmit}
                    disabled={loading || !feedbackText.trim()}
                    className="w-full py-3 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition-colors disabled:opacity-60"
                  >
                    {loading ? "Submitting..." : "Submit Feedback"}
                  </button>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Additional Resources */}
      <motion.div
        variants={childVariants}
        className="p-6 bg-blue-50 rounded-2xl shadow-md border border-blue-100"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Contact</h2>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>📞 <strong>Phone:</strong> +234 906 831 8254</li>
          <li>📧 <strong>Email:</strong> Kelightelectrical@gmail.com</li>
          <li>📍 <strong>Address:</strong> Effurun, Delta, Nigeria</li>
          <li>🕐 <strong>Hours:</strong> Monday – Saturday, 8am – 6pm WAT</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default SupportAndHelp;
