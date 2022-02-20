import {FirebaseOperation} from "@angular/fire/compat/database/interfaces";

export interface Cours {
  key?: FirebaseOperation;
  id?: string;
  titre: string;
  description: string;
  categorie: string;
  sujet: string;
  heuredebut: string;
  date?: string;
  nombreEtudiants: number;
}
