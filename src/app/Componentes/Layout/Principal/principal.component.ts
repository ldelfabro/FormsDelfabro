import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/Interfaces/ICurso';
import { CursoServiceService } from '../../../Services/curso-service.service';
import { debounceTime, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrimerEntregableComponent implements OnInit {

  public Curse : Observable<Curso>
  public Curso : Curso;
  public evento : string = 'ABMINICIO';
  constructor(private cursoService : CursoServiceService) { 
    this.Curso = { id : 0, alumnos : [], profesor : { id: 0, apellido : "", nombre : "", email : "",pass : ""}, profesores : [], materias : [], nombre : "", notas: []}
  }

  ngOnInit(): void {


    this.Curse = this.cursoService.getCurso();
    this.Curse.subscribe(curso => this.Curso = curso);
       
  }


}
