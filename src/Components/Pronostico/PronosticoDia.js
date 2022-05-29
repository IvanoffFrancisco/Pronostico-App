import React,{useContext, useEffect, useState} from 'react';
import CardPronosticoDia from './CardPronosticoDia'
import { PronosticoContextData } from '../../Contexts/PronosticoContextData';

export default function PronosticoDia() {

  const [newArregloPronostico, setNewArregloPronostico] = useState([]);
  const {pronosticoDias}=useContext(PronosticoContextData);

  const arreglarArreglo=(pronosticoDias)=>{
    const date=new Date();
    if(date.getMonth()<10){
      const fechaActual=`${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`;
      const newArregloDias=pronosticoDias.filter(dias => dias.date !== fechaActual);
      setNewArregloPronostico(newArregloDias);
    }else{
      const fechaActual=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
      const newArregloDias=pronosticoDias.filter(dias => dias.date !== fechaActual);
      setNewArregloPronostico(newArregloDias);
    }
    
  }
  
  useEffect(() => {
    arreglarArreglo(pronosticoDias);
    
  }, [pronosticoDias]);

  return (
    <div>
        <h3>Pronostico 5 días extendidos</h3>
        {
          
          newArregloPronostico.map(dias=>{
            return(
              <CardPronosticoDia icon={dias?.day?.condition?.icon} date={dias?.date} maxtemp_c={dias?.day?.maxtemp_c} mintemp_c={dias?.day?.mintemp_c}/>
            )
          })
        }

    </div>
  )
}
