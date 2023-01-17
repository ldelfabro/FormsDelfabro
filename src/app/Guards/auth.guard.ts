import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfesorService } from '../Services/profesor.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  Logueado : boolean;
  Logueado$ : Observable<boolean>;


  constructor(
    private router: Router,
    private usuarioService : ProfesorService
  ) {
    this.Logueado$ = this.usuarioService.getLogueado();

    this.Logueado$.subscribe((value) => {
      this.Logueado = value;
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      debugger;
      
      if(this.Logueado){
        this.router.navigate(['home']);
        return true;
      }
      else{
        this.router.navigate(['login']);
        return false;
      }


      

  }
 

}
