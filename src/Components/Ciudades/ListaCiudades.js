import React, { useContext } from 'react'
import {CiudadesContextData } from '../../Contexts/CiudadesContextData'
import CardCiudad from './CardCiudad'

export default function ListaCiudades() {

    const {ciudades} = useContext(CiudadesContextData);
    
    return (
    <div>
        {
            ciudades.map(ciu=>{
                return(
                    
                        <CardCiudad key={ciu.id} id={ciu.id} ciudad={ciu.ciudad} />
                    
                )
            })
        }
    </div>
  )
}
