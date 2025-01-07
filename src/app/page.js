import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// components & UI
import Section from "./Components/Section";
import HomeSection from "./Components/HomeSection";
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
    <>
      <Section>
        <HomeSection />
      </Section>
    </>
  );
}
