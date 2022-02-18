import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Cours} from "../models/cours";

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  public cours: BehaviorSubject<Cours[]> = new BehaviorSubject<Cours[]>([
    { name: 'math',
      description:'ccours de calcul matriciel',
      categorie:'science dure',
      sujet: 'calculs matriciel',
      nombreEtudiants:42,
      heuredebut: "12"
    },
    { name: 'français',
      description:'ccours de litterature française',
      categorie:'litterature',
      sujet: 'civislisation française',
      nombreEtudiants:39,
      heuredebut: "14"
    },
  ])
  constructor() { }


  public getCours(index: number): Cours {
    return this.cours.value[index];
  }
}
