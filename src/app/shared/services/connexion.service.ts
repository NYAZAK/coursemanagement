import {Injectable, OnInit} from '@angular/core';
import {UserModel} from "../models/user.model";
import {ConnexionModel} from "../models/connexion.model";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import * as Firebase from 'firebase/app';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ConnexionService implements OnInit{
  /* CREATION MOKE POUR l'EXEMPLE  */
  utilisateurs: UserModel[] = [
    {
      id: "1",
      professeur: true,
      nom: "jean",
      prenom: "jean",
      pseudo: "jeanjean",
      dateNaissance: "12/12/12",
      sexe: "h",
      mdp: "azerty"
    },
    {
      id: "2",
      professeur: false,
      nom: "pierre",
      prenom: "paul",
      pseudo: "elevestudieux",
      dateNaissance: "12/12/12",
      sexe: "h",
      mdp: "jaimepaslecole"
    }
  ]
  user$: Observable<any>;
  constructor(private angularAuth: AngularFireAuth) {
    this.user$ = this.angularAuth.authState;
  }

  ngOnInit() {
  }


  /**
   * persmet de creer de nouveaux utilisateurs
   * @param email
   * @param motDePass
   * @return promess
   */
  public nouvelUtilisateur(email: string, motDePass: string){
    return this.angularAuth.createUserWithEmailAndPassword(email, motDePass)
  }

  public authUtilisateur(mail: string, motDePasse: string)
  {
   return this.angularAuth.signInWithEmailAndPassword(mail, motDePasse)
  }

  public seDeconnecter() {
    this.angularAuth.signOut();
  }

}
