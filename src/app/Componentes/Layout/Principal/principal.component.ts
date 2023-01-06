import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/Interfaces/ICurso';
import { CursoServiceService } from '../../../Services/curso-service.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrimerEntregableComponent implements OnInit {

  public Curso : Curso;
  public evento : string = 'ABMINICIO';
  constructor(private cursoService : CursoServiceService) { }

  ngOnInit(): void {

    this.Curso = this.cursoService.obtenerDatos();

  }

  eventoSeleccionado(evento:string) : void {
    this.evento = evento;
  }


}
