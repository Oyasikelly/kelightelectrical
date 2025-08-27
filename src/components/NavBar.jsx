"use client";
// components/Navbar.jsx
import {
	NavigationMenu,
	NavigationMenuItem,
} from "@/components/navigation-menu";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarLinks from "@/lib/NavbarLinks";

export default function Navbar() {
	const pathname = usePathname();
	return (
		<NavigationMenu className="list-none gap-4">
			{NavbarLinks.map((items, index) => (
				<NavigationMenuItem key={index}>
					<Link
						href={items.path}
						className={`capitalize text-gray-600 hover:text-gray-800 ${
							items.path === pathname ? "border-b-2 border-blue-400" : ""
						}  `}>
						{items.name}
					</Link>
				</NavigationMenuItem>
			))}
		</NavigationMenu>
	);
}
