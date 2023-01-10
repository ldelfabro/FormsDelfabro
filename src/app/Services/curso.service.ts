import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Alumno } from '../Interfaces/IAlumno';
import { Curso } from '../Interfaces/ICurso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  public _entity : Curso[] = [];
  public data$ : Observable<Curso[]>;
  private data = new BehaviorSubject<Curso[]>([]);

  constructor() { 
    this.data$ = this.data.asObservable();
    this.data.next(this._entity);
  }

  public getAll() : Observable<Curso[]> {
    return this.data.asObservable();
 }

 public getById(id: number) : Observable<Curso> {
  return this.data.asObservable().pipe(map((value : Curso[]) => value.filter(c => c.id == id)[0]));
 }

 public getAlumnosById(id: number) : Observable<Alumno[]> {
  return this.data.asObservable().pipe(map((value : Curso[]) => value.filter(c => c.id == id)[0].alumnos));
 }

 public add(alumno : Curso){
  let lastId = this._entity.length > 0 ? this._entity[this._entity.length -1].id + 1 : 1;
  alumno.id = lastId;
  this._entity.push(alumno);
  this.data.next(this._entity);
 }

public update(alumno : Curso) {
  var alumno = this._entity.filter(c => c.id == alumno.id)[0];
  this._entity.forEach(function(elemento){
    if(elemento.id == alumno.id){
      elemento = alumno;
    }
  })
  this.data.next(this._entity);
}

public remove(id: number) {
  this._entity = this._entity.filter(c => c.id != id);
  this.data.next(this._entity);
}

public addAlumno(id: number, Alumno : Alumno){
  this._entity.filter(c=>c.id == id)[0].alumnos.push(Alumno);
  this.data.next(this._entity);
}
public removeAlumno(id: number, idAlumno : number){

  let _curso = this._entity.filter(c => c.id == id)[0];
  let _alumnosCurso = _curso.alumnos.filter(c=> c.id != idAlumno);
  _curso.alumnos = _alumnosCurso;
  this._entity.filter(c => c.id == id)[0] = _curso;

  this.data.next(this._entity);
}

}
