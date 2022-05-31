import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CardPronosticoDia({fecha,temperatura,temperaturaMinima,imagen,index,estado}) {
    const navegar=useNavigate()
    const redireccionar=()=>{
        navegar(`/MasDetalles/${index}`)
    }
  return (
    <div className='row mt-2'>
        <div className="card col-lg-12" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imagen} width="100%" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8 ">
                    <div className="card-body">
                        {
                            index === 0 ? (
                                <>
                                    <h5 className="card-title">Fecha: {fecha}</h5>
                                    <h2 className='mt-3'>{temperatura}°</h2>
                                    <h4>{estado}</h4>
                                </>
                            ):
                            (
                                <>
                                    <h5 className="card-title">Fecha: {fecha}</h5>
                                    <h2 className='mt-3'>Maxima: {temperatura}°</h2>
                                    <h4>Minima:  {temperaturaMinima}°</h4>
                                </>
                            )
                        }
                        
                    </div>
                </div>
                <div>
                    <button onClick={redireccionar} style={{display:"block",margin:"15px auto"}} className='btn btn-secondary'>Más detalles</button>
                </div>
            </div>
        </div>
    </div>
  )
}
