import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../Interfaces/IUsuario';

@Pipe({
  name: 'nombreCompletoProfesor'
})
export class NombreCompletoProfesorPipe implements PipeTransform {

  transform(value: Usuario, ...args: unknown[]): unknown {
    return value.nombre + " " + value.apellido;
  }

}
