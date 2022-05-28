import React,{useContext} from 'react'
import { PronosticoContextData } from '../../Contexts/PronosticoContextData'

export default function PronosticoActual() {
    const {diaActual}=useContext(PronosticoContextData)
  return (
     <div>
         <h3>Pronostico Día Actual</h3>
        <div className="card mb-3" style={{maxWidth: "600px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{diaActual.date}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
