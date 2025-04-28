import React, { useState } from 'react';

function GuiaUsuarios() {
    const Tarjetitas = [
        {
        Titulo: 'Medir Opiniones',
        Textos: 'Basta con hacer clic en el botón "Medir Opiniones" presente en el navbar.'
        },
        {
        Titulo: 'Ver graficos desponibles',
        Textos: 'Ingresa a "Tipo de Gráficos" desde el navbar, verás los gráficos disponibles.'
        },
        {
        Titulo: 'Contactar con los programadores',
        Textos: 'Dirigete al footer y da clic en la red social de tu preferencia.'
        },
    ];

    const [Tarjetas, setTarjetas] = useState(null);

    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {Tarjetitas.map((paso, idx) => (
                <div key={idx} className="col">
                    <div
                        className="card h-100 border border-primary border-2 rounded"
                        onMouseEnter={() => setTarjetas(idx)}
                        onMouseLeave={() => setTarjetas(null)}
                        style={{
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        transform: Tarjetas === idx ? 'scale(1.03)' : 'scale(1)',
                        boxShadow:
                        Tarjetas === idx
                            ? '0 0 15px rgba(13, 110, 253, 0.5)'
                            : 'none',
                        }}
                        >
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-primary">{paso.Titulo}</h5>
                            <p className="card-text flex-grow-1">{paso.Textos}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default GuiaUsuarios;
