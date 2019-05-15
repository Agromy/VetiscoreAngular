import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vetement, PrixRange } from '../vetement';

@Component({
  selector: 'app-vet-detail',
  templateUrl: './vet-detail.component.html',
  styleUrls: ['./vet-detail.component.scss']
})
export class VetDetailComponent implements OnInit {

  @Input() detail : Array<Vetement>
  /*grace à @input(), je récupère la propriété détail que me donne vetilist.html
  dans la balise vet-detail*/
    constructor() { }
  
    ngOnInit() {
    }
  
  }
 
