import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const SupportAndHelp = () => {
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const toggleFAQ = () => setIsFAQOpen(!isFAQOpen);
  const toggleContactForm = () => setIsContactFormOpen(!isContactFormOpen);
  const toggleFeedback = () => setIsFeedbackOpen(!isFeedbackOpen);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Time between each child's animation
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const faqData = [
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, go to the login page and click on 'Forgot Password.' Follow the instructions sent to your email.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact support via email, live chat, or phone. Details are provided in the Contact section below.",
    },
    {
      question: "What are your hours of operation?",
      answer:
        "Our support team is available 24/7 to assist you with any issues or questions.",
    },
    {
      question: "Where can I find user guides?",
      answer:
        "User guides are available in the Resources section of our website. They include step-by-step instructions for using various features.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "Our refund policy allows refunds within 30 days of purchase. Please contact support for assistance with refunds.",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-6 max-w-5xl mx-auto"
    >
      <motion.h1
        variants={childVariants}
        className="text-4xl font-bold text-center mb-8"
      >
        Support & Help
      </motion.h1>

      {/* FAQ Section */}
      <motion.div
        variants={childVariants}
        className="mb-8 p-6 bg-white rounded-xl shadow-lg"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <button
            onClick={toggleFAQ}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {isFAQOpen ? "Hide" : "Show"}
          </button>
        </div>
        <AnimatePresence>
          {isFAQOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-4"
            >
              {faqData.map((faq, index) => (
                <li key={index} className="border-b pb-4">
                  <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        variants={childVariants}
        className="mb-8 p-6 bg-white rounded-xl shadow-lg"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <button
            onClick={toggleContactForm}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            {isContactFormOpen ? "Hide" : "Show"}
          </button>
        </div>
        <AnimatePresence>
          {isContactFormOpen && (
            <motion.form
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border rounded-lg"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg w-full hover:bg-blue-700"
              >
                Send Message <FaPaperPlane className="inline ml-2" />
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Feedback Section */}
      <motion.div
        variants={childVariants}
        className="p-6 bg-white rounded-xl shadow-lg"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Feedback</h2>
          <button
            onClick={toggleFeedback}
            className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
          >
            {isFeedbackOpen ? "Hide" : "Show"}
          </button>
        </div>
        <AnimatePresence>
          {isFeedbackOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-4"
            >
              <textarea
                placeholder="Share your feedback..."
                rows="4"
                className="w-full p-3 border rounded-lg"
              ></textarea>
              <button
                type="button"
                className="px-6 py-3 bg-yellow-600 text-white rounded-lg w-full hover:bg-yellow-700"
              >
                Submit Feedback
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {/* Additional Support Section */}
      <motion.div
        variants={childVariants}
        className="mt-8 p-6 bg-gray-100 rounded-xl shadow-lg"
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
        <AnimatePresence>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a href="/guides" className="text-blue-600 hover:underline">
                User Guides and Tutorials
              </a>
            </li>
            <li>
              <a href="/community" className="text-blue-600 hover:underline">
                Community Forums
              </a>
            </li>
            <li>
              <a
                href="/troubleshooting"
                className="text-blue-600 hover:underline"
              >
                Troubleshooting Tips
              </a>
            </li>
            <li>
              <a href="/updates" className="text-blue-600 hover:underline">
                Latest Updates and Announcements
              </a>
            </li>
          </ul>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default SupportAndHelp;
