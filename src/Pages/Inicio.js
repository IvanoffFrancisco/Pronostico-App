import React from 'react'
import Ciudades from '../Components/Ciudades/Ciudades';
import Pronostico from '../Components/Pronostico/Pronostico';
import {CiudadesContext} from '../Contexts/CiudadesContextData'
import "../Css/Inicio.css";
export default function Inicio() {
  console.log("componente inicio");
  
    return (
    <div className='container'>
      <div className='row'>
        <header className='col-lg-12'>
            <div className='contenedortitulo'>
                <img src="https://www.smn.gob.ar/sites/all/themes/smn/img/weather-icons/73.png" alt="" />
                <h1 className='text-center mt-4'>Pronostico App</h1>
            </div>
        </header>
      </div>
      <CiudadesContext>
        <section className='row'>
          <div className='col-lg-6'>
              <Ciudades/>
          </div>
          <div className='col-lg-6'>
              <Pronostico/>
          </div>
        </section>
      </CiudadesContext>
    </div>
  )
}
