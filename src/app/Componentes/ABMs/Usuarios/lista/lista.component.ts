import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/Interfaces/IUsuario';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-profesor-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  Profesores : Usuario [];
  Profesor$ : Observable<Usuario[]>;

  displayedColumns: string[] = ['id','editar','remover', 'nombre', 'email'];

  constructor(public service: UsuarioService,  private router : Router) { }

  ngOnInit(): void {
    this.Profesor$ = this.service.data$;
    this.Profesor$.subscribe((elementos) => {
      this.Profesores = elementos;
    })
  }

  actualizar(id : number) : void {
    this.router.navigate(['/home/usuario/Update/' + id])
  }
  
  remover(id : number) : void {
    this.router.navigate(['/home/usuario/Delete/' + id])
  }

  CrearNuevo() : void {
    this.router.navigate(['/home/usuario/Create'])
  }

}
