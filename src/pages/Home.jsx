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
       
       <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.7 }}
        className="grid grid-cols-2 bg-aerospace place-items-center lg:grid-cols-4 gap-8 lg:gap-12 pt-16 border-t border-slate-800/50"
      >
        {[
          { value: "2006", label: "Año de fundación" },
          { value: "20+", label: "Años de experiencia" },
          { value: "100%", label: "Sistemas críticos" },
          { value: "100%", label: "Proyectos a medida" },
        ].map((stat, i) => (
          <div key={i} className="text-center mb-8 lg:text-left">
            <div className="text-3xl max-w md:text-4xl font-light text-blue-400 mb-2 tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs md:text-sm text-slate-500 tracking-wide uppercase font-light">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
       <OurWorkingWay />

       <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-2xl ` bg-gradient-to-b from-black to-slate-900 text-white overflow-hidden leading-relaxed">
            Desarrollamos tecnología que no se reemplaza.
            <br />
            Se diseña para cumplir su misión.
          </p>
        </motion.div>

      
    </section>
  );
}
