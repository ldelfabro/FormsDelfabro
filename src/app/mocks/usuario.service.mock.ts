import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";
import { Usuario } from "../Interfaces/IUsuario";

export class UsuarioServiceMock {

    public data$ : Observable<Usuario[]>;
    private data = new BehaviorSubject<Usuario[]>([]);

    constructor() {
        this.data$ = this.data.asObservable();
        this.getAll().subscribe(alumnos => {
          this.data.next(alumnos);
        });
    }

    public getAll() : Observable<Usuario[]> {
        return of([ { nombre : '', apellido : '',  id : 0, email : '', pass: '' }]);
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


}