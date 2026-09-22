import type { CarPart } from "../types/car.types";

export const carParts: CarPart[] = [
    {
        id: 1,
        titulo: "Front",
        descricao: "aerodinâmica avançada inspirada diretamente nas pistas de competição.",
        imagem: "https://cloudfront-eu-central-1.images.arcpublishing.com/arenaholdings/NBYJIOKMQZLRRG2W6QRI3QSVIY.jpg",
        specsTecnicas: [
            { id: 1, label: "Material", valor: "fibra de carbono" }
        ]
    },

    {
        id: 2,
        titulo: "Rear Wing",
        descricao: "é uma peça aerodinâmica de fibra de carbono desenvolvida para gerar downforce (pressão descendente) extrema nas pistas.",
        imagem: "https://ultimategraphics.studio/cdn/shop/files/GT3RSWING-02.png?v=1752776575&width=2250",
        specsTecnicas: [
            { id: 2, label: "Ajuste", valor: "Hidráulico, ativo" }
        ]
    },

    {
        id: 3,
        titulo: "Wheels",
        descricao: "são de liga leve forjada com trava central (center lock), medindo 20 polegadas na dianteira e 21 polegadas na traseira.",
        imagem: "https://www.or24.de/media/6a/fd/f8/1784691067/40632-gt3-rs-rad-original-porsche-992-gt3-rs-felgen-20-21-zoll-992044681-pyrored-sommerreifen8e39bd.jpg?ts=1784691067",
        specsTecnicas: [
            { id: 3, label: "Funçao", valor: "Aumenta downforce em até X kg" }
        ]
    },

    {
        id: 4,
        titulo: "Brakes",
        descricao: "utilizam pinças monobloco de alumínio em construção de 6 pistões na dianteira e 4 pistões na traseira, equipados de série ou com a opção de alta performance em cerâmica de carbono conhecida como Porsche Ceramic Composite Brake (PCCB).",
        imagem: "https://www.chicagomotorcars.com/imagetag/11240/3/l/Used-2019-Porsche-911-GT3-RS!-Weissach-Package!-Carbon-Ceramic-Brakes!-Front-End-Lifter!-1699311562.jpg",
        specsTecnicas: [
            { id: 4, label: "Material", valor: "Discos de compósito" }
        ]
    },

    {
        id: 5,
        titulo: "Exhaust",
        descricao: "aço inoxidável de alta resistência",
        imagem: "https://carbonwurks.com/wp-content/uploads/2024/08/Porsche_911_992_GT3_JCR_Titanium_Race_Exhaust-8.jpg",
        specsTecnicas: [
            { id: 5, label: "Material.", valor: "aço inoxidável" }
        ]
    },

    {
        id: 6,
        titulo: "Cockpit",
        descricao: "é focado em alta performance e inspirado diretamente no automobilismo de pista",
        imagem: "https://porschepictures.flowcenter.de/pmdb/thumbnail.cgi?id=298382&w=1935&h=1089&crop=1&public=1&cs=ddbe541a03109d8b",
        specsTecnicas: [
            { id: 6, label: "Funçao", valor: "Cockpit" }
        ]
    }
]