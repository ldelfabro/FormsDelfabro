import { Component, Input, OnInit } from '@angular/core';
import { Profesor } from 'src/app/Interfaces/IProfesor';

@Component({
  selector: 'app-profesor-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @Input() Profesores : Profesor [];

  constructor() { }

  ngOnInit(): void {
  }

}
