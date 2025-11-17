import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";

export default function App() {
  return (
    <div className="relative min-h-screen text-white font-sans">
      <Navbar />
      <main className="px-6">
        <MainRoutes />
      </main>
    </div>
  );
}
