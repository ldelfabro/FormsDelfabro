import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { AltaAlumnoComponent } from './alta-alumno.component';
import { AlumnoService } from 'src/app/Services/alumno.service';
import { AlumnoServiceMock } from 'src/app/mocks/alumno.service.mock';

fdescribe('AltaAlumnoComponent', () => {
  let component: AltaAlumnoComponent;
  let fixture: ComponentFixture<AltaAlumnoComponent>;
  let spyCreate : jasmine.Spy;
  let spyUpdate : jasmine.Spy;
  let spyDelete : jasmine.Spy;
  let service : AlumnoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaAlumnoComponent ],
      imports : [RouterTestingModule, HttpClientTestingModule ],
      providers: [
        FormBuilder,
        {
          provide : AlumnoService,
          useClass : AlumnoServiceMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaAlumnoComponent);   
    component = fixture.componentInstance;

    service = TestBed.inject(AlumnoService);

    spyCreate = spyOn(service, 'add').and.callThrough()
    spyDelete = spyOn(service, 'remove').and.callThrough()
    spyUpdate = spyOn(service, 'update').and.callThrough()

    fixture.detectChanges();
  });

  it('Debe crear componente AltaAlumnoComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Deben agregarse alumnos', () => {
    component.FormType = "Create";

    component.Alumno =  { nombre : '', apellido : '', telefono : '', id : 0, email : '', fechaNacimiento : new Date(), provincia : '', localidad : '' }

    component.formularioPrincipal.patchValue({
      nombre: 'pepe',
      telefono: '1234',
      apellido: 'test',
      fechaNacimiento: '1992/09/09',
      provincia: 'pepe',
      localidad: 'pepe',
      email : 'asd@asd.com'
    });

    component.submit();
    expect(spyCreate).toHaveBeenCalled()
  })

  it('Deben eliminarse alumnos', () => {
    component.FormType = "Update";
    component.Alumno =  { nombre : '', apellido : '', telefono : '', id : 0, email : '', fechaNacimiento : new Date(), provincia : '', localidad : '' }

    component.formularioPrincipal.patchValue({
      nombre: 'pepe',
      telefono: '1234',
      apellido: 'test',
      fechaNacimiento: '1992/09/09',
      provincia: 'pepe',
      localidad: 'pepe',
      email : 'asd@asd.com'
    });

    component.submit();
    expect(spyUpdate).toHaveBeenCalled()
  })

  it('Deben actualizarse alumnos', () => {
    component.FormType = "Delete";
    component.Alumno =  { nombre : '', apellido : '', telefono : '', id : 0, email : '', fechaNacimiento : new Date(), provincia : '', localidad : '' }

    component.formularioPrincipal.patchValue({
      nombre: 'pepe',
      telefono: '1234',
      apellido: 'test',
      fechaNacimiento: '1992/09/09',
      provincia: 'pepe',
      localidad: 'pepe',
      email : 'asd@asd.com'
    });

    component.submit();
    expect(spyDelete).toHaveBeenCalled()
  })


});
