import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscripcion-profesores',
  templateUrl: './inscripcion-profesores.component.html',
  styleUrls: ['./inscripcion-profesores.component.css']
})
export class InscripcionProfesoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pendienteImplementacion() : void {
    alert("Pendiente de implementación")
  }

}
