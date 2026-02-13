import Hero from "../components/home/Hero";
import HomeOverview from "../components/home/HomeOverview";
import OurWorkingWay from "../components/home/OurWorkingWay";
import SectorsSection from "../components/home/SectorSection";
import { motion } from "motion/react";
import Solutions from "../components/home/Solutions";
import Solutions2 from "../components/home/Solutions2";
import Solutions3 from "../components/home/Solutions3";


export default function Home() {
  return (
    <section>
       <Hero  />
       
       
       <SectorsSection />
       <Solutions2 />
       <Solutions />
       <Solutions3 />
       

       {/* <OurWorkingWay /> */}


      
    </section>
  );
}
