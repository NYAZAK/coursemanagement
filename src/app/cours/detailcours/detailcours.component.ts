import {Component, Input, OnInit} from '@angular/core';
import {Cours} from "../../shared/models/cours";
import {CoursService} from "../../shared/services/cours.service";
import {ActivatedRoute, ParamMap, Route, Router} from "@angular/router";
import {ConnexionService} from "../../shared/services/connexion.service";

@Component({
  selector: 'app-detailcours',
  templateUrl: './detailcours.component.html',
  styleUrls: ['./detailcours.component.scss']
})
export class DetailcoursComponent implements OnInit {
  public cours!: any;
  isProf: boolean = false;

  constructor(private coursService: CoursService,private connexionService: ConnexionService,  private activeRoute: ActivatedRoute, private route: Router) {
  }

  ngOnInit(): void {
  this.activeRoute.paramMap.subscribe((param: ParamMap) => {
    const index = param.get('index');
    if(index) {
       this.coursService.getLesCours().subscribe(
        cours => {
          this.cours = cours[index];
        }
      );
    }
  })

    this.connexionService.user$.subscribe(
      prof => {
        if(prof.uid === 'zTOIGnNlSdTEAQNsAhtln0cN1892'){
          this.isProf = true;
        }
      }
    )
  }


  public supprimerCours(cours: Cours){
    this.coursService.supprimerCours(cours);
    this.route.navigateByUrl('cours/0');
  }

  public modifierCours(cours: any){
    //this.coursService.modifierCours(cours);
  }
}
