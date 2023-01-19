import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModalAlumnoIngresarComponent } from './modal-alumno-ingresar.component';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('ModalAlumnoIngresarComponent', () => {

  const model: any = {
    ActionButton: 'Delete',
    SupportingText: 'Are you sure?',
  };

  let component: ModalAlumnoIngresarComponent;
  let fixture: ComponentFixture<ModalAlumnoIngresarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAlumnoIngresarComponent ],
      imports : [HttpClientTestingModule],
      providers: [
        FormBuilder,
        { 
          provide: MatDialogRef,
          useValue: []
        }, 
        { 
          provide: MAT_DIALOG_DATA, 
          useValue: [] 
        } 
      ]
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
