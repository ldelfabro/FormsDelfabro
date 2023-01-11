import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { debounceTime, Observable } from 'rxjs';
import { Alumno } from 'src/app/Interfaces/IAlumno';
import { Curso } from 'src/app/Interfaces/ICurso';
import { AlumnoService } from 'src/app/Services/alumno.service';
import { CursoService } from 'src/app/Services/curso.service';

@Component({
  selector: 'app-modal-alumno-ingresar',
  templateUrl: './modal-alumno-ingresar.component.html',
  styleUrls: ['./modal-alumno-ingresar.component.css']
})
export class ModalAlumnoIngresarComponent implements OnInit {

  public Alumnos : Alumno [];
  public Curso : Curso;
  public formularioPrincipal: FormGroup;
  private  Alumnos$ : Observable<Alumno[]>;
  private Cursos$ : Observable<Curso>;

  constructor(public cursoService: CursoService, public alumnoService: AlumnoService, private fb : FormBuilder, public dialogRef: MatDialogRef<ModalAlumnoIngresarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number) { }

  ngOnInit(): void {

    this.Alumnos$ = this.alumnoService.getAll();

    this.Alumnos$.subscribe((alumnos) => {
      this.Alumnos = alumnos;   
      this.Cursos$ = this.cursoService.getById(this.data);
      this.Cursos$.subscribe((value) => {
      this.Curso = value;
      var _alumnosFinal : Alumno [] = [];
          this.Alumnos.forEach(function(element) {
              
              var rta = true;
              for(let k = 0; k < value.alumnos.length; k++){
                  if(value.alumnos[k].id == element.id)
                    rta = false;
              }
              if(rta)
                _alumnosFinal.push(element);
          })
        this.Alumnos = _alumnosFinal;
      })
    })

    this.formularioPrincipal = this.fb.group({
       alumnos : ['', [Validators.required]]
    });

  }

  onSubmit() : void {
    if(this.formularioPrincipal.valid){
      let alumnoIngresar : Alumno = this.formularioPrincipal.get('alumnos')?.value;
      this.cursoService.addAlumno(this.Curso.id, alumnoIngresar);
      this.dialogRef.close();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
