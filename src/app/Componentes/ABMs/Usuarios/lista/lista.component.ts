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
    this.Profesor$ = this.service.data$;
    this.Profesor$.subscribe((elementos) => {
      this.Profesores = elementos;
    })
  }

  actualizar(id : number) : void {
    this.router.navigate(['/home/usuario/Update/' + id])
  }
  
  remover(id : number) : void {
    this.router.navigate(['/home/usuario/Delete/' + id])
  }

  CrearNuevo() : void {
    this.router.navigate(['/home/usuario/Create'])
  }

}
