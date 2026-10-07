
import './App.css'
import ListaTareas from './components/ListaTareas'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditarTareas from './components/EditarTareas';
import Navegation from './template/Navegation';

function App() {
 
  return (
    <>
<BrowserRouter>

    <Navegation/>

<Routes>

  <Route exact path="/" element={<ListaTareas />} />
    <Route exact path="/editar/:id" element={<EditarTareas />} />

</Routes>




</BrowserRouter>


    </>
  )
}

export default App
