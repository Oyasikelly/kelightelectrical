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
          className="w-full h-full "
          // className="w-full h-[500px] "
          src="https://www.youtube.com/embed/QwSlXtPCJj4?autoplay=1&mute=1"
          title="Choosing the Right Electrician for Your Project"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </motion.div>

      <motion.header variants={fadeIn} className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          5 Signs Your Home Needs Electrical Maintenance
        </h1>
        <p className="text-lg text-gray-600">
          Electrical maintenance is crucial to prevent potential hazards and
          ensure efficiency. Learn the signs that your home may need attention.
        </p>
      </motion.header>

      <motion.article variants={fadeIn} className="text-gray-700 space-y-6">
        <p>
          Electricity powers our modern lives, from lighting our homes to
          running our essential appliances. However, like any other system in
          your home, your electrical system requires regular maintenance to
          function safely and efficiently. Ignoring the warning signs of
          electrical problems can lead to serious issues, including potential
          fire hazards and expensive repairs. Here are five key signs that
          indicate it might be time to schedule an electrical maintenance check
          for your home.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          1. Frequent Circuit Breaker Trips
        </h2>
        <p>
          Circuit breakers are designed to trip as a safety measure when the
          electrical load becomes too high. While an occasional trip might not
          be a cause for alarm, frequent trips are a sign of deeper electrical
          issues. This could indicate overloaded circuits, faulty wiring, or
          outdated breaker panels that can no longer handle the demands of your
          household appliances. If you find yourself resetting breakers
          regularly, it’s time to call a professional electrician to assess the
          situation.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          2. Flickering or Dimming Lights
        </h2>
        <p>
          Flickering or dimming lights are more than just an annoyance; they’re
          often a sign of an underlying electrical issue. This could be caused
          by loose wiring, a failing light fixture, or circuits that are
          overloaded with too many appliances. If your lights behave
          erratically, it’s essential to have your electrical system inspected
          to identify and resolve the root cause before it worsens.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          3. Unusual Burning Smells
        </h2>
        <p>
          A burning smell near outlets, switches, or electrical panels is a red
          flag that should never be ignored. It often indicates overheating
          wires or connections, which can lead to electrical fires. If you
          detect such a smell, turn off the power to the affected area
          immediately and contact an electrician to investigate the problem.
          Taking swift action can prevent a potentially dangerous situation.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          4. Warm or Discolored Outlets
        </h2>
        <p>
          Outlets that feel warm to the touch or show signs of discoloration
          (such as black or brown marks) are signs of excessive heat buildup.
          This is often caused by faulty wiring or loose connections within the
          outlet. Warm or discolored outlets are not normal and should be
          inspected by a professional to ensure the safety of your electrical
          system.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          5. Outdated or Insufficient Electrical System
        </h2>
        <p>
          Many older homes were built with electrical systems that are not
          equipped to handle the demands of modern technology and appliances. If
          you frequently use extension cords because of a lack of outlets, or if
          your home still has old-fashioned knob-and-tube wiring, it’s a clear
          sign that an upgrade is needed. Upgrading your electrical system can
          improve safety, increase efficiency, and even enhance the value of
          your home.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          Why Regular Electrical Maintenance Matters
        </h2>
        <p>
          Electrical maintenance is not just about fixing problems; it’s about
          preventing them. A proactive approach to maintaining your electrical
          system can save you money in the long run by avoiding costly repairs
          and reducing energy waste. Moreover, it ensures the safety of your
          family and property by minimizing the risk of electrical fires or
          shocks.
        </p>

        <p>
          If you’ve noticed any of these signs in your home, don’t wait until
          the problem escalates. Contact a licensed electrician to perform a
          thorough inspection and address any issues. Regular maintenance is the
          key to a safe, efficient, and reliable electrical system.
        </p>
      </motion.article>
    </motion.div>
  );
};

export default BlogPost;
