import { motion } from "motion/react";

const features = [
  {
    title: "EXCELENCIA TÉCNICA.",
    tag: "EXPERTISE",
    image: "/images/about-3.jpg",
    description:
      "Contamos con dos décadas de experiencia colectiva en ingeniería aeronáutica, electrónica avanzada y diseño de sistemas críticos. Trabajamos bajo una premisa central: la innovación no es un objetivo, es un estándar diario.",
    secondParagraph:
      "El 95% de nuestro equipo está formado por ingenieros y especialistas altamente cualificados que desarrollan soluciones para aviación, defensa, espacio e industria. La cultura interna se basa en el rigor, la trazabilidad, la mejora continua y una obsesión absoluta por la calidad.",
    reverse: false,
  },
  {
    title: "COMPROMISO Y FIABILIDAD.",
    tag: "COMMITMENT",
    image: "/images/dimming.jpg",
    description:
      "Cada proyecto se desarrolla con una disciplina estricta: procesos auditables, diseño seguro, ingeniería certificable y soluciones robustas adaptadas a entornos operacionales exigentes.",
    secondParagraph:
      "Nuestro enfoque multidisciplinar nos permite trabajar con sistemas complejos, integrar tecnologías avanzadas y entregar resultados que cumplen los requisitos más estrictos de los sectores aeroespacial, defensa e industrial.",
    reverse: true,
  },
];

export default function AboutFeatures() {
  return (
    <section className="relative bg-white py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Blocks */}
        <div className="space-y-40">
          {features.map((f, i) => {
            const imageFrom = f.reverse ? 80 : -80;
            const textFrom = f.reverse ? -40 : 40;

            return (
              <div
                key={i}
                className="grid lg:grid-cols-12 gap-12 items-center"
              >
                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: imageFrom }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`relative col-span-7 ${
                    f.reverse ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={f.image}
                    alt={f.title}
                    className="w-full h-full object-cover rounded-sm"
                  />
                  <span className="absolute top-6 left-6 text-xs tracking-[0.4em] text-white/70 font-mono">
                    {f.tag}
                  </span>
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-sm pointer-events-none" />
                </motion.div>

                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: textFrom }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    ease: "easeOut",
                    delay: 0.15,
                  }}
                  className={`col-span-5 ${f.reverse ? "lg:order-1" : ""}`}
                >
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
                    {f.title}
                  </h3>

                  <p className="text-slate-900 text-lg leading-relaxed mb-6">
                    {f.description}
                  </p>

                  <p className="text-slate-900 text-lg leading-relaxed">
                    {f.secondParagraph}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}