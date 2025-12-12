import React from "react";
import FilosofiaTrayectoria from "../../components/about/FilosofiaTrayectoria";
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

      <FilosofiaTrayectoria />
    </div>
  );
}
