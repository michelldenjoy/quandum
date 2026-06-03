import React from 'react'
import HeroVideo from "../../components/about/HeroVideo";
import IntroProducts from '../../components/products/IntroProducts';
import Projection from '../../components/products/Proyection';
import { useTranslation } from 'react-i18next';





export default function ProyectosDestacados() {
  const { t } = useTranslation('products');


  return (
    <div >
            <HeroVideo
              eyebrow={t('heroeyebrow')}
              title={t('herotitle')}
              description=""
              backgroundImage="/images/heroproducts.webp"
              imagePosition="top 90%"
              
            />

      <IntroProducts /> 
      <Projection />


     
    </div>
  )
}
