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
          src="https://www.youtube.com/embed/74dMnnNpDbQ?autoplay=1&mute=1"
          title="Choosing the Right Electrician for Your Project"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </motion.div>

      <motion.header variants={fadeIn} className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          How to Design Energy-Efficient Electrical Systems
        </h1>
        <p className="text-lg text-gray-600">
          Energy efficiency starts with smart electrical design. Explore tips
          for creating an efficient system.
        </p>
      </motion.header>

      <motion.article variants={fadeIn} className="text-gray-700 space-y-6">
        <p>
          Designing an energy-efficient electrical system is a crucial step
          towards reducing energy consumption and lowering utility bills. With
          the rising demand for sustainable practices and energy conservation,
          smart electrical design is becoming more important than ever. In this
          blog post, we’ll explore tips and strategies for designing an
          energy-efficient electrical system for your home or business.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          1. Plan for Energy-Efficient Lighting
        </h2>
        <p>
          One of the most impactful ways to improve energy efficiency is by
          choosing the right lighting. LED lights are far more energy-efficient
          than traditional incandescent bulbs and can last significantly longer.
          Additionally, consider incorporating motion sensors, dimmer switches,
          or smart lighting controls that automatically adjust lighting based on
          the time of day or occupancy, helping to reduce unnecessary energy
          use.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          2. Utilize Energy-Efficient Appliances and Equipment
        </h2>
        <p>
          Appliances and electrical equipment are major energy consumers in any
          building. When designing an electrical system, it’s important to
          choose energy-efficient appliances and systems. Look for products with
          the ENERGY STAR label, which indicates that the appliance meets energy
          efficiency standards. These products use less electricity, reduce
          operational costs, and help conserve resources.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          3. Incorporate Solar Power
        </h2>
        <p>
          Solar power is a sustainable energy source that can significantly
          reduce electricity costs and minimize the environmental impact of your
          electrical system. When designing an electrical system, consider
          integrating solar panels to harness the power of the sun. Solar panels
          can be used to supplement your electrical grid, reducing reliance on
          non-renewable energy sources and lowering monthly energy expenses.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          4. Optimize Circuit Design
        </h2>
        <p>
          Optimizing the layout of your electrical circuits is essential for
          improving efficiency. Ensure that circuits are balanced, meaning that
          the load is distributed evenly across all available circuits to avoid
          overloading certain parts of the system. Efficient wiring and minimal
          use of extension cords also reduce energy losses, especially in
          high-power circuits.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          5. Use Programmable Thermostats
        </h2>
        <p>
          Heating and cooling systems consume a significant amount of energy in
          homes and commercial buildings. Programmable thermostats allow you to
          set specific temperatures for different times of the day, ensuring
          that your heating and cooling systems operate only when needed. This
          reduces energy wastage and ensures more efficient operation, helping
          you save energy and money.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          6. Upgrade to Energy-Efficient Electrical Panels
        </h2>
        <p>
          The electrical panel is the heart of your home or business’s
          electrical system. If your electrical panel is outdated or
          inefficient, it can lead to wasted energy and higher utility bills.
          Upgrading to a modern, energy-efficient electrical panel ensures that
          electricity is distributed more effectively, helping to minimize
          energy losses and improve overall system efficiency.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          7. Reduce Phantom Loads
        </h2>
        <p>
          Phantom loads, also known as standby power, refer to the electricity
          consumed by electronic devices and appliances while they are turned
          off but still plugged in. These devices, such as televisions,
          chargers, and microwaves, continue to draw power when they are not in
          use. By designing an electrical system that minimizes phantom loads,
          you can significantly reduce energy consumption. Unplugging devices or
          using power strips with on/off switches can help eliminate phantom
          loads.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          8. Implement Smart Home Automation
        </h2>
        <p>
          Smart home automation systems allow you to control various aspects of
          your electrical system remotely or automatically. These systems can be
          programmed to optimize energy usage, such as adjusting lighting,
          heating, and cooling based on occupancy or time of day. Integrating
          smart home devices can lead to substantial energy savings by ensuring
          that your electrical system operates efficiently at all times.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          9. Insulate and Seal Your Home or Building
        </h2>
        <p>
          Even the most energy-efficient electrical system will struggle if your
          home or building is poorly insulated. Proper insulation reduces heat
          loss in the winter and keeps your home cooler in the summer, reducing
          the strain on your heating and cooling systems. Sealing gaps around
          windows, doors, and other openings also prevents air leaks and helps
          maintain a more stable indoor temperature, contributing to overall
          energy savings.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          10. Regular Maintenance and Upgrades
        </h2>
        <p>
          Regular maintenance is essential for ensuring that your electrical
          system continues to operate efficiently. This includes checking for
          worn-out wiring, loose connections, and faulty components. Conducting
          periodic inspections and making upgrades when necessary can prevent
          energy losses and ensure the long-term efficiency of your electrical
          system.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          Conclusion: Design for Energy Efficiency
        </h2>
        <p>
          Designing an energy-efficient electrical system is not only beneficial
          for the environment but also for your wallet. By integrating
          energy-saving practices into your electrical design, such as using
          energy-efficient appliances, optimizing circuit layouts, and
          incorporating renewable energy sources like solar power, you can
          reduce your energy consumption and costs. Start implementing these
          strategies today to create a more sustainable and cost-effective
          electrical system for your home or business.
        </p>
      </motion.article>
    </motion.div>
  );
};

export default BlogPost;
