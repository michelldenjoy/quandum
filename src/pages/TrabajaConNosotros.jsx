import { useState } from "react";
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

const values = [
  {
    icon: Target,
    title: "Precisión",
    desc: "Diseñamos sistemas críticos con tolerancia cero a errores. DO-254 y DO-178C son nuestro estándar diario.",
  },
  {
    icon: Users,
    title: "Equipo",
    desc: "Colaboramos con ingenieros, certificadores y pilotos para innovar en aviación sostenible.",
  },
  {
    icon: Zap,
    title: "Velocidad",
    desc: "Lanzamos proyectos en meses, no años, manteniendo la máxima seguridad aeronáutica.",
  },
  {
    icon: UserCheck,
    title: "Responsabilidad",
    desc: "Esta compañía es tuya. Asume la propiedad extrema de cada proyecto aeronáutico.",
  },
];

const hermeusBenefits = [
  {
    icon: Heart,
    title: "100% Seguro Médico Pagado",
    desc: "Salud, dental y visión sin costo. Cobertura completa para ti y tu familia.",
  },
  {
    icon: Calendar,
    title: "Tres Meses de Permiso Parental",
    desc: "La familia es primero. Tiempo remunerado completo.",
  },
  {
    icon: TrendingUp,
    title: "Opciones sobre Acciones",
    desc: "Garantizadas con todas las ofertas a tiempo completo. Potencial adicional por desempeño.",
  },
  {
    icon: Shield,
    title: "401k & Planes de Retiro",
    desc: "Asegura tu futuro financiero con nuestro plan de pensiones.",
  },
  {
    icon: DollarSign,
    title: "Salario Competitivo",
    desc: "Basado en la media nacional y ajustado anualmente por inflación.",
  },
  {
    icon: Plane,
    title: "PTO Ilimitado",
    desc: "PTO flexible (exentos) y generoso acumulado (no exentos), más 12 días festivos.",
  },
  {
    icon: Award,
    title: "Bonos de Fin de Año",
    desc: "Los empleados elegibles son recompensados anualmente.",
  },
  {
    icon: Coffee,
    title: "Almuerzos Pagados Semanalmente",
    desc: "Elige entre una variedad de favoritos locales cada semana.",
  },
];

const andurilBenefits = [
  {
    title: "Salud y Bienestar",
    icon: Heart,
    items: [
      {
        name: "Seguro Médico Premium",
        desc: "Cobertura médica, dental y de visión 100% pagada por la empresa para empleados y dependientes.",
      },
      {
        name: "Apoyo en Salud Mental",
        desc: "Acceso a terapia, asesoramiento y programas de bienestar mental sin costo adicional.",
      },
      {
        name: "Gimnasio y Fitness",
        desc: "Membresía de gimnasio pagada y clases de yoga/pilates en las instalaciones.",
      },
    ],
  },
  {
    title: "Compensación y Equidad",
    icon: DollarSign,
    items: [
      {
        name: "Salarios Competitivos",
        desc: "Compensación ajustada al mercado aeroespacial con revisiones anuales garantizadas.",
      },
      {
        name: "Participación Accionaria",
        desc: "Opciones sobre acciones para todos los empleados de tiempo completo desde el día 1.",
      },
      {
        name: "Bonos de Rendimiento",
        desc: "Bonificaciones trimestrales y anuales basadas en objetivos individuales y de equipo.",
      },
    ],
  },
  {
    title: "Desarrollo Profesional",
    icon: GraduationCap,
    items: [
      {
        name: "Formación Continua",
        desc: "Cursos de certificación EASA/FAA, conferencias técnicas y mentorías con expertos de la industria.",
      },
      {
        name: "Presupuesto de Aprendizaje",
        desc: "€5,000 anuales para cursos, certificaciones y conferencias relacionadas con tu rol.",
      },
      {
        name: "Carrera Interna",
        desc: "Programa estructurado de promoción con planes de desarrollo personalizados.",
      },
    ],
  },
  {
    title: "Equilibrio Vida-Trabajo",
    icon: Clock,
    items: [
      {
        name: "Trabajo Híbrido Flexible",
        desc: "Libertad para trabajar desde casa o desde nuestras instalaciones en Málaga según tu preferencia.",
      },
      {
        name: "Vacaciones Extendidas",
        desc: "30 días de vacaciones pagadas + permisos sabáticos después de 5 años.",
      },
      {
        name: "Permisos Parentales",
        desc: "16 semanas de permiso parental remunerado para todos los padres, independientemente del género.",
      },
    ],
  },
  {
    title: "Oficina y Cultura",
    icon: Home,
    items: [
      {
        name: "Instalaciones de Élite",
        desc: "Oficinas en el Parque Tecnológico de Málaga con laboratorios, simuladores de vuelo y hangares.",
      },
      {
        name: "Comidas y Snacks",
        desc: "Desayuno y almuerzo diario gratuito, snacks ilimitados y café de especialidad.",
      },
      {
        name: "Eventos de Equipo",
        desc: "Retiros trimestrales, vuelos de demostración y eventos sociales regulares.",
      },
    ],
  },
];

const positions = [
  {
    title: "Ingeniero/a Aeronáutico Senior",
    dept: "Estructuras & Aerodinámica",
    location: "Málaga, España",
    icon: Rocket,
  },
  {
    title: "Ingeniero/a Software Embebido",
    dept: "Aviónica DO-178C",
    location: "Málaga, España",
    icon: Zap,
  },
  {
    title: "Ingeniero/a Electrónica de Potencia",
    dept: "Sistemas Eléctricos",
    location: "Málaga, España",
    icon: Zap,
  },
  {
    title: "Técnico/a Superior de Producción",
    dept: "Montaje & Integración",
    location: "Málaga, España",
    icon: Users,
  },
  {
    title: "Ingeniero/a de Certificación",
    dept: "EASA / FAA Part 21",
    location: "Málaga, España",
    icon: Shield,
  },
  {
    title: "Diseñador/a Mecánico CAD",
    dept: "Diseño 3D & Simulación",
    location: "Málaga, España",
    icon: Award,
  },
];

const InputLight = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-3">
      {label}
    </label>
    <input
      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition"
      {...props}
    />
  </div>
);

export default function TrabajaConNosotros() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    cv: null,
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openBenefit, setOpenBenefit] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "cv" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.cv) {
      setStatus("error");
      return;
    }
    setIsSubmitting(true);
    setStatus("");
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("success");
      setTimeout(() => setStatus(""), 7000);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
        cv: null,
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }
      `}</style>

      <section className="relative w-screen py-32 px-6 overflow-hidden bg-black text-white left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: `url('/careerbg.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

        
        <div className="relative mx-auto text-center z-10">
          <div className="inline-block mb-6 px-6 py-2 border border-white/20 rounded-full text-sm tracking-wider animate-fadeIn">
            ÚNETE AL EQUIPO
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fadeInUp">
            Construye el Futuro
            <br />
            de la Aviación
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp">
            En <span className="text-brand-blue font-bold">Quandum</span>{" "}
            <span className="text-brand-pink font-bold">Aerospace</span>{" "}
            diseñamos aeronaves eléctricas certificadas. Si tienes pasión por la
            ingeniería de precisión y la innovación sostenible, este es tu
            lugar.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-4">
              Nuestros Valores
            </h2>
            <p className="text-4xl font-bold text-gray-900">
              Así es como ganamos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  className="text-center p-8 hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 uppercase tracking-wide">
                    {val.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative w-screen py-24 px-6 bg-black text-white left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              BENEFICIOS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hermeusBenefits.map((ben, i) => {
              const Icon = ben.icon;
              return (
                <div
                  key={i}
                  className="text-center p-6 border-t-4 border-blue-600 hover:border-pink-500 transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">
                    {ben.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {ben.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
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
      </section>

      <section className="relative w-full py-24 px-6 bg-zinc-900 text-white left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Oportunidades Abiertas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((job, i) => {
              const Icon = job.icon;
              return (
                <div
                  key={i}
                  className="group bg-black border border-gray-800 rounded-xl p-8 hover:border-blue-600 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Icon className="w-6 h-6 text-brand-pink group-hover:text-white transition-colors" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-gray-500 text-sm uppercase tracking-wider mb-3">
                    {job.dept}
                  </p>
                  <p className="text-gray-600 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {job.location}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-gray-900">
            Envía tu Candidatura
          </h2>
          <p className="text-center text-gray-600 mb-16">
            Únete a los mejores ingenieros aeronáuticos de Europa
          </p>
          <div className="bg-white border border-gray-300 rounded-2xl p-10 md:p-14 shadow-xl space-y-8">
            {status === "success" && (
              <div className="p-6 bg-green-50 border border-green-200 rounded-xl flex items-center gap-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
                <div>
                  <p className="text-green-800 font-semibold">
                    ¡Candidatura enviada!
                  </p>
                  <p className="text-green-600 text-sm mt-1">
                    Te contactaremos en 72h.
                  </p>
                </div>
              </div>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center font-medium">
                Completa los campos obligatorios y adjunta CV.
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputLight
                label="Nombre completo *"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <InputLight
                type="email"
                label="Email *"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputLight
                type="tel"
                label="Teléfono"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Puesto de interés
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-blue-900 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition"
                >
                  <option value="">Seleccionar</option>
                  {positions.map((p) => (
                    <option key={p.title} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Mensaje (opcional)
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-blue-900 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition resize-none"
                placeholder="Certificaciones, disponibilidad, experiencia..."
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                <Upload className="w-4 h-4 inline mr-2" />
                Adjunta tu CV (PDF, máx. 10MB) *
              </label>
              <input
                type="file"
                name="cv"
                accept=".pdf"
                onChange={handleChange}
                className="block w-full text-sm text-gray-600 file:mr-6 file:py-3 file:px-6 file:rounded-lg file:border-0 file:bg-brand-blue file:text-white file:font-semibold hover:file:bg-slate-800 transition cursor-pointer"
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full py-4 bg-brand-blue hover:bg-slate-800 text-white font-bold text-lg rounded-lg transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-lg hover:scale-[1.02] active:scale-[0.99]"
            >
              {isSubmitting ? "Enviando..." : "Enviar Candidatura"}
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-center text-xs text-gray-500 mt-6">
              <Shield className="w-3 h-3 inline mr-1" />
              Tus datos están protegidos según RGPD. Confidencialidad total
              garantizada.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
