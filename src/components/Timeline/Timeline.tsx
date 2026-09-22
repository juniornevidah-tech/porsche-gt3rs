import { timeLine } from "../../data/timeline";
import { useState } from "react";
import type { TimelineItem } from "../../types/car.types";

function Timeline() {
    const [timesLine, setTimesLine] = useState<TimelineItem>(timeLine[0])

    return (
        <div className="relative bg-black text-white py-24 px-6 overflow-hidden">
            <img
                src="https://images.classic.com/vehicles/8a239d8a1a2b50bc20af66e79c548b493ec548a2.jpg?w=1200&h=676&fit=crop"
                alt="Porsche Heritage"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
            />

            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">THE EVOLUTION</h2>

                <div className="relative flex justify-center gap-4 md:gap-12 mb-16 max-w-4xl mx-auto">
                    <div className="absolute top-3 left-0 right-0 h-px bg-white/20" />
                    {timeLine.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setTimesLine(item)}
                            className="relative z-10 flex flex-col items-center cursor-pointer group"
                        >
                            <div
                                className={`w-6 h-6 rounded-full border-2 mb-4 transition-colors ${
                                    timesLine.id === item.id
                                        ? "bg-red-600 border-red-600"
                                        : "bg-black border-white/40 group-hover:border-white"
                                }`}
                            />
                            <h3 className="font-bold uppercase text-xs tracking-wider">{item.nome}</h3>
                            <p className="text-gray-500 text-xs">{item.ano}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-2xl mx-auto text-center">
                    <img
                        src={timesLine.imagem}
                        alt={timesLine.nome}
                        className="w-full h-64 object-cover mb-8"
                    />
                    <h3 className="text-3xl font-bold mb-2">{timesLine.nome} <span className="text-red-600">({timesLine.ano})</span></h3>
                    <p className="text-gray-400">{timesLine.descricao}</p>
                </div>
            </div>
        </div>
    )
}

export default Timeline;