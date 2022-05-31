
import React, { useContext } from 'react'
import { CiudadesContextData } from '../../Contexts/CiudadesContextData'
import FormCiudades from './FormCiudades'
import ListaCiudades from './ListaCiudades'
export default function Ciudades() {
    const {ciudades} = useContext(CiudadesContextData)
  return (
        <div className='col-lg-12'>
            <div>
                {
                    ciudades.length !== 5 ? <FormCiudades/> : 
                    <>
                    <h1>Ciudades</h1>
                    </> 
                }       
            </div>
            <div className='mt-4'>
                <ListaCiudades />
            </div>
        </div>
      
    
  )
}
