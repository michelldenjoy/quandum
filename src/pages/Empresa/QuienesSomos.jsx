import React from "react";
import VisionMision from "../../components/about/VisionMision";
import AboutFeatures from "../../components/about/AboutFeatures";
import HeroVideo from "../../components/about/HeroVideo";
import Intro from "../../components/about/Intro";
import Capabilities from "../../components/about/Capabilities";
import StoryStrip from "../../components/about/StoryStrip";
import Intro2 from "../../components/about/Intro2";
import InfraStrip from "../../components/about/InfraStrip";
import FilosofiaTrayectoria from "../../components/about/FilosofiaTrayectoria";
import Press from "../../components/about/Press";

export default function QuienesSomos() {
  return (
    <div>
      <HeroVideo
        eyebrow="Desarrollo · Técnología · Innovación"
        title="Sobre Quandum"
        description="Fabricamos ingeniería para el sector aeronáutico desde el 2006"
        // description="diseña, desarrolla y fabrica dispositivos y sistemas electrónicos y optoelectrónicos de forma específica para el mercado Aeroespacial y de forma general para aplicaciones industriales especiales."
        backgroundImage="/images/heroabout.webp"
      />

      <Intro2 />

      {/* <Intro /> */}

      <VisionMision />
      <StoryStrip />

      {/* <HeroText /> */}

      <Press />

    

      <AboutFeatures />

      <FilosofiaTrayectoria />
      <InfraStrip />
    </div>
  );
}
