import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, Observable, Subscription } from 'rxjs';
import { Alumno } from 'src/app/Interfaces/IAlumno';
import { Localidad } from 'src/app/Interfaces/ILocalidad';
import { Provincia } from 'src/app/Interfaces/IProvincia';
import { LocalidadService } from '../../../../Services/localidad.service';
import { CursoServiceService } from '../../../../Services/curso-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Parametros } from '../../../../Interfaces/ILocalidad';

@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.css']
})
export class AltaAlumnoComponent implements OnInit {

  Alumno : Alumno;
 
  public FormType : string;
  public CurrentId : Number;
  public Provincia : string;
  public formularioPrincipal: FormGroup;

  public controlProvincia = new FormControl(['', [Validators.required]])

  public localidades : Localidad[];
  public provincias: Observable<Provincia[]>;

  constructor(private activateRoute : ActivatedRoute, private router : Router, private fb : FormBuilder, public localidadService : LocalidadService, public cursoService : CursoServiceService) {}

  ngOnInit(): void {

    this.activateRoute.url.subscribe(value => {
      
      this.FormType = value[0].path.toString();
      if(this.FormType == "Update" || this.FormType == "Delete") {
        this.activateRoute.params.subscribe(_param => {
          this.cursoService.getAlumnoById(_param["parametro"]).subscribe(value => {
            if(value){
                this.Alumno = value
                this.Provincia = this.Alumno.provincia;
            }
          
          });
        });
      }
      else {
        this.Alumno = {
          nombre : '',
          apellido : '',
          telefono : '',
          id : 0,
          email : '',
          fechaNacimiento : new Date(),
          provincia : '',
          localidad : ''
        }
      }
    })

    this.provincias = this.localidadService.buscarProvincia();
   
    this.formularioPrincipal = this.fb.group({
      nombre : ['', [Validators.required, Validators.maxLength(15)]],
      apellido : ['', [Validators.required, Validators.maxLength(15)]],
      telefono : ['', [Validators.maxLength(15)]],
      fechaNacimiento : ['', [Validators.required]],
      email : ['',[Validators.required, Validators.email,Validators.maxLength(15)]],
      provincia : ['', [Validators.required]],
      localidad : ['', [Validators.required]]
    });

    this.formularioPrincipal.get('provincia')?.valueChanges.pipe(debounceTime(250)).subscribe((value) => 
      this.localidadService.buscarLocalidad(value).subscribe((value) => this.localidades = value))
  }

  submit() : void {
    if(this.formularioPrincipal.valid) {
      this.Alumno.nombre = this.formularioPrincipal.get('nombre')?.value;
      this.Alumno.apellido = this.formularioPrincipal.get('apellido')?.value;
      this.Alumno.telefono = this.formularioPrincipal.get('telefono')?.value;
      this.Alumno.email = this.formularioPrincipal.get('email')?.value;
      this.Alumno.fechaNacimiento = new Date(this.formularioPrincipal.get('fechaNacimiento')?.value);
      if(this.Alumno.id == 0) {
        this.Alumno.provincia = this.formularioPrincipal.get('provincia')?.value;
        this.Alumno.localidad = this.formularioPrincipal.get('localidad')?.value;
      }
      this.cursoService.addAlumno(this.Alumno);
      this.router.navigate(['Alumno'])
    }

  }

}

