// src/pages/ContactPage.jsx
import { useState } from "react";
import { motion } from "motion/react";
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

export default function ContactPage() {
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

    // Simulación de backend )
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

  const GOOGLE_MAPS_API_KEY = "AIzaSyAtxit6HPeuCWgxo0TLb6HnJlxQVVIS9eU";

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      {/* HERO */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
              Contacto Institucional
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              Quandum Aerospace mantiene un compromiso absoluto con la
              confidencialidad, la precisión técnica y la excelencia en la
              comunicación con sus socios y clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* LEFT: Información corporativa */}
            <div className="space-y-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-light text-gray-900 mb-10">
                  Canales Oficiales
                </h2>

                <div className="space-y-10 text-gray-700">
                  <div className="flex gap-5">
                    <div className="p-3 bg-brand-blue/10 rounded-lg">
                      <Building2 className="w-7 h-7 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Sede Central</p>
                      <p className="mt-2 leading-relaxed">
                        Calle Severo Ochoa, 39
                        <br />
                        Parque Tecnológico de Andalucía
                        <br />
                        29590 Málaga · España
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="p-3 bg-brand-blue/10 rounded-lg">
                      <Phone className="w-7 h-7 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Centralita</p>
                      <p className="mt-2 font-mono text-brand-blue text-lg">
                        +34 952 02 06 54
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="p-3 bg-brand-blue/10 rounded-lg">
                      <Mail className="w-7 h-7 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Correo institucional
                      </p>
                      <p className="mt-2 font-mono text-brand-blue text-lg break-all">
                        info@quandum.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="p-3 bg-brand-blue/10 rounded-lg">
                      <Clock className="w-7 h-7 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Horario de atención
                      </p>
                      <p className="mt-2">
                        Lunes a jueves: 08:00 – 17:30 CET
                        <br /> Viernes: 08:00 – 14:00 <br />
                        Respuesta garantizada en menos de 24h laborables
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* google map formato nuevo embebido */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-xl overflow-hidden border border-gray-200 shadow-xl h-96 lg:h-[500px]"
              >
                <iframe
                  title="Quandum Aerospace - Málaga"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAtxit6HPeuCWgxo0TLb6HnJlxQVVIS9eU&q=Calle+Severo+Ochoa+39%2C+Parque+Tecnol%C3%B3gico+de+Andaluc%C3%ADa%2C+29590+M%C3%A1laga%2C+Espa%C3%B1a&zoom=17&maptype=roadmap&language=es&region=ES"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white pointer-events-none">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-brand-pink drop-shadow-lg" />
                    <div>
                      <p className="text-lg font-semibold drop-shadow">
                        Quandum Aerospace
                      </p>
                      <p className="text-sm opacity-90 drop-shadow">
                        PTA · Málaga, España
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white border border-gray-200 rounded-xl p-10 shadow-xl space-y-8"
            >
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-5 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-800"
                >
                  <Shield className="w-5 h-5" />
                  <p className="font-medium">
                    Mensaje recibido correctamente. Un especialista le
                    contactará en menos de 24 horas.
                  </p>
                </motion.div>
              )}

              <div className="grid grid-cols-2 gap-6">
                <Input
                  label="Nombre completo *"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                <Input
                  label="Cargo *"
                  name="position"
                  value={form.position}
                  onChange={handleChange}
                  placeholder="Ej: Director de Ingeniería"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Input
                  label="Empresa / Institución *"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Departamento de interés
                  </label>
                  <select
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition"
                  >
                    <option value="general">General</option>
                    <option value="engineering">Ingeniería y Desarrollo</option>
                    <option value="procurement">Compras y Supply Chain</option>
                    <option value="certification">
                      Certificación EASA/FAA
                    </option>
                    <option value="defense">Proyectos de Defensa</option>
                    <option value="executive">Dirección Ejecutiva</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Input
                  type="email"
                  label="Correo electrónico *"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                <Input
                  type="tel"
                  label="Teléfono"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <Input
                label="Asunto *"
                name="subject"
                value={form.subject}
                onChange={handleChange}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition resize-none"
                  placeholder="Describa su consulta técnica, requerimiento de certificación o interés estratégico..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-brand-blue hover:bg-brand-blue/90 text-white font-medium text-lg rounded-lg transition flex items-center justify-center gap-3 disabled:opacity-70 shadow-lg"
              >
                <Send className="w-5 h-5" />
                {isSubmitting
                  ? "Enviando mensaje seguro..."
                  : "Enviar comunicación"}
              </motion.button>

              <p className="text-xs text-gray-500 text-center pt-4 border-t border-gray-200">
                <Shield className="w-4 h-4 inline mr-1" />
                Todos los datos se transmiten mediante canal cifrado y se tratan
                conforme al RGPD y a nuestros protocolos internos de seguridad
                nivel corporativo.
              </p>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}

// Componente reutilizable para inputs 
function Input({ label, type = "text", ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        required={label.includes("*")}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition"
        {...props}
      />
    </div>
  );
}
