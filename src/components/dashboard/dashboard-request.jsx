import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLightbulb,
  FaWrench,
  FaTools,
  FaBolt,
  FaFan,
  FaPlug,
  FaCogs,
  FaSolarPanel,
} from "react-icons/fa";

const ServiceRequest = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
    time: "",
    specialRequests: "",
  });

  const services = [
    {
      icon: <FaLightbulb className="text-5xl text-yellow-500" />,
      title: "Lighting Installation",
      price: 200,
    },
    {
      icon: <FaWrench className="text-5xl text-blue-600" />,
      title: "Wiring & Rewiring",
      price: 200,
    },
    {
      icon: <FaTools className="text-5xl text-green-500" />,
      title: "Electrical Maintenance",
      price: 200,
    },
    {
      icon: <FaBolt className="text-5xl text-orange-500" />,
      title: "Surge Protection",
      price: 200,
    },
    {
      icon: <FaFan className="text-5xl text-purple-500" />,
      title: "Fan Installation",
      price: 200,
    },
    {
      icon: <FaPlug className="text-5xl text-red-500" />,
      title: "Socket Repairs",
      price: 200,
    },
    {
      icon: <FaCogs className="text-gray-500 text-4xl" />,
      title: "Appliance Maintenance",
      price: 200,
    },
    {
      icon: <FaSolarPanel className="text-orange-500 text-4xl" />,
      title: "Solar Panel Installation",
      price: 200,
    },
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setIsRequestOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Service request submitted: ", formData);
    // Handle the service request submission logic
  };

  return (
    <div className="p-6">
      {/* Service Listing Section */}
      <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 120 }}
            className="p-4 border rounded-xl shadow-lg bg-white text-center cursor-pointer"
            onClick={() => handleServiceSelect(service)}
          >
            {service.icon}
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-700 mb-4">Price: ${service.price}</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Book Now
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Request Form Modal */}
      <AnimatePresence>
        {isRequestOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={() => setIsRequestOpen(false)}
          >
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                onClick={() => setIsRequestOpen(false)}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Request Service
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2 text-gray-700"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2 text-gray-700"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2 text-gray-700"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg p-2 text-gray-700"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg p-2 text-gray-700"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2 text-gray-700"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  className="w-full py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700"
                >
                  Submit Request
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceRequest;
