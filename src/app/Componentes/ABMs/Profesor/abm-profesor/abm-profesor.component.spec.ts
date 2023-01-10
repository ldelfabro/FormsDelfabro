import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmProfesorComponent } from './abm-profesor.component';

describe('AbmProfesorComponent', () => {
  let component: AbmProfesorComponent;
  let fixture: ComponentFixture<AbmProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
