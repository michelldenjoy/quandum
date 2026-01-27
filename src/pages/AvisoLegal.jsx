import React, { useEffect } from "react";
import { Scale, MapPin, Mail, Phone, FileText } from "lucide-react";
import { motion } from "motion/react";

export default function AvisoLegal() {
  // que cargue desde arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6 italic-text-prevention text-slate-900">
      <div className="max-w-4xl mx-auto">
        
       
        <header className="mb-16 border-b border-slate-100 pb-12 text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-4">

          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">
            Aviso <span className="text-brand-blue font-light">Legal</span>
          </h1>
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400">
            Información societaria y condiciones de uso
          </p>
        </header>

        <main className="space-y-16 text-justify leading-relaxed">
          
          {/* 1. Información General */}
          <section className="relative">
            
            <h2 className="text-xl font-bold mb-6 text-black flex items-center gap-2">
               Información Societaria (LSSI)
            </h2>
            <p className="mb-8 text-slate-600">
              En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información 
              y de Comercio Electrónico (LSSI-CE), se facilitan a continuación los datos identificativos del 
              titular de este sitio web:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-colors">
                <div className="flex items-start gap-4">
                  <FileText className="text-slate-400 mt-1" size={20} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Denominación Social</p>
                    <p className="font-bold text-slate-800">Quandum Aerospace, S.L.</p>
                    <p className="text-sm text-slate-500">CIF: B-92786854</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-colors">
                <div className="flex items-start gap-4">
                  <MapPin className="text-slate-400 mt-1" size={20} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Domicilio Social</p>
                    <p className="font-bold text-slate-800 leading-tight">
                      María Curie, nº4 D-9. Parque Tecnológico de Andalucía
                    </p>
                    <p className="text-sm text-slate-500 text-pretty">29590 Málaga (SPAIN)</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-colors">
                <div className="flex items-start gap-4">
                  <Mail className="text-slate-400 mt-1" size={20} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Contacto Electrónico</p>
                    <p className="font-bold text-slate-800 underline decoration-slate-200 underline-offset-4">info@quandum.com</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-colors">
                <div className="flex items-start gap-4">
                  <Phone className="text-slate-400 mt-1" size={20} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Atención Telefónica</p>
                    <p className="font-bold text-slate-800">(+34) 952 020 654</p>
                    <p className="text-sm text-slate-500 italic">Fax disponible en el mismo número</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 2. Protección de Datos */}
          <section className="relative">
            
            <h2 className="text-xl font-bold mb-6 text-black uppercase tracking-tight">
              Protección de Datos de Carácter Personal
            </h2>
            <div className="space-y-6 text-slate-600">
              <p>
                Quandum Aerospace garantiza la confidencialidad y seguridad de los datos facilitados por los usuarios. 
                De acuerdo con el Reglamento General de Protección de Datos (RGPD) y la normativa nacional vigente, 
                le informamos que sus datos serán tratados por <strong>Quandum Aerospace, S.L.</strong> como responsable del tratamiento.
              </p>
              
              <div className="bg-blue-50/50 p-6 rounded-2xl border-l-4 border-blue-500 italic text-slate-700">
                "La finalidad principal del tratamiento de sus datos curriculares es la gestión de los procesos de selección 
                de personal y ofertas laborales actuales o futuras dentro de nuestra organización."
              </div>

              <p>
                Quandum Aerospace, S.L. se compromete a no ceder sus datos a terceros sin consentimiento previo, 
                salvo obligación legal, y a utilizarlos exclusivamente para los fines de comunicación profesional 
                y reclutamiento mencionados.
              </p>
            </div>
          </section>

         
          <section className="relative">
            
            <h2 className="text-xl font-bold mb-6 text-black uppercase tracking-tight">
              Ejercicio de Derechos
            </h2>
            <p className="mb-6 text-slate-600">
              Usted tiene derecho a obtener confirmación sobre si en Quandum Aerospace, S.L. estamos tratando sus datos personales. 
              Puede ejercer sus derechos de <strong>acceso, rectificación, supresión y oposición</strong>, así como la limitación del 
              tratamiento y portabilidad, mediante comunicación escrita a:
            </p>
            <motion.address className="not-italic bg-slate-50 p-8 rounded-3xl border border-slate-100 text-slate-800 inline-block w-full">
              <p className="font-bold">Dpto. de Protección de Datos</p>
              <p>Quandum Aerospace, S.L.</p>
              <p>Calle Marie Curie, nº4 D-9. Parque Tecnológico de Andalucía</p>
              <p>29590 – Málaga, España</p>
            </motion.address>
          </section>

        </main>

        <footer className="mt-20 pt-12 border-t border-slate-100 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold">
            Quandum Aerospace © {new Date().getFullYear()} // Technical Legal Document
          </p>
        </footer>
      </div>
    </div>
  );
}