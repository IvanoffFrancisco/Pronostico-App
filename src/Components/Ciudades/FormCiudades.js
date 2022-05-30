import React,{useContext} from 'react'
import { CiudadesContextData } from '../../Contexts/CiudadesContextData'

export default function FormCiudades() {
    const {hendlerChangeCidudad,hendlerSubmitCidudad} = useContext(CiudadesContextData)
    console.log("form ciudades ");
  return (
    <div className='row'>
        <div class="col-lg-12">
          <label htmlFor="ciudad" className="form-label">Elige una Ciudad</label>
          <input type="text" onChange={hendlerChangeCidudad} className="form-control" id="ciudad" aria-describedby="ciudad"/>
          <button onClick={hendlerSubmitCidudad} className="btn btn-success mt-3">Agregar</button>
        </div>
    </div>
  )
}
