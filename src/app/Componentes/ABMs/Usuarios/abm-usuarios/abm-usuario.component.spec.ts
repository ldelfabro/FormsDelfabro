import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AbmUsuarioComponent } from './abm-usuario.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { UsuarioServiceMock } from 'src/app/mocks/usuario.service.mock';

fdescribe('AbmUsuarioComponent', () => {
 
  let component: AbmUsuarioComponent;
  let fixture: ComponentFixture<AbmUsuarioComponent>;
  let spyCreate : jasmine.Spy;
  let spyUpdate : jasmine.Spy;
  let spyDelete : jasmine.Spy;
  let service : UsuarioService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmUsuarioComponent ],
      imports : [RouterTestingModule, HttpClientTestingModule ],
      providers: [
        FormBuilder,
        {
          provide : UsuarioService,
          useClass : UsuarioServiceMock
        }
      ]
    })
    .compileComponents();
  
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmUsuarioComponent);
    component = fixture.componentInstance;

    service = TestBed.inject(UsuarioService);

    spyCreate = spyOn(service, 'add').and.callThrough()
    spyDelete = spyOn(service, 'remove').and.callThrough()
    spyUpdate = spyOn(service, 'update').and.callThrough()

    fixture.detectChanges();   
  });

  it('Debe crear componente ABMUsuarioComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Deben agregarse usuarios', () => {
    component.FormType = "Create";
    component.Profesor =  { nombre : '', apellido : '',  id : 0, email : '', pass: '' }

    component.formularioPrincipal.patchValue({
      nombre: 'pepe',
      apellido: 'test',
      email : 'asd@asd.com'
    });

    component.submit();
    expect(spyCreate).toHaveBeenCalled()
  })

  it('Deben eliminarse usuarios', () => {
    component.FormType = "Update";
    component.Profesor =  { nombre : '', apellido : '',  id : 0, email : '', pass: '' }

    component.formularioPrincipal.patchValue({
      nombre: 'pepe',
      apellido: 'test',
      email : 'asd@asd.com'
    });

    component.submit();
    expect(spyUpdate).toHaveBeenCalled()
  })

  it('Deben actualizarse usuarios', () => {
    component.FormType = "Delete";
    component.Profesor =  { nombre : '', apellido : '',  id : 0, email : '', pass: '' }

    component.formularioPrincipal.patchValue({
      nombre: 'pepe',
      apellido: 'test',
      email : 'asd@asd.com'
    });

    component.submit();
    expect(spyDelete).toHaveBeenCalled()
  })

});
