import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/Interfaces/ICurso';
import { Usuario } from 'src/app/Interfaces/IUsuario';
import { CursoService } from 'src/app/Services/curso.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent implements OnInit {
  
  Cursos : Curso [];
  Curso$ : Observable<Curso[]>;
  usuarioLogueado : Usuario;
  usuarioLogueado$ : Observable<Usuario>;

  displayedColumns: string[] = ['id','inscripcion', 'editar','remover', 'nombre',  'descripcion', 'comision', 'cantidadAlumnos', 'cantidadProfesores', 'cantidadMaterias'];

  constructor(public usuarioService: UsuarioService,  private service: CursoService,  private router : Router) { }

  ngOnInit(): void {
    this.Curso$ = this.service.getAll();
    this.Curso$.subscribe((value) => {
      this.Cursos = value;
    })

    this.usuarioLogueado$ = this.usuarioService.getUsuarioLogueado();
    this.usuarioLogueado$.subscribe((value) => {
      this.usuarioLogueado = value;
    })
  }

  actualizar(id : number) : void {
    this.router.navigate(['/home/curso/Update/' + id])
  }
  remover(id : number) : void {
    this.router.navigate(['/home/curso/Delete/' + id])
  }
  legajo(id : number) : void {
    this.router.navigate(['/home/curso/View/' + id])
  }

  CrearNuevo() : void {
    this.router.navigate(['/home/curso/Create'])
  }

}
