import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {ConnexionService} from "../../shared/services/connexion.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() public connecter: boolean;
  isProf: boolean= false;
  constructor(public connexionService: ConnexionService, private route: Router) {
  }

  ngOnInit(): void {
  }

  public seDeconnecter() {
    this.connexionService.seDeconnecter();
    this.route.navigateByUrl('connexion');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isProf = false;
    console.log(changes);
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








}
