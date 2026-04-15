import React from 'react'
import HeroVideo from "../../components/about/HeroVideo";
import IntroProducts from '../../components/products/IntroProducts';
import Projection from '../../components/products/Proyection';
export default function ProyectosDestacados() {
  return (
    <div >
            <HeroVideo
              eyebrow="Diseño · Creación · Soluciones"
              title="Resultados en Proyectos"
              description=""
              backgroundImage="/images/heroproducts.webp"
              imagePosition="top 90%"
              
            />

      <IntroProducts /> 
      <Projection />

      
      
     
    </div>
  )
}
