import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../Interfaces/IUsuario';
import { UsuarioService } from '../Services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilUsuarioGuard implements CanActivate {

  usuarioLogueado : Usuario;
  usuarioLogueado$ : Observable<Usuario>;

  constructor(
    private router: Router,
    private usuarioService : UsuarioService
  ) {
    this.usuarioLogueado$ = this.usuarioService.getUsuarioLogueado();

    this.usuarioLogueado$.subscribe((value) => {
      this.usuarioLogueado = value;
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
debugger;
    if(this.usuarioLogueado.perfil == "admin"){
      return true;
    }
    else{
      this.router.navigate(['home']);
      return false;
    }
  
  
  
  }
  
}
