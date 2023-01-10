import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ModalRegistrarComponent } from '../modal-registrar/modal-registrar.component';
import { Profesor } from 'src/app/Interfaces/IProfesor';
import { ModalLoguearComponent } from '../modal-loguear/modal-loguear.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() Profesor : Profesor;
  @Input() Profesores : Profesor [];

  @Output() evento = new EventEmitter<string>();

  public logueado = true;
  public flagLogin = false;
  public flagLoginError = false;
  public errorMessage = '';
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  Desloguear() : void{
   // this.logueado = false;
  }

  Loguear() : void {

    this.errorMessage = '';

    var profesor : Profesor = {
      nombre : "",
      apellido : "",
      email : "",
      pass : "",
      id : 0
    }

    const dialogRef = this.dialog.open(ModalLoguearComponent, {data :profesor});

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined){
        var existe = false;
        var existeIndex = 0;

        this.Profesores.forEach(function(elemento, index){
          if(elemento.pass == result.pass && elemento.email == result.email){
            existeIndex = index;
            existe = true;
          }
        });
        if(existe)
        {
          this.Profesor = this.Profesores[existeIndex];
          this.logueado = true;
        }
        else
        {
          this.logueado = false;
          this.errorMessage = 'Nombre de usuario o password incorrecto/s';
        }
      }

    });

  }

  Registrar () : void {

    this.errorMessage = '';

    var profesor : Profesor = {
      nombre : "",
      apellido : "",
      email : "",
      pass : "",
      id : 0
    }

    const dialogRef = this.dialog.open(ModalRegistrarComponent, {data :profesor});

    dialogRef.afterClosed().subscribe(result => {

      if(result != undefined){

        var existe = false;

        this.Profesores.forEach(function(elemento, index){
          if(elemento.email == result.email){
            existe = true;
          }
        });

        if(!existe)
        {        
          var nuevoProfesor : Profesor = {
            apellido : result.apellido,
            nombre : result.nombre,
            pass : result.pass,
            id : 0,
            email : result.email
          };
          nuevoProfesor.id = this.Profesores.length;
          this.Profesores.push(nuevoProfesor);
        }
        else
        {
          this.logueado = false;
          this.errorMessage = 'Ya existe un usuario con ese correo';
        }


      }
    });
    
  }

}