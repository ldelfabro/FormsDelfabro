import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/Interfaces/IAlumno';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/Services/alumno.service';
import { Usuario } from 'src/app/Interfaces/IUsuario';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.css']
})
export class ListaAlumnoComponent implements OnInit {

  Alumnos : Alumno [];
  Alumnos$ : Observable<Alumno[]>;

  usuarioLogueado : Usuario;
  usuarioLogueado$ : Observable<Usuario>;

  displayedColumns: string[] = ['id','editar','remover', 'nombre', 'telefono', 'fechaNacimiento', 'email', 'provincia', 'localidad'];

  constructor(private alumnoService: AlumnoService, private usuarioService: UsuarioService,  private router : Router) { 
    this.Alumnos = [];
  }
  ngOnInit(): void {
    this.Alumnos$ = this.alumnoService.data$;
    this.Alumnos$.subscribe((alumnos) => {
      this.Alumnos = alumnos;
    })

    this.usuarioLogueado$ = this.usuarioService.getUsuarioLogueado();
    this.usuarioLogueado$.subscribe((value) => {
      this.usuarioLogueado = value;
    })


  }
  actualizar(id : number) : void {
    this.router.navigate(['/home/alumno/Update/' + id])
  }
  remover(id : number) : void {
    this.router.navigate(['/home/alumno/Delete/' + id])
  }
  CrearNuevo() : void {
    this.router.navigate(['/home/alumno/Create'])
  }
}
