import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { Profesor } from '../Interfaces/IProfesor';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  public data$ : Observable<Profesor[]>;
  private data = new BehaviorSubject<Profesor[]>([]);

  constructor(private httpClient : HttpClient) {
    this.data$ = this.data.asObservable();
    this.getAll().subscribe(alumnos => {
      this.data.next(alumnos);
    });
   }

   public getAll() : Observable<Profesor[]> {
    return this.httpClient.get<Profesor[]>(environment.baseUrl + 'usuarios');
   }

   public getById(id: number) : Observable<Profesor> {
    return this.httpClient.get<Profesor[]>(environment.baseUrl + 'usuarios').pipe(map((value : Profesor[]) => value.filter(c => c.id == id)[0]));
   }

   public add(alumno : Profesor){
    this.httpClient.post(`${environment.baseUrl}usuarios`, alumno).subscribe({
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

  public update(alumno : Profesor) {
    this.httpClient.put(`${environment.baseUrl}usuarios/${alumno.id}`, alumno).subscribe(_ => {
      let nuevaLista = this.data.getValue().map(p => p.id === alumno.id ? alumno : p);
      this.data.next(nuevaLista);
    });
  }

  public remove(id: number) {
    this.httpClient.delete(`${environment.baseUrl}usuarios/${id}`).subscribe(_ => {
      let nuevaLista = this.data.getValue().filter( p => p.id !== id);
      this.data.next(nuevaLista);
    });
  }

}