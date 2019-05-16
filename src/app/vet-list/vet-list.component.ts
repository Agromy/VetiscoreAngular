import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vetement, PrixRange } from '../vetement';

@Component({
  selector: 'app-vet-list',
  templateUrl: './vet-list.component.html',
  styleUrls: ['./vet-list.component.scss']
})
export class VetListComponent implements OnInit {
@Input() blabla : Array<Vetement>;
/*grace à @input(), je récupère la propriété blabla qui est égale a vetements
que me donne vetilist.html dans la balise vet-list*/

@Output() vetementSelected = new EventEmitter<Vetement>();
/*je donne au parent "vetilist" un nouvel evènement que j'appelle
vetementSelected grâce à EventEmitter. Cette évènement passera une donnée
que je type en tant que Vetement.
Il sera utilisable dans la balise vet-list de vetilist par event binding */

selectVetement(vetement){
  console.log("au click je cible un vetement que j'affiche dans détail")
this.vetementSelected.emit(vetement);
}
/* La fonction SelecVetement à pour but de transmettre vetementSelected
une valeur(vetement) qui est défini par l'evenement (click).
Attention : emit est une methode native de angular qui donne a l'évennement
vetementSelected une valeur que j'appelle vetement qui sera récupérée
dans le parent (cf comm sur output) */
  ngOnInit() {
  }

}
