import { wheelsBrakes } from "../../data/wheelsBrakes";
import { useState } from "react";

function WheelsBrakes() {
    const [wheelBrakes, setWheelBrakes] = useState<number | null>(null);

    return (
        <div className="relative bg-black text-white py-24 px-6 overflow-hidden">
            <img
                src="https://i.pinimg.com/1200x/10/24/e5/1024e50822b10a23e86c9da20c4d664f.jpg"
                alt="Porsche 911 GT3 RS Wheels and Brakes"
                className="absolute inset-0 w-full h-full object-cover opacity-15"
            />

            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">WHEELS & BRAKES</h2>

                <div className="max-w-2xl mx-auto flex flex-col gap-3">
                    {wheelsBrakes.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => {
                                if (wheelBrakes === item.id) {
                                    setWheelBrakes(null);
                                } else {
                                    setWheelBrakes(item.id);
                                }
                            }}
                            className="border border-white/10 bg-black/60 backdrop-blur-sm p-5 cursor-pointer hover:border-red-600/50 transition-colors"
                        >
                            <div className="flex justify-between items-center">
                                <p className="uppercase tracking-wider text-sm font-semibold">{item.label}</p>
                                <span className={`text-red-600 transition-transform ${wheelBrakes === item.id ? "rotate-45" : ""}`}>
                                    +
                                </span>
                            </div>
                            {wheelBrakes === item.id && (
                                <p className="text-gray-400 text-sm mt-4 leading-relaxed">{item.valor}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WheelsBrakes;