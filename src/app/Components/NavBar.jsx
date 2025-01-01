"use client";
// components/Navbar.jsx
import {
  NavigationMenu,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { usePathname } from "next/navigation";
const desktopMenu = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Testimonials",
    path: "/testimonials",
  },
];
export default function Navbar() {
  const pathname = usePathname();
  return (

        <NavigationMenu className="list-none gap-4">
          {desktopMenu.map((items, index) => (
            <NavigationMenuItem key={index}>
              <Link
                href={items.path}
                className={`capitalize text-gray-600 hover:text-gray-800 ${
                  items.path === pathname ? "border-b-2 border-blue-400" : ""
                }  `}
              >
                {items.name}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenu>
   
  );
}
