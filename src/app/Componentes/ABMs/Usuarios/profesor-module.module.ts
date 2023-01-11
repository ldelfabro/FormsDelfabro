import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexUsuarioComponent } from './index-usuarios/index.component';
import { ListaUsuarioComponent } from './lista/lista.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModuleModule } from 'src/app/Pipes/pipe-module.module';
import { RouterModule } from '@angular/router';
import { UsuarioModuleRoutingModule } from './usuario-module-routing.module';
import {  AbmUsuarioComponent } from './abm-usuarios/abm-usuario.component';

@NgModule({
  declarations: [
    IndexUsuarioComponent,
    ListaUsuarioComponent,
    AbmUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModuleModule,
    UsuarioModuleRoutingModule
  ]
})
export class UsuarioModuleModule { }
