import PronosticoActual from './PronosticoActual'
import PronosticoDia from './PronosticoDia'
import {PronosticoProvider} from '../../Contexts/PronosticoContextData'
import ContenedorPronosticos from './ContenedorPronosticos'

export default function Pronostico() {

  return (
    <PronosticoProvider>
        <ContenedorPronosticos/>
    </PronosticoProvider>
  )
}
