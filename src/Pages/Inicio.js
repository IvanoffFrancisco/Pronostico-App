import React from 'react'
import Ciudades from '../Components/Ciudades/Ciudades';
import Pronostico from '../Components/Pronostico/Pronostico';
import {CiudadesContext} from '../Contexts/CiudadesContextData'
import "../Css/Inicio.css";
export default function Inicio() {
  
  
    return (
    <div className='contenedorPagina'>
        <header>
            <div className='contenedortitulo'>
                <img src="https://www.smn.gob.ar/sites/all/themes/smn/img/weather-icons/73.png" alt="" />
                <h1 className='text-center mt-4'>Pronostico App</h1>
            </div>
        </header>
        <CiudadesContext>
          <section className='containerPrincipal'>
              <div className='containerCiudades'>
                <Ciudades/>
              </div>
              <div className='containerPronostico'>
                <Pronostico/>
              </div>
          </section>
        </CiudadesContext>
    </div>
  )
}
