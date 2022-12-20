import { Component, OnInit, Input } from '@angular/core';
import { Profesor } from 'src/app/Interfaces/IProfesor';

@Component({
  selector: 'app-profesor-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() Profesores : Profesor [];
  displayedColumns: string[] = ['id','icon', 'nombre', 'email'];

  constructor() { }

  ngOnInit(): void {
  }

  pendiente() : void {
    alert('Pendiente de implementación')
  }

}
