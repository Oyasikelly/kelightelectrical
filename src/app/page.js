import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// components & UI
import Section from "./Components/Section";
import HomeSection from "./Components/HomeSection";

export default function Home() {
  return (
    <>
      <Section>
        <HomeSection />
      </Section>
    </>
  );
}
