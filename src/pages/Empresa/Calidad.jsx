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
                    
                    <span className="text-sm tracking-[0.3em] text-gray-500 font-medium uppercase">Declaración Oficial</span>
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

                <div className="grid md:grid-cols-2 gap-8  leading-relaxed">
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
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            
            {/* Objetivos */}
            <div className="bg-white p-12 lg:p-16">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-black text-white">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">Objetivos Estratégicos</h3>
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
                <h3 className="text-2xl text-slate-800 font-bold uppercase tracking-tight">Valores Fundamentales</h3>
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
       {/* SECCIÓN DEL SELLO (Mantenida como pediste, con un wrapper más limpio) */}
       <div className="flex bg-aerospacee  flex-col items-center py-20 relative">
             <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
             <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-12 relative z-10 bg-[#020617] px-8">Certificación Oficial</p>
             
             {/* --- INICIO SELLO ORIGINAL --- */}
             <div className="relative group scale-110 md:scale-125">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-sky-500/30 rounded-full blur-3xl scale-150 group-hover:scale-[1.7] transition-all duration-700" />
              <motion.div
                whileHover={{ scale: 1.035 }}
                className="relative w-72 h-72 rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl border-2 border-cyan-500/40 flex flex-col items-center justify-center group-hover:border-cyan-400/60 transition-all duration-500"
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.3),transparent_70%)]" />
                </div>
                <div className="absolute inset-8 border border-cyan-500/20 rounded-full" />
                <div className="absolute inset-16 border border-cyan-500/10 rounded-full" />
                <div className="relative text-center z-10">
                  <p className="text-6xl font-bold bg-gradient-to-br from-cyan-400 to-sky-500 bg-clip-text text-transparent tracking-wider">EN 9100</p>
                  <p className="text-2xl text-slate-400 mt-3 font-light">Rev. 2018</p>
                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent w-32 mx-auto mt-6 mb-6" />
                  <p className="text-xs text-cyan-400/80 tracking-[0.3em] font-semibold">CERTIFIED SYSTEM</p>
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-[10px] font-bold px-6 py-2 rounded-full shadow-lg">ISO 9001:2015</div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-600 to-cyan-600 text-white text-[10px] font-bold px-6 py-2 rounded-full shadow-lg">QUANDUM AEROSPACE</div>
              </motion.div>
            </div>
            {/* --- FIN SELLO ORIGINAL --- */}
          </div>
    </div>
  );
}