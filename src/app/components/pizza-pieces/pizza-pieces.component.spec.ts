import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPiecesComponent } from './pizza-pieces.component';

describe('PizzaPiecesComponent', () => {
  let component: PizzaPiecesComponent;
  let fixture: ComponentFixture<PizzaPiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaPiecesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
