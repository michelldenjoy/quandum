import React, { useState } from "react";
import {
  Rocket,
  Users,
  Shield,
  Zap,
  Upload,
  CheckCircle,
  ArrowRight,
  Award,
} from "lucide-react";

/* -----------------------------------------------
   Listado estático de posiciones (fuera del componente)
------------------------------------------------ */
const positions = [
  {
    title: "Ingeniero/a Aeronáutico Senior",
    dept: "Estructuras & Aerodinámica",
    location: "Málaga, España",
    icon: Rocket,
  },
  {
    title: "Ingeniero/a Software Embebido",
    dept: "Aviónica DO-178C",
    location: "Málaga, España",
    icon: Zap,
  },
  {
    title: "Ingeniero/a Electrónica de Potencia",
    dept: "Sistemas Eléctricos",
    location: "Málaga, España",
    icon: Zap,
  },
  {
    title: "Técnico/a Superior de Producción",
    dept: "Montaje & Integración",
    location: "Málaga, España",
    icon: Users,
  },
  {
    title: "Ingeniero/a de Certificación",
    dept: "EASA / FAA Part 21",
    location: "Málaga, España",
    icon: Shield,
  },
  {
    title: "Diseñador/a Mecánico CAD",
    dept: "Diseño 3D & Simulación",
    location: "Málaga, España",
    icon: Award,
  },
];

/* -----------------------------------------------
   Input reutilizable
------------------------------------------------ */
function InputLight({ label, type = "text", ...props }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        {label}
      </label>
      <input
        type={type}
        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition"
        {...props}
      />
    </div>
  );
}

/* -----------------------------------------------
   Componente principal
------------------------------------------------ */
export default function Formulario() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    cv: null,
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* -----------------------------------------------
     Handle inputs
  ------------------------------------------------ */
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "cv" ? files[0] : value,
    }));
  };

  /* -----------------------------------------------
     Validación CV
  ------------------------------------------------ */
  const validateCV = () => {
    const file = formData.cv;
    if (!file) return false;

    const isPDF = file.type === "application/pdf";
    const sizeOK = file.size <= 10 * 1024 * 1024; // 10MB

    return isPDF && sizeOK;
  };

  /* -----------------------------------------------
     Submit
  ------------------------------------------------ */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!formData.name || !formData.email || !validateCV()) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("success");

      // Reset después de éxito
      setTimeout(() => setStatus(""), 7000);

      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
        cv: null,
      });
    }, 2000);
  };

  /* -----------------------------------------------
     Render
  ------------------------------------------------ */
  return (
    <section className="py-32 px-6 bg-mili">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-gray-100">
          Envía tu Candidatura
        </h2>
        <p className="text-center text-gray-200 mb-16">
          Únete a los mejores ingenieros aeronáuticos de Europa
        </p>

        <div className="bg-white border border-gray-300 rounded-2xl p-10 md:p-14 shadow-xl space-y-8">
          {/* Mensaje éxito */}
          {status === "success" && (
            <div className="p-6 bg-green-50 border border-green-200 rounded-xl flex items-center gap-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
              <div>
                <p className="text-green-800 font-semibold">
                  ¡Candidatura enviada!
                </p>
                <p className="text-green-600 text-sm mt-1">
                  Te contactaremos en 72h.
                </p>
              </div>
            </div>
          )}

          {/* Error */}
          {status === "error" && (
            <p className="text-red-600 text-center font-medium">
              Completa los campos obligatorios y adjunta un CV válido (PDF, máx. 10MB).
            </p>
          )}

          {/* FORMULARIO */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputLight
                label="Nombre completo *"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <InputLight
                type="email"
                label="Email *"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputLight
                type="tel"
                label="Teléfono"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Puesto de interés
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-blue-900 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition"
                >
                  <option value="">Seleccionar</option>
                  {positions.map((p) => (
                    <option key={p.title} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Mensaje (opcional)
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-blue-900 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition resize-none"
                placeholder="Certificaciones, disponibilidad, experiencia..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                <Upload className="w-4 h-4 inline mr-2" />
                Adjunta tu CV (PDF, máx. 10MB) *
              </label>
              <input
                type="file"
                name="cv"
                accept=".pdf"
                onChange={handleChange}
                className="block w-full text-sm text-gray-600 file:mr-6 file:py-3 file:px-6 file:rounded-lg file:border-0 file:bg-brand-blue file:text-white file:font-semibold hover:file:bg-slate-800 transition cursor-pointer"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full py-4 bg-gradient-to-r from-brand-blue via-slate-500 to-brand-blue hover:from-slate-900 hover:via-slate-500 hover:to-slate-900 hover:shadow-blue-300/30 hover:scale-105 text-white font-semibold text-lg rounded transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20 overflow-hidden group active:scale-[0.98]"
            >
              {isSubmitting ? "Enviando..." : "Enviar Candidatura"}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

