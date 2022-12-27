import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/Interfaces/ICurso';
import { Profesor } from '../../Interfaces/IProfesor';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrimerEntregableComponent implements OnInit {

  public Curso : Curso;
  public evento : string = 'ABMINICIO';

  constructor() { }

  ngOnInit(): void {

    this.Curso = {
      nombre : "",
      alumnos: [
        { nombre : "Leandro", apellido : "Delfabro", email : "asd5@asd.com", id : 1, telefono : '2232131321', fechaNacimiento : new Date()},
        { nombre : "Luis", apellido : "Perez", email : "asd2@asd.com", id : 2, telefono : '2232131321', fechaNacimiento : new Date()},
        { nombre : "Marcos", apellido : "Martinez", email : "asd3@asd.com", id : 3, telefono : '2232131321', fechaNacimiento : new Date()},
        { nombre : "Azul", apellido : "Roco", email : "asd4@asd.com", id : 4, telefono : '2232131321', fechaNacimiento : new Date()},
        { nombre : "Sandro", apellido : "Lizardo", email : "asd6@asd.com", id : 5, telefono : '2232131321', fechaNacimiento : new Date()},
        { nombre : "Lich", apellido : "Mandarina", email : "asd7@asd.com", id : 6, telefono : '2232131321', fechaNacimiento : new Date()},
        { nombre : "Esteban", apellido : "Juda", email : "asd8@asd.com", id : 7, telefono : '2232131321', fechaNacimiento : new Date()},
        { nombre : "Terminator", apellido : "Robocop", email : "asd9@asd.com", id : 8, telefono : '2232131321', fechaNacimiento : new Date()},
        { nombre : "Mauri", apellido : "Terminator", email : "asd10@asd.com", id : 9, telefono : '2232131321', fechaNacimiento : new Date()}

      ],
      profesor :{ nombre : "", apellido : "", email : "", pass : "", id : 0},
      materias : [],
      notas : [],
      profesores: [{ nombre : "Leandro", apellido : "Delfabro", email : "asd@asd.com", pass : "manda1", id : 1}],
      id : 0
    }

  }

  eventoSeleccionado(evento:string) : void {
    this.evento = evento;
  }


}
