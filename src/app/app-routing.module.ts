import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnexionComponent} from "./auth/connexion/connexion.component";
import {NotfoundComponent} from "./layout/notfound/notfound.component";
import {CherchercoursComponent} from "./cours/cherchercours/cherchercours.component";
import {CreercoursComponent} from "./cours/creercours/creercours.component";
import {AuthGuard} from "./shared/guard/auth.guard";
import {CoursComponent} from "./cours/cours.component";
import {DetailcoursComponent} from "./cours/detailcours/detailcours.component";
import {CreationuserComponent} from "./auth/creationuser/creationuser.component";

const routes: Routes = [
  {path: "", redirectTo: 'connexion', pathMatch: 'full'},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'creationUtilisateur', component: CreationuserComponent},
  {path: 'cours', component: CoursComponent, children: [
      {path: 'rechercheCours', component: CherchercoursComponent},
      {path: 'creationcours', component: CreercoursComponent, canActivate: [AuthGuard]},
      {path: ':index', component: DetailcoursComponent},
      {path: ':index/modifier', component: CreercoursComponent},
      {path: '', redirectTo: '0', pathMatch: 'full'}
    ]},

  {path: "**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
