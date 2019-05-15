import { Component, OnInit } from '@angular/core';
import {Com} from "../com";
import {AjoutComService} from "../ajout-com.service";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
newCom = new Com();

  constructor(
    private provider: AjoutComService
  ) {  }

  addCom(){

    this.provider.add(this.newCom);
    /*Si on ne met pas this.newCom= new Com();,
      quand on push une 2ème valeur la 1ère est également modifiée
      Pour avoir une nouvelle valeur on attend un nouvel objet*/
    this.newCom= new Com();
  }
  comList: Array<Com>;

  ngOnInit() {
    //souscription à l'observable et fonction à faire au changement
    this.provider.getCom().subscribe(com => {
      this.comList = com
    });
  }
}


