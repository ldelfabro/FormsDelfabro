import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaProfesorComponent } from './lista-profesor/lista.component';
import { IndexProfesorComponent } from './index-profesor/index.component';
import { AbmProfesorComponent } from './abm-profesor/abm-profesor.component';

const rutas : Routes = [
  { path : 'Profesor', component : IndexProfesorComponent, children : [
    { path: 'Index', component : ListaProfesorComponent },
    { path: 'Update/:parametro', component : AbmProfesorComponent },
    { path: 'Delete/:parametro', component : AbmProfesorComponent }]
  }
]

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
export class ProfesorModuleRoutingModule { }
