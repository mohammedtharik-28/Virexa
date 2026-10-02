import Hero from "@/components/home/Hero";
import Navbar from "../components/home/Navbar";
import Founder from "@/components/home/Founder";
import OurSolution from "@/components/home/OurSolution";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import Footer from "@/components/home/Footer";
import Sector from "@/components/home/Sector";
import QuestionCard from "@/components/home/QuestionCard";
import OurProcess from "@/components/home/OurProcess";
import Testimonial from "@/components/home/Testimonial";
import OurTechnology from "@/components/home/OurTechnology";
import OurRecord from "@/components/home/OurRecord";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Founder/>
      <OurSolution/>
      <WhatWeBuild/>
      <OurProcess/>
      <OurTechnology/>
      <Sector/>
      <OurRecord/>
      <Testimonial/>
      <QuestionCard/>
      <Footer/>
    </>
  );
}