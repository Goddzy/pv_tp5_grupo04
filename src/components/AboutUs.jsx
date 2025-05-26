
import { Container, Row, Col, Card } from 'react-bootstrap';



const AboutUs = () => {
  return (
    <div className="about-us-container py-5 px-3">
      <Container>
        <h2 className="text-center mb-5 fw-bold text-muted">Sobre Nosotros</h2>
        <Row className="g-4">
          <Col xs={12} md={6} lg={3}>
            <Card className="h-100 shadow-sm border-0 text-center p-3">
              <img
                src="/images/sinfoto.jpg"
                alt="Avatar"
               className="avatar-img mb-3"
              />
              <Card.Body>
                <Card.Title className="fw-bold text-primary">Renato Trevisiol Montiel</Card.Title>
                <Card.Text className="text-muted">
                  Miembro del grupo 04 de Programación Visual, estudiante de APU.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Card className="h-100 shadow-sm border-0 text-center p-3">
              <img
                src="/images/sinfoto.jpg"
                alt="Avatar"
               className="avatar-img mb-3"
              />
              <Card.Body>
                <Card.Title className="fw-bold text-primary">Nombre Integrante</Card.Title>
                <Card.Text className="text-muted">
                  Información Integrante
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
            <Col xs={12} md={6} lg={3}>
            <Card className="h-100 shadow-sm border-0 text-center p-3">
              <img
                src="/images/sinfoto.jpg"
                alt="Avatar"
               className="avatar-img mb-3"
              />
              <Card.Body>
                <Card.Title className="fw-bold text-primary">Nombre Integrante</Card.Title>
                <Card.Text className="text-muted">
                  Información Integrante
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
            <Col xs={12} md={6} lg={3}>
            <Card className="h-100 shadow-sm border-0 text-center p-3">
              <img
                src="/images/sinfoto.jpg"
                alt="Avatar"
               className="avatar-img mb-3"
              />
              <Card.Body>
                <Card.Title className="fw-bold text-primary">Nombre Integrante</Card.Title>
                <Card.Text className="text-muted">
                  Información Integrante
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;