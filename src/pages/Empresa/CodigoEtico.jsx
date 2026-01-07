import { FileCheckCorner, Download, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import ODSSection from "../../components/etico/ODSSection";

export default function CodigoEtico() {
  const policies = [
    { title: "Código Ético", ref: "IDO230060", file: "/docs/codigo-etico.pdf" },
    {
      title: "Política de Seguridad",
      ref: "IDO250070",
      file: "/docs/politica-seguridad.pdf",
    },
    {
      title: "Política Anti Corrupción",
      ref: "IDO230061",
      file: "/docs/politica-anticorrupcion.pdf",
    },
    {
      title: "Política de Obsequios y Trato de Hospitalidad",
      ref: "IDO230059",
      file: "/docs/politica-obsequios.pdf",
    },
  ];

  const title = "Código Ético y Cumplimiento";

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full overflow-x-hidden pt-20 md:pt-24 lg:pt-28">
      <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
        {/* Imagen de fondo */}
        <img
          src="/images/sostenible.jpg"
          alt="Código Ético y Cumplimiento"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay oscuro + degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-slate-900/60 to-slate-950/90" />

        {/* Grid técnico sutil */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none 
                     bg-[linear-gradient(rgba(59,130,246,0.4)_1px,transparent_1px),
                          linear-gradient(90deg,rgba(59,130,246,0.4)_1px,transparent_1px)]
                     bg-[size:120px_120px]"
        />

        {/* Contenido */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="max-w-4xl text-center"
            >
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-6"
              >
                Responsabilidad · Ética · Cumplimiento
              </motion.p>

              {/* Título animado */}
              <h1 className="flex flex-wrap justify-center text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
                {title.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordAnimation}
                    className="mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              {/* Descripción animada */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto"
              >
                En{" "}
                <span className="text-white bg-clip-text font-extrabold text-transparent">
                  Quandum
                </span>{" "}
                <span className="bg-gradient-to-r from-brand-pink via-red-400 to-red-700 bg-clip-text font-semibold text-transparent">
                  Aerospace
                </span>{" "}
                nos comprometemos con los más altos estándares éticos y de
                cumplimiento corporativo, asegurando transparencia, integridad y
                excelencia operacional en todas nuestras actividades.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Línea inferior decorativa */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px 
                        bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
        />
      </section>





      <ODSSection />

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-100 tracking-tight">
            <span className="text-white">Código Ético y Cumplimiento </span>
          </h1>

          <p className="text-base md:text-lg text-slate-300 mt-6 max-w-3xl mx-auto leading-relaxed font-light">
            En{" "}
            <span className="text-white bg-clip-text font-extrabold text-transparent">
              Quandum{" "}
            </span>{" "}
            <span className="bg-gradient-to-r from-brand-pink via-red-400 to-red-700 bg-clip-text font-semibold text-transparent">
              Aerospace
            </span>{" "}
            nos comprometemos con los más altos estándares éticos y de
            cumplimiento corporativo. Nuestras políticas reflejan nuestra
            dedicación a la integridad, transparencia y excelencia operacional.
          </p>
        </motion.div>

        {/* Línea decorativa  /*/}
        {/* <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent my-20 max-w-3xl mx-auto"
        /> */}

        {/* Tarjetas de políticas */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
          {policies.map((policy, index) => (
            <motion.div
              key={policy.ref}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 shadow-2xl border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1"
            >
              <div className="p-6 flex flex-col h-full">
                {/* Icono */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30 group-hover:border-cyan-400/50 transition-colors">
                    <FileCheckCorner className="w-7 h-7 text-slate-100 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Contenido */}
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold text-white mb-2 text-center group-hover:text-cyan-300 transition-colors">
                    {policy.title}
                  </h2>
                  <p className="text-sm text-slate-400 text-center mb-4">
                    <span className="inline-block px-3 py-1 bg-slate-800/70 rounded-full text-xs font-mono border border-slate-700">
                      {policy.ref}
                    </span>
                  </p>
                </div>

                {/* Botón de descarga */}
                {policy.file && (
                  <a
                    href={policy.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="  w-full py-2.5  bg-slate-800  hover:bg-slate-700  border border-slate-600  hover:border-cyan-400/50  text-slate-100  font-medium  rounded-lg  transition-all  flex items-center justify-center gap-3"
                  >
                    <Download className="w-4 h-4" />
                    <span>Ver Documento</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                )}
              </div>

              {/* Efecto de hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Línea de cierre */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.3, ease: "easeInOut" }}
          className="mt-16 relative"
        >
          <div className="h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent my-20 max-w-3xl mx-auto" />
        </motion.div>
      </div>
    </div>
  );
}
