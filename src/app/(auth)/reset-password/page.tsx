"use client";
import { useReducer } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff, FiLock, FiArrowLeft } from "react-icons/fi";
import { supabase } from "@/lib/supabase";

type State = {
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  loading: boolean;
  error: string | null;
  success: boolean;
};

type Action =
  | { type: "SET_FIELD"; field: "password" | "confirmPassword"; value: string }
  | { type: "TOGGLE_PASSWORD" }
  | { type: "SET_LOADING"; value: boolean }
  | { type: "SET_ERROR"; message: string | null }
  | { type: "SET_SUCCESS" };

const initialState: State = {
  password: "",
  confirmPassword: "",
  showPassword: false,
  loading: false,
  error: null,
  success: false,
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
      return { ...state, success: true, error: null };
    default:
      return state;
  }
}

export default function ResetPasswordPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "SET_ERROR", message: null });

    if (state.password.length < 6) {
      dispatch({ type: "SET_ERROR", message: "Password must be at least 6 characters." });
      return;
    }

    if (state.password !== state.confirmPassword) {
      dispatch({ type: "SET_ERROR", message: "Passwords do not match." });
      return;
    }

    dispatch({ type: "SET_LOADING", value: true });
    try {
      const { error } = await supabase.auth.updateUser({ password: state.password });
      if (error) {
        dispatch({ type: "SET_ERROR", message: "Failed to update password. The link may have expired." });
      } else {
        dispatch({ type: "SET_SUCCESS" });
        setTimeout(() => router.push("/login"), 3000);
      }
    } catch {
      dispatch({ type: "SET_ERROR", message: "An unexpected error occurred. Please try again." });
    } finally {
      dispatch({ type: "SET_LOADING", value: false });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-md">
            <Image src="/logo.png" alt="KelightElectrical" width={48} height={48} className="object-contain" />
          </div>
          <span className="text-xl font-bold text-gray-800">
            Kelight<span className="text-blue-600">Electrical</span>
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {!state.success ? (
            <>
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <FiLock className="text-blue-600" size={28} />
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-2">Set a new password</h1>
              <p className="text-gray-500 text-sm mb-7">
                Choose a strong password that you haven&apos;t used before.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* New Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    New password
                    <span className="text-gray-400 font-normal ml-1">(min. 6 characters)</span>
                  </label>
                  <div className="relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type={state.showPassword ? "text" : "password"}
                      value={state.password}
                      onChange={(e) => dispatch({ type: "SET_FIELD", field: "password", value: e.target.value })}
                      placeholder="••••••••"
                      required
                      minLength={6}
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

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm new password</label>
                  <div className="relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type={state.showPassword ? "text" : "password"}
                      value={state.confirmPassword}
                      onChange={(e) => dispatch({ type: "SET_FIELD", field: "confirmPassword", value: e.target.value })}
                      placeholder="••••••••"
                      required
                      className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-900 placeholder-gray-400"
                    />
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
                      : "bg-blue-600 hover:bg-blue-700 shadow-[0_4px_14px_0_rgba(37,99,235,0.35)]"
                  }`}
                >
                  {state.loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Updating password…
                    </span>
                  ) : (
                    "Update password"
                  )}
                </button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Password updated!</h2>
              <p className="text-gray-500 text-sm">
                Your password has been changed successfully. Redirecting you to sign in…
              </p>
            </motion.div>
          )}
        </div>

        <div className="text-center mt-6">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors"
          >
            <FiArrowLeft size={16} /> Back to Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
