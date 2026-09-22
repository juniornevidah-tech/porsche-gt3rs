import { car } from "../../data/car";

function Hero() {
    return (
        <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
                <source src="/public/porscher.mp4" type="video/mp4" />
            </video>

            <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">{car.nome}</h2>
                <p className="text-gray-400 uppercase tracking-widest text-sm mb-12">Built for the Track</p>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    <div className="text-center">
                        <p className="text-3xl md:text-4xl font-bold text-red-600">{car.potencia}</p>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">cv</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl md:text-4xl font-bold text-red-600">{car.torque}</p>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">Nm</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl md:text-4xl font-bold text-red-600">{car.velocidadeA100}</p>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">s (0-100)</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl md:text-4xl font-bold text-red-600">{car.velocidadeMaxima}</p>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">km/h</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;