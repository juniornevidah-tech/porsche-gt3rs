import type { SpecCategory } from "../types/car.types";
import { engineSpecs, transmissionSpecs, drivetrainSpecs } from "./engine";
import { wheelsBrakes } from "./wheelsBrakes";

export const specificacao: SpecCategory[] = [
   { categoria: "Engine", specs: engineSpecs },
   { categoria: "Transmission", specs: transmissionSpecs },
   { categoria: "Drivetrain", specs: drivetrainSpecs},
   { categoria: "Wheels & Brakes", specs: wheelsBrakes}
]