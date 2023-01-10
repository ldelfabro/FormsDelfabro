import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from 'src/app/Interfaces/IProfesor';
import { ProfesorService } from 'src/app/Services/profesor.service';

@Component({
  selector: 'app-abm-profesor',
  templateUrl: './abm-profesor.component.html',
  styleUrls: ['./abm-profesor.component.css']
})
export class AbmProfesorComponent implements OnInit {

  Profesor : Profesor;
  public formularioPrincipal: FormGroup;
  public FormType : string;

  constructor(private activateRoute : ActivatedRoute, private router : Router, private fb : FormBuilder, public profesorService: ProfesorService) { }

  ngOnInit(): void {
    
    this.Profesor = { nombre : '', apellido : '',  id : 0, email : '', pass: '' }

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
          email : ['',[Validators.required, Validators.email,Validators.maxLength(15)]]
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
        this.router.navigate(['Profesor/Index'])
      }
      if(this.FormType == "Update") {
        this.Profesor.nombre = this.formularioPrincipal.get('nombre')?.value;
        this.Profesor.apellido = this.formularioPrincipal.get('apellido')?.value;
        this.Profesor.email = this.formularioPrincipal.get('email')?.value;
        this.profesorService.update(this.Profesor);
        this.router.navigate(['Profesor/Index'])
      }
      if(this.FormType == "Delete") {
        this.profesorService.remove(this.Profesor.id);
        this.router.navigate(['Profesor/Index'])
      }
    
    }

  }


}
