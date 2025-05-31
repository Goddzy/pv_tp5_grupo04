import { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function EditarAlumno({ listaAlumnos, setListaAlumnos }) {

  const { id } = useParams();
  const navigate = useNavigate();
  //encontrar el alumno con el id en el array 

  const alumnoBuscado = listaAlumnos.find((alumno) => (alumno.lu === id));

  let valorContador='';

  for(let i = 0; i< alumnoBuscado.lu.length; i++){
    if(alumnoBuscado.lu[i] >= '0' && alumnoBuscado.lu[i] <='9')
      valorContador+= alumnoBuscado.lu[i]
  }
  

  const [lu, setLu] = useState(alumnoBuscado.lu);
  const [nombre, setNombre] = useState(alumnoBuscado.nombre);
  const [apellido, setApellido] = useState(alumnoBuscado.apellido);
  const [curso, setCurso] = useState(alumnoBuscado.curso);
  const [email, setEmail] = useState(alumnoBuscado.email);
  const [domicilio, setDomicilio] = useState(alumnoBuscado.domicilio);
  const [telefono, setTelefono] = useState(alumnoBuscado.telefono);
  const [carrera, setCarrera] = useState(alumnoBuscado.carrera);


const handleSubmit = (e) => {
    e.preventDefault();
  if( lu.trim()!="" && nombre.trim()!="" && apellido.trim()!="" && curso.trim()!="" && email.trim()!="" && domicilio.trim()!="" && telefono.trim()!="" && carrera.trim()!=""){
    


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

      const nuevoArray = listaAlumnos.map((alumno)=> 
        alumno.lu === id ? nuevoAlumno : alumno
      )

      setListaAlumnos(nuevoArray);

      setLu("");
      setNombre("");
      setApellido("");
      setCurso("");
      setEmail("");
      setDomicilio("");
      setTelefono("");
      setCarrera("");

      navigate('/alumnos')
  }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card className="shadow-lg rounded-4 p-4" style={{ maxWidth: "600px", width: "100%" }}>
        <Card.Body>
          <h2 className="mb-4 text-center text-dark fw-bold">Editar Alumno</h2>
          <Form onSubmit={handleSubmit}>
            
            <Form.Group className="mb-3" controlId="formLu">
              <Form.Label className="fw-semibold text-dark">LU</Form.Label>
              <Form.Control
                type="text"
                disabled
                value={`${lu}`}
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
                  onChange={(e) => {
                       const nuevaCarrera = e.target.value;
                       setCarrera(nuevaCarrera);
                       setLu(nuevaCarrera + valorContador);
                  }}
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
                Editar Alumno
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}


export default EditarAlumno;
