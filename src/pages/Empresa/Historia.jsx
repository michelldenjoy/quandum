import React from "react";
import AboutTimeline from "../../components/about/AboutTimeline";
import HeroVideo from "../../components/about/HeroVideo";

export default function Historia() {
  return (
    <div>
      <HeroVideo
        eyebrow="Nuestra Historia"
        title="Ingeniería que evoluciona"
        description="Una trayectoria marcada por la calidad, el rigor técnico y el avance constante."
        backgroundImage="/images/history.jpg"
      />
      <AboutTimeline />
    </div>
  );
}
