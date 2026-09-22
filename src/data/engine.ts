import type { InfoItem } from "../types/car.types"
export const engineSpecs: InfoItem[] = [
    {
       id: 1,
       label: "Tipo de motor",
       valor: "motor boxer de 6 cilindros (ou flat-six) de 4,0 litros, naturalmente aspirado (sem turbos ou compressores)"
    },

    {
        id: 2,
        label: "Cilindrada",
        valor: "3.996 cm³",
    },

    {
        id: 3,
        label: "aspiração",
        valor: "motor boxer de 4,0 litros e 6 cilindros naturalmente aspirado",
    },

    {
        id: 4,
        label: "potência",
        valor: "525 cv (cavalos) a 8.500 rpm",
    },

    {
        id: 5,
        label: "torque",
        valor: "46,5 kgfm (465 Nm) a 6.300 rpm",
    },

    {
        id: 6,
        label: "rotação máxima",
        valor: "9.000 rpm",
    }

]



export const transmissionSpecs: InfoItem[] = [
  {
        id: 1,
        label: "tipo de câmbio",
        valor: "PDK (Porsche Doppelkupplungsgetriebe) automatizado de dupla embreagem e 7 marchas",
  }, 

  {
        id: 2,
        label: "número de marchas",
        valor: "7 marchas",
  },

  {
        id: 3,
        label: "troca de marcha (tempo/velocidade)",
        valor: "é controlada exclusivamente pelo câmbio automatizado de dupla embreagem PDK de 7 marchas",
  },
]

export const drivetrainSpecs: InfoItem[] = [
    {
        id: 1,
        label: "tipo de tração",
        valor: "tração traseira (RWD)"
    }
]