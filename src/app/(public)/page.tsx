import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// components & UI
import Section from "@/components/Section";
import HomeSection from "@/components/HomeSection";
import { supabase } from "@/lib/supabase";

export default function Home() {
	const setNewView = async () => {
		try {
			const { data, error } = await supabase.from("view").insert({
				name: "Jame M.",
				testimonial: "Great Work!",
				email: "test@gmail.com",
				image: <Image src="/assets/testimonial3.jpg" alt="Testimonial" width={64} height={64} />,
			});

			if (data) console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	// setNewView(); // Prevent running on every render on public page
	return (
		<div className="">
			<Section>
				<HomeSection />
			</Section>
		</div>
	);
}
