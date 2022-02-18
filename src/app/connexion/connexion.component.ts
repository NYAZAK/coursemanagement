import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserModel} from "../shared/models/user.model";
import {ConnexionService} from "../shared/services/connexion.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  connexionForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private connexionService: ConnexionService, private route: Router) { }

  ngOnInit(): void {
    this.connexionForm = this.initConenxionForm();
  }

  public initConenxionForm(): FormGroup {
  return  this.formBuilder.group({
      nomUtilisateur: ['', Validators.required],
      motDePasse: ['', Validators.required] // ajotuer un paterne pour le mot de passe
    });
  }

  public connexionValide(){
   const entreUtilisateurNom = this.connexionForm.get('nomUtilisateur').value;
   const entreUtilisateurmdp = this.connexionForm.get('motDePasse').value;
   const connexion = this.connexionService.authutilisateur(
      {nomUtilisateur: entreUtilisateurNom,
        motDePasse: entreUtilisateurmdp});
   console.log(connexion);
    if(connexion) {
      this.route.navigateByUrl('/cours');
    }
  }



}
