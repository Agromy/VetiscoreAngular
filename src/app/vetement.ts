export class Vetement {
    type: string;
    marque: string;
    lieuFabrication: string;
    matériauPrincipal : string;
    prix : ""
}

export enum PrixRange {
    lt50e= "<50€",
    b50100e= "50-100€",
    b100200e="100-200€",
    b200500e="200-500",
    gt500e=">500€"
}