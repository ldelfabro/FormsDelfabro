import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListaAlumnoComponent } from './lista-alumno.component';

describe('ListaAlumnoComponent', () => {
  let component: ListaAlumnoComponent;
  let fixture: ComponentFixture<ListaAlumnoComponent>;
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
