import React from 'react'
import HeroVideo from "../../components/about/HeroVideo";
import IntroProducts from '../../components/products/IntroProducts';
import Projection from '../../components/products/Proyection';

import ProjectGrid from '../../components/products/ProjectGrid';
import ProjectIMG from '../../components/products/ProjectIMG';
export default function ProyectosDestacados() {
  return (
    <div >
            <HeroVideo
              eyebrow="Diseño · Creación · Proyectos"
              title="Resultados en Proyectos"
              description="Soluciones para entornos operativos y misiones de alta exigencia."
              backgroundImage="/images/heroproducts.webp"
              imagePosition="top 90%"
              
            />

      <IntroProducts /> 
      <Projection />
    <div>
    
      <ProjectGrid />
      <ProjectIMG />
    </div>
      
      
     
    </div>
  )
}
