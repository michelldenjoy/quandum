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
import StarfieldNebula from "../3d/StarfieldNebula";
import { div } from "motion/react-client";
import QuandumParticles from "../3d/QuandumParticles";

/* -----------------------------------------------
   Listado estático de posiciones (fuera del componente)
------------------------------------------------ */
const positions = [
  {
    title: "Técnico de Mecanizado",
  },
  {
    title: "Programador CAM - CATIA",
  },
  {
    title: "Ingeniería Mecánica",
  },
  {
    title: "Ingeniería de Diseño",
  },
  {
    title: "Ingeniería Electrónica",
  },
  {
    title: "Técnico de Calidad",
  },
  {
    title: "Técnico de Mantenimiento",
  },
  {
    title: "Técnico de Electrónica",
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
  const [fileName, setFileName] = useState(null);

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
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
    <section className="relative py-32 px-6 bg-aerospace overflow-hidden ">
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-gray-100">
          Envía tu Candidatura
        </h2>
        <p className="text-center text-gray-200 mb-16">
          Únete a un equipo multidisciplinar donde tu talento impulsa misiones
          críticas y al desarrollo tecnológico.
        </p>

        <div className="bg-white/95 backdrop-blur-sm border border-gray-300 rounded-2xl p-10 md:p-14 shadow-xl space-y-8">
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
              Completa los campos obligatorios y adjunta un CV válido (PDF, máx.
              10MB).
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
              {/* LABEL */}
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                <Upload className="w-4 h-4 inline mr-2" />
                Adjunta tu CV (PDF, máx. 10MB) *
              </label>

              {/* BOTÓN FILE */}
              <label
                className={`inline-flex items-center justify-center gap-2 px-8 py-3 text-sm uppercase tracking-widest rounded-md border clip-path-diagonal cursor-pointer transition-all duration-300
      ${
        fileName
          ? "bg-transparent text-brand-blue border-brand-blue"
          : "bg-brand-blue text-gray-200 border-gray-500 hover:bg-transparent hover:text-brand-blue"
      }`}
              >
                <Upload className="w-4 h-4" />

                <span className="truncate max-w-[220px]">
                  {fileName ? fileName : "Seleccionar archivo"}
                </span>

                {/* INPUT OCULTO */}
                <input
                  type="file"
                  name="cv"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              {/* TEXTO DE APOYO */}
              {fileName && (
                <p className="mt-2 text-xs text-gray-500">
                  Archivo seleccionado
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 w-80 rounded-md text-sm uppercase tracking-widest text-gray-900 clip-path-diagonal border border-gray-500 hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              {isSubmitting ? "Enviando..." : "Enviar Candidatura"}
            </button>
          </form>

          {/* px-8 py-3 text-sm uppercase tracking-widest
        text-gray-200 
        clip-path-diagonal
        border border-gray-500
        hover:bg-brand-blue hover:text-black
        transition-all duration-300 */}
        </div>
      </div>
    </section>
  );
}
