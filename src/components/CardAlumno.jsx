import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CardAlumno = ({ alumno }) => {
  const navigate = useNavigate();

  const editar = ()=>{
      navigate(`/editarAlumno/${alumno.lu}`)
  }

  return (
    <Card className="shadow border-0 rounded-4">
      <Card.Body className="p-4">
        <h4 className="mb-4 border-bottom pb-2 text-center text-uppercase text-secondary">
          Información
        </h4>
        <Card.Text className="text-start fs-5 lh-lg">
          <strong>LU:</strong> {alumno.lu} <br />
          <strong>Curso:</strong> {alumno.curso} <br />
          <strong>Email:</strong> {alumno.email} <br />
          <strong>Domicilio:</strong> {alumno.domicilio} <br />
          <strong>Teléfono:</strong> {alumno.telefono}
        </Card.Text>
        <div className="text-center mt-4">
          <Button variant="dark" className="px-3 py-2 mx-1">
            Ver Detalles
          </Button>
          <Button variant="dark" className="px-3 py-2 mx-1" onClick={editar}>
            Editar
          </Button>
          <Button variant="dark" className="px-3 py-2 mx-1">
            Eliminar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardAlumno;
