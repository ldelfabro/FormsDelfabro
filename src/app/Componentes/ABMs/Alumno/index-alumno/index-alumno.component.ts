import { Component, Input, OnInit } from '@angular/core';
import { Alumno } from 'src/app/Interfaces/IAlumno';
import { CursoServiceService } from '../../../../Services/curso-service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-index-alumno',
  templateUrl: './index-alumno.component.html',
  styleUrls: ['./index-alumno.component.css']
})
export class IndexAlumnoComponent implements OnInit {

  public Alumnos :  Alumno[];

  constructor() { }

  ngOnInit(): void { }


}
