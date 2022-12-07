import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-usuario-sistema',
  templateUrl: './alta-usuario-sistema.component.html',
  styleUrls: ['./alta-usuario-sistema.component.css']
})
export class AltaUsuarioSistemaComponent implements OnInit {

  public formularioPrincipal: FormGroup;
  public flagSubmit: boolean;
  public flagEstado: boolean;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {

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
    console.log(this.formularioPrincipal.value);
    console.log(this.formularioPrincipal.valid);
    console.log(this.formularioPrincipal);
    if(this.formularioPrincipal.valid){
      this.flagEstado = true;
    }


  }
}
