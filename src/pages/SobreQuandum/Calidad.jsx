import { motion, useScroll, useTransform } from "motion/react";
import StarfieldNebula from "../../components/3d/StarfieldNebula";

export default function Calidad() {
  // Este hook debe estar dentro del componente y solo una vez
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "580%"]);
  const y = useTransform(scrollYProgress, [0, 0.4, 1], ["0vh", "20vh", "80vh"]);
  const yMobile = useTransform(scrollYProgress, [0, 1], [80, -180]);
  const rotateMobile = useTransform(scrollYProgress, [0, 1], [20, -10]);

  return (
    <section className="relative min-h-screen overflow-hidden ">
      <StarfieldNebula />

      {/* Jet escritorio (horizontal grande) */}
      <motion.div
        style={{ x, y }}
        className="fixed top-24 -left-20 z-10 pointer-events-none hidden lg:block"
      >
        <img src="/jet.svg" className="w-80 opacity-65 drop-shadow-2xl" />
      </motion.div>

      {/* Jet móvil parallax */}
      <motion.div
        style={{ y: yMobile, rotate: rotateMobile }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="fixed bottom-20 right-4 z-30 pointer-events-none block lg:hidden"
      >
        <img src="/jet.svg" className="w-36 drop-shadow-2xl" />
      </motion.div>

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

        {/* BLOQUE PRINCIPAL */}
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 backdrop-blur-lg shadow-2xl border border-slate-400 rounded-3xl p-10 md:p-16"
        >
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6">
            La Dirección de{" "}
            <span className="font-bold text-sky-400">Quandum</span> busca
            obtener la excelencia en todas sus actividades y consolidarse como
            empresa del sector aeronáutico, militar e industrial. Para ello, y
            siendo consciente de la importancia de la calidad y la satisfacción
            del cliente, la empresa ha implantado un Sistema de Gestión de la
            Calidad basado en las normas{" "}
            <span className="font-bold">EN 9100:2018</span> e{" "}
            <span className="font-bold">ISO 9001:2015</span>.
          </p>

          <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
            Quandum asume el compromiso de identificar y satisfacer los
            requisitos del cliente y los normativos y legales asociados,
            impulsando la mejora continua a todos los niveles de la empresa.
          </p>
        </motion.article>

        {/* OBJETIVOS*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-b from-brand-blue/50 via-slate-800 to-brand-blue/50 text-white rounded-2xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold mb-8">Objetivos Estratégicos</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span> Concienciar al equipo
                directivo
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span> Indicadores medibles en
                procesos clave
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span> Participación activa del
                personal
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span> Formación continua
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-b from-black via-slate-800 to-black text-white rounded-2xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold mb-8">Valores Fundamentales</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span> Enfoque al cliente
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span> Gestión por procesos
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span> Gestión de riesgos
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span> Formación continua
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span> Mejora continua
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Sello */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, type: "spring", stiffness: 80 }}
          className="flex flex-col items-center py-32"
        >
          <div className="relative">
            {/* Sombra suave */}
            <div className="absolute inset-0 blur-3xl scale-110 bg-sky-500/20" />

            <div
              className="relative w-64 h-64 rounded-full bg-gradient-to-br from-slate-800 via-slate-900 to-black 
                    shadow-2xl border border-slate-700/50 flex flex-col items-center justify-center
                    overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-transparent via-slate-600 to-transparent" />

              <div className="text-center">
                <p className="text-5xl font-bold text-sky-400 tracking-wider">
                  EN 9100
                </p>
                <p className="text-xl text-slate-400 mt-2">Rev. 2018</p>
                <div className="h-px bg-sky-400/50 w-24 mx-auto mt-4" />
                <p className="text-sm text-slate-500 mt-3 tracking-widest">
                  CERTIFIED
                </p>
              </div>
            </div>

            {/* estampa */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-xs font-bold px-6 py-2 rounded-full shadow-lg"
            >
              QUANDUM
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
