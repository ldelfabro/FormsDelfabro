import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Usuario } from 'src/app/Interfaces/IUsuario';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() Profesor : Usuario;
  @Input() Profesores : Usuario [];

  @Output() evento = new EventEmitter<string>();

  usuarioLogueado : Usuario;
  usuarioLogueado$ : Observable<Usuario>;

  public errorMessage = '';
  constructor(public dialog: MatDialog, private usuarioService : UsuarioService, private router : Router) { }

  ngOnInit(): void {

    this.usuarioLogueado$ = this.usuarioService.getUsuarioLogueado();

    this.usuarioLogueado$.subscribe((value) => {
      this.usuarioLogueado = value;
    })


  }


  Desloguear() : void{
    this.usuarioService.desloguear();
    this.router.navigate(['/login'])

  }

}