"use client";

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import NavbarLinks from "@/lib/NavbarLinks";
import { usePathname } from "next/navigation";
const MobileNavMenu = () => {
	const [isOpen, setIsOpen] = useState(false); // Initially closed
	const pathname = usePathname();

	console.log(pathname);
	const handleToggleSheet = () => {
		setIsOpen((prev) => !prev); // Toggle open/close state
	};

	const handleCloseSheet = () => {
		setIsOpen(false); // Close the sheet when content is clicked
	};

	return (
		<div className="lg:hidden">
			<Sheet
				open={isOpen}
				onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<Button
						variant="ghost"
						className="p-2 text-gray-800 hover:text-blue-400"
						aria-label="Open Menu"
						onClick={handleToggleSheet} // Toggle on icon click
					>
						<FaBars size={24} />
					</Button>
				</SheetTrigger>

				<SheetContent
					side="left"
					onClick={handleCloseSheet} // Close when clicking the content
					className="bg-white h-full w-64 shadow-lg">
					<SheetHeader className="flex-col items-center">
						<SheetTitle />
						<Link
							href="/"
							className="w-[50px] xl:w-[70px]">
							<img
								src="/logo.png"
								alt="logo"
								className="w-full"
							/>
						</Link>
					</SheetHeader>

					<nav className="space-y-6 mt-8">
						{NavbarLinks.map((nav) => (
							<Link
								key={nav.name}
								href={nav.path}
								className={`block text-lg font-medium text-gray-800 hover:text-blue-400 px-4 py-2 ${
									nav.path === pathname
										? "border-b-2 border-blue-400 w-fit"
										: ""
								}`}>
								{nav.name}
							</Link>
						))}
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileNavMenu;
