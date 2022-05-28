import React, { useContext } from 'react'
import { CiudadesContextData } from '../../Contexts/CiudadesContextData'

export default function CardCiudad({ciudad,id}) {

    const {eliminarCiudad,seleccionarCiudad} = useContext(CiudadesContextData)
    return (
    <div>
        <p>{ciudad}</p>
        <button onClick={()=>seleccionarCiudad(ciudad)}>Seleccionar</button>
        <button onClick={()=>eliminarCiudad(id)}>Eliminar</button>
    </div>
  )
}
