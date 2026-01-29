import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Shield, Cpu, Gauge, ChevronRight, X } from "lucide-react";
import { products } from "../../components/products/products";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = React.useState(null);
  const otherProjects = products.filter((p) => p.id !== Number(id)).slice(0, 3);

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
      {/* Reemplaza todo el bloque <nav> anterior por este botón */}
      <div className="absolute top-28 left-8 md:left-10 z-20">
        <Link
          to="/proyectos/destacados"
          className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 hover:text-brand-blue transition-all duration-300"
        >
          <div className="p-2 rounded-full border border-black bg-black backdrop-blur-md group-hover:border-brand-blue/50 group-hover:bg-brand-blue/10 transition-all">
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 text-white bg transition-transform"
            />
          </div>
          <span className="hidden md:block bg-black text-white p-2 text-sm rounded ">
            Volver a los proyectos
          </span>
        </Link>
      </div>

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
              {/* <span className="bg-brand-blue text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                Aeronautic Division
              </span> */}
              <h1 className="text-5xl  md:text-8xl font-bold tracking-tighter mt-4 uppercase italic">
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
            <h2 className="text-cyan-500 text-xs font-bold uppercase tracking-[0.3em] mb-6">
              01. Descripción del Sistema
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
              {project.description}
            </p>
          </section>

          <section>
            <h2 className="text-cyan-500 text-xs font-bold uppercase tracking-[0.3em] mb-6">
              02. Análisis Visual
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className="aspect-video rounded-xl overflow-hidden border border-white/10 group relative"
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Gallery detail"
                  />
                </button>
              ))}
              
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sticky top-32">
            <div className="flex items-center gap-2 mb-8">
              
              <h3 className="text-sm font-bold uppercase tracking-widest">
                Otros Proyectos
              </h3>
            </div>

            <div className="space-y-4">
              {otherProjects.map((other) => (
                <Link
                  key={other.id}
                  to={`/proyectos/destacados/${other.id}`} // Ajusta la ruta según tu App.js
                  className="group block p-3 bg-black/40 rounded-xl border border-white/5 hover:border-brand-blue/50 transition-all duration-300"
                >
                  <div className="flex gap-4 items-center">
                    {/* Miniatura del proyecto */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                      <img
                        src={other.hero}
                        alt={other.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[10px] text-brand-blue font-bold uppercase tracking-tighter">
                        Ver Proyecto
                      </span>
                      <h4 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors uppercase italic">
                        {other.title}
                      </h4>
                      <div className="flex items-center text-slate-500 mt-1">
                        <ChevronRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Botón opcional para volver a la galería completa */}
            <div className="mt-8 pt-8 border-t border-white/5">
              <Link
                to="/proyectos/destacados"
                className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                Explorar todo el catálogo
              </Link>
            </div>
          </div>
        </aside>
        <AnimatePresence>
          {activeImage && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/90 z-[100]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveImage(null)}
              />

              {/* Image container */}
              <motion.div
                className="fixed inset-0 z-[101] flex items-center justify-center p-6 md:p-20"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={activeImage}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  alt="Full size preview"
                />

                {/* Close button */}
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-6 right-6 p-2 bg-black/50 text-white rounded-full hover:bg-black transition"
                >
                  <X size={20} />
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
