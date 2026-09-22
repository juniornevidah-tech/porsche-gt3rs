import { gallery } from "../../data/gallery";
import { useState } from "react";

function Gallery() {
    const [indiceAberto, setIndiceAberto] = useState<number | null>(null);

    return (
        <div className="relative bg-black text-white py-24 px-6 overflow-hidden">
            <img
                src="https://www.motortread.com/wp-content/uploads/2022/07/2023-Porsche-911-GT3-R-Rear-Three-Quarter-Wallpaper.jpg"
                alt="Porsche 911 GT3 RS"
                className="absolute inset-0 w-full h-full object-cover opacity-15"
            />

            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">GALLERY</h2>

                <section className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {gallery.map((item, index) => (
                        <div key={item.id} className="relative group cursor-pointer overflow-hidden" onClick={() => setIndiceAberto(index)}>
                            <img
                                src={item.imagem}
                                alt={item.titulo}
                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <p className="uppercase text-xs tracking-widest">{item.titulo}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>

            {indiceAberto !== null && (
                <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center px-4">
                    <button
                        onClick={() => setIndiceAberto(null)}
                        className="absolute top-6 right-6 text-white/60 hover:text-red-600 text-3xl"
                    >
                        ×
                    </button>

                    <button
                        onClick={() => {
                            if (indiceAberto > 0) {
                                setIndiceAberto(indiceAberto - 1);
                            }
                        }}
                        disabled={indiceAberto === 0}
                        className="absolute left-4 md:left-10 text-white/60 hover:text-red-600 text-4xl disabled:opacity-20 disabled:hover:text-white/60"
                    >
                        ‹
                    </button>

                    <div className="max-w-3xl w-full text-center">
                        <img
                            src={gallery[indiceAberto].imagem}
                            alt={gallery[indiceAberto].titulo}
                            className="w-full max-h-[70vh] object-contain mx-auto"
                        />
                        <p className="text-gray-400 uppercase text-xs tracking-widest mt-6">
                            {gallery[indiceAberto].titulo}
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            if (indiceAberto < gallery.length - 1) {
                                setIndiceAberto(indiceAberto + 1);
                            }
                        }}
                        disabled={indiceAberto === gallery.length - 1}
                        className="absolute right-4 md:right-10 text-white/60 hover:text-red-600 text-4xl disabled:opacity-20 disabled:hover:text-white/60"
                    >
                        ›
                    </button>
                </div>
            )}
        </div>
    )
}

export default Gallery;