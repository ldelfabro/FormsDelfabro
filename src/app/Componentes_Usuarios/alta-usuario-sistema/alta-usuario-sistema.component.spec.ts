import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaUsuarioSistemaComponent } from './alta-usuario-sistema.component';

describe('AltaUsuarioSistemaComponent', () => {
  let component: AltaUsuarioSistemaComponent;
  let fixture: ComponentFixture<AltaUsuarioSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaUsuarioSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaUsuarioSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
