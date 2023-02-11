import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaInscripcionComponent } from './lista-inscripcion/lista-inscripcion.component';

const rutas : Routes = [
  { path : '', component : IndexComponent, children : [ 
     { path: 'Index', component : ListaInscripcionComponent }
    ]
}]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ],   
  exports: [
    RouterModule
  ]
})
export class InscripcionRoutingModule { }
