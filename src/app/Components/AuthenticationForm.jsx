"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SuccessMessage from "./SuccessMessage"; // Import the SuccessMessage component

const AuthenticationForm = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between Sign-Up and Sign-In
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // To handle client-side rendering
  const [showSuccess, setShowSuccess] = useState(false); // State to control the success message
  const [successMessage, setSuccessMessage] = useState(""); // State for the success message
  const [userData, setUserData] = useState(null); // State to store user details
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isSignUp ? "/api/auth/signUp" : "/api/auth/signIn";

    console.log("Sending request to:", endpoint, "with data:", formData);

    try {
      setLoading(true);
      setErrorMessage(""); // Clear previous errors

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Check if the response is OK
      if (!response.ok) {
        const errorText = await response.text(); // Parse error message (if any)
        throw new Error(
          `Error ${response.status}: ${response.statusText}. ${errorText}`
        );
      }

      const result = await response.json();
      console.log("Response from server:", result);

      // If sign-up is successful
      if (isSignUp) {
        setSuccessMessage(result.message || "Sign-up successful!");
        setShowSuccess(true);
        setUserData(result.user); // Optional: Store user data for display
      }

      // Handle login (if needed)
      if (!isSignUp) {
        // Example: Navigate to a dashboard
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setErrorMessage(error.message || "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const closeSuccessMessage = () => {
    setShowSuccess(false);
  };

  if (!isMounted) return null;

  return (
    <div>
      {showSuccess && (
        <SuccessMessage
          message={successMessage}
          onClose={closeSuccessMessage}
        />
      )}

      <div className="fixed top-0 left-0 w-full h-[100vh] bg-black bg-opacity-50 z-50 flex justify-center items-center transition-opacity duration-500 ease-in-out">
        <div className="max-w-md mx-auto bg-white shadow-xl p-8 rounded-lg transition-transform duration-300 ease-out transform scale-95 hover:scale-100">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="mb-5 text-start">
                <label className="block text-gray-700 text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
            )}
            <div className="mb-5 text-start">
              <label className="block text-gray-700 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6 text-start">
              <label className="block text-gray-700 text-sm">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm text-center mb-4">
                {errorMessage}
              </p>
            )}
            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-lg transition-all duration-300 ${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white ${loading ? "cursor-not-allowed" : ""}`}
              disabled={loading}
            >
              {loading ? "Please wait..." : isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
          <p className="mt-5 text-center text-sm">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 text-2xl hover:text-blue-500"
          >
            &times;
          </button>
        </div>
      </div>
      {/* User Details Display */}
      {userData && (
        <div className="user-details">
          <h3 className="text-xl font-bold">Welcome, {userData.name}!</h3>
          <p className="text-gray-700">Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
};

export default AuthenticationForm;
