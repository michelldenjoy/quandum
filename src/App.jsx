import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer";

export default function App({ children }) {
  return (
    <div className="relative min-h-screen text-white font-sans">
      <Navbar />
      <main className="px-6">
        <MainRoutes />
        {children}
        <Footer />
      </main>

    </div>
  );
}
