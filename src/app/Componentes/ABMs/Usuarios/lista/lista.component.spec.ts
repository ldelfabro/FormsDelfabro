import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListaUsuarioComponent } from '../lista/lista.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ListaUsuarioComponent', () => {
  let component: ListaUsuarioComponent;
  let fixture: ComponentFixture<ListaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaUsuarioComponent ],
      imports : [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear componente ListaComponent', () => {
    expect(component).toBeTruthy();
  });
});
