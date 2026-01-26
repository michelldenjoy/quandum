export const products = [
    {
      id: 1,
      title: "IR Illuminator SubSystem",
      subtitle: "IRILL",
      hero: "/products/illuminator.jpg",
      gallery: [
        "/products/illuminator1.jpg",
        "/products/illuminator2.jpg",
      ],
      description:
        "Sistema de iluminación por infrarrojos basado en tecnología láser, integrado en el sistema BEVS. Proporciona iluminación infrarroja de alta potencia para aplicaciones de visión nocturna y sistemas de vigilancia aeroespacial. Diseñado para cumplir con los más altos estándares de la industria aeronáutica, garantizando fiabilidad y rendimiento en condiciones extremas.",
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
      description: "Sistema de medición térmica de alta precisión basado en termometría infrarroja, diseñado para la adquisición en tiempo real de la temperatura de la superficie del mar durante operaciones aéreas. El PRT01F permite al operador solicitar de forma remota la transmisión de datos, incluyendo mediciones de temperatura y estados de funcionamiento del sistema, facilitando su integración en misiones de vigilancia y patrulla marítima. Este equipo se encuentra actualmente en proceso de integración en diversos programas C-295 VIMAR (Maritime Patrol), aportando capacidad de sensorización avanzada y fiabilidad operativa en entornos exigentes.",
      certifications: ["DO-178 DAL C", "MIL-STD-883"],
    }
  ];