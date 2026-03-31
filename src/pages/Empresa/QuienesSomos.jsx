import React from "react";
import VisionMision from "../../components/about/VisionMision";
import AboutFeatures from "../../components/about/AboutFeatures";
import HeroVideo from "../../components/about/HeroVideo";
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
        backgroundVideo="/download2.mp4"
      />

      <Intro2 />

      {/* <Intro /> */}

      <VisionMision />
      <StoryStrip />

      {/* <HeroText /> */}

      <Press />

    

      {/* <AboutFeatures /> */}

      <FilosofiaTrayectoria />
      <InfraStrip />
    </div>
  );
}
