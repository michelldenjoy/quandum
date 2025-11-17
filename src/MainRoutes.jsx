// src/MainRoutes.jsx
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LogoSpinner from "./components/LogoSpinner"; // Asegúrate de que la ruta sea correcta

// 🔴 1. Define las rutas usando la carga perezosa (lazy)
// Esto divide el código de cada página en un 'chunk' separado.
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const Services = lazy(() => import("./pages/Services"));
const Certifications = lazy(() => import("./pages/Certifications"));
const Careers = lazy(() => import("./pages/Careers"));
const Sustainability = lazy(() => import("./pages/Sustainability"));
const News = lazy(() => import("./pages/News"));
const Contact = lazy(() => import("./pages/Contact"));

export default function MainRoutes() {
  return (
    // 🔴 2. Envuelve las rutas con Suspense
    // 'fallback' define lo que se muestra mientras se carga el componente perezoso.
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-[50vh]">
          <LogoSpinner />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}