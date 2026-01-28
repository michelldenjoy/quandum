import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import StarfieldNebula from "../components/3d/StarfieldNebula";

export default function Contacto() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    company: "",
    email: "",
    phone: "",
    department: "general",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setForm({
        name: "",
        position: "",
        company: "",
        email: "",
        phone: "",
        department: "general",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Building2,
      title: "Sede Central",
      content: "Parque Tecnológico de Andalucía, Málaga · España",
    },
    { icon: Phone, title: "Centralita", content: "+34 952 02 06 54" },
    { icon: Mail, title: "Email", content: "info@quandum.com" },
    {
      icon: Clock,
      title: "Horario",
      content: "L-J: 08:00 – 17:30 | V: 08:00 – 14:00",
    },
  ];

  return (
    <div className="relative min-h-screen text-white selection:bg-blue-500/30 overflow-x-hidden">
      <div>
        <StarfieldNebula />
        <div />
      </div>


      <div className="relative z-10">
        {/* HERO */}
        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fadeIn">
            <h1 className="text-6xl md:text-7xl font-extralight mb-8">
              <span
                className="block animate-slideUp"
                style={{ animationDelay: "0.3s" }}
              >
                Contacte con
              </span>
              <span
                className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent font-bold animate-slideUp"
                style={{ animationDelay: "0.5s" }}
              >
                Quandum{" "}
              </span>
              <span
                className="bg-gradient-to-r from-brand-pink via-red-400 to-red-700 bg-clip-text text-transparent font-bold animate-slideUp"
                style={{ animationDelay: "0.5s" }}
              >
                Aerospace
              </span>
            </h1>

            <p
              className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto animate-fadeIn"
              style={{ animationDelay: "0.7s" }}
            >
              Compromiso absoluto con la confidencialidad, la precisión técnica
              y la excelencia en la comunicación con nuestros socios y clientes.
            </p>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* IZQUIERDA: INFO CORPORATIVA */}
            <div className="lg:col-span-5 space-y-8">
              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl group hover:border-blue-500/50 transition-all duration-500"
                  >
                    <div className="flex items-center gap-5">
                      <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                        <info.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-sm font-medium text-slate-200">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* MAPA  */}
              <div className="relative h-80 w-1000 rounded-3xl overflow-hidden border border-white/10 group">
                <iframe
                  title="Mapa Quandum"
                  className="w-full h-full invert opacity-90 group-hover:opacity-80 transition-opacity duration-1000"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAtxit6HPeuCWgxo0TLb6HnJlxQVVIS9eU&q=Calle+Severo+Ochoa+39%2C+Parque+Tecnol%C3%B3gico+de+Andaluc%C3%ADa%2C+29590+M%C3%A1laga%2C+Espa%C3%B1a&zoom=17&maptype=roadmap&language=es&region=ES"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 rounded-3xl" />

              </div>
            </div>

            {/* DERECHA: FORMULARIO   */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative p-8 md:p-12 bg-slate-900/30 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl"
              >
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="contact-form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          label="Nombre completo *"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                        />
                        <Input
                          label="Empresa *"
                          name="company"
                          required
                          value={form.company}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          label="Correo electrónico *"
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                        />
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                            Departamento
                          </label>
                          <select
                            name="department"
                            value={form.department}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-all appearance-none"
                          >
                            <option value="general">General</option>
                            <option value="engineering">Ingeniería</option>
                            <option value="certification">Certificación</option>
                          </select>
                        </div>
                      </div>

                      <Input
                        label="Asunto *"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                      />

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                          Mensaje Técnico *
                        </label>
                        <textarea
                          rows={4}
                          name="message"
                          required
                          value={form.message}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative w-full px-10 bg-brand-blue/60 py-4 text-sm uppercase border border-gray-500 hover:scale-105 hover:bg-brand-pink/60 tracking-[0.25em] font-medium  clip-path-diagonal transition-all duration-500"
                      >
                        {isSubmitting ? "Transmitiendo..." : "Enviar Mensaje"}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20 space-y-6"
                    >
                      <div className="flex justify-center">
                        <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                          <CheckCircle2 size={48} />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold uppercase italic">
                        Mensaje Recibido
                      </h3>
                      <p className="text-slate-400 max-w-sm mx-auto">
                        La transmisión se ha completado. Un ingeniero del
                        departamento correspondiente revisará su solicitud en
                        breve.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-blue-400 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors"
                      >
                        Enviar otra consulta
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Subcomponente Input
function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
        {label}
      </label>
      <input
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-blue-500 outline-none transition-all"
        {...props}
      />
    </div>
  );
}
