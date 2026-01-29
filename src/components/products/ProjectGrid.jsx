import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";

import { products } from "../products/products"; 


// 2. CORRECCIÓN: Quitamos { products } de los parámetros. 
// Ahora el componente es autosuficiente y usa el import de arriba.
export default function ProjectGrid() {
  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-500/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-cyan-500/10 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm tracking-[0.3em] text-gray-400 font-medium uppercase">
            
            Ingeniería de Vuelo
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tight ">
            PROYECTOS<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-slate-400 to-brand-blue animate-gradient bg-[length:200%_auto]">
              DESTACADOS
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Aquí 'products' se refiere correctamente al import de la línea 6 */}
          {products.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// El componente ProjectCard se mantiene igual, ya que él sí necesita recibir 
// cada "project" individual como prop desde el map.
function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-[500px] rounded-xl overflow-hidden bg-slate-900 border border-white/10"
    >
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
        <img 
          src={project.hero} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-cyan-400 font-mono text-sm tracking-widest mb-1">{project.subtitle}</p>
              <h4 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{project.title}</h4>
            </div>
            <Link 
              to={`/proyectos/destacados/${project.id}`} 
              className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 group/btn"
            >
              <ArrowUpRight className="group-hover/btn:rotate-45 transition-transform" />
            </Link>
          </div>
          <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent w-full" />
          <div className="flex flex-wrap gap-4 pt-2">
            {project.certifications.map((cert) => (
              <span key={cert} className="flex items-center gap-1.5 text-[10px] font-bold text-slate-300 uppercase tracking-widest bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/5">
                <Shield className="w-3 h-3 text-cyan-500" />
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}