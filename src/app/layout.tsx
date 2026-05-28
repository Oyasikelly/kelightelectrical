import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientInfoProvider } from "@/context/ClientInfoContext";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KelightElectrical",
  description:
    "KelightElectrical is a dynamic electrical servicing company specializing in power systems, electrical installations, instrumentation, and control solutions. We deliver reliable, efficient, and innovative services tailored to meet residential, commercial, and industrial needs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        <GoogleAnalytics />
        <ClientInfoProvider>
          {children}
        </ClientInfoProvider>
      </body>
    </html>
  );
}
