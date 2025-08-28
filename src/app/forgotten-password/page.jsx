"use client";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useReducer } from "react";

const initialState = {
	formData: { email: "" },
	loading: false,
	errorMessage: null,
	showPassword: false,
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
		default:
			return state;
	}
}

export default function ForgottenPasswordPage() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const router = useRouter();
	function handleInputChange(e) {
		const { name, value } = e.target;
		dispatch({ type: "SET_FORM_DATA", field: name, value });
		console.log(name, value);
	}

	async function handleResetRequest(e) {
		e.preventDefault(); // prevent page refresh
		console.log(state.formData.email);
		try {
			dispatch({ type: "SET_LOADING", payload: true });
			const { data, error } = await supabase.auth.resetPasswordForEmail(
				state.formData.email,
				{
					redirectTo: "https://kelightelectrical.vercel.app/reset-password",
				}
			);
			if (error) {
				dispatch({
					type: "SET_ERROR",
					payload: "An error occured, try again!",
				});
			} else {
				dispatch({
					type: "SET_SUCCESS",
					payload: "Successfully sent an email to reset your password",
				});
			}
		} catch {
			dispatch({ type: "SET_ERROR", payload: "An unknown error occurred." });
		} finally {
			dispatch({ type: "SET_LOADING", payload: false });
		}
	}

	return (
		<div className="absolute z-40 top-0 left-0 right-0 bottom-0 w-full h-screen backdrop-blur flex justify-center items-center bg-black/50">
			<div className="flex flex-col max-w-md px-6 mx-4 bg-white shadow-xl p-8 rounded-lg">
				<span
					onClick={() => router.push("./")}
					className="text-xl self-end cursor-pointer">
					&times;
				</span>
				<h2 className="text-4xl text-center mb-6">Forgotten Password</h2>
				<p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
					Enter your email to receive a secure reset link.
				</p>
				<form onSubmit={handleResetRequest}>
					<div className="mb-5">
						{/* <label className="block text-gray-700">Email</label> */}
						<input
							type="email"
							name="email"
							value={state.formData.email}
							onChange={handleInputChange}
							className="w-full px-4 py-2 border rounded-lg"
							placeholder="Enter your email"
							required
						/>
					</div>
					{!state.error && state.showPassword && (
						<p className="text-green-300">{state.successMessage}</p>
					)}
					{state.error && !state.showSuccess && (
						<p className="text-red-300">{state.errorMessage}</p>
					)}
					<button
						type="submit"
						className={`w-full py-3 rounded-lg ${
							state.loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
						} text-white`}
						disabled={state.loading}>
						{state.loading ? "Processing..." : "Send Request"}
					</button>
				</form>
			</div>
		</div>
	);
}
