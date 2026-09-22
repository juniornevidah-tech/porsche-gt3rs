import type { ModalProps } from "../../types/car.types";
import { engineSpecs } from "../../data/engine";

function Modal({ aberto, onClose }: ModalProps) {
    if (aberto === false) {
        return null;
    } else {
        return (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4">
                <div className="bg-black border border-white/20 max-w-lg w-full p-8 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/60 hover:text-red-600 text-2xl"
                    >
                        ×
                    </button>
                    <h3 className="text-2xl font-bold text-white mb-6">THE ENGINE</h3>
                    <div className="flex flex-col gap-4">
                        {engineSpecs.map((item) => (
                            <div key={item.id} className="flex justify-between border-b border-white/10 pb-3">
                                <p className="text-gray-500 uppercase text-xs tracking-wider">{item.label}</p>
                                <p className="text-white text-right max-w-xs">{item.valor}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;