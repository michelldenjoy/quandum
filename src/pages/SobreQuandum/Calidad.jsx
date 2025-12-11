import { motion, useScroll, useTransform } from "motion/react";
import StarfieldNebula from "../../components/3d/StarfieldNebula";


export default function Calidad() {
  // Este hook debe estar dentro del componente y solo una vez
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "200%"]);

  return (
    <section className="relative min-h-screen overflow-hidden ">
      <StarfieldNebula />
      
      {/* Avión que vuela con el scroll */}
      <motion.div
        style={{ x }}
        className="fixed top-24 left-0 z-10 pointer-events-none hidden lg:block"
      >
        <img 
          src="/jet.svg" 
          alt="Avión Quandum"
          className="w-64 opacity-80 drop-shadow-2xl"
        />
      </motion.div>

      {/* Contenido principal */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-24 space-y-32">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 pt-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100">
            Política de Calidad
          </h1>
          <p className="text-xl text-slate-200 max-w-4xl mx-auto">
            Excelencia, compromiso y mejora continua como base de cada proceso.
          </p>
        </motion.div>

        {/* BLOQUE PRINCIPAL - Tarjeta flotante */}
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-lg shadow-2xl border border-slate-200 rounded-3xl p-10 md:p-16"
        >
          <p className="text-lg md:text-xl text-slate-800 leading-relaxed mb-6">
            La Dirección de <span className="font-bold text-sky-700">Quandum</span> busca obtener la excelencia en todas sus
            actividades y consolidarse como empresa del sector aeronáutico, militar e industrial. Para ello, y siendo consciente de la
            importancia de la calidad y la satisfacción del cliente, la empresa ha implantado un Sistema de Gestión de la Calidad basado en
            las normas <span className="font-bold">EN 9100:2018</span> e <span className="font-bold">ISO 9001:2015</span>.
          </p>
          {/* ... resto de párrafos iguales ... */}
          <p className="text-lg md:text-xl text-slate-800 leading-relaxed">
            Quandum asume el compromiso de identificar y satisfacer los requisitos del cliente y los normativos y legales asociados,
            impulsando la mejora continua a todos los niveles de la empresa.
          </p>
        </motion.article>

        {/* OBJETIVOS - estilo cockpit */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-sky-600 to-sky-800 text-white rounded-2xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold mb-8">Objetivos Estratégicos</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3"><span className="text-2xl">✓</span> Concienciar al equipo directivo</li>
              <li className="flex items-start gap-3"><span className="text-2xl">✓</span> Indicadores medibles en procesos clave</li>
              <li className="flex items-start gap-3"><span className="text-2xl">✓</span> Participación activa del personal</li>
              <li className="flex items-start gap-3"><span className="text-2xl">✓</span> Formación continua</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold mb-8">Valores Fundamentales</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3"><span className="text-2xl">✓</span> Enfoque al cliente</li>
              <li className="flex items-start gap-3"><span className="text-2xl">✓</span> Gestión por procesos</li>
              <li className="flex items-start gap-3"><span className="text-2xl">✓</span> Gestión de riesgos</li>
              <li className="flex items-start gap-3"><span className="text-2xl">✓</span> Formación continua</li>
              <li className="flex items-start gap-3"><span className="text-2xl">✓</span> Mejora continua</li>
            </ul>
          </div>
        </motion.div>

        {/* Sello final animado */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="flex flex-col items-center py-20"
        >
          <div className="bg-gradient-to-br from-brand-blue to-slate-900 text-white rounded-full p-16 shadow-2xl">
            <p className="text-4xl font-black tracking-wider">APROBADO</p>
            <p className="text-2xl font-bold mt-2">EN 9100:2018</p>
          </div>
          <p className="mt-8 text-2xl font-semibold text-slate-600">
            0 no conformidades en los últimos 20 años
          </p>
        </motion.div>

      </div>
    </section>
  );
}