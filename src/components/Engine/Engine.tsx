import { engineSpecs, transmissionSpecs, drivetrainSpecs } from "../../data/engine";
import { useState } from "react";
import Modal from "../Modal/Modal";

function Engine() {
    const [engine, setEngine] = useState<"Engine" | "Transmission" | "Drivetrain">("Engine");
    const [modal, setModal] = useState<boolean>(false);

    let dadosAtivos = engineSpecs;
    if (engine === "Transmission") {
        dadosAtivos = transmissionSpecs;
    } else if (engine === "Drivetrain") {
        dadosAtivos = drivetrainSpecs;
    }

    return (
        <div className="relative bg-black text-white py-24 px-6 overflow-hidden">
            <img
                src="https://backiee.com/static/wallpapers/3840x2160/412620.jpg"
                alt="Porsche 911 GT3 RS Engine"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
            />

            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">THE ENGINE</h2>

                <Modal aberto={modal} onClose={() => setModal(false)} />
                <button
                    onClick={() => setModal(true)}
                    className="block mx-auto mb-8 px-8 py-3 border border-red-600 text-red-600 uppercase text-xs tracking-widest hover:bg-red-600 hover:text-white transition-colors"
                >
                    DISCOVER THE ENGINE
                </button>

                <div className="flex justify-center gap-4 mb-12">
                    <button onClick={() => setEngine("Engine")} className={`px-6 py-2 uppercase text-xs tracking-widest border transition-colors ${
                        engine === "Engine" ? "bg-red-600 border-red-600" : "border-white/20 hover:border-white/50"
                    }`}>Engine</button>
                    <button onClick={() => setEngine("Transmission")} className={`px-6 py-2 uppercase text-xs tracking-widest border transition-colors ${
                        engine === "Transmission" ? "bg-red-600 border-red-600" : "border-white/20 hover:border-white/50"
                    }`}>Transmission</button>
                    <button onClick={() => setEngine("Drivetrain")} className={`px-6 py-2 uppercase text-xs tracking-widest border transition-colors ${
                        engine === "Drivetrain" ? "bg-red-600 border-red-600" : "border-white/20 hover:border-white/50"
                    }`}>Drivetrain</button>
                </div>

                <div className="max-w-2xl mx-auto flex flex-col gap-4">
                    {dadosAtivos.map((item) => (
                        <section key={item.id} className="flex justify-between border-b border-white/10 pb-3">
                            <p className="text-gray-500 uppercase text-xs tracking-wider">{item.label}</p>
                            <p className="text-right max-w-xs">{item.valor}</p>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Engine;