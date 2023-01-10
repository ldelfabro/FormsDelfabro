import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexCursoComponent } from './index-curso/index-curso.component';
import { ListaCursoComponent } from './lista-curso/lista-curso.component';
import { AbmCursoComponent } from './abm-curso/abm-curso.component';

const rutas : Routes = [
  { path : 'Curso', component : IndexCursoComponent, children : [
  { path: 'Index', component : ListaCursoComponent },
  { path: 'Create', component : AbmCursoComponent },
  { path: 'Update/:parametro', component : AbmCursoComponent },
  { path: 'Delete/:parametro', component : AbmCursoComponent }]
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
export class CursoRoutingModule { }
