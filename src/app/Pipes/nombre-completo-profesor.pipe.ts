import { Pipe, PipeTransform } from '@angular/core';
import { Profesor } from '../Interfaces/IProfesor';

@Pipe({
  name: 'nombreCompletoProfesor'
})
export class NombreCompletoProfesorPipe implements PipeTransform {

  transform(value: Profesor, ...args: unknown[]): unknown {
    return value.nombre + " " + value.apellido;
  }

}
