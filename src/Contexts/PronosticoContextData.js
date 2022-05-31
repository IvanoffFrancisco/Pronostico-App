import React,{createContext,useContext,useEffect,useState} from 'react'
import { useFetchPronostico } from '../Hooks/useFetchPronostico';
import { CiudadesContextData } from './CiudadesContextData';

 export const PronosticoContextData=createContext();
 
export const PronosticoProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [locacion, setLocacion] = useState({})
    const [diaActual, setDiaActual] = useState({});
    const [pronosticoDias, setPronosticoDias] = useState([]);
    const {climaCiudad}=useContext(CiudadesContextData); 
    const [pronostico]=useFetchPronostico(climaCiudad,setLoading);

    useEffect(() => {

        if(!!pronostico){
            setDiaActual(pronostico?.diaActual);
            setPronosticoDias(pronostico?.dias);
            setLocacion(pronostico?.location);
        }
    }, [pronostico])
    
    
    
   return(
        <PronosticoContextData.Provider value={{diaActual,pronosticoDias,locacion,loading,setLoading}}>
            {children}
        </PronosticoContextData.Provider>

    )
}
