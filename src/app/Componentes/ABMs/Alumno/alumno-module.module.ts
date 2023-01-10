import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnoComponent } from './lista-alumno/lista-alumno.component';
import { IndexAlumnoComponent } from './index-alumno/index-alumno.component';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModuleModule } from 'src/app/Pipes/pipe-module.module';
import { AlumnoModuleRoutingModule } from './alumno-module-routing.module';
import { CursoServiceService } from '../../../Services/curso-service.service';

@NgModule({
  declarations: [
    ListaAlumnoComponent,
    IndexAlumnoComponent,
    AltaAlumnoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModuleModule,
    AlumnoModuleRoutingModule
    ]
})
export class AlumnoModuleModule { }
