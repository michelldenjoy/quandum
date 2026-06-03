import React from "react";
import AboutTimeline from "../../components/about/AboutTimeline";
import HeroVideo from "../../components/about/HeroVideo";
import { useTranslation } from "react-i18next";

export default function Historia() {
const { t } = useTranslation("about");


  return (
    <div>
      <HeroVideo
        eyebrow={t("herostory.eyebrow")}
        title={t("herostory.title")}
        description=""
        backgroundImage="/images/history.jpg"
      />

      
      <AboutTimeline />
    </div>
  );
}
