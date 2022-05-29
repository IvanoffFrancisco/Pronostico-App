import {useState,useEffect} from 'react';

export const useFetchPronostico = (ciudad) => {
  const [pronostico, setPronostico] = useState({
      loading:true,
      diaActual:{},
      dias:[]

  });

  const fetchDatos = async (ciudad) => {
    try{
      const res=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=8f83963de9fe47efa3f211743222605&q=${ciudad.ciudad}&days=6&aqi=no&alerts=no`);
      const data=await res.json();
      setPronostico({
        loading:false,
        diaActual:data.forecast.forecastday[0],
        dias:data.forecast.forecastday
      })  
    }catch(error){
      console.log(error.message);
    }
    
  };

  useEffect(()=>{
    fetchDatos(ciudad);
  },[ciudad])

  return [pronostico];
}
