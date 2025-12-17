import { motion } from "motion/react";
import { ShieldCheck, Cpu, Target, Layers } from "lucide-react";

export default function HomeOverview() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-28 space-y-32">

        {/* ---------------- INTRO ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">
            Ingeniería diseñada para misiones críticas
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed">
            En Quandum Aerospace desarrollamos soluciones tecnológicas a medida
            para aplicaciones donde la fiabilidad, la precisión y la seguridad
            no admiten concesiones. Cada proyecto se concibe como un sistema
            único, optimizado para cumplir su misión sin margen de error.
          </p>
        </motion.div>

        {/* ---------------- VALUE GRID ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          <ValueCard
            icon={Target}
            title="Proyectos a medida"
            text="Diseñamos cada sistema desde cero, adaptándolo a los requisitos técnicos, normativos y operativos de cada misión."
          />
          <ValueCard
            icon={Cpu}
            title="Ingeniería integral"
            text="Integramos electrónica, software y diseño mecánico en soluciones coherentes, verificadas y certificables."
          />
          <ValueCard
            icon={ShieldCheck}
            title="Fiabilidad certificada"
            text="Nuestros desarrollos cumplen estándares aeronáuticos y militares para garantizar seguridad y rendimiento." 
          />
          <ValueCard
            icon={Layers}
            title="Precisión sin compromiso"
            text="Cuidamos cada detalle del proceso para asegurar resultados robustos en entornos extremos y críticos." 
          />
        </motion.div>

        {/* ---------------- SECTORS ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-10"
        >
          <h3 className="text-4xl font-bold text-black text-center">
            Sectores en los que operamos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectorCard title="Aeroespacial" text="Sistemas electrónicos y optoelectrónicos para aeronaves y plataformas aéreas." />
            <SectorCard title="Defensa" text="Soluciones críticas certificables para entornos operativos de alta exigencia." />
            <SectorCard title="Industrial" text="Ingeniería avanzada aplicada a automatización, control e instrumentación." />
          </div>
        </motion.div>

        {/* ---------------- WAY OF WORKING ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-black">
              Nuestra forma de trabajar
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              Abordamos cada proyecto como un sistema único. Analizamos la misión,
              definimos requisitos, evaluamos riesgos y desarrollamos soluciones
              optimizadas desde la fase conceptual hasta la validación final.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Nuestro enfoque está orientado a la fiabilidad a largo plazo,
              integrando ingeniería, certificación y calidad en un único flujo
              de trabajo.
            </p>
          </div>
          <div className="bg-stone-100 rounded-3xl p-10 shadow-xl">
            <ul className="space-y-5 text-lg text-slate-800">
              <li>• Análisis técnico y funcional de cada misión</li>
              <li>• Desarrollo a medida bajo estándares internacionales</li>
              <li>• Validación, pruebas y soporte de ciclo de vida</li>
              <li>• Relación técnica directa con el cliente</li>
            </ul>
          </div>
        </motion.div>

        {/* ---------------- CLOSING ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-2xl font-semibold text-slate-800 leading-relaxed">
            Desarrollamos tecnología que no se reemplaza.
            <br />
            Se diseña para cumplir su misión.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ValueCard({ icon: Icon, title, text }) {
  return (
    <div className="p-8 border border-slate-200 rounded-2xl hover:shadow-xl transition-shadow">
      <Icon className="w-10 h-10 text-brand-blue mb-5" />
      <h4 className="text-xl font-bold mb-3 text-black">{title}</h4>
      <p className="text-slate-700 leading-relaxed">{text}</p>
    </div>
  );
}

function SectorCard({ title, text }) {
  return (
    <div className="p-10 bg-stone-100 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
      <h4 className="text-2xl font-semibold text-black mb-4">{title}</h4>
      <p className="text-slate-700 leading-relaxed">{text}</p>
    </div>
  );
}
