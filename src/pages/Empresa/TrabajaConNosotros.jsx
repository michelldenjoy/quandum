import Collage from "../../components/Careers/Collage";
import Formulario from "../../components/Careers/Formulario";
import WorkHorizontal2 from "../../components/Careers/WorkHorizontal2";
import HeroVideo from "../../components/about/HeroVideo";
import { useTranslation } from "react-i18next";



export default function TrabajaConNosotros() {
  const { t } = useTranslation("careers");
 

  return (
    <div className="min-h-screen">
      <HeroVideo
        eyebrow={t("heroeyebrow")}
        title={t("herotitle")}
        description={t("description")}
        backgroundImage="/careerbg.jpg">

      </HeroVideo>

      <div id="formulario">
        <Formulario />
      </div>
      <Collage />
     
      <WorkHorizontal2 />

      
    </div>
  );
}
