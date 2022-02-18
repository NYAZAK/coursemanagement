import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Cours} from "../../shared/models/cours";

@Component({
  selector: 'app-creercours',
  templateUrl: './creercours.component.html',
  styleUrls: ['./creercours.component.scss']
})
export class CreercoursComponent implements OnInit {
  creerCoursForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.creerCoursForm = this.initCoursForm();
  }

  private initCoursForm(cours:Cours = { name : '', categorie : 'categorie', description :  '', sujet :  'sujet',
    date: '', heuredebut : '', nombreEtudiants: 0}) : FormGroup{
    return this.formBuilder.group({
      name: [cours ? cours.name : '', Validators.required],
      description: [cours ? cours.description : '', Validators.required],
      categorie: [cours ? cours.categorie : '', Validators.required],
      sujet: [cours ? cours.sujet : '', Validators.required],
      heuredebut: [cours ? cours.heuredebut : '', Validators.required],
      date: [cours ? cours.date : '', Validators.required],
      nombreEtudiants: [cours ? cours.nombreEtudiants : '', Validators.required],
    })
  }

  public creerCours(cours: Cours) {
    console.log(cours);
  }

}
