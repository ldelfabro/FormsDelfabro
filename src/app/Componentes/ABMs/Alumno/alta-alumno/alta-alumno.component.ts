import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/Interfaces/IAlumno';

@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.css']
})
export class AltaAlumnoComponent implements OnInit {

  @Input() Alumno : Alumno;
  @Output() NuevoUsuarioRetorno = new EventEmitter<Alumno>();
  public formularioPrincipal: FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {


    if(!this.Alumno){
      this.Alumno = {
        nombre : '',
        apellido : '',
        telefono : '',
        id : 0,
        email : '',
        fechaNacimiento : new Date()
      }
    }
    

    this.formularioPrincipal = this.fb.group({
      nombre : ['', [Validators.required, Validators.maxLength(15)]],
      apellido : ['', [Validators.required, Validators.maxLength(15)]],
      telefono : ['', [Validators.maxLength(15)]],
      fechaNacimiento : ['', [Validators.required]],
      email : ['',[Validators.required, Validators.email,Validators.maxLength(15)]]
    });

    
  }

  submit() : void {
    if(this.formularioPrincipal.valid) {
      this.Alumno.nombre = this.formularioPrincipal.get('nombre')?.value;
      this.Alumno.apellido = this.formularioPrincipal.get('apellido')?.value;
      this.Alumno.telefono = this.formularioPrincipal.get('telefono')?.value;
      this.Alumno.email = this.formularioPrincipal.get('email')?.value;
      this.Alumno.fechaNacimiento = new Date(this.formularioPrincipal.get('fechaNacimiento')?.value);

      this.NuevoUsuarioRetorno.emit(this.Alumno);


    }

  }

}

