import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Cours} from "../../shared/models/cours";
import {CoursService} from "../../shared/services/cours.service";

@Component({
  selector: 'app-creercours',
  templateUrl: './creercours.component.html',
  styleUrls: ['./creercours.component.scss']
})
export class CreercoursComponent implements OnInit {
  creerCoursForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private coursService: CoursService) { }

  ngOnInit(): void {
    this.creerCoursForm = this.initCoursForm();
  }
  private initCoursForm(cours:Cours = { titre : '', categorie : '', description :  '', sujet :  '',
    date: '', heuredebut : '', nombreEtudiants: 0}) : FormGroup {
    return this.formBuilder.group({
      titre: [cours ? cours.titre : '', Validators.required],
      description: [cours ? cours.description : '', Validators.required],
      categorie: [cours ? cours.categorie : '', Validators.required],
      sujet: [cours ? cours.sujet : '', Validators.required],
      heuredebut: [cours ? cours.heuredebut : '', Validators.required],
      date: [cours ? cours.date : '', Validators.required],
      nombreEtudiants: [cours ? cours.nombreEtudiants : '', Validators.required],
    })
  }

  public creerCours(cours: Cours) {
    this.coursService.ajouterCours(cours);
    this.creerCoursForm.reset();
  }

}
