import React from 'react'
import HeroVideo from "../../components/about/HeroVideo";
import Products from '../../components/products/Products';
import IntroProducts from '../../components/products/IntroProducts';
import ProductsDrop from '../../components/products/ProductsDrop';
export default function ProyectosDestacados() {
  return (
    <div >
            <HeroVideo
              eyebrow="Nuestro · Trabajo"
              title="Resultados en proyectos"
              description="Soluciones de ingeniería aplicadas a proyectos reales y complejos."
              backgroundImage="/images/heroproducts.jpg"
              imagePosition="top 90%"
              
            />

      <IntroProducts /> 

      <ProductsDrop />
       <Products /> 
    </div>
  )
}
