import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, map, Observable, of } from "rxjs";
import { Usuario } from "../Interfaces/IUsuario";

export class UsuarioServiceMock {

    public data$ : Observable<Usuario[]>;
    private data = new BehaviorSubject<Usuario[]>([]);
    public _logueado : boolean = false;
    public logueado$ : Observable<boolean>;
    private logueado = new BehaviorSubject<boolean>(false);
  
    constructor() {
        this.data$ = this.data.asObservable();
        this.getAll().subscribe(alumnos => {
          this.data.next(alumnos);
        });

        this.logueado$ = this.logueado.asObservable();
        this.logueado.next(this._logueado);
    
    }

    public getAll() : Observable<Usuario[]> {
        return of([ { nombre : 'test', apellido : 'test',  id : 1, email : 'test@test', pass: 'test' }]);
    }

    public add(alumno : Usuario){
        let nuevaLista = this.data.getValue();
        nuevaLista.push(alumno);
        this.data.next(nuevaLista);
    }
    
    public update(alumno : Usuario) {
       let nuevaLista = this.data.getValue().map(p => p.id === alumno.id ? alumno : p);
       this.data.next(nuevaLista);
    }
    
    public remove(id: number) {
      let nuevaLista = this.data.getValue().filter( p => p.id !== id);
      this.data.next(nuevaLista);
    }

    public setLogueado(logueado : boolean){
      this.logueado.next(logueado);
     }
     public getLogueado() : Observable<boolean> {
      return this.logueado.asObservable();
     }
     public desloguear(){
      this.logueado.next(false);
     }
     public loguear(email : string, pass : string): Observable<Usuario> {
      return this.getAll().pipe(map((value : Usuario[]) => value.filter(c => c.email == email && c.pass == pass)[0]));
     }
  
}