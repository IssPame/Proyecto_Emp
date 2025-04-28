import React, { useState, useEffect } from 'react';

function TipoGraficos() {
    const [MostrarAlerta, setMostrarAlerta] = useState(false);
    const [SeleccionarGrafico, setSeleccionarGrafico] = useState(null);

    const handleChartSelect = (type) => {
        setSeleccionarGrafico(type);
        setMostrarAlerta(true);
    };

    useEffect(() => {
        if (!MostrarAlerta) return;
        const Tiempo = setTimeout(() => setMostrarAlerta(false), 3000);
        return () => clearTimeout(Tiempo);
    }, [MostrarAlerta]);

    return (
        <div className="container my-5">
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                <button onClick={() => handleChartSelect('bar')} className="btn btn-outline-primary"> Gráfico de Barra </button>
                <button onClick={() => handleChartSelect('line')} className="btn btn-outline-primary"> Gráfico de Línea </button>
                <button onClick={() => handleChartSelect('pie')} className="btn btn-outline-primary"> Gráfico de Pastel </button>
                <button onClick={() => handleChartSelect('doughnut')} className="btn btn-outline-primary"> Gráfico de Dona </button>
            </div>

            {MostrarAlerta && (
                <div
                    className="toast show position-fixed top-50 start-50 translate-middle"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                    style={{ zIndex: 1060 }}
                >
                    <div className="toast-body bg-primary text-white">
                        Gráfico seleccionado con éxito
                        <button
                            type="button"
                            className="btn-close btn-close-white float-end"
                            onClick={() => setMostrarAlerta(false)}
                        ></button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TipoGraficos;
