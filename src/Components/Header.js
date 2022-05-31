import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
        <header className='col-lg-12'>
            <div className='contenedortitulo'>
                <NavLink to="/">
                    <img src="https://www.smn.gob.ar/sites/all/themes/smn/img/weather-icons/73.png" alt="" />
                </NavLink>
                <h1 className='text-center mt-4'>Pronóstico App</h1>
            </div>
        </header>
  )
}
