import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

function Home() {
    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <Navbar />
            
            <div className="flex-grow-1 d-flex justify-content-center align-items-center">
                <h1 className="text-primary">Aquí va un slogan y algunas fotos de graficos</h1>
            </div>

            <Footer />
        </div>
    );
}

export default Home;
