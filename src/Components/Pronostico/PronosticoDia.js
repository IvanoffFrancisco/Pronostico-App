import React,{useContext, useEffect, useState} from 'react';
import CardPronosticoDia from './CardPronosticoDia'
import { PronosticoContextData } from '../../Contexts/PronosticoContextData';

export default function PronosticoDia() {

  const [newArregloPronostico, setNewArregloPronostico] = useState([]);
  const {pronosticoDias}=useContext(PronosticoContextData);

  const arreglarArreglo=(pronosticoDias)=>{
   
      setNewArregloPronostico(pronosticoDias);
    
  }
  useEffect(() => {
    arreglarArreglo(pronosticoDias);
  }, [pronosticoDias]);

  return (
    <div>
        <h3 style={{margin:"20px 0"}}>Días siguientes</h3>
        {
            newArregloPronostico.map((dias,index)=>{
              return(
                <CardPronosticoDia key={index} index={index} imagen={dias?.day.condition.icon} fecha={dias?.date} temperatura={dias?.day.maxtemp_c} temperaturaMinima={dias?.day.mintemp_c}/>
              )
            })      
        }

    </div>
  )
}
