import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/Interfaces/IAlumno';
import { Curso } from 'src/app/Interfaces/ICurso';
import { CursoService } from 'src/app/Services/curso.service';
import { ModalAlumnoIngresarComponent } from '../modal-alumno-ingresar/modal-alumno-ingresar.component';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  @Input() cursoId : number;
  @Input() FormType : string;
  Alumnos : Alumno[] = [];
  Alumno$ : Observable<Alumno[]>;
  displayedColumnsAlumnos: string[] = ['id','remover', 'nombre', 'telefono', 'fechaNacimiento', 'email', 'provincia', 'localidad'];
  public formularioPrincipal: FormGroup;

  constructor(public cursoService : CursoService, public dialog: MatDialog, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.Alumno$ = this.cursoService.getAlumnosById(this.cursoId);

    this.Alumno$.subscribe(value => {
      if(value)
          this.Alumnos = value;        
    });

    this.formularioPrincipal = this.fb.group({
      nombre : ['', [Validators.required, Validators.maxLength(15)]]
    });
  }

  
  IngresarAlumno() : void {

    const dialogRef = this.dialog.open(ModalAlumnoIngresarComponent, {data : this.cursoId});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    });

  }

  removerAlumno(id : number) : void {
    this.cursoService.removeAlumno(this.cursoId, id);
  }

  pendienteImplementacion() : void {
    alert("Pendiente de implementación")
  }

}
