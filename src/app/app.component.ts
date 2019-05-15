import { Component } from '@angular/core';
import { Vetement, PrixRange } from './vetement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Vetiscore';

vetements : Array<Vetement> = [
  {
    "type" : "Chaussettes",
    "marque" : "Comptoir des cotonniers",
    "lieuFabrication" : "France",
    "matériauPrincipal" : "Coton",
    "prix": ""
        },
    
        {
    "type" : "Pantalon",
    "marque" : "Jules",
    "lieuFabrication" : "Chine",
    "matériauPrincipal" : "Synthétique",
    "prix": ""
        },
        {
    "type" : "Costume",
    "marque" : "Gucchi",
    "lieuFabrication" : "Italie",
    "matériauPrincipal" : "Cashmire",
    "prix": ""
        }
]
}


