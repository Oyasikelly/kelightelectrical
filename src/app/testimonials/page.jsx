"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// components
import Section from "../Components/Section";
import TestimonialsPage from "../Components/TestimonialsPage";

export default function Testimonials() {
  return (
    <>
      <Section>
        <TestimonialsPage />
      </Section>
    </>
  );
}
