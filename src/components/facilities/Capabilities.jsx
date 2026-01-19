import { motion } from "motion/react";
import { Cpu, Cog, Code, Printer, Shield, Zap } from "lucide-react";

const capabilities = [
  {
    title: "Diseño y desarrollo electrónico",
    subtitle: "Circuitos avanzados y sistemas embebidos",
    icon: Cpu,
    code: "EDV"
  },
  {
    title: "Diseño mecánico y fabricación",
    subtitle: "Ingeniería de precisión estructural",
    icon: Cog,
    code: "DMF"
  },
  {
    title: "Software y control de sistemas",
    subtitle: "Arquitecturas críticas de vuelo",
    icon: Code,
    code: "SCS"
  },
  {
    title: "Prototipado rápido",
    subtitle: "CNC & Impresión 3D de alta precisión",
    icon: Printer,
    code: "PRT"
  },
  {
    title: "Certificaciones aeroespaciales",
    subtitle: "DO-178C, DO-254, DO-160G",
    icon: Shield,
    code: "CRT"
  },
  {
    title: "Manufactura aditiva avanzada",
    subtitle: "FDM, LPBF, Carbon Fiber, Metal Printing",
    icon: Zap,
    code: "MAA"
  },
];

export default function Capabilities() {
  const leftColumn = capabilities.slice(0, 3);
  const rightColumn = capabilities.slice(3, 6);

  return (
    <section className="relative bg-white py-20 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Elementos de fondo técnicos */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid sutil */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Elementos geométricos decorativos */}
        <div className="absolute top-20 right-[10%] w-64 h-64 border border-gray-100 rotate-45 opacity-30" />
        <div className="absolute bottom-20 left-[5%] w-48 h-48 border border-gray-100 rotate-12 opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header premium */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="flex-1">
              {/* Etiqueta superior */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black" />
                  <div className="w-1 h-1 bg-gray-400" />
                  <div className="w-1 h-1 bg-gray-300" />
                </div>
                <span className="text-[11px] tracking-[0.3em] text-gray-400 font-medium uppercase">
                  Capabilities
                </span>
              </div>
              
              {/* Título principal */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-black tracking-tight leading-[1.1]">
                Capacidades
                <br />
                <span className="font-bold">& Tecnologías</span>
              </h2>
            </div>

            {/* Estadísticas técnicas */}
            <div className="flex items-end gap-8 md:gap-12">
              <div>
                <div className="text-4xl md:text-5xl font-light text-black mb-1">
                  06
                </div>
                <div className="text-xs text-gray-400 tracking-wider uppercase">
                  Áreas clave
                </div>
              </div>
              <div className="h-16 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              <div>
                <div className="text-4xl md:text-5xl font-light text-black mb-1">
                  100<span className="text-2xl">%</span>
                </div>
                <div className="text-xs text-gray-400 tracking-wider uppercase">
                  Certificado
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid de dos columnas */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Columna izquierda */}
          <div className="space-y-6">
            {leftColumn.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.12,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true }}
              >
                <div className="group relative h-full">
                  {/* Marco superior izquierdo */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-l border-t border-gray-300 group-hover:border-black transition-colors duration-500" />
                  
                  {/* Contenedor principal */}
                  <div className="relative bg-white border border-gray-200 group-hover:border-black transition-all duration-500 p-6 md:p-8 h-full">
                    {/* Header del card */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 flex items-center justify-center bg-gray-50 group-hover:bg-black transition-colors duration-500">
                          <item.icon className="w-6 h-6 text-black group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div className="text-xs font-mono text-gray-400 tracking-wider">
                          {item.code}
                        </div>
                      </div>
                      
                      {/* Número de índice */}
                      <div className="text-5xl font-extralight text-gray-100 group-hover:text-gray-200 transition-colors duration-500">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Contenido */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-light text-black mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Línea decorativa inferior */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-black via-gray-300 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </div>

                  {/* Marco inferior derecho */}
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r border-b border-gray-300 group-hover:border-black transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Columna derecha */}
          <div className="space-y-6 md:mt-12">
            {rightColumn.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: (idx + 0.15) * 0.12,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true }}
              >
                <div className="group relative h-full">
                  {/* Marco superior izquierdo */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-l border-t border-gray-300 group-hover:border-black transition-colors duration-500" />
                  
                  {/* Contenedor principal */}
                  <div className="relative bg-white border border-gray-200 group-hover:border-black transition-all duration-500 p-6 md:p-8 h-full">
                    {/* Header del card */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 flex items-center justify-center bg-gray-50 group-hover:bg-black transition-colors duration-500">
                          <item.icon className="w-6 h-6 text-black group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div className="text-xs font-mono text-gray-400 tracking-wider">
                          {item.code}
                        </div>
                      </div>
                      
                      {/* Número de índice */}
                      <div className="text-5xl font-extralight text-gray-100 group-hover:text-gray-200 transition-colors duration-500">
                        {String(idx + 4).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Contenido */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-light text-black mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Línea decorativa inferior */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-black via-gray-300 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </div>

                  {/* Marco inferior derecho */}
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r border-b border-gray-300 group-hover:border-black transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer*/}
        <motion.div
          className="mt-20 pt-12 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 tracking-wider uppercase mb-1">
                  Standards
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-black rotate-45" />
                  <span className="text-sm font-mono text-black">
                    AS9100D | ISO 9001
                  </span>
                </div>
              </div>
              
              <div className="h-8 w-px bg-gray-300" />
              
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 tracking-wider uppercase mb-1">
                  Compliance
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-black rotate-45" />
                  <span className="text-sm font-mono text-black">
                    RTCA | EUROCAE
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="tracking-wider">Certificación completa para sistemas críticos</span>
              <div className="w-16 h-px bg-gradient-to-r from-gray-300 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}