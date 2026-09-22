import { specificacao } from "../../data/specifications";
import { useState } from "react";

function Specifications() {
    const [specifica, setSpecifica] = useState<string>("Engine")

    let dadosAtivos = specificacao.find((item) => item.categoria === specifica)?.specs || [];

    return (
        <div className="relative bg-black text-white py-24 px-6 overflow-hidden">
            <img
                src="https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2025/05/cropped-pcna23_0119_fine.jpg?q=49&fit=contain&w=750&h=422&dpr=2"
                alt="Porsche 911 GT3 RS Blueprint"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
            />

            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">TECHNICAL SPECIFICATIONS</h2>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {specificacao.map((item) => (
                        <button
                            key={item.categoria}
                            onClick={() => setSpecifica(item.categoria)}
                            className={`px-5 py-2 uppercase text-xs tracking-widest border transition-colors ${
                                specifica === item.categoria
                                    ? "bg-red-600 border-red-600"
                                    : "border-white/20 hover:border-white/50"
                            }`}
                        >
                            {item.categoria}
                        </button>
                    ))}
                </div>

                <div className="max-w-2xl mx-auto flex flex-col gap-4">
                    {dadosAtivos.map((item) => (
                        <div key={item.id} className="flex justify-between border-b border-white/10 pb-3 bg-black/40 backdrop-blur-sm px-4">
                            <p className="text-gray-500 uppercase text-xs tracking-wider">{item.label}</p>
                            <p className="text-right max-w-xs">{item.valor}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Specifications;