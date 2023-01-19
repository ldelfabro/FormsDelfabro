import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexUsuarioComponent } from './index.component';


describe('IndexUsuarioComponent', () => {
  let component: IndexUsuarioComponent;
  let fixture: ComponentFixture<IndexUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear componente IndexUsuario', () => {
    expect(component).toBeTruthy();
  });
});
