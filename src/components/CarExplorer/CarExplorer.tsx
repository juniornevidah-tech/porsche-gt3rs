import { carParts } from "../../data/carExplorer";
import { useState } from "react";
import type { CarPart } from "../../types/car.types";

function CarExplorer() {
    const [carExplorer, setCarExplorer] = useState<CarPart>(carParts[0]);

    return (
        <div className="relative bg-black text-white py-24 px-6 overflow-hidden">
            <img
                src="https://i.etsystatic.com/40249492/r/il/eb0963/5389719333/il_fullxfull.5389719333_sbt3.jpg"
                alt="Porsche 911 GT3 RS"
                className="absolute inset-0 w-full h-full object-cover opacity-15"
            />

            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">EXPLORE EVERY DETAIL</h2>
                <p className="text-gray-500 text-center uppercase text-xs tracking-widest mb-12">
                    Select a part to explore
                </p>

                <section className="flex flex-wrap justify-center gap-3 mb-12">
                    {carParts.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setCarExplorer(item)}
                            className={`px-5 py-2 uppercase text-xs tracking-widest border transition-colors ${
                                carExplorer.id === item.id
                                    ? "bg-red-600 border-red-600"
                                    : "border-white/20 hover:border-white/50"
                            }`}
                        >
                            {item.titulo}
                        </button>
                    ))}
                </section>

                <div className="max-w-3xl mx-auto">
                    <img
                        src={carExplorer.imagem}
                        alt={carExplorer.titulo}
                        className="w-full h-80 object-cover mb-8"
                    />
                    <h3 className="text-3xl font-bold mb-3">{carExplorer.titulo}</h3>
                    <p className="text-gray-400 mb-6">{carExplorer.descricao}</p>
                    <ul className="flex flex-col gap-3">
                        {carExplorer.specsTecnicas.map((spec) => (
                            <li key={spec.id} className="flex justify-between border-b border-white/10 pb-3">
                                <strong className="text-gray-500 uppercase text-xs tracking-wider">{spec.label}</strong>
                                <span className="text-right max-w-sm">{spec.valor}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CarExplorer;