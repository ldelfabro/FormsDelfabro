import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Usuario } from '../Interfaces/IUsuario';
import { UsuarioService } from '../Services/usuario.service';
import { AppState } from '../store/app.reducer';
import { loginStateUserSelector } from '../store/login/login.selectors';

@Injectable({
  providedIn: 'root'
})
export class PerfilUsuarioGuard implements CanActivate {

  UsuarioLogueado : Usuario | null;

  constructor(
    private router: Router,
    private readonly store : Store<AppState>
  ) {
    this.store.select(loginStateUserSelector).subscribe((value) => {
      this.UsuarioLogueado = value;
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
debugger;
    if(this.UsuarioLogueado?.perfil == "admin"){
      return true;
    }
    else{
      this.router.navigate(['home']);
      return false;
    }
  
  
  
  }
  
}
