import { FileBadge, Download, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

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

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Fondo general oscuro */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.4)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600 rounded-full blur-[120px]"></div>
      </div>
      
    
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
            <span className="text-white">Código Ético y </span>
            <span className="bg-gradient-to-r from-brand-blue via-blue-200 to-slate-500 bg-clip-text text-transparent">
              Cumplimiento
            </span>
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
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent my-20 max-w-3xl mx-auto"
        />

        {/* Tarjetas de políticas */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {policies.map((policy, index) => (
            <motion.div
              key={policy.ref}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1"
            >

              <div className="p-6 flex flex-col h-full">
                {/* Icono */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30 group-hover:border-cyan-400/50 transition-colors">
                    <FileBadge className="w-8 h-8 text-slate-100 group-hover:scale-110 transition-transform" />
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
                    className="relative w-full py-2 bg-gradient-to-r from-brand-blue via-slate-500 to-brand-blue hover:from-slate-900 hover:via-slate-500 hover:to-slate-900 hover:shadow-blue-300/30 hover:scale-105 text-white font-semibold text-lg rounded transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20 overflow-hidden group active:scale-[0.98]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Ver Documento</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                )}
              </div>

              {/* Efecto de resplandor en hover */}
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