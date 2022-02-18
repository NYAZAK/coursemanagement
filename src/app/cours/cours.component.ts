import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cours} from "../shared/models/cours";
import {CoursService} from "../shared/services/cours.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit, OnDestroy {
  public cours: Cours[];
  public subscription = new Subscription();
  constructor(private coursService: CoursService) { }

  ngOnInit(): void {
    this.subscription.add(this.coursService.cours.subscribe((cours: Cours[]) => {
      this.cours = cours;
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
