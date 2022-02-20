import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CherchercoursComponent } from './cherchercours.component';

describe('CherchercoursComponent', () => {
  let component: CherchercoursComponent;
  let fixture: ComponentFixture<CherchercoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CherchercoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CherchercoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
