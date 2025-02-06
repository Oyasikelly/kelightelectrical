"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import SuccessMessage from "./SuccessMessage";
import { supabase } from "./../../lib/supabase";

const AuthenticationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  // const [isMounted, setIsMounted] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  // const [userData, setUserData] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const endpoint = isSignUp ? "/api/auth/signUp" : "/api/auth/signIn";

  //   console.log("Sending request to:", endpoint, "with data:", formData);

  //   try {
  //     setLoading(true);
  //     setErrorMessage(""); // Clear previous errors

  //     const response = await fetch(endpoint, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!response.ok) {
  //       const errorText = await response.text();
  //       throw new Error(
  //         `Error ${response.status}: ${response.statusText}. ${errorText}`
  //       );
  //     }

  //     const result = await response.json();
  //     console.log("Response from server:", result);

  //     // If sign-up or login is successful

  //     if (isSignUp) {
  //       setSuccessMessage(result.message || "Sign-up successful!");
  //       setShowSuccess(true);
  //       // Retrieve the current users array from localStorage
  //       const users = JSON.parse(localStorage.getItem("users"));
  //       users.push(result.user); // Add new user to users array
  //       localStorage.setItem("users", JSON.stringify(users)); // Save updated array back to localStorage
  //     }

  //     if (isSignUp) {
  //       setSuccessMessage(result.message || "Sign-up successful!");
  //       setShowSuccess(true);
  //     }

  //     // Redirect to dashboard with user data
  //     router.push(
  //       `/dashboard?name=${encodeURIComponent(
  //         result.user.name
  //       )}&email=${encodeURIComponent(result.user.email)}`
  //     );
  //     // router.push({
  //     //   pathname: "/dashboard",
  //     //   query: {
  //     //     name: encodeURIComponent(result.user.name),
  //     //     email: encodeURIComponent(result.user.email),
  //     //   },
  //     // });
  //   } catch (error) {
  //     console.error("Error during form submission:", error);
  //     setErrorMessage(error.message || "An unknown error occurred.");
  //   } finally {
  //   }
  // };

  const handleSignUp = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      console.log(error);
      if (data.user) {
        const { error: profileError } = await supabase
          .from("customer names") // Replace 'profiles' with your table name
          .insert({
            id: data.user.id, // Associate the name with the user's ID
            customer_name: formData.name,
          });

        if (profileError) setErrorMessage("An unknown error occurred.");
      }

      if (!data.session) {
        setSuccessMessage(
          "Sign-up successfull! An email has been sent to you, click to to confirm."
        );
        setShowSuccess(true);
        setTimeout(() => {
          router.push("/");
        }, 6000);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (data) {
        console.log(data);
        setErrorMessage(null);

        setSuccessMessage("Sign-up successful");
        router.refresh();
        setShowSuccess(true);
        console.log("SIGNED IN");
      }
      if (error) {
        console.log(error);
        setErrorMessage("Unable to sign you in");
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const closeSuccessMessage = () => {
    setShowSuccess(false);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-[100vh] bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className="flex flex-col max-w-md mx-auto bg-white shadow-xl p-8 rounded-lg">
          <span onClick={onClose} className="text-xl self-end cursor-pointer ">
            &times;
          </span>
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>
          <form
            onSubmit={isSignUp ? handleSignUp : handleSignIn}
            className="text-start"
          >
            {isSignUp && (
              <div className="mb-5">
                <label className="block text-gray-700 ">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter your name"
                  required
                />
              </div>
            )}
            <div className="mb-5">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}
            <button
              type="submit"
              className={`w-full py-3 rounded-lg ${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white`}
              disabled={loading}
            >
              {loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
          <p className="mt-5 text-center">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-600 underline"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>

          {showSuccess && isSignUp && (
            <SuccessMessage
              message={successMessage}
              onClose={closeSuccessMessage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthenticationForm;
