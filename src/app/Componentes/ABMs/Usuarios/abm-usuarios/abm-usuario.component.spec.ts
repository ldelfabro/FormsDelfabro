import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AbmUsuarioComponent } from './abm-usuario.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AbmUsuarioComponent', () => {
 
  let component: AbmUsuarioComponent;
  let fixture: ComponentFixture<AbmUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmUsuarioComponent ],
      imports : [RouterTestingModule, HttpClientTestingModule ],
      providers: [
        FormBuilder
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AbmUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();   
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear componente ABMUsuarioComponent', () => {
    expect(component).toBeTruthy();
  });

});
