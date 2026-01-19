import Hero from "../components/home/Hero";
import HomeOverview from "../components/home/HomeOverview";
import OurWorkingWay from "../components/home/OurWorkingWay";
import SectorsSection from "../components/home/SectorSection";
import { motion } from "motion/react";
import Solutions from "../components/home/Solutions";


export default function Home() {
  return (
    <section>
       <Hero  />
       
       
       <SectorsSection />
       <Solutions />
       

       {/* <OurWorkingWay /> */}


      
    </section>
  );
}
