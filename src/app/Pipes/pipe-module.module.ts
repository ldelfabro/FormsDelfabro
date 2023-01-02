import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreCompletoProfesorPipe } from './nombre-completo-profesor.pipe';
import { NombreCompletoAlumnoPipe } from './nombre-completo-alumno.pipe';
import { ArraySortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    NombreCompletoAlumnoPipe,
    NombreCompletoProfesorPipe,
    ArraySortPipe
  ],
  imports: [
    CommonModule
  ],
   exports : [
    NombreCompletoAlumnoPipe,
    NombreCompletoProfesorPipe,
    ArraySortPipe
   ]
})

export class PipeModuleModule { }
