import { motion } from "framer-motion";

export default function Certifications() {
  const certifications = [
    {
      title: "ISO 9001:2015",
      description:
        "Quality Management System certification ensuring standardized processes and continuous improvement.",
      image: "/certifications/iso9001.png",
    },
    {
      title: "AS9100D",
      description:
        "International aerospace standard for quality and reliability in aviation manufacturing.",
      image: "/certifications/as9100.png",
    },
    {
      title: "NADCAP",
      description:
        "Global aerospace accreditation program for special processes and product compliance.",
      image: "/certifications/nadcap.png",
    },
    {
      title: "ISO 14001",
      description:
        "Environmental Management System focused on sustainability and operational responsibility.",
      image: "/certifications/iso14001.png",
    },
  ];

  return (
    <section className="w-full bg-neutral-950 text-white py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-brand-blue">
            Certifications
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
            Our commitment to aerospace excellence is supported by internationally recognized
            certifications that ensure world‑class quality, safety, and performance.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group bg-neutral-900/70 border border-neutral-800 rounded-2xl p-8 
                        hover:border-brand-blue/40 transition-all duration-300"
            >
              <div className="w-full h-28 flex items-center justify-center mb-6">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                />
              </div>

              <h3 className="text-xl font-semibold text-brand-pink tracking-wide mb-3">
                {cert.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
