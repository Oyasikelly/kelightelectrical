"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import Overview from "../Components/dashboard-overview";
import Services from "../Components/dashboard-services";
import BillingAndPayment from "../Components/dashboard-billing-payment";
import ServiceRequest from "../Components/dashboard-request";
import AccountSettings from "../Components/dashboard-account-setting";
import SupportAndHelp from "../Components/dashboard-support";
import Testimonial from "../Components/dashboard-testimonial";
import Logout from "../Components/dashboard-logout";
{
  /* Dashboard overview My Services Billing & Paymonets Service Requests Account Setting support & Help Testimonials */
}
const userMenuTab = [
  {
    name: "Overview",
    path: "overview",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Billing and Payments",
    path: "billing&payments",
  },
  {
    name: "Service Requests",
    path: "service_requests",
  },
  {
    name: "Account Settings",
    path: "account_settings",
  },
  {
    name: "Support Help",
    path: "support&help",
  },
  {
    name: "Testimonials",
    path: "testimonials",
  },
  {
    name: "Logout",
    path: "logout",
  },
];

const Dashboard = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("overview"); // Default active section

  const handleLinkClick = (section) => {
    setActiveLink(section);
  };

  const renderContent = () => {
    switch (activeLink) {
      case "overview":
        return <Overview />;
      case "services":
        return (
          <div>
            <Services handleLinkClick={handleLinkClick} />
          </div>
        );
      case "billing&payments":
        return (
          <div>
            <BillingAndPayment />
          </div>
        );
      case "service_requests":
        return (
          <div>
            <ServiceRequest />
          </div>
        );
      case "account_settings":
        return (
          <div>
            <AccountSettings />
          </div>
        );
      case "support&help":
        return (
          <div>
            <SupportAndHelp />
          </div>
        );
      case "testimonials":
        return (
          <div>
            <Testimonial />
          </div>
        );
      case "logout":
        return (
          <div>
            <Logout />
          </div>
        );
      default:
        return <div>Select a section to view details.</div>;
    }
  };

  return (
    <div className="absolute top-0 right-0 left-0 z-50 min-h-screen bg-gradient-to-r from-blue-50 via-gray-100 to-blue-100 py-0 px-6 lg:px-0 flex flex-col lg:flex-row">
      {/* Sidebar Navigation */}
      <div className="lg:w-64 bg-blue-400  text-white p-6 space-y-6 lg:block hidden">
        <ul className="text-lg flex flex-col gap-4 ">
          <h2 className="font-bold uppercase">Dash Board</h2>
          {userMenuTab.map((menuTab, index) => (
            <motion.li
              key={index}
              className="mb-4 cursor-pointer relative group"
              whileHover={{
                scale: 1.1,
                color: "#93c5fd",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLinkClick(menuTab.path)} // Dynamically set activeLink
            >
              {menuTab.name}
              {activeLink === menuTab.path && (
                <motion.span
                  className="absolute left-0 bottom-0 h-[2px] bg-blue-300"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.li>
          ))}
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex-1 px-8 lg:px-0 h-screen overflow-y-scroll scrollbar-hide">
        {renderContent()}
      </div>

      {/* Mobile Sheet (for Menu) */}
      <Sheet open={sheetOpen} onOpenChange={() => setSheetOpen(!sheetOpen)}>
        <SheetTrigger>
          <div
            className={`fixed lg:hidden top-6 left-0 z-30 text-white p-4 rounded-full shadow-lg cursor-pointer ${
              sheetOpen ? "hidden" : "block"
            }`}
            onClick={() => setSheetOpen(true)}
          >
            <FiMenu size={24} color="gray" />
          </div>
        </SheetTrigger>

        <SheetContent
          position="left" // Ensure this is set to "left" so it slides from the left side
          className="bg-blue-400 text-white p-6 w-64 shadow-lg flex flex-col space-y-6"
          aria-describedby={undefined}
        >
          <SheetTitle />
          <ul className="text-xl">
            <h2 className="font-bold uppercase mb-4">Dash Board</h2>

            {userMenuTab.map((menuTab, index) => (
              <motion.li
                key={index}
                className="mb-4 cursor-pointer relative group"
                whileHover={{
                  scale: 1.1,
                  color: "#93c5fd",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLinkClick(menuTab.path)} // Dynamically set activeLink
              >
                {menuTab.name}
                {activeLink === menuTab.path && (
                  <motion.span
                    className="absolute left-0 bottom-0 h-[2px] bg-blue-300"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Dashboard;
