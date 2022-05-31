import React, { useContext } from 'react'
import { PronosticoContextData } from '../../Contexts/PronosticoContextData'
import CardDetallePronostico from './CardDetallePronostico';

export default function MasDetalles({id}) {
    const {pronosticoDias} = useContext(PronosticoContextData);
    const {date,day,astro,hour}=pronosticoDias[id];
  return (
    <div className='container mt-2'>
        <div className="card" style={{width: "18rem", margin: "0 auto"}}>
            <img src={day?.condition?.icon} className="card-img-top" alt="..."/>
            <h2 className=" text-center card-title">{day?.maxtemp_c}°</h2>
            <div className="card-body">
                <h3>fecha: {date}</h3>
                <p>
                    <b>min:</b> {day?.mintemp_c}° <br />
                    <b>Estado:</b> {day?.condition?.text} <br />
                    <b>viento:</b> {day?.maxwind_kph} km/h <br />
                    <b>humedad:</b> {day?.avghumidity}% <br />
                    <b>Precipitaciones:</b> {day?.daily_chance_of_rain}% <br />
                    <b>Salida del Sol:</b> {astro?.sunrise} <br />
                    <b>Atardecer:</b> {astro?.sunset} <br />
                 </p>
            </div>
        </div>
        <div className='row mt-5'>
            <h1>Detalles por hora</h1>
            {
                hour.map((dias,index)=>{
                    return(
                        <CardDetallePronostico key={index} imagen={dias?.condition?.icon} temperatura={dias?.temp_c} estado={dias?.condition?.text} fecha={dias?.time} sesacion={dias?.feelslike_c} humedad={dias?.humidity} presipitaciones={dias?.chance_of_rain}/>
                    )
                })
            }
        </div>
    </div>
  )
}
