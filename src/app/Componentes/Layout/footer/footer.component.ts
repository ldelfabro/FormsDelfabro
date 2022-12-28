import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CursoServiceService } from '../../../Services/curso-service.service';
import { LocalidadService } from '../../../Services/localidad.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  public fechaObservable: Observable<Date>;
  private suscripcion : Subscription;

  constructor(public localidadService : LocalidadService) { }

  ngOnInit(): void {

    this.fechaObservable = this.localidadService.getFecha();
    
    this.suscripcion = this.localidadService.getFecha().subscribe(value => 
      {
        console.log("me estoy ejecutando");
      })

  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

}
