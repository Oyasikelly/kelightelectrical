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
          src="https://www.youtube.com/embed/izIHbkA0J5M?autoplay=1&mute=1"
          title="5 Reasons to Upgrade Your Electrical Panel"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </motion.div>

      <motion.header variants={fadeIn} className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Top 10 Tips for Safe Wiring Installation
        </h1>
        <p className="text-lg text-gray-600">
          Wiring can be tricky, but safety is key. Here are the top 10 tips for
          safe wiring in your home or office.
        </p>
      </motion.header>

      <motion.article variants={fadeIn} className="text-gray-700 space-y-6">
        <p>
          Wiring installation requires precision and attention to detail, as
          improper installation can lead to dangerous situations like electrical
          fires or system malfunctions. To ensure your wiring is safe, here are
          ten essential tips to follow:
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          1. Turn Off the Power
        </h2>
        <p>
          Before starting any wiring project, always turn off the power supply.
          This is the most important safety measure to prevent electrical shock
          and accidents.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          2. Use the Right Tools and Materials
        </h2>
        <p>
          Ensure you have the proper tools, such as wire strippers, pliers, and
          screwdrivers, and use high-quality electrical wire and connectors
          suitable for your project.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          3. Understand the Wiring System
        </h2>
        <p>
          Familiarize yourself with the electrical codes in your area, as they
          provide the guidelines for safe wiring practices. Never skip steps
          that may compromise the system’s safety.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          4. Avoid Overloading Circuits
        </h2>
        <p>
          Ensure that circuits are not overloaded by connecting too many
          devices. This can lead to overheating and may cause a fire hazard.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          5. Use Proper Grounding
        </h2>
        <p>
          Grounding is crucial to prevent electrical shocks. Make sure to
          connect all outlets and switches to a proper grounding system.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          6. Check for Faulty Wires
        </h2>
        <p>
          Inspect the wires for any visible signs of wear, fraying, or damage.
          Replace any damaged wires before installation to prevent malfunctions
          or fires.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          7. Avoid Using Unapproved Electrical Products
        </h2>
        <p>
          Never use electrical products or wiring systems that are not approved
          by regulatory authorities, as they may not meet safety standards.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          8. Hire a Professional Electrician
        </h2>
        <p>
          If you're not experienced with electrical work, it's better to hire a
          licensed electrician to handle the installation. This will ensure that
          the job is done safely and up to code.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          9. Test the System
        </h2>
        <p>
          After installation, always test the wiring system with a circuit
          tester to ensure that everything is working properly before turning
          the power back on.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          10. Regular Maintenance
        </h2>
        <p>
          Perform regular checks on your electrical system to spot any potential
          issues early. A small problem can turn into a major safety hazard if
          left unchecked.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">Conclusion</h2>
        <p>
          Safe wiring installation is essential to maintain the electrical
          integrity of your home or office. By following these top 10 tips, you
          can avoid common wiring mistakes and ensure that your electrical
          system functions safely for years to come.
        </p>
      </motion.article>
    </motion.div>
  );
};

export default BlogPost;
