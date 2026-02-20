import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  Target,
  Award,
  CheckCircle2,
  Settings,
  Database,
  Users,
  Briefcase,
  FileCheck,
  ArrowUpRight,
  Minus,
} from "lucide-react";
import HeroVideo from "../../components/about/HeroVideo";


function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function LineReveal({ delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="h-px bg-black origin-left"
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

/* ─── Data ───────────────────────────────────────────────────────── */
const principles = [
  {
    title: "Cumplimiento normativo",
    desc: "Sistemas conforme a estándares aeronáuticos y militares, asegurando certificación, aeronavegabilidad y seguridad operacional.",
    icon: ShieldCheck,
  },
  {
    title: "Gestión de procesos",
    desc: "Planificación, ejecución, verificación y validación controlada de cada proyecto, con gestión de riesgos y supervisión técnica.",
    icon: Settings,
  },
  {
    title: "Trazabilidad técnica",
    desc: "Integridad de versiones y documentos garantizada a lo largo de todo el ciclo de vida del sistema.",
    icon: Database,
  },
  {
    title: "Competencia técnica",
    desc: "Formación especializada del equipo para fortalecer la capacidad tecnológica y organizativa.",
    icon: Award,
  },
  {
    title: "Enfoque al cliente",
    desc: "Comunicación técnica fluida, transparencia y rigor en la alineación con los objetivos del programa.",
    icon: Users,
  },
];

const objectives = [
  "Concienciación del equipo directivo en calidad",
  "Indicadores medibles en procesos críticos",
  "Participación activa del capital humano",
  "Formación técnica continua y especializada",
];

const values = [
  "Enfoque absoluto al cliente",
  "Gestión integral por procesos",
  "Análisis preventivo de riesgos",
  "Cultura de mejora continua",
];


export default function Calidad() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="bg-[#F8F7F4] text-black selection:bg-black selection:text-white font-sans"
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >

      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-black z-50 origin-left"
        style={{ width: progressWidth }}
      />


      <HeroVideo
        eyebrow="Excelencia Operativa"
        title="Política de Calidad"
        description="El marco normativo que rige cada uno de nuestros procesos de precisión en Quandum Aerospace."
        backgroundImage="/images/calidad.webp"
      />


      <section className="py-16 md:py-24 lg:py-32 px-5 sm:px-8 md:px-16 max-w-screen-xl mx-auto">
        <FadeUp>
          <div className="flex items-center gap-4 mb-6">
            <span
              className="text-[10px] tracking-[0.4em] font-bold uppercase text-gray-400"
              style={{ fontFamily: "monospace" }}
            >
              01 / Declaración Oficial
            </span>
            <Minus size={12} className="text-gray-300" />
          </div>
        </FadeUp>

        <LineReveal delay={0.1} />

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 mt-10 md:mt-12">
          {/* Left label */}
          <FadeUp delay={0.15} className="md:col-span-5 lg:col-span-4">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl uppercase leading-[0.9] tracking-tighter">
              Compromiso
              <br />
              <span className="text-gray-300 text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold">
                Quandum
              </span>
            </h2>
          </FadeUp>


          <FadeUp delay={0.25} className="md:col-span-7 lg:col-span-8 flex flex-col justify-end">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 leading-snug font-light tracking-tight text-justify md:px-8">
              En Quandum Aerospace la calidad constituye un{" "}
              <strong className="font-bold text-black">principio fundamental</strong>{" "}
              en el desarrollo de nuestras actividades de ingeniería, fabricación e
              integración de sistemas destinados a los sectores{" "}
              <em className="not-italic border-b border-black">
                aeroespacial, defensa e industrial.
              </em>
            </p>
            <p className="mt-6 md:mt-8 text-justify text-sm text-gray-500 leading-relaxed md:px-8">
              Nuestra organización orienta sus procesos al cumplimiento estricto de los
              requisitos técnicos, normativos y contractuales aplicables a cada
              programa, garantizando la conformidad de los productos y servicios
              suministrados.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="px-5 sm:px-8 md:px-16 py-16 md:py-20 bg-black text-white">
        <div className="max-w-screen-xl mx-auto">
          <FadeUp>
            <div className="flex items-center gap-4 mb-6">
              <span
                className="text-[10px] tracking-[0.4em] font-bold uppercase text-gray-500"
                style={{ fontFamily: "monospace" }}
              >
                02 / Marco Estratégico
              </span>
            </div>
            <div className="h-px bg-white/10 mb-10 md:mb-16" />
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-0 border border-white/10">
            {/* Objetivos */}
            <FadeUp
              delay={0.1}
              className="p-7 sm:p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-white/10"
            >
              <div className="flex items-start gap-4 mb-8 md:mb-10">
                <div className="w-10 h-10 flex items-center justify-center border border-white/20 shrink-0">
                  <Target size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 tracking-widest uppercase font-bold mb-1">
                    Área
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                    Objetivos Estratégicos
                  </h3>
                </div>
              </div>
              <ul className="space-y-4 md:space-y-5">
                {objectives.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 md:gap-5">
                    <span
                      className="text-gray-600 font-mono text-xs pt-1 shrink-0"
                      style={{ fontFamily: "monospace" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            {/* Valores */}
            <FadeUp delay={0.2} className="p-7 sm:p-10 md:p-14">
              <div className="flex items-start gap-4 mb-8 md:mb-10">
                <div className="w-10 h-10 flex items-center justify-center bg-white shrink-0">
                  <Award size={18} className="text-black" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 tracking-widest uppercase font-bold mb-1">
                    Área
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight">
                    Valores Fundamentales
                  </h3>
                </div>
              </div>
              <div className="grid gap-3">
                {values.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="flex items-center gap-4 py-3 md:py-4 border-b border-white/10 group cursor-default"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-gray-500 group-hover:text-white transition-colors shrink-0"
                    />
                    <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                      {item}
                    </span>
                    <ArrowUpRight
                      size={12}
                      className="ml-auto text-gray-700 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all shrink-0"
                    />
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SECCIÓN 03 */}
      <section className="py-16 md:py-24 lg:py-32 px-5 sm:px-8 md:px-16 bg-[#F8F7F4]">
        <div className="max-w-screen-xl mx-auto">
          <FadeUp>
            <div className="flex items-center gap-4 mb-6">
              <span
                className="text-[10px] tracking-[0.4em] font-bold uppercase text-gray-400"
                style={{ fontFamily: "monospace" }}
              >
                03 / Protocolos de Actuación
              </span>
            </div>
          </FadeUp>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-4">
            <FadeUp>
              <h2 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extralight  tracking-tight leading-[1.1]">
                Principios de
                <br />
                <span className="font-semibold">Certificación</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-sm text-gray-500 max-w-xs leading-relaxed md:text-right">
                Los ejes que garantizan la conformidad técnica y normativa de cada
                entrega de Quandum Aerospace.
              </p>
            </FadeUp>
          </div>

          <LineReveal delay={0.15} />

          {/*  1 col movil, 2 tablet, 3 desktop */}
          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeUp key={i} delay={i * 0.07}>
                  <motion.div
                    whileHover={{ backgroundColor: "#000", color: "#fff" }}
                    transition={{ duration: 0.25 }}
                    className="bg-[#F8F7F4] p-7 sm:p-8 md:p-10 flex flex-col gap-5 md:gap-6 group h-full cursor-default"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 border border-gray-300 group-hover:border-white/30 flex items-center justify-center transition-colors">
                        <Icon
                          size={16}
                          className="text-gray-500 group-hover:text-white transition-colors"
                        />
                      </div>
                      <span
                        className="text-[10px] text-gray-300 group-hover:text-white/30 font-mono transition-colors"
                        style={{ fontFamily: "monospace" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold uppercase tracking-tight mb-2 md:mb-3 leading-tight group-hover:text-white transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-sm text-gray-500 group-hover:text-white/60 leading-relaxed transition-colors">
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                </FadeUp>
              );
            })}

           
            <FadeUp delay={0.35}>
              <div className="bg-black text-white p-7 sm:p-8 md:p-10 flex flex-col justify-between h-full min-h-[200px]">
                <FileCheck className="text-gray-500" size={20} />
                <div>
                  <p className="text-sm leading-relaxed text-gray-400 italic mt-6">
                    "La calidad no es una etapa del proyecto, sino un criterio
                    permanente que guía cada decisión técnica y organizativa."
                  </p>
                  <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-white/10">
                    <p className="text-[9px] tracking-[0.35em] uppercase text-gray-600 font-bold mb-1">
                      Firma
                    </p>
                    <p className="text-xs uppercase font-semibold tracking-wider text-gray-300">
                      Dirección Quandum Aerospace
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
  {/* SELLO */}

      <a
        href="/sobre-quandum/certificaciones"
        className="block bg-[#050A14] relative overflow-hidden"
      >
        
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-5 sm:px-8 md:px-16 py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-20">
        
          <FadeUp className="flex-1 text-center lg:text-left">
            <p
              className="text-[10px] tracking-[0.4em] uppercase text-sky-400/70 font-bold mb-5 md:mb-6"
              style={{ fontFamily: "monospace" }}
            >
              04 / Estándar de Calidad
            </p>
            <h2
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl  text-white uppercase leading-none tracking-tighter mb-6 md:mb-8"
             
            >
              Certificación
              <br />
              <span className="text-sky-400/80 font-bold">EN 9100</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
              Quandum Aerospace opera bajo el sistema de gestión de calidad más
              exigente del sector aeroespacial, integrando los requisitos del
              estándar internacional ISO 9001 en su variante de defensa y aviación.
            </p>
            <div className="mt-8 md:mt-10 inline-flex items-center gap-3 text-white text-sm font-semibold group">
              <span>Ver certificaciones</span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="shrink-0">
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mt-6"
            >
       
              <div className="absolute inset-0 rounded-full bg-sky-500/10 blur-2xl scale-125" />

             
              <div className="relative w-full h-full rounded-full border border-sky-500/30 bg-gradient-to-br from-[#0B1627] to-[#050A14] flex flex-col items-center justify-center shadow-2xl">
      
                <div className="absolute inset-6 rounded-full border border-sky-500/10" />
                <div className="absolute inset-12 rounded-full border border-sky-500/05" />

              
                <div className="text-center relative z-10">
                  <p
                    className="text-5xl md:text-6xl font-black text-white tracking-widest leading-none"
                    style={{ fontFamily: "'Barlow Condensed', 'Impact', sans-serif" }}
                  >
                    EN
                  </p>
                  <p
                    className="text-6xl md:text-7xl font-black bg-gradient-to-b from-sky-300 to-sky-600 bg-clip-text text-transparent tracking-widest leading-none"
                    style={{ fontFamily: "'Barlow Condensed', 'Impact', sans-serif" }}
                  >
                    9100
                  </p>
                  <div className="h-px bg-sky-500/30 w-16 md:w-24 mx-auto my-3 md:my-4" />
                  <p className="text-[9px] text-sky-400 tracking-[0.4em] uppercase font-bold">
                    Rev. 2018
                  </p>
                </div>

        
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-black px-4 md:px-5 py-1.5 tracking-widest uppercase whitespace-nowrap">
                  ISO 9001:2015
                </div>
               
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-sky-400/70 text-white text-[9px] font-black px-4 md:px-5 py-1.5 tracking-widest uppercase whitespace-nowrap">
                  Quandum Aerospace
                </div>
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </a>
    </div>
  );
}