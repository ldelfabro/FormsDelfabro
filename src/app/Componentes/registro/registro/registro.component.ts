import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/Interfaces/IProfesor';
import { ProfesorService } from 'src/app/Services/profesor.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  Profesor : Profesor;
  public formularioPrincipal: FormGroup;

  constructor(private fb : FormBuilder, private usuarioService : ProfesorService, private router : Router) { }

  ngOnInit(): void {
    this.Profesor = { nombre : '', apellido : '',  id : 0, email : '', pass: '' }


    this.formularioPrincipal = this.fb.group({
      nombre : ['', [Validators.required, Validators.maxLength(15)]], 
      apellido : ['', [Validators.required, Validators.maxLength(15)]],
      email : ['',[Validators.required, Validators.email,Validators.maxLength(30)]],
      pass : ['', [Validators.required, Validators.maxLength(30)]]
    });
  }

  submit() : void {
    if(this.formularioPrincipal.valid) {

        this.Profesor.nombre = this.formularioPrincipal.get('nombre')?.value;
        this.Profesor.apellido = this.formularioPrincipal.get('apellido')?.value;
        this.Profesor.email = this.formularioPrincipal.get('email')?.value;
        this.Profesor.pass = this.formularioPrincipal.get('pass')?.value;

        this.usuarioService.add(this.Profesor);
        this.router.navigate(['/login'])
    }

  }
  login() : void {
    this.router.navigate(['/login'])
  }

}
