import { design } from "../../data/design";

function Design() {
    return (
        <div className="relative bg-black text-white py-24 px-6 overflow-hidden">
            <img
                src="https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2025/05/cropped-pcna23_0118_fine.jpg?q=49&fit=crop&w=825&dpr=2"
                alt="Porsche 911 GT3 RS Design"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
            />

            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">FORM FOLLOWS FUNCTION</h2>
                <p className="text-gray-500 text-center uppercase text-xs tracking-widest mb-12">
                    Every line has a purpose
                </p>

                <div className="flex gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory">
                    {design.map((item) => (
                        <div
                            key={item.id}
                            className="flex-shrink-0 w-72 md:w-96 snap-start"
                        >
                            <img
                                src={item.imagem}
                                alt={item.titulo}
                                className="w-full h-80 object-cover mb-3"
                            />
                            <p className="uppercase text-xs tracking-widest text-gray-400">{item.titulo}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Design;