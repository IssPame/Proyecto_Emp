import React from 'react';

function Footer() {
    return (
        <footer className="bg-primary text-white py-4">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center flex-wrap gap-5">
                    <div className="d-flex flex-column align-items-center">
                        <p className="mb-2 fs-5 text-center">Contactate con nosotros</p>
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
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
