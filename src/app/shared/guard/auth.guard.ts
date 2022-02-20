import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Resolve,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {ConnexionService} from "../services/connexion.service";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // todo 2 verifications : si la personne est connectée, et deuxiement le statut de la personne Eleve ou Professeur
  isProf: boolean;
  isUser: boolean;
  constructor(private serviceConexion: ConnexionService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.serviceConexion.user$.subscribe(user => {
      console.log(user)
      if(user.email){
        this.isUser = true;
      }
      this.isProf =  user.uid == 'zTOIGnNlSdTEAQNsAhtln0cN1892';
    })
    return  this.isProf;
  }




}
