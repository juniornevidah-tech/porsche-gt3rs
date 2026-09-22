export interface Car {
    nome: string;
    geracao: string;
    ano: number;
    motor: string;
    potencia: number;
    torque: number;
    velocidadeA100: number;
    velocidadeMaxima: number;
    imagem: string;
}

export interface InfoItem {
    id: number;
    label: string;
    valor: string;
}

export interface ModalProps {
    aberto: boolean;
    onClose: () => void;
}

export interface Color {
    id: number;
    nome: string;
    imagem: string;
}

export interface technologies {
    id: number;
    nome: string;
    categoria: "Performance" | "Safety" | "Aerodynamics" | "Driving";
    descricao: string;
    imagem: string;
    beneficio: string;
}

export interface CarPart {
    id: number;
    titulo: string;
    descricao: string;
    imagem: string;
    specsTecnicas: InfoItem[];
}

export interface GalleryImage {
    id: number;
    titulo: string;
    imagem: string;
}

export interface SpecCategory {
    categoria: string;
    specs: InfoItem[];
}

export interface TimelineItem {
    id: number;
    nome: string;
    ano: number;
    descricao: string;
    imagem: string;
}