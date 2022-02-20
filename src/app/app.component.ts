import { Component } from '@angular/core';
import {ConnexionService} from "./shared/services/connexion.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isconnected: any;
  constructor(private connexion: ConnexionService) {
    this.connexion.user$.subscribe(
      (user) => {
       if(user == null) {
         return this.isconnected = false;
       }
       return this.isconnected = true;
      }
    )
    console.log(this.isconnected, 'us');
  }


}
