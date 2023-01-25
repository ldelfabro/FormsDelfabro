import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Interfaces/IUsuario';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-abm-profesor',
  templateUrl: './abm-usuario.component.html',
  styleUrls: ['./abm-usuario.component.css']
})
export class AbmUsuarioComponent implements OnInit {

  Usuario : Usuario;
  public formularioPrincipal: FormGroup;
  public FormType : string;

  constructor(private activateRoute : ActivatedRoute, private router : Router, private fb : FormBuilder, public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    
    this.Usuario = { nombre : '', apellido : '',  id : 0, email : '', pass: '', direccion: '', perfil : 'user', telefono: '' }

    this.activateRoute.url.subscribe(value => {
      
      this.FormType = value[0].path.toString();
      if(this.FormType == "Update" || this.FormType == "Delete") {
        this.activateRoute.params.subscribe(_param => {
          this.usuarioService.getById(_param["parametro"]).subscribe(value => {
            console.log(value)
            if(value) {
                this.Usuario = value;
                if(this.FormType == "Delete")
                  this.Usuario.pass = "***********";
            }
          });
        });

      }

      if(this.FormType == "Update" || this.FormType == "Create") {
        this.formularioPrincipal = this.fb.group({
          nombre : ['', [Validators.required, Validators.maxLength(15)]], 
          apellido : ['', [Validators.required, Validators.maxLength(15)]],
          email : ['',[Validators.required, Validators.email,Validators.maxLength(30)]],
          pass : ['', [Validators.required, Validators.maxLength(30)]],
          direccion : ['', [Validators.required, Validators.maxLength(30)]],
          telefono : ['', [Validators.required, Validators.maxLength(30)]],
          perfil : ['', [Validators.required]]

        });
      }
      else  
        this.formularioPrincipal = this.fb.group({ });

    })

  }

  submit() : void {
    if(this.formularioPrincipal.valid) {

      if(this.FormType == "Create") {
        this.Usuario.nombre = this.formularioPrincipal.get('nombre')?.value;
        this.Usuario.apellido = this.formularioPrincipal.get('apellido')?.value;
        this.Usuario.email = this.formularioPrincipal.get('email')?.value;

        this.Usuario.pass = this.formularioPrincipal.get('pass')?.value;
        this.Usuario.direccion = this.formularioPrincipal.get('direccion')?.value;
        this.Usuario.telefono = this.formularioPrincipal.get('telefono')?.value;
        this.Usuario.perfil = this.formularioPrincipal.get('perfil')?.value;

        this.usuarioService.add(this.Usuario);
        this.router.navigate(['/home/usuario/Index'])
      }
      if(this.FormType == "Update") {
        this.Usuario.nombre = this.formularioPrincipal.get('nombre')?.value;
        this.Usuario.apellido = this.formularioPrincipal.get('apellido')?.value;
        this.Usuario.email = this.formularioPrincipal.get('email')?.value;

        this.Usuario.pass = this.formularioPrincipal.get('pass')?.value;
        this.Usuario.direccion = this.formularioPrincipal.get('direccion')?.value;
        this.Usuario.telefono = this.formularioPrincipal.get('telefono')?.value;
        this.Usuario.perfil = this.formularioPrincipal.get('perfil')?.value;

        this.usuarioService.update(this.Usuario);
        this.router.navigate(['/home/usuario/Index'])
      }
      if(this.FormType == "Delete") {
        this.usuarioService.remove(this.Usuario.id);
        this.router.navigate(['/home/usuario/Index'])
      }
    
    }

  }


}
