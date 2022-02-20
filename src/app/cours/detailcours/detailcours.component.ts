import {Component, Input, OnInit} from '@angular/core';
import {Cours} from "../../shared/models/cours";
import {CoursService} from "../../shared/services/cours.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-detailcours',
  templateUrl: './detailcours.component.html',
  styleUrls: ['./detailcours.component.scss']
})
export class DetailcoursComponent implements OnInit {
  public cours!: Cours;
  constructor(private coursService: CoursService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  this.activeRoute.paramMap.subscribe((param: ParamMap) => {
    const index = param.get('index');
    if(index) {
       this.coursService.getCours(+index);
    }
  })

  }

}
