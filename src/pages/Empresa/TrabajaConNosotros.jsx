// import { useState } from "react";
import {
  Rocket,
  Users,
  Clock,
  Shield,
  Zap,
  Upload,
  CheckCircle,
  ArrowRight,
  Award,
  Heart,
  ChevronDown,
  Home,
  DollarSign,
  Plane,
  GraduationCap,
  Coffee,
  Calendar,
  Target,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import Collage from '../../components/Careers/Collage' 
import Valores from "../../components/Careers/Valores";
import Formulario from "../../components/Careers/Formulario";
import WorkHorizontal from "../../components/Careers/WorkHorizontal";
import { motion } from "motion/react";


// const andurilBenefits = [
//   {
//     title: "Salud y Bienestar",
//     icon: Heart,
//     items: [
//       {
//         name: "Seguro Médico Premium",
//         desc: "Cobertura médica, dental y de visión 100% pagada por la empresa para empleados y dependientes.",
//       },
//       {
//         name: "Apoyo en Salud Mental",
//         desc: "Acceso a terapia, asesoramiento y programas de bienestar mental sin costo adicional.",
//       },
//       {
//         name: "Gimnasio y Fitness",
//         desc: "Membresía de gimnasio pagada y clases de yoga/pilates en las instalaciones.",
//       },
//     ],
//   },
//   {
//     title: "Compensación y Equidad",
//     icon: DollarSign,
//     items: [
//       {
//         name: "Salarios Competitivos",
//         desc: "Compensación ajustada al mercado aeroespacial con revisiones anuales garantizadas.",
//       },
//       {
//         name: "Participación Accionaria",
//         desc: "Opciones sobre acciones para todos los empleados de tiempo completo desde el día 1.",
//       },
//       {
//         name: "Bonos de Rendimiento",
//         desc: "Bonificaciones trimestrales y anuales basadas en objetivos individuales y de equipo.",
//       },
//     ],
//   },
//   {
//     title: "Desarrollo Profesional",
//     icon: GraduationCap,
//     items: [
//       {
//         name: "Formación Continua",
//         desc: "Cursos de certificación EASA/FAA, conferencias técnicas y mentorías con expertos de la industria.",
//       },
//       {
//         name: "Presupuesto de Aprendizaje",
//         desc: "€5,000 anuales para cursos, certificaciones y conferencias relacionadas con tu rol.",
//       },
//       {
//         name: "Carrera Interna",
//         desc: "Programa estructurado de promoción con planes de desarrollo personalizados.",
//       },
//     ],
//   },
//   {
//     title: "Equilibrio Vida-Trabajo",
//     icon: Clock,
//     items: [
//       {
//         name: "Trabajo Híbrido Flexible",
//         desc: "Libertad para trabajar desde casa o desde nuestras instalaciones en Málaga según tu preferencia.",
//       },
//       {
//         name: "Vacaciones Extendidas",
//         desc: "30 días de vacaciones pagadas + permisos sabáticos después de 5 años.",
//       },
//       {
//         name: "Permisos Parentales",
//         desc: "16 semanas de permiso parental remunerado para todos los padres, independientemente del género.",
//       },
//     ],
//   },
//   {
//     title: "Oficina y Cultura",
//     icon: Home,
//     items: [
//       {
//         name: "Instalaciones de Élite",
//         desc: "Oficinas en el Parque Tecnológico de Málaga con laboratorios, simuladores de vuelo y hangares.",
//       },
//       {
//         name: "Comidas y Snacks",
//         desc: "Desayuno y almuerzo diario gratuito, snacks ilimitados y café de especialidad.",
//       },
//       {
//         name: "Eventos de Equipo",
//         desc: "Retiros trimestrales, vuelos de demostración y eventos sociales regulares.",
//       },
//     ],
//   },
// ];




const title = "Tu carrera despega aquí";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
export default function TrabajaConNosotros() {
  // const [openBenefit, setOpenBenefit] = useState(null);

  return (
    <div className="min-h-screen">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }
      `}</style>

<div className="w-full overflow-x-hidden pt-20 md:pt-24 lg:pt-28">
      <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
        {/* Imagen de fondo */}
        <img
          src="/careerbg.jpg"
          alt="Carreras profesionales en Quandum Aerospace"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay oscuro + degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-slate-900/60 to-slate-950/90" />

        {/* Grid técnico sutil */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none 
                     bg-[linear-gradient(rgba(59,130,246,0.4)_1px,transparent_1px),
                          linear-gradient(90deg,rgba(59,130,246,0.4)_1px,transparent_1px)]
                     bg-[size:120px_120px]"
        />

        {/* Contenido */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto text-center"
            >
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-6"
              >
                Careers · Engineering · Innovation
              </motion.p>

              {/* Título animado */}
              <h1 className="flex flex-wrap justify-center text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
                {title.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordAnimation}
                    className="mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              {/* Descripción */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto"
              >
                En{" "}
                <span className="text-white font-extrabold">
                  Quandum
                </span>{" "}
                <span className="bg-gradient-to-r from-brand-pink via-red-400 to-red-700 bg-clip-text text-transparent font-extrabold">
                  Aerospace
                </span>{" "}
                diseñamos sistemas electrónicos certificados para el sector
                aeroespacial. Si te apasiona la ingeniería de precisión, la
                innovación tecnológica y el impacto real, este es tu lugar.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-10"
              >
                <button
                  onClick={() =>
                    document.getElementById("formulario")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                  className="inline-flex items-center gap-3 px-8 py-3 rounded-full
                             border border-white/20 text-white
                             hover:border-cyan-400/60 hover:bg-white/5
                             transition-all duration-300 tracking-wide"
                >
                  Únete al equipo
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Línea inferior decorativa */}
        <div className="absolute bottom-0 left-0 right-0 h-px 
                        bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      </section>
    </div>

      <div>
        <Collage />
      </div>
      <div>
        <WorkHorizontal />
      </div>

      <div>
        {/* <Valores /> */}
      </div>

      {/* <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-4">
              Explora Nuestros Beneficios
            </h2>
            <p className="text-4xl font-bold text-gray-900">
              Todo lo que necesitas para prosperar
            </p>
          </div>
          <div className="space-y-4">
            {andurilBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              const isOpen = openBenefit === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-300 rounded-xl overflow-hidden bg-white hover:border-blue-600 transition-colors"
                >
                  <button
                    onClick={() => setOpenBenefit(isOpen ? null : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="text-xl font-bold text-gray-900">
                        {benefit.title}
                      </span>
                    </div>
                    <ChevronDown
                      className="w-6 h-6 text-gray-600 transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? "1000px" : "0",
                      opacity: isOpen ? 1 : 0,
                      overflow: "hidden",
                      transition: "all 0.3s ease-out",
                    }}
                  >
                    <div className="px-8 pb-8 pt-4 space-y-6 bg-gray-50">
                      {benefit.items.map((item, i) => (
                        <div key={i} className="pl-16">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {item.name}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}
      <div id="formulario">
        <Formulario />
      </div>
    </div>
  );
}
