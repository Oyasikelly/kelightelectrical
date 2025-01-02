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
          src="https://www.youtube.com/embed/OvLRkJ04Ztc?autoplay=1&mute=1"
          title="5 Reasons to Upgrade Your Electrical Panel"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </motion.div>

      <motion.header variants={fadeIn} className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          How to Save Energy with Smart Lighting Solutions
        </h1>
        <p className="text-lg text-gray-600">
          Discover how smart lighting can help you save energy and reduce
          electricity bills while enhancing your space.
        </p>
      </motion.header>

      <motion.article variants={fadeIn} className="text-gray-700 space-y-6">
        <p>
          Smart lighting solutions are revolutionizing the way we illuminate our
          homes and businesses. Not only do they offer convenience, but they
          also provide significant energy savings, helping you reduce
          electricity bills while creating the perfect ambiance. Here are some
          ways smart lighting can help you save energy:
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          1. Use LED Bulbs for Efficiency
        </h2>
        <p>
          One of the easiest ways to save energy with smart lighting is by
          switching to LED bulbs. LEDs consume up to 75% less energy than
          traditional incandescent bulbs and have a much longer lifespan, making
          them a cost-effective and energy-efficient option for your home or
          office.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          2. Automate Lighting with Timers and Schedules
        </h2>
        <p>
          Smart lighting systems allow you to set schedules for when your lights
          should turn on and off. This automation ensures that lights are only
          on when needed, helping to reduce energy wastage and lower your
          electricity consumption.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          3. Adjust Brightness with Dimmers
        </h2>
        <p>
          Dimming your lights is an excellent way to save energy. With smart
          lighting, you can easily adjust the brightness to suit your needs.
          Lowering the brightness not only saves energy but also extends the
          lifespan of your bulbs.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          4. Control Lights Remotely
        </h2>
        <p>
          Many smart lighting systems offer remote control via smartphone apps
          or voice assistants. This means you can turn off lights that you may
          have accidentally left on or adjust the lighting when you’re not home,
          ensuring you never waste energy.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          5. Use Motion Sensors for Lighting Control
        </h2>
        <p>
          Motion sensors are a great way to save energy, especially in areas
          where lights are often left on unnecessarily. Smart lighting systems
          equipped with motion sensors automatically turn lights on when
          movement is detected and off when no one is in the room, helping to
          conserve energy.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          6. Set Up Zones for Lighting Control
        </h2>
        <p>
          Smart lighting solutions often allow you to create zones or groups of
          lights that can be controlled independently. This feature helps you
          focus on lighting only the areas that need illumination, reducing
          energy consumption by avoiding excess lighting in unused spaces.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          7. Take Advantage of Natural Light
        </h2>
        <p>
          Many smart lighting systems include sensors that detect ambient light
          levels. These sensors can adjust the brightness of your lights to
          match the available natural light, ensuring you don’t use more
          electricity than necessary when there’s sufficient sunlight.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          8. Control Lighting with Voice Commands
        </h2>
        <p>
          Voice-activated smart lighting systems make it easier to control the
          lights without physically interacting with them. With just a voice
          command, you can turn off lights that are no longer needed, ensuring
          that you’re not wasting electricity.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          9. Choose Smart Lighting with Energy Reports
        </h2>
        <p>
          Some smart lighting systems offer energy reports that allow you to
          track your energy usage over time. These reports provide insights into
          how much energy your lighting is consuming, helping you make informed
          decisions about how to optimize your usage.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          10. Integrate Smart Lighting with Other Smart Home Devices
        </h2>
        <p>
          For even greater energy savings, integrate your smart lighting system
          with other smart home devices such as thermostats and appliances. By
          creating routines and automating systems, you can ensure your home is
          operating as efficiently as possible.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">Conclusion</h2>
        <p>
          Smart lighting solutions are an excellent way to enhance the ambiance
          of your space while reducing your energy consumption. By making simple
          adjustments like switching to LED bulbs, setting schedules, and using
          motion sensors, you can enjoy the benefits of energy-efficient
          lighting while saving money on your electricity bills.
        </p>
      </motion.article>
    </motion.div>
  );
};

export default BlogPost;
