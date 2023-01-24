import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/Interfaces/ICurso';
import {  Observable } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrimerEntregableComponent implements OnInit {

  public Curse : Observable<Curso>
  public Curso : Curso;
  public evento : string = 'ABMINICIO';
  constructor() { 
    this.Curso = { descripcion : '', comision: '', id : 0, profesor : '', nombre : "", cantidadClases : 0, cantidadHoras : 0 }
  }

  ngOnInit(): void {


       
  }


}
