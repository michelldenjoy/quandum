import ODSSection from "../../components/etico/ODSSection";
import HeroVideo from "../../components/about/HeroVideo";
import Documentos from "../../components/etico/Documentos";
import { useTranslation } from "react-i18next";


export default function CodigoEtico() {
const { t } = useTranslation("sustainability");



  return (
    <div>
      <HeroVideo
        eyebrow= {t("heroeyebrow")}
        title= {t("herotitle")}
        description= {t("herodesc")}
        backgroundImage="/images/sostenible.webp"
      ></HeroVideo>
      <Documentos />
      <ODSSection />
    </div>
  );
}
