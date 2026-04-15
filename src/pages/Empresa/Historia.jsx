import React from "react";
import AboutTimeline from "../../components/about/AboutTimeline";
import HeroVideo from "../../components/about/HeroVideo";

export default function Historia() {
  return (
    <div>
      <HeroVideo
        eyebrow="Nuestra Historia"
        title="Ingeniería que evoluciona"
        description=""
        backgroundImage="/images/history.jpg"
      />
      <AboutTimeline />
    </div>
  );
}
