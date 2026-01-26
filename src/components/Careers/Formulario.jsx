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
import { motion } from "motion/react";

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
function InputLight({
  label,
  type = "text",
  focused,
  onFocus,
  onBlur,
  ...props
}) {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-slate-300 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          required={label.includes("*")}
          onFocus={onFocus}
          onBlur={onBlur}
          className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/50 rounded-xl text-slate-200 focus:bg-black focus:ring-1 focus:ring-white  transition-all duration-300 outline-none hover:border-slate-600/50 placeholder-slate-500"
          {...props}
        />
        {focused && (
          <div className="absolute inset-0 rounded-xl bg-blue-500/10 pointer-events-none animate-fadeIn" />
        )}
      </div>
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
  const [focusedInput, setFocusedInput] = useState(null);

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
      setFormData((prev) => ({
        ...prev,
        cv: file,
      }));
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
      setFileName(null);
    }, 2000);
  };

  /* -----------------------------------------------
     Render
  ------------------------------------------------ */
  return (
    <section className="relative py-14 lg:py-32 lg:mt-8 bg-gradient-to-t from-black/5 via-brand-blue/20 to-black px-6 overflow-hidden ">
      <div className="relative z-1 max-w-3xl mx-auto">
        <StarfieldNebula />
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white text-3xl md:text-5xl font-semibold tracking-[0.25em] mb-9"
          >
            ÚNETE AL EQUIPO
          </motion.h2>
          <p className="text-slate-400 text-lg font-light tracking-wide max-w-xl mx-auto">
            Impulsa la ingeniería del futuro.
          </p>
        </div>

        <div className="relative bg-slate-900/30 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-10 md:p-14 shadow-2xl space-y-8">
          {/* Glow effect behind form */}
          <div className="absolute inset-0 -top-2 bg-gradient-to-l from-sky-900/80 via-blue-500/20 to-sky-700/80 rounded-3xl blur-2xl opacity-30 -z-10" />

          {/* Mensaje éxito */}
          {status === "success" && (
            <div className="relative p-6 bg-slate-950/80 border border-blue-500/30 backdrop-blur-md animate-scaleIn rounded-lg">
              <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400" />
              <p className="text-[11px] tracking-[0.3em] uppercase text-blue-400 mb-3">
                Transmission status · OK
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Tu candidatura ha sido registrada correctamente en el sistema.
                <br />
                Te contactaremos en un plazo máximo de
                <span className="text-blue-300 font-medium">
                  {" "}
                  72 horas laborables
                </span>
                .
              </p>
            </div>
          )}

          {/* Error */}
          {status === "error" && (
            <div className="relative p-6 bg-red-950/80 border border-red-500/30 backdrop-blur-md rounded-lg">
              <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-red-400 via-red-500 to-red-400" />
              <p className="text-sm text-red-300 leading-relaxed">
                Completa los campos obligatorios y adjunta un CV válido (PDF,
                máx. 10MB).
              </p>
            </div>
          )}

          {/* FORMULARIO */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputLight
                label="Nombre completo *"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedInput("name")}
                onBlur={() => setFocusedInput(null)}
                focused={focusedInput === "name"}
              />

              <InputLight
                type="email"
                label="Email *"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput(null)}
                focused={focusedInput === "email"}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputLight
                type="tel"
                label="Teléfono"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedInput("phone")}
                onBlur={() => setFocusedInput(null)}
                focused={focusedInput === "phone"}
              />

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Puesto de interés
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("position")}
                  onBlur={() => setFocusedInput(null)}
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700/50 rounded-xl text-slate-200 focus:ring-1 focus:ring-white focus:border-blue-500/50 transition-all duration-300 outline-none hover:border-slate-600/50"
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
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Mensaje (opcional)
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedInput("message")}
                onBlur={() => setFocusedInput(null)}
                className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/50 rounded-xl text-slate-200 focus:ring-1 focus:ring-white focus:bg-black transition-all duration-300 resize-none outline-none hover:border-slate-600/50 placeholder-slate-500"
                placeholder="Certificaciones, disponibilidad, experiencia..."
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* BOTÓN FILE */}
              <label
                className={`inline-flex items-center justify-center gap-2 px-8 py-3 text-sm uppercase tracking-widest rounded-md border clip-path-diagonal hover:scale-105 cursor-pointer transition-all duration-300
      ${
        fileName
          ? "bg-transparent text-brand-blue border-brand-blue"
          : "bg-transparent text-gray-200 border-gray-500 hover:bg-brand-blue hover:text-white"
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

              {/* BOTÓN ENVIAR */}
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="px-8 py-3 w-full md:w-auto bg-brand-blue hover:scale-105 rounded-md text-sm uppercase tracking-widest text-white clip-path-diagonal border border-gray-500 hover:bg-transparent hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar Candidatura"}
              </button>
            </div>

            {/* TEXTO DE APOYO */}
            {fileName && (
              <p className="mt-2 text-xs text-slate-400">
                Archivo seleccionado
              </p>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
