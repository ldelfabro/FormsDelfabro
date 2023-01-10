import { Injectable } from '@angular/core';
import { Curso } from '../Interfaces/ICurso';
import { Alumno } from '../Interfaces/IAlumno';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {

  private miCurso : Curso = {
    nombre : "Mandarina",
    alumnos: [
      { provincia : "Buenos Aires", localidad : "Mar del Plata", nombre : "Leandro", apellido : "Delfabro", email : "asd5@asd.com", id : 1, telefono : '2232131321', fechaNacimiento : new Date()},
      { provincia : "Buenos Aires", localidad : "Mar del Plata",nombre : "Luis", apellido : "Perez", email : "asd2@asd.com", id : 2, telefono : '2232131321', fechaNacimiento : new Date()},
      { provincia : "Buenos Aires", localidad : "Mar del Plata",nombre : "Marcos", apellido : "Martinez", email : "asd3@asd.com", id : 3, telefono : '2232131321', fechaNacimiento : new Date()},
      { provincia : "Buenos Aires", localidad : "Mar del Plata",nombre : "Azul", apellido : "Roco", email : "asd4@asd.com", id : 4, telefono : '2232131321', fechaNacimiento : new Date()},
      { provincia : "Buenos Aires", localidad : "Mar del Plata",nombre : "Sandro", apellido : "Lizardo", email : "asd6@asd.com", id : 5, telefono : '2232131321', fechaNacimiento : new Date()},
      { provincia : "Buenos Aires", localidad : "Mar del Plata",nombre : "Lich", apellido : "Mandarina", email : "asd7@asd.com", id : 6, telefono : '2232131321', fechaNacimiento : new Date()},
      { provincia : "Buenos Aires", localidad : "Mar del Plata",nombre : "Esteban", apellido : "Juda", email : "asd8@asd.com", id : 7, telefono : '2232131321', fechaNacimiento : new Date()},
      { provincia : "Buenos Aires", localidad : "Mar del Plata",nombre : "Terminator", apellido : "Robocop", email : "asd9@asd.com", id : 8, telefono : '2232131321', fechaNacimiento : new Date()},
      { provincia : "Buenos Aires", localidad : "Mar del Plata",nombre : "Mauri", apellido : "Terminator", email : "asd10@asd.com", id : 9, telefono : '2232131321', fechaNacimiento : new Date()}
    ],
    profesor :{ nombre : "", apellido : "", email : "", pass : "", id : 0},
    materias : [],
    notas : [],
    profesores: [{ nombre : "Leandro", apellido : "Delfabro", email : "asd@asd.com", pass : "manda1", id : 1}],
    id : 0
  };

  public cursoData$ : Observable<Curso>;
  private cursoData = new BehaviorSubject<Curso>({id : 0, alumnos : [], profesor : { id: 0, apellido : "", nombre : "", email : "",pass : ""}, profesores : [], materias : [], nombre : "", notas: []});



  private curso = new Subject<Curso>();

  constructor() { 
    this.cursoData$ = this.cursoData.asObservable();
    this.cursoData.next(this.miCurso);
  }
  public getCurso() : Observable<any> {
    return this.cursoData.asObservable();
  }
  public getAlumnos() : Observable<Alumno[]> {
    return this.cursoData.asObservable().pipe(map((value : Curso) => value.alumnos));
  }
  public getAlumnoById(id: number) : Observable<Alumno> {
    return this.cursoData.asObservable().pipe(map((value : Curso) => value.alumnos.filter(c => c.id == id)[0]));
  }




  public eliminarAlumno(id : number){
     let Alumnos : Alumno[] = [];
     
     this.miCurso.alumnos.forEach(function(elemento){
      if(elemento.id != id){
        Alumnos.push(elemento)
      }
     });

     this.miCurso.alumnos = Alumnos;
     this.curso.next(this.miCurso);
  }

  public addAlumno(alumno : Alumno){
    this.miCurso.alumnos.push(alumno);
    this.curso.next(this.miCurso);
  }

}
