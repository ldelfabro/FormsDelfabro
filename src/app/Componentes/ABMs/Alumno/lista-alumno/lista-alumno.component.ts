import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/Interfaces/IAlumno';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/Services/alumno.service';

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.css']
})
export class ListaAlumnoComponent implements OnInit {

  Alumnos : Alumno [];
  Alumnos$ : Observable<Alumno[]>;

  displayedColumns: string[] = ['id','editar','remover', 'nombre', 'telefono', 'fechaNacimiento', 'email', 'provincia', 'localidad'];

  constructor(public alumnoService: AlumnoService,  private router : Router) { 
    this.Alumnos = [];
  }

  ngOnInit(): void {

    this.Alumnos$ = this.alumnoService.getAll();

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
