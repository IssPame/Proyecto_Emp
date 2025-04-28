import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Carrusel from '../Component/Carrusel';

function Home() {
    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <Navbar />

            <div className="flex-grow-1 d-flex justify-content-between align-items-center p-5">
                <div className="w-50">
                    <h1 className="text-primary">MediGraph</h1>
                    <p className="lead">Mide la opinión de tus usuarios y gráficala con nosotros.</p>
                </div>
                <div className="w-50">
                    <Carrusel />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
