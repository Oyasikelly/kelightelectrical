"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Extend window type for gtag
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    // Check consent immediately on mount
    const stored = localStorage.getItem("kelightelectrical_cookie_consent");
    if (stored === "accepted") {
      setConsented(true);
      return;
    }

    // Listen for consent being granted in the same tab
    const handleConsent = () => setConsented(true);
    window.addEventListener("cookieConsentAccepted", handleConsent);
    return () => window.removeEventListener("cookieConsentAccepted", handleConsent);
  }, []);

  if (!GA_ID || !consented) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
}
