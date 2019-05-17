import { Component, Output, EventEmitter } from '@angular/core';
import { Vetement, PrixRange } from '../vetement';

@Component({
  selector: 'app-vet-create',
  templateUrl: './vet-create.component.html',
  styleUrls: ['./vet-create.component.scss']
})
export class VetCreateComponent{

@Output() vetementCreated = new EventEmitter<Vetement>();
/* avec Output je donne au parent, ici vetilist, un evenement que je créée
et appelle VetementCreated. la création de l'evennement se fait grace "new EventEmitter"
qui est un Objet angular permettant de fabriquer des ses propres evenement
je dois le typer car il s'agit d'un objet */

range = PrixRange;
/*je donne a ma class la propriété prix range pour pouvoir l'utiliser ensuite dans mon template (cf option de choix sur les prix)*/

 newVet = new Vetement;
 /*Je créée un variable newVet qui contient un nouvel objet Vetement de la 
 classe Vetement que j'ai importé. Cet objet contient */

 addVetement(){
   console.log(this.newVet)
this.vetementCreated.emit(this.newVet);
this.newVet = new Vetement
 };
/*Je donne a l'évènement VetementCreated une valeur grace au emit.
Cette valeur est le contenu de newVet.
Je dis à la fonction de recréer un nouvel objet Vetement car lorsque je donne
les valeurs (la reference de l'objet en vrai) avec submit et que je rentre 
de nouvelles valeurs, elle remplace celle de mon objet créer précédemment (d'ou la fabrication
d'objet vide avec le reset du formulaire)*/

}
