import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Download, Eye, ChevronRight, FileBadge } from "lucide-react";


const CertificationsSection = () => {
  const certifications = [
    {
      title: "AS/EN 9100",
      subtitle: "Calidad Aeroespacial",
      description:
        "Certificación específica para organizaciones de aviación, defensa y espacio. Garantiza la trazabilidad total y gestión de riesgos operativos.",
      standard: "Sistemas de Gestión de Calidad - Aeroespacial",
      pdfUrl: "/certificados/EN9100_2024.pdf",
      imgUrl: "/certificados/EN9100_cert.jpg",
    },
    {
      title: "ISO 9001",
      subtitle: "Gestión de la Calidad",
      description:
        "Estándar internacional que avala nuestra eficiencia operativa y el enfoque en la mejora continua de todos nuestros procesos internos.",
      standard: "Sistemas de Gestión de Calidad - Requisitos",
      pdfUrl: "/certificados/ISO9001_2024.pdf",
      imgUrl: "/certificados/ISO9001_cert.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="bg-white pb-24">
      <div className="max-w-6xl mt-16 mx-auto px-6">
        {/* TITULOS PRINCIPALES */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            {/* <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black" />
              <div className="w-1 h-1 bg-gray-400" />
              <div className="w-1 h-1 bg-gray-300" />
            </div> */}
            <span className="text-sm tracking-[0.3em] text-gray-500 font-medium uppercase">
              Certificados
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extralight text-black tracking-tight leading-[1.1]">
            Certificaciones
            <br />
            <span className="font-semibold">& Calidad</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Columna Izquierda: Política de Calidad */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-gray-50 lg:p-10 border border-gray-100 rounded-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center mb-8 text-brand-blue">
                
                <h4 className="ml-3 font-bold uppercase text-sm tracking-widest text-black">
                  Política de Calidad
                </h4>
              </div>
              <p className="text-gray-600 text-justify leading-relaxed  italic">
                "En nuestra organización, la calidad se fundamenta en la seguridad
                operativa y la precisión técnica. Nos comprometemos a superar las
                expectativas de la industria mediante la gestión rigurosa de
                riesgos y la fiabilidad absoluta en cada entrega."
              </p>
            </div>
            
            <a href="/sobre-quandum/calidad" className="mt-12 flex items-center text-sm font-bold text-brand-blue uppercase tracking-widest hover:translate-x-2 transition-all group">
              Visita nuestra Política <ChevronRight size={14} className="ml-2 group-hover:ml-4 transition-all" />
            </a>
          </motion.div>

          {/* Columna Derecha: Certificaciones */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 grid md:grid-cols-2 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-8 border border-gray-200 hover:border-brand-blue transition-all duration-500 rounded-sm flex flex-col bg-white overflow-hidden"
              >
                {/* Icono de fondo */}
                <FileBadge className="absolute -right-6 -bottom-6 text-gray-50 group-hover:text-blue-50/50 transition-colors duration-500" size={140} />

                <div className="relative z-10 flex-grow">
                  <div className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded-sm mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
                    <Award size={22} />
                  </div>
                  
                  <h4 className="text-3xl font-bold text-black mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-brand-blue text-[11px] font-bold mb-4 uppercase tracking-[0.2em]">
                    {cert.subtitle}
                  </p>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    {cert.description}
                  </p>
                </div>

                {/* Footer del card con botones */}
                <div className="relative z-10 mt-auto">
                  <div className="pt-6 border-t border-gray-100 mb-6 text-[11px] text-gray-400 uppercase tracking-tighter">
                    {cert.standard}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={cert.imgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-8 py-3 hover:scale-105 rounded-md text-xs uppercase tracking-widest text-brand-blue hover:font-bold  hover:bg-brand-pink/70 clip-path-diagonal border border-gray-500 hover:bg-brand-blue hover:text-white transition-all duration-300"
                    >
                      Ver Certificado
                    </a>
                    <a
                      href={cert.pdfUrl}
                      download
                      className="flex items-center justify-center px-8 py-3 hover:scale-105 rounded-md text-sm uppercase tracking-widest text-gray-200 bg-brand-blue clip-path-diagonal border border-gray-500 hover:bg-brand-pink/70 hover:font-bold hover:text-white transition-all duration-300"
                    >
                      <Download size={14} /> PDF
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;