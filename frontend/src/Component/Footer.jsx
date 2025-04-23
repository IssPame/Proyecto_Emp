import React from 'react';

function Footer() {
    return (
        <footer className="bg-primary text-white text-center py-4">
            <p className="mb-2 fs-5">Contactate con nosotros</p>

            <div className="mb-3 d-flex justify-content-center gap-4 fs-4">
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-white">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-white">
                    <i className="bi bi-facebook"></i>
                </a>
                <a href="https://wa.me/000000000" target="_blank" rel="noreferrer" className="text-white">
                    <i className="bi bi-whatsapp"></i>
                </a>
            </div>

            <button className="btn btn-outline-light">Centro de ayuda</button>

            <p className="mt-3 mb-0">© 2025 Tu Empresa. Todos los derechos reservados.</p>
        </footer>
    );
}

export default Footer;
