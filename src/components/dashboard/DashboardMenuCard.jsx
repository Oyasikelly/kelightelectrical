"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const userMenuTab = [
  {
    name: "Dashboard overview",
    path: "/dashboard/overview",
  },
  {
    name: "My Services",
    path: "/dashboard/services",
  },
  {
    name: "Billing & Payments",
    path: "/billing-payments",
  },
  {
    name: "Service Requests",
    path: "/dashboard/service-requests",
  },
  {
    name: "Account Settings",
    path: "/dashboard/account-settings",
  },
  {
    name: "support & Help",
    path: "/dashboard/support-help",
  },
  {
    name: "Testimonials",
    path: "/dashboard/testimonials",
  },
];
const DashboardMenuCard = () => {
  const pathname = usePathname();
  return (
    <div className="lg:w-64 bg-blue-400 text-white p-6 space-y-6 lg:block hidden">
      {/* <h2 className="text-2xl font-bold mb-4">Dashboard Menu</h2> */}
      <ul className="text-xl">
        {userMenuTab.map((menuTab, index) => (
          <motion.li
            key={index}
            className="mb-4 cursor-pointer relative group"
            whileHover={{
              scale: 1.1,
              color: "#93c5fd",
            }}
            whileTap={{ scale: 0.95 }}
            // onClick={ } // Pass the dynamic section name
          >
            <Link href={menuTab.path}>
              {menuTab.name}
              {menuTab.path === pathname && (
                <motion.span
                  className="absolute left-0 bottom-0 h-[2px] bg-blue-300"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardMenuCard;
