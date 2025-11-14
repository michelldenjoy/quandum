// MainRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Certifications from "./pages/Certifications";
import Careers from "./pages/Careers";
import Sustainability from "./pages/Sustainability";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

export default function MainRoutes() {
  return (
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
  );
}
