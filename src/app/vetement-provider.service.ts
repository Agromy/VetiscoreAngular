import { Injectable } from '@angular/core';
import { Vetement, PrixRange } from './vetement';

@Injectable({
  providedIn: 'root'
})
export class VetementProviderService {

  vetements : Array<Vetement> = [
    {
      type : "Chaussettes",
      marque : "Comptoir des cotonniers",
      lieuFabrication : "France",
      materiauPrincipal : "Coton",
      prix : PrixRange.lt50e
          },
      
          {
      type : "Pantalon",
      marque : "Jules",
      lieuFabrication : "Chine",
      materiauPrincipal : "Synthétique",
      prix: PrixRange.b50100e
          },
          {
      type : "Costume",
      marque : "Gucchi",
      lieuFabrication : "Italie",
      materiauPrincipal : "Cashmire",
      prix: PrixRange.gt500e
          }
  ];

  blabla(){}
}
