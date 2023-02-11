import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/Interfaces/ICurso';
import {  Observable } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrimerEntregableComponent implements OnInit {

  public evento : string = 'ABMINICIO';
  constructor() { 
  }

  ngOnInit(): void {


       
  }


}
