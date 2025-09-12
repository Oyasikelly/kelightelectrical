"use client";
import { supabase } from "@/lib/supabase";
import React, {
	createContext,
	useContext,
	useEffect,
	useState,
	useMemo,
} from "react";

export const ClientInfoContext = createContext();

export const ClientInfoProvider = ({ children }) => {
	const [clientInfo, setClientInfo] = useState(null);
	const [loading, setLoading] = useState(false);
	// ...existing code...
	useEffect(() => {
		const fetchClientInfo = async () => {
			setLoading(true);
			try {
				const { data, error } = await supabase.auth.getUser();
				if (error) {
					console.error("Error fetching client info:", error);
					return;
				}

				const user = data?.user;
				console.log("Fetched user:", user);

				let customerName = null;
				let pictureUrl = null;
				let phone = null;
				if (user) {
					// Fetch the customer name from customer_profile using the user's ID
					const { data: profile, error: profileError } = await supabase
						.from("customer_profile")
						.select("customer_name, avatar_url,phone")
						.eq("customer_id", user.id)
						.single();

					console.log("Fetched profile:", profile);
					if (profileError) {
						console.error("Error fetching customer profile:", profileError);
					} else {
						customerName = profile?.customer_name || null;
						pictureUrl = profile?.avatar_url || null;
						phone = profile?.phone || null;
					}
					// Fetch testimonials associated with the user
					const { data: testimonialData, error: testimonialError } =
						await supabase
							.from("testimonials")
							.select("img,name,testimonies,services,ratings,title")
							.eq("id", user.id);
					if (testimonialError) {
						console.error("Error fetching testimonials:", testimonialError);
					}
					console.log("Fetched testimonials:", testimonialData);
					setClientInfo({
						id: user.id,
						email: user.email,
						name: customerName, // Use the name from customer_profile
						phone: phone,
						profilePicture: pictureUrl, // Use the avatar_url from customer_profile
						testimonials: testimonialData || null,
					});
				}
			} catch (err) {
				console.error("Unexpected error fetching client info:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchClientInfo();
	}, []);
	// ...existing code...

	// ✅ useMemo to prevent unnecessary re-renders
	const contextValue = useMemo(
		() => ({ clientInfo, setClientInfo, loading, setLoading }),
		[clientInfo, loading]
	);

	return (
		<ClientInfoContext.Provider value={contextValue}>
			{children}
		</ClientInfoContext.Provider>
	);
};

export default function useClientInfo() {
	const context = useContext(ClientInfoContext);
	if (!context) {
		throw new Error("useClientInfo must be used within a ClientInfoProvider");
	}
	return context;
}
