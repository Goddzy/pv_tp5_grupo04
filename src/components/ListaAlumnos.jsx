import CardAlumno from "./CardAlumno";
import { Row, Col, Container } from "react-bootstrap";
function ListaAlumnos(){

return(
    <Container className="my-5">
    <Row className="justify-content-center">
        <Col md={6} lg={4} className="my-3">
         <CardAlumno></CardAlumno> 
        </Col>    
      </Row>
    </Container>
)
}
export default ListaAlumnos;