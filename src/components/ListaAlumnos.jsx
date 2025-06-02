import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import CardAlumno from "./CardAlumno";

const ListaAlumnos = ({ listaAlumnos, setListaAlumnos }) => {
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Lista de Alumnos</h2>
      <Row className="g-4 justify-content-center">
        {listaAlumnos && listaAlumnos.some(alumno => !alumno.eliminado) ? (
          listaAlumnos.map((alumno, index) => {
            if(!alumno.eliminado)
              return(
                <Col key={index} xs={12} md={6} lg={4}>
                 <CardAlumno alumno={alumno} listaAlumnos={listaAlumnos} setListaAlumnos={setListaAlumnos} />
                </Col>
              )
            return null;
            }
          )
        ) : (
          <Col>
            <h5 className="text-center">No hay alumnos registrados</h5>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ListaAlumnos;


