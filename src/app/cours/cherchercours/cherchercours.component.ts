import {Component, Input, OnInit} from '@angular/core';
import {Cours} from "../../shared/models/cours";

@Component({
  selector: 'app-cherchercours',
  templateUrl: './cherchercours.component.html',
  styleUrls: ['./cherchercours.component.scss']
})
export class CherchercoursComponent implements OnInit {
  @Input() public cours$: Cours[];
  public search = '';
  constructor() { }

  ngOnInit(): void {

  }

}
