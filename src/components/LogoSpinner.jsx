import React from 'react'
import logo from '../assets/lienzo.png'
import '../LogoSpinner.css'

export default function LogoSpinner() {
  return (
    <div>
      <div className="spinner-circle">
        <img 
          src={logo} 
          alt="Logo de la empresa cargando" 
          className="spinner-logo" 
        />
      </div>
    </div>
  )
}
