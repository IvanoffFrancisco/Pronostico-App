import React,{useContext} from 'react';
import { PronosticoContextData } from '../../Contexts/PronosticoContextData';
import CardPronosticoDia from './CardPronosticoDia';

export default function PronosticoActual() {
    
    const {diaActual,locacion}=useContext(PronosticoContextData);
  return (
     <div>
         <h3>{locacion.name}, {locacion.region}</h3>
         {
            <CardPronosticoDia index={0} actual={true} estado={diaActual?.condition?.text} imagen={diaActual?.condition?.icon} fecha={locacion?.localtime} temperatura={diaActual?.temp_c} />
         }
    </div>
  )
}
