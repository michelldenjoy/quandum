import ODSSection from "../../components/etico/ODSSection";
import HeroVideo from "../../components/about/HeroVideo";
import Documentos from "../../components/etico/Documentos";
import Divider from "../../components/Divider";

export default function CodigoEtico() {
  return (
    <div>
      <HeroVideo
        eyebrow="Responsabilidad · Ética · Cumplimiento"
        title="Progreso Consciente"
        description="Nuestro compromiso garantiza una ingeniería responsable que protege el entorno y la sociedad."
        backgroundImage="/images/sostenible.webp"
      ></HeroVideo>
      <Documentos />
      <ODSSection />
    </div>
  );
}
