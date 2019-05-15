import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vetement, PrixRange } from '../vetement';

@Component({
  selector: 'app-vet-list',
  templateUrl: './vet-list.component.html',
  styleUrls: ['./vet-list.component.scss']
})
export class VetListComponent implements OnInit {
@Input() vetementList : Array<Vetement>
  constructor() { }

  ngOnInit() {
  }

}
