import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cours} from "../shared/models/cours";
import {CoursService} from "../shared/services/cours.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {
  public cours$: Observable<Cours[]> = this.coursService.cours;
  constructor(private coursService: CoursService) { }

  ngOnInit(): void {
  }


}
