import { useState } from "react";
import { colors } from "../../data/colors";
import type { Color } from "../../types/car.types";

function Colors() {
    const [color, setColor] = useState<Color>(colors[0]);

    return (
        <div className="relative bg-black text-white py-24 px-6 text-center overflow-hidden">
            <img
                src="https://www.porschenorthhouston.com/blogs/1352/wp-content/uploads/2018/07/Screen-Shot-2018-07-13-at-12.32.47-PM.png"
                alt="Porsche 911 GT3 RS"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
            />

            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">CHOOSE YOUR GT3 RS</h2>

                <img
                    src={color.imagem}
                    alt={color.nome}
                    className="max-w-2xl w-full mx-auto mb-8"
                />

                <p className="text-red-600 uppercase tracking-widest text-sm mb-12">{color.nome}</p>

                <div className="flex justify-center gap-6">
                    {colors.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setColor(item)}
                            className={`px-6 py-2 uppercase text-xs tracking-widest border transition-colors ${
                                color.id === item.id
                                    ? "bg-red-600 border-red-600"
                                    : "border-white/20 hover:border-white/50"
                            }`}
                        >
                            {item.nome}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Colors;