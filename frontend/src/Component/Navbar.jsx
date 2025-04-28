import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Img/Logo.png';
import MedirOpiniones from '../Pages/MedirOpp';
import GuiaUsuarios from '../Pages/GuiaUsuario';
import TipoGraficos from '../Pages/TipoGraficos';

function Navbar() {
    const [MostrarMedirOpp, setMostrarMedirOpp] = useState(false);
    const [MostrarGuia, setMostrarGuia] = useState(false);
    const [MostrarTipoGraf, setMostrarTipoGraf] = useState(false);

    const AbrirMedirOpp = () => setMostrarMedirOpp(true);
    const CerrarMedirOpp = () => setMostrarMedirOpp(false);
    const AbrirGuia = () => setMostrarGuia(true);
    const CerrarGuia = () => setMostrarGuia(false);
    const AbrirTipoGraf = () => setMostrarTipoGraf(true);
    const CerrarTipoGraf = () => setMostrarTipoGraf(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
                <div className="container-fluid">
                    <img src={Logo} alt="Logo" className="navbar-brand" style={{ width: '100px', height: 'auto' }} />
                    <div className="d-flex gap-3">
                        <button onClick={AbrirTipoGraf} className="btn btn-outline-light"> Tipo de gráficos </button>
                        <button onClick={AbrirMedirOpp} className="btn btn-outline-light"> Medir opiniones </button>
                        <button onClick={AbrirGuia} className="btn btn-outline-light"> Guía de usuario </button>
                        <Link to="/" className="btn btn-outline-light"> Cerrar sesión </Link>
                    </div>
                </div>
            </nav>

            {MostrarTipoGraf && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} >
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title w-100 text-center text-primary"> Tipos de Gráficos </h5>
                                <button type="button" className="btn-close" onClick={CerrarTipoGraf}></button>
                            </div>
                            <div className="modal-body"> <TipoGraficos /> </div>
                        </div>
                    </div>
                </div>
            )}

            {MostrarMedirOpp && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} >
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title w-100 text-center text-primary"> Medir Opiniones </h5>
                                <button type="button" className="btn-close" onClick={CerrarMedirOpp}></button>
                            </div>
                            <div className="modal-body"> <MedirOpiniones /> </div>
                        </div>
                    </div>
                </div>
            )}

            {MostrarGuia && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} >
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title w-100 text-center text-primary"> Guía de Usuario </h5>
                                <button type="button" className="btn-close" onClick={CerrarGuia} ></button>
                            </div>
                            <div className="modal-body"> <GuiaUsuarios /> </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
