import React from "react";
import VisionMision from "../../components/about/VisionMision";
import AboutFeatures from "../../components/about/AboutFeatures";
import HeroVideo from "../../components/about/HeroVideo";
import Intro from "../../components/about/Intro";

export default function QuienesSomos() {
  return (
    <div>
      <HeroVideo
        eyebrow="Quiénes somos"
        title="Diseñamos y fabricamos sistemas aeronáuticos de misión crítica"
        description="Desarrollamos sistemas electrónicos y optoelectrónicos de alta fiabilidad para aplicaciones aeroespaciales y de defensa, cumpliendo los estándares internacionales más exigentes."
        backgroundImage="/images/about-hero.jpg"
      />
      <Intro />

      {/* <HeroText /> */}

      <AboutFeatures />

      <VisionMision />
    </div>
  );
}
