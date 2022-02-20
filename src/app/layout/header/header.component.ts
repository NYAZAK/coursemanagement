import {AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ConnexionService} from "../../shared/services/connexion.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  isProf: boolean;
  constructor(public connexionService: ConnexionService, private route: Router) {
  }

  ngOnInit(): void {
    this.connexionService.user$.subscribe(

      prof => {
        if(prof){
          if(prof.uid === 'zTOIGnNlSdTEAQNsAhtln0cN1892'){
            this.isProf = true;
          }
        }
      }
    )
  }

  public seDeconnecter() {
    this.connexionService.seDeconnecter();
    this.route.navigateByUrl('connexion');

  }

  ngOnChanges(changes: SimpleChanges): void {

  }








}
