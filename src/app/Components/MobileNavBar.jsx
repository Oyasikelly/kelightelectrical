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

const MobileNavMenu = () => {
  return (
    <div className="lg:hidden">
      {/* Trigger Button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="p-2 text-gray-800 hover:text-blue-400"
            aria-label="Open Menu"
          >
            <FaBars size={24} />
          </Button>
        </SheetTrigger>

        {/* Menu Content */}
        <SheetContent side="left" className=" bg-white h-full w-64 shadow-lg">
          <SheetHeader className="flex-col items-center">
            {/* Accessible Title */}
            <SheetTitle />
            <Link href="/" className="w-[50px] xl:w-[70px] ">
              <img src="/logo.png" alt="logo" className="W-full" />
            </Link>
          </SheetHeader>
          <nav className="space-y-6 mt-8">
            <Link
              href="/"
              className="block text-lg font-medium text-gray-800 hover:text-blue-400 px-4 py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-lg font-medium text-gray-800 hover:text-blue-400 px-4 py-2"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block text-lg font-medium text-gray-800 hover:text-blue-400 px-4 py-2"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-lg font-medium text-gray-800 hover:text-blue-400 px-4 py-2"
            >
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavMenu;
