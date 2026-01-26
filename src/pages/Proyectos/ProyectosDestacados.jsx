import React from 'react'
import HeroVideo from "../../components/about/HeroVideo";
import IntroProducts from '../../components/products/IntroProducts';
import ProductsDrop from '../../components/products/ProductsDrop';
import ProjectIMG from '../../components/products/ProjectIMG';

import ProjectGrid from '../../components/products/ProjectGrid';
export default function ProyectosDestacados() {
  return (
    <div >
            <HeroVideo
              eyebrow="Diseño · Creación"
              title="Resultados en proyectos"
              description="Soluciones de ingeniería aplicadas a proyectos reales."
              backgroundImage="/images/heroproducts.jpg"
              imagePosition="top 90%"
              
            />

      <IntroProducts /> 
      

      <ProductsDrop />
      <ProjectGrid />
      <ProjectIMG />
      
     
    </div>
  )
}
