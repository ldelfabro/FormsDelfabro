import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLoguearComponent } from './modal-loguear.component';

describe('ModalLoguearComponent', () => {
  let component: ModalLoguearComponent;
  let fixture: ComponentFixture<ModalLoguearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLoguearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLoguearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
