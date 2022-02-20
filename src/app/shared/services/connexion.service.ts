import {Injectable, OnInit} from '@angular/core';
import {UserModel} from "../models/user.model";
import {ConnexionModel} from "../models/connexion.model";
import {AngularFireDatabase} from "@angular/fire/compat/database";

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
  pseudo: string;
  mdp: string;
  isAuth: true;
  data: any;
  constructor(private afdb: AngularFireDatabase) { }

  ngOnInit() {


  }

  public getUser(){
    return this.data = this.afdb.list('users').valueChanges();
  }

  public authutilisateur(donneesconnexion: ConnexionModel) : boolean
  {
    // @ts-ignore
    this.utilisateurs.map((utilisateur: UserModel) => {
      this.pseudo = utilisateur.pseudo;
      this.mdp = utilisateur.mdp;
      if(this.pseudo == donneesconnexion.nomUtilisateur &&
        this.mdp == donneesconnexion.motDePasse ){
        this.isAuth =true;
         return true;
      }
    });

    return true;
  }


}
