import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CursoServiceService } from '../../../Services/curso-service.service';
import { LocalidadService } from '../../../Services/localidad.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public fechaObservable: Observable<Date>;

  constructor(public localidadService : LocalidadService) { }

  ngOnInit(): void {

    this.fechaObservable = this.localidadService.getFecha();


  }

}
