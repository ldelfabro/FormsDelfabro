import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Usuario } from 'src/app/Interfaces/IUsuario';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() Profesor : Usuario;
  @Input() Profesores : Usuario [];

  @Output() evento = new EventEmitter<string>();

  public logueado = true;
  public flagLogin = false;
  public flagLoginError = false;
  public errorMessage = '';
  constructor(public dialog: MatDialog, private usuarioService : UsuarioService, private router : Router) { }

  ngOnInit(): void {
  }


  Desloguear() : void{
    this.usuarioService.desloguear();
    this.router.navigate(['/login'])

  }

}