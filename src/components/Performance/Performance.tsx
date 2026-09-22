import { useState, useRef, useEffect } from "react";
import useContador from "../../hooks/useContador";
import { car } from "../../data/car";

function Performance() {
    const referencia = useRef<HTMLDivElement>(null);
    const [estado, setEstado] = useState(false);

    const potenciaAnimada = useContador(car.potencia, estado);
    const torqueAnimado = useContador(car.torque, estado);
    const velocidade100Animado = useContador(car.velocidadeA100, estado);
    const velocidadeMaximaAnimada = useContador(car.velocidadeMaxima, estado);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setEstado(true);
                }
            });
        });
        if (referencia.current) {
            observer.observe(referencia.current);
        }
        return () => {
            observer.disconnect();
        };
    }, [])

    return (
        <div ref={referencia} className="relative bg-black text-white py-32 px-6 overflow-hidden">
            <img
                src="https://img.goodfon.com/wallpaper/nbig/9/e7/porsche-911-gt3-rs-porsche-911-racing-track.webp"
                alt="Porsche 911 GT3 RS Engine"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
            />

            <div className="relative z-10">
                <h2 className="text-gray-500 uppercase tracking-widest text-sm text-center mb-16">Performance</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
                    <div>
                        <p className="text-6xl md:text-8xl font-bold text-red-600">{potenciaAnimada}</p>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mt-2">Power (cv)</p>
                    </div>
                    <div>
                        <p className="text-6xl md:text-8xl font-bold text-red-600">{torqueAnimado}</p>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mt-2">Torque (Nm)</p>
                    </div>
                    <div>
                        <p className="text-6xl md:text-8xl font-bold text-red-600">{velocidade100Animado}</p>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mt-2">0-100 (s)</p>
                    </div>
                    <div>
                        <p className="text-6xl md:text-8xl font-bold text-red-600">{velocidadeMaximaAnimada}</p>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mt-2">Top Speed (km/h)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Performance;