import Carousel from 'react-bootstrap/Carousel';

function Inicio() {
  return (
    <div className="home-container d-flex align-items-center justify-content-center text-center">
      <div className="container bg-white p-5 rounded-4 shadow-lg">
        <h1 className="display-4 fw-bold text-muted my-5">Bienvenido al Sistema de Gestión de Alumnos</h1>
        <p className="lead text-secondary my-5">
          Esta plataforma te permite llevar un control completo de tus estudiantes: altas, ediciones, consultas y mucho más.
        </p>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../public/images/fac.jpg"
        style={{ height: '600px', objectFit: 'cover' }}
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../public/images/facu.webp"
        style={{ height: '600px', objectFit: 'cover' }}
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
          
        <p className="text-muted mb-2 my-5">
          Usá el menú para navegar por las distintas secciones y comenzar a trabajar.
        </p>
        <p className="fst-italic text-black-50 my-5">
          Desarrollado con pasión educativa.
        </p>
      </div>
    </div>
  );
}

export default Inicio;