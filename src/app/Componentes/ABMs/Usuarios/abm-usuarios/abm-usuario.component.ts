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

  Profesor : Usuario;
  public formularioPrincipal: FormGroup;
  public FormType : string;

  constructor(private activateRoute : ActivatedRoute, private router : Router, private fb : FormBuilder, public profesorService: UsuarioService) { }

  ngOnInit(): void {
    
    this.Profesor = { nombre : '', apellido : '',  id : 0, email : '', pass: '', direccion: '', perfil : '', telefono: '' }

    this.activateRoute.url.subscribe(value => {
      
      this.FormType = value[0].path.toString();
      if(this.FormType == "Update" || this.FormType == "Delete") {
        this.activateRoute.params.subscribe(_param => {
          this.profesorService.getById(_param["parametro"]).subscribe(value => {
            if(value)
                this.Profesor = value

          });
        });

      }

      if(this.FormType == "Update" || this.FormType == "Create") {
        this.formularioPrincipal = this.fb.group({
          nombre : ['', [Validators.required, Validators.maxLength(15)]], 
          apellido : ['', [Validators.required, Validators.maxLength(15)]],
          email : ['',[Validators.required, Validators.email,Validators.maxLength(30)]]
        });
      }
      else          
        this.formularioPrincipal = this.fb.group({ });

    })

  }

  submit() : void {
    if(this.formularioPrincipal.valid) {

      if(this.FormType == "Create") {
        this.Profesor.nombre = this.formularioPrincipal.get('nombre')?.value;
        this.Profesor.apellido = this.formularioPrincipal.get('apellido')?.value;
        this.Profesor.email = this.formularioPrincipal.get('email')?.value;
        this.profesorService.add(this.Profesor);
        this.router.navigate(['/home/usuario/Index'])
      }
      if(this.FormType == "Update") {
        this.Profesor.nombre = this.formularioPrincipal.get('nombre')?.value;
        this.Profesor.apellido = this.formularioPrincipal.get('apellido')?.value;
        this.Profesor.email = this.formularioPrincipal.get('email')?.value;
        this.profesorService.update(this.Profesor);
        this.router.navigate(['/home/usuario/Index'])
      }
      if(this.FormType == "Delete") {
        this.profesorService.remove(this.Profesor.id);
        this.router.navigate(['/home/usuario/Index'])
      }
    
    }

  }


}
