import Hero from "../components/home/Hero";
import { motion } from "motion/react";
import Solutions from "../components/home/Solutions";
import Solutions2 from "../components/home/Solutions2";

import Image from "../components/home/Image"; 

import IntroSection from "../components/home/IntroSection";
import WhatWeDo from "../components/home/WhatWeDo";





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
