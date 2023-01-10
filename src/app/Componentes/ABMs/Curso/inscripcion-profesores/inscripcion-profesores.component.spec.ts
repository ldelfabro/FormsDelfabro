import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionProfesoresComponent } from './inscripcion-profesores.component';

describe('InscripcionProfesoresComponent', () => {
  let component: InscripcionProfesoresComponent;
  let fixture: ComponentFixture<InscripcionProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionProfesoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
