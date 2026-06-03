import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronRight, X } from "lucide-react";
import { products } from "../../components/products/products";
import { useTranslation } from "react-i18next";

export default function ProjectDetail() {
  const { t } = useTranslation("products");

  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = React.useState(null);

  const project = products.find((p) => p.id === Number(id));
  const otherProjects = products
    .filter((p) => p.id !== Number(id))
    .slice(0, 3);

  useEffect(() => {
    if (!project) {
      navigate("/proyectos/destacados");
    }
    window.scrollTo(0, 0);
  }, [project, navigate]);

  if (!project) return null;

  const key = project.translationKey;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-blue/30">

      {/* BACK BUTTON */}
      <div className="absolute top-28 left-8 md:left-10 z-20">
        <Link
          to="/proyectos/destacados"
          className="group flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 hover:text-brand-blue transition-all duration-300"
        >
          <div className="p-2 rounded-full border border-black bg-black backdrop-blur-md group-hover:border-brand-blue/50 group-hover:bg-brand-blue/10 transition-all">
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
          </div>

          <span className="hidden md:block font-normal tracking-widest text-white p-2 text-sm">
            {t("projectback")}
          </span>
        </Link>
      </div>

      {/* HERO */}
      <header className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={project.hero}
          className="w-full h-full object-cover"
          alt={t(`${key}.title`)}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mt-4 uppercase italic">
                {t(`${key}.title`)}
              </h1>
            </motion.div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* CONTENT */}
        <div className="lg:col-span-8 space-y-12">

          <section>
            <h2 className="text-blue-300 text-xs uppercase tracking-[0.3em] mb-6">
              {t("projectdetaildescription")}
            </h2>

            <p className="text-xl text-justify md:text-2xl text-slate-300 leading-relaxed font-light">
              {t(`${key}.description`)}
            </p>
          </section>

          <section>
            <h2 className="text-blue-300 text-xs uppercase tracking-[0.3em] mb-6">
              {t("projectdetailanalisis")}
            </h2>

            {project.video && (
              <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 mb-6">
                <video
                  src={project.video}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {project.gallery?.length > 0 && (
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
                      alt="Gallery"
                    />
                  </button>
                ))}
              </div>
            )}
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4 space-y-6">

          <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sticky top-32">

            <h3 className="text-sm font-bold uppercase tracking-widest mb-8">
              {t("projectdetailaside")}
            </h3>

            <div className="space-y-4">
              {otherProjects.map((other) => {
                const otherKey = other.translationKey;

                return (
                  <Link
                    key={other.id}
                    to={`/proyectos/destacados/${other.id}`}
                    className="group block p-3 bg-black/40 rounded-xl border border-white/5 hover:border-brand-blue/50 transition-all duration-300"
                  >
                    <div className="flex gap-4 items-center">

                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                        <img
                          src={other.hero}
                          alt={t(`${otherKey}.title`)}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <div className="flex flex-col">

                        <span className="text-[10px] text-brand-blue font-bold uppercase tracking-tighter">
                          {t("projectdetailspan")}
                        </span>

                        <h4 className="text-sm font-bold text-slate-200 group-hover:text-white uppercase italic">
                          {t(`${otherKey}.title`)}
                        </h4>

                        <ChevronRight
                          size={14}
                          className="text-slate-500 group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <Link
                to="/proyectos/destacados"
                className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                {t("projectdetailaside2")}
              </Link>
            </div>
          </div>
        </aside>

        {/* IMAGE MODAL */}
        <AnimatePresence>
          {activeImage && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/90 z-[100]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveImage(null)}
              />

              <motion.div
                className="fixed inset-0 z-[101] flex items-center justify-center p-6 md:p-20"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <img
                  src={activeImage}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  alt="Preview"
                />

                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-6 right-6 p-2 bg-black/50 text-white rounded-full hover:bg-black"
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