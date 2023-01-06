import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ListaComponent } from './lista/lista.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModuleModule } from 'src/app/Pipes/pipe-module.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    IndexComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModuleModule
  ]
})
export class ProfesorModuleModule { }
