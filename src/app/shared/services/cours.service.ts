import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {Cours} from "../models/cours";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private afdb: AngularFireDatabase, private afs: AngularFirestore) { }

  public getLesCours() : Observable<any>{
  return  this.afdb.list('cours').snapshotChanges().pipe(
      map(item => {
        // @ts-ignore
        return item.map(cours => ({key: cours.key, ...cours.payload.val()}))
      })
    )
  }

  public ajouterCours(cours: Cours) {
    return this.afdb.list('cours').push(cours);
  }

  public supprimerCours(cours: Cours) {
    return this.afdb.list('cours').remove(cours.key);
  }

  public modifierCours(cours: Cours) {
    return this.afdb.object('cours').update(cours);
  }
}
