import { Component, OnInit } from '@angular/core';
import { Vetement, PrixRange } from '../vetement';

@Component({
  selector: 'app-vetilist',
  templateUrl: './vetilist.component.html',
  styleUrls: ['./vetilist.component.scss']
})
export class VetilistComponent implements OnInit {

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

ngOnInit() {
  }

}

 