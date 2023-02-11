import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Usuario } from '../Interfaces/IUsuario';
import { AppState } from '../store/app.reducer';
import { loginStateUserSelector } from '../store/login/login.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

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
            
      if(this.UsuarioLogueado != null){
        return true;
      }
      else {
        this.router.navigate(['login']);
        return false;
      }

  }
 

}
