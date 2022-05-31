import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NotFound from './Components/NotFound';
import Inicio from './Pages/Inicio';
import MasDetallesClima from './Pages/MasDetallesClima';
import {PronosticoProvider} from './Contexts/PronosticoContextData'

import {CiudadesContext} from './Contexts/CiudadesContextData'

function App() {
  return (
    <CiudadesContext>
      <PronosticoProvider>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Inicio/>} />
              <Route path='/MasDetalles/:id' element={<MasDetallesClima/>}/>
              <Route path='*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </PronosticoProvider>
    </CiudadesContext>
    
  );
}

export default App;
