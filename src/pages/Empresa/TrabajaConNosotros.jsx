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

export default function TrabajaConNosotros() {
  // const [openBenefit, setOpenBenefit] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }
      `}</style>

      <section className="relative w-screen py-44 px-6 overflow-hidden bg-black text-white left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: `url('/careerbg.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/10" />

        <div className="relative mx-auto text-center z-10">
          <button
            onClick={() => {
              document.getElementById("formulario")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="inline-block mb-6 px-6 py-2 border border-white/20 hover:border-white hover:scale-105 transition-all hover:font-bold duration-300 rounded-full text-sm tracking-wider animate-fadeIn cursor-pointer"
          >
            ÚNETE AL EQUIPO
          </button>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-20 animate-fadeInUp">
            Tu Carrera Despega Aquí
          </h1>
          <p className="mt-12 text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed animate-fadeInUp">
            En{" "}
            <span className="bg-gradient-to-r from-brand-blue to-slate-100 bg-clip-text text-transparent font-extrabold">
              Quandum
            </span>{" "}
            <span className="bg-gradient-to-r from-brand-pink via-red-400 to-red-700 bg-clip-text text-transparent font-extrabold">
              Aerospace
            </span>{" "}
            diseñamos componentes eléctronicos certificados. Si tienes pasión
            por la ingeniería de precisión y la innovación sostenible, este es
            tu lugar.
          </p>
        </div>
      </section>

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
