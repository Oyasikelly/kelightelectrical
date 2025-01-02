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
          src="https://www.youtube.com/embed/iGUdMke-Ao4?autoplay=1&mute=1"
          title="Choosing the Right Electrician for Your Project"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </motion.div>

      <motion.header variants={fadeIn} className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          A Beginner’s Guide to Home Automation
        </h1>
        <p className="text-lg text-gray-600">
          Home automation can seem overwhelming, but this beginner’s guide
          simplifies the process for you.
        </p>
      </motion.header>

      <motion.article variants={fadeIn} className="text-gray-700 space-y-6">
        <p>
          Home automation is no longer a futuristic concept; it’s something that
          is becoming more accessible to homeowners today. Whether you want to
          control your lights, thermostat, or security system from your
          smartphone, home automation makes your life easier, more
          energy-efficient, and secure. This guide breaks down the basics to
          help you get started with automating your home.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          1. What is Home Automation?
        </h2>
        <p>
          Home automation refers to the use of technology to control and
          automate various functions in your home. This can include controlling
          lighting, climate, security, entertainment systems, and appliances
          remotely through the internet. By using smart devices like smart
          bulbs, thermostats, and security cameras, you can create a more
          convenient, energy-efficient, and secure living environment.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          2. Getting Started with Home Automation
        </h2>
        <p>
          Starting your home automation journey can be as simple or as complex
          as you want. If you’re a beginner, it’s best to start with a few
          essential devices and gradually expand your system. Begin by investing
          in smart lighting, smart plugs, and a smart thermostat, all of which
          are affordable and easy to set up. From there, you can explore adding
          more devices as you get more comfortable.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          3. Choosing the Right Smart Devices
        </h2>
        <p>
          The key to successful home automation is choosing the right devices.
          When shopping for smart devices, consider factors such as
          compatibility with your existing home systems, ease of installation,
          and user reviews. Some popular smart home ecosystems to consider
          include Amazon Alexa, Google Assistant, and Apple HomeKit. Ensure that
          the devices you choose work with your preferred system for seamless
          integration.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          4. Setting Up Your Home Automation Hub
        </h2>
        <p>
          Many home automation systems require a central hub to control all the
          devices. This hub connects the devices and allows you to control them
          through a single app or interface. Popular hubs include Amazon Echo,
          Google Nest Hub, and Apple HomePod. The hub serves as the brain of
          your system, enabling voice commands, routines, and remote control
          through your smartphone.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          5. Automating Your Lights and Thermostat
        </h2>
        <p>
          One of the simplest ways to get started with home automation is by
          controlling your lighting and thermostat. Smart bulbs can be
          controlled remotely, allowing you to turn them on or off, dim them, or
          even change their color. Similarly, a smart thermostat learns your
          preferences and adjusts the temperature automatically to save energy.
          These two devices are among the most popular in home automation and
          offer quick returns on investment in terms of energy savings.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          6. Enhancing Security with Smart Cameras and Locks
        </h2>
        <p>
          Home security is one of the biggest advantages of home automation.
          Smart security cameras allow you to monitor your home remotely,
          receiving alerts when motion is detected. Smart locks provide keyless
          entry, letting you unlock your doors from your smartphone. Both of
          these devices can give you peace of mind, knowing that you can always
          check in on your home, whether you’re on vacation or at work.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          7. Creating Routines and Automation
        </h2>
        <p>
          One of the most powerful features of home automation is the ability to
          create routines and automation. With routines, you can set your lights
          to turn on automatically when you get home, or have your thermostat
          adjust to your preferred temperature at a specific time of day. You
          can also integrate other devices, such as opening the blinds in the
          morning or playing music when you enter a room. These automations can
          save you time and make your daily life more convenient.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          8. Controlling Your Home with Voice Commands
        </h2>
        <p>
          Voice control is one of the most convenient aspects of home
          automation. With voice assistants like Amazon Alexa, Google Assistant,
          and Siri, you can control your smart devices hands-free. Simply say,
          “Turn off the lights,” or “Set the temperature to 72 degrees,” and
          your devices will respond. Voice control makes managing your home
          automation system even easier, especially when your hands are full.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          9. Ensuring Security and Privacy
        </h2>
        <p>
          As with any connected device, security and privacy are important
          considerations. Ensure that your smart devices are protected with
          strong passwords and encryption. Many devices also offer two-factor
          authentication for added security. Be mindful of the data that your
          devices collect, and choose products from reputable manufacturers who
          prioritize security and privacy.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">
          10. Expanding Your Home Automation System
        </h2>
        <p>
          Once you’ve gotten the hang of the basics, you can start expanding
          your home automation system. You might consider adding smart
          appliances like refrigerators, washing machines, or coffee makers that
          can be controlled remotely. Some advanced setups even allow you to
          control your home’s irrigation system, automate your blinds, or
          integrate with home theater systems. The possibilities are endless, so
          take your time and expand as your needs grow.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">Conclusion</h2>
        <p>
          Home automation doesn’t have to be intimidating. By starting with a
          few simple devices, you can make your home smarter, more efficient,
          and more secure. With the right products, a central hub, and a little
          planning, you’ll be able to control your entire home from the palm of
          your hand. Remember, home automation is a gradual process, so take it
          one step at a time and enjoy the benefits of a smarter home.
        </p>
      </motion.article>
    </motion.div>
  );
};

export default BlogPost;
