import { FileText, Download, Shield, Scale, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function Documentos() {
  const policies = [
    { 
      title: "Código Ético", 
      ref: "IDO230060", 
      file: "/docs/codigo-etico.pdf",
      icon: Shield,
      color: "blue"
    },
    {
      title: "Política de Seguridad",
      ref: "IDO250070",
      file: "/docs/politica-seguridad.pdf",
      icon: CheckCircle2,
      color: "blue"
    },
    {
      title: "Política Anti Corrupción",
      ref: "IDO230061",
      file: "/docs/politica-anticorrupcion.pdf",
      icon: Scale,
      color: "blue"
    },
    {
      title: "Política de Obsequios y Trato de Hospitalidad",
      ref: "IDO230059",
      file: "/docs/politica-obsequios.pdf",
      icon: FileText,
      color: "blue"
    },
  ];

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Blueprint Lines - Decorative */}
      <div className="absolute top-0 left-0 w-full h-[600px] opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#0066cc" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="#0066cc" strokeWidth="0.5" strokeDasharray="5,5" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="#0066cc" strokeWidth="0.5" strokeDasharray="5,5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint)" />
        </svg>
      </div>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >

          
          <h1 className="text-6xl md:text-7xl font-light text-black mb-6 tracking-tight">
            Código Ético
            <span className="block text-2xl md:text-3xl mt-4 text-black/40 font-extralight">
              y Cumplimiento Normativo
            </span>
          </h1>
          
          <p className="text-lg text-black/60 max-w-3xl mx-auto leading-relaxed">
            Fundamentos estructurales que garantizan la integridad operacional, 
            trazabilidad de procesos y excelencia en el sector aeronáutico.
          </p>
        </motion.div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto relative">
          {/* Connecting Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-200px)] h-[calc(100%-200px)]">
            <svg className="w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="0" x2="100%" y2="0" stroke="#0066cc" strokeWidth="2" />
              <line x1="0" y1="100%" x2="100%" y2="100%" stroke="#0066cc" strokeWidth="2" />
              <line x1="0" y1="0" x2="0" y2="100%" stroke="#0066cc" strokeWidth="2" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="#0066cc" strokeWidth="2" />
            </svg>
          </div>

          {policies.map((policy, index) => {
            const Icon = policy.icon;
            return (
              <motion.div
                key={policy.ref}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <a
                  href={policy.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative bg-white border-2 border-black/5 hover:border-blue-600 rounded-none p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/10"
                >
                  {/* Corner Brackets - Technical Detail */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-black/20 group-hover:border-blue-600 transition-colors" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-black/20 group-hover:border-blue-600 transition-colors" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-black/20 group-hover:border-blue-600 transition-colors" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-black/20 group-hover:border-blue-600 transition-colors" />

                  {/* Reference Number - Top Right */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-mono text-black/30 group-hover:text-blue-600 transition-colors">
                      {policy.ref}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 border-2 border-black/10 group-hover:border-blue-600 flex items-center justify-center transition-colors relative">
                      <Icon className="w-8 h-8 text-black/60 group-hover:text-blue-600 transition-colors" />
                      
                      {/* Small corner detail */}
                      <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-black group-hover:text-blue-600 transition-colors leading-tight">
                      {policy.title}
                    </h3>

                    {/* Download Button */}
                    <div className="flex items-center gap-3 pt-4 border-t border-black/5 group-hover:border-blue-600/20 transition-colors">
                      
                      <span className="text-sm font-mono text-black/60 group-hover:text-blue-600 transition-colors uppercase tracking-wider">
                        Ver Documento
                      </span>
                      <div className="flex-1" />
                      <div className="w-8 h-[2px] bg-black/10 group-hover:bg-blue-600 group-hover:w-12 transition-all" />
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-12 border-t border-black/5"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-black/40">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border border-black/20" />
              <span>ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border border-black/20" />
              <span>AS9100D Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border border-black/20" />
              <span>Última actualización: 2025</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}