import { Component, Output, EventEmitter } from '@angular/core';
import { Vetement, PrixRange } from '../vetement';

@Component({
  selector: 'app-vet-create',
  templateUrl: './vet-create.component.html',
  styleUrls: ['./vet-create.component.scss']
})
export class VetCreateComponent{

@Output() VetementCreated = new EventEmitter<Vetement>()
/* avec Output je donne au parent, ici vetilist, un evenement que je créée
et appelle VetementCreated. la création de l'evennement se fait grace "new EventEmitter"
qui est un Objet angular permettant de fabriquer des ses propres evenement
je dois le typer car il s'agit d'un objet */

 newVet = new Vetement

 addVetement(){
this.VetementCreated.emit(this.newVet)
 }


}
