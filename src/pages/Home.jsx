import Hero from "../components/home/Hero";
import { motion } from "motion/react";
import Solutions from "../components/home/Solutions";

import Image from "../components/home/Image"; 

import IntroSection from "../components/home/IntroSection";





export default function Home() {
  return (
    <section>
       <Hero  />
       <IntroSection />
       <Solutions />
       <Image />
    </section>
  );
}
