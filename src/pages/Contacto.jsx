import { useState } from "react";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Send,
  Shield,
  Globe,
  Clock,
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
  const [focusedInput, setFocusedInput] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
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
    }, 1600);
  };

  const contactInfo = [
    {
      icon: Building2,
      title: "Sede Central",
      content: (
        <>
          Calle Severo Ochoa, 39
          <br />
          Parque Tecnológico de Andalucía
          <br />
          29590 Málaga · España
        </>
      ),
      delay: 100,
    },
    {
      icon: Phone,
      title: "Centralita",
      content: (
        <span className="font-mono text-blue-400 text-lg">
          +34 952 02 06 54
        </span>
      ),
      delay: 200,
    },
    {
      icon: Mail,
      title: "Correo institucional",
      content: (
        <span className="font-mono text-blue-400 text-lg break-all">
          info@quandum.com
        </span>
      ),
      delay: 300,
    },
    {
      icon: Clock,
      title: "Horario de atención",
      content: (
        <>
          Lunes a jueves: 08:00 – 17:30 CET
          <br />
          Viernes: 08:00 – 14:00
          <br />
          Respuesta garantizada en menos de 24h laborables
        </>
      ),
      delay: 400,
    },
  ];

  return (
    <div className="relative min-h-screen ">
      <StarfieldNebula />

      {/* HERO */}
      <section className="relative border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fadeIn">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-8 animate-scaleIn">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">
                Contacto Institucional
              </span>
            </div> */}

            <h1 className="text-6xl md:text-7xl font-extralight text-white tracking-tight mb-8">
              <span
                className="block animate-slideUp"
                style={{ animationDelay: "0.3s" }}
              >
                Conecte con
              </span>
              <span
                className="block font-medium bg-gradient-to-r from-blue-900 via-slate-300 to-blue-400 bg-clip-text text-transparent animate-slideUp"
                style={{ animationDelay: "0.5s" }}
              >
                Quandum{" "}
                <span className="bg-gradient-to-r from-brand-pink via-red-400 to-red-700 bg-clip-text">
                  Aerospace{" "}
                </span>
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

        {/* Decorative line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-96 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-scaleX" />
      </section>

      {/* MAIN CONTENT */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* LEFT: Información corporativa */}
            <div className="space-y-16 order-2 lg:order-1">
              <div className="animate-slideInLeft">
                <h2 className="text-4xl font-extralight text-white mb-12 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                  Canales Oficiales
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <ContactCard key={index} item={item} />
                  ))}
                </div>
              </div>

              {/* Google Map */}
              <div
                className="relative rounded-2xl overflow-hidden border border-slate-800/50 shadow-2xl h-96 lg:h-[500px] group animate-slideUp"
                style={{ animationDelay: "0.2s" }}
              >
                {/* Glow effect on hover */}
                <div className="absolute bg-gradient-to-t from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                <iframe
                  title="Quandum Aerospace - Málaga"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAtxit6HPeuCWgxo0TLb6HnJlxQVVIS9eU&q=Calle+Severo+Ochoa+39%2C+Parque+Tecnol%C3%B3gico+de+Andaluc%C3%ADa%2C+29590+M%C3%A1laga%2C+Espa%C3%B1a&zoom=17&maptype=roadmap&language=es&region=ES"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-blue via-slate-950/60 to-transparent p-4 pointer-events-none z-10">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg backdrop-blur-sm border border-blue-500/30">
                      <MapPin className="w-5 h-5 text-blue-400 drop-shadow-lg" />
                    </div>
                    <div>
                      <p className="text-lg  font-semibold text-white drop-shadow-lg">
                        Quandum Aerospace
                      </p>
                      <p className="text-sm text-slate-300 drop-shadow">
                        PTA · Málaga, España
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}

            <div className="relative animate-slideInRight order-1 lg:order-2">
              {/* Glow effect behind form */}
              <div className="absolute h-[88%] sm:h-[92%] md:h-[95%] lg:h-[75%] inset-1 -top-2 bottom-0 bg-gradient-to-l from-blue-400/80 via-cyan-500/20 to-blue-400/80 rounded-3xl blur-2xl opacity-30" />
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-10 space-y-8 shadow-2xl">
                {submitted && (
                  <div className="p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center gap-3 text-emerald-300 backdrop-blur-sm animate-scaleIn">
                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                      <Shield className="w-5 h-5 text-emerald-400" />
                    </div>
                    <p className="font-medium text-sm">
                      Mensaje recibido correctamente. Un especialista le
                      contactará en menos de 24 horas.
                    </p>
                  </div>
                )}
                <h2 className="text-4xl font-extralight text-white mb-8 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                  Formulario de Contacto
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Input
                    label="Nombre completo *"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput("name")}
                    onBlur={() => setFocusedInput(null)}
                    focused={focusedInput === "name"}
                  />
                  <Input
                    label="Cargo *"
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    placeholder="Ej: Director de Ingeniería"
                    onFocus={() => setFocusedInput("position")}
                    onBlur={() => setFocusedInput(null)}
                    focused={focusedInput === "position"}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Input
                    label="Empresa / Institución *"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput("company")}
                    onBlur={() => setFocusedInput(null)}
                    focused={focusedInput === "company"}
                  />
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Departamento de interés
                    </label>
                    <select
                      name="department"
                      value={form.department}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput("department")}
                      onBlur={() => setFocusedInput(null)}
                      className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700/50 rounded-xl text-slate-200 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 outline-none hover:border-slate-600/50"
                    >
                      <option value="general">General</option>
                      <option value="engineering">
                        Ingeniería y Desarrollo
                      </option>
                      <option value="procurement">
                        Compras y Supply Chain
                      </option>
                      <option value="certification">
                        Certificación EASA/FAA
                      </option>
                      <option value="defense">Proyectos de Defensa</option>
                      <option value="executive">Dirección Ejecutiva</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Input
                    type="email"
                    label="Correo electrónico *"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput("email")}
                    onBlur={() => setFocusedInput(null)}
                    focused={focusedInput === "email"}
                  />
                  <Input
                    type="tel"
                    label="Teléfono"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput("phone")}
                    onBlur={() => setFocusedInput(null)}
                    focused={focusedInput === "phone"}
                  />
                </div>

                <Input
                  label="Asunto *"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput("subject")}
                  onBlur={() => setFocusedInput(null)}
                  focused={focusedInput === "subject"}
                />

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput("message")}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700/50 rounded-xl text-slate-200 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none outline-none hover:border-slate-600/50 placeholder-slate-500"
                    placeholder="Describa su consulta técnica, requerimiento de certificación o interés estratégico..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="relative w-full py-5 bg-gradient-to-r from-brand-blue via-slate-500 to-brand-blue hover:from-slate-900 hover:via-slate-500 hover:to-slate-900 hover:shadow-blue-300/30 hover:scale-105 text-white font-semibold text-lg rounded-tl-3xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20 overflow-hidden group active:scale-[0.98]"
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <Send
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isSubmitting
                        ? "animate-pulse"
                        : "group-hover:translate-x-1"
                    }`}
                  />
                  <span className="relative">
                    {isSubmitting ? "Enviando mensaje seguro..." : "Enviar "}
                  </span>
                </button>

                {/* <div className="pt-6 border-t border-slate-800/50">
                  <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-blue-400" />
                    Comunicación cifrada y protegida según RGPD y protocolos
                    corporativos de seguridad
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleX {
          from { transform: translateX(-50%) scaleX(0); }
          to { transform: translateX(-50%) scaleX(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-out forwards;
          opacity: 0;
        }
        .animate-slideInRight {
          animation: slideInRight 0.7s ease-out forwards;
          opacity: 0;
        }
        .animate-scaleX {
          animation: scaleX 1.2s ease-out 0.5s forwards;
          transform: translateX(-50%) scaleX(0);
        }
      `}</style>
    </div>
  );
}

// Contact Card Component
function ContactCard({ item }) {
  return (
    <div
      className="group relative"
      style={{
        animation: `slideUp 0.6s ease-out ${item.delay}ms forwards`,
        opacity: 0,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative flex gap-3 sm:gap-5 p-4 sm:p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group-hover:translate-x-2">
        <div className="flex-shrink-0">
          <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30 group-hover:border-blue-400/50 transition-colors duration-300">
            <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
          </div>
        </div>
        <div className="flex-1 min-w-0 overflow-hidden">
          <p className="font-medium text-slate-200 mb-2 text-sm sm:text-base group-hover:text-white transition-colors duration-300">
            {item.title}
          </p>
          <div className="text-slate-400 leading-relaxed text-xs sm:text-sm group-hover:text-slate-300 transition-colors duration-300 break-words">
            {item.content}
          </div>
        </div>

        {/* Subtle indicator */}
        <div className="absolute top-1/2 right-4 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}

// Input Component
function Input({ label, type = "text", focused, onFocus, onBlur, ...props }) {
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
          className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700/50 rounded-xl text-slate-200 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 outline-none hover:border-slate-600/50 placeholder-slate-500"
          {...props}
        />
        {/* Animated glow on focus */}
        {focused && (
          <div className="absolute inset-0 rounded-xl bg-blue-500/10 pointer-events-none animate-fadeIn" />
        )}
      </div>
    </div>
  );
}
