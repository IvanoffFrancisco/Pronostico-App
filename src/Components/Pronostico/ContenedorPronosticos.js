import React, { useContext } from 'react'
import { PronosticoContextData } from '../../Contexts/PronosticoContextData'
import PronosticoActual from './PronosticoActual'
import PronosticoDia from './PronosticoDia'

export default function ContenedorPronosticos() {
  const {loading} = useContext(PronosticoContextData)
  return (
    <div>
      {
        loading ? (
          <div>
            soy un loading...
          </div>
        ):
        (
          <div>
              <div>
                  <PronosticoActual/>
              </div>
              <div>
                  <PronosticoDia/>
              </div>
          </div>
        )
      }
        
    </div>
  )
}
