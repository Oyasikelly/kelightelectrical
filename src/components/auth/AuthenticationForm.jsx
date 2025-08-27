"use client";
import { useReducer } from "react";
import { useRouter } from "next/navigation";
import SuccessMessage from "../SuccessMessage";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

// ---------------- Reducer Setup ----------------
const initialState = {
	formData: { name: "", email: "", password: "" },
	loading: false,
	errorMessage: null,
	showPassword: false,
	isSignUp: true,
	showSuccess: false,
	successMessage: "",
};

function reducer(state, action) {
	switch (action.type) {
		case "SET_FORM_DATA":
			return {
				...state,
				formData: { ...state.formData, [action.field]: action.value },
			};
		case "TOGGLE_PASSWORD":
			return { ...state, showPassword: !state.showPassword };
		case "TOGGLE_AUTH_MODE":
			return { ...state, isSignUp: !state.isSignUp, errorMessage: null };
		case "SET_LOADING":
			return { ...state, loading: action.payload };
		case "SET_ERROR":
			return { ...state, errorMessage: action.payload };
		case "SET_SUCCESS":
			return {
				...state,
				successMessage: action.payload,
				showSuccess: true,
				errorMessage: null,
			};
		case "CLOSE_SUCCESS":
			return { ...state, showSuccess: false, successMessage: "" };
		default:
			return state;
	}
}

// ---------------- Component ----------------
const AuthenticationForm = ({ onClose }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const router = useRouter();

	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch({ type: "SET_FORM_DATA", field: name, value });
	};

	const handleSignUp = async (e) => {
		e.preventDefault();
		try {
			dispatch({ type: "SET_LOADING", payload: true });
			const { data, error } = await supabase.auth.signUp({
				email: state.formData.email,
				password: state.formData.password,
				options: {
					emailRedirectTo: "https://kelightelectrical.vercel.app/",
				},
			});

			if (error) {
				dispatch({
					type: "SET_ERROR",
					payload: "An unknown error occurred.",
				});
			}
			if (data.user) {
				const { error: profileError } = await supabase
					.from("customer_profile")
					.insert({
						customer_id: data.user.id,
						customer_name: state.formData.name,
					});

				if (profileError) {
					dispatch({
						type: "SET_ERROR",
						payload: "An unknown error occurred.",
					});
					return;
				}
			}

			if (!data.session) {
				dispatch({
					type: "SET_SUCCESS",
					payload:
						"Sign-up successful! An email has been sent to you, click it to confirm.",
				});

				setTimeout(() => {
					router.push("/");
				}, 6000);
			}
		} catch (error) {
			dispatch({ type: "SET_ERROR", payload: "An unknown error occurred." });
		} finally {
			dispatch({ type: "SET_LOADING", payload: false });
		}
	};

	const handleSignIn = async (e) => {
		e.preventDefault();
		try {
			dispatch({ type: "SET_LOADING", payload: true });
			const { data, error } = await supabase.auth.signInWithPassword({
				email: state.formData.email,
				password: state.formData.password,
			});

			if (data) {
				dispatch({ type: "SET_SUCCESS", payload: "Sign-in successful!" });
				router.refresh();
			}
			if (error) {
				dispatch({ type: "SET_ERROR", payload: "Unable to sign you in" });
			}
		} catch (error) {
			dispatch({ type: "SET_ERROR", payload: "An unknown error occurred." });
		} finally {
			dispatch({ type: "SET_LOADING", payload: false });
		}
	};

	return (
		<div className="fixed top-0 left-0 w-full h-[100vh] bg-black bg-opacity-50 z-50 flex justify-center items-center">
			<div className="flex flex-col max-w-md mx-auto bg-white shadow-xl p-8 rounded-lg">
				<span
					onClick={onClose}
					className="text-xl self-end cursor-pointer">
					&times;
				</span>
				<h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
					{state.isSignUp ? "Sign Up" : "Sign In"}
				</h2>

				<form
					onSubmit={state.isSignUp ? handleSignUp : handleSignIn}
					className="text-start">
					{state.isSignUp && (
						<div className="mb-5">
							<label className="block text-gray-700">Name</label>
							<input
								type="text"
								name="name"
								value={state.formData.name}
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
							value={state.formData.email}
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
								type={state.showPassword ? "text" : "password"}
								name="password"
								value={state.formData.password}
								onChange={handleChange}
								className="w-full px-4 py-2 border rounded-lg"
								placeholder="Enter your password"
								required
							/>
							<button
								type="button"
								onClick={() => dispatch({ type: "TOGGLE_PASSWORD" })}
								className="absolute right-4 top-1/2 transform -translate-y-1/2">
								{state.showPassword ? "Hide" : "Show"}
							</button>
						</div>
					</div>

					{state.errorMessage && (
						<p className="text-red-500 text-center">{state.errorMessage}</p>
					)}

					<button
						type="submit"
						className={`w-full py-3 rounded-lg ${
							state.loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
						} text-white`}
						disabled={state.loading}>
						{state.loading
							? "Processing..."
							: state.isSignUp
							? "Sign Up"
							: "Sign In"}
					</button>
				</form>

				<p className="mt-5 text-center">
					{state.isSignUp
						? "Already have an account?"
						: "Don't have an account?"}{" "}
					<button
						onClick={() => dispatch({ type: "TOGGLE_AUTH_MODE" })}
						className="text-blue-600 underline">
						{state.isSignUp ? "Sign In" : "Sign Up"}
					</button>
				</p>

				<p>
					Forgotten password?{" "}
					<Link
						href="/reset-password"
						className="hover:underline text-blue-600">
						click here
					</Link>
				</p>
				{state.showSuccess && (
					<SuccessMessage
						message={state.successMessage}
						onClose={() => dispatch({ type: "CLOSE_SUCCESS" })}
					/>
				)}
			</div>
		</div>
	);
};

export default AuthenticationForm;

// "use client";
// import { useState, useEffect } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import SuccessMessage from "../SuccessMessage";
// import { supabase } from "../../lib/supabase";

// const AuthenticationForm = ({ onClose }) => {
// 	const [formData, setFormData] = useState({
// 		name: "",
// 		email: "",
// 		password: "",
// 	});
// 	const [loading, setLoading] = useState(false);
// 	const [errorMessage, setErrorMessage] = useState(null);
// 	const [showPassword, setShowPassword] = useState(false);
// 	// const [isMounted, setIsMounted] = useState(false);
// 	const [isSignUp, setIsSignUp] = useState(true);
// 	const [showSuccess, setShowSuccess] = useState(false);
// 	const [successMessage, setSuccessMessage] = useState("");
// 	// const [userData, setUserData] = useState(null);
// 	const router = useRouter();

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData({ ...formData, [name]: value });
// 	};

// 	const handleSignUp = async (e) => {
// 		console.log(formData);
// 		e.preventDefault();
// 		try {
// 			setLoading(true);
// 			const { data, error } = await supabase.auth.signUp({
// 				email: formData.email,
// 				password: formData.password,
// 			});

// 			console.log(data);
// 			console.log(error);
// 			if (data.user) {
// 				const { error: profileError } = await supabase
// 					.from("customer_profile") // Replace 'profiles' with your table name
// 					.insert({
// 						customer_id: data.user.id, // Associate the name with the user's ID
// 						customer_name: formData.name,
// 					});

// 				if (profileError) setErrorMessage("An unknown error occurred.");
// 			}

// 			if (!data.session) {
// 				setSuccessMessage(
// 					"Sign-up successfull! An email has been sent to you, click to to confirm."
// 				);
// 				setErrorMessage("");

// 				setShowSuccess(true);
// 				setTimeout(() => {
// 					router.push("/");
// 				}, 6000);
// 			}
// 		} catch (error) {
// 			console.log(error);
// 			setErrorMessage("An unknown error occurred.");
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	const handleSignIn = async (e) => {
// 		e.preventDefault();
// 		try {
// 			setLoading(true);
// 			const { data, error } = await supabase.auth.signInWithPassword({
// 				email: formData.email,
// 				password: formData.password,
// 			});

// 			if (data) {
// 				console.log(data);
// 				setErrorMessage(null);

// 				setSuccessMessage("Sign-up successful");
// 				router.refresh();
// 				setShowSuccess(true);
// 				console.log("SIGNED IN");
// 			}
// 			if (error) {
// 				console.log(error);
// 				setErrorMessage("Unable to sign you in");
// 			}
// 		} catch (error) {
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	const closeSuccessMessage = () => {
// 		setShowSuccess(false);
// 	};

// 	return (
// 		<div>
// 			<div className="fixed top-0 left-0 w-full h-[100vh] bg-black bg-opacity-50 z-50 flex justify-center items-center">
// 				<div className="flex flex-col max-w-md mx-auto bg-white shadow-xl p-8 rounded-lg">
// 					<span
// 						onClick={onClose}
// 						className="text-xl self-end cursor-pointer ">
// 						&times;
// 					</span>
// 					<h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
// 						{isSignUp ? "Sign Up" : "Sign In"}
// 					</h2>
// 					<form
// 						onSubmit={isSignUp ? handleSignUp : handleSignIn}
// 						className="text-start">
// 						{isSignUp && (
// 							<div className="mb-5">
// 								<label className="block text-gray-700 ">Name</label>
// 								<input
// 									type="text"
// 									name="name"
// 									value={formData.name}
// 									onChange={handleChange}
// 									className="w-full px-4 py-2 border rounded-lg"
// 									placeholder="Enter your name"
// 									required
// 								/>
// 							</div>
// 						)}
// 						<div className="mb-5">
// 							<label className="block text-gray-700">Email</label>
// 							<input
// 								type="email"
// 								name="email"
// 								value={formData.email}
// 								onChange={handleChange}
// 								className="w-full px-4 py-2 border rounded-lg"
// 								placeholder="Enter your email"
// 								required
// 							/>
// 						</div>
// 						<div className="mb-6">
// 							<label className="block text-gray-700">Password</label>
// 							<div className="relative">
// 								<input
// 									type={showPassword ? "text" : "password"}
// 									name="password"
// 									value={formData.password}
// 									onChange={handleChange}
// 									className="w-full px-4 py-2 border rounded-lg"
// 									placeholder="Enter your password"
// 									required
// 								/>
// 								<button
// 									type="button"
// 									onClick={() => setShowPassword(!showPassword)}
// 									className="absolute right-4 top-1/2 transform -translate-y-1/2">
// 									{showPassword ? "Hide" : "Show"}
// 								</button>
// 							</div>
// 						</div>
// 						{errorMessage && (
// 							<p className="text-red-500 text-center">{errorMessage}</p>
// 						)}
// 						<button
// 							type="submit"
// 							className={`w-full py-3 rounded-lg ${
// 								loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
// 							} text-white`}
// 							disabled={loading}>
// 							{loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
// 						</button>
// 					</form>
// 					<p className="mt-5 text-center">
// 						{isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
// 						<button
// 							onClick={() => setIsSignUp(!isSignUp)}
// 							className="text-blue-600 underline">
// 							{isSignUp ? "Sign In" : "Sign Up"}
// 						</button>
// 					</p>

// 					{showSuccess && isSignUp && (
// 						<SuccessMessage
// 							message={successMessage}
// 							onClose={closeSuccessMessage}
// 						/>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default AuthenticationForm;
