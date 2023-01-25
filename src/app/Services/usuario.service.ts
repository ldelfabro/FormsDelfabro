import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { Usuario } from '../Interfaces/IUsuario';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public data$ : Observable<Usuario[]>;
  private data = new BehaviorSubject<Usuario[]>([]);

  public _logueado : boolean = false;
  public logueado$ : Observable<boolean>;
  private logueado = new BehaviorSubject<boolean>(false);

  public _usuarioLogueado : Usuario =  { nombre : '', apellido : '',  id : 0, email : '', pass: '', direccion: '', perfil : 'user', telefono: '' };
  public usuarioLogueado$ : Observable<Usuario>;
  private usuarioLogueado = new BehaviorSubject<Usuario>({ nombre : '', apellido : '',  id : 0, email : '', pass: '', direccion: '', perfil : 'user', telefono: '' });

  constructor(private httpClient : HttpClient) {
    this.data$ = this.data.asObservable();
    this.getAll().subscribe(alumnos => {
      this.data.next(alumnos);
    });

    this.logueado$ = this.logueado.asObservable();
    this.logueado.next(this._logueado);

    this.usuarioLogueado$ = this.usuarioLogueado.asObservable();
    this.usuarioLogueado.next(this._usuarioLogueado);

   }

   public setLogueado(logueado : boolean, usuarioLogueado : Usuario){
    this.usuarioLogueado.next(usuarioLogueado);
    this.logueado.next(logueado);
   }
   public getUsuarioLogueado() : Observable<Usuario> {
    return this.usuarioLogueado.asObservable();
   }
   public getLogueado() : Observable<boolean> {
    return this.logueado.asObservable();
   }
   public desloguear(){
    this.logueado.next(false);
   }

   public getAll() : Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(environment.baseUrl + 'usuarios');
   }

   public loguear(email : string, pass : string): Observable<Usuario> {
    return this.httpClient.get<Usuario[]>(environment.baseUrl + 'usuarios').pipe(map((value : Usuario[]) => value.filter(c => c.email == email && c.pass == pass)[0]));
   }

   public getById(id: number) : Observable<Usuario> {
    return this.httpClient.get<Usuario[]>(environment.baseUrl + 'usuarios').pipe(map((value : Usuario[]) => value.filter(c => c.id == id)[0]));
   }

   public add(alumno : Usuario){
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

  public update(alumno : Usuario) {
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