import React,{createContext,useContext,useEffect,useState} from 'react'
import { useFetchPronostico } from '../Hooks/useFetchPronostico';
import { CiudadesContextData } from './CiudadesContextData';

 export const PronosticoContextData=createContext();
 
export const PronosticoProvider = ({children}) => {
    const {climaCiudad}=useContext(CiudadesContextData);

    const [pronostico]=useFetchPronostico(climaCiudad);
    const [diaActual, setDiaActual] = useState({});
    const [pronosticoDias, setPronosticoDias] = useState([]);
    useEffect(() => {
        if(!!pronostico){
            setDiaActual(pronostico.diaActual);
            setPronosticoDias(pronostico.dias);
        }
    }, [pronostico])
    
    
    
   return(
        <PronosticoContextData.Provider value={{diaActual,pronosticoDias}}>
            {children}
        </PronosticoContextData.Provider>

    )
}
