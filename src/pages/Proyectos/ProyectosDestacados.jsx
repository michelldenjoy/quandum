import React from 'react'
import HeroVideo from "../../components/about/HeroVideo";
import Products from '../../components/products/Products';
import IntroProducts from '../../components/products/IntroProducts';
export default function ProyectosDestacados() {
  return (
    <div >
            <HeroVideo
              eyebrow="Nuestro · Trabajo"
              title="Resultados en proyectos"
              description="Soluciones de ingeniería aplicadas a proyectos reales y complejos."
              backgroundImage="/heroproducts.jpg"
            />

      <IntroProducts /> 
       <Products /> 
    </div>
  )
}
