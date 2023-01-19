import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListaAlumnoComponent } from './lista-alumno.component';
import { AlumnoService } from 'src/app/Services/alumno.service';
import { AlumnoServiceMock } from 'src/app/mocks/alumno.service.mock';

describe('ListaAlumnoComponent', () => {
  let component: ListaAlumnoComponent;
  let fixture: ComponentFixture<ListaAlumnoComponent>;
  let spyLoadData : jasmine.Spy;
  let alumnoService : AlumnoService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAlumnoComponent ],
      imports : [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAlumnoComponent);
    component = fixture.componentInstance;
    
    
    fixture.detectChanges();
  });

  it('Se debe crear el componente ListaAlumnoComponent', () => {
    expect(component).toBeTruthy();
  });



});
