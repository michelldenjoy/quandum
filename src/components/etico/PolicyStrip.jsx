import React from "react";
import { FileText } from "lucide-react";
import { motion } from "motion/react";


export default function PolicyStrip() {
  const qualityPolicy = {
    title: "Política de Calidad",
    ref: "PGC-001",
    href: "/sobre-quandum/calidad",
    icon: FileText,
  };
  return (
    <div className="bg-black w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 flex justify-center"
      >
        <div className="w-full md:w-2/3 lg:w-1/2">
          <a
            href={qualityPolicy.href}
            className="group relative block bg-slate-100 border-2 border-slate-600/30 hover:border-slate-600 p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-600/15"
          >
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-slate-600" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-slate-600" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-slate-600" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-slate-600" />

            {/* Reference */}
            <div className="absolute top-4 right-4">
              <span className="text-xs font-mono text-slate-600/60">
                {qualityPolicy.ref}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 border-2 border-slate-600 flex items-center justify-center">
                <qualityPolicy.icon className="w-8 h-8 text-slate-600" />
              </div>

              <h3 className="text-2xl font-medium text-slate-600 tracking-tight">
                {qualityPolicy.title}
              </h3>

              <p className="text-sm text-black/60 max-w-md">
                Marco estratégico que define el compromiso de Quandum con la
                excelencia operacional, la mejora continua y el cumplimiento de
                los estándares aeronáuticos aplicables.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <span className="text-sm font-mono uppercase tracking-wider text-slate-600">
                  Ver Política
                </span>
                <div className="w-12 h-[2px] bg-slate-600" />
              </div>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
