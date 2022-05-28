import React,{useContext} from 'react'
import { CiudadesContextData } from '../../Contexts/CiudadesContextData'

export default function FormCiudades() {
    const {hendlerChangeCidudad,hendlerSubmitCidudad} = useContext(CiudadesContextData)
  return (
    <div>
        <div>
            <label htmlFor="ciudad">Elige una Ciudad</label>
            <input type="text" onChange={hendlerChangeCidudad} name="ciudad" id="ciudad"/>
            <button onClick={hendlerSubmitCidudad}>Agregar</button>
        </div>
    </div>
  )
}
