import { Pipe, PipeTransform } from '@angular/core';
import {Cours} from "../models/cours";

@Pipe({
  name: 'recherche'
})
export class RecherchePipe implements PipeTransform {

  transform(cours: Cours[], recherche: string): any  {
    if(!cours){
      console.log('pas cours');
      return cours;
    }
    if(!recherche) {
      console.log('pas recherche');
      return cours;
    }
    return cours.filter(cours => {
      cours.titre.toLowerCase().includes(recherche.toLowerCase());
    });
  }

}
