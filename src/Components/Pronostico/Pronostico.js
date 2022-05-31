import { useContext } from 'react';
import { PronosticoContextData } from '../../Contexts/PronosticoContextData'
import Loading from '../Loading';
import PronosticoActual from './PronosticoActual'
import PronosticoDia from './PronosticoDia'
export default function Pronostico() {
  const {loading} = useContext(PronosticoContextData);
  return (
    <div>
      {
        loading ? (
          <Loading/>
        ):
        (
          <div>
              <div>
                  <PronosticoActual />
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
