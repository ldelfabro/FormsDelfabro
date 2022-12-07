import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/Interfaces/IPersona';

@Component({
  selector: 'app-alta-usuario-sistema',
  templateUrl: './alta-usuario-sistema.component.html',
  styleUrls: ['./alta-usuario-sistema.component.css']
})
export class AltaUsuarioSistemaComponent implements OnInit {

  public formularioPrincipal: FormGroup;
  public flagSubmit: boolean;
  public flagEstado: boolean;
  
  @Output() NuevoUsuarioRetorno = new EventEmitter<Persona>();
  public NuevoUsuario : Persona;


  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    
    this.NuevoUsuario = {
      id: 0,
      nombre: '',
      apellido : '',
      fechaNacimiento : new Date(),
      telefono : '',
      email : '',
      pass : ''
    }

    this.flagSubmit = false;
    this.flagEstado = false;

    this.formularioPrincipal = this.fb.group({
      nombre : ['', [Validators.required, Validators.minLength(5)]],
      apellido : ['', [Validators.required, Validators.minLength(5)]],
      telefono : [''],
      fechaNacimiento : ['', [Validators.required]],
      pass : ['',[Validators.required, Validators.minLength(5)]],
      email : ['',[Validators.required, Validators.email]]
    });
    
  }
  submit() : void {
    this.flagSubmit = true;
   // console.log(this.formularioPrincipal.value);
   // console.log(this.formularioPrincipal.valid);
   // console.log(this.formularioPrincipal);
    if(this.formularioPrincipal.valid){
      this.NuevoUsuario.nombre = this.formularioPrincipal.get('nombre')?.value;
      this.NuevoUsuario.apellido = this.formularioPrincipal.get('apellido')?.value;
      this.NuevoUsuario.telefono = this.formularioPrincipal.get('telefono')?.value;
      this.NuevoUsuario.email = this.formularioPrincipal.get('email')?.value;
      this.NuevoUsuario.pass = this.formularioPrincipal.get('pass')?.value;
      this.NuevoUsuario.fechaNacimiento = new Date(this.formularioPrincipal.get('fechaNacimiento')?.value);

      console.log(this.NuevoUsuario);

      this.flagEstado = true;
    }

  }

  volver() : void {
    this.NuevoUsuarioRetorno.emit(this.NuevoUsuario);
  }

}
