import { Component, Input, OnInit } from '@angular/core';
import { Alumno } from 'src/app/Interfaces/IAlumno';

@Component({
  selector: 'app-index-alumno',
  templateUrl: './index-alumno.component.html',
  styleUrls: ['./index-alumno.component.css']
})
export class IndexAlumnoComponent implements OnInit {

  @Input() Alumnos : Alumno [];
  public AlumnoSeleccionadoId : number;
  public AlumnoEditar : Alumno;
  public seccion : string = 'lista';
  constructor() { }

  ngOnInit(): void {
  }

  nuevoAlumno(alumno: Alumno) : void {
    this.seccion = 'lista';
    if(alumno.id == 0){
      alumno.id = this.Alumnos.length;
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
