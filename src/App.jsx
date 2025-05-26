import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Inicio from './components/Inicio';
import Agregar from "./components/Agregar";
import ListaAlumnos from "./components/ListaAlumnos";
import AboutUs from "./components/AboutUs";

function App() {


  return (
    <BrowserRouter>
     <Header></Header>
     <Routes>
      <Route exact path="/" element={<Inicio/>}></Route>
      <Route exact path="/agregarAlumno" element={<Agregar/>}></Route>
      <Route exact path="/alumnos" element={<ListaAlumnos/>}></Route>
      <Route exact path="/acerca" element={<AboutUs/>}></Route>
     </Routes>
     <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
