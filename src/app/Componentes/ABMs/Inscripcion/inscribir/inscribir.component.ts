import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/Interfaces/IAlumno';
import { Curso } from 'src/app/Interfaces/ICurso';
import { Usuario } from 'src/app/Interfaces/IUsuario';
import { Inscripcion } from 'src/app/Interfaces/IInscripciones';

import { AlumnoService } from 'src/app/Services/alumno.service';
import { CursoService } from 'src/app/Services/curso.service';
import { InscripcionService } from 'src/app/Services/inscripcion.service';
import { AppState } from 'src/app/store/app.reducer';
import { loginStateUserSelector } from 'src/app/store/login/login.selectors';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-inscribir',
  templateUrl: './inscribir.component.html',
  styleUrls: ['./inscribir.component.css']
})
export class InscribirComponent implements OnInit {
  
  ErrorLog = '';
  SuccessLog = '';

  public FormType : string;

  Alumnos : Alumno [] = [];
  AlumnosInscriptos : Alumno [] = [];

  Alumnos$ : Observable<Alumno[]>;

  Curso : Curso;
  Curso$ : Observable<Curso[]>;
  
  usuarioLogueado : Usuario;
  formularioPrincipal: FormGroup;
  nuevaInscripcion : Inscripcion | null;

  displayedColumns: string[] = ['id','remover', 'nombre', 'telefono', 'fechaNacimiento', 'email', 'provincia', 'localidad'];

  dataSource = new MatTableDataSource<Alumno>();

  constructor(private activateRoute : ActivatedRoute, 
    private fb : FormBuilder, 
    private cursoService: CursoService,
    private inscripcionService: InscripcionService, 
    private alumnoService: AlumnoService,
    private readonly store : Store<AppState>) {
       this.store.select(loginStateUserSelector).subscribe((value) => {
        if(value)
          this.usuarioLogueado = value;
       })
     }

  ngOnInit(): void {

    this.activateRoute.url.subscribe(value => {   
      this.FormType = value[0].path.toString();
    });


    this.activateRoute.params.subscribe(_param => {

      this.Alumnos$ = this.alumnoService.data$;
      this.Alumnos$.subscribe((alumnos) => {   
  
        this.inscripcionService.getByCursoId(_param["parametro"]).subscribe((inscripciones) => {
          this.Alumnos = [];
          console.log(alumnos)
          console.log(inscripciones)

          for(let i = 0; i < alumnos.length; i++){
              if(inscripciones.filter(c=> c.IdAlumno == alumnos[i].id).length == 0)
                this.Alumnos.push(alumnos[i]);
              else
                this.AlumnosInscriptos.push(alumnos[i]);
          }
          this.dataSource.data = this.AlumnosInscriptos;

        })
      })
      this.cursoService.getById(_param["parametro"]).subscribe(value => {
        if(value){
            this.Curso = value;
        }
      });
    });

    this.formularioPrincipal = this.fb.group({
      alumnos : ['', [Validators.required]],
    });

  }
  submit() : void {

    this.ErrorLog = '';
    this.SuccessLog = '';
    if(this.formularioPrincipal.valid) {

      console.log(this.formularioPrincipal.get('alumnos')?.value);

      let alumnoInscriptoId = this.formularioPrincipal.get('alumnos')?.value;
      let alumno = this.Alumnos.filter(c => c.id == alumnoInscriptoId)[0];
      this.inscripcionService.add({
        id:0,
        fechaInscripcion : new Date(),
        IdAlumno : this.formularioPrincipal.get('alumnos')?.value,
        Alumno : alumno,
        IdCurso :  this.Curso.id,
        Curso: this.Curso,
        IdUsuarioInscripcion : this.usuarioLogueado.id,
        UsuarioInscripcion : this.usuarioLogueado
      });
      this.SuccessLog = 'El alumno ' 
      + alumno.nombre
      + alumno.apellido
      + ' se agregó al curso'

      this.formularioPrincipal.get('alumnos')?.setValue(null);
      this.AlumnosInscriptos.push(alumno);
      this.Alumnos = this.Alumnos.filter(c => c.id != alumnoInscriptoId)
      this.dataSource.data = this.AlumnosInscriptos;
    }
    else{
      this.ErrorLog = 'Debe seleccionar un alumno';
    }

  }

  desinscribir(id : number) : void {
    this.inscripcionService.getByCursoId(this.Curso.id).subscribe((inscripciones) => {
      for(let i = 0; i < inscripciones.length; i ++){
        if(inscripciones[i].IdAlumno == id){
          this.inscripcionService.remove(inscripciones[i].id);
        }
      }
      this.Alumnos.push(this.AlumnosInscriptos.filter(c => c.id == id)[0])
      this.AlumnosInscriptos = this.AlumnosInscriptos.filter(c => c.id != id)
      this.dataSource.data = this.AlumnosInscriptos;
    })
  }

}


