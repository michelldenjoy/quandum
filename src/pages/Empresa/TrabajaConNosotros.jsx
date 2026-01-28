// import { useState } from "react";

import Collage from "../../components/Careers/Collage";
import Valores from "../../components/Careers/Valores";
import Formulario from "../../components/Careers/Formulario";
import WorkHorizontal from "../../components/Careers/WorkHorizontal";
import { motion } from "motion/react";
import HeroVideo from "../../components/about/HeroVideo";
import Divider from "../../components/Divider";
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
    <div className="min-h-screen">
      <HeroVideo
        eyebrow="Careers · Ingeniería · Innovación"
        title="Tu carrera despega aquí"
        description="Únete a un equipo multidisciplinar donde tu talento impulsa el desarrollo tecnológico."
        backgroundImage="/careerbg.jpg"
      >
        {/* <button
          onClick={() =>
            document.getElementById("formulario")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          className="px-8 py-3 rounded-md text-sm uppercase hover:scale-105 tracking-widest text-white clip-path-diagonal border border-gray-500 hover:font-semibold hover:bg-brand-pink/60 hover:text-white transition-all duration-300"
        >
          Únete al equipo
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button> */}
      </HeroVideo>
      <div id="formulario">
        <Formulario />
      </div>
      <Collage />
      <Divider />
      <WorkHorizontal />

      <div>{/* <Valores /> */}</div>

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
    </div>
  );
}
