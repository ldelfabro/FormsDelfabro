import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuarioService } from './usuario.service';
import { UsuarioServiceMock } from '../mocks/usuario.service.mock';

fdescribe('UsuarioService', () => {
  let service: UsuarioService;
  let spyDesloguear : jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule ],
      providers: [
        {
          provide : UsuarioService,
          useClass : UsuarioServiceMock
        }
      ]
    });
    service = TestBed.inject(UsuarioService);
    spyDesloguear = spyOn(service, 'desloguear').and.callThrough()

  });

  it('Se debe crear el service usuario', () => {
    expect(service).toBeTruthy();
  });
 
  it('Se debe desloguear', () => {
    service.desloguear();
    expect(spyDesloguear).toHaveBeenCalled();
  });
  it('Debe funcionar el cambio de logueo', () => {
    service.setLogueado(true)
    service.getLogueado().subscribe((result) => {
        expect(result).toBeTrue()
    });
  });
  it('Debe funcionar el logueo', () => {
    service.loguear('test@test','test').subscribe((result) => {
      expect(result.nombre).toBe("test")
    });
  });
});
