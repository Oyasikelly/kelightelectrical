"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const TermsAndConditions = () => {
  const [accepted, setAccepted] = useState(false);

  const router = useRouter();
  const handleCheckboxChange = () => {
    setAccepted(!accepted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accepted) {
      alert("You must accept the terms and conditions to proceed.");
    } else {
      // Proceed with form submission or redirection
      alert("Terms accepted. Proceeding...");
      router.push("/dashboard");
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 text-gray-800 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <motion.h1
          className="text-3xl font-bold text-center mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Terms and Conditions
        </motion.h1>

        <motion.div
          className="space-y-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <motion.section
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Welcome to KelightElectrical! By accessing or using our website,
              you agree to these terms and conditions. Please read them
              carefully.
            </p>
          </motion.section>

          <motion.section
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-2">
              2. Acceptance of Terms
            </h2>
            <p>
              By using this website, you agree to comply with and be bound by
              these terms. If you do not agree to these terms, please refrain
              from using our services.
            </p>
          </motion.section>

          <motion.section
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-2">3. Services Provided</h2>
            <p>
              We provide various electrical services, including installations,
              repairs, maintenance, and troubleshooting. Details about our
              services are available on our site.
            </p>
          </motion.section>

          <motion.section
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl font-semibold mb-2">
              4. User Responsibilities
            </h2>
            <p>
              Users agree to use the services in a lawful manner and are
              responsible for adhering to applicable regulations related to
              electrical work.
            </p>
          </motion.section>

          <motion.section
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-xl font-semibold mb-2">
              5. Pricing and Payment Terms
            </h2>
            <p>
              Our pricing is based on the services rendered. Payments must be
              made in full after services are provided. We accept various
              payment methods.
            </p>
          </motion.section>

          <motion.section
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-xl font-semibold mb-2">
              6. Privacy and Data Protection
            </h2>
            <p>
              We are committed to protecting your privacy. Please refer to our{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </a>{" "}
              for details on how we collect and use your data.
            </p>
          </motion.section>

          <motion.section
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-xl font-semibold mb-2">
              7. Limitation of Liability
            </h2>
            <p>
              We are not liable for any damages resulting from the use of our
              services, including any direct, indirect, incidental, or
              consequential damages.
            </p>
          </motion.section>

          <motion.section
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 1 }}
          >
            <h2 className="text-xl font-semibold mb-2">8. Amendments</h2>
            <p>
              We reserve the right to update or modify these terms at any time.
              Changes will be communicated on this page.
            </p>
          </motion.section>

          <motion.section
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 1.1 }}
          >
            <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
            <p>
              These terms are governed by the laws of the jurisdiction in which
              KelightElectrical operates.
            </p>
          </motion.section>

          <motion.section
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms-checkbox"
                checked={accepted}
                onChange={handleCheckboxChange}
                className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="terms-checkbox" className="ml-2 text-lg">
                I agree to the{" "}
                <a href="/terms" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a
                  href="/privacy-policy"
                  className="text-blue-600 hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <button
              onClick={handleSubmit}
              className={`mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold ${
                !accepted ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!accepted}
            >
              Accept and Proceed
            </button>
          </motion.section>

          <motion.section
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <p className="text-center text-gray-500">
              If you have any questions, feel free to{" "}
              <a
                href="mailto:support@kelightelectrical.com"
                className="text-blue-600 hover:underline"
              >
                contact us
              </a>
              .
            </p>
          </motion.section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TermsAndConditions;
