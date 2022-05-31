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
        <h3 style={{margin:"20px 0"}}>Días siguientes</h3>
        {
            newArregloPronostico.map((dias,index)=>{
              return(
                <CardPronosticoDia key={index} index={index+1} imagen={dias?.day.condition.icon} fecha={dias?.date} temperatura={dias?.day.maxtemp_c} temperaturaMinima={dias?.day.mintemp_c}/>
              )
            })      
        }

    </div>
  )
}
