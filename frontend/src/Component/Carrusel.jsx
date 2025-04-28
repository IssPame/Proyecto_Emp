import React, { useState } from 'react';
import Img1 from '../Img/Img1.png';
import Img2 from '../Img/Img2.png';
import Img3 from '../Img/Img3.png';

const Carrusel = () => {
    const [IndActual, setIndActual] = useState(0);
    const Imgs = [Img1, Img2, Img3];

    const IrSiguiente = () => {
        setIndActual((prevIndex) => (prevIndex === Imgs.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel-container position-relative">
            <div className="carousel-inner">
                <img src={Imgs[IndActual]} className="d-block w-100" alt={`Imagen ${IndActual + 1}`} />
            </div>

            <button className="carousel-control-next" onClick={IrSiguiente}>
                <span className="d-flex align-items-center justify-content-center fs-1 text-primary" style={{ width: '50px', height: '50px' }}>
                    &#62;
                </span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    );
};

export default Carrusel;
