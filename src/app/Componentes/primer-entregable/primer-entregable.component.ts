import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/Interfaces/ICurso';
import { Profesor } from '../../Interfaces/IProfesor';

@Component({
  selector: 'app-primer-entregable',
  templateUrl: './primer-entregable.component.html',
  styleUrls: ['./primer-entregable.component.css']
})
export class PrimerEntregableComponent implements OnInit {

  public Curso : Curso;

  constructor() { }

  ngOnInit(): void {

    this.Curso = {
      nombre : "",
      alumnos: [],
      profesor :{ nombre : "", apellido : "", email : "", pass : "", id : 0},
      materias : [],
      notas : [],
      profesores: [{ nombre : "Leandro", apellido : "Delfabro", email : "asd@asd.com", pass : "manda1", id : 1}],
      id : 0
    }

  }

  registrarProfesor() : void{

  }

}
