"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiX } from "react-icons/fi";

const CONSENT_KEY = "kelightelectrical_cookie_consent";

// ── Helper you can import anywhere before loading analytics ─────────────────
export function hasCookieConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CONSENT_KEY) === "accepted";
}

// ── Banner Component ────────────────────────────────────────────────────────
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if user hasn't responded yet
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      // Small delay so it doesn't pop immediately on page load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
    // Fire a custom event so GoogleAnalytics loads immediately in the same tab
    window.dispatchEvent(new Event("cookieConsentAccepted"));
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 z-[500] sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="bg-gray-900 text-white rounded-2xl shadow-2xl p-5 border border-gray-700">
            {/* Close button */}
            <button
              onClick={decline}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
              aria-label="Dismiss"
            >
              <FiX size={16} />
            </button>

            {/* Icon + title */}
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl">🍪</span>
              <div>
                <p className="font-semibold text-sm text-white">We use cookies</p>
                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                  We use essential cookies to keep you logged in and analytics cookies
                  to understand how visitors use our site.{" "}
                  <Link
                    href="/terms&conditions"
                    className="text-blue-400 hover:underline"
                  >
                    Learn more
                  </Link>
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={decline}
                className="flex-1 py-2 text-xs font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors border border-gray-600"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="flex-1 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shadow-[0_2px_8px_rgba(37,99,235,0.4)]"
              >
                Accept all
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
