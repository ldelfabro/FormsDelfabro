import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alumno } from 'src/app/Interfaces/IAlumno';

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.css']
})
export class ListaAlumnoComponent implements OnInit {

  @Input() Alumnos : Alumno [];
  @Output() AlumnoSeleccionadoId = new EventEmitter<number>();
  @Output() AlumnoSeleccionadoRemoverId = new EventEmitter<number>();

  displayedColumns: string[] = ['id','editar','remover', 'nombre', 'telefono', 'fechaNacimiento', 'email', 'provincia', 'localidad'];

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(id : number) : void {
    this.AlumnoSeleccionadoId.emit(id);
  }
  remover(id : number) : void {
    this.AlumnoSeleccionadoRemoverId.emit(id);
  }
}
