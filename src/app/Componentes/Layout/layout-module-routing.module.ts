import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from '../ABMs/Profesor/index/index.component';
import { IndexAlumnoComponent } from '../ABMs/Alumno/index-alumno/index-alumno.component';
import { RouterModule, Routes } from '@angular/router';
import { MiddleComponent } from './middle/middle.component';

const rutas : Routes = [
  { path: '', component : MiddleComponent },
  { path: 'Alumno', component : IndexAlumnoComponent },
  { path: 'Profesor', component : IndexComponent }
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
export class LayoutModuleRoutingModule { }
