import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlumnoIngresarComponent } from './modal-alumno-ingresar.component';

describe('ModalAlumnoIngresarComponent', () => {
  let component: ModalAlumnoIngresarComponent;
  let fixture: ComponentFixture<ModalAlumnoIngresarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAlumnoIngresarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAlumnoIngresarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
