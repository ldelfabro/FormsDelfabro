import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCursoComponent } from './index-curso.component';

describe('IndexCursoComponent', () => {
  let component: IndexCursoComponent;
  let fixture: ComponentFixture<IndexCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
