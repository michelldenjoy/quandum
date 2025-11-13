import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";
export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Navbar />
      <main className="pt-20 px-6">
        <MainRoutes />
      </main>
    </div>
  );
}
