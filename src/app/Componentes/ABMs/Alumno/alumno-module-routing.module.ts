import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';
import { ListaAlumnoComponent } from './lista-alumno/lista-alumno.component';

const rutas : Routes = [
  { path : '' , children : [
  { path: 'Index', component : ListaAlumnoComponent },
  { path: 'Create', component : AltaAlumnoComponent },
  { path: 'Update/:parametro', component : AltaAlumnoComponent },
  { path: 'Delete/:parametro', component : AltaAlumnoComponent }
]
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})

export class AlumnoModuleRoutingModule { }
