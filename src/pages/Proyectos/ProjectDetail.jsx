import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; 
import { ArrowLeft, Shield, Cpu, Gauge, ChevronRight } from "lucide-react";
import { products } from "../../components/products/products"; 

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // find por ID
  const project = products.find((p) => p.id === Number(id));

  useEffect(() => {
    if (!project) {
      navigate("/proyectos/destacados");
    }
    window.scrollTo(0, 0);
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-blue/30">
      {/* Navegación Superior */}
      <nav className="fixed top-0 z-50 w-full p-6 bg-gradient-to-b from-black via-black/80 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            to="/proyectos/destacados" 
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-all"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1  transition-transform" /> 
            Volver a Proyectos
          </Link>
          <div className="hidden md:block text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]">
            Quandum Technical Datasheet // {project.subtitle}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={project.hero} 
          className="w-full h-full object-cover" 
          alt={project.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="bg-brand-blue text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                Aeronautic Division
              </span>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mt-4 uppercase italic">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Columna Principal */}
        <div className="lg:col-span-8 space-y-12">
          <section>
            <h2 className="text-cyan-500 text-xs font-bold uppercase tracking-[0.4em] mb-6">01. Descripción del Sistema</h2>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
              {project.description}
            </p>
          </section>

          <section>
            <h2 className="text-cyan-500 text-xs font-bold uppercase tracking-[0.4em] mb-6">02. Análisis Visual</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((img, i) => (
                <div key={i} className="aspect-video rounded-xl overflow-hidden border border-white/10 group">
                  <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Gallery detail" />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sticky top-32">
            <div className="flex items-center gap-2 mb-8">
              <Cpu className="text-brand-blue" size={20} />
              <h3 className="text-sm font-bold uppercase tracking-widest">Compliance & Specs</h3>
            </div>

            <div className="space-y-3">
              {project.certifications.map((cert) => (
                <div key={cert} className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-white/5 group hover:border-brand-blue/50 transition-colors">
                  <span className="text-[11px] font-mono text-slate-300 tracking-tighter">{cert}</span>
                  <Shield size={14} className="text-brand-blue" />
                </div>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-white/5 space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">System Status: Active</span>
              </div>
              
              <button className="w-full group flex items-center justify-between px-6 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-md hover:bg-brand-blue hover:text-white transition-all duration-500">
                Download Technical File
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}