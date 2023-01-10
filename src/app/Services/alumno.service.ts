import { Injectable } from '@angular/core';
import { Alumno } from '../Interfaces/IAlumno';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private _entity : Alumno[] = [
    { provincia : "Buenos Aires", localidad : "Mar del Plata", nombre : "Leandro", apellido : "Delfabro", email : "asd5@asd.com", id : 1, telefono : '2232131321', fechaNacimiento : new Date()},
    { provincia : "Buenos Aires", localidad : "Mar del Plata",nombre : "Luis", apellido : "Perez", email : "asd2@asd.com", id : 2, telefono : '2232131321', fechaNacimiento : new Date()},
    { provincia : "Buenos Aires", localidad : "Mar del Plata",nombre : "Marcos", apellido : "Martinez", email : "asd3@asd.com", id : 3, telefono : '2232131321', fechaNacimiento : new Date()},
    { provincia : "Buenos Aires", localidad : "Mar del Plata",nombre : "Azul", apellido : "Roco", email : "asd4@asd.com", id : 4, telefono : '2232131321', fechaNacimiento : new Date()},
    { provincia : "Buenos Aires", localidad : "Mar del Plata",nombre : "Sandro", apellido : "Lizardo", email : "asd6@asd.com", id : 5, telefono : '2232131321', fechaNacimiento : new Date()},
    { provincia : "Buenos Aires", localidad : "Mar del Plata",nombre : "Lich", apellido : "Mandarina", email : "asd7@asd.com", id : 6, telefono : '2232131321', fechaNacimiento : new Date()},
    { provincia : "Buenos Aires", localidad : "Mar del Plata",nombre : "Esteban", apellido : "Juda", email : "asd8@asd.com", id : 7, telefono : '2232131321', fechaNacimiento : new Date()},
    { provincia : "Buenos Aires", localidad : "Mar del Plata",nombre : "Terminator", apellido : "Robocop", email : "asd9@asd.com", id : 8, telefono : '2232131321', fechaNacimiento : new Date()},
    { provincia : "Buenos Aires", localidad : "Mar del Plata",nombre : "Mauri", apellido : "Terminator", email : "asd10@asd.com", id : 9, telefono : '2232131321', fechaNacimiento : new Date()}
  ]

  public data$ : Observable<Alumno[]>;
  private data = new BehaviorSubject<Alumno[]>([]);


  constructor() {
    this.data$ = this.data.asObservable();
    this.data.next(this._entity);
   }

   public getAll() : Observable<Alumno[]> {
      return this.data.asObservable();
   }

   public getById(id: number) : Observable<Alumno> {
    return this.data.asObservable().pipe(map((value : Alumno[]) => value.filter(c => c.id == id)[0]));
   }

   public add(alumno : Alumno){
    let lastId = this._entity.length > 0 ? this._entity[this._entity.length -1].id + 1 : 1;
    alumno.id = lastId;
    this._entity.push(alumno);
    this.data.next(this._entity);
   }

  public update(alumno : Alumno) {
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
