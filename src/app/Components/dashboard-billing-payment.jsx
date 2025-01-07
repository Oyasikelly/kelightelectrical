// Billing and Payment Component for KelightElectrical
// Smooth animations, elegant design, and user-friendly

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

const BillingAndPayments = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

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
  const openPayment = (service) => {
    setSelectedService(service);
    setIsPaymentOpen(true);
  };

  const closePayment = () => {
    setIsPaymentOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Billing and Payment
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 120 }}
            className="p-4 border rounded-xl shadow-lg bg-white text-center cursor-pointer"
            onClick={() => openPayment(service)}
          >
            {service.icon}
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-700 mb-4">Price: ${service.price}</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Proceed to Payment
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isPaymentOpen && (
          <PaymentComponent
            isOpen={isPaymentOpen}
            onClose={closePayment}
            serviceDetails={selectedService}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const PaymentComponent = ({ isOpen, onClose, serviceDetails }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [couponCode, setCouponCode] = useState("");

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  const handlePayment = () => {
    console.log("Payment processed for:", serviceDetails);
    onClose();
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Complete Your Payment
        </h2>
        <p className="text-gray-600 mb-4">
          Service: <strong>{serviceDetails?.title}</strong>
        </p>
        <p className="text-gray-600 mb-6">
          Total Amount: <strong>${serviceDetails?.price || "N/A"}</strong>
        </p>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Payment Method</label>
          <select
            value={selectedPaymentMethod}
            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
            className="w-full border rounded-lg p-2 text-gray-700"
          >
            <option value="card">Credit/Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank">Bank Transfer</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Apply Coupon Code</label>
          <div className="flex gap-4 items-center">
            <input
              type="number"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-1 border rounded-l-lg p-2 text-gray-700"
              placeholder="Enter code"
            />
            <button className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
              Apply
            </button>
          </div>
        </div>

        {selectedPaymentMethod === "card" && (
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Card Details</label>
            <input
              type="text"
              placeholder="Card Number"
              className="w-full border rounded-lg p-2 mb-3 text-gray-700"
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="MM/YY"
                className="flex-1 border rounded-lg p-2 w-full text-gray-700"
              />
              <input
                type="text"
                placeholder="CVV"
                className="flex-1 border rounded-lg p-2 w-full text-gray-700"
              />
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mb-6">
          <label className="text-gray-700">
            <input type="checkbox" className="mr-2" /> Save payment method
          </label>
          <a
            href="/terms&conditions"
            className="text-blue-600 text-sm hover:underline"
          >
            Terms & Conditions
          </a>
        </div>

        <button
          onClick={handlePayment}
          className="w-full py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700"
        >
          Pay Now
        </button>
      </motion.div>
    </motion.div>
  );
};

export default BillingAndPayments;
