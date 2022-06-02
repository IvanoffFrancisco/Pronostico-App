import {useState,useEffect} from 'react';

export const useFetchPronostico = (ciudad,setLoading) => {
  const [pronostico, setPronostico] = useState({
      diaActual:{},
      dias:[],
      location:{}

  });

  const fetchDatos = async (ciudad,setLoading) => {
    try{
        const res=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=8f83963de9fe47efa3f211743222605&q=${ciudad.ciudad}&days=6&aqi=no&alerts=no`);
        const data=await res.json();
        setPronostico({
          location:data.location,
          diaActual:data.current,
          dias:data.forecast.forecastday
        })
        setLoading(false);
    }catch(error){
      console.log(error.message);
    }
    
  };

  useEffect(()=>{
    fetchDatos(ciudad,setLoading);
  },[ciudad,setLoading])

  return [pronostico];
}
