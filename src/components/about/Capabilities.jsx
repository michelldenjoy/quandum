const Capabilities = () => {
    return (
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-white mb-6">
          Nuestras Capacidades
        </h2>
  
        <p className="text-gray-100 mb-10 max-w-3xl">
          Desarrollamos soluciones electrónicas avanzadas para el sector aeroespacial,
          cumpliendo con los más altos estándares de calidad, seguridad y certificación.
        </p>
  
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Integración de sistemas y desarrollos I+D+i",
            "Diseño de prototipos a cualquier escala en diversos materiales",
            "Diseño de hardware bajo estándares y normativas militares",
            "Desarrollo de software bajo normativa RTCA/DO-178B",
            "Proyectos de instrumentación, automatización, robótica y control",
            "Diseño mecánico mediante herramientas CAD/CAM",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              
              <p className="text-gray-800 leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Capabilities;
  