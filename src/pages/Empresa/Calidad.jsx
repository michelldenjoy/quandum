import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Target, Award, CheckCircle2, Bookmark } from "lucide-react";
import HeroVideo from "../../components/about/HeroVideo";

export default function Calidad() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="bg-white selection:bg-brand-blue selection:text-white">
      <HeroVideo
        eyebrow="Excelencia Operativa"
        title="Política de Calidad"
        description="El marco normativo que rige cada uno de nuestros procesos de precisión."
        backgroundImage="/ods-bg/production.jpg"
      />

      {/* SECCIÓN MANIFIESTO */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Fondo  */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t-4 border-black pt-12"
          >
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <div className="sticky top-24">
                  <div className="flex items-center gap-2 mb-4 text-brand-blue">
                    
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">Declaración Oficial</span>
                  </div>
                  <h2 className="text-4xl font-bold tracking-tighter text-black leading-none uppercase">
                    Compromiso <br /> Quandum
                  </h2>
                </div>
              </div>

              <div className="md:col-span-8 space-y-8 text-gray-600">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-black italic">
                  "La Dirección de Quandum Aerospace establece la presente Política como marco de referencia para el desarrollo de todas sus actividades en los sectores <span className="text-brand-blue font-semibold">aeronáutico, defensa e industrial</span>."
                </p>
                
                <div className="h-px bg-gray-200 w-24" />

                <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed">
                  <p>
                    Conscientes de la importancia de la seguridad y la fiabilidad en sistemas de alta exigencia, la organización mantiene un firme compromiso con la satisfacción del cliente y el cumplimiento normativo.
                  </p>
                  <p>
                    Mantenemos un Sistema de Gestión conforme a las normas <span className="font-bold text-black underline decoration-brand-blue underline-offset-4">EN 9100:2018</span> e <span className="font-bold text-black underline decoration-brand-blue underline-offset-4">ISO 9001:2015</span>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN OBJETIVOS Y VALORES  */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            
            {/* Objetivos */}
            <div className="bg-white p-12 lg:p-16">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-black text-white">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">Objetivos Estratégicos</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Concienciación del equipo directivo en calidad",
                  "Indicadores medibles en procesos críticos",
                  "Participación activa del capital humano",
                  "Formación técnica continua y especializada"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start group">
                    <span className="text-brand-blue font-mono font-bold">0{i+1}.</span>
                    <span className="text-gray-600 group-hover:text-black transition-colors uppercase text-xs tracking-widest font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Valores */}
            <div className="bg-white p-12 lg:p-16">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-brand-blue text-white">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">Valores Fundamentales</h3>
              </div>
              <div className="grid sm:grid-cols-1 gap-4">
                {[
                  "Enfoque absoluto al cliente",
                  "Gestión integral por procesos",
                  "Análisis preventivo de riesgos",
                  "Cultura de mejora continua"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 border border-gray-100 group hover:border-black transition-all">
                    <CheckCircle2 size={16} className="text-brand-blue" />
                    <span className="text-[11px] font-bold uppercase tracking-tighter text-gray-500 group-hover:text-black">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN SELLO */}
      <section className="py-32  px-6">
        <div className="max-w-4xl  mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative inline-block"
          >
            {/*  Círculo*/}
            <div className="w-80 h-80 rounded-full border-[1px] border-gray-100 flex items-center justify-center relative">
               <div className="absolute inset-4 border-[1px] border-gray-200 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
               
               <div className="text-center z-10 bg-white px-10">
                  <p className="text-[10px] tracking-[0.5em] text-gray-400 uppercase mb-2 italic">Standard</p>
                  <h4 className="text-5xl font-black text-black tracking-tighter">EN 9100</h4>
                  <div className="h-1 w-12 bg-brand-blue mx-auto my-4" />
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Revision 2018</p>
               </div>
            </div>

            {/* Badges */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm">
              ISO 9001:2015
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm">
              Certified Systems
            </div>
          </motion.div>

          <div className="mt-20">
            <h5 className="text-3xl md:text-4xl font-extralight text-gray-400 italic leading-relaxed max-w-2xl mx-auto">
              "Nuestra misión es la <span className="text-black font-semibold">precisión absoluta</span> en cada entrega aeronáutica."
            </h5>
          </div>
        </div>
      </section>
    </div>
  );
}