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

currentVet = this.vetements[0];

afficheDetail(vetement: Vetement){
this.currentVet = vetement;
}
/*Le but de la fonction affiche détail est de changer
la valeur de la variable currentVet qui est ensuite
donnée à vet-detail par property binding*/

ngOnInit() {
  }

}

 