// import { useState } from "react";

import Collage from "../../components/Careers/Collage";
import Valores from "../../components/Careers/Valores";
import Formulario from "../../components/Careers/Formulario";
import WorkHorizontal from "../../components/Careers/WorkHorizontal";
import WorkHorizontal2 from "../../components/Careers/WorkHorizontal2";
import HeroVideo from "../../components/about/HeroVideo";




export default function TrabajaConNosotros() {
 

  return (
    <div className="min-h-screen">
      <HeroVideo
        eyebrow="Careers · Ingeniería · Innovación"
        title="Tu carrera despega aquí"
        description="Únete a un equipo multidisciplinar donde tu talento impulsa el desarrollo tecnológico."
        backgroundImage="/careerbg.jpg"
      >

      </HeroVideo>
      <div id="formulario">
        <Formulario />
      </div>
      <Collage />
     
    
      <WorkHorizontal2 />
      

    

      
    </div>
  );
}
