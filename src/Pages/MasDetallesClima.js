import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header'
import MasDetalles from '../Components/Pronostico/MasDetalles'

export default function MasDetallesClima() {
   const {id} =useParams()
  return (
    <div>
      <Header/>
      <MasDetalles id={id}/>
    </div>
  )
}
