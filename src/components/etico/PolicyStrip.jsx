import React from "react";
import { FileText } from "lucide-react";
import { motion } from "motion/react";

export default function PolicyStrip() {
  const qualityPolicy = {
    title: "Política de Calidad",
    href: "/sobre-quandum/calidad",
    icon: FileText,
  };
  
  return (
    <div className="w-full mt-9 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 py-16">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative flex justify-center px-4"
      >
        <div className="w-full md:w-2/3 lg:w-1/2">
          <a
            href={qualityPolicy.href}
            className="group relative block bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-gray-900/50 backdrop-blur-sm border-2 border-slate-600/40 hover:border-brand-blue/60 p-8 sm:p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-blue/20"
          >
            {/* Corner brackets - animated */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-slate-500/60 group-hover:border-brand-blue transition-colors duration-500" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-slate-500/60 group-hover:border-brand-blue transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-slate-500/60 group-hover:border-brand-blue transition-colors duration-500" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-slate-500/60 group-hover:border-brand-blue transition-colors duration-500" />

            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-blue/5 pointer-events-none" />


            {/* Content */}
            <div className="relative flex flex-col items-center text-center space-y-6">
              {/* Icon container with glow */}
              <div className="relative">
                <div className="absolute inset-0 bg-brand-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-16 h-16 border-2 border-slate-500/60 group-hover:border-brand-blue flex items-center justify-center transition-all duration-500 group-hover:rotate-90">
                  <qualityPolicy.icon className="w-8 h-8 text-slate-400 group-hover:text-brand-blue transition-all duration-500" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-medium text-white group-hover:text-white tracking-tight transition-colors duration-300">
                {qualityPolicy.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-400 group-hover:text-slate-300 max-w-md leading-relaxed transition-colors duration-300">
                Marco estratégico que define el compromiso de Quandum con la
                excelencia operacional, la mejora continua y el cumplimiento de
                los estándares aeronáuticos aplicables.
              </p>

              {/* CTA */}
              <div className="flex items-center gap-4 pt-4">
                <span className="text-sm font-mono uppercase tracking-wider text-slate-300 group-hover:text-white transition-colors duration-300">
                  Ver Política
                </span>
                <div className="w-12 h-[2px] bg-slate-500/60 group-hover:bg-brand-blue group-hover:w-16 transition-all duration-500" />
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-blue/0 to-transparent group-hover:via-brand-blue/50 transition-all duration-700" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}