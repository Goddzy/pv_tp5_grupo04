import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Inicio from './components/Inicio';
import Agregar from "./components/Agregar";
import ListaAlumnos from "./components/ListaAlumnos";

function App() {


  return (
    <BrowserRouter>
     <Header></Header>
     <Routes>
      <Route exact path="/" element={<Inicio></Inicio>}></Route>
      <Route exact path="/agregarAlumno" element={<Agregar></Agregar>}></Route>
      <Route exact path="/alumnos" element={<ListaAlumnos></ListaAlumnos>}></Route>
     </Routes>
     <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
