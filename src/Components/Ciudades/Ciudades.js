
import React, { useContext } from 'react'
import { CiudadesContextData } from '../../Contexts/CiudadesContextData'
import FormCiudades from './FormCiudades'
import ListaCiudades from './ListaCiudades'
export default function Ciudades() {
    const {ciudades} = useContext(CiudadesContextData)
    console.log("componente ciudad ", ciudades);
  return (
      
        <div>
            <div>
                {
                    ciudades.length !== 5 ? <FormCiudades/> : <></> 
                }       
            </div>
            <div>
                <ListaCiudades/>
            </div>
        </div>
      
    
  )
}
