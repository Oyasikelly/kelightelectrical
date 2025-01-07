import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Logout = ({ onLogout }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-red-100 to-pink-200 p-8 rounded-lg shadow-lg max-w-sm">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-red-600">Are You Sure?</h2>
          <p className="text-gray-600 mt-2">
            You will need to log in again to access your account.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="flex space-x-4 mt-6"
        >
          <button
            onClick={onLogout}
            className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200 transform hover:scale-105"
          >
            <FaSignOutAlt className="mr-2 text-lg" />
            Log Out
          </button>
          <button
            onClick={() => alert("Stay logged in!")}
            className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200 transform hover:scale-105"
          >
            Cancel
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Logout;
