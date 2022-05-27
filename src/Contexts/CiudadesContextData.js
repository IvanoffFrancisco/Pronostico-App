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
    const [newCiudad, setNewCiudad] = useState("")
    const [ciudades, setCiudades] = useState(citys)

    const hendlerChangeCidudad=(e)=>{
      setNewCiudad(e.target.value);
    }

    const hendlerSubmitCidudad=(e)=>{
      e.preventDefault();

      const CiudadNueva={
        id:crypto.randomUUID(),
        ciudad:newCiudad
      }
      setCiudades([CiudadNueva,...ciudades]);
    }
    const eliminarCiudad=(id)=>{
      const eliminar=ciudades.filter(ciu=>ciu.id !== id);
      setCiudades(eliminar);
    }

  return (
    <CiudadesContextData.Provider value={{ciudades,hendlerChangeCidudad,hendlerSubmitCidudad,eliminarCiudad}}>
        {children}
    </CiudadesContextData.Provider>
  )
}
