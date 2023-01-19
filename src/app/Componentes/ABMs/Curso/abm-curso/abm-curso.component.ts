import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/Interfaces/ICurso';
import { CursoService } from 'src/app/Services/curso.service';
import { ModalAlumnoIngresarComponent } from '../modal-alumno-ingresar/modal-alumno-ingresar.component';

@Component({
  selector: 'app-abm-curso',
  templateUrl: './abm-curso.component.html',
  styleUrls: ['./abm-curso.component.css']
})

export class AbmCursoComponent implements OnInit {

  Curso : Curso;
  Curso$ : Observable<Curso>;
  public parametroId : number;
  public FormType : string;
  public formularioPrincipal: FormGroup;
  displayedColumnsAlumnos: string[] = ['id','remover', 'nombre', 'telefono', 'fechaNacimiento', 'email', 'provincia', 'localidad'];

  constructor(public dialog: MatDialog, private activateRoute : ActivatedRoute, private router : Router, private fb : FormBuilder, public cursoService : CursoService) { }

  ngOnInit(): void {

    this.Curso = {descripcion: '', comision : '', nombre : '', alumnos: [], usuarios : [], notas : [], materias : [], id : 0, profesor : { apellido : '', email : '', nombre : '', pass : '', id : 0 } }


    this.activateRoute.url.subscribe(value => {
      
      this.FormType = value[0].path.toString();
      if(this.FormType != 'Create') {
        this.activateRoute.params.subscribe(_param => {
          this.parametroId = _param["parametro"];
          this.Curso$ = this.cursoService.getById(_param["parametro"]);

          this.Curso$.subscribe(value => {
            if(value)
                this.Curso = value;        
          });

        });
      }

      if(this.FormType == "Update" || this.FormType == "Create" ){
        this.formularioPrincipal = this.fb.group({
          nombre : ['', [Validators.required, Validators.maxLength(15)]],
          descripcion : ['', [Validators.required, Validators.maxLength(30)]],
          comision : ['', [Validators.required, Validators.maxLength(15)]]
        });
      }
      else
        this.formularioPrincipal = this.fb.group({ });
    })
    
  }

  submit() : void {
    if(this.formularioPrincipal.valid) {

      if(this.FormType == "Create") {
        this.Curso.nombre = this.formularioPrincipal.get('nombre')?.value;
        this.Curso.descripcion = this.formularioPrincipal.get('descripcion')?.value;
        this.Curso.comision = this.formularioPrincipal.get('comision')?.value;

        this.cursoService.add(this.Curso);
        this.router.navigate(['/home/curso/Index'])
      }
      if(this.FormType == "Update") {
        this.Curso.nombre = this.formularioPrincipal.get('nombre')?.value;
        this.Curso.descripcion = this.formularioPrincipal.get('descripcion')?.value;
        this.Curso.comision = this.formularioPrincipal.get('comision')?.value;
        
        this.cursoService.update(this.Curso);
        this.router.navigate(['/home/curso/Index'])
      }
      if(this.FormType == "Delete") {
        this.cursoService.remove(this.Curso.id);
        this.router.navigate(['/home/curso/Index'])
      }
    }
  }

}
