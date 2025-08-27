import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// components & UI
import Section from "../components/Section";
import HomeSection from "../components/HomeSection";
import { supabase } from "@/lib/supabase";

export default function Home() {
	const setNewView = async () => {
		try {
			const { data, error } = await supabase.from("view").insert({
				name: "Jame M.",
				testimonial: "Great Work!",
				email: "test@gmail.com",
				image: <img src="/assets/testimonial3.jpg" />,
			});

			if (data) console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	setNewView();
	return (
		<div className="">
			<Section>
				<HomeSection />
			</Section>
		</div>
	);
}
