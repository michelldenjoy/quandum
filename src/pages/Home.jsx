import Hero from "../components/home/Hero";
import HomeOverview from "../components/home/HomeOverview";
import OurWorkingWay from "../components/home/OurWorkingWay";
import SectorsSection from "../components/home/SectorSection";
import { motion } from "motion/react";


export default function Home() {
  return (
    <section>
       <Hero  />
       
       
       <SectorsSection />
       

       <OurWorkingWay />


      
    </section>
  );
}
