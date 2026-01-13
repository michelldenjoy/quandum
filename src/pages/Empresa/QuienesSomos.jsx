import React from "react";
import VisionMision from "../../components/about/VisionMision";
import AboutFeatures from "../../components/about/AboutFeatures";
import HeroVideo from "../../components/about/HeroVideo";
import Intro from "../../components/about/Intro";
import Capabilities from "../../components/about/Capabilities";
import StoryStrip from "../../components/about/StoryStrip";

export default function QuienesSomos() {
  return (
    <div>
      <HeroVideo
        eyebrow="Quienes Somos"
        title="INGENIERÍA CON PROPOSITO"
        description="Desarrollamos tecnología avanzada para el sector aeronáutico y sistemas críticos."
        // description="diseña, desarrolla y fabrica dispositivos y sistemas electrónicos y optoelectrónicos de forma específica para el mercado Aeroespacial y de forma general para aplicaciones industriales especiales."
        backgroundImage="/images/about-hero.jpeg"
      />

      <StoryStrip />



      <Intro />
      

      {/* <HeroText /> */}

      

      <AboutFeatures />

      <VisionMision />
    </div>
  );
}
