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
          src="https://www.youtube.com/embed/DHgaUfGjkWA?autoplay=1&mute=1"
          title="Choosing the Right Electrician for Your Project"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </motion.div>

      <motion.header variants={fadeIn} className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Why Regular Electrical Inspections Are Essential
        </h1>
        <p className="text-lg text-gray-600">
          Regular electrical inspections can prevent disasters. Learn why
          they’re essential for every property.
        </p>
      </motion.header>

      <motion.article variants={fadeIn} className="text-gray-700 space-y-6">
        <p>
          Electrical inspections are crucial for maintaining the safety and
          efficiency of your home or business’s electrical system. Regular
          checks can prevent hazardous conditions, detect hidden issues before
          they become serious, and keep your property safe. Whether you live in
          an old home or a newly built one, understanding the importance of
          electrical inspections can save you from unexpected disasters and
          costly repairs.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          1. Prevent Electrical Fires
        </h2>
        <p>
          Electrical fires are among the most common causes of property damage.
          Faulty wiring, overloaded circuits, or defective appliances can all
          lead to dangerous situations. Regular electrical inspections help
          identify potential fire hazards, such as exposed wires, loose
          connections, or faulty breakers, and allow for timely repairs. By
          having your system checked periodically, you significantly reduce the
          risk of electrical fires in your home or business.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          2. Ensure Compliance with Electrical Codes
        </h2>
        <p>
          Electrical codes are established to ensure safety and minimize the
          risk of electrical accidents. Over time, codes can change, and
          outdated installations may no longer meet current safety standards. An
          electrical inspection ensures that your wiring, outlets, and panels
          comply with the latest codes. This is especially important when buying
          or selling a property or making renovations, as compliance with safety
          codes is necessary to avoid penalties or issues with insurance claims.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          3. Improve Energy Efficiency
        </h2>
        <p>
          An electrical inspection doesn’t just focus on safety; it also helps
          identify opportunities for energy efficiency. An inefficient
          electrical system can lead to higher energy bills due to faulty
          wiring, old appliances, or outdated light fixtures. During an
          inspection, the technician may suggest improvements such as switching
          to energy-efficient lighting or upgrading your electrical panel. By
          improving the energy efficiency of your electrical system, you can
          save money and reduce your environmental footprint.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          4. Detect Hidden Electrical Problems
        </h2>
        <p>
          Not all electrical issues are visible to the naked eye. Worn-out
          wires, damaged components, or hidden faults inside walls can pose a
          significant threat without any obvious signs. Regular inspections
          allow a trained electrician to identify potential problems that might
          otherwise go unnoticed. Catching these issues early can prevent costly
          repairs and ensure your electrical system continues to operate safely
          and efficiently.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          5. Protect Your Appliances and Electronics
        </h2>
        <p>
          Power surges, short circuits, and faulty wiring can all damage
          sensitive electronics and appliances. Regular inspections of your
          electrical system help ensure that all wiring and outlets are in good
          condition, reducing the risk of electrical damage to your devices. If
          you rely on expensive home electronics, such as computers, home
          entertainment systems, or kitchen appliances, an inspection can give
          you peace of mind and prevent costly repairs or replacements.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          6. Ensure Your Family’s Safety
        </h2>
        <p>
          The safety of your family is the most important reason for regular
          electrical inspections. Electrical hazards can lead to severe
          injuries, electrocution, or even death if left unchecked. An
          experienced electrician will examine all components of your electrical
          system, ensuring that it is safe to use and there are no hidden
          dangers. Regular inspections provide you with peace of mind, knowing
          that your home is a safe environment for your loved ones.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          7. Avoid Expensive Emergency Repairs
        </h2>
        <p>
          Waiting until your electrical system fails to call in a professional
          can lead to expensive emergency repairs. When an issue goes unnoticed,
          it can escalate quickly, often resulting in significant damage to the
          electrical system, your home, or even your personal belongings. By
          scheduling regular electrical inspections, you can catch problems
          before they become emergencies and avoid costly repairs or
          replacements down the line.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          8. Add Value to Your Property
        </h2>
        <p>
          Regular electrical inspections can help maintain or even increase the
          value of your property. Buyers are more likely to be attracted to
          homes or businesses with updated and well-maintained electrical
          systems. When it’s time to sell, having an inspection record can
          demonstrate that your property is safe, reliable, and up to code. This
          can be a selling point for potential buyers who are looking for peace
          of mind in their investment.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          9. Peace of Mind for Landlords
        </h2>
        <p>
          If you own a rental property, regular electrical inspections are
          essential for the safety of your tenants. As a landlord, it’s your
          responsibility to provide a safe living environment. An inspection
          ensures that the electrical system is functioning properly and that
          all safety regulations are met. By addressing any issues upfront, you
          minimize the risk of potential accidents or liability concerns that
          could arise from faulty wiring or electrical hazards.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          10. Prepare for Home Renovations
        </h2>
        <p>
          If you’re planning any renovations or remodeling in your home, it’s a
          good idea to have an electrical inspection before you begin.
          Electrical inspections ensure that your existing wiring and panel can
          handle any additional load from new appliances or fixtures. This also
          helps identify any electrical upgrades that may be needed to
          accommodate new installations, preventing potential issues during the
          renovation process.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">Conclusion</h2>
        <p>
          Regular electrical inspections are a vital part of maintaining the
          safety, efficiency, and longevity of your home’s electrical system. By
          catching issues early, you can prevent disasters, save money on energy
          bills, and avoid costly repairs. Whether you live in an older home or
          a new one, investing in regular electrical inspections is a small
          price to pay for the safety and security of your property. Contact a
          licensed electrician today to schedule your next inspection.
        </p>
      </motion.article>
    </motion.div>
  );
};

export default BlogPost;
