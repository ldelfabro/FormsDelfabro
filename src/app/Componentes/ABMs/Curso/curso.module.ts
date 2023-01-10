import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexCursoComponent } from './index-curso/index-curso.component';
import { ListaCursoComponent } from './lista-curso/lista-curso.component';
import { AbmCursoComponent } from './abm-curso/abm-curso.component';



@NgModule({
  declarations: [
    IndexCursoComponent,
    ListaCursoComponent,
    AbmCursoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CursoModule { }
