import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Target,
  Users,
  TrendingUp,
  Shield,
  Globe,
  Leaf,
  CheckCircle2,
  ExternalLink,
  Zap,
  Plane,
  CircuitBoard,
  ShieldCheck,
  GlobeLock,
} from "lucide-react";

export default function Certificaciones() {
  const qualityValues = [
    {
      icon: <Target className="w-9 h-9" />,
      title: "Enfoque al Cliente",
      desc: "Satisfacción de las necesidades de nuestros clientes optimizando los recursos",
    },
    {
      icon: <CircuitBoard className="w-9 h-9" />,
      title: "Enfoque por Procesos",
      desc: "Visualización de la empresa como un conjunto de procesos encaminados a satisfacer las necesidades de los clientes",
    },
    {
      icon: <Users className="w-9 h-9" />,
      title: "Formación Continua",
      desc: "Formación como mecanismo fundamental de mejora continua de la calidad de los productos y servicios ofrecidos",
    },
    {
      icon: <Zap className="w-9 h-9" />,
      title: "Mejora Continua",
      desc: "Proceso fundamental de mejora del Sistema de Gestión de la Calidad",
    },
  ];

  const certifications = [
    {
      name: "EN 9100:2018",
      code: "01 117 125 200",
      entity: "TÜV Rheinland",
      year: "Rev. 2024",
      logo: "EN9100",
      description: "Sistema de gestión de calidad certificado",
    },
    {
      name: "ISO 9001:2015",
      code: "01 100 125200",
      entity: "TÜV Rheinland",
      year: "Rev. 2024",
      logo: "ISO9001",
      description:
        "Norma específica para la industria aeroespacial y de defensa de extensión mundial",
    },
  ];

  const memberships = [
    {
      org: "OASIS",
      code: "6130438025",
      desc: "Miembro activo IAQG - Online Aerospace Supplier Information System",
    },
    {
      org: "OTAN",
      code: "NCAGE: 9359B",
      desc: "Suministrador homologado OTAN - Código Cage activo",
    },
  ];

  return (
    <div className="w-screen min-h-screen pt-10 bg-black text-white overflow-hidden relative left-1/2 right-1/2 -mx-[50vw]">
      {/* background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e40af' fill-opacity='0.01'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative">
        {/* Hero Section - Ultra Premium */}
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-transparent to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-full mb-6 sm:mb-8 shadow-2xl shadow-cyan-500/50 ring-4 ring-blue-500/30">
              <Plane className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-cyan-200 px-4">
              CALIDAD AEROESPACIAL
            </h1>
            <div className="w-32 sm:w-40 lg:w-48 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mx-auto mb-6 sm:mb-8 rounded-full" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 font-light max-w-4xl mx-auto leading-relaxed px-4">
              Certificados bajo los estándares más exigentes de la industria
              aeroespacial, defensa y espacio
            </p>
          </motion.div>
        </section>

        {/* primeros cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
              Principios de Excelencia
            </h2>
            <p className="text-blue-300 text-base sm:text-lg px-4">
              Pilares de nuestro Sistema Integrado de Gestión
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {qualityValues.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-b from-zinc-900/80 to-black border border-zinc-800 rounded-2xl p-6 sm:p-8 overflow-hidden backdrop-blur-xl hover:border-cyan-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='carbon${i}' patternUnits='userSpaceOnUse' width='10' height='10'%3E%3Cpath d='M0,10 L10,0 M-2,2 L12,12 M-2,12 L12,2' stroke='%23e2e8f0' stroke-width='0.5' opacity='0.05'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23carbon${i})'/%3E%3C/svg%3E")`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-cyan-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-blue-200/80 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>





        {/* Certificaciones */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-zinc-950/50 to-black">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-12 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 px-4"
          >
            CERTIFICACIONES OFICIALES
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group relative bg-gradient-to-br from-slate-900 via-zinc-900 to-black border-2 border-cyan-500/40 rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden shadow-2xl hover:border-cyan-400 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-400/20 transition-colors" />
                <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:gap-8">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-2xl lg:text-3xl font-black text-white mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-cyan-400 font-mono text-base sm:text-lg mb-3">
                      Código: {cert.code}
                    </p>
                    <p className="text-blue-200 mb-4 text-sm sm:text-base">
                      {cert.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                      <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/20 rounded-full text-blue-300 border border-blue-500/50">
                        {cert.entity}
                      </span>
                      <span className="text-zinc-400">
                        Válida hasta {cert.year}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* TÜV RHEINLAND*/}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="flex justify-center mt-12 sm:mt-16 px-4"
          >
            <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border border-blue-700/70 rounded-2xl p-6 sm:p-8 backdrop-blur-xl w-full max-w-3xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <Award className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold mb-1">
                    Certificado por
                  </h4>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                    TÜV RHEINLAND
                  </p>
                  <p className="text-blue-300 text-sm sm:text-base leading-relaxed">
                    Ambas certificaciones están avaladas por la entidad TÜV
                    Rheinland. Dedicada a la realización de actividades de
                    inspección, control y certificación de forma objetiva desde
                    1872.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>







        {/* Acreditaciones */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 px-4">
            ACREDITACIONES INTERNACIONALES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {memberships.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-gradient-to-br from-zinc-900/90 to-black border border-zinc-800 rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-blue-500/60 transition-all duration-500"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {m.org === "OASIS" ? (
                    <GlobeLock className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 flex-shrink-0" />
                  ) : (
                    <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-green-400 flex-shrink-0" />
                  )}
                  <h3 className="text-2xl sm:text-3xl font-bold">{m.org}</h3>
                </div>
                <p className="text-xl sm:text-2xl font-mono text-cyan-400 mb-3 sm:mb-4 break-all">
                  {m.code}
                </p>
                <p className="text-blue-200 text-sm sm:text-base">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>



        {/* Entorno Responsable */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-700/50 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                    Compromiso Medioambiental
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    Quandum realiza esfuerzos en su proceso de adquisición de
                    materiales para que cumplan con la{" "}
                    <span className="text-green-400 font-semibold">
                      normativa REACH
                    </span>{" "}
                    de la Unión Europea.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-700/50 rounded-xl p-6 sm:p-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                    Entorno Responsable
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    Certificación expedida por la Consejería de Innovación,
                    Ciencia y Empresa de la Junta de Andalucía, que acredita una{" "}
                    <span className="text-purple-400 font-semibold">
                      gestión responsable
                    </span>{" "}
                    en los ámbitos sociales, económicos y medioambientales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* footer */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-t from-blue-950/30 to-transparent">
          <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">
              EXCELENCIA CERTIFICADA
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 font-light px-4">
              Calidad sin compromisos para misiones que no admiten fallos
            </p>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-cyan-400">
                AS9100
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-400 hidden sm:block">
                |
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-cyan-400 text-center">
                NATO APPROVED
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}