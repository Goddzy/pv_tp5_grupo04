import React, { useState,useRef } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
function Agregar({ listaAlumnos, setListaAlumnos, setContador, contador }) {

  const [lu, setLu] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [curso, setCurso] = useState("");
  const [email, setEmail] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");
  const [carrera, setCarrera] = useState("");
const crearAlumno = (e) => {
    e.preventDefault();
  if( lu.trim()!="" && nombre.trim()!="" && apellido.trim()!="" && curso.trim()!="" && email.trim()!="" && domicilio.trim()!="" && telefono.trim()!="" && carrera.trim()!=""){
      const nuevoLu=lu+String(contador);
      console.log(nuevoLu)
      const nuevoAlumno = {
        lu:nuevoLu,
        nombre,
        apellido,
        curso,
        carrera,
        email,
        domicilio,
        telefono,
      };

      setListaAlumnos([...listaAlumnos, nuevoAlumno]);
      setLu("");
      setNombre("");
      setApellido("");
      setCurso("");
      setEmail("");
      setDomicilio("");
      setTelefono("");
      setCarrera("");
      setContador(contador+1);
  }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card className="shadow-lg rounded-4 p-4" style={{ maxWidth: "600px", width: "100%" }}>
        <Card.Body>
          <h2 className="mb-4 text-center text-dark fw-bold">Agregar Alumno</h2>
          <Form onSubmit={crearAlumno}>
            
            <Form.Group className="mb-3" controlId="formLu">
              <Form.Label className="fw-semibold text-dark">LU</Form.Label>
              <Form.Control
                type="text"
                disabled
                value={`${lu}${contador}`}
                onChange={(e) => setLu(e.target.value)}
                className="rounded-pill border border-dark"
              />
            </Form.Group>

            <Row className="g-3">
              <Col md={6}>
                <Form.Group controlId="formNombre">
                  <Form.Label className="fw-semibold text-dark">Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="rounded-pill border border-dark"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formApellido">
                  <Form.Label className="fw-semibold text-dark">Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    className="rounded-pill border border-dark"
                  />
                </Form.Group>
              </Col>
            </Row>

              <Form.Group className="mb-3" controlId="formCurso">
                <Form.Label className="fw-semibold text-dark">Carrera</Form.Label>
                <Form.Select
                  value={carrera}
                  onChange={(e) => {setCarrera(e.target.value) 
                    
                    setLu(e.target.value)
                  }
                  }
                  className="rounded-pill border border-dark"
                >
                  <option value="">Seleccionar carrera</option>
                  <option value="INF">Ingeniería Informatica</option>
                  <option value="APU">Analista Programador Universitario</option>
                  <option value="MIN">Ingenieria en Minas</option>
                </Form.Select>
              </Form.Group> 

            <Form.Group className="mb-3" controlId="formCurso">
              <Form.Label className="fw-semibold text-dark">Curso</Form.Label>
              <Form.Control
                type="text"
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
                className="rounded-pill border border-dark"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="fw-semibold text-dark">Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-pill border border-dark"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDomicilio">
              <Form.Label className="fw-semibold text-dark">Domicilio</Form.Label>
              <Form.Control
                type="text"
                value={domicilio}
                onChange={(e) => setDomicilio(e.target.value)}
                className="rounded-pill border border-dark"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formTelefono">
              <Form.Label className="fw-semibold text-dark">Teléfono</Form.Label>
              <Form.Control
                type="number"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="rounded-pill border border-dark"
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="dark" size="lg" className="rounded-pill" type="submit">
                Agregar Alumno
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Agregar;
