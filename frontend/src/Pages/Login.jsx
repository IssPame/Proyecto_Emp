import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-lg p-4" style={{ width: '22rem' }}>
                <h3 className="text-center text-primary mb-4">Iniciar Sesión</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label text-primary">Nombre de usuario</label>
                        <input type="text" className="form-control border-primary" id="username" placeholder="Ingrese su nombre" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label text-primary">Contraseña</label>
                        <input type="password" className="form-control border-primary" id="password" placeholder="Ingrese su contraseña" />
                    </div>
                    <div className="text-center mt-3">
                        <span>¿No tienes cuenta? </span>
                        <Link to="/register" className="text-primary">Regístrate</Link>
                    </div>
                    <br />
                    <Link to="/home" className="btn btn-primary w-100">Ingresar</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
