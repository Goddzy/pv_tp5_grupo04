import React from "react";
import Cardalumno from "./CardAlumno";
import { Container } from "react-bootstrap";

function Inicio() {
  return (
    <Container className="text-center mt-5 pb-5">
      <h1 className="mb-3 fs-1"> Administración de Alumnos</h1>
      <p className="fs-5 text-muted">
        Bienvenido al sistema de gestión de alumnos. Organiza, edita y accedé fácilmente a toda la información.
      </p>
      <hr />
        <h2 className="mt-5 mb-3">Lista de alumnos</h2>
      
    </Container>
  );
}

export default Inicio;