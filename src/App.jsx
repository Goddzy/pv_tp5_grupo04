import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Inicio from './components/Inicio';
import Agregar from "./components/Agregar";
import ListaAlumnos from "./components/ListaAlumnos";
import AboutUs from "./components/AboutUs";
import { useState } from "react";

function App() {
  const [listaAlumnos,setListaAlumnos]=useState([])
  return (
    <BrowserRouter>
     <Header></Header>
     <Routes>
      <Route exact path="/" element={<Inicio/>}></Route>
      <Route exact path="/agregarAlumno" element={<Agregar listaAlumnos={listaAlumnos} setListaAlumnos={setListaAlumnos}/>}></Route>
      <Route exact path="/alumnos" element={<ListaAlumnos listaAlumnos={listaAlumnos} setListaAlumnos={setListaAlumnos}/>}></Route>
      <Route exact path="/acerca" element={<AboutUs/>}></Route>
     </Routes>
     <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
