import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inscripcion } from '../Interfaces/IInscripciones';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  public data$ : Observable<Inscripcion[]>;
  private data = new BehaviorSubject<Inscripcion[]>([]);

  constructor(private httpClient : HttpClient) {
    this.data$ = this.data.asObservable();
    this.getAll().subscribe(inscripciones => {
      this.data.next(inscripciones);
    });

   }

   public getAll() : Observable<Inscripcion[]> {
    return this.httpClient.get<Inscripcion[]>(environment.baseUrl_2 + 'inscripcion');
   }
   public getById(id: number) : Observable<Inscripcion> {
    return this.httpClient.get<Inscripcion[]>(environment.baseUrl_2 + 'inscripcion').pipe(map((value : Inscripcion[]) => value.filter(c => c.id == id)[0]));
   }
   public getByCursoId(id: number) : Observable<Inscripcion[]> {
    return this.httpClient.get<Inscripcion[]>(environment.baseUrl_2 + 'inscripcion').pipe(map((value : Inscripcion[]) => value.filter(c => c.IdCurso == id)));
   }



   public add(curso : Inscripcion){
    this.httpClient.post(`${environment.baseUrl_2}inscripcion`, curso).subscribe({
      next: _ => {
        let nuevaLista = this.data.getValue();
        nuevaLista.push(curso);
        this.data.next(nuevaLista);
      },
      error: _ => {
        alert('Error!!');
      }
    });
   }

  public update(curso : Inscripcion) {
    this.httpClient.put(`${environment.baseUrl_2}inscripcion/${curso.id}`, curso).subscribe(_ => {
      let nuevaLista = this.data.getValue().map(p => p.id === curso.id ? curso : p);
      this.data.next(nuevaLista);
    });
  }

  public remove(id: number) {
    this.httpClient.delete(`${environment.baseUrl_2}inscripcion/${id}`).subscribe(_ => {
      let nuevaLista = this.data.getValue().filter( p => p.id !== id);
      this.data.next(nuevaLista);
    });
  }


}
