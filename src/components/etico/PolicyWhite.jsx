import React from "react";
import { FileText, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";


export default function PolicyWhite() {
  const qualityPolicy = {
    title: "Compromiso de Calidad y Excelencia",
    href: "/sobre-quandum/calidad",
  };

  return (
    <section className="relative w-full py-24 overflow-hidden border-b bg-white ">
    
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-black -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <a
            href={qualityPolicy.href}
            className="group relative w-full max-w-4xl bg-white p-12 md:p-16 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.40)]"
          >
            {/* shadow */}
            <div className="absolute inset-4 border border-slate-200 pointer-events-none group-hover:border-brand-blue/20 transition-colors duration-500" />

            <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
              
             
              <div className="flex-1 space-y-6 text-center md:text-left">
                <div className="inline-flex items-center gap-3">
                  <div className="w-10 h-[1px] bg-brand-blue" />
                  <span className="text-xs tracking-[0.4em] uppercase font-bold text-brand-blue">
                    Visita nuestra política de calidad
                  </span>
                  <div className="w-10 h-[1px] bg-brand-blue" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1]">
                  {qualityPolicy.title}
                </h2>
                
                <p className="text-slate-500 text-lg md:text-xl max-w-xl leading-relaxed font-light">
                En Quandum Aerospace entendemos la calidad como un principio estructural de nuestra actividad. Nuestra infraestructura opera bajo los más estrictos controles de calidad, 
                  asegurando que cada proceso cumpla con la normativa internacional vigente.
                </p>
              </div>

              
              <div className="relative flex-shrink-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-full border border-slate-200 group-hover:border-brand-blue transition-all duration-700 group-hover:rotate-12">
                  <FileText className="absolute w-6 h-6 text-slate-400 group-hover:text-brand-blue transition-colors duration-500" />
                  
                
                  <svg className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 100 100">
                    <defs>
                      <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text className="text-[8px] uppercase font-bold fill-brand-blue tracking-[0.2em]">
                      <textPath xlinkHref="#circlePath">
                        • Leer Política de Calidad • Certificación Quandum •
                      </textPath>
                    </text>
                  </svg>
                  
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

           
            <div className="absolute top-0 right-0 p-4 opacity-20 text-[10px] font-mono text-slate-400">
              REF: QM-POL-2024
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}