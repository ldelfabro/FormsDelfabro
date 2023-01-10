import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexProfesorComponent } from './index-profesor/index.component';
import { ListaProfesorComponent } from './lista/lista.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModuleModule } from 'src/app/Pipes/pipe-module.module';
import { RouterModule } from '@angular/router';
import { ProfesorModuleRoutingModule } from './profesor-module-routing.module';
import { AbmProfesorComponent } from './abm-profesor/abm-profesor.component';

@NgModule({
  declarations: [
    IndexProfesorComponent,
    ListaProfesorComponent,
    AbmProfesorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModuleModule,
    ProfesorModuleRoutingModule
  ]
})
export class ProfesorModuleModule { }
