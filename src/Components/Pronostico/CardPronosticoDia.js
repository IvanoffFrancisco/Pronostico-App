import React from 'react';

export default function CardPronosticoDia({date,maxtemp_c,mintemp_c,icon}) {

  return (
    <div className='row mt-2'>
        <div className="card col-lg-12" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={icon} width="100%" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Fecha: {date}</h5>
                        <h3>Maxima {maxtemp_c}°</h3>
                        <h4>Minima {mintemp_c}°</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
