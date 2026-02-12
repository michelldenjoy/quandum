import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ShieldAlert, Globe, Lock, Box } from "lucide-react";
import CertificationsSection from "../../components/certifications/CertificationsSection";
import HeroVideo from "../../components/about/HeroVideo";

export default function Certificaciones() {
  return (
    <div className="w-full bg-white overflow-x-hidden font-sans">
            <HeroVideo
              eyebrow="Entorno regulado"
              title="Certificaciones"
              description="Aseguramos el cumplimiento normativo para la industria aeroespacial y de defensa"
              backgroundImage="/images/certifications3.PNG"
            />
      
      
      <CertificationsSection />
      

     
      <section className="py-24 bg-black text-white px-6">
      
        <div className="max-w-6xl mx-auto">
        <div className="flex-1">
              {/*TITULO PRINCIPAL*/}
              <div className="flex items-center gap-4 mb-6">
                {/* <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black" />
                  <div className="w-1 h-1 bg-gray-400" />
                  <div className="w-1 h-1 bg-gray-300" />
                </div> */}
                <span className="text-sm tracking-[0.3em] text-slate-300 font-medium uppercase">
                  Normativa
                </span>
              </div>

              {/* TITULO */}
              <h2 className="mb-20 text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extralight text-white tracking-tight leading-[1.1]">
                Compromiso
                <br />
                <span className="font-semibold">Global</span>
              </h2>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* OASIS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-zinc-900/50 border border-zinc-800 p-10 hover:bg-zinc-900 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <Globe className="text-brand-blue" size={32} />
                <span className="text-sm tracking-[0.3em] text-zinc-500 uppercase font-bold">IAQG Member</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">OASIS – IAQG</h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Inscritos en el Online Aerospace Supplier Information System. Esta base de datos es el estándar de confianza para los principales OEMs globales.
              </p>
              <ul className="space-y-3 mb-10">
                {["Auditorías EN 9100", "Trazabilidad Internacional", "Visibilidad OEM"].map((item, i) => (
                  <li key={i} className="flex items-center text-sm uppercase tracking-widest text-zinc-500">
                    <div className="w-1.5 h-1.5 bg-brand-blue mr-3" /> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-zinc-800 flex justify-between items-center">
                <span className="font-mono  text-brand-blue uppercase">OASIS ID: 6130438025</span>
                {/* <ExternalLink size={14} className="text-zinc-600 group-hover:text-white transition-colors" /> */}
              </div>
            </motion.div>

            {/* NATO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-zinc-900/50 border border-zinc-800 p-10 hover:bg-zinc-900 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <Lock className="text-brand-blue" size={32} />
                <span className="text-sm tracking-[0.3em] text-zinc-500 uppercase font-bold">Defensa y Seguridad</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">REGISTRO OTAN</h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Proveedor homologado bajo el sistema NCAGE. Capacitados para operar en la cadena de suministro de defensa y proyectos gubernamentales.
              </p>
              <ul className="space-y-3 mb-10">
                {["Aprobación Militar", "Codificación NCAGE", "Logística Estandarizada"].map((item, i) => (
                  <li key={i} className="flex items-center text-sm uppercase tracking-widest text-zinc-500">
                    <div className="w-1.5 h-1.5 bg-brand-blue mr-3" /> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-zinc-800 flex justify-between items-center">
                <span className="font-mono  text-brand-blue uppercase">NCAGE CODE: 9359B</span>
                {/* <ExternalLink size={14} className="text-zinc-600 group-hover:text-white transition-colors" /> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/*  REACH & RoHS  */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto border border-gray-100 p-12 relative overflow-hidden">
          {/* Marca de agua  */}
          <Box className="absolute -right-10 -bottom-10 text-gray-50" size={300} />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6 text-brand-blue">
                
                <span className="text-sm tracking-[0.3em] text-gray-500 font-medium uppercase">Cumplimiento Medioambiental</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-black tracking-tighter">REACH & RoHS</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                Nuestra fabricación garantiza el control absoluto de sustancias químicas (SVHC) y materiales peligrosos, alineándonos con la sostenibilidad exigida por los estándares Tier 1 y OEM.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {["Control de sustancias SVHC", "Directiva RoHS Compliant", "Responsabilidad en Suministros", "Cumplimiento ECHA"].map((item, i) => (
                <div key={i} className="bg-gray-50 p-4 border-l-2 border-brand-blue flex items-center justify-between group ">
                  <span className="text-md uppercase font-bold tracking-widest text-black ">{item}</span>
                 
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <section className="pb-40 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-9xl font-black text-black/5 mb-[-2rem] md:mb-[-4rem] select-none">
              EXCELENCIA
            </h2>
            <div className="relative z-10">
              <p className="text-xs tracking-[0.5em] text-gray-400 uppercase mb-4">Aprobado por los estándares más altos</p>
              <h3 className="text-2xl md:text-4xl font-light text-black tracking-[0.1em]">
                EN 9100 • <span className="font-bold">NATO APPROVED</span> • EQA
              </h3>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}