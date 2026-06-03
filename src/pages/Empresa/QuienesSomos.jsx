import React from "react";
import VisionMision from "../../components/about/VisionMision";
import HeroVideo from "../../components/about/HeroVideo";
import StoryStrip from "../../components/about/StoryStrip";
import Intro2 from "../../components/about/Intro2";
import InfraStrip from "../../components/about/InfraStrip";
import FilosofiaTrayectoria from "../../components/about/FilosofiaTrayectoria";
import Press from "../../components/about/Press";
import { useTranslation } from "react-i18next";



export default function QuienesSomos() {
const { t } = useTranslation("about");

  return (
    <div>
      <HeroVideo
        eyebrow={t("herovideo.eyebrow")}
        title={t("herovideo.title")}
        description={t("herovideo.description")}
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
