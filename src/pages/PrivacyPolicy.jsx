import { motion } from "motion/react";
import { Shield, Lock, Eye, Globe, Cookie, UserCheck } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Eye,
      title: "¿Qué información recopilamos?",
      content: [
        "Quandum recopila información en sus sitios web de dos formas: (1) directamente (por ejemplo, cuando facilitas tus datos para suscribirte a un boletín o te registras en un sitio web para hacer comentarios en un foro); y (2) indirectamente (por ejemplo, a través de la tecnología de nuestro sitio web).",
        "Podemos recopilar y procesar la siguiente información:",
        "• Información que nos facilitas al rellenar formularios en nuestro sitio web",
        "• Correspondencia si te pones en contacto con nosotros",
        "• Respuestas a encuestas para nuestros estudios (participación no obligatoria)",
        "• Mensajes, comentarios y contenidos que publicas en nuestro sitio web",
        "• Información sobre tu ordenador (dirección IP, sistema operativo, tipo de navegador)",
        "• Datos de tus visitas y recursos a los que accedes"
      ]
    },
    {
      icon: Lock,
      title: "¿Cómo utilizamos la información?",
      content: [
        "Utilizamos tus datos personales para ofrecerte la información que solicitas, procesar solicitudes y otros fines descritos en el punto de recopilación:",
        "• Para ofrecerte informes, artículos, boletines y contenidos solicitados",
        "• Para estudios o cuestionarios de investigación",
        "• Para personalizar tu visita al sitio web",
        "• Para contactarte en campañas de marketing (con tu autorización)",
        "• Para analizar y mejorar la eficacia de nuestro sitio web"
      ]
    },
    {
      icon: UserCheck,
      title: "¿Compartimos tus datos personales?",
      content: [
        "Nunca vendemos datos personales a terceros. En general, sólo compartimos datos con nuestros asesores y proveedores de servicios contratados.",
        "Podemos compartir información en casos específicos:",
        "• Cuando organicemos eventos conjuntos (siempre informándote previamente)",
        "• En caso de venta o liquidación de alguna parte de nuestra empresa",
        "• Cuando así lo exija la ley o para proteger derechos y seguridad"
      ]
    },
    {
      icon: Shield,
      title: "Datos personales sensibles",
      content: [
        "Normalmente no utilizaremos este sitio web para recopilar datos personales sensibles. En los pocos casos en que lo hagamos será siempre en cumplimiento de la legislación local sobre privacidad y protección de datos.",
        "Los datos personales sensibles incluyen: números de identificación personal, origen racial o étnico, opiniones políticas, creencias religiosas, afiliación a sindicatos, salud física o mental, datos biométricos o genéticos, inclinación sexual o antecedentes penales."
      ]
    },
    {
      icon: Globe,
      title: "¿Dónde se procesan tus datos?",
      content: [
        "Somos una organización de carácter global, por lo que los datos personales recopilados se pueden transmitir por la organización de Quandum en todo el mundo.",
        "Contamos con políticas internas que garantizan un nivel de protección equivalente en toda nuestra organización."
      ]
    },
    {
      icon: Cookie,
      title: "Cookies",
      content: [
        "Las cookies son archivos de texto que se descargan a tu dispositivo cuando visitas un sitio web. Realizan distintas funciones como facilitar la navegación, recordar preferencias y mejorar la experiencia del usuario.",
        "Tipos de cookies que utilizamos:",
        "• Cookies estrictamente necesarias: Imprescindibles para explorar el sitio",
        "• Cookies de rendimiento: Recopilan información anónima sobre el uso",
        "• Cookies de funcionalidad: Recuerdan tus preferencias personalizadas",
        "• Cookies de target: Hacemos seguimiento de campañas publicitarias propias",
        "Puedes gestionar o eliminar cookies mediante la configuración de tu navegador."
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-white text-slate-800">

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.article
                key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
                    <Icon className="w-6 h-6 text-zinc-100" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-2">
                    {section.title}
                  </h2>
                </div>
                
                <div className="ml-16 space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-zinc-800 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Rights Section */}
      <motion.section
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 px-6 border-t text-white border-zinc-900 bg-zinc-900"
      >
        <div className="max-w-4xl text-justify mx-auto">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">
            Tus derechos
          </h2>
          <div className="space-y-4 text-zinc-200">
            <p className="leading-relaxed">
              Tienes derecho a saber si conservamos datos personales sobre ti y, 
              en caso de que lo hagamos, a acceder a esos datos personales y pedir 
              que los rectifiquemos si son incorrectos. Para ello, puedes utilizar 
              nuestro formulario de contacto.
            </p>
            <p className="leading-relaxed">
              Puedes ejercer tu derecho a rechazar comunicaciones de marketing marcando 
              ciertas casillas en los formularios que empleamos para recabar tus datos 
              personales. También puedes ejercer el derecho a interrumpir las comunicaciones 
              de marketing cuando lo desees usando nuestro formulario de contacto.
            </p>
          </div>
        </div>
      </motion.section>

      
      <motion.section
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 px-6"
      >
        <div className="max-w-4xl text-justify mx-auto">
          <div className="bg-zinc-900 border border-zinc-900 rounded-lg p-8">
            <h3 className="text-2xl text-white font-bold mb-4 tracking-tight">
              Seguridad de los datos
            </h3>
            <p className="text-zinc-200 leading-relaxed mb-4">
              Adoptamos las medidas oportunas para garantizar la seguridad de los 
              datos personales recopilados a través del sitio web de Quandum. Debes 
              comprender que, dada la naturaleza abierta de Internet, tu información 
              y datos personales pueden circular sin medidas de seguridad por redes 
              conectadas a tu ordenador o a nuestros sistemas.
            </p>
            <p className="text-zinc-200 leading-relaxed">
              En ocasiones, nuestro sitio web puede incluir enlaces dirigidos a sitios 
              web de nuestros asociados, anunciantes y filiales. Si sigues alguno de 
              esos enlaces, recuerda que esos sitios web tienen sus propias políticas 
              de privacidad. Examina estas políticas antes de facilitar tus datos 
              personales en estos sitios web.
            </p>
          </div>
        </div>
      </motion.section>

      
      {/* <section className="py-8 px-6 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-zinc-500 text-center">
            Última actualización: {new Date().toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </section> */}
    </div>
  );
}