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
export class AuthGuard implements CanActivate, CanActivateChild {
  // todo 2 verifications : si la personne est connectée, et deuxiement le statut de la personne Eleve ou Professeur
  isProf: boolean;
  constructor(private serviceConexion: ConnexionService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.serviceConexion.user$.subscribe(isprof => {
      console.log(isprof)
      this.isProf =  isprof.uid == 'zTOIGnNlSdTEAQNsAhtln0cN1892';
    })
    console.log(this.isProf, 'ddd');
    return false;

  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   return true;
  }


}
