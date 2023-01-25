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

  Usuarios : Usuario [];
  Usuario$ : Observable<Usuario[]>;


  displayedColumns: string[] = ['id','editar','remover', 'nombre', 'email', 'direccion', 'telefono', 'perfil'];

  constructor(public service: UsuarioService,  private router : Router) { }

  ngOnInit(): void {

    this.Usuario$ = this.service.data$;
    this.Usuario$.subscribe((elementos) => {
      this.Usuarios = elementos;
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
