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

  public AlumnoSeleccionadoId : number;
  public AlumnoEditar : Alumno;
  public seccion : string = 'lista';
  constructor(private cursoService : CursoServiceService) { }

  ngOnInit(): void { }

  

  editarAlumno(id: number) : void {
    
    this.seccion = 'editar';
    var alumnoEditar : Alumno;

    for(let i = 0; i < this.Alumnos.length; i ++)
    {
        if(this.Alumnos[i].id == id) {
          this.AlumnoEditar = this.Alumnos[i];
        }
    }

  }

  eliminarAlumno(id: number): void {

    this.cursoService.eliminarAlumno(id);

    
  }


}
