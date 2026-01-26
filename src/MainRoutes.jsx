import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LogoSpinner from "./components/LogoSpinner";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AvisoLegal from "./pages/AvisoLegal";

// 🔴 Carga perezosa (lazy) para cada página
const Home = lazy(() => import("./pages/Home"));

// Empresa
const QuienesSomos = lazy(() => import("./pages/Empresa/QuienesSomos"));
const Infraestructuras = lazy(() => import("./pages/Empresa/Infraestructuras"));
const Historia = lazy(() => import("./pages/Empresa/Historia"));

// Servicios
const Hardware = lazy(() => import("./pages/Servicios/Hardware"));
const Software = lazy(() => import("./pages/Servicios/Software"));
const Mecanica = lazy(() => import("./pages/Servicios/Mecanica"));

// Proyectos
const ProyectosDestacados = lazy(() => import("./pages/Proyectos/ProyectosDestacados"));
const ProjectDetail = lazy(() => import("./pages/Proyectos/ProjectDetail"));

// Sobre Quandum
const Calidad = lazy(() => import("./pages/Empresa/Calidad"));
const Certificaciones = lazy(() => import("./pages/Empresa/Certificaciones"));
const CodigoEtico = lazy(() => import("./pages/Empresa/CodigoEtico"));
const EntornoResponsable = lazy(() => import("./pages/Empresa/EntornoResponsable"));

// Otras
const Prensa = lazy(() => import("./pages/Prensa"));
const TrabajaConNosotros = lazy(() => import("./pages/Empresa/TrabajaConNosotros"));
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
        <Route path="/empresa/about" element={<QuienesSomos />} />
        <Route path="/empresa/infraestructuras" element={<Infraestructuras />} />
        <Route path="/empresa/historia" element={<Historia />} />

        {/* Servicios */}
        <Route path="/servicios/hardware" element={<Hardware />} />
        <Route path="/servicios/software" element={<Software />} />
        <Route path="/servicios/mecanica" element={<Mecanica />} />

        {/* Proyectos */}
        <Route path="/proyectos/destacados" element={<ProyectosDestacados />} />
        <Route path="/proyectos/destacados/:id" element={<ProjectDetail />} />

        {/* Sobre Quandum */}
        <Route path="/sobre-quandum/calidad" element={<Calidad />} />
        <Route path="/sobre-quandum/certificaciones" element={<Certificaciones />} />
        <Route path="/sobre-quandum/codigo-etico" element={<CodigoEtico />} />
        <Route path="/sobre-quandum/entorno-responsable" element={<EntornoResponsable />} />

        {/* Otras */}
        <Route path="/prensa" element={<Prensa />} />
        <Route path="/trabaja-con-nosotros" element={<TrabajaConNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal-notice" element={<AvisoLegal />} />
      </Routes>
    </Suspense>
  );
}
