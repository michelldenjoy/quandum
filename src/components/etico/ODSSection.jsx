import { motion } from "motion/react";

export default function ODSSection() {
  const ods = [
    {
      id: 7,
      title: "Energía asequible y no contaminante",
      description:
        "Promovemos eficiencia energética y reducción del impacto ambiental en nuestros procesos, productos y sistemas.",
      icon: "/ods/ods07.png",
      image: "/ods-bg/energy.jpg",
      color: "#FCC30B",
    },
    {
      id: 8,
      title: "Trabajo decente y crecimiento económico",
      description:
        "Fomentamos empleo cualificado, desarrollo profesional continuo y entornos de trabajo seguros.",
      icon: "/ods/ods08.png",
      image: "/ods-bg/work.jpg",
      color: "#A21942",
    },
    {
      id: 9,
      title: "Industria, innovación e infraestructura",
      description:
        "La innovación tecnológica y la ingeniería avanzada son el núcleo de nuestra actividad.",
      icon: "/ods/ods09.png",
      image: "/ods-bg/industry.jpg",
      color: "#FD6925",
    },
    {
      id: 12,
      title: "Producción y consumo responsables",
      description:
        "Aplicamos criterios de sostenibilidad, eficiencia y economía circular en nuestros procesos.",
      icon: "/ods/ods12.png",
      image: "/ods-bg/production.jpg",
      color: "#BF8B2E",
    },
    {
      id: 13,
      title: "Acción por el clima",
      description:
        "Reducimos emisiones y diseñamos soluciones alineadas con los retos climáticos globales.",
      icon: "/ods/ods13.png",
      image: "/ods-bg/climate.jpg",
      color: "#3F7E44",
    },
    {
      id: 17,
      title: "Alianzas para lograr los objetivos",
      description:
        "Colaboramos con clientes, socios e instituciones para impulsar la Agenda 2030.",
      icon: "/ods/ods17.png",
      image: "/ods-bg/alliances.jpg",
      color: "#19486A",
    },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 my-20">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl text-center font-black tracking-tight text-black mb-6"
          >
            Objetivos de Desarrollo Sostenible
          </motion.h3>
          
          {/* linea decorativa de titulo */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "60%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-brand-blue to-transparent rounded-full mb-8 mx-auto"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-600 text-justify text-base mx-auto sm:text-lg md:text-xl max-w-3xl leading-relaxed"
          >
            En Quandum Aerospace alineamos nuestra actividad con la Agenda 2030
            de Naciones Unidas y contribuimos activamente en áreas clave para un
            futuro sostenible.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ods.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative h-[340px] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              {/* Color de fondo base */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: item.color }}
              />

              {/* icono + imagen de fondo */}
              <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                {/* Background image */}
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />

                {/* Icono ODS */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={`ODS ${item.id}`}
                    className="w-40 h-40 drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Contenido hover (descripción) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center px-8">
                <span className="text-white text-sm font-semibold tracking-widest mb-3">
                  ODS {item.id}
                </span>

                <h3 className="text-white text-2xl font-bold leading-tight mb-4 text-center">
                  {item.title}
                </h3>

                <p className="text-white text-base leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
