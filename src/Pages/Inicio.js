import React from 'react'
import Ciudades from '../Components/Ciudades/Ciudades';
import Header from '../Components/Header';
import Pronostico from '../Components/Pronostico/Pronostico';
import "../Css/Inicio.css";
export default function Inicio() {
  
    return (
    <div className='container'>
      <div className='row'>
        <Header/>
      </div>
        <section className='row'>
          <div className='col-lg-6 mt-2'>
              <Ciudades/>
          </div>
          <div className='col-lg-6'>
              <Pronostico/>
          </div>
        </section>
    </div>
  )
}
