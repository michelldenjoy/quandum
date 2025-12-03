import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LogoSpinner from "./components/LogoSpinner";

// 🔴 Carga perezosa (lazy) para cada página
const Home = lazy(() => import("./pages/Home"));

// Empresa
const About = lazy(() => import("./pages/Empresa/About"));
const Infraestructuras = lazy(() => import("./pages/Empresa/Infraestructuras"));
const Historia = lazy(() => import("./pages/Empresa/Historia"));

// Servicios
const Hardware = lazy(() => import("./pages/Servicios/Hardware"));
const Software = lazy(() => import("./pages/Servicios/Software"));
const Mecanica = lazy(() => import("./pages/Servicios/Mecanica"));

// Proyectos
const ProyectosDestacados = lazy(() => import("./pages/Proyectos/ProyectosDestacados"));

// Sobre Quandum
const Calidad = lazy(() => import("./pages/SobreQuandum/Calidad"));
const Certificaciones = lazy(() => import("./pages/SobreQuandum/Certificaciones"));
const CodigoEtico = lazy(() => import("./pages/SobreQuandum/CodigoEtico"));
const EntornoResponsable = lazy(() => import("./pages/SobreQuandum/EntornoResponsable"));
const Oasis = lazy(() => import("./pages/SobreQuandum/Oasis"));
const Ncage = lazy(() => import("./pages/SobreQuandum/Ncage"));
const Reach = lazy(() => import("./pages/SobreQuandum/Reach"));

// Otras
const Prensa = lazy(() => import("./pages/Prensa"));
const TrabajaConNosotros = lazy(() => import("./pages/TrabajaConNosotros"));
const Contacto = lazy(() => import("./pages/Contacto"));

export default function MainRoutes() {
  return (
    
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-[50vh]">
          <LogoSpinner />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Empresa */}
        <Route path="/empresa/about" element={<About />} />
        <Route path="/empresa/infraestructuras" element={<Infraestructuras />} />
        <Route path="/empresa/historia" element={<Historia />} />

        {/* Servicios */}
        <Route path="/servicios/hardware" element={<Hardware />} />
        <Route path="/servicios/software" element={<Software />} />
        <Route path="/servicios/mecanica" element={<Mecanica />} />

        {/* Proyectos */}
        <Route path="/proyectos/destacados" element={<ProyectosDestacados />} />

        {/* Sobre Quandum */}
        <Route path="/sobre-quandum/calidad" element={<Calidad />} />
        <Route path="/sobre-quandum/certificaciones" element={<Certificaciones />} />
        <Route path="/sobre-quandum/codigo-etico" element={<CodigoEtico />} />
        <Route path="/sobre-quandum/entorno-responsable" element={<EntornoResponsable />} />
        <Route path="/sobre-quandum/oasis" element={<Oasis />} />
        <Route path="/sobre-quandum/ncage" element={<Ncage />} />
        <Route path="/sobre-quandum/reach" element={<Reach />} />

        {/* Otras */}
        <Route path="/prensa" element={<Prensa />} />
        <Route path="/trabaja-con-nosotros" element={<TrabajaConNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Suspense>
  );
}
