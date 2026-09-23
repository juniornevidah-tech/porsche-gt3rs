import { overview } from "../../data/overview";

function Overview() {
    return (
        <div className="relative bg-black text-white py-24 px-6 overflow-hidden">
            <img
                src="/gt3.jpg"
                alt="Porsche 911 GT3 RS"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            />

            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Built for the Track.</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {overview.map((item) => (
                        <div key={item.label} className="border border-white/10 rounded-lg p-6 bg-black/60 backdrop-blur-sm hover:border-red-600/50 transition-colors">
                            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">{item.label}</p>
                            <p className="text-lg font-semibold">{item.valor}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Overview;