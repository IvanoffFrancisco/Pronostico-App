import React,{useContext} from 'react';
import { PronosticoContextData } from '../../Contexts/PronosticoContextData';
import CardPronosticoDia from './CardPronosticoDia';

export default function PronosticoActual() {
    
    const {diaActual,locacion}=useContext(PronosticoContextData);
  return (
     <div>
         <h3>{locacion.name}, {locacion.region}</h3>
         {
            <CardPronosticoDia index={0} estado={diaActual?.day?.condition?.text} imagen={diaActual?.day?.condition.icon} fecha={diaActual?.date} temperatura={diaActual?.day?.maxtemp_c} temperaturaMinima={diaActual?.day?.mintemp_c} />
         }
    </div>
  )
}
