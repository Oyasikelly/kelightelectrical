"use client";
import React from "react";
import Link from "next/link";
// components
import Navbar from "./NavBar";
import MobileNavMenu from "./MobileNavBar";
export default function Header() {
	return (
		<div className="border-b bg-white">
			<div className="container mx-auto py-3 px-10 md:px-0 max-w-7xl flex items-center justify-between">
				<Link
					href="/"
					className="w-[50px] xl:w-[70px] ">
					<img
						src="/logo.png"
						alt="logo"
						className="W-full"
					/>
				</Link>
				{/* Mobile Nav */}
				<div className="hidden lg:flex lg:relative lg:-z-200">
					<Navbar />
				</div>
				{/* Mobile Nav */}
				<div className="lg:hidden">
					<MobileNavMenu />
				</div>
			</div>
		</div>
	);
}
