import { useState } from "react";
import { technology } from "../../data/technology";

function Technology() {
    const [technologie, setTechnologie] = useState<"ALL" | "Performance" | "Safety" | "Aerodynamics" | "Driving">("ALL");

    let filtra = technology;
    if (technologie === "ALL") {

    } else if (technologie === "Performance") {
        filtra = technology.filter((item) => item.categoria === "Performance");
    } else if (technologie === "Safety") {
        filtra = technology.filter((item) => item.categoria === "Safety");
    } else if (technologie === "Aerodynamics") {
        filtra = technology.filter((item) => item.categoria === "Aerodynamics");
    } else {
        filtra = technology.filter((item) => item.categoria === "Driving");
    }

    const categorias: ("ALL" | "Performance" | "Safety" | "Aerodynamics" | "Driving")[] = [
        "ALL", "Performance", "Safety", "Aerodynamics", "Driving"
    ];

    return (
        <div className="relative bg-black text-white py-24 px-6 overflow-hidden">
            <img
                src="https://s1.cdn.autoevolution.com/images/gallery/PORSCHE-911-GT3-RS--997-2--4325_3.jpg"
                alt="Porsche 911 GT3 RS Technology"
                className="absolute inset-0 w-full h-full object-cover opacity-15"
            />

            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">TECHNOLOGY</h2>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categorias.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setTechnologie(cat)}
                            className={`px-6 py-2 uppercase text-xs tracking-widest border transition-colors ${
                                technologie === cat
                                    ? "bg-red-600 border-red-600"
                                    : "border-white/20 hover:border-white/50"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {filtra.map((item) => (
                        <section
                            key={item.id}
                            className="border border-white/10 bg-black/60 backdrop-blur-sm overflow-hidden hover:border-red-600/50 transition-colors"
                        >
                            {item.imagem && (
                                <img
                                    src={item.imagem}
                                    alt={item.nome}
                                    className="w-full h-48 object-cover"
                                />
                            )}
                            <div className="p-6">
                                <p className="text-red-600 uppercase text-xs tracking-widest mb-2">{item.categoria}</p>
                                <h3 className="text-xl font-bold mb-3">{item.nome}</h3>
                                <p className="text-gray-400 text-sm mb-4">{item.descricao}</p>
                                <p className="text-gray-500 text-xs border-t border-white/10 pt-3">{item.beneficio}</p>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Technology;