
function Navbar() {
    const itens = [
        {id: 1, nome: "Overview"},
        {id: 2, nome: "Performance"},
        {id: 3, nome: "Engine"},
        {id: 4, nome: "Aerodynamics"},
        {id: 5, nome: "Design"},
        {id: 6, nome: "Technology"},
        {id: 7, nome: "Gallery"},
        {id: 8, nome: "Specifications"}
    ]
    return (
        <div className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
            <ul className="flex justify-center gap-8 py-4 text-white text-xs tracking-widest uppercase">
                {itens.map((item) => {
                    return (
                        <li key={item.id} className="hover:text-red-600 transition-colors cursor-pointer">
        <a href={`#${item.nome.toLowerCase()}`}>{item.nome}</a>
    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Navbar;