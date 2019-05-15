import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vetement, PrixRange } from '../vetement';

@Component({
  selector: 'app-vet-list',
  templateUrl: './vet-list.component.html',
  styleUrls: ['./vet-list.component.scss']
})
export class VetListComponent implements OnInit {
@Input() blabla : Array<Vetement>
/*grace à @input(), je récupère la propriété blabla que me donne vetilist.html
dans la balise vet-list*/
  constructor() { }

  ngOnInit() {
  }

}
