import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexCursoComponent } from './index-curso/index-curso.component';
import { ListaCursoComponent } from './lista-curso/lista-curso.component';
import { AbmCursoComponent } from './abm-curso/abm-curso.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModuleModule } from 'src/app/Pipes/pipe-module.module';
import { CursoRoutingModule } from './curso-routing.module';


@NgModule({
  declarations: [
    IndexCursoComponent,
    ListaCursoComponent,
    AbmCursoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModuleModule,
    CursoRoutingModule
  ]
})
export class CursoModule { }
