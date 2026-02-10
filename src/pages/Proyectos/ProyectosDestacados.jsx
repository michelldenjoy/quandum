import React from 'react'
import HeroVideo from "../../components/about/HeroVideo";
import IntroProducts from '../../components/products/IntroProducts';
import ProductsDrop from '../../components/products/ProductsDrop';
import ProjectIMG from '../../components/products/ProjectIMG';

import ProjectGrid from '../../components/products/ProjectGrid';
import Projection from '../../components/products/Proyection';
export default function ProyectosDestacados() {
  return (
    <div >
            <HeroVideo
              eyebrow="Diseño · Creación · Proyectos"
              title="Resultados en Proyectos"
              description="Soluciones para entornos operativos y misiones de alta exigencia."
              backgroundImage="/images/heroproducts.jpg"
              imagePosition="top 90%"
              
            />

      <IntroProducts /> 
      <Projection />
      {/* <ProductsDrop />
      <ProjectGrid />

      
      <ProjectIMG /> */}
      
      
     
    </div>
  )
}
