import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/Interfaces/ICurso';
import { Usuario } from 'src/app/Interfaces/IUsuario';
import { CursoService } from 'src/app/Services/curso.service';
import { InscripcionService } from 'src/app/Services/inscripcion.service';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { AppState } from 'src/app/store/app.reducer';
import { loginStateUserSelector } from 'src/app/store/login/login.selectors';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent implements OnInit {
  
  public usuarioLogueado : Observable<Usuario | null>;
  public Cursos  : Observable<Curso[]>;
  displayedColumns: string[] = ['id', 'editar','remover', 'nombre',  'descripcion', 'comision', 'cantidadClases', 'cantidadHoras'];

  constructor(private readonly store : Store<AppState>, public inscripcionService: InscripcionService, public usuarioService: UsuarioService,  private service: CursoService,  private router : Router) {
    this.usuarioLogueado = this.store.select(loginStateUserSelector);
    this.Cursos = service.getAll();
   }

  ngOnInit(): void {}

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
