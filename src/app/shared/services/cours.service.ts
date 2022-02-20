import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Cours} from "../models/cours";
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private afdb: AngularFireDatabase) { }

  public getCours(index: number) {
    return this.afdb.list('cours');
  }
  public getLesCours() : Observable<any>{
    return this.afdb.list('cours').valueChanges();
  }

  public ajouterCours(cours: Cours) {
    return this.afdb.list('cours').push(cours);
  }
}
