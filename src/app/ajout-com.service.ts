import { Injectable } from '@angular/core';
import {Com} from "./com";
import { HttpClient } from '@angular/common/http';
import {Observable, ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AjoutComService {
  nextId: number;

  com = new Array<Com>()

  comSubject = new ReplaySubject<Com[]>(1);

  constructor(private http:HttpClient) {

    this.http.get<Com[]>('./assets/com.json').subscribe(com =>{
      this.com = com;

      this.nextId = this.com.reduce(
        //maxId est un nombre, task un tableau => fait le max des task.id
        //maxId : valeur de la réduc
        (maxId: number, com: Com) => Math.max(maxId, com.id),
        0 //valeur initiale
      ) + 1 ;

      //notifie tous les abonnés avec la nouvelle version de la liste
      this.comSubject.next(this.com)
    })
  }

  getCom(): Observable<Com[]>{
    return this.comSubject.asObservable();
  }

  add(newCom: Com){
    newCom.id = this.nextId++;
    console.log('add')

    this.com.push(newCom);

    //notifie tous les abonnés avec la nouvelle version de la liste
    this.comSubject.next(this.com)
  }
}


