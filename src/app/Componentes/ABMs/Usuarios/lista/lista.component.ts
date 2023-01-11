import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profesor } from 'src/app/Interfaces/IProfesor';
import { ProfesorService } from 'src/app/Services/profesor.service';

@Component({
  selector: 'app-profesor-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  Profesores : Profesor [];
  Profesor$ : Observable<Profesor[]>;

  displayedColumns: string[] = ['id','editar','remover', 'nombre', 'email'];

  constructor(public service: ProfesorService,  private router : Router) { }

  ngOnInit(): void {
    this.Profesor$ = this.service.getAll();

    this.Profesor$.subscribe((value) => {
      this.Profesores = value;
    })
  }

  actualizar(id : number) : void {
    this.router.navigate(['Profesor/Update/' + id])
  }
  remover(id : number) : void {
    this.router.navigate(['Profesor/Delete/' + id])
  }
}
