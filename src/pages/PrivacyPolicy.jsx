import { motion } from "framer-motion";
import { Shield, Lock, Eye, Globe, Cookie, UserCheck, FileText, ChevronRight } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Eye,
      id: "01",
      title: "¿Qué información recopilamos?",
      content: [
        "Quandum recopila información en sus sitios web de dos formas: directamente (formularios, registros, suscripciones) e indirectamente (tecnología de seguimiento propia).",
        "Información procesada habitualmente:",
        "• Datos técnicos: Dirección IP, sistema operativo y tipo de navegador.",
        "• Interacción: Datos de navegación y recursos a los que accedes.",
        "• Voluntaria: Correspondencia, encuestas y formularios de contacto.",
      ],
    },
    {
      icon: Lock,
      id: "02",
      title: "¿Cómo utilizamos la información?",
      content: [
        "Tus datos personales se procesan bajo criterios de estricta necesidad operativa:",
        "• Suministro de informes técnicos y boletines solicitados.",
        "• Personalización de la experiencia de usuario en el portal.",
        "• Análisis de eficacia de nuestros sistemas digitales.",
        "• Campañas de comunicación (solo bajo consentimiento previo).",
      ],
    },
    {
      icon: UserCheck,
      id: "03",
      title: "¿Compartimos tus datos personales?",
      content: [
        "Quandum Aerospace no comercializa datos personales con terceros. El intercambio de información se limita a asesores y proveedores de servicios bajo contrato de confidencialidad.",
        "Excepciones legales: Cumplimiento de normativas de defensa, seguridad nacional o procesos de liquidación corporativa.",
      ],
    },
    {
      icon: Globe,
      id: "04",
      title: "Procesamiento Global",
      content: [
        "Como organización de carácter global, los datos pueden ser transmitidos entre las sedes de Quandum en todo el mundo.",
        "Garantizamos niveles de protección equivalentes en toda nuestra infraestructura internacional mediante políticas internas de seguridad unificadas.",
      ],
    },
    {
      icon: Cookie,
      id: "05",
      title: "Gestión de Cookies",
      content: [
        "Utilizamos cookies para optimizar la navegación técnica:",
        "• Estrictamente necesarias: Operatividad del sitio.",
        "• De rendimiento: Análisis anónimo de uso.",
        "• De funcionalidad: Preferencias personalizadas.",
      ],
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* HEADER */}
      <header className="pt-32 pb-16 px-6 border-b bg-aerospacee border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase mb-4">
                Política de <br /> <span className="text-brand-blue font-light">Privacidad</span>
              </h1>
              <span className="text-xs tracking-[0.3em] uppercase text-gray-400">
              Legal Compliance Documentation
            </span>
              {/* <p className="text-gray-400 text-sm font-mono tracking-widest uppercase">
                ID: QND-PP-2024-V.1
              </p> */}
            </div>
            
          </div>
        </div>
      </header>

      <main className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            
            
            <aside className="hidden lg:block lg:col-span-3">
              <nav className="sticky top-32 space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-6">Contenidos</p>
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="block text-xs text-gray-400 hover:text-black transition-colors uppercase tracking-tighter">
                    {s.id}. {s.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Contenido */}
            <div className="lg:col-span-9 space-y-24">
              {sections.map((section, index) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border-l border-gray-100 pl-8 md:pl-16 relative"
                >
                  <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-white border border-brand-blue" />
                  
                  <div className="flex items-center gap-4 mb-8">
                    <span className="font-mono text-brand-blue text-sm font-bold tracking-tighter">{section.id}</span>
                    <h2 className="text-2xl font-bold tracking-tight uppercase">{section.title}</h2>
                  </div>

                  <div className="space-y-6">
                    {section.content.map((text, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {text}
                      </p>
                    ))}
                  </div>
                </motion.section>
              ))}

              {/*  DERECHOS  */}
              <motion.section 
                className="bg-gray-50 p-8 md:p-12 border border-gray-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <UserCheck className="text-brand-blue" size={24} />
                  <h3 className="text-xl font-bold uppercase tracking-tight">Ejercicio de Derechos</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-500 italic">
                  <p>
                    Usted tiene derecho a conocer, rectificar o cancelar el tratamiento de sus datos personales. Para cualquier gestión, Quandum dispone de canales de comunicación directa.
                  </p>
                  <p>
                    Puede interrumpir las comunicaciones de marketing en cualquier momento utilizando nuestro formulario de contacto oficial.
                  </p>
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER  */}
      <footer className="bg-black text-white py-20 px-6 mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-6">
                <Lock size={18} className="text-brand-blue" />
                <h4 className="text-sm font-bold uppercase tracking-[0.2em]">Seguridad de los sistemas</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                Adoptamos medidas de cifrado y seguridad industrial para proteger la integridad de los datos. No obstante, dada la naturaleza de las redes globales, Quandum Aerospace recomienda el uso de conexiones seguras por parte del usuario.
              </p>
            </div>
            <div className="md:border-l md:border-white/10 md:pl-12">
              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">Última revisión técnica</p>
              <p className="text-sm font-bold tracking-widest">
                {new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}