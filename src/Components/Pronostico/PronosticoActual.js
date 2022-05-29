import React,{useContext} from 'react'
import { PronosticoContextData } from '../../Contexts/PronosticoContextData'
import CardPronosticoDia from './CardPronosticoDia';

export default function PronosticoActual() {
    
    
    const {diaActual}=useContext(PronosticoContextData);
    console.log();
    // maxtemp_c={}
  return (
     <div>
         <h3>Pronostico Día Actual</h3>
         {
             !!diaActual ? (
                <CardPronosticoDia icon={diaActual?.day?.condition?.icon} date={diaActual?.date} maxtemp_c={diaActual?.day?.maxtemp_c} mintemp_c={diaActual?.day?.mintemp_c} />
             ):(
                 <div>Loading...</div>
             )

         }
        
    </div>
  )
}
