import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerEntregableComponent } from './primer-entregable.component';

describe('PrimerEntregableComponent', () => {
  let component: PrimerEntregableComponent;
  let fixture: ComponentFixture<PrimerEntregableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerEntregableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerEntregableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
