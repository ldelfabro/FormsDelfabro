import { Injectable } from '@angular/core';
import { Alumno } from '../Interfaces/IAlumno';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  public data$ : Observable<Alumno[]>;
  private data = new BehaviorSubject<Alumno[]>([]);


  constructor(private httpClient : HttpClient) {
      this.data$ = this.data.asObservable();
      this.getAll().subscribe(alumnos => {
        this.data.next(alumnos);
      });

   }

   public getAll() : Observable<Alumno[]> {
    return this.httpClient.get<Alumno[]>(environment.baseUrl + 'alumnos');
   }

   public getById(id: number) : Observable<Alumno> {
    return this.httpClient.get<Alumno[]>(environment.baseUrl + 'alumnos').pipe(map((value : Alumno[]) => value.filter(c => c.id == id)[0]));
   }

   public add(alumno : Alumno){
    this.httpClient.post(`${environment.baseUrl}alumnos`, alumno).subscribe({
      next: _ => {
        let nuevaLista = this.data.getValue();
        nuevaLista.push(alumno);
        this.data.next(nuevaLista);
      },
      error: _ => {
        alert('Error!!');
      }
    });
   }

  public update(alumno : Alumno) {
    this.httpClient.put(`${environment.baseUrl}alumnos/${alumno.id}`, alumno).subscribe(_ => {
      let nuevaLista = this.data.getValue().map(p => p.id === alumno.id ? alumno : p);
      this.data.next(nuevaLista);
    });
  }

  public remove(id: number) {
    this.httpClient.delete(`${environment.baseUrl}alumnos/${id}`).subscribe(_ => {
      let nuevaLista = this.data.getValue().filter( p => p.id !== id);
      this.data.next(nuevaLista);
    });
  }

}