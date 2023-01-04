import { Component, Input, OnInit } from '@angular/core';
import { Alumno } from 'src/app/Interfaces/IAlumno';
import { CursoServiceService } from '../../../../Services/curso-service.service';

@Component({
  selector: 'app-index-alumno',
  templateUrl: './index-alumno.component.html',
  styleUrls: ['./index-alumno.component.css']
})
export class IndexAlumnoComponent implements OnInit {

  Alumnos : Alumno [];
  public AlumnoSeleccionadoId : number;
  public AlumnoEditar : Alumno;
  public seccion : string = 'lista';
  constructor(private cursoService : CursoServiceService) { }

  ngOnInit(): void {
    this.Alumnos = this.cursoService.obtenerDatos().alumnos;
  }

  nuevoAlumno(alumno: Alumno) : void {
    this.seccion = 'lista';
    if(alumno.id == 0){
      if(this.Alumnos.length > 0){
        alumno.id = this.Alumnos[this.Alumnos.length -1].id + 1;
      }
      else{
        alumno.id = 1;
      }
      this.Alumnos.push(alumno);
    }
  }

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

    this.seccion = 'lista';
    this.Alumnos = this.Alumnos.filter(e => e.id !== id);

    
  }


}
