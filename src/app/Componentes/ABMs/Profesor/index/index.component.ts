import { Component, Input, OnInit } from '@angular/core';
import { Profesor } from 'src/app/Interfaces/IProfesor';
import { CursoServiceService } from '../../../../Services/curso-service.service';

@Component({
  selector: 'app-profesor-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  Profesores : Profesor [];

  constructor(private cursoService : CursoServiceService) { }

  ngOnInit(): void {
    this.Profesores = this.cursoService.obtenerDatos().profesores;
  }

}
