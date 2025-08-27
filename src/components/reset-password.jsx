"use client";
import { useRouter } from "next/navigation";
import { useReducer } from "react";

const initialState = {
	formData: { name: "", email: "", password: "" },
	loading: false,
	errorMessage: null,
	showPassword: false,
	isSignUp: true,
	showSuccess: false,
	successMessage: "",
};

function reducer() {
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

export default function ResetPassword() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch({ type: "SET_FORM_DATA", field: name, value });
	};

	async function handleReset() {
		try {
			dispatch({ type: "SET_LOADING", payload: true });
			const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
				redirectTo: `${window.location.origin}/reset-password`, // the page user will be redirected to
			});

			if (error) {
				dispatch({
					type: "SET_ERROR",
					payload: "An unknown error occurred.",
				});
			}
		} catch {
			dispatch({ type: "SET_ERROR", payload: "An unknown error occurred." });
		} finally {
			dispatch({ type: "SET_LOADING", payload: false });
		}
	}
	const navigation = useRouter();
	// function onClose() {
	// 	navigation("./");
	// }

	return (
		<div className="flex flex-col max-w-md mx-auto bg-white shadow-xl p-8 rounded-lg">
			{/* <span
				onClick={onClose}
				className="text-xl self-end cursor-pointer">
				&times;
			</span> */}
			<form
				onSubmit={handleReset}
				className="text-start">
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
		</div>
	);
}
