import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../Interfaces/IAlumno';

@Pipe({
  name: 'nombreCompletoAlumno'
})
export class NombreCompletoAlumnoPipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): unknown {
    return value.nombre + " " + value.apellido;
  }

}
