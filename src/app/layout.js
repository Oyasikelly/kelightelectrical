import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { ClientInfoContext } from "./ClientInfoProvider"; // Adjust the import path as needed
import { ClientInfoProvider } from "@/context/ClientInfoContext";
// components

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTo from "@/components/ScrollTo";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "kelightElectrical",
	description:
		"KelightElectrical is a dynamic electrical servicing company specializing in power systems, electrical installations, instrumentation, and control solutions. We deliver reliable, efficient, and innovative services tailored to meet residential, commercial, and industrial needs.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
				<ClientInfoProvider>
					<Header />
					{children}
					<ScrollTo />
					<Footer />
				</ClientInfoProvider>
			</body>
		</html>
	);
}
