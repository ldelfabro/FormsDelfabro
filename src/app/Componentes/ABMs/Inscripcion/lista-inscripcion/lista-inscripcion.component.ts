import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/Interfaces/ICurso';
import { Inscripcion } from 'src/app/Interfaces/IInscripciones';
import { CursoService } from 'src/app/Services/curso.service';
import { InscripcionService } from 'src/app/Services/inscripcion.service';

@Component({
  selector: 'app-lista-inscripcion',
  templateUrl: './lista-inscripcion.component.html',
  styleUrls: ['./lista-inscripcion.component.css']
})
export class ListaInscripcionComponent implements OnInit {

  Inscripciones : Inscripcion [];
  Inscripciones$ : Observable<Inscripcion[]>;

  Cursos : Curso [];
  Cursos$ : Observable<Curso[]>;

  displayedColumns: string[] = [ 'legajo', 'nombre', 'comision'];

  constructor(private inscripcionService: InscripcionService, private cursoService: CursoService) { 
    
     this.Cursos$ = this.cursoService.data$;
     this.Cursos$.subscribe((value) => {
       this.Cursos = value;
     });

  }

  ngOnInit(): void {
  }
  CrearNuevo() {
  }
  Actualizar (id: number) {
  }
  Eliminar (id: number) {
  }
}
