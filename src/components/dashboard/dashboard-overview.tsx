"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
  FaClipboardList, FaCheckCircle, FaClock, FaStar,
  FaBolt, FaCalendarAlt, FaFileInvoiceDollar, FaChevronRight
} from "react-icons/fa";
import useClientInfo from "@/context/ClientInfoContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } })
};

export default function Overview({ onProfile }: { onProfile: any }) {
  const { clientInfo } = useClientInfo();
  const { name = "User", email, profilePicture } = clientInfo || {};

  const stats = [
    {
      title: "Total Requests",
      value: "12",
      icon: <FaClipboardList className="text-blue-600 text-2xl" />,
      bg: "bg-blue-50",
      border: "border-blue-100",
      text: "text-blue-800"
    },
    {
      title: "Active Jobs",
      value: "3",
      icon: <FaClock className="text-amber-500 text-2xl" />,
      bg: "bg-amber-50",
      border: "border-amber-100",
      text: "text-amber-800"
    },
    {
      title: "Completed",
      value: "8",
      icon: <FaCheckCircle className="text-green-500 text-2xl" />,
      bg: "bg-green-50",
      border: "border-green-100",
      text: "text-green-800"
    },
    {
      title: "Pending Invoices",
      value: "1",
      icon: <FaFileInvoiceDollar className="text-purple-500 text-2xl" />,
      bg: "bg-purple-50",
      border: "border-purple-100",
      text: "text-purple-800"
    },
  ];

  const recentActivities = [
    { id: 1, title: "Solar Panel Maintenance", date: "Oct 24, 2025", status: "Completed", color: "text-green-600 bg-green-100" },
    { id: 2, title: "Wiring Inspection", date: "Oct 22, 2025", status: "In Progress", color: "text-amber-600 bg-amber-100" },
    { id: 3, title: "Invoice #INV-2041 Paid", date: "Oct 15, 2025", status: "Paid", color: "text-blue-600 bg-blue-100" },
    { id: 4, title: "New Request: Surge Protection", date: "Oct 10, 2025", status: "Pending", color: "text-gray-600 bg-gray-100" },
  ];

  const pieData = {
    labels: ["Completed", "Active", "Pending"],
    datasets: [
      {
        data: [8, 3, 1],
        backgroundColor: ["#22c55e", "#f59e0b", "#64748b"],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
        {/* BG Decoration */}
        <div className="absolute -right-10 -top-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
        
        <div className="relative z-10 flex items-center gap-5">
          <div 
            onClick={() => onProfile("account_settings")}
            className="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden cursor-pointer hover:ring-4 ring-blue-100 transition-all"
          >
            <Image
              className="object-cover"
              src={profilePicture || `https://ui-avatars.com/api/?name=${name}&background=EBF4FF&color=3B82F6`}
              alt={name}
              width={64}
              height={64}
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome back, {name.split(' ')[0]}!</h1>
            <p className="text-gray-500 mt-1">Here's what's happening with your account today.</p>
          </div>
        </div>

        <div className="relative z-10 flex gap-3 w-full md:w-auto">
          <button 
            onClick={() => onProfile("service_requests")}
            className="flex-1 md:flex-none bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
          >
            New Request
          </button>
          <button 
            onClick={() => onProfile("support&help")}
            className="flex-1 md:flex-none bg-white text-gray-700 border border-gray-200 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm"
          >
            Get Help
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`p-5 md:p-6 rounded-2xl border ${stat.bg} ${stat.border} shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow`}
          >
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className={`w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center shadow-sm backdrop-blur-sm`}>
                {stat.icon}
              </div>
              <span className={`text-3xl md:text-4xl font-bold ${stat.text}`}>{stat.value}</span>
            </div>
            <p className={`font-semibold text-sm md:text-base ${stat.text} relative z-10`}>{stat.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Activity List */}
        <motion.div 
          custom={2} initial="hidden" animate="visible" variants={fadeUp}
          className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
            <button 
              onClick={() => onProfile("service_requests")}
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
            >
              View all <FaChevronRight className="text-xs" />
            </button>
          </div>
          
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <FaBolt className="text-sm" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base">{activity.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                      <FaCalendarAlt /> {activity.date}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${activity.color}`}>
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Chart Area */}
        <motion.div 
          custom={3} initial="hidden" animate="visible" variants={fadeUp}
          className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-6">Request Summary</h2>
          <div className="flex-1 flex items-center justify-center min-h-[250px]">
            <div className="w-full max-w-[220px]">
              <Pie
                data={pieData}
                options={{
                  plugins: { legend: { position: "bottom", labels: { usePointStyle: true, padding: 20 } } },
                  cutout: '60%',
                  maintainAspectRatio: false,
                }}
                height={250}
              />
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">Need immediate assistance?</p>
            <a href="tel:+2349068318254" className="text-blue-600 font-bold hover:underline mt-1 inline-block">
              +234 906 831 8254
            </a>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
