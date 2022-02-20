import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcoursComponent } from './detailcours.component';

describe('DetailcoursComponent', () => {
  let component: DetailcoursComponent;
  let fixture: ComponentFixture<DetailcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
