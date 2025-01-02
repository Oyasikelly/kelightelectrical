"use client";
import React from "react";
import { motion } from "framer-motion";

const BlogPost = () => {
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
      {/* Video Section */}
      <motion.div
        variants={fadeIn}
        className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-lg"
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/37StdgwPuNc?autoplay=1&mute=1"
          title="5 Reasons to Upgrade Your Electrical Panel"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </motion.div>

      <motion.header variants={fadeIn} className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          5 Reasons to Upgrade Your Electrical Panel
        </h1>
        <p className="text-lg text-gray-600">
          An outdated electrical panel can cause problems. Find out why
          upgrading it is a smart investment.
        </p>
      </motion.header>

      <motion.article variants={fadeIn} className="text-gray-700 space-y-6">
        <p>
          Your electrical panel serves as the backbone of your home’s power
          system, distributing electricity to all circuits and appliances. An
          outdated or insufficient panel can lead to frequent issues that
          compromise safety, efficiency, and convenience. Upgrading your
          electrical panel is a smart investment. Here are five reasons why:
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          1. Prevent Overloading
        </h2>
        <p>
          Modern homes use significantly more electricity than in the past.
          Older panels may struggle to handle the load, leading to frequent
          tripped breakers or overheating. Upgrading ensures your panel can
          manage current and future demands.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          2. Improve Safety
        </h2>
        <p>
          Outdated panels may have faulty wiring or components that pose serious
          fire risks. An upgraded panel meets modern safety standards, reducing
          the likelihood of electrical hazards and protecting your home and
          family.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          3. Increase Energy Efficiency
        </h2>
        <p>
          New electrical panels work more efficiently, which can help lower
          energy consumption and utility bills. They also support modern
          energy-saving appliances, ensuring optimal performance without strain.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          4. Support Smart Technology
        </h2>
        <p>
          As smart home devices become more common, your electrical panel needs
          to keep up. Upgraded panels can handle the advanced requirements of
          smart systems and ensure seamless operation for connected devices.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          5. Enhance Home Value
        </h2>
        <p>
          Upgrading your electrical panel is an attractive feature for potential
          buyers. It signals a well-maintained, modern home that is ready to
          handle current and future power demands, increasing its market value.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">Conclusion</h2>
        <p>
          Upgrading your electrical panel is not just about keeping up with
          modern technology; it’s about safety, efficiency, and peace of mind.
          Whether you’re dealing with frequent electrical issues, planning to
          add new appliances, or looking to future-proof your home, investing in
          a new electrical panel is a smart and essential step. Consult with a
          licensed electrician today to discuss your options and ensure your
          home is powered safely and reliably.
        </p>
      </motion.article>
    </motion.div>
  );
};

export default BlogPost;
