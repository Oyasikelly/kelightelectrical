"use client";
import React from "react";
import Link from "next/link";
// components
import Navbar from "./NavBar";
import MobileNavMenu from "./MobileNavBar";
export default function Header() {
  return (
    <div className="border-b bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="w-[50px] xl:w-[70px] ">
          <img src="/logo.png" alt="logo" className="W-full" />
        </Link>
        {/* Mobile Nav */}
        <div className="hidden xl:flex ">
          <Navbar />
        </div>
        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNavMenu />
        </div>
      </div>
    </div>
  );
}
