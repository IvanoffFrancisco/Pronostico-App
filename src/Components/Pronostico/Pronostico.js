import React from 'react'
import PronosticoActual from './PronosticoActual'
import PronosticoDia from './PronosticoDia'
import {PronosticoProvider} from '../../Contexts/PronosticoContextData'

export default function Pronostico() {
  return (
    <PronosticoProvider>
        <div>
            <div>
                <PronosticoActual/>
            </div>
            <div>
                <PronosticoDia/>
            </div>
        </div>
    </PronosticoProvider>
  )
}
