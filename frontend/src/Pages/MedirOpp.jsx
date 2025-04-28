import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

function MedirOpiniones() {
    const [Positivas, setPositivas] = useState(0);
    const [Negativas, setNegativas] = useState(0);
    const [Finalizado, setFinalizado] = useState(false);

    useEffect(() => {
        const Intervalo = setInterval(() => {
            const NuevasPos = Math.floor(Math.random() * 100);
            const NuevasNeg = Math.floor(Math.random() * 100);
            setPositivas(NuevasPos);
            setNegativas(NuevasNeg);
        }, 1000);

        const FinTiempo = setTimeout(() => {
            clearInterval(Intervalo);
            setFinalizado(true);
        }, 5000);

        return () => {
            clearInterval(Intervalo);
            clearTimeout(FinTiempo);
        };
    }, []);

    const Datos = {
        labels: ['Opiniones Positivas', 'Opiniones Negativas'],
        datasets: [
            {
                label: 'Cantidad',
                data: [Positivas, Negativas],
                backgroundColor: ['#28a745', '#dc3545'],
                borderColor: ['#28a745', '#dc3545'],
                borderWidth: 1,
            },
        ],
    };

    const Opiniones = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
            {!Finalizado ? (
                <>
                    <h1 className="mb-4 text-primary"> Midiendo opiniones... </h1>
                </>
            ) : (
                <>
                    <h1 className="mb-2 text-success"> Total de opiniones: </h1>
                    <p className="fs-4">
                        Positivas: <strong className="text-success"> {Positivas} </strong> | 
                        Negativas: <strong className="text-danger"> {Negativas} </strong>
                    </p>
                </>
            )}
            <div style={{ width: '400px', height: '300px' }}>
                <Bar data={Datos} options={Opiniones} />
            </div>
        </div>
    );
}

export default MedirOpiniones;
