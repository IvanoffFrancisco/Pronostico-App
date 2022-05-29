import React, { createContext, useState } from 'react'

export const CiudadesContextData=createContext()

  const citys=[
    {
      id:crypto.randomUUID(),
      ciudad:"Corrientes"
    },
    {
      id:crypto.randomUUID(),
      ciudad:"Resistencia"
    }
  ]

export const CiudadesContext = ({children}) => {
    //agrega nueva ciudad
    const [newCiudad, setNewCiudad] = useState("")
    //arreglo de ciudades
    const [ciudades, setCiudades] = useState(citys)
    //selecciona la ciudad a mostrar clima
    const [climaCiudad, setClimaCiudad] = useState(ciudades[0])

    //obtengo el dato del input
    const hendlerChangeCidudad=(e)=>{
      setNewCiudad(e.target.value);
    }

    //agrego la ciudad al arreglo citys statico 
    const hendlerSubmitCidudad=(e)=>{
      e.preventDefault();

      const CiudadNueva={
        id:crypto.randomUUID(),
        ciudad:newCiudad
      }
      setCiudades([CiudadNueva,...ciudades]);
    }

    //metodo que se usa para eliminar una ciudad agregada en el arreglo
    const eliminarCiudad=(id)=>{
      const eliminar=ciudades.filter(ciu=>ciu.id !== id);
      setCiudades(eliminar);
    }

    //metodo que selecciona una ciudad del arreglo para poder mostrar el clima
    const seleccionarCiudad=(ciudad)=>{
      const seleccionCiudad=ciudades.find(ciu=>ciu.ciudad===ciudad);
      setClimaCiudad(seleccionCiudad);
    } 

  return (
    <CiudadesContextData.Provider value={{ciudades,hendlerChangeCidudad,hendlerSubmitCidudad,eliminarCiudad,seleccionarCiudad,climaCiudad}}>
        {children}
    </CiudadesContextData.Provider>
  )
}
