"use client";
import { useReducer } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff, FiMail, FiLock, FiZap } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { supabase } from "@/lib/supabase";
import useClientInfo from "@/context/ClientInfoContext";
import SuccessMessage from "@/components/SuccessMessage";

// ── State ──────────────────────────────────────────────────────────────────
type State = {
  email: string;
  password: string;
  loading: boolean;
  showPassword: boolean;
  error: string | null;
  success: string | null;
};

type Action =
  | { type: "SET_FIELD"; field: "email" | "password"; value: string }
  | { type: "TOGGLE_PASSWORD" }
  | { type: "SET_LOADING"; value: boolean }
  | { type: "SET_ERROR"; message: string | null }
  | { type: "SET_SUCCESS"; message: string }
  | { type: "CLOSE_SUCCESS" };

const initialState: State = {
  email: "",
  password: "",
  loading: false,
  showPassword: false,
  error: null,
  success: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "TOGGLE_PASSWORD":
      return { ...state, showPassword: !state.showPassword };
    case "SET_LOADING":
      return { ...state, loading: action.value };
    case "SET_ERROR":
      return { ...state, error: action.message };
    case "SET_SUCCESS":
      return { ...state, success: action.message, error: null };
    case "CLOSE_SUCCESS":
      return { ...state, success: null };
    default:
      return state;
  }
}

// ── Component ───────────────────────────────────────────────────────────────
export default function LoginPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();
  const { setLoading } = useClientInfo();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "SET_ERROR", message: null });
    dispatch({ type: "SET_LOADING", value: true });
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: state.email,
        password: state.password,
      });
      if (error) {
        dispatch({ type: "SET_ERROR", message: "Invalid email or password. Please try again." });
        return;
      }
      if (data.session) {
        dispatch({ type: "SET_SUCCESS", message: "Sign-in successful! Redirecting..." });
        router.refresh();
        setTimeout(() => router.push("/dashboard"), 1200);
      }
    } catch {
      dispatch({ type: "SET_ERROR", message: "An unexpected error occurred. Please try again." });
    } finally {
      dispatch({ type: "SET_LOADING", value: false });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* ── Left panel – branding ── */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 flex-col items-center justify-center p-16 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl">
              <Image src="/logo.png" alt="KelightElectrical" width={48} height={48} className="object-contain" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
            Welcome Back to<br />
            <span className="text-blue-200">Kelight Electrical</span>
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-sm mx-auto">
            Access your client dashboard to track your service requests, manage your account, and stay connected with our team.
          </p>

          <div className="mt-12 space-y-4">
            {["Service request tracking", "Real-time support access", "Account & billing management"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-blue-100">
                <div className="w-6 h-6 rounded-full bg-blue-500/40 flex items-center justify-center flex-shrink-0">
                  <FiZap size={12} className="text-white" />
                </div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-10 border-t border-white/20">
            <p className="text-blue-200 text-sm mb-3">Need help? Reach us on WhatsApp</p>
            <a
              href="https://wa.me/2349068318254"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              <FaWhatsapp size={18} /> Chat with us
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── Right panel – form ── */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-10 lg:hidden">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md">
              <Image src="/logo.png" alt="KelightElectrical" width={40} height={40} className="object-contain" />
            </div>
            <span className="text-xl font-bold text-gray-800">
              Kelight<span className="text-blue-600">Electrical</span>
            </span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign in</h2>
          <p className="text-gray-500 mb-8">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="text-blue-600 font-semibold hover:underline">
              Create one free
            </Link>
          </p>

          <form onSubmit={handleSignIn} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  value={state.email}
                  onChange={(e) => dispatch({ type: "SET_FIELD", field: "email", value: e.target.value })}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <Link href="/forgotten-password" className="text-xs text-blue-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type={state.showPassword ? "text" : "password"}
                  value={state.password}
                  onChange={(e) => dispatch({ type: "SET_FIELD", field: "password", value: e.target.value })}
                  placeholder="••••••••"
                  required
                  className="w-full pl-11 pr-12 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => dispatch({ type: "TOGGLE_PASSWORD" })}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {state.showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {state.error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl"
              >
                {state.error}
              </motion.div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={state.loading}
              className={`w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-200 ${
                state.loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 shadow-[0_4px_14px_0_rgba(37,99,235,0.35)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.25)]"
              }`}
            >
              {state.loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Signing in…
                </span>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-8">
            By signing in, you agree to our{" "}
            <Link href="/terms&conditions" className="underline hover:text-gray-600">
              Terms & Conditions
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Success toast */}
      {state.success && (
        <SuccessMessage
          message={state.success}
          onClose={() => dispatch({ type: "CLOSE_SUCCESS" })}
        />
      )}
    </div>
  );
}
