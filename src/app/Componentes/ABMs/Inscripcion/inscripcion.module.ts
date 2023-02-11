import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { InscripcionRoutingModule } from './inscripcion-routing.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModuleModule } from 'src/app/Pipes/pipe-module.module';
import { InscribirComponent } from './inscribir/inscribir.component';
import { ListaInscripcionComponent } from './lista-inscripcion/lista-inscripcion.component';



@NgModule({
  declarations: [
    IndexComponent,
    InscribirComponent,
    ListaInscripcionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModuleModule,
    InscripcionRoutingModule
  ]
})
export class InscripcionModule { }
