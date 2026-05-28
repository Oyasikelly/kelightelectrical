"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// components
import Section from "../../components/Section";
import TestimonialsPage from "../../components/pages/TestimonialsPage";

export default function Testimonials() {
	return (
		<>
			<Section>
				<TestimonialsPage />
			</Section>
		</>
	);
}
