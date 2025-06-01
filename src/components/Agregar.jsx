import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Agregar({ listaAlumnos, setListaAlumnos }) {
  // Estados para cada input 
  const [lu, setLu] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [curso, setCurso] = useState("");
  const [email, setEmail] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");
  const [carrera, setCarrera] = useState("");
  const [errores, setErrores] = useState({});

  const navigate = useNavigate();

  const crearAlumno = (e) => {
    e.preventDefault();

    // Objeto para almacenar mensajes de error
    const validErrors = {};

    // Valida cada campo (se omite LU ya que se asigna automáticamente con la carrera)
    if (!nombre.trim()) validErrors.nombre = "Completa este campo";
    if (!apellido.trim()) validErrors.apellido = "Completa este campo";
    if (!curso.trim()) validErrors.curso = "Completa este campo";
    if (!email.trim()) validErrors.email = "Completa este campo";
    if (!domicilio.trim()) validErrors.domicilio = "Completa este campo";
    if (!telefono.trim()) validErrors.telefono = "Completa este campo";
    if (!carrera.trim()) validErrors.carrera = "Completa este campo";

    // Si hay errores de validación, se actualiza el estado y no se envía el formulario
    if (Object.keys(validErrors).length > 0) {
      setErrores(validErrors);
      return;
    }

    const nuevoAlumno = {
      lu,
      nombre,
      apellido,
      curso,
      carrera,
      email,
      domicilio,
      telefono,
    };

    setListaAlumnos([...listaAlumnos, nuevoAlumno]);
    
    // Limpiar estados y errores
    setLu("");
    setNombre("");
    setApellido("");
    setCurso("");
    setEmail("");
    setDomicilio("");
    setTelefono("");
    setCarrera("");
    setErrores({});

    navigate("/alumnos");
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card
        className="shadow-lg rounded-4 p-4"style={{ maxWidth: "600px", width: "100%" }} >
        <Card.Body>
          <h2 className="mb-4 text-center text-dark fw-bold">
            Agregar Alumno
          </h2>
          <Form onSubmit={crearAlumno}>
            <Form.Group className="mb-3" controlId="formLu">
              <Form.Label className="fw-semibold text-dark">LU</Form.Label>
              <Form.Control
                type="text"
                disabled
                value={lu}
                onChange={(e) => setLu(e.target.value)}
                className="rounded-pill border border-dark"
              />
            </Form.Group>

            <Row className="g-3">
              <Col md={6}>
                <Form.Group controlId="formNombre">
                  <Form.Label className="fw-semibold text-dark">
                    Nombre
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="rounded-pill border border-dark"
                    isInvalid={!!errores.nombre}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errores.nombre}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formApellido">
                  <Form.Label className="fw-semibold text-dark">
                    Apellido
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    className="rounded-pill border border-dark"
                    isInvalid={!!errores.apellido}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errores.apellido}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formCarrera">
              <Form.Label className="fw-semibold text-dark">Carrera</Form.Label>
              <Form.Select
                value={carrera}
                onChange={(e) => {
                  setCarrera(e.target.value);
                  // Se asigna el valor seleccionado a LU (si así se desea)
                  setLu(e.target.value);
                }}
                className="rounded-pill border border-dark"
                isInvalid={!!errores.carrera}
              >
                <option value="">Seleccionar carrera</option>
                <option value="INF">Ingeniería Informatica</option>
                <option value="APU">
                  Analista Programador Universitario
                </option>
                <option value="MIN">Ingeniería en Minas</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errores.carrera}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCurso">
              <Form.Label className="fw-semibold text-dark">Curso</Form.Label>
              <Form.Control
                type="text"
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
                className="rounded-pill border border-dark"
                isInvalid={!!errores.curso}
              />
              <Form.Control.Feedback type="invalid">
                {errores.curso}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="fw-semibold text-dark">Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-pill border border-dark"
                isInvalid={!!errores.email}
              />
              <Form.Control.Feedback type="invalid">
                {errores.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDomicilio">
              <Form.Label className="fw-semibold text-dark">Domicilio</Form.Label>
              <Form.Control
                type="text"
                value={domicilio}
                onChange={(e) => setDomicilio(e.target.value)}
                className="rounded-pill border border-dark"
                isInvalid={!!errores.domicilio}
              />
              <Form.Control.Feedback type="invalid">
                {errores.domicilio}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formTelefono">
              <Form.Label className="fw-semibold text-dark">Teléfono</Form.Label>
              <Form.Control
                type="number"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="rounded-pill border border-dark"
                isInvalid={!!errores.telefono}
              />
              <Form.Control.Feedback type="invalid">
                {errores.telefono}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-grid">
              <Button
                variant="dark"
                size="lg"
                className="rounded-pill"
                type="submit"
              >
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


