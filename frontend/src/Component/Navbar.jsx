import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
            <div className="container-fluid">
                <span className="navbar-brand">Logo aqui</span>
                <div className="d-flex gap-3">
                    <button className="btn btn-outline-light">Tipo de gráficos</button>
                    <button className="btn btn-outline-light">Medir opiniones</button>
                    <button className="btn btn-outline-light">Guía de usuario</button>
                    <Link to="/" className="btn btn-outline-light">Cerrar sesión</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
