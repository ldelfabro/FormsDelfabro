import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { Profesor } from '../Interfaces/IProfesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  public _entity : Profesor[] = [{ nombre : "Leandro", apellido : "Delfabro", email : "asd@asd.com", pass : "manda1", id : 1}];

  public data$ : Observable<Profesor[]>;
  private data = new BehaviorSubject<Profesor[]>([]);

  constructor() {
    this.data$ = this.data.asObservable();
    this.data.next(this._entity);
   }

 public getAll() : Observable<Profesor[]> {
    return this.data.asObservable();
 }

 public getById(id: number) : Observable<Profesor> {
  return this.data.asObservable().pipe(map((value : Profesor[]) => value.filter(c => c.id == id)[0]));
 }

 public add(alumno : Profesor){
  let lastId = this._entity.length > 0 ? this._entity[this._entity.length -1].id + 1 : 1;
  alumno.id = lastId;
  this._entity.push(alumno);
  this.data.next(this._entity);
 }

public update(alumno : Profesor) {
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

}