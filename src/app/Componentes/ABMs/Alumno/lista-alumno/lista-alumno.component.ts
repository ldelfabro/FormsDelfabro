import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/Interfaces/IAlumno';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/Services/alumno.service';
import { Usuario } from 'src/app/Interfaces/IUsuario';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { InscripcionService } from 'src/app/Services/inscripcion.service';
import { CursoService } from 'src/app/Services/curso.service';
import { Curso } from 'src/app/Interfaces/ICurso';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { loginStateUserSelector } from 'src/app/store/login/login.selectors';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.css']
})
export class ListaAlumnoComponent implements OnInit {

  Alumnos : Alumno [] = [];
  Alumnos$ : Observable<Alumno[]>;

  public usuarioLogueado : Observable<Usuario | null>;

  displayedColumns: string[] = ['id','editar','remover', 'nombre', 'telefono', 'fechaNacimiento', 'email', 'provincia', 'localidad', 'cursos'];

  constructor(private readonly store : Store<AppState>, private cursoService: CursoService,private inscripcionService: InscripcionService, private alumnoService: AlumnoService, private usuarioService: UsuarioService,  private router : Router) { 
    this.usuarioLogueado = this.store.select(loginStateUserSelector)
  }
  ngOnInit(): void {

    this.Alumnos$ = this.alumnoService.data$;
    this.alumnoService.getAll().subscribe((alumnos) => {
      
      this.Alumnos = alumnos;   
      var _cursos : Curso [];  

      this.cursoService.getAll().subscribe((cursos) => {
        _cursos = cursos;
      })

      this.inscripcionService.getAll().subscribe((inscripciones) => {
        this.Alumnos.forEach(function(alumno){
          alumno.Cursos = [];
          for(let p = 0; p < inscripciones.length; p++){
            if(inscripciones[p].IdAlumno == alumno.id) {
              let _curso = _cursos.filter( c=> c.id == inscripciones[p].IdCurso)[0];
              alumno.Cursos.push(_curso);
            }
          }
        })
      })
    })

  }
  actualizar(id : number) : void {
    this.router.navigate(['/home/alumno/Update/' + id])
  }
  remover(id : number) : void {
    this.router.navigate(['/home/alumno/Delete/' + id])
  }
  CrearNuevo() : void {
    this.router.navigate(['/home/alumno/Create'])
  }

}
