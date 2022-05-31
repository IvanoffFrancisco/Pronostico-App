import React from 'react'

export default function CardDetallePronostico({imagen,temperatura,estado,fecha,sesacion,humedad,presipitaciones}) {
    const hora=fecha.substring(11, 16)
    return (
    <div className='col-lg-6 mt-2'>
        <div className="card col-lg-12" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imagen} width="100%" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8 ">
                    <div className="card-body">
                        <h5 className="card-title">Hora: {hora}</h5>
                        <h2 className='mt-3'>{temperatura}°</h2>
                        <h5>Sensación térmica: {sesacion}°</h5>
                        <p>
                        <b>Estado:</b> {estado} <br />
                        <b>Humedad:</b> {humedad}% <br />
                        <b>Presipitaciones:</b> {presipitaciones}% <br />
                        </p>   
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
