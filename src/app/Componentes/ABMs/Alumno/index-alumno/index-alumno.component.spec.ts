import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAlumnoComponent } from './index-alumno.component';

describe('IndexAlumnoComponent', () => {
  let component: IndexAlumnoComponent;
  let fixture: ComponentFixture<IndexAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
