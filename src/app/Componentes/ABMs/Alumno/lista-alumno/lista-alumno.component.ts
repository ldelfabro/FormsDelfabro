import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alumno } from 'src/app/Interfaces/IAlumno';
import { CursoServiceService } from '../../../../Services/curso-service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.css']
})
export class ListaAlumnoComponent implements OnInit {

  Alumnos : Alumno [];
  @Output() AlumnoSeleccionadoId = new EventEmitter<number>();
  @Output() AlumnoSeleccionadoRemoverId = new EventEmitter<number>();
  Alumnos$ : Observable<Alumno[]>;

  displayedColumns: string[] = ['id','editar','remover', 'nombre', 'telefono', 'fechaNacimiento', 'email', 'provincia', 'localidad'];

  constructor(public cursoService: CursoServiceService,  private router : Router) { 
    this.Alumnos = [];
  }

  ngOnInit(): void {

    this.Alumnos$ = this.cursoService.getAlumnos();

    this.Alumnos$.subscribe((alumnos) => {
      this.Alumnos = alumnos;
    })

  }
  actualizar(id : number) : void {
    this.router.navigate(['Alumno/Update/' + id])
  }
  remover(id : number) : void {
    this.router.navigate(['Alumno/Delete/' + id])
  }
}
