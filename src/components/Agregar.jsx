import React from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
function Agregar(){
    return(
        <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card className="shadow-lg rounded-4 p-4" style={{ maxWidth: "600px", width: "100%" }}>
        <Card.Body>
          <h2 className="mb-4 text-center text-dark fw-bold">Agregar Alumno</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formLu">
              <Form.Label className="fw-semibold text-dark">LU</Form.Label>
              <Form.Control
                type="text"
                className="rounded-pill border border-dark"
              />
            </Form.Group>

            <Row className="g-3">
              <Col md={6}>
                <Form.Group controlId="formNombre">
                  <Form.Label className="fw-semibold text-dark">Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    className="rounded-pill border border-dark"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formApellido">
                  <Form.Label className="fw-semibold text-dark">Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    className="rounded-pill border border-dark"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formCurso">
              <Form.Label className="fw-semibold text-dark">Curso</Form.Label>
              <Form.Control
                type="text"
                className="rounded-pill border border-dark"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="fw-semibold text-dark">Email</Form.Label>
              <Form.Control
                type="email"
                className="rounded-pill border border-dark"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDomicilio">
              <Form.Label className="fw-semibold text-dark">Domicilio</Form.Label>
              <Form.Control
                type="text"
                className="rounded-pill border border-dark"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formTelefono">
              <Form.Label className="fw-semibold text-dark">Teléfono</Form.Label>
              <Form.Control
                type="tel"
                className="rounded-pill border border-dark"
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="dark" size="lg" className="rounded-pill">
                Agregar Alumno
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    )
}
export default Agregar;