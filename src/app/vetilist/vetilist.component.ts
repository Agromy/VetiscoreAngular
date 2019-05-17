import { Component, OnInit } from '@angular/core';
import { Vetement, PrixRange } from '../vetement';
import { VetementProviderService} from '../vetement-provider.service'

@Component({
  selector: 'app-vetilist',
  templateUrl: './vetilist.component.html',
  styleUrls: ['./vetilist.component.scss']
})
export class VetilistComponent implements OnInit {

title = 'Vetiscore';
vetements : Array<Vetement>;
currentVet: Vetement



constructor ( vetementProvider : VetementProviderService){
  this.vetements=vetementProvider.vetements
  this.currentVet = this.vetements[0];
}


afficheDetail(vetement: Vetement){
this.currentVet = vetement;
}
/*Le but de la fonction affiche détail est de changer
la valeur de la variable currentVet qui est ensuite
donnée à vet-detail par property binding*/

addVetementToList(vetement: Vetement){
  console.log(vetement)
this.vetements.unshift(vetement)
this.currentVet = vetement;
}
/*La function a pour but d'ajouter au tableau "vetements"
une nouvelle valeur qui est contenue dans le parametre
appelé vetement qui a été passé grâce à l'evennement
VetementCreated.
On change ensuite la valeur du CurrentVet par celui
qui vient d'être créé*/

ngOnInit() {
  }

}

 