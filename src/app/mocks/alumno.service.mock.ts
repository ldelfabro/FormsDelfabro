import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";
import { Alumno } from "../Interfaces/IAlumno";

export class AlumnoServiceMock {

    public data$ : Observable<Alumno[]>;
    private data = new BehaviorSubject<Alumno[]>([]);
  
    constructor() {
        this.data$ = this.data.asObservable();
        this.getAll().subscribe(alumnos => {
          this.data.next(alumnos);
        });
  
     }

     public getAll() : Observable<Alumno[]> {
        return of([{ nombre : '', apellido : '', telefono : '', id : 0, email : '', fechaNacimiento : new Date(), provincia : '', localidad : '' }]);
    }

    public add(alumno : Alumno){
        let nuevaLista = this.data.getValue();
        nuevaLista.push(alumno);
        this.data.next(nuevaLista);
    }
    
    public update(alumno : Alumno) {
       let nuevaLista = this.data.getValue().map(p => p.id === alumno.id ? alumno : p);
       this.data.next(nuevaLista);
    }
    
    public remove(id: number) {
      let nuevaLista = this.data.getValue().filter( p => p.id !== id);
      this.data.next(nuevaLista);
    }
}