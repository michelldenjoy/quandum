import React, { useEffect } from "react";
import { Scale, MapPin, Mail, Phone, FileText } from "lucide-react";
import { motion } from "framer-motion"; 

export default function AvisoLegal() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 selection:bg-blue-100">
      {/* HEADER  */}
      <header className="pt-32 pb-16 px-6 md:px-12 border-b bg-aerospacee border-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase mb-4">
              Aviso <span className="text-brand-blue font-light">Legal</span>
            </h1>
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-slate-400">
              Información societaria y condiciones de uso
            </p>
          </motion.div>
        </div>
      </header>

      {/* CONTENEDOR PRINCIPAL */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="space-y-20">
        
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-6 w-1 bg-brand-blue rounded-full"></div>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight">
                Información Societaria (LSSI)
              </h2>
            </div>
            
            <p className="mb-10 text-slate-600 leading-relaxed max-w-3xl">
              En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de
              la Sociedad de la Información y de Comercio Electrónico (LSSI-CE),
              se facilitan los datos identificativos del titular:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <FileText className="text-brand-blue" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Denominación Social</p>
                    <p className="font-bold text-slate-800 text-lg">Quandum Aerospace, S.L.</p>
                    <p className="text-sm text-slate-500 font-mono">CIF: B-92786854</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <MapPin className="text-brand-blue" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Domicilio Social</p>
                    <p className="font-bold text-slate-800 leading-tight">Calle Severo Ochoa, 39, PTA</p>
                    <p className="text-sm text-slate-500">29590 Málaga, España</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <Mail className="text-brand-blue" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Contacto</p>
                    <p className="font-bold text-slate-800 border-b border-blue-200 inline-block">info@quandum.com</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <Phone className="text-brand-blue" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Teléfono</p>
                    <p className="font-bold text-slate-800">(+34) 952 020 654</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          
          <section className="max-w-4xl">
            <h2 className="text-xl font-bold mb-6 text-black uppercase tracking-tight">
              Protección de Datos Personales
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-pretty">
              <p>
                Quandum Aerospace garantiza la confidencialidad y seguridad de los
                datos facilitados. De acuerdo con el <strong>RGPD</strong>, le informamos que sus datos serán tratados por Quandum Aerospace, S.L. como responsable del tratamiento.
              </p>

              <div className="bg-blue-50/50 p-8 rounded-2xl border-l-4 border-blue-500 italic text-slate-700 shadow-inner">
                "La finalidad principal del tratamiento de sus datos es la gestión de los procesos de selección y ofertas laborales dentro de nuestra organización."
              </div>
            </div>
          </section>

          {/* 3. Derechos */}
          <section className="max-w-4xl pb-10">
            <h2 className="text-xl font-bold mb-6 text-black uppercase tracking-tight">
              Ejercicio de Derechos
            </h2>
            <p className="mb-8 text-slate-600 leading-relaxed">
              Puede ejercer sus derechos de <strong>acceso, rectificación, supresión y oposición</strong> mediante comunicación escrita a la siguiente dirección:
            </p>
            <div className="bg-slate-900 text-slate-300 p-8 md:p-10 rounded-3xl shadow-xl">
              <p className="font-bold text-white text-lg mb-2">Dpto. de Protección de Datos</p>
              <p className="opacity-80">Quandum Aerospace, S.L.</p>
              <p className="opacity-80">Calle Severo Ochoa, 39, Parque Tecnológico de Andalucía</p>
              <p className="opacity-80">29590 – Málaga, España</p>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-slate-400 font-bold">
            Quandum Aerospace © {new Date().getFullYear()} // Technical Legal Document
          </p>
        </div>
      </footer>
    </div>
  );
}