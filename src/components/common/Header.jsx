import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <i className="bi bi-mortarboard-fill me-2"></i> Gestor Alumnos
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNav" aria-controls="menuNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="bi bi-house-door-fill me-1"></i>Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/alumnos">
                <i className="bi bi-people-fill me-1"></i>Lista de Alumnos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nuevo">
                <i className="bi bi-person-plus-fill me-1"></i>Nuevo Alumno
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/acerca">
                <i className="bi bi-info-circle-fill me-1"></i>Acerca de
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;