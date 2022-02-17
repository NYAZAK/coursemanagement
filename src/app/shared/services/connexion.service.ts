import { Injectable } from '@angular/core';
import {UserModel} from "../models/user.model";
import {ConnexionModel} from "../models/connexion.model";

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
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
      id: "1",
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
  constructor() { }


  public authutilisateur(donneesconnexion: ConnexionModel) : boolean
  {
    this.utilisateurs.map(utilisateur => {
      this.pseudo = utilisateur.pseudo;
      this.mdp = utilisateur.mdp;
    })
    if(this.pseudo == donneesconnexion.nomUtilisateur &&
      this.mdp == donneesconnexion.motDePasse ){
      return true;
    }
    return false;
  }


}
