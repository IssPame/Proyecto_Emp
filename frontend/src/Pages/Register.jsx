import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-lg p-4" style={{ width: '24rem' }}>
                <h3 className="text-center text-primary mb-4">Registro</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="company" className="form-label text-primary">Nombre de la empresa</label>
                        <input type="text" className="form-control border-primary" id="company" placeholder="Ingrese nombre de la empresa" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-primary">Nombre personal</label>
                        <input type="text" className="form-control border-primary" id="name" placeholder="Ingrese su nombre" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label text-primary">Contraseña</label>
                        <input type="password" className="form-control border-primary" id="password" placeholder="Cree una contraseña" />
                    </div>
                    <div className="text-center mt-3">
                        <span>¿Ya tienes cuenta? </span>
                        <Link to="/" className="text-primary">Iniciar sesión</Link>
                    </div>
                    <br />
                    <Link to="/home" className="btn btn-primary w-100">Ingresar</Link>
                </form>
            </div>
        </div>
    );
}

export default Register;
