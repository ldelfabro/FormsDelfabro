import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Interfaces/IUsuario';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  Profesor : Usuario;
  _errorMsg : string= '';
  public formularioPrincipal: FormGroup;
  
  constructor(private fb : FormBuilder, private usuarioService : UsuarioService, private router : Router) { }

  ngOnInit(): void {

    this.Profesor = { nombre : '', apellido : '',  id : 0, email : '', pass: '', direccion: '', perfil : '', telefono: '' }

    this.formularioPrincipal = this.fb.group({
      email : ['',[Validators.required, Validators.email, Validators.maxLength(30)]],
      pass : ['',[Validators.required, Validators.maxLength(30)]]
    });
  }

  submit() : void {


    if(this.formularioPrincipal.valid) {
      
      this.usuarioService.loguear(this.formularioPrincipal.get('email')?.value, this.formularioPrincipal.get('pass')?.value).subscribe(value => {
        console.log(value);
        if(value){
          this.usuarioService.setLogueado(true);
          this.router.navigate(['/home'])
        }
        else {
          this._errorMsg = "Email o Password inválido(s)";
        }
      });


      
    }

  }

  registrar() : void {
    this.router.navigate(['/registro'])
  }

}
