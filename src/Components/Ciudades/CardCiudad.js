import React, { useContext } from 'react'
import { CiudadesContextData } from '../../Contexts/CiudadesContextData'

export default function CardCiudad({ciudad,id}) {

    const {eliminarCiudad,seleccionarCiudad} = useContext(CiudadesContextData)
    return (
      <div className='row mt-2'>
        <div className='col-lg-12 card'>
          <div className='row'>
            <div className='col-lg-6'>
              <h4 className='mt-3'> <b>{ciudad}</b></h4>
            </div>
            <div className=' col-lg-6'>
              <button className='btn btn-success' style={{margin:"10px 5px"}} onClick={()=>seleccionarCiudad(ciudad)}>Seleccionar</button>
              <button className='btn btn-danger' style={{margin:"10px 5px"}} onClick={()=>eliminarCiudad(id)}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
  )
}
