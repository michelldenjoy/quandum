import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Upload,
  CheckCircle,
  FileText,
  Rocket,
  ChevronRight,
  AlertCircle,
  Cpu,
} from "lucide-react";
import StarfieldNebula from "../3d/StarfieldNebula";

const positions = [
  { title: "Técnico de Mecanizado" },
  { title: "Programador CAM - CATIA" },
  { title: "Ingeniería Mecánica" },
  { title: "Ingeniería de Diseño" },
  { title: "Ingeniería Electrónica" },
  { title: "Técnico de Calidad" },
  { title: "Técnico de Mantenimiento" },
  { title: "Técnico de Electrónica" },
];

export default function Formulario() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    cv: null,
  });

  const [status, setStatus] = useState(""); // "success", "error", ""
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFileName(file.name);
      setFormData((prev) => ({ ...prev, cv: file }));
    } else {
      alert("Por favor, adjunte un archivo PDF válido.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.cv) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("success");
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

  return (
    <section className="relative min-h-screen  overflow-hidden flex items-center justify-center py-20 px-6">
      
      <div className="">
        <StarfieldNebula />
        <div  />
      </div>

      <div className="relative z-10 max-w-4xl w-full">
       
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-4"
          >

          </motion.div>
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

        </div>

        {/* CONTENEDOR DEL FORMULARIO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-slate-900/30 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          {/* LÍNEAS  */}
          <div className="absolute top-0 left-10 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <CheckCircle size={64} className="text-blue-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 uppercase">
                  Candidatura Recibida
                </h3>
                <p className="text-slate-400 max-w-sm mx-auto mb-8 font-light">
                  Su perfil ha sido integrado en nuestra base de datos técnica.
                  Revisaremos su CV en un plazo de 72 horas laborables.
                </p>
                <button
                  onClick={() => setStatus("")}
                  className="text-xs font-bold text-blue-400 uppercase tracking-widest hover:text-white transition-colors"
                >
                  Nueva Solicitud
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm"
                  >
                    <AlertCircle size={18} />
                    Complete todos los campos obligatorios y adjunte su CV.
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputLight
                    label="Nombre Completo *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <InputLight
                    label="Email Institucional *"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputLight
                    label="Teléfono"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                      Puesto de Interés
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Seleccionar Vacante</option>
                      {positions.map((p) => (
                        <option
                          key={p.title}
                          value={p.title}
                          className="bg-slate-900"
                        >
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                    Carta de Presentación (Opcional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describa brevemente su experiencia en el sector aeroespacial..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-all resize-none"
                  />
                </div>

                {/* ÁREA DE CARGA DE ARCHIVO Y SUBMIT */}
                <div className="flex flex-col md:flex-row gap-8 items-center pt-4">
                  <label className="w-full md:w-auto flex-1 flex items-center justify-between gap-4 p-4 rounded-xl cursor-pointer hover:bg-blue-500/10 transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg text-slate-200 group-hover:scale-110 transition-transform">
                        <FileText size={20} />
                      </div>
                      <span className="text-sm font-medium text-slate-300">
                        {fileName ? fileName : "Adjuntar CV (PDF)"}
                      </span>
                    </div>
                    <Upload
                      size={18}
                      className="text-slate-500 group-hover:text-blue-400"
                    />
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-24 bg-brand-blue/60 py-4 rounded-md text-sm uppercase hover:scale-105 tracking-widest text-white clip-path-diagonal border border-gray-500 hover:font-semibold hover:bg-brand-pink/60 hover:text-white transition-all duration-300"
                  >
                    {isSubmitting ? "Procesando..." : "Enviar Candidatura"}
                    
                  </button>
                </div>
              </form>
            )}
          </AnimatePresence>

          {/* DECORACIÓN INFERIOR */}
          <div className="mt-8 flex justify-between items-center opacity-30">
            <div className="flex gap-2">
              <div className="w-1 h-1 bg-slate-900 rounded-full" />
              <div className="w-1 h-1 bg-slate-900 rounded-full" />
              <div className="w-1 h-1 bg-slate-900 rounded-full" />
            </div>
            <span className="text-[8px] font-mono tracking-widest uppercase">
              Quandum Aerospace
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InputLight({ label, ...props }) {
  return (
    <div>
      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
        {label}
      </label>
      <input
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-all placeholder-slate-600"
        {...props}
      />
    </div>
  );
}
