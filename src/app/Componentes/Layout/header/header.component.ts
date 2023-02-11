import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Usuario } from 'src/app/Interfaces/IUsuario';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { loginStateUserSelector } from 'src/app/store/login/login.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() Profesor : Usuario;
  @Input() Profesores : Usuario [];

  @Output() evento = new EventEmitter<string>();
  public usuarioLogueado : Observable<Usuario | null>;


  public errorMessage = '';
  constructor(private readonly store : Store<AppState>,public dialog: MatDialog, private usuarioService : UsuarioService, private router : Router) {
    this.usuarioLogueado = this.store.select(loginStateUserSelector)
  }

  ngOnInit(): void {

  }


  Desloguear() : void{
    this.usuarioService.desloguear();
    this.router.navigate(['/login'])

  }

}