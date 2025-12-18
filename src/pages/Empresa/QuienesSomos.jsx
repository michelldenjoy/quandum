import React from "react";
import MisionVision from "../../components/about/VisionMision";
import AboutFeatures from "../../components/about/AboutFeatures";
import HeroText from "../../components/about/HeroText";
import HeroVideo from "../../components/about/HeroVideo";
import Intro from "../../components/about/Intro";


export default function QuienesSomos() {
  return (
    <div>
      <HeroVideo />
      <Intro />




      {/* <HeroText /> */}

      <AboutFeatures />

      <MisionVision />
    </div>
  );
}
