export const products = [
    {
      id: 1,
      title: "IR Illuminator SubSystem",
      subtitle: "IRILL",
      hero: "/products/illuminator.jpg",
      gallery: [
        "/products/illuminator.jpg",
        "/products/illuminator2.jpg",
      ],
      image: "/products/illuminator.jpg",
      description:
        "Sistema de iluminación infrarroja de alta potencia diseñado para aplicaciones aeroespaciales en entornos de misión crítica. El iluminador forma parte del subsistema IRILL integrado en el BEVS (Boom Enhanced Vision System), instalado en plataformas A-330 MRTT y A-310 MRTT. El equipo presenta una arquitectura robusta y compacta, con carcasa metálica mecanizada y aletado térmico optimizado para disipación eficiente del calor en condiciones de operación continuada. Incorpora sistemas activos de refrigeración y conectividad aeronáutica mediante arneses blindados, garantizando fiabilidad eléctrica y térmica en entornos severos. Su diseño modular permite una integración directa en sistemas de repostaje en vuelo, proporcionando iluminación infrarroja homogénea del área de contacto de la pértiga (boom) y mejorando significativamente la percepción visual del Air Refuelling Operator (ARO) durante operaciones nocturnas o con baja visibilidad. El sistema ha sido desarrollado siguiendo criterios aeronáuticos de fiabilidad, mantenibilidad y compatibilidad electromagnética, asegurando su operación estable en plataformas de misión estratégica.",
      certifications: ["DO-178 DAL B"],
    },
    {
      id: 2,
      title: "Nozzle",
      subtitle: "Sistema de Tobera",
      hero: "/products/nozzle.jpg",
      gallery: [
        "/products/nozzle1.jpg",
        "/products/nozzle2.jpg",
      ],
      image: "/products/nozzle.jpg",
      description: "Sistema de iluminación aeronáutico diseñado para facilitar la localización visual precisa de la punta del boom de reabastecimiento en vuelo por parte de la aeronave receptora, incluso bajo condiciones de iluminación adversas, baja visibilidad o operaciones nocturnas. El sistema se integra directamente en plataformas MRTT A-330 y A-310 MRTT, garantizando una referencia visual fiable durante todas las fases del proceso de reabastecimiento en vuelo, contribuyendo a la seguridad operativa y a la reducción de carga de trabajo de la tripulación. El desarrollo del sistema incluye electrónica embarcada y software crítico certificado conforme a RTCA/DO-178, Nivel DAL-C, asegurando trazabilidad, verificación y cumplimiento de los requisitos de seguridad aeronáutica aplicables.",
      certifications: ["DO-178 DAL C"],
    },
    {
      id: 3,
      title: "Encoder",
      subtitle: "Sistema de Codificación",
      hero: "/products/encoder.jpg",
      gallery: [
        "/products/encoder1.jpg",
        "/products/encoder2.jpg",
      ],
      image: "/products/encoder.jpg",
      description: "Unidad electrónica de codificación diseñada para optimizar la gestión de señales entre el sistema de control y la consola del operador. El encoder reduce ocho señales discretas de entrada a únicamente tres, permitiendo una disminución significativa de la complejidad del cableado, el peso del sistema y el esfuerzo de instalación en plataformas aeronáuticas. El equipo está plenamente integrado en la plataforma A-330 MRTT, contribuyendo a una arquitectura de sistema más eficiente y robusta, con mejoras directas en fiabilidad y mantenibilidad para entornos de misión crítica.",
      certifications: ["DO-178 DAL C", "DO-254"],
    },
    {
      id: 4,
      title: "Radiation",
      subtitle: "Sistema de Protección",
      hero: "/products/radiation.jpg",
      gallery: [
        "/products/radiation1.jpg",
        "/products/radiation2.jpg",
      ],
      image: "/products/radiation.jpg",
      description: "El Precision Radiation Thermometer (PRT) es un sistema de medida térmica de alta precisión basado en tecnología de termometría infrarroja, diseñado para la adquisición de temperatura superficial en tiempo real sin contacto físico. El modelo PRT01F permite la medición continua de la temperatura de la superficie del mar durante operaciones aéreas, proporcionando datos fiables incluso en entornos marítimos exigentes. El sistema integra capacidades de control remoto, permitiendo al operador solicitar bajo demanda la transmisión de mediciones térmicas y estados operativos del equipo. El PRT01F está siendo actualmente integrado en distintos programas C-295 VIMAR (Vigilancia Marítima), donde contribuye a misiones de patrulla, monitorización ambiental y apoyo a operaciones de seguridad marítima, cumpliendo con los requisitos de fiabilidad y disponibilidad propios de plataformas de misión crítica.",
      certifications: ["DO-178 DAL C", "MIL-STD-883"],
    },
    {
      id: 5,
      title: "DCD",
      subtitle: "Dispositivo de Control de Iluminación para Repostaje en Vuelo",
      hero: "/products/dimming2.jpg",
      gallery: [
        "/products/dimming.jpg",
        "/products/dimming2.jpg",
      ],
      image: "/products/dimming2.jpg",
      description:
      "El Dimming Control Device (DCD) es un sistema diseñado para garantizar la visibilidad óptima de las Pilot Director Lights (PDL) durante las operaciones de repostaje en vuelo. Integrado en las luces de posicionamiento del avión cisterna, el DCD regula dinámicamente la intensidad luminosa para adaptar el sistema PDL a diferentes condiciones de iluminación, permitiendo al avión receptor identificar con precisión el punto exacto de posicionamiento. Esta optimización mejora la seguridad, la precisión operativa y la fiabilidad del proceso de reabastecimiento en entornos de misión crítica.",      certifications: ["DO-178 DAL C", "MIL-STD-883"],
    },
    {
      id: 6,
      title: "P.O.D Lighting System",
      subtitle: "Sistema de Iluminación para Repostaje en Vuelo",
      hero: "/products/POD.jpg",
      gallery: [
        "/products/POD.jpg",
        "/products/POD1.jpg",
      ],
      image: "/products/POD1.jpg",
      description:
      "Sistema de iluminación integrado en el BEVS e instalado en el Refueling POD de la plataforma A-330 MRTT. Las luces del POD proporcionan a la aeronave receptora una referencia visual clara del despliegue y la longitud de la manguera mediante una corona luminosa, asegurando una correcta percepción del estado del sistema en cualquier condición ambiental. Esta solución mejora la seguridad y la precisión durante las operaciones de repostaje en vuelo.",      certifications: ["DO-178 DAL C", "MIL-STD-883"],
    },
    {
      id: 7,
      title: "Hose Exchange & Inspection System",
      subtitle: "Sistema de inspección inteligente para reabastecimiento en vuelo",
      hero: "/products/heis.jpg",
      gallery: [
        "/products/heis.jpeg",
        "/products/ifhi.gif",
      ],
      image: "/products/heis.jpeg",
      description:
      "Unidad avanzada de inspección para mangueras de reabastecimiento en vuelo, diseñada para detectar de forma temprana defectos y degradaciones en la superficie de la manguera durante operaciones críticas. El sistema integra un conjunto distribuido de cámaras de alta resolución alrededor de la manguera, junto con iluminación de alta potencia, permitiendo una monitorización continua y precisa en tiempo real. Dispone de seis cámaras de alta resolución sincronizadas, fuentes de iluminación superiores a 1 kW y un sistema de seguimiento de manguera que garantiza la correcta adquisición de imágenes en cualquier condición operativa. La unidad incorpora procesamiento avanzado de imagen, compresión de vídeo H.265 y almacenamiento local, así como algoritmos de detección de fallos basados en inteligencia artificial. Esta arquitectura permite mejorar significativamente la seguridad, la fiabilidad operativa y el mantenimiento predictivo de los sistemas de reabastecimiento en vuelo. ",      certifications: ["DO-178 DAL C", "MIL-STD-883"],
    },
  ];