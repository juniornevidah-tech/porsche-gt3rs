import { useEffect, useState } from "react";
function useContador(valorFinal: number, ativo: boolean) {
    const [contagem, setContagem] = useState(0);

    useEffect(() => {
        if (ativo) {
            const interval = setInterval(() => {
                setContagem((prevContagem) => {
                    if(prevContagem >= valorFinal) {
                        clearInterval(interval);
                        return prevContagem
                    }
                    return prevContagem + 1
                })
            }, 10)
            return () => clearInterval(interval)
        }
    }, [ativo])
    return contagem;
}

export default useContador;