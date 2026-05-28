"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaTachometerAlt, FaTools, FaCreditCard, FaClipboardList,
  FaUserCog, FaLifeRing, FaStar, FaSignOutAlt,
} from "react-icons/fa";
import {
  Sheet, SheetContent, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import Overview from "@/components/dashboard/dashboard-overview";
import Services from "@/components/dashboard/dashboard-services";
import BillingAndPayment from "@/components/dashboard/dashboard-billing-payment";
import ServiceRequest from "@/components/dashboard/dashboard-request";
import AccountSettings from "@/components/dashboard/dashboard-account-setting";
import SupportAndHelp from "@/components/dashboard/dashboard-support";
import Testimonial from "@/components/dashboard/dashboard-testimonial";
import Logout from "@/components/dashboard/dashboard-logout";
import ContactPage from "@/components/pages/ContactPage";
import useClientInfo from "@/context/ClientInfoContext";

const userMenuTab = [
  { name: "Overview", path: "overview", icon: <FaTachometerAlt /> },
  { name: "Services", path: "services", icon: <FaTools /> },
  { name: "Billing & Payments", path: "billing&payments", icon: <FaCreditCard /> },
  { name: "Service Requests", path: "service_requests", icon: <FaClipboardList /> },
  { name: "Account Settings", path: "account_settings", icon: <FaUserCog /> },
  { name: "Support & Help", path: "support&help", icon: <FaLifeRing /> },
  { name: "Testimonials", path: "testimonials", icon: <FaStar /> },
  { name: "Logout", path: "logout", icon: <FaSignOutAlt />, danger: true },
];

function SidebarContent({ activeLink, handleLinkClick, onClose }: { activeLink: string; handleLinkClick: (section: string) => void; onClose?: () => void }) {
  const { clientInfo } = useClientInfo();
  return (
    <div className="flex flex-col h-full">
      {/* Brand */}
      <div className="px-5 py-6 border-b border-blue-500/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-lg">
            K
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-none">KelightElectrical</p>
            <p className="text-blue-200 text-xs mt-0.5">Customer Portal</p>
          </div>
        </div>
      </div>

      {/* User Badge */}
      {clientInfo && (
        <div className="mx-4 mt-4 p-3 bg-white/10 rounded-xl flex items-center gap-3">
          <Image
            src={clientInfo.profilePicture || "/assets/default-avatar.png"}
            alt="avatar"
            width={36}
            height={36}
            className="rounded-full object-cover border-2 border-blue-300"
          />
          <div className="min-w-0">
            <p className="text-white text-sm font-semibold truncate">{clientInfo.name || "User"}</p>
            <p className="text-blue-200 text-xs truncate">{clientInfo.email}</p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {userMenuTab.map((tab) => {
          const isActive = activeLink === tab.path;
          return (
            <button
              key={tab.path}
              onClick={() => {
                handleLinkClick(tab.path);
                onClose?.();
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-white text-blue-600 shadow-md"
                  : tab.danger
                  ? "text-red-300 hover:bg-red-500/20 hover:text-red-200"
                  : "text-blue-100 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className={`text-base ${isActive ? "text-blue-600" : tab.danger ? "text-red-300" : "text-blue-300"}`}>
                {tab.icon}
              </span>
              {tab.name}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-blue-500/30">
        <p className="text-blue-300 text-xs text-center">© 2025 KelightElectrical</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("overview");

  const handleLinkClick = (section) => {
    setActiveLink(section);
    setSheetOpen(false);
  };

  const renderContent = () => {
    switch (activeLink) {
      case "overview": return <Overview onProfile={handleLinkClick} />;
      case "services": return <Services handleLinkClick={handleLinkClick} />;
      case "billing&payments": return <BillingAndPayment />;
      case "service_requests": return <ServiceRequest />;
      case "account_settings": return <AccountSettings />;
      case "support&help": return <SupportAndHelp />;
      case "testimonials": return <Testimonial />;
      case "logout": return <Logout />;
      case "contact": return <ContactPage />;
      default: return <Overview onProfile={handleLinkClick} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-gradient-to-b from-blue-700 to-blue-800 shadow-2xl flex-shrink-0">
        <SidebarContent activeLink={activeLink} handleLinkClick={handleLinkClick} />
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Mobile top bar */}
        <div className="lg:hidden flex items-center justify-between bg-white border-b border-gray-100 px-5 py-4 shadow-sm flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
              K
            </div>
            <span className="font-bold text-gray-800 text-sm">KelightElectrical</span>
          </div>
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                onClick={() => setSheetOpen(true)}
              >
                <FiMenu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-gradient-to-b from-blue-700 to-blue-800 text-white p-0 w-72 shadow-2xl flex flex-col"
              aria-describedby={undefined}
            >
              <SheetTitle />
              <SidebarContent
                activeLink={activeLink}
                handleLinkClick={handleLinkClick}
                onClose={() => setSheetOpen(false)}
              />
            </SheetContent>
          </Sheet>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLink}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
