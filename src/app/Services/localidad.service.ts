import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { Localidad } from '../Interfaces/ILocalidad';
import { Provincia } from '../Interfaces/IProvincia';

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {

  constructor(private http: HttpClient) {}

  buscarProvincia() : Observable<Provincia[]>{
    return this.http.get('https://apis.datos.gob.ar/georef/api/provincias', {
      params: {
        campos: 'id,nombre'
     }
    }).pipe(map((value : any) => value.provincias.sort()));
  }

  buscarLocalidad(provincia : string) : Observable<Localidad[]>{
    return this.http.get('https://apis.datos.gob.ar/georef/api/localidades', {
      params: {
        campos: 'id,nombre',
        max: '1000',
        provincia: provincia
      }
    }).pipe(map((value : any) => value.localidades.sort()));
  }

  public getFecha() : Observable<Date>{
    return interval(1000).pipe(map(_ => new Date()));
  }

}
